---
name: video-assembly-pipeline
description: >-
  短動態影片剪輯合成與自動化管線專家。當需要將生成的視訊鏡頭、配音音軌、BGM、SFX 與動態字幕組裝為最終 9:16 影片成品，或需要編寫 FFmpeg / Python 自動化合成腳本與 CapCut 剪映規範時使用此 Skill。
---

# Video Assembly Pipeline (剪輯合成與自動化管線)

本 Skill 是短動態影片生產流水線的**終端整合引擎**。負責將前序技能產出的視訊片段（Video Shots）、配音（TTS）、音效（SFX）、背景音樂（BGM）與字卡文本，透過符合短影音平台規格的直式版面、動態字幕與自動化剪輯腳本（FFmpeg / Python）組裝為最終發布級成品。

可直接執行的自動組裝腳本位於：[auto_assemble.py](./scripts/auto_assemble.py)。

---

## 一、 9:16 直式安全區規範 (Vertical Safe Zone)

短影音平台（TikTok / Instagram Reels / YouTube Shorts）有大量覆蓋在畫面上的 UI 元件（讚數、留言、轉發、標題文案、音樂標題、手機瀏海等）。剪輯排版必須嚴格限制在安全區內：

```text
┌─────────────────────────────────────────────────────────┐
│               頂部危險區 (Top Hazard Zone)               │  <- 150px: 手機狀態列、搜尋列
├─────────────────────────────────────────────────────────┤
│                                                         │
│                                                   ┌───┐ │
│                     【核心視覺安全區】             │讚 │ │
│                                                   │   │ │
│                 - 主體動作焦點                    │評 │ │  <- 右側危險區: 120px
│                 - 大標題 / 核心構圖               │   │ │     (按讚、留言、轉發)
│                                                   │轉 │ │
│                                                   └───┘ │
│                     【動態字幕核心區】                   │
│             (位於 Y: 60% ~ 75% 處，居中排版)            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│               底部危險區 (Bottom Hazard Zone)            │  <- 280px: 標題、Hashtags、音樂捲軸
└─────────────────────────────────────────────────────────┘
```

* **解析度標準**：`1080 x 1920` (9:16) 或 `720 x 1280`。
* **畫面幀率**：`30 fps` 或 `60 fps`（快節奏動作片強烈建議 60 fps）。

---

## 二、 爆款動態字幕規範 (Dynamic Motion Subtitles)

1. **單行字數**：嚴格限制每屏不超過 **6 ~ 10 個中文字**（或 4 ~ 6 個英文單詞），避免遮擋畫面。
2. **顏色階層**：
   - 基準字色：純白 `#FFFFFF`，帶 2~3px 黑色描邊（Black Stroke `#000000`）與半透明陰影。
   - 關鍵字高亮：黃色 `#FFE600`、霓虹青 `#00F0FF` 或烈火橘紅 `#FF3B30`。
3. **動畫節奏**：
   - 彈跳縮放入場（Scale 110% -> 100%）。
   - 與 TTS 語音發音絕對同步（精確到每 0.2 秒換詞）。

---

## 三、 FFmpeg 自動組裝命令核心模板

### 1. 視訊片段無損快速拼接 (Concatenation)
建立 `inputs.txt`：
```text
file 'shot_01.mp4'
file 'shot_02.mp4'
file 'shot_03.mp4'
```
執行拼接與音畫時間對齊：
```bash
ffmpeg -f concat -safe 0 -i inputs.txt -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p video_concat.mp4
```

### 2. 視訊 + 配音 (Voiceover) + 背景音樂 (BGM Ducking) 混音
將背景音樂自動閃避配音（Ducking）並合成：
```bash
ffmpeg -i video_concat.mp4 -i voiceover.mp3 -i bgm.mp3 \
-filter_complex "[2:a]volume=0.3[bgm_vol];[1:a][bgm_vol]amix=inputs=2:duration=first:dropout_transition=2[aout]" \
-map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k final_with_audio.mp4
```

### 3. 動態燒錄字幕 (Burn-in Subtitles)
```bash
ffmpeg -i final_with_audio.mp4 -vf "subtitles=subtitles.srt:force_style='FontName=Arial,FontSize=18,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=2,Alignment=2,MarginV=180'" -c:a copy final_master.mp4
```

---

## 四、 執行工具腳本 (Auto Assembly Script)

本 Skill 附帶完整自動化組裝腳本 [auto_assemble.py](./scripts/auto_assemble.py)。使用者或 Agent 只需要輸出一個清單設定檔 `manifest.json`，即可一鍵調用 FFmpeg 進行無縫渲染合成。
