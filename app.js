/**
 * AI Video Skills Suite - Interactive Hub Application
 * Handles data rendering, dynamic filtering, modal detail views, and clipboard copies.
 */

// 8 大 Skills 完整資料庫（含核心職責、多種模式、學派預設與公式）
const SKILLS_DATA = [
  {
    id: "short-video-director",
    name: "短動態影片總導演與劇本架構師",
    category: "director",
    icon: "🎬",
    desc: "專為 TikTok、Reels 與 Shorts 設計。掌握黃金前 3 秒留存 Hook、15s/30s/60s 節奏時長模板與 9:16 直式分鏡腳本。",
    modes: ["15s 爽片架構", "30s 反轉架構", "60s 微電影架構", "3種前3秒Hook模式"],
    fullDetails: {
      overview: "負責將抽象的故事或商業概念轉化為極致高留存的短影音劇本。掌握用戶前 3 秒決定是否滑走的心理學機制，並精確規劃每個鏡頭的時間長度（通常 2.5 ~ 4 秒以利 AI 生片）。",
      modesTitle: "支援的三大時長節奏架構",
      modesList: [
        {
          name: "架構 A：15 秒【極限視覺爽片 / 前導預告】",
          desc: "00:00-00:03 (衝擊 Hook) ➔ 00:03-00:10 (每1.5秒切換鏡頭加速度) ➔ 00:10-00:13 (高能絕殺 Climax) ➔ 00:13-00:15 (無縫重播 Loop)。"
        },
        {
          name: "架構 B：30 秒【爆款短片 / 反轉敘事】",
          desc: "00:00-00:03 (矛盾懸念) ➔ 00:03-00:12 (鋪墊衝突，每秒3~4字) ➔ 00:12-00:22 (情勢惡化) ➔ 00:22-00:27 (出人意料反轉) ➔ 00:27-00:30 (CTA引導討論)。"
        },
        {
          name: "架構 C：60 秒【微電影 / 熱血故事】",
          desc: "00:00-00:05 (危機切入) ➔ 00:05-00:20 (Act 1 壓迫) ➔ 00:20-00:40 (Act 2 覺醒蓄力) ➔ 00:40-00:52 (Act 3 巔峰決戰) ➔ 00:52-01:00 (Act 4 餘韻昇華)。"
        }
      ],
      extraTitle: "黃金前 3 秒 Hook 的 3 種模式",
      extraContent: `
        <ul>
          <li><strong>視覺衝擊型 (Visual Punch)</strong>：極限特寫、物理破碎、炸裂光影爆發。</li>
          <li><strong>認知矛盾型 (Curiosity Gap)</strong>：顛覆常理的畫面情境或引發好奇的反問句。</li>
          <li><strong>情緒直擊型 (Emotional Shock)</strong>：角色的極限神情（狂笑、落淚、汗水滴落的窒息凝視）。</li>
        </ul>
      `
    }
  },
  {
    id: "visual-storyboard-artist",
    name: "視覺分鏡師與故事板設計專家",
    category: "visual",
    icon: "🖼️",
    desc: "將文字劇本轉化為導演視覺語法、鏡頭構圖標記、運鏡箭頭與 Midjourney / FLUX 多宮格分鏡生圖提示詞。",
    modes: ["好萊塢手繪線稿", "日系動漫絵コンテ", "UE5 3D灰模預演", "電影彩色關鍵格"],
    fullDetails: {
      overview: "專精於鏡頭景別拆解（ELS/WS/MS/CU/ECU）與構圖法則（三分法、荷蘭角、過肩鏡頭）。提供標準導演運鏡箭頭標記，並一鍵產出 4 格、6 格或 9 格排版的故事板總覽圖。",
      modesTitle: "四大分鏡美學風格 (Visual Style Presets)",
      modesList: [
        {
          name: "風格 A：經典電影手繪線稿 (Classic Film Sketch)",
          desc: "好萊塢工業標準，粗細炭筆/鉛筆排線、帶有紅色攝影機運動箭頭與導演註記、牛皮紙底色質感。"
        },
        {
          name: "風格 B：日系動漫繪分鏡 (Anime E-Konte / 絵コンテ)",
          desc: "宮崎駿/新海誠/MAPPA 風格，流暢墨線稿、附帶假名與秒數標註、極限動態速度線。"
        },
        {
          name: "風格 C：3D 灰模/動態預演 (3D Previs Clay)",
          desc: "虛幻引擎 5 (UE5) 灰模白模視窗質感，嚴格透視網格、精確焦段相機視野 (FOV)。"
        },
        {
          name: "風格 D：電影彩色氛圍關鍵格 (Cinematic Color Keys)",
          desc: "完整光影分級、柯達 35mm 膠卷顆粒、Panavision 變形寬銀幕質感、8k 超高解析度。"
        }
      ],
      extraTitle: "多宮格生圖提示詞公式",
      extraContent: `
        <div class="code-container">
          <pre><code>[Layout & Grid] + [Art Style & Medium] + [Sequential Scene Actions] + [Director Marks] + [Aspect Ratio & Specs]</code></pre>
        </div>
      `
    }
  },
  {
    id: "anime-video-producer",
    name: "二次元動漫與風格化動畫短片專家",
    category: "visual",
    icon: "⚡",
    desc: "專攻 6 大動漫學派。掌握日式作畫張力（衝擊影格 Impact Frames、魚眼透視、速度線）與角色跨鏡一致性 Model Sheet。",
    modes: ["熱血戰鬥Sakuga", "新海誠光影美學", "吉卜力手繪水彩", "奧術2.5D美漫", "賽博龐克二次元", "動態漫畫"],
    fullDetails: {
      overview: "二次元動畫影片的核心難題是「換鏡頭換張臉」。本 Skill 透過 Character DNA 公式與 Model Sheet 規範鎖定角色核心特徵，並融入日式動畫專屬的作畫演出手法。",
      modesTitle: "六大主流動漫美術學派 (Style Presets)",
      modesList: [
        {
          name: "1. shonen-sakuga (熱血戰鬥/作畫爆發)",
          desc: "粗曠墨線、高對比陰影、金屬火花、透視形變、衝擊氣場（MAPPA、Ufotable 風格）。"
        },
        {
          name: "2. shinkai-luminous (新海誠極致光影)",
          desc: "湛藍積雨雲、黃金暮光、強烈透鏡光暈、體積光、浪漫透明質感（CoMix Wave Films 風格）。"
        },
        {
          name: "3. ghibli-watercolor (吉卜力手繪水彩)",
          desc: "柔和手繪水彩筆觸、盎然綠意、復古顆粒感、生動生活細節（宮崎駿風格）。"
        },
        {
          name: "4. arcane-2.5d (奧術/美漫街頭)",
          desc: "手繪筆刷結合 3D 體積、半調網點 (Halftone)、邊緣色差散光 (Chromatic Aberration)。"
        },
        {
          name: "5. cyberpunk-anime (賽博龐克二次元)",
          desc: "霓虹雨夜、冷青與粉紅撞色、全息 HUD 投影、光學迷彩殘影（Studio Trigger 風格）。"
        },
        {
          name: "6. motion-comic (動態漫畫/漫改)",
          desc: "黑白網點、粗黑美漫線稿、大分格邊界、狀聲字字卡爆裂（BOOM! DODODO）。"
        }
      ],
      extraTitle: "核心演出機制：衝擊影格 (Impact Frames)",
      extraContent: `
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          在關鍵打擊或絕殺命中瞬間（0.1~0.2秒），抽離所有色彩，轉為<strong>高對比極簡黑白反轉與草線</strong>，隨後爆發出全彩特效，帶來極致視覺震懾力！
        </p>
      `
    }
  },
  {
    id: "cinematic-sports-video",
    name: "電影級熱血運動影音專家",
    category: "visual",
    icon: "🏀",
    desc: "專注於運動奮鬥題材。具備固定角色資產（陸子軒 #21、高教練）、實體參考圖與 7 鏡頭標準提示詞庫，專為 MiniMax H3 / RunningHub 最佳化。",
    modes: ["I2V 首幀驅動", "S2V 角色一致性驅動", "標準 7 鏡頭庫"],
    fullDetails: {
      overview: "將運動奮鬥故事、熱血訓練場景與比賽絕殺，轉化為具備頂級電影感光影、流暢運鏡、人物情感台詞與沉浸擬音聲效的短影音方案。",
      modesTitle: "生片驅動模式 (Generation Modes)",
      modesList: [
        {
          name: "模式 1：Image-to-Video (I2V 首幀驅動)",
          desc: "以板凳席首幀關鍵格為起點，引導鏡頭推拉與動作演變。"
        },
        {
          name: "模式 2：Subject-to-Video (S2V 角色一致性驅動)",
          desc: "利用陸子軒 #21 與高教練的固定臉部/服裝資產，在多鏡頭劇烈運動中維持 100% 不崩壞。"
        }
      ],
      extraTitle: "標準 7 鏡頭提示詞庫 (Shot 01 ~ Shot 07)",
      extraContent: `
        <ul>
          <li><strong>Shot 01 (板凳孤影)</strong>：Low angle slow pull-out, jersey #21 sits alone in bench shadows.</li>
          <li><strong>Shot 02 (晨霧滑步)</strong>：Low-angle fast lateral tracking, rapid defensive sliding.</li>
          <li><strong>Shot 03 (鐵血棒喝)</strong>：Medium shot push-in, Coach Gao glaring at scraped knee.</li>
          <li><strong>Shot 04 (瘋狗切球)</strong>：Action whip pan shot, explosive steal with motion blur.</li>
          <li><strong>Shot 05 (平飛救球)</strong>：120fps slow-motion crash zoom, diving parallel to court.</li>
          <li><strong>Shot 06 (先發白板)</strong>：Macro tilt up from whiteboard writing '#21 LU ZI-XUAN'.</li>
          <li><strong>Shot 07 (破曉中圈)</strong>：Slow dolly-in over shoulder, stepping into jump-ball circle.</li>
        </ul>
      `
    }
  },
  {
    id: "storyboard-image-generator",
    name: "分鏡繪圖與關鍵格批次生成專家",
    category: "generate",
    icon: "🎨",
    desc: "打通 Prompt 到實體圖檔（PNG）的落地。支援 Agent 內建生圖、Python 批次拼合聯絡表，以及 RunningHub 4 大參考圖資產包（模式 C）。",
    modes: ["模式 A: Agent 內建生圖", "模式 B: Python 批次腳本", "模式 C: RunningHub 多參考資產包"],
    fullDetails: {
      overview: "在短動態影片生產線中，負責將各鏡頭 Prompt 實際渲染為標準命名圖檔（shot_01.png...），並透過「Reference Chaining 參考圖鏈接」技術，傳入前一鏡或三視圖，嚴格防禦人物面部走樣與畫風崩壞。",
      modesTitle: "三大執行模式 (Execution Modes)",
      modesList: [
        {
          name: "模式 A：Agent 自主逐鏡生圖",
          desc: "Agent 調用 generate_image 逐鏡產圖，自動將 Shot N-1 作為參考圖鏈接傳入下一鏡。"
        },
        {
          name: "模式 B：Python 批次腳本與 Contact Sheet",
          desc: "利用 batch_generate_shots.py 指令碼，支援 --dry-run 預覽與自動拼合 4/6/9 宮格聯絡表。"
        },
        {
          name: "模式 C：RunningHub / MiniMax H3 多參考資產包",
          desc: "解耦產出 ref_character（角色）、ref_creature（生物/道具）、ref_environment（場景空鏡）、ref_first_frame（同框起始格）4 大對齊資產與運動提示詞。"
        }
      ],
      extraTitle: "視覺一致性避坑原則",
      extraContent: `
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          角色特徵（年齡、種族、髮型、衣服配色）英文詞組必須 100% 字字一致；切換特寫時需循序漸進並指明聚焦部位；全片光源方向與色溫必須保持同調。
        </p>
      `
    }
  },
  {
    id: "motion-prompt-engineer",
    name: "AI 動態運鏡與視訊生成提示詞工程師",
    category: "generate",
    icon: "🎥",
    desc: "將靜態分鏡轉化為 Kling 1.5、Runway Gen-3、Hailuo (MiniMax)、Luma 等視訊模型之 5 層遞進英文 Prompt、運鏡參數與 API JSON。",
    modes: ["文生影片 (T2V)", "圖生影片 (I2V)", "首尾幀插值 (First-Last Frame)", "結構化 API JSON 陣列"],
    fullDetails: {
      overview: "專門負責將分鏡表轉譯為「高動態率、物理自然、運鏡精確、可直接透過 API 呼叫」的視訊提示詞工程資產。",
      modesTitle: "三大生片模式 (Generation Modes)",
      modesList: [
        {
          name: "1. Text-to-Video (文生影片)",
          desc: "純文字驅動超高動態動作與複雜運鏡軌跡。"
        },
        {
          name: "2. Image-to-Video (圖生影片 / 首幀驅動)",
          desc: "使用 Midjourney/FLUX 產出的一致性首幀，給予定向物理動態驅動指令。"
        },
        {
          name: "3. First-and-Last Frame (首尾幀插值補間)",
          desc: "設定起點姿態與終點姿態，指令模型自動插值生成極限運動過程。"
        }
      ],
      extraTitle: "5 層遞進語法公式",
      extraContent: `
        <div class="code-container">
          <pre><code>Prompt = [Subject & Action] + [Camera Motion] + [Physics & Particles] + [Lighting & Atmosphere] + [Style & Specs]</code></pre>
        </div>
      `
    }
  },
  {
    id: "audio-sound-designer",
    name: "聲音設計與節奏卡點專家",
    category: "audio-post",
    icon: "🔊",
    desc: "掌控短片 70% 的情緒與節奏。涵蓋帶語音標記的 TTS 配音腳本、Suno / Udio 130 BPM 提示詞與毫秒級 SFX 卡點時間軸。",
    modes: ["TTS 情感與氣息標註", "BGM 130 BPM 節奏曲線", "毫秒級 SFX 卡點清單", "Sidechain Ducking 混音法則"],
    fullDetails: {
      overview: "在短動態影片中，聲音決定情緒。本 Skill 負責音訊工程規劃，讓旁白清晰突出，BGM 節奏與關鍵動作碰撞影格完美對齊（On-the-Beat）。",
      modesTitle: "三大音訊工程模組",
      modesList: [
        {
          name: "模組 1：TTS 情感標註腳本",
          desc: "為 ElevenLabs/OpenAI Audio 加入發音控制碼：[pause 0.3s]、[emphasis]、[whisper]、[shout]、[gasp]，語速推薦 1.1x~1.25x。"
        },
        {
          name: "模組 2：BGM 生成提示詞與節奏規劃 (Suno/Udio)",
          desc: "設定精確 BPM（如 130 BPM），四段情緒曲線：0-3s Intro Hook ➔ 3-15s Build-up ➔ 15-25s Climax Drop ➔ 25-30s Fade。"
        },
        {
          name: "模組 3：SFX 毫秒級卡點時間軸",
          desc: "標記鏡頭轉場 (Whoosh)、打擊 (Impact)、低頻下沉 (Sub-drop)、心跳 (Heartbeat) 對齊畫面影格。"
        }
      ],
      extraTitle: "三大混音平衡法則",
      extraContent: `
        <ul>
          <li><strong>人聲閃避 (Ducking)</strong>：旁白響起時，BGM 中頻自動壓低 4~6dB。</li>
          <li><strong>動作卡點 (On-the-Beat)</strong>：關鍵動作碰撞點與 BGM 重拍鼓點在同一幀。</li>
          <li><strong>動態範圍保留</strong>：開場前 0.2 秒微寂靜或耳語，放大下一秒爆發衝擊力。</li>
        </ul>
      `
    }
  },
  {
    id: "video-assembly-pipeline",
    name: "剪輯合成與自動化管線專家",
    category: "audio-post",
    icon: "✂️",
    desc: "流水線終端整合引擎。掌控 9:16 直式安全區（防平台UI遮擋）、爆款動態彈跳字幕與一鍵 FFmpeg / Python 自動化合成腳本。",
    modes: ["9:16 直式安全區規範", "爆款動態字幕規範", "FFmpeg 命令行模板", "auto_assemble.py 自動組裝"],
    fullDetails: {
      overview: "將前序產出的影片鏡頭片段、配音音軌、BGM、SFX 與字幕文字，依據短影音平台規格，組裝輸出為發布級成片。",
      modesTitle: "核心規格與自動化功能",
      modesList: [
        {
          name: "1. 9:16 直式安全區規範 (Vertical Safe Zone)",
          desc: "避開頂部 150px（狀態列/搜尋欄）、右側 120px（讚/留言/轉發UI）、底部 280px（標題/音樂）。核心動態字幕置於螢幕 60%~75% 處。"
        },
        {
          name: "2. 爆款動態字幕規範",
          desc: "每屏限制 6~10 個中文字，純白字色配 2~3px 黑邊與黃/青高亮，彈跳縮放 (110%->100%)，與語音精確同步。"
        },
        {
          name: "3. 自動化組裝腳本 (auto_assemble.py)",
          desc: "提供 Python 腳本讀取 manifest.json，全自動呼叫 FFmpeg 進行無損拼接、BGM Ducking 混音與動態字幕燒錄。"
        }
      ],
      extraTitle: "FFmpeg 核心指令",
      extraContent: `
        <div class="code-container">
          <pre><code>ffmpeg -i video.mp4 -i vo.mp3 -i bgm.mp3 -filter_complex "[2:a]volume=0.3[b];[1:a][b]amix=inputs=2:duration=first[a]" -map 0:v -map "[a]" -c:v copy final.mp4</code></pre>
        </div>
      `
    }
  }
];

// 初始化 DOM 元素
document.addEventListener("DOMContentLoaded", () => {
  renderSkills(SKILLS_DATA);
  setupSkillsSidebar(SKILLS_DATA);
  setupFilters();
  setupSearch();
  setupModal();
  setupMobileNav();
});

/**
 * 畫面最左側 Skills 名稱目錄 (規格：-AAA / -BBB)
 */
function setupSkillsSidebar(skills) {
  const sidebarList = document.getElementById("sidebarList");
  const sidebar = document.getElementById("skillsSidebar");
  const toggleBtn = document.getElementById("sidebarToggleBtn");
  const floatingBtn = document.getElementById("sidebarFloatingBtn");
  if (!sidebarList || !sidebar) return;

  sidebarList.innerHTML = "";

  // 依照使用者規格 -AAA / -BBB 格式生成目錄項目
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.className = "sidebar-item";

    const a = document.createElement("a");
    a.href = `#skill-${skill.id}`;
    a.className = "sidebar-item-link";
    a.dataset.id = skill.id;
    a.title = `${skill.id} (${skill.name})`;
    a.innerHTML = `<span class="hyphen">-</span><span class="skill-name">${skill.id}</span>`;

    // 點擊目錄項目：平滑跳轉並觸發目標卡片高亮霓虹動畫
    a.addEventListener("click", (e) => {
      e.preventDefault();

      // 更新側邊欄 active 狀態
      document.querySelectorAll(".sidebar-item-link").forEach(el => el.classList.remove("active"));
      a.classList.add("active");

      // 檢查是否被目前 filter 隱藏，若是則自動切換回全選
      const targetCard = document.getElementById(`skill-${skill.id}`);
      const activePill = document.querySelector(".pill-btn.active");
      if (targetCard && targetCard.offsetParent === null && activePill && activePill.dataset.filter !== "all") {
        document.querySelector('.pill-btn[data-filter="all"]')?.click();
      }

      // 平滑滾動至目標卡片
      const finalCard = document.getElementById(`skill-${skill.id}`);
      if (finalCard) {
        finalCard.scrollIntoView({ behavior: "smooth", block: "center" });

        // 觸發卡片高亮光暈脈衝動畫
        finalCard.classList.remove("highlight-pulse");
        void finalCard.offsetWidth; // 強制重繪以重啟 CSS 動畫
        finalCard.classList.add("highlight-pulse");
      }

      // 小螢幕下跳轉後自動收合目錄
      if (window.innerWidth <= 1280) {
        sidebar.classList.remove("open-mobile");
      }
    });

    li.appendChild(a);
    sidebarList.appendChild(li);
  });

  // 收合目錄按鈕事件
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.add("collapsed");
      sidebar.classList.remove("open-mobile");
      floatingBtn?.classList.add("visible");
    });
  }

  // 浮動快捷開關事件（重新開啟目錄）
  if (floatingBtn) {
    floatingBtn.addEventListener("click", () => {
      sidebar.classList.remove("collapsed");
      sidebar.classList.add("open-mobile");
      floatingBtn.classList.remove("visible");
    });
  }

  // 滾動自動追蹤 (ScrollSpy)：畫面滑動到哪個 Skill 卡片，目錄自動對應高亮
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    skills.forEach(skill => {
      const card = document.getElementById(`skill-${skill.id}`);
      if (card && card.offsetParent !== null) {
        const top = card.offsetTop;
        const height = card.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll(".sidebar-item-link").forEach(el => el.classList.remove("active"));
          const activeLink = document.querySelector(`.sidebar-item-link[data-id="${skill.id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      }
    });
  }, { passive: true });
}

/**
 * 渲染技能卡片網格
 */
function renderSkills(skills) {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";

  if (skills.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        找不到符合條件的 Skill。請嘗試其他搜尋關鍵字！
      </div>
    `;
    return;
  }

  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.id = `skill-${skill.id}`; // 與左側目錄錨點精準對應
    card.onclick = () => openSkillModal(skill.id);

    const modesBadges = skill.modes.map(m => `<span class="mode-badge">${m}</span>`).join("");

    card.innerHTML = `
      <div>
        <div class="skill-card-header">
          <div class="skill-card-icon">${skill.icon}</div>
          <div class="skill-card-title-group">
            <h3>${skill.name}</h3>
            <span class="skill-card-id">${skill.id}</span>
          </div>
        </div>
        <p class="skill-card-desc">${skill.desc}</p>
        <div class="skill-card-modes">${modesBadges}</div>
      </div>
      <div class="skill-card-footer">
        <span>檢視完整模式與公式</span>
        <span>➔</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * 分類按鈕切換
 */
function setupFilters() {
  const pills = document.querySelectorAll(".pill-btn");
  pills.forEach(btn => {
    btn.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;
      applyFilterAndSearch(category, document.getElementById("skillSearch").value);
    });
  });
}

/**
 * 搜尋輸入監聽
 */
function setupSearch() {
  const searchInput = document.getElementById("skillSearch");
  searchInput.addEventListener("input", (e) => {
    const activeCategory = document.querySelector(".pill-btn.active")?.dataset.filter || "all";
    applyFilterAndSearch(activeCategory, e.target.value);
  });
}

/**
 * 結合分類與搜尋過濾
 */
function applyFilterAndSearch(category, query) {
  const q = query.trim().toLowerCase();
  const filtered = SKILLS_DATA.filter(skill => {
    const matchesCat = (category === "all" || skill.category === category);
    const matchesQuery = !q || (
      skill.name.toLowerCase().includes(q) ||
      skill.id.toLowerCase().includes(q) ||
      skill.desc.toLowerCase().includes(q) ||
      skill.modes.some(m => m.toLowerCase().includes(q))
    );
    return matchesCat && matchesQuery;
  });

  renderSkills(filtered);
}

/**
 * 彈窗詳細資訊管理
 */
function setupModal() {
  const backdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalClose");

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("active")) {
      closeModal();
    }
  });
}

function openSkillModal(skillId) {
  const skill = SKILLS_DATA.find(s => s.id === skillId);
  if (!skill) return;

  const backdrop = document.getElementById("modalBackdrop");
  document.getElementById("modalIcon").textContent = skill.icon;
  document.getElementById("modalTitle").textContent = skill.name;
  document.getElementById("modalId").textContent = skill.id;

  const modalBody = document.getElementById("modalBody");
  
  const modesHtml = skill.fullDetails.modesList.map(item => `
    <div class="modal-mode-item">
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
    </div>
  `).join("");

  modalBody.innerHTML = `
    <div>
      <div class="modal-section-title">📌 核心定位與功能概述</div>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">${skill.fullDetails.overview}</p>
    </div>

    <div>
      <div class="modal-section-title">⚡ ${skill.fullDetails.modesTitle}</div>
      <div class="modal-modes-list">${modesHtml}</div>
    </div>

    ${skill.fullDetails.extraTitle ? `
      <div>
        <div class="modal-section-title">🛠️ ${skill.fullDetails.extraTitle}</div>
        <div>${skill.fullDetails.extraContent}</div>
      </div>
    ` : ""}
  `;

  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const backdrop = document.getElementById("modalBackdrop");
  backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * 一鍵複製代碼 / Prompt 輔助函數
 */
function copyText(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const textToCopy = element.innerText || element.textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast("已成功複製到剪貼簿！");
  }).catch(err => {
    console.error("Copy failed", err);
    showToast("複製失敗，請手動選取複製");
  });
}

/**
 * Toast 提示彈窗
 */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/**
 * 手機端漢堡選單切換
 */
function setupMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle) {
    toggle.addEventListener("click", () => {
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "rgba(9, 13, 22, 0.98)";
        navLinks.style.padding = "1.5rem";
        navLinks.style.borderBottom = "1px solid var(--border-subtle)";
      }
    });
  }
}
