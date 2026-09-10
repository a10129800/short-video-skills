# 視覺分鏡語法與 AI 提示詞速查手冊 (Storyboard Grammar & Prompt Lexicon)

本手冊為 `visual-storyboard-artist` 的深度參考資料，彙整導演分鏡必備的景別公式、焦段透視感、運鏡標記代號與 Midjourney / FLUX 多宮格生成指令。

---

## 一、 鏡頭焦段與空間透視感 (Lens & Perspective)

| 焦段分類 | 鏡頭焦距 (Focal Length) | 視覺特徵與心理暗示 | 典型分鏡應用 |
| :--- | :--- | :--- | :--- |
| **超廣角** | `14mm ~ 20mm` | 空間極度拉伸、四周微畸變、強烈的宏偉感或壓迫感 | 俯瞰空曠球館、極限魚躍撲救、低角度貼地跟拍 |
| **經典廣角** | `24mm ~ 28mm` | 人物與環境兼顧，自然的空間深度感 | 雙人防守對抗、教練戰術板全景、更衣室全景 |
| **標準鏡頭** | `35mm ~ 50mm` | 最接近人眼真實視角，透視自然無畸變 | 中景對話、一般跑動運球、平視交流 |
| **人像中長焦** | `85mm ~ 105mm` | 淺景深、背景柔和虛化（Bokeh）、面部五官立體飽滿 | 人物面部微表情、汗水滴落、凝視籃框 |
| **超長焦壓縮** | `135mm ~ 200mm+` | 空間扁平化（Compression Effect）、前後景距離被壓縮 | 遠程狙擊跳投、穿越人群的眼神鎖定、絕殺倒數 |

---

## 二、 構圖法則與視覺心理 (Composition Grammar)

1. **三分法則 (Rule of Thirds)**：
   * 將畫面分為 3x3 九宮格。主體眼睛或重心放置於交點（Power Points），創造自然呼吸感與視覺動態平衡。
2. **引導線構圖 (Leading Lines)**：
   * 利用球場邊線、三分線、體育館木地板接縫或光柱，將觀眾視線強行導向畫面核心（如球框或倒地的球員）。
3. **荷蘭傾斜角 (Dutch Angle / Cant)**：
   * 攝影機旋轉 15°~30° 傾斜拍攝，傳遞角色的心理失衡、瀕臨崩潰、戰局危急或爆發前兆。
4. **過肩鏡頭 (Over-the-Shoulder / OTS)**：
   * 從防守球員肩頸後方拍攝持球者，建立對峙張力與空間相對方位。
5. **低角度仰拍 (Low-Angle Hero Shot)**：
   * 鏡頭貼地仰視，強化角色的力量感、威嚴、不可逾越的高牆感（如教練的壓迫身材）。

---

## 三、 導演運鏡箭頭標記規範 (Director's Visual Annotations)

在專業分鏡稿中，箭頭分為**「白色/實線箭頭（角色動作）」**與**「紅色/空心雙線箭頭（攝影機運動）」**：

* `PUSH IN ➔`：鏡頭朝畫面中心推進（情緒加劇、由環境聚焦到個體）。
* `PULL OUT ⬅`：鏡頭向後退縮（揭示真相、主角在巨大環境中的孤立感）。
* `PAN LEFT/RIGHT ⟵ / ⟶`：攝影機沿水準軸轉頭（掃視防守陣容、視線轉移）。
* `TILT UP/DOWN ⤉ / ⤈`：攝影機沿垂直軸抬頭/低頭（從腳下血跡向上掃到主角堅定面龐）。
* `WHIP PAN ⟿`：極速甩鏡，畫面瞬間動態模糊，用於瞬間激化衝突或時空轉換。
* `TRACKING / DOLLY ⟹`：攝影機架設在軌道或穩定器上，與奔跑的主角等速平移。

---

## 四、 多宮格分鏡圖 (Multi-Panel Contact Sheet) 提示詞模板庫

### 模板 1：6 宮格好萊塢手繪草圖風 (Classic 6-Panel Film Sketch)
```text
A professional cinematic 6-panel storyboard sheet layout, clean 3x2 grid with white borders, authentic pre-production film design. 
Art style: charcoal and ink line sketch, cross-hatching shadows, detailed pencil textures, rough kraft paper background. 
Showing sequence of a high-intensity basketball match: 
1. Wide shot of empty bench. 
2. Extreme close-up of sweaty eye. 
3. Dynamic block shot. 
4. Fast defensive slide. 
5. Horizontal diving save. 
6. Final victorious buzzer beater. 
Includes red camera direction arrows, field of view indicators, frame numbers, handwritten production notes in margins, masterclass film framing --ar 16:9 --v 6.0
```

### 模板 2：9 宮格日系動漫分鏡本 (Anime E-Konte 9-Grid Layout)
```text
Authentic Japanese anime storyboard layout (e-konte), 3x3 nine-panel grid on animation layout paper. 
Art style: clean crisp manga ink lineart, dynamic speed lines, grey copic marker shading, screentone shading. 
Featuring sports anime protagonist: intense expressions, explosive movement breakdowns, perspective distortion, dramatic foreshortening. 
Contains official Japanese animation notes, timestamp frames, camera motion arrows (PAN, TILT, FIX), Studio Mappa and Ghibli production aesthetic, ultra-clean --ar 16:9 --v 6.0
```

### 模板 3：4 宮格直式短影音圖卡 (Vertical 4-Panel 9:16 Storyboard)
```text
Vertical 9:16 aspect ratio 4-panel storyboard template, 1x4 stacked vertical comic panels with bold borders. 
Style: Modern dynamic webtoon and graphic novel illustration, vibrant rim lights, dark atmospheric backdrop. 
Sequentially depicting a 15-second sports climax: 
Panel 1: Hook shot of scoreboard countdown. 
Panel 2: Tension-filled shoe squeak and step back. 
Panel 3: Mid-air release with motion streaks. 
Panel 4: Swish through net with roaring crowd. 
Includes phone safe-zone grid guides, clean cinematic framing --ar 9:16 --v 6.0
```
