# RunningHub / MiniMax H3 參考生視頻資產包指南

本資產包已針對 **RunningHub (ComfyUI / 雲端生圖生片工作流)** 與 **MiniMax H3 (海螺 AI Video-01 / S2V / I2V)** 進行規格適配，直接綁定您提供的角色實體參考圖。

---

## 1. 角色參考圖資產 (Character Reference Assets)

| 檔案代號 | 角色 | 實體來源路徑 | 適用節點 / 欄位 |
| :--- | :--- | :--- | :--- |
| **`char_01_lu_zixuan_21.jpg`** | 陸子軒 (#21 SF) | [media_1788937381978.jpg](file:///C:/Users/mice/.gemini/antigravity-ide/brain/a522136e-dcc0-43ab-adc0-0799183b46a9/.user_uploaded/media_1788937381978.jpg) | `LoadImage` (角色/人臉參考圖、IP-Adapter) |
| **`char_02_coach_gao.jpg`** | 高振峰教練 | [media_1788937381957.jpg](file:///C:/Users/mice/.gemini/antigravity-ide/brain/a522136e-dcc0-43ab-adc0-0799183b46a9/.user_uploaded/media_1788937381957.jpg) | `LoadImage` (教練角色參考圖) |
| **`keyframe_shot01_bench.jpg`** | Shot 01 首幀畫面 | [bench_twentyone_confetti_1788934999288.jpg](file:///C:/Users/mice/.gemini/antigravity-ide/brain/1f6a814c-25ec-4c13-95db-7b33004f8b24/bench_twentyone_confetti_1788934999288.jpg) | `LoadImage` (I2V 首幀輸入) |

---

## 2. MiniMax H3 (海螺 AI) 參數規範

* **生成模式**：圖生視頻 (Image-to-Video) 或 主體參考 (Subject-to-Video)
* **畫面比例**：`9:16`（720×1280 或 1080×1920）
* **時長**：5 秒 (5s)
* **Prompt 特色**：去蕪存菁，以「運鏡方式 + 主體動作 + 光影環境」為核心。

---

## 3. 7 鏡頭中英提示詞對照 (Shot Prompts)

### Shot 01 · 孤獨板凳 (Hook)
* **參考圖**：陸子軒 + 首幀圖
* **EN**: `Low angle slow pull-out. Lu Zi-xuan in black jersey #21 sits alone in bench shadows, hands squeezing plastic bottle into net bag. Clean sweatless jersey. Distant teammates celebrate under golden confetti. High-contrast arena lighting.`
* **ZH**: `低角度緩慢拉遠鏡頭。陸子軒穿著乾淨的21號黑球衣孤單坐在長椅陰影中，雙手捏緊塑料瓶塞入網袋。遠處隊友在金色彩帶狂歡，高反差球館光影。`

### Shot 02 · 晨霧滑步
* **參考圖**：陸子軒
* **EN**: `Low-angle fast lateral tracking shot. 5:30 AM mist in empty gymnasium. Lu Zi-xuan executes rapid defensive sliding steps across reflective court, sneakers squeaking, heavy breath steam in cold air.`
* **ZH**: `貼地低角度快速橫向跟鏡。清晨五點半晨霧球館，陸子軒在反光木地板劇烈防守滑步，球鞋摩擦急停，口中吐出白霧喘息。`

### Shot 03 · 鐵血棒喝
* **參考圖**：高振峰教練
* **EN**: `Medium shot slowly pushing in. Coach Gao in black track jacket with red-gold trim stands sternly, sharp eagle eyes glaring, holding clipboard, pointing down at player's scraped bloody knee bandage. Dark gym shadows.`
* **ZH**: `中景緩慢推鏡。高教練穿黑底紅金夾克嚴厲肅立，鷹隼眼神凝視，手持戰術夾板指著球員滲血的膝蓋繃帶。沉重光影。`

### Shot 04 · 瘋狗切球
* **參考圖**：陸子軒
* **EN**: `Action whip pan shot. Lu Zi-xuan in low defensive stance locks up opposing guard during practice, lunging forward with explosive reach, fingertips cleanly slapping basketball away with court motion blur.`
* **ZH**: `高速甩鏡動作特寫。陸子軒壓低防守重心封堵控衛突破，迅猛伸手精準切球，木地板倒影與動態殘影。`

### Shot 05 · 平飛撲救 (Climax)
* **參考圖**：陸子軒
* **EN**: `120fps slow-motion crash zoom. Lu Zi-xuan dives horizontally parallel to court, scooping out-of-bounds basketball back in mid-air, crashing into press tables and folding chairs, bottles flying.`
* **ZH**: `120幀高速慢動作俯衝特寫。陸子軒橫身平飛出界，空中單手撈回籃球，隨後撞翻技術台鐵椅，水瓶飛濺。`

### Shot 06 · 先發白板
* **參考圖**：高振峰教練 + 陸子軒
* **EN**: `Macro shot tilting up from whiteboard. Black marker writing '#21 LU ZI-XUAN (SF)'. Camera pans to Lu Zi-xuan in back row with teary determined eyes as teammates cheer. Warm morning sunbeams.`
* **ZH**: `微距上搖鏡頭。白板黑筆書寫「#21 陸子軒(SF)」，鏡頭移至後排眼眶泛紅的陸子軒，隊友拍桌歡呼，百葉窗晨曦金光。`

### Shot 07 · 破曉中圈
* **參考圖**：陸子軒
* **EN**: `Slow dolly-in over shoulder. Back view of Lu Zi-xuan in sweat-stained #21 jersey adjusting left wristband, stepping firmly into jump-ball circle. Volumetric golden sunrise rays streaming from ceiling.`
* **ZH**: `過肩緩慢推進。背對鏡頭的陸子軒穿著汗濕21號球衣調整左護腕，邁步踏入中圈跳球區。金色晨曦光柱傾瀉。`

---

## 4. 設定檔清單

* [minimax_h3_tasks.json](file:///C:/Users/mice/.gemini/antigravity-ide/scratch/short-video-skills/projects/basketball-starter-21/runninghub_minimax_pack/minimax_h3_tasks.json)：MiniMax H3 API 批量任務格式。
* [runninghub_comfyui_manifest.json](file:///C:/Users/mice/.gemini/antigravity-ide/scratch/short-video-skills/projects/basketball-starter-21/runninghub_minimax_pack/runninghub_comfyui_manifest.json)：RunningHub ComfyUI 工作流節點配置。
