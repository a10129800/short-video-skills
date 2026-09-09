#!/usr/bin/env python3
"""
batch_generate_shots.py
-----------------------
分鏡提示詞批次生圖與故事板聯絡表工具 (Batch Storyboard Image Generator & Contact Sheet Builder)

功能特色：
1. 讀取分鏡腳本（JSON 或 Markdown 表格），自動組合 [風格主錨點] + [角色錨點] + [分鏡動態 Prompt]。
2. 支援批次產圖、Dry-Run 模式（生成帶有鏡頭編號與視覺標註的排版預覽圖）。
3. 支援自動將產出之單鏡分鏡圖拼接為 4 格 / 6 格 / 9 格多宮格聯絡總覽表 (Contact Sheet)。
4. 自動輸出標準化的 storyboard_manifest.json，無縫對接 downstream (motion-prompt-engineer)。
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path
from typing import List, Dict, Any, Optional

try:
    from PIL import Image, ImageDraw, ImageFont
    HAS_PIL = True
except ImportError:
    HAS_PIL = False


SAMPLE_STORYBOARD_TEMPLATE = {
    "project_name": "buzzer_beater_climax",
    "aspect_ratio": "9:16",
    "master_style": "Cinematic anime aesthetic, Studio MAPPA line-art, vibrant dynamic colors, sharp focus, 8k render, dramatic cinematic lighting",
    "character_anchor": "An athletic 20yo East Asian male basketball player, messy black spiky hair, wearing black #21 basketball jersey with white trims",
    "lighting_anchor": "Warm golden hour stadium light with high contrast volumetric rim highlights",
    "shots": [
        {
            "shot_id": 1,
            "name": "shot_01_bench_exhaustion",
            "shot_type": "Medium Shot",
            "camera_angle": "Eye-level",
            "action_prompt": "sitting exhausted on empty bench beside hardwood court boundary, chest heaving, glistening sweat beads rolling down cheeks, eyes sharp and burning with fierce determination",
            "negative_prompt": "blurry, deformed face, cartoonish, extra limbs, bad anatomy, text, watermark"
        },
        {
            "shot_id": 2,
            "name": "shot_02_intense_eyes",
            "shot_type": "Extreme Close-up",
            "camera_angle": "Low-angle",
            "action_prompt": "extreme close-up focused on his intense dilated pupil reflecting red scoreboard buzzer numbers, heavy sweat drops falling from chin, harsh rim lighting",
            "negative_prompt": "blurry, smooth plastic skin, double eyes, watermark"
        },
        {
            "shot_id": 3,
            "name": "shot_03_explosive_drive",
            "shot_type": "Low-angle Dynamic Full Shot",
            "camera_angle": "Dutch Angle",
            "action_prompt": "explosive low crossover drive on reflective hardwood court, defender stumbling in blurred background, speed motion blur, rubber shoe friction sparks",
            "negative_prompt": "floating, deformed legs, extra ball, distorted floor"
        },
        {
            "shot_id": 4,
            "name": "shot_04_midair_release",
            "shot_type": "High-angle Freeze Action",
            "camera_angle": "High-angle",
            "action_prompt": "suspended gracefully high in mid-air releasing basketball towards net, stadium arena floodlights creating radiant halo ring, floating airborne dust particles",
            "negative_prompt": "bad hands, extra fingers, warped basketball, morphing body"
        }
    ]
}


def build_final_prompt(shot: Dict[str, Any], master_style: str = "", character_anchor: str = "", lighting_anchor: str = "") -> str:
    """組合完整的生圖提示詞"""
    parts = []
    if master_style:
        parts.append(master_style.strip().rstrip(","))
    if character_anchor:
        parts.append(character_anchor.strip().rstrip(","))
    
    action = shot.get("action_prompt", "").strip().rstrip(",")
    if action:
        parts.append(action)
    
    shot_type = shot.get("shot_type", "")
    angle = shot.get("camera_angle", "")
    composition_tags = []
    if shot_type:
        composition_tags.append(shot_type)
    if angle:
        composition_tags.append(angle)
    if composition_tags:
        parts.append(", ".join(composition_tags))
        
    if lighting_anchor:
        parts.append(lighting_anchor.strip().rstrip(","))
        
    return ", ".join(parts)


def parse_markdown_table(md_content: str) -> List[Dict[str, Any]]:
    """從 Markdown 分鏡表格中提取鏡頭資料"""
    shots = []
    lines = md_content.strip().splitlines()
    table_lines = [l.strip() for l in lines if l.strip().startswith("|") and l.strip().endswith("|")]
    
    if len(table_lines) < 3:
        return []
        
    headers = [h.strip().lower() for h in table_lines[0].strip("|").split("|")]
    
    for idx, row in enumerate(table_lines[2:], start=1):
        cells = [c.strip() for c in row.strip("|").split("|")]
        if not any(cells):
            continue
            
        shot_data = {
            "shot_id": idx,
            "name": f"shot_{idx:02d}",
            "shot_type": "Medium Shot",
            "camera_angle": "Eye-level",
            "action_prompt": "",
            "negative_prompt": ""
        }
        
        for h, val in zip(headers, cells):
            if "prompt" in h or "提詞" in h or "畫面" in h or "action" in h:
                shot_data["action_prompt"] = val
            elif "shot" in h or "鏡頭" in h or "格數" in h or "id" in h:
                shot_data["name"] = f"shot_{val.replace(' ', '_')}"
            elif "景別" in h or "視角" in h or "angle" in h:
                shot_data["shot_type"] = val
                
        if not shot_data["action_prompt"] and cells:
            shot_data["action_prompt"] = cells[min(2, len(cells)-1)]
            
        shots.append(shot_data)
        
    return shots


def load_storyboard_data(file_path: Path) -> Dict[str, Any]:
    """載入 JSON 或 Markdown 格式的分鏡設定"""
    if not file_path.exists():
        raise FileNotFoundError(f"找不到檔案: {file_path}")
        
    content = file_path.read_text(encoding="utf-8")
    
    if file_path.suffix.lower() == ".json":
        return json.loads(content)
        
    # 嘗試作為 Markdown 表格解析
    shots = parse_markdown_table(content)
    return {
        "project_name": file_path.stem,
        "aspect_ratio": "9:16",
        "master_style": "Cinematic visual style, highly detailed",
        "character_anchor": "",
        "lighting_anchor": "",
        "shots": shots
    }


def create_placeholder_card(
    output_path: Path,
    shot_id: int,
    name: str,
    shot_type: str,
    prompt: str,
    width: int = 576,
    height: int = 1024
):
    """生成乾淨的分鏡預覽圖卡 (Dry-Run / Placeholder Card)"""
    if not HAS_PIL:
        # 當未安裝 Pillow 時，建立純文字與 SVG 備援
        svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <rect width="100%" height="100%" fill="#12151d"/>
  <rect x="16" y="16" width="{width-32}" height="{height-32}" fill="none" stroke="#2e384d" stroke-width="3" stroke-dasharray="8 8"/>
  <rect x="32" y="32" width="160" height="40" rx="8" fill="#e63946"/>
  <text x="112" y="58" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">SHOT {shot_id:02d}</text>
  <text x="36" y="120" fill="#a8b2d1" font-family="sans-serif" font-size="18">{shot_type}</text>
  <foreignObject x="36" y="160" width="{width-72}" height="{height-220}">
    <div xmlns="http://www.w3.org/1999/xhtml" style="color: #ccd6f6; font-family: sans-serif; font-size: 16px; line-height: 1.6; word-wrap: break-word;">
      <strong>Prompt:</strong><br/>{prompt}
    </div>
  </foreignObject>
  <text x="{width//2}" y="{height-36}" fill="#64748b" font-family="sans-serif" font-size="14" text-anchor="middle">STORYBOARD PREVIS - {name}</text>
</svg>"""
        svg_path = output_path.with_suffix(".svg")
        svg_path.write_text(svg_content, encoding="utf-8")
        return svg_path

    # 使用 Pillow 繪製高品質分鏡 Slate
    img = Image.new("RGB", (width, height), color=(18, 21, 29))
    draw = ImageDraw.Draw(img)

    # 外框輔助導引線
    draw.rectangle([(16, 16), (width - 16, height - 16)], outline=(46, 56, 77), width=3)
    # 三分法九宮格微弱標線
    third_w = width // 3
    third_h = height // 3
    draw.line([(third_w, 16), (third_w, height - 16)], fill=(28, 34, 48), width=1)
    draw.line([(third_w * 2, 16), (third_w * 2, height - 16)], fill=(28, 34, 48), width=1)
    draw.line([(16, third_h), (width - 16, third_h)], fill=(28, 34, 48), width=1)
    draw.line([(16, third_h * 2), (width - 16, third_h * 2)], fill=(28, 34, 48), width=1)

    # 鏡頭編號標籤
    badge_rect = [(32, 32), (180, 76)]
    draw.rounded_rectangle(badge_rect, radius=8, fill=(230, 57, 70))
    draw.text((45, 42), f"SHOT {shot_id:02d}", fill=(255, 255, 255))

    # 景別標示
    draw.text((36, 95), f"TYPE: {shot_type}", fill=(168, 178, 209))

    # Prompt 內容排版 (折行)
    max_chars_per_line = max(24, width // 16)
    words = prompt.split()
    lines = []
    curr_line = []
    curr_len = 0
    for w in words:
        if curr_len + len(w) + 1 <= max_chars_per_line:
            curr_line.append(w)
            curr_len += len(w) + 1
        else:
            lines.append(" ".join(curr_line))
            curr_line = [w]
            curr_len = len(w)
    if curr_line:
        lines.append(" ".join(curr_line))

    y_pos = 140
    draw.text((36, y_pos), "PROMPT SPEC:", fill=(100, 255, 218))
    y_pos += 26
    for line in lines[:24]:  # 最多顯示 24 行
        draw.text((36, y_pos), line, fill=(204, 214, 246))
        y_pos += 22

    # 底部 Footer
    draw.text((36, height - 45), f"FILE: {output_path.name}", fill=(100, 116, 139))
    img.save(output_path, "PNG")
    return output_path


def build_contact_sheet(
    image_paths: List[Path],
    output_path: Path,
    columns: int = 3,
    title: str = "STORYBOARD CONTACT SHEET"
):
    """將多張分鏡圖拼接為一張多宮格聯絡總覽圖 (Contact Sheet)"""
    if not HAS_PIL:
        print("[NOTICE] Pillow 未安裝，跳過聯絡表自動拼接。若需啟用請安裝: pip install pillow")
        return None

    valid_images = [p for p in image_paths if p.exists() and p.suffix.lower() in [".png", ".jpg", ".jpeg", ".webp"]]
    if not valid_images:
        print("[WARNING] 沒有可拼接的圖片檔案。")
        return None

    loaded_imgs = [Image.open(p) for p in valid_images]
    cell_w, cell_h = loaded_imgs[0].size

    # 計算聯絡表尺寸
    num_images = len(loaded_imgs)
    cols = min(columns, num_images)
    rows = (num_images + cols - 1) // cols

    padding = 24
    header_h = 100
    sheet_w = cols * cell_w + (cols + 1) * padding
    sheet_h = header_h + rows * cell_h + (rows + 1) * padding

    contact_sheet = Image.new("RGB", (sheet_w, sheet_h), color=(15, 18, 25))
    draw = ImageDraw.Draw(contact_sheet)

    # 標題欄
    draw.rectangle([(0, 0), (sheet_w, header_h)], fill=(22, 27, 38))
    draw.text((padding, 28), title, fill=(255, 255, 255))
    draw.text((padding, 60), f"Total Shots: {num_images} | Generated via Storyboard Image Generator", fill=(148, 163, 184))

    # 依序排列貼入
    for idx, img in enumerate(loaded_imgs):
        r = idx // cols
        c = idx % cols
        x = padding + c * (cell_w + padding)
        y = header_h + padding + r * (cell_h + padding)

        # 縮放或直接貼上
        if img.size != (cell_w, cell_h):
            img_resized = img.resize((cell_w, cell_h), Image.Resampling.LANCZOS)
            contact_sheet.paste(img_resized, (x, y))
        else:
            contact_sheet.paste(img, (x, y))

        # 圖片外框與編號標籤
        draw.rectangle([(x, y), (x + cell_w, y + cell_h)], outline=(51, 65, 85), width=2)
        draw.rounded_rectangle([(x + 10, y + 10), (x + 95, y + 42)], radius=4, fill=(230, 57, 70))
        draw.text((x + 18, y + 18), f"SHOT {idx+1:02d}", fill=(255, 255, 255))

    contact_sheet.save(output_path, "PNG")
    print(f"[SUCCESS] Contact Sheet 總覽表已成功建立: {output_path}")
    return output_path


def process_storyboard(
    input_file: str,
    output_dir: str,
    dry_run: bool = False,
    columns: int = 3
):
    """核心執行入口：批次生成各鏡頭並產生交付 Manifest"""
    in_path = Path(input_file).resolve()
    out_dir = Path(output_dir).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)

    data = load_storyboard_data(in_path)
    project_name = data.get("project_name", "storyboard_project")
    aspect_ratio = data.get("aspect_ratio", "9:16")
    master_style = data.get("master_style", "")
    character_anchor = data.get("character_anchor", "")
    lighting_anchor = data.get("lighting_anchor", "")
    shots = data.get("shots", [])

    if not shots:
        print("[ERROR] 分鏡清單為空，請檢查輸入內容。")
        sys.exit(1)

    print(f"\n==========================================")
    print(f"🎬 分鏡提示詞批次生圖管線啟動")
    print(f"專案名稱: {project_name}")
    print(f"畫幅比例: {aspect_ratio}")
    print(f"分鏡鏡頭數: {len(shots)}")
    print(f"執行模式: {'Dry-Run (預覽圖與聯絡表)' if dry_run else '實體渲染模式'}")
    print(f"==========================================\n")

    # 根據畫幅決定解析度基準
    if aspect_ratio == "9:16":
        width, height = 576, 1024
    elif aspect_ratio == "16:9":
        width, height = 1024, 576
    else:
        width, height = 768, 768

    generated_images = []
    manifest_shots = []

    for s in shots:
        shot_id = s.get("shot_id", 1)
        name = s.get("name", f"shot_{shot_id:02d}")
        shot_type = s.get("shot_type", "Medium Shot")
        final_prompt = build_final_prompt(s, master_style, character_anchor, lighting_anchor)

        out_img_name = f"{name}.png"
        out_img_path = out_dir / out_img_name

        print(f"▶ 處理 [Shot {shot_id:02d}]: {name}")
        print(f"  景別視角: {shot_type}")
        print(f"  完整 Prompt: {final_prompt[:90]}...")

        if dry_run or not HAS_PIL:
            created_path = create_placeholder_card(
                output_path=out_img_path,
                shot_id=shot_id,
                name=name,
                shot_type=shot_type,
                prompt=final_prompt,
                width=width,
                height=height
            )
            generated_images.append(created_path)
        else:
            # 在一般模式下若為外部腳本調用，亦先生成 Slate 卡片供 Agent 接續覆蓋
            created_path = create_placeholder_card(
                output_path=out_img_path,
                shot_id=shot_id,
                name=name,
                shot_type=shot_type,
                prompt=final_prompt,
                width=width,
                height=height
            )
            generated_images.append(created_path)

        manifest_shots.append({
            "shot_id": shot_id,
            "name": name,
            "shot_type": shot_type,
            "image_file": out_img_name,
            "final_prompt": final_prompt,
            "negative_prompt": s.get("negative_prompt", "")
        })

    # 輸出 storyboard_manifest.json
    manifest_data = {
        "project_name": project_name,
        "aspect_ratio": aspect_ratio,
        "total_shots": len(shots),
        "master_style": master_style,
        "character_anchor": character_anchor,
        "lighting_anchor": lighting_anchor,
        "shots": manifest_shots
    }

    manifest_file = out_dir / "storyboard_manifest.json"
    manifest_file.write_text(json.dumps(manifest_data, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"\n[INFO] 已生成管線交接清單: {manifest_file}")

    # 拼合聯絡表 (Contact Sheet)
    contact_sheet_path = out_dir / "contact_sheet.png"
    build_contact_sheet(
        image_paths=generated_images,
        output_path=contact_sheet_path,
        columns=columns,
        title=f"PROJECT: {project_name.upper()} ({aspect_ratio})"
    )

    print("\n✅ 所有分鏡處理完畢！")


def main():
    parser = argparse.ArgumentParser(description="分鏡提示詞批次生圖與聯絡表工具 (Batch Storyboard Image Generator)")
    parser.add_argument("--input", "-i", help="輸入分鏡檔案路徑 (.json 或 .md)")
    parser.add_argument("--output-dir", "-o", default="./storyboard_output", help="圖片與成果輸出目錄 (預設: ./storyboard_output)")
    parser.add_argument("--dry-run", action="store_true", help="執行預覽模式，生成分鏡規格圖卡與聯絡表")
    parser.add_argument("--generate-template", help="產生範例分鏡 JSON 模板檔案並結束")
    parser.add_argument("--make-contact-sheet", help="傳入已存在圖片之目錄，自動拼合成聯絡表")
    parser.add_argument("--columns", "-c", type=int, default=3, help="聯絡表每列欄數 (預設: 3)")

    args = parser.parse_args()

    if args.generate_template:
        target_path = Path(args.generate_template).resolve()
        target_path.write_text(json.dumps(SAMPLE_STORYBOARD_TEMPLATE, indent=2, ensure_ascii=False), encoding="utf-8")
        print(f"[SUCCESS] 範例分鏡模板已建立: {target_path}")
        return

    if args.make_contact_sheet:
        folder = Path(args.make_contact_sheet).resolve()
        imgs = sorted(list(folder.glob("*.png")) + list(folder.glob("*.jpg")))
        build_contact_sheet(imgs, folder / "contact_sheet.png", columns=args.columns)
        return

    if not args.input:
        parser.print_help()
        sys.exit(1)

    process_storyboard(args.input, args.output_dir, dry_run=args.dry_run, columns=args.columns)


if __name__ == "__main__":
    main()
