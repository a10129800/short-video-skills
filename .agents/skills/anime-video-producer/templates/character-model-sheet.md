# 角色三視圖與一致性錨定範本 (Character Model Sheet & Consistency Guide)

本範本提供標準的角色三視圖（Turnaround Sheet）與表情矩陣提示詞，讓創作者能在 Midjourney Niji 6 或 FLUX.1 生成穩定的角色基準圖，並透過圖生圖（Image-to-Video）在不同鏡頭中完美維持角色外貌一致性。

---

## 一、 標準三視圖提示詞語法架構 (Model Sheet Syntax)

```text
/imagine prompt: character model sheet, official anime character design sheet, [Character DNA], full-body turnaround showing: front view, side profile view, 3/4 dynamic action pose, and 3 distinct facial expressions (neutral focus, fierce shouting, exhausted panting), clean flat white background, sharp clean cel shading lineart, consistent costume details, animation model production sheet --ar 16:9 --niji 6 --stylize 250
```

---

## 二、 實戰案例 1：熱血高校籃球員《林晨 (Chen Lin)》

### 1. 角色 DNA 錨點清單
* **年齡與身形**：17 歲東亞高中少年，身高 188cm，精瘦結實具備爆發力的運動員肌肉線條，手臂隱約可見青筋。
* **髮型與臉部特徵**：凌亂烏黑短碎髮、額前微垂幾縷髮絲、濃黑劍眉、極具野性與專注的琥珀金色瞳孔、下巴常有汗水流淌。
* **標誌性服飾與色彩**：
  - 深海藍色 21 號高中籃球隊無袖球衣（領口與袖口為鮮紅包邊，胸前印有白色 "21" 字樣）。
  - 深藍色運動球褲。
  - 左膝戴著黑色蜂巢防撞護膝加壓套。
  - 腳踩紅白黑三色經典高筒籃球鞋。

### 2. Midjourney Niji 6 三視圖生成提示詞
```text
/imagine prompt: character model sheet, official anime character design sheet of an 17yo East Asian high school basketball player, tall athletic lean muscular build, messy jet-black spiky hair with sweat-slicked fringe, sharp determined amber-gold eyes, wearing dark navy #21 basketball jersey with vibrant red collar trim and white numbers, black athletic compression knee sleeve on left leg, high-top red and white basketball sneakers, full body turnaround showing: full front view, side profile view, 3/4 dynamic dribbling pose, and 3 facial expression close-ups (intense fierce shouting, calm steely focus, exhausted heavy breathing), clean pure white background, crisp anime cel shading, precise animation turnaround sheet, production concept art --ar 16:9 --niji 6 --stylize 200
```

---

## 三、 實戰案例 2：賽博龐克二次元女駭客《莉亞 (Rhea)》

### 1. 角色 DNA 錨點清單
* **年齡與身形**：19 歲少女，俐落敏捷身形，半機械義肢左臂。
* **髮型與臉部特徵**：銀白短鮑伯頭配漸層霓虹粉挑染、右眼為發光天藍色機械義眼（微弱 HUD 光芒）、眼角有微小黑色條碼刺青。
* **標誌性服飾與色彩**：
  - 磨砂黑高領緊身科技戰術背心。
  - 外罩寬鬆透明反光全息防風夾克（邊緣有青色夜光光纖條）。
  - 碳纖維黑戰術工裝短褲與高筒戰術長靴。

### 2. Midjourney Niji 6 三視圖生成提示詞
```text
/imagine prompt: character model sheet, official anime character design sheet of a 19yo female cyberpunk hacker, silver-white bob haircut with neon pink undercut highlights, glowing cyan cybernetic right iris with HUD patterns, subtle barcode tattoo below eye, chrome metallic left prosthetic arm, wearing matte black tactical cropped vest, oversized translucent holographic windbreaker jacket with luminous cyan piping, carbon fiber cargo shorts, full body turnaround showing: front view, 3/4 action aiming pose, back view, and 3 facial expressions (smirking hacker, intense analytical focus, battle cry), clean white studio background, Studio Trigger anime cel aesthetic, official character design turn-around --ar 16:9 --niji 6 --stylize 250
```

---

## 四、 跨鏡頭防崩壞落地操作 SOP (Consistency Pipeline)

為確保在多個分鏡（Shot 01 ~ Shot 10）中角色面容與服飾不走形，嚴格執行以下三道防線：

### 第一道防線：Midjourney Niji 6 的 `--cref` (Character Reference)
1. 使用上述三視圖生成 1 張最完美的角色圖，裁切出**正面清晰半身特寫**，上傳並取得圖片網址（例如 `https://img.url/chen_lin_face.png`）。
2. 在後續每個分鏡生圖提示詞最後加上：
   ```text
   --cref https://img.url/chen_lin_face.png --cw 100 --niji 6
   ```
   *註：`--cw 100` 會鎖定臉部、髮型與服飾；若需要更換衣服則設為 `--cw 20`（僅鎖定臉部）。*

### 第二道防線：圖生影片 (Image-to-Video) 原畫驅動
1. 將 Niji 6 或 FLUX 產出的一致性分鏡原畫，作為視訊模型（Kling 1.5 / Runway Gen-3 / Hailuo）的**首影格輸入 (First Frame Reference)**。
2. 視訊生成提示詞中，**嚴格重複使用【角色 DNA 簡稱】**（如：`The 17yo East Asian basketball player with messy black hair and navy #21 jersey...`）。
3. 絕不可使用泛指名詞（如 "a boy" 或 "a man"），否則 AI 視訊模型會在運動過程中重新演算臉部。

### 第三道防線：首尾幀限制 (First & Last Frame Control)
* 對於高難度動作（如：從「地面蹲踞」到「躍空暴扣」）：
  - 同時輸入 **起始原畫 (Start Frame)** 與 **落地原畫 (End Frame)**。
  - 指令模型專注於計算骨架形變補間（In-between Interpolation），杜絕變異突變。
