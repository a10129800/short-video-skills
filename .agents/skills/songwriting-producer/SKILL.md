---
name: songwriting-producer
description: >-
  專業歌曲創作與音樂製作專家。當使用者需要進行歌詞創作、押韻規劃、和弦編配、曲風結構設計（Intro/Verse/Chorus/Bridge/Outro）、或為 Suno、Udio、MiniMax Music 3 等 AI 音樂工具生成高轉化率提示詞與專屬元標籤時調用此 Skill。
---

# Songwriting Producer (歌曲創作與音樂製作專家)

本 Skill 專門負責將抽象的情感、故事、主題或影像需求，轉化為具備**「強烈旋律記憶點、專業歌詞押韻結構、精準曲風編配、以及完美相容 Suno / Udio / MiniMax 等 AI 音樂引擎」**的完整原創歌曲資產。

* 深度曲風流派辭典與和弦進程走向，請參閱：[曲風流派與和弦進程大全](./references/genre-and-chords-guide.md)
* 各平台（Suno / Udio / MiniMax Music 3）提示詞模版與防坑指南，請參閱：[AI 音樂生成提示詞模版庫](./templates/ai-music-prompt-templates.md)

---

## 核心四大支柱能力

```text
┌────────────────────────────────────────────────────────────────────────┐
│                  Songwriting Producer 四大核心模組                     │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ 1. 概念企劃與情緒弧│ 2. 歌詞工程學      │ 3. 和弦走向與旋律骨架           │
│ - 主題故事與核心衝突│ - 雙音韻與內嵌韻   │ - 萬能流行和弦 (4536251)       │
│ - BPM、調性 (Key) │ - 視聽通感意象     │ - 卡農、小室、R&B Neo-Soul     │
│ - 金句 Hook 提煉  │ - 節奏音節字數對齊 │ - 調式色彩 (Major/Minor/Dorian) │
├───────────────────┴───────────────────┴────────────────────────────────┤
│ 4. 跨平台 AI 音樂轉譯引擎 (AI Prompt & Structure Architecture)         │
│ - Suno AI (v3.5 / v4)：Custom Mode 專用結構標籤、樂器漸進描述          │
│ - MiniMax Music 3 (海螺)：中英分流架構、杜絕英文指令導致的靜音死音 Bug │
│ - Udio (v1.5)：風格權重、段落銜接與延伸 (Extend) 策略                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 標準創作工作流程 (The 4-Step Production Pipeline)

當接到歌曲創作需求時，依序執行以下 4 個步驟：

### Step 1：歌曲企劃定位 (Track Profiling)
* **主題與核心衝突 (Core Concept)**：例如「告別青春遺憾」、「深夜都市的自我和解」、「熱血體育壓哨球」。
* **曲風流派 (Genre & Sub-genre)**：如 Mandopop Ballad、R&B / Soul、City Pop、J-Rock、Lo-Fi Hip-Hop、Cyberpunk Synthwave 等。
* **速度 (BPM) 與調性 (Key)**：抒情慢歌 65~78 BPM，流行中板 90~110 BPM，熱血搖滾 125~150 BPM。
* **人聲聲線 (Vocal Profile)**：如「溫暖沙啞煙燻男聲」、「清亮空靈女高音」、「節奏感強烈的慵懶 R&B 唱腔」。

---

### Step 2：歌詞工程與結構排版 (Lyric Architecture)
嚴格遵守現代流行音樂黃金段落結構，確保段落分明、層次推進：

1. `[Intro]`：前奏，以樂器獨奏或環境音營造氛圍（2~4 小節）。
2. `[Verse 1]`：主歌第一段，鋪陳場景、具象細節（如球鞋磨損、夕陽光影、冷掉的咖啡）。
3. `[Verse 2]`：主歌第二段，深化心理轉折、帶入內心獨白。
4. `[Pre-Chorus]`：導歌（預副歌），節奏起伏加快，音域爬升，為副歌蓄力。
5. `[Chorus]`：副歌（核心 Hook），主題昇華，核心金句集中爆發，旋律線高度記憶化。
6. `[Verse 3]` 或 `[Verse 2-2]`：敘事推進，長大後的心境轉變或時空對比。
7. `[Chorus]`：再次強化主題。
8. `[Bridge]`：橋段，打破前面主副歌的和弦與旋律慣性，將情感張力推向最高峰。
9. `[Guitar Solo]` / `[Instrumental Break]`：樂器獨奏，釋放情緒能量。
10. `[Chorus]`：高潮終極副歌（可升 Key 或全樂器齊奏）。
11. `[Outro]`：尾奏，漸弱（Fade out）或留白空靈結尾，留下餘韻。

> **押韻法則 (Rhyming Rules)**：
> * **避免強行硬押**：優先採用「十三轍」諧音韻、雙音詞押韻（如：手掌／滾燙、停留／出手、沉重／美夢）。
> * **內嵌韻（Internal Rhyme）**：在句中置入押韻點，增加歌唱時的流暢感與律動。

---

### Step 3：和弦配置與編曲色彩 (Harmony & Arrangement)
為歌曲挑選最契合的和弦骨架（詳見 [和弦走向大全](./references/genre-and-chords-guide.md)）：
* **流行抒情（華語黃金走向）**：`IV - V - iii - vi - ii - V - I`（4536251）
* **感傷治癒（卡農走向）**：`I - V - vi - iii - IV - I - IV - V`（15634145）
* **熱血/日漫疾速（小室走向）**：`vi - IV - V - I`（6451）
* **都會慵懶（R&B / Neo-Soul）**：`ii7 - V7 - Imaj7 - VI7`，搭配降二代五與副屬和弦。

---

### Step 4：AI 平台轉譯與代碼生成 (AI Engine Adaptation)
針對不同 AI 音樂工具生成「零失誤、開箱即用」的代碼塊：

#### A. Suno AI 專用代碼
* **Style Prompt**：英文風格標籤堆疊（風格 + 主要樂器 + 人聲特徵 + 情緒 + BPM）。
* **Lyrics 語法**：支援 `[Acoustic guitar intro]`、`[Bass Drop]`、`[Key Change]` 等表演指示標籤。

#### B. MiniMax Music 3 (RunningHub / ComfyUI) 專用代碼
* **Style / Caption 框**：**強烈推薦使用純中文或簡潔英文描述**（例如：`華語流行抒情歌曲，溫暖深情男聲，鋼琴與木吉他伴奏，72拍`）。
* **Lyrics 框防死音守則 ⚠️**：
  - **嚴禁**在歌詞中混入 `[Acoustic guitar strumming softly...]` 這類英文樂器描述，MiniMax 無法解析，會導致模型產生 **長達數十秒的完全無聲死音（NaN）**！
  - 歌詞框僅保留 `[Verse 1]`、`[Chorus]` 等純段落標籤，或直接使用純文字歌詞。
* **參數建議**：`CFG Scale: 2.5`（低於 2.0 易產生靜音）、`Steps: 30`、`Sampler: euler / simple`。

---

## 輸出結構規範 (Execution Output Format)

每次為使用者創作歌曲時，請嚴格按照以下標準結構輸出：

```markdown
### 🎵 歌曲企劃總覽
- **歌名**：《[歌名]》
- **曲風風格**：[如：90年代華語流行抒情 / R&B Neo-Soul / 熱血 J-Rock]
- **調性與速度**：[如：C Major / 72 BPM]
- **人聲聲線**：[如：溫暖感性男中音，帶微沙啞顆粒感]
- **核心意象與主題**：[1~2 句話概括歌曲靈魂]

---

### 🎼 推薦和弦進程 (適合自彈自唱 / 編曲參考)
- **Verse (主歌)**：`[和弦級數與具體和弦]`
- **Chorus (副歌)**：`[和弦級數與具體和弦]`
- **Bridge (橋段)**：`[和弦級數與具體和弦]`

---

### 📝 完整歌詞 (含專業段落標籤與押韻設計)
[在此展示結構完整、包含 [Intro]、[Verse]、[Pre-Chorus]、[Chorus]、[Bridge]、[Outro] 的完整歌詞]

---

### 🤖 AI 一鍵生成專用代碼

#### 1. Suno AI 專用代碼
- **Style of Music**：
  `[英文風格標籤...]`
- **Lyrics**：
  `[帶 Suno 專屬標籤的完整歌詞...]`

#### 2. MiniMax Music 3 (RunningHub) 專用代碼
- **1. Caption (風格描述)**：
  `[純中文精簡風格描述...]`
- **2. Lyrics (歌詞)**：
  `[移除英文演奏指令、純淨版段落歌詞...]`
- **推薦參數**：`CFG: 2.5` | `Steps: 30` | `Duration: 60s~120s`
```
