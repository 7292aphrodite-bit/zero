// ===== Year =====
    // This code is designed to work on all pages that have a footer.
    if (document.getElementById("year")) {
        document.getElementById("year").textContent = new Date().getFullYear();
    }

    // ===== Theme (dark/light) =====
    const root = document.documentElement;
    const themeBtn = document.getElementById("themeBtn");
    const themeLabel = document.getElementById("themeLabel");
    const themeIcon = document.getElementById("themeIcon");

    function setTheme(mode){
      if(mode === "dark"){
        root.setAttribute("data-theme", "dark");
        if (themeLabel) themeLabel.textContent = t("btn_light");
        if (themeIcon) themeIcon.innerHTML = `
          <path d="M21 13.5A8.5 8.5 0 0 1 10.5 3a7 7 0 1 0 10.5 10.5Z" stroke="currentColor" stroke-width="2" fill="none" />
        `;
      } else {
        root.removeAttribute("data-theme");
        if (themeLabel) themeLabel.textContent = t("btn_dark");
        if (themeIcon) themeIcon.innerHTML = `
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
      }
      localStorage.setItem("naro_theme", mode);
    }

    // ===== i18n =====
    const I18N = {
      ko: {
        brand:"나로삶",
        tagline:"천개의 커리큘럼",
        nav_about:"소개", nav_curriculum:"커리큘럼", nav_values:"가치", nav_contact:"연락", nav_privacy:"개인정보",
        kicker:"나로, 삶을 설계하는 작은 실험실",
        hero_title:"나로삶",
        hero_subtitle:"나로삶은 “나답게 살아가는 방법”을 탐색하는 기록이자 프로젝트입니다. 일상, 창작, 배움, 돌봄, 커뮤니티를 연결해 — 오늘의 선택이 내일의 삶이 되도록 돕습니다.",
        btn_view_curriculum:"천개의 커리큘럼 보기 →",
        btn_pick_question:"오늘의 질문 뽑기",
        today_question_label:"오늘의 질문",
        card_curriculum_title:"천만개의 커리큘럼이란?",
        card_curriculum_desc:"정답 하나가 아니라, 각자의 삶에 맞춘 ‘무수한 길’을 뜻해요. 매일의 작은 루틴·프로젝트·관계·학습이 모여 결국 나만의 커리큘럼이 됩니다.",
        step1:"오늘의 질문 하나로 시작하기",
        step2:"10분 실천 → 1줄 기록 → 1번 수정",
        step3:"나의 리듬을 찾고, 계속 업데이트하기",
        memo_title_1:"1단계: 오늘의 질문",
        memo_ph_1:"예) 오늘 나에게 던질 질문은 무엇인가요?\n예) 오늘 반드시 지킬 10분 실천은?",
        memo_title_2:"2단계: 10분 실천/기록",
        memo_ph_2:"예) 오늘 10분 실천:\n예) 1줄 기록:\n예) 1번 수정:",
        memo_title_3:"3단계: 리듬/업데이트",
        memo_ph_3:"예) 내 리듬(시간/장소/컨디션)은?\n예) 다음 업데이트 1가지는?",
        card_values_title:"나로삶이 지키는 4가지 가치",
        card_values_desc:"가볍지만 깊게, 꾸준하지만 유연하게.",
        value1_badge:"자기주도", value1_text:"내가 선택하고 내가 책임지는 삶",
        value2_badge:"존엄", value2_text:"성과보다 존재를 먼저 존중하기",
        value3_badge:"연결", value3_text:"혼자가 아니라 함께 배우고 돌보기",
        value4_badge:"지속", value4_text:"오래 갈 수 있는 속도와 구조 만들기",
        card_do_title:"무엇을 하게 되나요?",
        card_do_desc:"나로삶은 콘텐츠이자 실천 프로젝트예요. 아래는 예시입니다.",
        do1_badge:"기록", do1_text:"존재로그 / 일상 아카이브 / 한 줄 에세이",
        do2_badge:"창작", do2_text:"캘리그라피·커피·로컬 프로젝트",
        do3_badge:"학습", do3_text:"루틴 실험 / 미니 커리큘럼 설계",
        do4_badge:"돌봄", do4_text:"가족·커뮤니티 기반 지원 아이디어",
        card_contact_title:"함께하기",
        card_contact_desc:"“나로삶”은 언제나 협업과 연결을 환영합니다.<br/>아래 정보를 당신의 채널에 맞게 바꿔서 사용하세요.",
        contact_example_title:"연락 예시",
        contact_email:"• 이메일: your @email.com",
        contact_insta:"• 인스타그램: @naro_salm_0",
        contact_msg:"• 메시지: “나로삶 협업/강의/프로젝트 문의드립니다.”",
        footer:"나로삶 — 천개의 커리큘럼",
        btn_dark:"다크",
        btn_light:"라이트",
        btn_cancel:"취소",
        btn_save:"저장",
        btn_share:"공유하기",
        btn_copy:"공유문구 복사",
        btn_export:"내 기록 내보내기",
        btn_import:"기록 가져오기",
        toast_saved:"저장 완료!",
        toast_copied:"복사 완료!",
        toast_exported:"내보내기 완료!",
        toast_imported:"가져오기 완료!",
        share_title:"나로삶 기록",
        share_intro:"오늘의 기록을 공유합니다.",
      },
      en: {
        brand:"Naro-Salm",
        tagline:"One Thousand Curriculums",
        nav_about:"About", nav_curriculum:"Curriculum", nav_values:"Values", nav_contact:"Contact", nav_privacy:"Privacy",
        kicker:"A small lab to design your life",
        hero_title:"Naro-Salm",
        hero_subtitle:"Naro-Salm is a record and project to explore how to live as yourself. It connects daily life, creation, learning, care, and community—so today's choices become tomorrow's life.",
        btn_view_curriculum:"View the curriculum →",
        btn_pick_question:"Pick today’s question",
        today_question_label:"Today’s Question",
        card_curriculum_title:"What is “Ten Million Curriculums”?",
        card_curriculum_desc:"Not one right answer—countless paths tailored to each life. Small routines, projects, relationships, and learning add up to your own curriculum.",
        step1:"Start with one question",
        step2:"10-minute action → 1-line note → 1 revision",
        step3:"Find your rhythm and keep updating",
        memo_title_1:"Step 1: Today’s question",
        memo_ph_1:"e.g.) What question will I ask myself today?\ne.g.) What 10-minute action will I keep?",
        memo_title_2:"Step 2: Action / Note",
        memo_ph_2:"e.g.) 10-minute action:\ne.g.) 1-line note:\ne.g.) 1 revision:",
        memo_title_3:"Step 3: Rhythm / Update",
        memo_ph_3:"e.g.) My rhythm (time/place/condition):\ne.g.) One update for next time:",
        card_values_title:"Four Values",
        card_values_desc:"Light but deep, steady but flexible.",
        value1_badge:"Agency", value1_text:"I choose and take responsibility",
        value2_badge:"Dignity", value2_text:"Respect existence before outcomes",
        value3_badge:"Connection", value3_text:"Learn and care together",
        value4_badge:"Sustain", value4_text:"Build a pace that lasts",
        card_do_title:"What will you do?",
        card_do_desc:"Naro-Salm is content and practice. Examples:",
        do1_badge:"Record", do1_text:"Existence log / daily archive / micro-essays",
        do2_badge:"Create", do2_text:"Calligraphy, coffee, local projects",
        do3_badge:"Learn", do3_text:"Routine experiments / mini curricula",
        do4_badge:"Care", do4_text:"Family & community care ideas",
        card_contact_title:"Let’s collaborate",
        card_contact_desc:"Naro-Salm welcomes collaboration and connection.<br/>Replace the info below with your own.",
        contact_example_title:"Contact example",
        contact_email:"• Email: your @email.com",
        contact_insta:"• Instagram: @naro_salm_0",
        contact_msg:"• Message: “Hello! I'd like to collaborate with Naro-Salm.”",
        footer:"Naro-Salm — One Thousand Curriculums",
        btn_dark:"Dark",
        btn_light:"Light",
        btn_cancel:"Cancel",
        btn_save:"Save",
        btn_share:"Share",
        btn_copy:"Copy share text",
        btn_export:"Export my data",
        btn_import:"Import data",
        toast_saved:"Saved!",
        toast_copied:"Copied!",
        toast_exported:"Exported!",
        toast_imported:"Imported!",
        share_title:"Naro-Salm Log",
        share_intro:"Sharing today’s log.",
      },
      ja: {
        brand:"ナロサルム",
        tagline:"千のカリキュラム",
        nav_about:"紹介", nav_curriculum:"カリキュラム", nav_values:"価値", nav_contact:"連絡", nav_privacy:"プライバシー",
        kicker:"人生を設計する小さな実験室",
        hero_title:"ナロサルム",
        hero_subtitle:"ナロサルムは「自分らしく生きる方法」を探す記録とプロジェクトです。日常・創作・学び・ケア・コミュニティをつなぎ、今日の選択が明日の人生になるよう支えます。",
        btn_view_curriculum:"カリキュラムを見る →",
        btn_pick_question:"今日の質問を選ぶ",
        today_question_label:"今日の質問",
        card_curriculum_title:"「一千万のカリキュラム」とは？",
        card_curriculum_desc:"正解は一つではなく、人生に合わせた無数の道。小さな習慣・プロジェクト・関係・学びが積み重なり、あなただけのカリキュラムになります。",
        step1:"一つの質問から始める",
        step2:"10分実践 → 1行記録 → 1回修正",
        step3:"自分のリズムを見つけ、更新し続ける",
        memo_title_1:"ステップ1：今日の質問",
        memo_ph_1:"例）今日、自分に投げる質問は？\n例）守りたい10分実践は？",
        memo_title_2:"ステップ2：実践／記録",
        memo_ph_2:"例）10分実践：\n例）1行記録：\n例）1回修正：",
        memo_title_3:"ステップ3：リズム／更新",
        memo_ph_3:"例）私のリズム（時間/場所/状態）：\n例）次の更新1つ：",
        card_values_title:"4つの価値",
        card_values_desc:"軽やかに、でも深く。着実に、でも柔軟に。",
        value1_badge:"主体性", value1_text:"自分で選び、責任を持つ",
        value2_badge:"尊厳", value2_text:"成果より存在を尊重する",
        value3_badge:"つながり", value3_text:"共に学び、ケアする",
        value4_badge:"持続", value4_text:"続けられるペースを作る",
        card_do_title:"何をするの？",
        card_do_desc:"ナロサルムはコンテンツであり実践です。例：",
        do1_badge:"記録", do1_text:"存在ログ／日常アーカイブ／短いエッセイ",
        do2_badge:"創作", do2_text:"カリグラフィー・コーヒー・ローカルPJ",
        do3_badge:"学び", do3_text:"習慣実験／ミニカリキュラム設計",
        do4_badge:"ケア", do4_text:"家族・コミュニティのケアアイデア",
        card_contact_title:"一緒に",
        card_contact_desc:"コラボやつながりを歓迎します。<br/>以下は自分の情報に置き換えてください。",
        contact_example_title:"連絡例",
        contact_email:"• メール: your @email.com",
        contact_insta:"• Instagram: @naro_salm_0",
        contact_msg:"• メッセージ:「コラボの相談です。」",
        footer:"ナロサルム — 千のカリキュラム",
        btn_dark:"ダーク",
        btn_light:"ライト",
        btn_cancel:"キャンセル",
        btn_save:"保存",
        btn_share:"共有",
        btn_copy:"共有文をコピー",
        btn_export:"データ書き出し",
        btn_import:"データ読み込み",
        toast_saved:"保存しました！",
        toast_copied:"コピーしました！",
        toast_exported:"書き出しました！",
        toast_imported:"読み込みました！",
        share_title:"ナロサルム記録",
        share_intro:"今日の記録を共有します。",
      },
      es: {
        brand:"Naro-Salm",
        tagline:"Mil Currículos",
        nav_about:"Acerca", nav_curriculum:"Currículo", nav_values:"Valores", nav_contact:"Contacto", nav_privacy:"Privacidad",
        kicker:"Un pequeño laboratorio para diseñar tu vida",
        hero_title:"Naro-Salm",
        hero_subtitle:"Naro-Salm es un registro y proyecto para explorar cómo vivir siendo tú. Conecta vida diaria, creación, aprendizaje, cuidado y comunidad para que las decisiones de hoy sean la vida de mañana.",
        btn_view_curriculum:"Ver currículo →",
        btn_pick_question:"Elegir pregunta de hoy",
        today_question_label:"Pregunta de hoy",
        card_curriculum_title:"¿Qué es “Diez Millones de Currículos”?",
        card_curriculum_desc:"No hay una sola respuesta correcta, sino caminos infinitos según cada vida. Rutinas, proyectos, relaciones y aprendizaje se convierten en tu propio currículo.",
        step1:"Empieza con una pregunta",
        step2:"10 min de acción → 1 línea → 1 mejora",
        step3:"Encuentra tu ritmo y actualízalo",
        memo_title_1:"Paso 1: Pregunta de hoy",
        memo_ph_1:"Ej.) ¿Qué pregunta me haré hoy?\nEj.) ¿Qué acción de 10 min mantendré?",
        memo_title_2:"Paso 2: Acción / Nota",
        memo_ph_2:"Ej.) Acción de 10 min:\nEj.) Nota de 1 línea:\nEj.) 1 mejora:",
        memo_title_3:"Paso 3: Ritmo / Actualización",
        memo_ph_3:"Ej.) Mi ritmo (tiempo/lugar/estado):\nEj.) Una actualización:",
        card_values_title:"Cuatro valores",
        card_values_desc:"Ligero pero profundo, constante pero flexible.",
        value1_badge:"Autonomía", value1_text:"Elijo y me responsabilizo",
        value2_badge:"Dignidad", value2_text:"Respeto la existencia antes que resultados",
        value3_badge:"Conexión", value3_text:"Aprender y cuidar juntos",
        value4_badge:"Sostenible", value4_text:"Un ritmo que perdure",
        card_do_title:"¿Qué harás?",
        card_do_desc:"Naro-Salm es contenido y práctica. Ejemplos:",
        do1_badge:"Registro", do1_text:"Diario / archivo diario / micro-ensayos",
        do2_badge:"Crear", do2_text:"Caligrafía, café, proyectos locales",
        do3_badge:"Aprender", do3_text:"Experimentos de rutina / mini currículos",
        do4_badge:"Cuidar", do4_text:"Ideas de cuidado familiar y comunitario",
        card_contact_title:"Colaboremos",
        card_contact_desc:"Naro-Salm da la bienvenida a colaboraciones.<br/>Reemplaza esta información con la tuya.",
        contact_example_title:"Ejemplo de contacto",
        contact_email:"• Email: your @email.com",
        contact_insta:"• Instagram: @naro_salm_0",
        contact_msg:"• Mensaje: “Hola, quisiera colaborar.”",
        footer:"Naro-Salm — Mil Currículos",
        btn_dark:"Oscuro",
        btn_light:"Claro",
        btn_cancel:"Cancelar",
        btn_save:"Guardar",
        btn_share:"Compartir",
        btn_copy:"Copiar texto",
        btn_export:"Exportar datos",
        btn_import:"Importar datos",
        toast_saved:"¡Guardado!",
        toast_copied:"¡Copiado!",
        toast_exported:"¡Exportado!",
        toast_imported:"¡Importado!",
        share_title:"Registro Naro-Salm",
        share_intro:"Comparto mi registro de hoy.",
      }
    };

    function getLang(){
      return localStorage.getItem("naro_lang") || "ko";
    }
    function t(key){
      const lang = getLang();
      return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N.ko[key] || key);
    }
    function applyI18n(){
      const lang = getLang();
      document.documentElement.lang = lang;

      document.querySelectorAll("[data-i18n]").forEach(el=>{
        const key = el.getAttribute("data-i18n");
        const val = t(key);
        if(el.tagName === "INPUT" || el.tagName === "TEXTAREA"){
          el.placeholder = val;
        } else {
          // allow <br/> in translations
          el.innerHTML = val;
        }
      });

      // theme button label update based on current theme
      if (themeLabel) {
          const isDark = root.getAttribute("data-theme") === "dark";
          themeLabel.textContent = isDark ? t("btn_light") : t("btn_dark");
      }
    }

    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
        (function initLang(){
          const saved = getLang();
          langSelect.value = saved;
          applyI18n();
        })();
        langSelect.addEventListener("change", ()=>{
          localStorage.setItem("naro_lang", langSelect.value);
          applyI18n();
        });
    }


    // init theme: saved > system preference
    (function initTheme(){
      const saved = localStorage.getItem("naro_theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const start = saved ? saved : (prefersDark ? "dark" : "light");
      setTheme(start);
      applyI18n();
    })();

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
          const isDark = root.getAttribute("data-theme") === "dark";
          setTheme(isDark ? "light" : "dark");
          applyI18n();
        });
    }

    // ===== Random Question (다국어용 질문도 간단 적용) =====
    const questionsByLang = {
      ko: [
        "지금 내 삶에서 가장 가볍게 바꿀 수 있는 1%는 무엇일까?",
        "오늘 내가 ‘나답다’고 느낀 순간은 언제였을까?",
        "나를 살리는 루틴 1개, 나를 지치는 루틴 1개는?"
      ],
      en: [
        "What 1% change can I make today with the least effort?",
        "When did I feel most like myself today?",
        "One routine that helps me, one that drains me?"
      ],
      ja: [
        "今日、いちばん軽く変えられる1%は何？",
        "今日「自分らしい」と感じた瞬間は？",
        "自分を助ける習慣1つ、疲れさせる習慣1つは？"
      ],
      es: [
        "¿Qué 1% puedo cambiar hoy con el menor esfuerzo?",
        "¿Cuándo me sentí más yo hoy?",
        "Una rutina que me ayuda y otra que me drena."
      ]
    };

    const qText = document.getElementById("questionText");
    const newQuestionBtn = document.getElementById("newQuestionBtn");

    function pickQuestion(){
      const lang = getLang();
      const arr = questionsByLang[lang] || questionsByLang.ko;
      const idx = Math.floor(Math.random() * arr.length);
      qText.textContent = "“" + arr[idx] + "”";
    }

    if (newQuestionBtn) {
        newQuestionBtn.addEventListener("click", pickQuestion);
    }
    
    // keyboard shortcut: Q = new question, T = toggle theme
    window.addEventListener("keydown", (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
        if(e.key.toLowerCase() === "q" && newQuestionBtn) pickQuestion();
        if(e.key.toLowerCase() === "t" && themeBtn) themeBtn.click();
    });

    // ===== 이모지 버튼 클릭 -> 입력 모달 =====
    const overlay = document.getElementById("memoOverlay");
    const memoTitle = document.getElementById("memoTitle");
    const memoSub = document.getElementById("memoSub");
    const memoTextarea = document.getElementById("memoTextarea");
    const memoCloseBtn = document.getElementById("memoCloseBtn");
    const memoCancelBtn = document.getElementById("memoCancelBtn");
    const memoSaveBtn = document.getElementById("memoSaveBtn");

    // toast
    const toast = document.getElementById("toast");
    let toastTimer = null;
    function showToast(msg){
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(()=> toast.classList.remove("show"), 1300);
    }

    let currentStepKey = null;
    let lastFocusEl = null;

    function openMemo(step, titleKey, placeholderKey){
      currentStepKey = "naro_memo_step_" + step;
      lastFocusEl = document.activeElement;

      memoTitle.textContent = t(titleKey) || "Memo";
      memoSub.textContent = t("share_intro");
      memoTextarea.placeholder = t(placeholderKey) || "";

      memoTextarea.value = localStorage.getItem(currentStepKey) || "";

      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      setTimeout(() => memoTextarea.focus(), 0);
    }

    function closeMemo(){
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      currentStepKey = null;

      if(lastFocusEl && typeof lastFocusEl.focus === "function"){
        lastFocusEl.focus();
      }
    }

    const emojiBtns = document.querySelectorAll(".emojiBtn");
    if (emojiBtns.length > 0) {
        emojiBtns.forEach(btn => {
          btn.addEventListener("click", () => {
            openMemo(
              btn.dataset.step,
              btn.getAttribute("data-title-i18n"),
              btn.getAttribute("data-placeholder-i18n")
            );
          });
        });

        memoCloseBtn.addEventListener("click", closeMemo);
        memoCancelBtn.addEventListener("click", closeMemo);

        memoSaveBtn.addEventListener("click", () => {
          if(!currentStepKey) return;
          localStorage.setItem(currentStepKey, memoTextarea.value.trim());
          showToast(t("toast_saved"));
          closeMemo();
        });

        overlay.addEventListener("click", (e) => {
          if(e.target === overlay) closeMemo();
        });

        window.addEventListener("keydown", (e) => {
          if(e.key === "Escape" && overlay.classList.contains("open")){
            closeMemo();
          }
        });
    }

    // ===== (추가) 공유/내보내기/가져오기 =====
    function collectUserData(){
      const qTextContent = qText ? qText.textContent : "";
      return {
        app: "naro-salm-template",
        version: "1.0.0",
        lang: getLang(),
        theme: localStorage.getItem("naro_theme") || "light",
        updatedAt: new Date().toISOString(),
        question: qTextContent,
        memos: {
          step1: localStorage.getItem("naro_memo_step_1") || "",
          step2: localStorage.getItem("naro_memo_step_2") || "",
          step3: localStorage.getItem("naro_memo_step_3") || ""
        }
      };
    }

    function buildShareText(){
      const data = collectUserData();
      const title = t("share_title");
      const intro = t("share_intro");
      const q = data.question || "";
      const m1 = data.memos.step1?.trim();
      const m2 = data.memos.step2?.trim();
      const m3 = data.memos.step3?.trim();

      const lines = [
        `${title}`,
        `${intro}`,
        ``,
        `${t("today_question_label")}: ${q.replaceAll("“","").replaceAll("”","")}`,
      ];

      if(m1) lines.push(`- 1) ${m1}`);
      if(m2) lines.push(`- 2) ${m2}`);
      if(m3) lines.push(`- 3) ${m3}`);

      lines.push(``);
      lines.push(`#NaroSalm #TenMillionCurriculums`);

      return lines.join("\n");
    }

    async function copyText(text){
      try{
        await navigator.clipboard.writeText(text);
        showToast(t("toast_copied"));
      } catch {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showToast(t("toast_copied"));
      }
    }

    const shareBtn = document.getElementById("shareBtn");
    const copyBtn = document.getElementById("copyBtn");
    const exportBtn = document.getElementById("exportBtn");
    const importBtn = document.getElementById("importBtn");
    const importFile = document.getElementById("importFile");

    if (copyBtn) {
        copyBtn.addEventListener("click", async ()=>{
          await copyText(buildShareText());
        });
    }
    
    if (shareBtn) {
        shareBtn.addEventListener("click", async ()=>{
          const text = buildShareText();
          const title = t("share_title");

          // 1) Web Share API (모바일/지원 브라우저)
          if(navigator.share){
            try{
              await navigator.share({ title, text });
              return;
            } catch (e){
              // user canceled or failed -> fallback
            }
          }

          // 2) Fallback: 새 창에 공유 링크 모음 (X/FB/LinkedIn)
          const encoded = encodeURIComponent(text);
          const x = `https://twitter.com/intent/tweet?text=${encoded}`;
          const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}&quote=${encoded}`;
          const li = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}`;

          const html = `
            <div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, Arial; padding:16px">
              <h3 style="margin:0 0 10px">Share</h3>
              <p style="margin:0 0 10px; color:#555">Copy text or open a share link:</p>
              <pre style="white-space:pre-wrap; border:1px solid #ddd; padding:10px; border-radius:10px; background:#fafafa">${text.replaceAll("<","&lt;")}</pre>
              <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px">
                <a href="${x}" target="_blank" rel="noreferrer">Share to X</a>
                <a href="${fb}" target="_blank" rel="noreferrer">Share to Facebook</a>
                <a href="${li}" target="_blank" rel="noreferrer">Share to LinkedIn</a>
              </div>
              <p style="margin-top:10px; color:#777; font-size:12px">Tip: Instagram/Kakao usually works best by copying text first.</p>
            </div>
          `;
          const w = window.open("", "_blank");
          if(w){
            w.document.open();
            w.document.write(html);
            w.document.close();
          }else{
            await copyText(text);
          }
        });
    }

    if (exportBtn) {
        exportBtn.addEventListener("click", ()=>{
          const data = collectUserData();
          const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `naro-salm-log_${new Date().toISOString().slice(0,10)}.json`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          showToast(t("toast_exported"));
        });
    }

    if (importBtn) {
        importBtn.addEventListener("click", ()=> importFile.click());
    }
    
    if (importFile) {
        importFile.addEventListener("change", async ()=>{
          const file = importFile.files && importFile.files[0];
          if(!file) return;
          try{
            const txt = await file.text();
            const data = JSON.parse(txt);

            // 최소 검증
            if(!data || !data.memos) throw new Error("Invalid");

            localStorage.setItem("naro_memo_step_1", data.memos.step1 || "");
            localStorage.setItem("naro_memo_step_2", data.memos.step2 || "");
            localStorage.setItem("naro_memo_step_3", data.memos.step3 || "");

            if(data.lang){
              localStorage.setItem("naro_lang", data.lang);
              langSelect.value = data.lang;
            }
            if(data.theme){
              localStorage.setItem("naro_theme", data.theme);
              setTheme(data.theme);
            }

            if(data.question && qText){
              qText.textContent = data.question;
            }

            applyI18n();
            showToast(t("toast_imported"));
          } catch(e){
            alert("Import failed. Please choose a valid JSON export file.");
          } finally {
            importFile.value = "";
          }
        });
    }
