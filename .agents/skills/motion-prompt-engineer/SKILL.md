---
name: motion-prompt-engineer
description: >-
  AI 動態運鏡與視訊生成提示詞專家。當需要將分鏡腳本轉化為 AI 視訊模型（Runway Gen-3, Kling 1.5, Luma Dream Machine, Hailuo, Sora）之專業英文提示詞、動態運鏡控制參數、首尾影格指示或結構化 API JSON 陣列時使用此 Skill。
---

# Motion Prompt Engineer (AI 動態運鏡與提示詞工程師)

本 Skill 專職於將分鏡腳本（Storyboard）轉譯為**「高動態率、物理自然、運鏡精確、可直接透過 API 或工具調用」**的專業級 AI 視訊提示詞工程資產。

深入了解攝影機運動與高階修飾詞，請參閱：[運鏡術語與提示詞詞典](./references/camera-movement-lexicon.md)。

---

## 核心能力與支援模型

* **相容主流模型**：Runway Gen-3 Alpha / Turbo, Kling 1.5 (快手可靈), Luma Dream Machine (Ray 2), Hailuo AI (MiniMax), OpenAI Sora, Pika 2.0。
* **生片模式支援**：
  1. **Text-to-Video (文生影片)**：純文字驅動超高動態與運鏡轉換。
  2. **Image-to-Video (圖生影片 / 關鍵影格驅動)**：使用 Midjourney / FLUX 產出的一致性首幀，給予定向動態驅動指令。
  3. **First-and-Last Frame (首尾幀差值生成)**：設定起點姿態與終點姿態，指令模型補間生成極限動作。

---

## 提示詞工程標準語法 (Prompt Syntax)

撰寫提示詞時，嚴格遵循 **5 層遞進語法公式**：

$$\text{Prompt} = \text{[Subject \& Action]} + \text{[Camera Motion]} + \text{[Physics \& Environment]} + \text{[Lighting \& Color]} + \text{[Style \& Specs]}$$

1. **[Subject & Action] 主體與動力動作**：具體形容動詞（如 *sprinting, lunging forward, diving horizontally*），避免靜態名詞疊加。
2. **[Camera Motion] 鏡頭動態軌跡**：指定運鏡軸線與速度（如 *Low-angle tracking shot, Crash zoom in, 360-degree orbital pan*）。
3. **[Physics & Particles] 物理流體與粒子互動**：如 *sweat droplets scattering, shattered glass shards drifting, billows of dust vortices*。
4. **[Lighting & Atmosphere] 動態光影氛圍**：如 *flickering red emergency beacon, intense rim lighting, dynamic lens flare*。
5. **[Style & Specs] 規格與美學風格**：如 *Cinematic 9:16 vertical, hyper-realistic anime aesthetic, photorealistic 8k render, motion blur*。

---

## 執行流程與標準輸出結構

當輸入分鏡表或使用者指示時，本 Skill 嚴格輸出以下兩大部分：

### 一、 鏡頭提示詞詳細解析 (Shot Breakdown Table)

對每個鏡頭進行深入工程拆解：

* **鏡頭編號與秒數**：Shot ID & Duration (通常為 3s~5s)。
* **生片模式**：Text-to-Video 或 Image-to-Video (附首幀/尾幀說明)。
* **英文生片提示詞 (Positive Prompt)**：可直接複製進生圖/生片 UI。
* **負向提示詞 (Negative Prompt)**：`static pose, morphing body, deformed limbs, floating artifacts, jitter, plastic skin, low quality, blurry, text watermark`.
* **運鏡強度與參數 (Camera Motion Params)**：
  - *Motion Strength / Intensity*：1 ~ 10（慢鏡頭 3-5，極限動作 7-9）。
  - *Camera Controls*：Pan, Tilt, Zoom, Roll 向量值。

---

### 二、 API 執行用結構化 JSON 陣列 (Production-Ready JSON)

輸出結構化 JSON，可供外部自動化腳本、Agent Tool Call 或批次生片工作流直接傳入 API：

```json
[
  {
    "shot_id": 1,
    "duration_sec": 4,
    "aspect_ratio": "9:16",
    "generation_mode": "text-to-video",
    "camera_movement": {
      "type": "Crash Zoom",
      "speed": "rapid",
      "direction": "push_in"
    },
    "motion_strength": 8,
    "prompt": "Cinematic 9:16 vertical, intense extreme close-up of a sweaty young athlete breathing heavily, eyes locked forward with burning ambition, violent crash zoom into his dilated pupil, flickering stadium rim lights, sweat droplets flying backward, hyper-realistic 8k render, photorealistic dynamic anime style.",
    "negative_prompt": "static, blurry, smooth skin, deformed, morphing, low resolution, watermark"
  },
  {
    "shot_id": 2,
    "duration_sec": 3.5,
    "aspect_ratio": "9:16",
    "generation_mode": "image-to-video",
    "first_frame_reference": "shot_01_end_frame.png",
    "camera_movement": {
      "type": "Low-Angle Tracking",
      "speed": "high-speed",
      "direction": "lateral_follow"
    },
    "motion_strength": 9,
    "prompt": "Cinematic 9:16 vertical, low angle tracking shot moving at high velocity, athlete diving horizontally across the shiny hardwood court to intercept a speeding basketball, hardwood floor reflections, motion blurred background stands, dynamic sweat spray.",
    "negative_prompt": "floating, frozen limbs, disjointed body, bad physics, low frame rate"
  }
]
```

---

## 避坑原則 (Anti-Hallucination & Artifact Prevention)

1. **避免模糊形容詞**：不要只寫 "cool action" 或 "cinematic look"，務必寫出實體動作（"lunges left while swinging arms"）。
2. **避免同時下達多個衝突運鏡**：不可在一個 4 秒鏡頭中同時下達 "zoom in" 與 "zoom out"，若需複合動作，寫成先後順序或使用 `speed ramping`。
3. **肢體畸變防禦**：多肢體動作（如灌籃、奔跑）提示詞中強化關節鎖定語句（`anatomically correct hands and legs, continuous fluid motion`）。
