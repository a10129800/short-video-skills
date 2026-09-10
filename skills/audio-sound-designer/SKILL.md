---
name: audio-sound-designer
description: >-
  短動態影片聲音設計與節奏卡點專家。當需要規劃配音旁白（TTS/語音合成標註）、背景音樂（Suno/Udio BGM 提示詞與 BPM）以及音效（SFX 卡點時間軸）時使用此 Skill。
---

# Audio Sound Designer (聲音設計與節奏卡點專家)

在短動態影片中，**「聲音決定了 70% 的情緒與節奏感」**。本 Skill 專門負責音訊工程規劃，涵蓋：具備語音控制標記的 TTS 配音腳本、自定義 AI 背景音樂（BGM）生成提示詞、以及毫秒級 SFX（音效）卡點時間軸設計。

---

## 核心職責

1. **TTS / 配音語音標註 (Voiceover Engineering)**：專為 ElevenLabs、Azure Speech、OpenAI Audio 等 TTS 引擎設計帶有情緒、重音、語速與微停頓（Micro-pauses）的文字。
2. **BGM 氛圍與節奏曲線 (BGM & BPM Curve)**：依據影片類型設定精準 BPM（如 120~140 BPM 緊迫衝刺），並輸出 Suno / Udio 提示詞。
3. **SFX 卡點時間軸 (Precision SFX Timeline)**：將轉場（Whoosh）、打擊（Impact）、低頻下沉（Sub-bass Drop）、心理緊張（Heartbeat）等音效精準對位至畫面鏡頭切換點。

---

## 輸出結構規範

每次執行任務，嚴格輸出以下三個模組：

### 模組 1：語音合成腳本 (TTS Prompt & Script)

為 TTS 模型提供可直接渲染的語音文字，包含發音控制碼：

* **角色音色設定 (Voice Profile)**：
  - 例如：`ElevenLabs Voice: "Adam" or "Marcus" - Deep, resonant, cinematic rasp with urgency`
  - 語速設定：通常短影片推薦 **1.1x ~ 1.25x**（節奏緊湊不拖沓）。
  - 穩定度 (Stability) 與逼真度 (Clarity) 參數建議。
* **標註文本 (Marked Script)**：
  - `[pause 0.3s]`：短停頓蓄力。
  - `[emphasis]`：重讀關鍵詞。
  - `[whisper]` / `[shout]` / `[gasp]`：情緒與氣息標籤。

#### 範例：
> `[whisper] 他們都說…… [pause 0.2s] 這是不可逾越的高牆。 [pause 0.4s] [intense/gasp] 但今天！[emphasis] 撕碎給他們看！ [pause 0.2s] 聽清楚，[emphasis] 這不是奇蹟，是我的必然！`

---

### 模組 2：BGM 生成提示詞與節奏規劃 (Suno / Udio Prompts)

定義短片配樂的靈魂：

* **目標 BPM**：例如 `130 BPM (High-octane electronic / Hybrid orchestral)`。
* **節奏結構曲線**：
  - 00:00 - 00:03 (Intro Hook)：重低音衝擊或寂靜蓄力。
  - 00:03 - 00:15 (Build-up)：快節奏踩鑔（Hi-hats）與進行曲大鼓。
  - 00:15 - 00:25 (The Drop / Climax)：強烈電子 Bassline / 激昂交響管弦樂全開。
  - 00:25 - 00:30 (Reverb Tail / Fade)：迴音消散或終結重擊。
* **Suno / Udio 提示詞範例**：
  > `Genre: Epic hybrid orchestral trap, 130 BPM, dark synth brass, aggressive 808 sub bass, fast ticking hi-hats, cinematic taiko drums, sudden bass drop at 15s, dramatic choir climax, intense sports hype.`

---

### 模組 3：SFX 音效時間軸卡點清單 (SFX Cue Sheet Table)

將每個視訊鏡頭（Shot）與對應的音效精確對位：

| 時間戳 (Timestamp) | 對應鏡頭 (Shot ID) | 音效類型 (SFX Category) | 具體音效名稱 (Sound Effect Description) | 混音權重 (Volume/Priority) |
| :--- | :--- | :--- | :--- | :--- |
| **00:00.00** | Shot 01 | Sub Impact | `Deep Sub-bass Boom + High-pitch Glitch` (打破靜寂開場) | 100% (主音) |
| **00:02.80** | Shot 01 -> 02 | Transition | `Heavy Air Whoosh / Swoosh` (鏡頭快速推進甩切) | 80% |
| **00:03.00** | Shot 02 | Foley / Action | `Loud Glass Shatter + Electric Arc Crackle` (破窗衝擊) | 95% |
| **00:06.50** | Shot 03 | Tension | `Accelerating Heartbeat Pulse + Risers` (心跳加速起伏) | 60% (背景層) |
| **00:10.20** | Shot 04 | Climax Impact | `Cinematic Anvil Hit + Distorted 808 Slam` (終結命中重音) | 100% (極致重擊) |
| **00:13.00** | Outro | Atmosphere | `Low drone ringing with long reverb tail` (回音沉浸) | 40% |

---

## 混音平衡法則 (Audio Mixing Rules)

1. **人聲優先原則 (Ducking)**：旁白語音響起時，BGM 中頻自動閃避（Sidechain Ducking）壓低 4~6dB，確保台詞聽感無比清晰。
2. **音效卡點（On-the-Beat）**：關鍵動作碰撞點與 BGM 的重拍鼓點嚴格在同一個影格（Frame Accurate），造成視聽共振爽感。
3. **動態範圍保留**：避免全程 100% 音量轟炸，開場前 0.2 秒的微寂靜或耳語能倍增下一秒爆發音效的震撼度。
