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
* **ZH (含對白)**：`電影級運動動漫畫面，9:16直式構圖，低角度極特寫緩慢拉遠。20歲東亞籃球員陸子軒留著黑色層次碎蓋微亂髮，穿著一塵不染、完全沒流汗的21號黑底紅金邊球衣，孤獨坐在替補席最深處的冷藍陰影中。他神情落寞低頭，雙手用力把捏扁的透明寶特瓶塞入網袋。角色低沉自語對白：「那一年的全場歡呼……我連一滴汗，都沒資格流。」遠景虛焦是漫天落下的金色彩帶與狂歡慶祝的隊友，高反差球館聚光燈，冷藍色調陰影，深沉壓抑的電影氛圍。`

### Shot 02 · 晨霧滑步
* **參考圖**：陸子軒
* **EN**: `Low-angle fast lateral tracking shot. 5:30 AM mist in empty gymnasium. Lu Zi-xuan executes rapid defensive sliding steps across reflective court, sneakers squeaking, heavy breath steam in cold air.`
* **ZH (含對白)**：`電影級運動動漫畫面，9:16直式構圖，貼地低角度跟隨鏡頭。凌晨五點半空曠挑高的室內籃球館，冷藍晨霧在反光木地板上瀰漫。陸子軒穿著21號球衣與黑色加壓褲，以極低重心瘋狂進行極限防守滑步，球鞋橡膠在地面發出刺耳煞車摩擦聲。汗水不斷從下巴滴落木地板，他在冷空氣中吐出白霧熱氣，眼神燃燒著執念咬牙怒吼對白：「但我不是來這裡當一輩子觀眾的！每天五百顆跳投、二十組極限衝刺！」頂棚單一孤立聚光燈，動態殘影，汗珠飛濺。`

### Shot 03 · 鐵血棒喝
* **參考圖**：高振峰教練
* **EN**: `Medium shot slowly pushing in. Coach Gao in black track jacket with red-gold trim stands sternly, sharp eagle eyes glaring, holding clipboard, pointing down at player's scraped bloody knee bandage. Dark gym shadows.`
* **ZH (含對白)**：`電影級運動動漫畫面，9:16直式構圖，中景緩慢推鏡。40歲總教練高振峰穿著黑底紅金運動夾克，胸前掛著金屬銀哨，左手持戰術板，眼神如獵鷹般銳利嚴苛。木地板上陸子軒進攻被大火鍋封蓋後摔坐在地，手肘挫傷，膝蓋上的繃帶滲出斑斑血跡，籃球在陰影中滾動。高教練手指著他厲聲訓斥對白：「球隊最不缺的，就是自以為是的得分手！滾回去遞水！」強烈明暗對比，充滿壓迫感與嚴師鐵血氣場。`

### Shot 04 · 瘋狗切球
* **參考圖**：陸子軒
* **EN**: `Action whip pan shot. Lu Zi-xuan in low defensive stance locks up opposing guard during practice, lunging forward with explosive reach, fingertips cleanly slapping basketball away with court motion blur.`
* **ZH (含對白)**：`電影級運動動漫畫面，9:16直式構圖，動態甩鏡高速快門捕捉。隊內對抗賽，陸子軒壓低重心如餓狼般死亡纏繞防守隊長陳浩天（4號）。浩天試圖交叉變向突破，子軒預判腳步閃電前撲，長臂如鐵鉗般精準切擊，指尖乾脆挑飛籃球！子軒眼神野性兇狠，心中怒吼對白：「進攻會失準，但只要心臟還在跳就永不背叛——骨氣與防守！」汗珠如碎鑽般炸開，木地板動態倒影，火花四濺的攻防張力。`

### Shot 05 · 平飛撲救 (Climax)
* **參考圖**：陸子軒
* **EN**: `120fps slow-motion crash zoom. Lu Zi-xuan dives horizontally parallel to court, scooping out-of-bounds basketball back in mid-air, crashing into press tables and folding chairs, bottles flying.`
* **ZH (含對白)**：`電影級運動動漫畫面，9:16直式構圖，120幀極限慢動作撞擊推鏡。八強生死戰最後一擊，籃球向邊線外飛去。陸子軒穿著21號戰袍完全無視障礙，整個人與地面平行魚躍橫身飛出界外！手臂青筋暴起，在空中狂吼對白：「全場沒人知道我是誰！但我知道——球在哪裡，命就在哪裡！！」單手極限將球撈回場內，下一秒身體重重撞翻技術台擋板與金屬折疊椅，紙張、筆電與水瓶在半空中翻飛散落，強烈球場探照燈，震撼高潮定格。`

### Shot 06 · 先發白板
* **參考圖**：高振峰教練 + 陸子軒
* **EN**: `Macro shot tilting up from whiteboard. Black marker writing '#21 LU ZI-XUAN (SF)'. Camera pans to Lu Zi-xuan in back row with teary determined eyes as teammates cheer. Warm morning sunbeams.`
* **ZH (含對白)**：`電影級運動動漫畫面，9:16直式構圖，微距變焦由白板上搖。清晨金色的晨光透過更衣室百葉窗灑下丁達爾光束，高教練手持黑色麥克筆，在白板先發五人名單最後一欄重重寫下「#21 陸子軒 (SF)」。鏡頭移向坐在長凳上的陸子軒，他眼眶含淚泛紅、雙拳緊握，哽咽自語對白：「替補席，不再是我的終點。先發名單上的最後一個名字……第二十一號。」隊長陳浩天與中鋒趙磊在身旁激動拍打他的肩膀大笑歡呼，溫暖感人的榮耀加冕時刻。`

### Shot 07 · 破曉中圈
* **參考圖**：陸子軒
* **EN**: `Slow dolly-in over shoulder. Back view of Lu Zi-xuan in sweat-stained #21 jersey adjusting left wristband, stepping firmly into jump-ball circle. Volumetric golden sunrise rays streaming from ceiling.`
* **ZH (含對白)**：`電影級運動動漫畫面，9:16直式構圖，越肩低角度慢速推進英雄背影。體育館穹頂玻璃天窗射入萬道破曉朝陽金光（God rays），神聖光芒籠罩陸子軒汗濕的21號黑金球衣。他低頭用力繫緊左手腕上的黑色護腕，堅定邁開步伐踏入球場中央的跳球圓圈。深沉鏗鏘的畫外音對白：「從板凳最末端走到球場中央，只有十公尺。但我，走了整整三百六十五個黎明！」英雄走向光芒的剪影，自信無比，逐漸淡出至黑幕。`

---

## 4. 設定檔清單

* [minimax_h3_tasks.json](file:///C:/Users/mice/.gemini/antigravity-ide/scratch/short-video-skills/projects/basketball-starter-21/runninghub_minimax_pack/minimax_h3_tasks.json)：MiniMax H3 API 批量任務格式。
* [runninghub_comfyui_manifest.json](file:///C:/Users/mice/.gemini/antigravity-ide/scratch/short-video-skills/projects/basketball-starter-21/runninghub_minimax_pack/runninghub_comfyui_manifest.json)：RunningHub ComfyUI 工作流節點配置。
