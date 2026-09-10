# AI 音樂生成提示詞模版庫 (AI Music Prompt Templates)

本手冊提供針對主流 AI 音樂引擎（**Suno AI**、**MiniMax Music 3**、**Udio**）調校的最佳實踐提示詞模版、結構標籤與實戰避坑指南。

---

## 一、三大 AI 音樂引擎核心特徵與避坑指南

### 1. Suno AI (v3.5 / v4)
* **特長**：結構理解力極強、流行人聲自然、支援完整的標籤式表演指令。
* **最大特色**：可在歌詞框內寫入中括號表演標籤，如 `[Guitar Solo]`、`[Bass Drop]`、`[Whisper]`、`[Key Change]`。
* **避坑要點**：
  - 如果副歌重複時 AI 容易機械性複讀（Hallucination），可以在第二遍副歌稍微改動一兩個詞，或加上 `[Chorus - Full Band Climax]`。
  - Prompt 不要寫死特定歌手名（如 Taylor Swift），改用聲線特徵詞（如 `breathy emotional female vocal, soaring high notes`）。

---

### 2. MiniMax Music 3 (RunningHub / ComfyUI)
* **特長**：開源權重、架構先進、長度可達 5 分鐘、對中文語義與中式流行曲風（國風、華語抒情）理解極深。
* **🚨 核心避坑守則（防止無聲死音 / NaN）**：
  1. **歌詞框嚴禁混入英文演奏指令**：Suno 支援的 `[Acoustic guitar strumming...]`、`[Strings crescendo]` 在 MiniMax 裡會被判定為無效輸入，容易導致模型生成**數十秒的完全靜音檔**！歌詞框只能放純段落標籤（如 `[Verse]`、`[Chorus]`）和純歌詞。
  2. **Caption 優先使用中文或精簡英文**：MiniMax 為中文大模型核心，Caption 框輸入 `華語流行抒情，深情男聲，鋼琴木吉他，72拍` 往往比堆疊一長串英文更穩定。
  3. **CFG Scale 請保持在 2.5 左右**：低於 2.0（如預設的 1.7）引導力不足容易產出虛音/靜音。
  4. **移除或 Bypass `[BETA] ModelAttention Backend`**：該測試算子在部分雲端環境會造成數值溢位導致靜音。

---

### 3. Udio (v1.5)
* **特長**：音質高、動態範圍大、爵士與管弦樂等複雜編排非常精細。
* **模式**：預設以 32 秒為單位進行「延伸（Extend）」推進。
* **避坑要點**：
  - 善用 `Prompt Strength` 與 `Lyrics Strength` 調整風格貼合度。
  - 延伸時精確設定銜接秒數，確保拍子（Beat Grid）不亂拍。

---

## 二、六大黃金曲風開箱即用模版 (Copy-Paste Ready)

### 模版 1：華語治癒抒情慢歌 (Emotional Mandopop Ballad)

#### Suno AI
* **Style of Music**：
  ```text
  emotional Mandopop ballad, acoustic grand piano, gentle nylon acoustic guitar, warm intimate male vocal, gradual cinematic strings swell, bittersweet nostalgic, 72 bpm, pristine vocal mix
  ```
* **Lyrics 結構**：
  ```text
  [Intro - Soft piano arpeggios]
  [Verse 1]
  [歌詞內容...]
  [Pre-Chorus - Strings enter softly]
  [歌詞內容...]
  [Chorus - Full band with drums and acoustic guitar]
  [歌詞內容...]
  [Bridge - Emotional peak]
  [歌詞內容...]
  [Outro - Piano solo fading out]
  ```

#### MiniMax Music 3 (RunningHub)
* **1. Caption**：
  ```text
  華語流行抒情歌曲，溫暖深情男聲，真實鋼琴與木吉他伴奏，弦樂漸進推向高潮，感傷懷舊，72拍
  ```
* **2. Lyrics**：
  ```text
  [Verse 1]
  夕陽把球場的影子拉得好長
  水泥地磨平了球鞋的鞋底
  晚風吹動那張破損的球網
  像在替誰 輕聲嘆息

  [Pre-Chorus]
  哨音早已散去 看台空空蕩蕩
  並肩奔跑的兄弟 走向不同方向
  可每當我再次 把球握在手掌
  心跳依然像當年 那麼滾燙

  [Chorus]
  劃破黃昏的弧線 在半空停留
  像青春毫無保留 用力的出手
  哪怕現實的防守 總是太沉重
  聽一聲清脆的「唰」—— 空心入網的夢
  ```

---

### 模版 2：微醺都市節奏藍調 (Late-night R&B / Neo-Soul)

#### Suno AI
* **Style of Music**：
  ```text
  contemporary R&B, neo-soul, lush Rhodes electric piano, muted wah guitar, warm 808 sub bass, swinging groove, silky smooth female vocals, runs and riffs, laid-back vibe, 88 bpm
  ```

#### MiniMax Music 3 (RunningHub)
* **1. Caption**：
  ```text
  都市R&B流行歌曲，慵懶絲滑女聲，電鋼琴Rhodes與放克弱音吉他，溫暖低音貝斯，微醺放鬆律動，88拍
  ```

---

### 模版 3：日漫熱血戰鬥主題曲 (Anime High-Energy J-Rock)

#### Suno AI
* **Style of Music**：
  ```text
  high energy J-Rock, anime opening theme, fast driving double-bass drums, soaring aggressive electric guitars, punchy slap bass, powerful emotive Japanese male vocal, melodic guitar solo, epic brass stabs, 175 bpm
  ```

#### MiniMax Music 3 (RunningHub)
* **1. Caption**：
  ```text
  熱血日系動漫搖滾，疾速電吉他破音riff，激進高速鼓點，高亢激昂男聲，燃系戰鬥氛圍，175拍
  ```

---

### 模版 4：復古霓虹都會流行 (80s Japanese City Pop)

#### Suno AI
* **Style of Music**：
  ```text
  1980s Japanese City Pop, funky slap bassline, bright DX7 synthesizer, clean rhythm guitar chords, sparkling brass section, nostalgic saxophone solo, breezy summer night female vocal, 118 bpm
  ```

#### MiniMax Music 3 (RunningHub)
* **1. Caption**：
  ```text
  80年代復古City Pop，放克拍弦貝斯，復古合成器，清爽電吉他切音，薩克斯風獨奏，夏夜都會浪漫，清澈女聲，118拍
  ```

---

### 模版 5：下雨天鬆弛低保真 (Rainy Day Lo-Fi Chillhop)

#### Suno AI
* **Style of Music**：
  ```text
  lo-fi hip hop, chillhop, dusty vinyl crackle, mellow detuned jazz piano, warm booming 808 kicks, rainy window ambient sounds, relaxed whispery male vocals, soulful chords, 75 bpm
  ```

#### MiniMax Music 3 (RunningHub)
* **1. Caption**：
  ```text
  Lo-Fi低保真嘻哈，復古黑膠底噪，柔和降調爵士鋼琴，溫暖下沉鼓點，窗外雨聲環境音，慵懶低沉人聲，放鬆治癒，75拍
  ```

---

### 模版 6：電影級熱血體育震撼陷阱 (Cinematic Sports Trap)

#### Suno AI
* **Style of Music**：
  ```text
  cinematic sports hype, hybrid trap, aggressive distorted 808 bass, rolling hi-hats, massive brass stabs, epic battle choir, intense motivational rap vocal, dramatic bass drop, 140 bpm
  ```

#### MiniMax Music 3 (RunningHub)
* **1. Caption**：
  ```text
  電影級體育熱血Trap，重低音808下沉，三連音踩鑔，交響銅管重音，熱血戰鬥吶喊，緊迫衝刺節奏，140拍
  ```
