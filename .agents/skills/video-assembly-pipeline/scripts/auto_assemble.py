#!/usr/bin/env python3
"""
auto_assemble.py
----------------
短動態影片自動化剪輯合成工具 (Automated Short Video Assembly Tool)
讀取 manifest.json 清單，調用 FFmpeg 批次將視訊鏡頭片段、配音 (Voiceover)、
背景音樂 (BGM) 與字幕快速合成標準 9:16 直式短影音。
"""

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path


SAMPLE_MANIFEST = {
    "project_name": "cyberpunk_sprint_teaser",
    "resolution": {"width": 1080, "height": 1920},
    "fps": 30,
    "shots": [
        {"file": "shot_01.mp4", "duration_sec": 3.0},
        {"file": "shot_02.mp4", "duration_sec": 3.5},
        {"file": "shot_03.mp4", "duration_sec": 4.0},
        {"file": "shot_04.mp4", "duration_sec": 3.5}
    ],
    "audio": {
        "voiceover": {
            "file": "voiceover.mp3",
            "volume": 1.0
        },
        "bgm": {
            "file": "bgm.mp3",
            "volume": 0.25,
            "fade_out_sec": 1.5
        }
    },
    "subtitles": {
        "file": "subtitles.srt",
        "font_size": 18,
        "primary_color": "&H00FFFFFF",
        "outline_color": "&H00000000",
        "margin_v": 180
    }
}


def check_ffmpeg() -> bool:
    """檢查系統環境中是否存在 FFmpeg"""
    return shutil.which("ffmpeg") is not None


def generate_sample_manifest(filepath: str):
    """生成範例 manifest.json 設定檔"""
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(SAMPLE_MANIFEST, f, indent=2, ensure_ascii=False)
    print(f"[SUCCESS] Sample manifest generated at: {filepath}")


def run_command(cmd: list, dry_run: bool = False):
    """執行或列印 Shell 命令"""
    cmd_str = " ".join(f'"{c}"' if " " in c or "=" in c else c for c in cmd)
    if dry_run:
        print(f"[DRY-RUN] {cmd_str}")
        return True

    print(f"[RUNNING] {cmd_str}")
    result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if result.returncode != 0:
        print(f"[ERROR] Command failed with code {result.returncode}:\n{result.stderr}")
        return False
    return True


def assemble_video(manifest_path: str, output_path: str, dry_run: bool = False):
    """根據清單組裝影片"""
    manifest_file = Path(manifest_path).resolve()
    if not manifest_file.exists():
        print(f"[ERROR] Manifest file not found: {manifest_file}")
        sys.exit(1)

    with open(manifest_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    work_dir = manifest_file.parent
    shots = data.get("shots", [])
    if not shots:
        print("[ERROR] No shots defined in manifest.")
        sys.exit(1)

    has_ffmpeg = check_ffmpeg()
    if not has_ffmpeg and not dry_run:
        print("[WARNING] ffmpeg is not found in system PATH. Switching to DRY-RUN mode.")
        dry_run = True

    # 1. 建立 concat 列表文件
    concat_txt_path = work_dir / "temp_concat_list.txt"
    with open(concat_txt_path, "w", encoding="utf-8") as f:
        for s in shots:
            shot_file = (work_dir / s["file"]).as_posix()
            f.write(f"file '{shot_file}'\n")

    print(f"[INFO] Created concat list with {len(shots)} shots.")

    width = data.get("resolution", {}).get("width", 1080)
    height = data.get("resolution", {}).get("height", 1920)
    fps = data.get("fps", 30)

    # 2. 構建 FFmpeg 濾鏡與輸入
    # 輸入 0: concat list
    inputs = ["-f", "concat", "-safe", "0", "-i", str(concat_txt_path)]
    input_count = 1

    audio_cfg = data.get("audio", {})
    vo_cfg = audio_cfg.get("voiceover")
    bgm_cfg = audio_cfg.get("bgm")

    vo_idx = None
    bgm_idx = None

    if vo_cfg and (work_dir / vo_cfg.get("file", "")).exists():
        inputs.extend(["-i", str(work_dir / vo_cfg["file"])])
        vo_idx = input_count
        input_count += 1

    if bgm_cfg and (work_dir / bgm_cfg.get("file", "")).exists():
        inputs.extend(["-i", str(work_dir / bgm_cfg["file"])])
        bgm_idx = input_count
        input_count += 1

    # 視訊縮放成 9:16
    vf_filters = [f"scale={width}:{height}:force_original_aspect_ratio=decrease,pad={width}:{height}:(ow-iw)/2:(oh-ih)/2,fps={fps}"]

    # 字幕
    sub_cfg = data.get("subtitles")
    if sub_cfg and (work_dir / sub_cfg.get("file", "")).exists():
        sub_file = (work_dir / sub_cfg["file"]).as_posix().replace(":", "\\:")
        font_size = sub_cfg.get("font_size", 18)
        margin_v = sub_cfg.get("margin_v", 180)
        vf_filters.append(f"subtitles='{sub_file}':force_style='FontSize={font_size},MarginV={margin_v}'")

    filter_complex = []
    # 影像處理
    filter_complex.append(f"[0:v]{','.join(vf_filters)}[v_out]")

    # 音訊混音
    if vo_idx is not None and bgm_idx is not None:
        bgm_vol = bgm_cfg.get("volume", 0.25)
        vo_vol = vo_cfg.get("volume", 1.0)
        filter_complex.append(
            f"[{bgm_idx}:a]volume={bgm_vol}[bgma];"
            f"[{vo_idx}:a]volume={vo_vol}[voa];"
            f"[voa][bgma]amix=inputs=2:duration=first:dropout_transition=2[a_out]"
        )
        audio_map = ["[a_out]"]
    elif vo_idx is not None:
        audio_map = [f"{vo_idx}:a"]
    elif bgm_idx is not None:
        audio_map = [f"{bgm_idx}:a"]
    else:
        audio_map = ["0:a?"]

    # 組裝完整指令
    cmd = ["ffmpeg", "-y"]
    cmd.extend(inputs)
    cmd.extend(["-filter_complex", ";".join(filter_complex)])
    cmd.extend(["-map", "[v_out]"])
    for am in audio_map:
        cmd.extend(["-map", am])

    cmd.extend([
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "19",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "192k",
        str(output_path)
    ])

    print("\n[INFO] Assembling short video...")
    success = run_command(cmd, dry_run=dry_run)

    if success:
        print(f"\n[DONE] Finished video assembly! Output target: {output_path}")
    else:
        print("\n[FAILED] Assembly process encountered an error.")


def main():
    parser = argparse.ArgumentParser(description="短動態影片自動化剪輯合成工具 (Automated Short Video Assembly)")
    parser.add_argument("--manifest", "-m", default="manifest.json", help="Path to manifest.json file (default: manifest.json)")
    parser.add_argument("--output", "-o", default="output_short.mp4", help="Path to final output mp4 (default: output_short.mp4)")
    parser.add_argument("--dry-run", action="store_true", help="Print FFmpeg command without executing")
    parser.add_argument("--generate-sample-manifest", action="store_true", help="Generate sample manifest.json template and exit")

    args = parser.parse_args()

    if args.generate_sample_manifest:
        generate_sample_manifest("manifest.json")
        return

    assemble_video(args.manifest, args.output, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
