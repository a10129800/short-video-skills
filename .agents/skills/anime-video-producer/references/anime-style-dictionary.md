# 動漫風格與作畫演出辭典 (Anime Style & Sakuga Dictionary)

本參考指南收錄日系動畫創作、專業作畫（Sakuga）演出手法、名導演/知名工作室風格提示詞，以及防崩壞修飾語彙，供 `anime-video-producer` 精準調用。

---

## 一、 日本動畫作畫張力 (Sakuga) 專用術語庫

在 AI 視訊生成（Kling、Runway、Hailuo、Sora）中，純下達「action」只會得到平庸的慢速移動。調用以下日系作畫術語，能驅動模型生成高階動畫質感：

### 1. 特效與打擊演出 (Impact & FX)
* **衝擊影格 (Impact Frame / Inverted Monochrome Flash)**：
  - *定義*：在重擊命中瞬時插入 1~2 幀黑白反轉或高對比草稿線條，瞬間釋放極致打擊感。
  - *提示詞*：`sudden single-frame high-contrast black-and-white inverted impact frame flash, explosive kinetic shockwave, violent screen vibration`
* **板野馬戲團 (Itano Circus / Acrobatics Missile Swarm)**：
  - *定義*：大量導彈、流星或能量彈以錯綜複雜的螺旋、弧線軌跡狂暴追逐目標，鏡頭高速穿梭其間。
  - *提示詞*：`Itano circus animation style, chaotic spiraling missile vapor trails, dynamic acrobatic trajectory, camera weaving between explosive projectiles`
* **金田透視 (Kanada Foreshortening & Perspective Pose)**：
  - *定義*：極限透視形變，靠近鏡頭的拳頭、兵器或足部呈現誇張的巨大化，展現魄力。
  - *提示詞*：`dramatic dynamic foreshortening, exaggerated hand reaching towards camera, sharp forced perspective, extreme visual kinetic tension`
* **殘影與流暢形變 (Smear Frames & Motion Stretch)**：
  - *定義*：高速揮刀或奔跑時肢體產生彈性拉伸形變與多重殘影，消除 AI 視訊的抽搐與僵硬。
  - *提示詞*：`stylized animation smear frames, fluid elastic motion stretch, translucent afterimages trailing movement, ultra-smooth frame pacing`
* **集中速度線 (Anime Speed Lines / Shūchūsen)**：
  - *定義*：背景被放射狀或水平衝刺的高密度線條取代，主體居中全力爆發。
  - *提示詞*：`dense radial anime speed lines radiating outward, explosive burst lines, motion blur background streaks, razor-sharp focus on subject`

---

## 二、 知名動畫工作室與導演風格庫 (Director & Studio Signatures)

將以下經典風格標籤融入提示詞，可直接錨定極具辨識度的高級審美：

### 1. 新海誠 (Makoto Shinkai / CoMix Wave Films)
* **風格核心**：極致唯美光影、透明水感、湛藍天空與高飽和度晚霞、透鏡耀光。
* **生圖修飾詞**：
  > `Makoto Shinkai art style, CoMix Wave aesthetic, breathtaking luminous twilight sky, towering cumulonimbus clouds, anamorphic golden lens flares, pristine water reflections, ultra-detailed anime background, highly saturated pastel gradients, shimmering sunlight god rays.`

### 2. 幽浮社 (Ufotable - 鬼滅之刃 / Fate)
* **風格核心**：極限 3D 運鏡背景（3D CG Layout）結合手繪 2D 特效、流暢光粒子、烈焰與水浪軌跡、銳利邊緣高光。
* **生圖修飾詞**：
  > `Ufotable animation style, dynamic 3D camera pan, vibrant elemental particle effects, flowing incandescent fire ribbons, high-contrast digital cel shading, crisp rim lighting, blockbuster theatrical anime render, epic sakuga battle.`

### 3. 馬帕社 (MAPPA - 咒術迴戰 / 鏈鋸人)
* **風格核心**：粗曠手繪墨線、高對比寫實陰影、近身肉搏極限打擊感、微髒髒顆粒質感、沈重且狂暴的重量感。
* **生圖修飾詞**：
  > `MAPPA studio animation style, rough expressive ink lineart, gritty realistic shadows, raw physical combat weight, rapid camera whipping, dramatic chiaroscuro lighting, sweat and dirt textures, modern dark fantasy anime.`

### 4. 扳機社 (Studio Trigger / 今石洋之 - 天元突破 / 邊緣行者)
* **風格核心**：極限幾何形變、螢光高彩霓虹撞色、爆炸放射星芒、狂放不羈的誇張美學。
* **生圖修飾詞**：
  > `Studio Trigger art style, Hiroyuki Imaishi aesthetic, hyper-stylized geometric exaggeration, vibrant neon color clash, explosive starburst spark effects, thick bold dynamic outlines, unhinged kinetic pacing.`

### 5. 吉卜力工作室 (Studio Ghibli / 宮崎駿)
* **風格核心**：手繪水彩風景、自然綠意、質樸溫馨賽璐珞、微風拂動髮絲與草木的生動細節。
* **生圖修飾詞**：
  > `Studio Ghibli aesthetic, Hayao Miyazaki style, hand-painted gouache watercolor background, nostalgic warm color palette, wind rustling lush green grass and hair, tactile cel animation, gentle organic atmosphere.`

### 6. 英雄聯盟：奧術 (Arcane / Fortiche Studio 2.5D)
* **風格核心**：油畫筆刷手繪紋理疊加 3D 模型、半調網點、邊緣色差、深邃電影光影。
* **生圖修飾詞**：
  > `Arcane League of Legends art style, Fortiche studio 2.5D stylized rendering, visible impasto oil brushstrokes, dramatic cinematic rim light, chromatic aberration, subtle halftone pattern, volumetric gloom, painterly masterwork.`

---

## 三、 動畫燈光與色彩調色盤 (Anime Lighting & Palettes)

* **夕陽黃金逆光 (Golden Hour Rim Lighting)**：
  `dramatic low-angle sunset backlighting, golden hair rim illumination, long cinematic cast shadows, warm glowing dust motes`
* **賽博霓虹撞色 (Cyberpunk Bicolor Contrast)**：
  `high-contrast dual lighting, intense cyan key light from left, hot magenta rim light from right, moody rain-slicked dark ambience`
* **熱血高能覺醒光 (Awakening Energy Aura)**：
  `blinding golden-white energy surge radiating from character core, inverted pupil luminescence, shimmering volumetric heat haze`
* **絕境冷色調 (Despair Desaturated Palette)**：
  `bleak desaturated steel-blue color grading, single flickering red emergency beacon, deep pitch-black crushed shadows`

---

## 四、 動畫專用負向提示詞庫 (Anti-Artifact Negative Prompts)

在生成動漫原畫與視訊時，最常出現「三次元混入變真人臉」、「多指扭曲」、「線條融化」等崩壞。必備以下負向詞組：

```text
photorealistic human skin pores, 3d uncanny valley, live-action footage, deformed eyes, extra fingers, missing limbs, bad anatomy, melting lineart, morphing face, blurry textures, amateur drawing, watermark, text, low resolution, ugly, messy sketch
```
