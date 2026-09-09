---
name: anime-video-producer
description: >-
  二次元動漫與風格化動畫短片製作專家。當需要創作日系熱血動畫（Shonen Sakuga）、新海誠唯美光影、吉卜力手繪風、美漫奧術 2.5D、賽博龐克二次元或動態漫畫（Motion Comic）時使用此 Skill。專精於角色三視圖跨鏡頭一致性錨定（Character Model Sheet）、日式動畫作畫演出（衝擊影格 Impact Frames、透視誇張、速度線）、Midjourney Niji 6 / FLUX.1 原畫提示詞與 AI 視訊運動參數轉換。
---

# Anime Video Producer (二次元動漫與風格化動畫短片製作專家)

本 Skill 專門負責將抽象的故事、劇本或分鏡，轉譯為具備**「強烈日系二次元靈魂、角色跨鏡頭零崩壞、極致作畫張力（Sakuga）」**的專業級動畫短片資產。

* 深度動漫風格修飾詞與作畫術語，請參閱：[動漫風格與作畫辭典](./references/anime-style-dictionary.md)
* 角色三視圖與一致性提示詞模版，請參閱：[角色三視圖設定範本](./templates/character-model-sheet.md)

---

## 核心四大支柱能力

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   Anime Video Producer 四大核心模組                    │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ 1. 動漫風格學派庫  │ 2. 角色一致性引擎 │ 3. 作畫張力演出 (Sakuga)       │
│ - 熱血戰鬥系      │ - 角色 DNA 錨點   │ - 衝擊影格 (Impact Frames)     │
│ - 新海誠光影美學  │ - 三視圖 Model    │ - 魚眼透視與極限形變           │
│ - 吉卜力手繪水彩  │   Sheet 提示詞    │ - 集中速度線與氣場粒子         │
│ - 奧術 2.5D / 美漫│ - 跨鏡頭防崩壞    │ 4. 聲優氣息演繹 (Seiyuu Audio) │
│ - 動態漫畫        │   Seed 策略       │ - 戰鬥吶喊 (Kiai) 與氣息標註   │
└───────────────────┴───────────────────┴────────────────────────────────┘
```

---

## 六大主流動漫美術學派 (Style Presets)

在啟動專案時，先選定核心風格基調（亦可混合），提示詞將自動載入專屬的美術修飾詞：

| 風格學派代號 | 視覺特徵與靈魂關鍵詞 | 推薦 AI 生圖引擎 / 專用修飾詞 |
| :--- | :--- | :--- |
| **`shonen-sakuga`**<br>(熱血戰鬥/作畫爆發) | 極致動態、粗曠墨線、高對比陰影、金屬火花、衝擊氣場、透視形變。<br>*(MAPPA, Ufotable, Bones 風格)* | `cel shaded anime aesthetic, high-contrast dynamic shadows, aggressive ink lineart, flying sparks, sakuga animation highlights, sharp focal depth, cinematic 8k` |
| **`shinkai-luminous`**<br>(新海誠極致光影) | 湛藍天空、巨大層雲（積雨雲）、黃金暮光、強烈透鏡光暈、體積光、浪漫透明感。<br>*(CoMix Wave Films 風格)* | `Makoto Shinkai style, breathtaking luminous sky, giant cumulonimbus clouds, volumetric god rays, anamorphic lens flare, glistening reflections, ultra-detailed anime background` |
| **`ghibli-watercolor`**<br>(吉卜力手繪質樸) | 柔和手繪水彩筆觸、大自然綠意盎然、復古顆粒感、童話溫度、生動的生活細節。<br>*(Studio Ghibli, Hayao Miyazaki 風格)* | `Studio Ghibli aesthetic, hand-drawn watercolor background, painted textures, nostalgic nostalgic atmosphere, lush vibrant greenery, gentle natural lighting, classic cel anime` |
| **`arcane-2.5d`**<br>(奧術/美漫街頭) | 手繪筆刷粗糙質感結合 3D 體積、半調網點 (Halftone)、邊緣色差散光 (Chromatic Aberration)、次世代酷炫質感。 | `stylized 2.5D animation, Arcane League of Legends art style, visible brushstrokes, painterly textures, halftone dot pattern, dramatic chiaroscuro, cinematic edge rim light` |
| **`cyberpunk-anime`**<br>(賽博龐克二次元) | 霓虹雨夜、冷青與粉紅強烈撞色、全息 HUD 投影、光學迷彩殘影、黑暗機械未來感。<br>*(Ghost in the Shell, Cyberpunk Edgerunners)* | `cyberpunk anime aesthetic, Studio Trigger style, rain-slicked neon reflections, cyan and magenta color grade, glowing holographic interface, mechanical visor glare, volumetric haze` |
| **`motion-comic`**<br>(動態漫畫/漫改) | 黑白網點、粗黑漫畫線稿、大分格邊界、狀聲字字卡爆裂（BOOM! DODODO）、縱深視差推拉。 | `dynamic manga illustration, high-contrast black and white ink, screentone shading, bold action lines, comic book panel composition, dramatic cross-hatching, sound effect typography` |

---

## 角色一致性錨定系統 (Character Consistency System)

二次元動畫影片的核心難題是**「換個鏡頭換張臉」**。本 Skill 透過 **Character DNA 公式** 與 **Model Sheet 規範** 鎖定角色核心特徵：

### 1. 角色 DNA 錨點公式
在所有提示詞中，主角的描述詞必須維持 100% 詞組字面一致：
$$\text{Character DNA} = \text{[Age/Gender]} + \text{[Signature Hair \& Eyes]} + \text{[Facial Landmark]} + \text{[Signature Outfit \& Colors]}$$

* **範例（熱血籃球少年）**：
  > `18yo East Asian male athlete, spiky jet-black messy hair with sharp fringe, intense amber-gold eyes, sweat-glistening tan skin, wearing oversized dark navy #21 basketball jersey with red collar trim, black athletic compression tights on left knee.`

### 2. 三視圖原畫設定（Midjourney Niji 6 / FLUX.1 生成指令）
在動漫專案開始前，先呼叫本 Skill 產出標準三視圖指令，供使用者生成角色一致性參考基準圖（作為 `--cref` 或圖生視訊第一幀）：
```text
/imagine prompt: character model sheet, turnaround sheet of [Character DNA], full body, showing front view, side profile view, 3/4 dynamic action pose, and 3 facial expressions (intense shouting, focused breathing, smirking), clean white background, anime cel shading, precise model reference, official anime concept art --ar 16:9 --niji 6
```

---

## 動畫分鏡演出與作畫張力 (Sakuga Dynamics)

動畫有別於真人影片，具備專屬的誇張演出手法：

1. **衝擊影格 (Impact Frames)**：
   - 在關鍵打擊、絕殺命中或異能爆發的那一瞬間（通常僅 0.1~0.2 秒），畫面短暫抽離所有顏色，轉為**高對比極簡黑白反轉與草線**，隨後爆發出全彩特效。
   - 於分鏡表中標註：`[IMPACT FRAME: Inverted monochrome flash]`。
2. **極限魚眼與透視形變 (Dynamic Foreshortening & Fisheye)**：
   - 拳頭、球鞋、球棒朝著鏡頭極速逼近，肢體成倍放大，背景急速向後扭曲退縮。
   - 提示詞使用：`extreme fisheye lens, dramatic foreshortening, hand lunging directly into the camera lens with hyper perspective distortion`。
3. **集中速度線與氣場爆發 (Speed Lines & Aura FX)**：
   - 主體發力時，背景虛化並轉化為放射狀集中線；周圍浮現半透明氣場光暈與反重力懸浮碎石。
   - 提示詞使用：`dense concentric speed lines radiating from center, explosive energy aura shimmering around silhouette, levitating dust pebbles`。

---

## 標準執行流程 (Execution Workflow)

當接收到動畫短片企劃或腳本時，依序產出以下四個模組：

### 模組一：世界觀與角色一致性設定表 (DNA Anchors & Model Sheet)
* 定義核心風格學派（如 `shonen-sakuga` 或 `shinkai-luminous`）。
* 定義主要角色 DNA 錨點及 Midjourney Niji 6 / FLUX 原畫生成指令。

### 模組二：日系動漫分鏡時間軸 (Anime E-Konte Table)
輸出包含動畫專屬術語（原畫 Keyframe、作畫張力 Sakuga、衝擊影格、聲優呼吸）的分鏡表：

| 鏡號 | 時間 | 景別與鏡頭運鏡 (Camera) | 動漫畫面與作畫演出 (Sakuga & Action) | 聲優台詞與氣息 (Voice & Breath) | 特效/音效 (Anime FX & SFX) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Shot 01** | 00:00 - 00:03 | [極限特寫 / 衝擊推鏡] | 汗水如流星飛散，琥珀色瞳孔緊縮倒映紅燈，神經電光閃爍 | 「[gasp] 雙腿……[shout] 動起來啊！」 | [SFX: 劇烈心跳耳鳴 + 高頻電音蓄力] |
| **Shot 02** | 00:03 - 00:06 | [超低仰角 / 魚眼追焦] | 腳掌蹬地木地板碎裂微震，以不可能的傾斜角度破風暴扣 | *(發力嘶吼 Kiai)* | [IMPACT: 命中瞬間黑白反向閃光] + [SFX: 暴擊轟鳴] |

### 模組三：AI 生圖與生片提示詞 (Keyframe & Video Motion Prompts)
針對每個鏡頭，輸出：
1. **關鍵影格生圖提示詞 (Keyframe Prompt - MJ Niji 6 / FLUX)**
2. **動態驅動提示詞 (Motion Prompt - Kling 1.5 / Runway Gen-3 / Hailuo)**：標註 Motion Strength (7-9 高張力)、運鏡軌跡、負向提示詞。

### 模組四：日系聲優演繹與音效卡點 (Seiyuu Direction)
* 標註發音情緒、微停頓與氣息（`[whisper]`、`[gasp]`、`[kiai/shout]`、`[heavy breath]`）。
* 動畫風格 BGM（如：澤野弘之式史詩燃曲、菅野洋子式爵士鼓點、J-Rock 熱血電吉他）。

---

## 與其他 Skills 的協同管道

* **銜接 `short-video-director`**：若使用者已有導演分鏡，本 Skill 直接將通用分鏡二次元化、追加 Sakuga 作畫與風格美學。
* **銜接 `motion-prompt-engineer`**：輸出標準化 API JSON 陣列，直接對接視訊生成管線。
* **銜接 `audio-sound-designer`**：將動漫聲優標籤與熱血動漫 BGM 提示詞移交精準混音。
* **銜接 `video-assembly-pipeline`**：產生符合 9:16 直式排版與動態字卡的最終組裝清單。
