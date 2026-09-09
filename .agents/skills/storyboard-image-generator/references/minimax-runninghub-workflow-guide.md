# RunningHub / MiniMax H3 多參考生視頻工作流規範 (Multi-Reference Video Guide)

本規範專門對齊 **RunningHub / ComfyUI** 上的 **MiniMax H3「參考生視頻」** 節點架構，指導如何生成並分配多個 `Load Image` 節點所需的參考圖像。

---

## 一、 核心節點與資產映射 (Node Architecture)

在 MiniMax H3 参考生视频工作流中，多個 `Load Image` 節點各司其職，切勿將複雜元素全部混在同一張圖中：

| 節點代號 | 資產命名 | 角色職責 | 提示詞設計關鍵 (Prompt Rule) |
| :--- | :--- | :--- | :--- |
| **Node A (主體)** | `ref_character.png` | **角色主體外觀與服裝錨定** | 半身或全身，人物輪廓分明，背景盡量簡潔或帶有純色/微暗調，突顯髮型、臉部輪廓與服飾標誌。 |
| **Node B (對手/生物)** | `ref_creature.png` | **對立怪物、生物或關鍵載具** | 突出生物肌肉線條、異形特徵、發光核心或特定材質（如截圖中的電光暗黑巨獸）。 |
| **Node C (場景環境)** | `ref_environment.png` | **空間透視與大氣光影** | 純環境（無人物干擾），交代天氣、光源角度、色調（如雨夜霓虹天台、賽博廢墟）。 |
| **Node D (起始首幀)** | `ref_first_frame.png` | **影片啟動時的靜態構圖** | 主角與怪物在該環境中的同框站位，決定攝影機初始視角與景深。 |

---

## 二、 提示詞分離工程 (Prompt Decoupling)

為避免 MiniMax 模型在解析多張參考圖時發生特徵混淆（例如把怪物的獠牙長在主角臉上），生成各參考圖時必須遵循**「特徵解耦」**：

### 1. 角色參考圖 (`ref_character`)
```text
[Subject Focus] A cool young East Asian superhero boy, messy reddish-brown spiky hair, wearing black tactical stealth suit with a white star insignia on chest, dynamic billowing crimson red cape, black gloves and boots, confident smirk, studio rim lighting, simple dark atmospheric backdrop, highly detailed character concept art, 8k resolution.
```

### 2. 生物/對象參考圖 (`ref_creature`)
```text
[Creature Focus] A terrifying muscular demonic shadow beast, obsidian armored skin, jagged electric lightning coursing across broad shoulders, glowing crimson molten core in chest, roaring jaws with razor-sharp fangs, glowing red eyes, dark smoke aura, character design sheet, sharp focus, 8k resolution.
```

### 3. 起始關鍵格 (`ref_first_frame`)
```text
[Interaction Standoff] Cinematic 16:9 wide shot, the red-caped superhero boy standing bravely on a rainy skyscraper rooftop edge, facing off against the towering electric demonic beast emerging from the dark storm clouds, volumetric red and blue city neon reflections, dramatic lightning flashes, epic showdown tension, Panavision 35mm film still.
```

---

## 三、 視訊運動提示詞撰寫 (Video Motion Prompt for MiniMax)

將參考圖餵入 `Load Image` 節點後，在 MiniMax 視訊提示詞框中，只需專注描述**「動作動態與互動」**，無需重複描述靜態長相：

> **MiniMax H3 視訊文字框範例**：
> `Cinematic dynamic camera push-in. The red-caped boy clenches his fists as sparks ignite around him, while the giant demonic shadow beast roars violently, unleashing crackling electrical surges into the stormy sky. Heavy rain streams down, cape flapping fiercely in the wind.`
