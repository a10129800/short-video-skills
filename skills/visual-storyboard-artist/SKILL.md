---
name: visual-storyboard-artist
description: >-
  電影、動漫與影音視覺分鏡師（Storyboard Artist）。當使用者需要將文字劇本或故事概念轉化為專業導演視覺分鏡表、多宮格分鏡圖（4格/6格/9格 Storyboard Sheet）、關鍵影格提示詞（Midjourney/FLUX/DALL-E 3）、鏡頭構圖標記與運鏡動態指示時使用此 Skill。
---

# Visual Storyboard Artist (視覺分鏡師與故事板設計專家)

本 Skill 專精於將抽象劇本、短影音腳本或文字故事，轉譯為具備**「導演視覺語法、鏡頭構圖、攝影機運動箭頭指示與 AI 生圖提示詞」**的工業級視覺分鏡圖（Storyboard）。

無論是**傳統電影手繪線稿分鏡**、**日本動漫繪分鏡 (絵コンテ / E-Konte)**、**9:16 直式短影音圖卡**，還是**電影級彩色關鍵影格 (Color Keyframes)**，皆可透過本 Skill 標準化產出。

---

## 核心職責與專業能力

1. **鏡頭語言與構圖拆解 (Cinematography & Framing)**：
   * 精準配置景別（極遠景 ELS、全景 WS、中景 MS、特寫 CU、極度特寫 ECU）。
   * 運用經典構圖法則（三分構圖法、導引線、荷蘭角傾斜、過肩鏡頭 OTS、負空間、低角度仰視壓迫等）。
2. **攝影機動態箭頭標記 (Camera Motion Indicators)**：
   * 在分鏡圖中加入標準導演標記（推鏡 Push-In、拉鏡 Pull-Out、橫搖 Pan、垂直搖 Tilt、升降 Crane、跟隨追拍 Tracking）。
3. **多宮格分鏡表 AI 算圖提示詞 (Multi-Panel Storyboard Prompts)**：
   * 專精於 Midjourney (`v6`)、FLUX.1、DALL-E 3 的多宮格排版語法，一鍵生成 4 格、6 格或 9 格帶有分鏡線、黑白手繪線稿或電影質感的總覽圖。
4. **角色外觀與場景一致性錨定 (Visual Consistency Anchors)**：
   * 確保同一個分鏡序列中，主角服裝、髮型、體型特徵及光影方向跨鏡頭維持一致。

---

## 四大分鏡風格選型 (Visual Style Presets)

依據專案類型與使用場景，靈活切換以下 4 種分鏡圖美學風格：

| 風格代號 | 風格名稱 | 視覺特徵與適用場景 | Prompt 核心修飾語 (Style Tags) |
| :--- | :--- | :--- | :--- |
| **風格 A** | **經典電影手繪線稿<br>(Classic Film Sketch)** | 好萊塢工業標準，粗細炭筆/鉛筆線條，陰影斜線排線（Cross-hatching），帶有黃褐色或紙張灰底，附帶紅色攝影機運動箭頭與手寫導演註釋。 | `cinematic storyboard sketch, rough pencil line art, cross-hatching shadows, director camera motion arrows, kraft paper texture, professional film production design` |
| **風格 B** | **日系動漫繪分鏡<br>(Anime E-Konte / 絵コンテ)** | 宮崎駿、新海誠、MAPPA 風格的動畫分鏡本，乾淨流暢的日漫墨線，分鏡框旁附帶日式假名與秒數標註，注重極限動態線與面部表情張力。 | `Japanese anime storyboard, e-konte layout, authentic manga pencil draft, dynamic speed lines, framing boxes with timestamp markings, Studio Ghibli style production sketches` |
| **風格 C** | **3D 灰模/動態預演<br>(3D Previs Clay)** | 虛幻引擎 (Unreal Engine 5) 灰模白模質感，注重嚴格的透視結構、精確焦段相機視野（FOV）、3D 空間站位與三維光影體積。 | `3D cinematic previs render, clay viewport, Unreal Engine 5 pre-visualization, clean wireframe ambient occlusion, technical camera focal length, precise perspective grid` |
| **風格 D** | **電影彩色氛圍關鍵格<br>(Cinematic Color Keys)** | 包含完整光影、色彩分級（Color Grading）與材質紋理的成片級概念分鏡圖，適合向客戶或製片展示最終成片的色調氛圍。 | `cinematic color keyframe, Panavision 35mm film still, dramatic volumetric rim lighting, photorealistic atmospheric haze, Kodak Vision3 500T color grading, 8k resolution` |

---

## 輸出結構規範 (Standard Output Modules)

每次執行分鏡圖設計任務，嚴格輸出以下四大模組：

### 模組 1：視覺概念與角色/環境錨點 (Visual Anchors)
* **畫幅比例 (Aspect Ratio)**：如 `16:9`（橫式電影/YouTube）、`9:16`（TikTok/Reels 直式短影音）、`2.39:1`（寬銀幕變形鏡頭）。
* **指定分鏡風格**：風格 A、B、C、D 擇一或組合。
* **固定角色錨點 (Character Anchor)**：固定特徵描述（年齡、性別、髮型、標誌性服飾配件）。
* **環境與光影基調 (Lighting Anchor)**：光源方向、冷暖對比、主要場景色系。

---

### 模組 2：導演級分鏡明細表 (Director's Storyboard Sheet)

以精確表格呈現每一個畫格的視聽語法：

| 鏡頭格數 | 景別與視角 (Shot & Angle) | 構圖與主體動態 (Composition & Action) | 運鏡指示與箭頭 (Camera Motion) | 對白與音效 (Dialogue & Audio) |
| :--- | :--- | :--- | :--- | :--- |
| **Panel 01** | **Wide Shot (全景)**<br>Eye-level (平視) | 三分構圖，主角站在右側三分線，身後是空曠體育館，夕陽拉長影子。 | `[Slow Push-in ➔]`<br>鏡頭向主角緩慢向前推進。 | **VO**：「那一整年，我都是板凳席的觀眾。」<br>🔊 *空曠場館的自然回音* |
| **Panel 02** | **Extreme Close-up (極特寫)**<br>Low-angle (仰角) | 焦點在主角充血的瞳孔與下巴懸掛的汗滴，背景完全虛化（淺景深）。 | `[Static ⊙]`<br>固定鏡頭，微觀抓取呼吸起伏。 | **VO**：「但我不是來這裡遞水的。」<br>🔊 *急促沉重的喘息聲* |
| **Panel 03** | **Low-angle Action (低角度全景)**<br>Dutch angle (傾斜角) | 主角橫身飛撲出邊線，身體與地面水平，右手長展撈球，極具張力的透視拉伸。 | `[Tracking Whip ➔➔]`<br>水平急速跟拍，帶有速度線。 | **台詞**：「這球是我的！」<br>🔊 *球鞋橡膠刺耳摩擦爆響* |

---

### 模組 3：多宮格分鏡總覽圖 AI 提示詞 (Multi-Panel Contact Sheet Prompt)

生成一張包含完整劇情脈絡的 **4 格、6 格或 9 格排版總覽圖**（直接複製進 Midjourney / FLUX）：

#### 提示詞結構公式：
$$\text{[Layout \& Grid]} + \text{[Art Style \& Medium]} + \text{[Sequential Scene Actions]} + \text{[Director Marks]} + \text{[Aspect Ratio \& Specs]}$$

#### Midjourney / FLUX 範例：
```text
A professional cinematic 6-panel storyboard contact sheet layout, 3x2 clean grid format with white borders. 
Style: Rough film pencil sketch and dynamic ink line-art with charcoal shading, kraft paper background. 
Each panel sequentially shows:
Panel 1: Wide shot of a young East Asian basketball player #21 sitting lonely on empty bench.
Panel 2: Extreme close-up of his intense determined eyes sweating profusely.
Panel 3: Coach slamming clipboard in frustration, high angle.
Panel 4: Player fiercely sliding into low defensive stance, dynamic motion lines.
Panel 5: Heroic mid-air dive horizontally over sideline boundary to save loose ball.
Panel 6: Close-up of tactical whiteboard writing "STARTER #21", warm morning light rays.
Features visible red directional camera arrows, technical frame markings, rule of thirds guides, handwritten director notes in margins, highly detailed, authentic film pre-production art --ar 16:9 --v 6.0
```

---

### 模組 4：單格重點關鍵影格提示詞 (Single Shot Keyframes)

為本段情節中最高潮、最震撼的 2~3 個關鍵分鏡，產出可直接渲染為**成片級高解析度**的 Prompt：

```text
[Keyframe - Shot 05 魚躍救球]
Cinematic low-angle medium shot, freeze-frame action, an athletic East Asian basketball player in black jersey #21 diving horizontally completely parallel to the hardwood floor outside the court boundary, one arm fully extended clawing at a spinning basketball in mid-air, dynamic motion blur, glistening airborne sweat particles, harsh arena stadium floodlights creating dramatic volumetric rim lights, Kodak Vision3 35mm film grain, photorealistic 8k render --ar 16:9
```

---

## 鏡頭語法與縮寫快速對照表

* **景別 (Shot Sizes)**：
  * `ELS` / `XWS`：Extreme Long Shot（極遠景，交代宏觀環境與渺小主體）
  * `WS` / `LS`：Wide Shot / Long Shot（全景，人物全身與主要環境）
  * `FS`：Full Shot（人物全身頂天立地，注重肢體動作）
  * `MS`：Medium Shot（中景，腰部以上，適合肢體互動與對話）
  * `MCU`：Medium Close-up（中特寫，胸部以上，面部神態與呼吸）
  * `CU`：Close-up（特寫，面部表情細微變化）
  * `ECU` / `XCU`：Extreme Close-up（極特寫，眼睛、手指、流血傷口微距）
* **運鏡與箭頭標記 (Camera Motion)**：
  * `Pan Left/Right (← / →)`：鏡頭基座不動，向左/右水平轉動
  * `Tilt Up/Down (↑ / ↓)`：鏡頭基座不動，向上/下垂直轉動
  * `Dolly In/Out (➔ / ⬅)`：攝影機基座前後物理推進/拉遠
  * `Tracking / Truck (⇢ / ⇠)`：攝影機跟隨主體等速平行移動
  * `Roll (↻ / ↺)`：攝影機沿光軸旋轉，營造失衡混亂感
