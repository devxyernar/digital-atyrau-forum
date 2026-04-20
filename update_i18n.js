const fs = require('fs');

const file = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const interfaceInjection = `  careerExpo: {
    badge: string;
    title: string;
    subtitle: string;
    location: string;
    date: string;
    participants: string;
    exhibitorsSubtitle: string;
    exhibitorsTitle: string;
    exhibitorTypes: Array<{ title: string; desc: string; tag: string }>;
    opportunitiesSubtitle: string;
    opportunitiesTitle: string;
    opportunities: Array<{ title: string; desc: string }>;
    scheduleSubtitle: string;
    scheduleTitle: string;
    timeline: Array<{ time: string; event: string; note: string }>;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    ctaMessage: string;
  };
  startupBattle: {
    badge: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    teamSize: string;
    regSubtitle: string;
    regPeriod: string;
    regDeadlinePrefix: string;
    regDeadlineDate: string;
    regWarning1: string;
    regWarning2: string;
    regWarning3: string;
    regButton: string;
    tracksSubtitle: string;
    tracksTitle: string;
    tracks: Array<{ label: string; desc: string }>;
    rewardsSubtitle: string;
    rewardsTitle: string;
    rewards: Array<string>;
    formatSubtitle: string;
    format: Array<string>;
    stepsSubtitle: string;
    stepsTitle: string;
    steps: Array<{ text: string }>;
    criteriaSubtitle: string;
    criteriaTitle: string;
    criteria: Array<string>;
    welcomePrefix: string;
    welcomeTags: Array<string>;
    modalTitle: string;
    modalText: string;
    modalCancel: string;
    modalConfirm: string;
  };`;

const ruData = `    careerExpo: {
      badge: "Career Expo",
      title: "Career\\nExpo 2026",
      subtitle: "Выставочная площадка форума, где крупнейшие компании нефтегазовой отрасли, IT-сектора и образования встречаются с молодыми специалистами и студентами. Ваш шанс найти работу мечты в Oil & Gas.",
      location: "АУНГ им. Сафи Утебаева, Атырау",
      date: "09:00 – 17:30, 28 апреля",
      participants: "800+ участников",
      exhibitorsSubtitle: "Участники выставки",
      exhibitorsTitle: "Кто будет на Career Expo",
      exhibitorTypes: [
        { title: "Нефтегазовые компании", desc: "KazMunayGas, Tengizchevroil, Karachaganak Petroleum и другие лидеры отрасли представят стенды и вакансии", tag: "Oil & Gas" },
        { title: "IT-компании и стартапы", desc: "Ведущие технологические компании региона, разрабатывающие digital-решения для промышленности", tag: "Tech" },
        { title: "Университеты и образовательные центры", desc: "Образовательные программы, курсы повышения квалификации и магистратуры для Oil & Gas специалистов", tag: "Education" },
        { title: "Государственные структуры", desc: "Программы поддержки молодых специалистов, гранты и государственные инициативы развития региона", tag: "Government" }
      ],
      opportunitiesSubtitle: "Возможности",
      opportunitiesTitle: "Что вас ждёт",
      opportunities: [
        { title: "Прямой контакт с HR", desc: "Живое общение с рекрутерами ведущих компаний" },
        { title: "Подача резюме", desc: "Передать резюме напрямую работодателям на месте" },
        { title: "Презентации компаний", desc: "Узнать о культуре и карьерных путях изнутри" },
        { title: "Карьерные консультации", desc: "Советы от HR-экспертов и специалистов индустрии" },
        { title: "Мастер-классы", desc: "Серия мастер-классов" },
        { title: "Нетворкинг", desc: "Расширение профессиональных связей с участниками рынка" }
      ],
      scheduleSubtitle: "Расписание",
      scheduleTitle: "Программа Career Expo",
      timeline: [
        { time: "09:00 – 10:00", event: "Открытие выставочной зоны", note: "Начало работы Career Expo" },
        { time: "10:00 – 12:00", event: "Презентации компаний", note: "Стенды работодателей, общение с HR" },
        { time: "12:00 – 13:00", event: "Нетворкинг-обед", note: "Посещение выставочной зоны" },
        { time: "13:00 – 15:00", event: "Тренинги для студентов", note: "Параллельные мастер-классы" },
        { time: "15:00 – 17:30", event: "Вечер карьеры", note: "Финальный нетворкинг и Startup Battle" }
      ],
      ctaTitle: "Хотите стать экспонентом?",
      ctaDesc: "Университет предоставляет площадку и целевую аудиторию. Индустриальные и IT-компании участвуют на коммерческой основе, приобретая выставочные стенды и партнерские пакеты.",
      ctaButton: "Написать в WhatsApp",
      ctaMessage: "Здравствуйте! Я пишу насчет Career Expo Digital Atyrau 2026."
    },
    startupBattle: {
      badge: "Startup Battle 2026",
      title: "Startup\\nBattle 2026",
      subtitle: "Интенсивная площадка для развития проектов в рамках международного форума «Digital Atyrau: From Education to Career in Oil & Gas». Представьте свою стартап-идею, получите экспертную оценку и найдите партнеров для дальнейшего роста.",
      date: "28 апреля 2026",
      time: "15:00 – 17:00",
      teamSize: "Команды до 1–3 человек",
      regSubtitle: "Регистрация",
      regPeriod: "07.04.2026 — 21.04.2026",
      regDeadlinePrefix: "Дедлайн подачи заявок:",
      regDeadlineDate: "21 апреля 2026",
      regWarning1: "Количество команд ограничено",
      regWarning2: "Отбор по идее и потенциалу проекта",
      regWarning3: "Заявки после дедлайна не рассматриваются",
      regButton: "Подать заявку",
      tracksSubtitle: "Направления",
      tracksTitle: "7 треков Startup Battle",
      tracks: [
        { label: "Oil & Gas Tech", desc: "Цифровые решения для нефтегазовой отрасли" },
        { label: "AI & Data", desc: "Искусственный интеллект и анализ данных" },
        { label: "Industrial Tech", desc: "Автоматизация производств" },
        { label: "GreenTech", desc: "Экологические и устойчивые решения" },
        { label: "EdTech", desc: "Подготовка кадров для индустрии" },
        { label: "Smart City", desc: "Цифровая инфраструктура региона" },
        { label: "FinTech", desc: "Цифровые сервисы для бизнеса" }
      ],
      rewardsSubtitle: "Участники получат",
      rewardsTitle: "Что вы получите",
      rewards: [
        "Сертификат участника",
        "Презентация проекта инвесторам и индустриальным компаниям",
        "Нетворкинг с представителями бизнеса и IT-сообщества",
        "Потенциальные партнерства и поддержка развития проекта"
      ],
      formatSubtitle: "Формат",
      format: [
        "Командная работа (1–3 человек)",
        "Разработка или доработка стартап-проекта",
        "Менторская поддержка от экспертов индустрии",
        "Финальный pitch перед жюри и инвесторами"
      ],
      stepsSubtitle: "Что нужно сделать",
      stepsTitle: "Шаги участника",
      steps: [
        { text: "Определить актуальную проблему отрасли" },
        { text: "Предложить инновационное решение" },
        { text: "Разработать бизнес- и технологическую модель" },
        { text: "Подготовить презентацию (pitch deck)" }
      ],
      criteriaSubtitle: "Оценка",
      criteriaTitle: "Критерии жюри",
      criteria: ["Инновационность идеи", "Практическая применимость", "Потенциал масштабирования", "Качество презентации", "Командная работа"],
      welcomePrefix: "Приветствуются проекты:",
      welcomeTags: ["Технологические и цифровые решения", "Стартап-идеи с коммерческим потенциалом", "Проекты в сфере устойчивого развития", "Междисциплинарные подходы"],
      modalTitle: "Переход на сторонний сайт",
      modalText: "Вы покидаете сайт форума для заполнения заявки в Google Формах. Вы уверены, что хотите продолжить?",
      modalCancel: "Отмена",
      modalConfirm: "Продолжить"
    },`;

const enData = `    careerExpo: {
      badge: "Career Expo",
      title: "Career\\nExpo 2026",
      subtitle: "The forum's exhibition platform where leading oil & gas, IT, and education companies meet young professionals and students. Your chance to find your dream job in Oil & Gas.",
      location: "AOUG named after Safi Utebayev, Atyrau",
      date: "09:00 – 17:30, April 28",
      participants: "800+ participants",
      exhibitorsSubtitle: "Exhibitors",
      exhibitorsTitle: "Who will be at Career Expo",
      exhibitorTypes: [
        { title: "Oil & Gas Companies", desc: "KazMunayGas, Tengizchevroil, Karachaganak Petroleum and other leaders presenting vacancies", tag: "Oil & Gas" },
        { title: "IT & Startups", desc: "Leading regional tech companies developing digital solutions for industry", tag: "Tech" },
        { title: "Universities & Education", desc: "Educational programs, advanced training, and master degrees for Oil & Gas", tag: "Education" },
        { title: "Government Structures", desc: "Support programs for young specialists, grants, and regional initiatives", tag: "Government" }
      ],
      opportunitiesSubtitle: "Opportunities",
      opportunitiesTitle: "What to expect",
      opportunities: [
        { title: "Direct HR Contact", desc: "Live communication with top company recruiters" },
        { title: "Submit Resume", desc: "Hand your CV directly to employers on the spot" },
        { title: "Company Presentations", desc: "Learn about the culture and career paths from the inside" },
        { title: "Career Consulting", desc: "Advice from HR experts and industry specialists" },
        { title: "Masterclasses", desc: "A series of masterclasses from leading companies" },
        { title: "Networking", desc: "Expanding professional connections with market players" }
      ],
      scheduleSubtitle: "Schedule",
      scheduleTitle: "Career Expo Agenda",
      timeline: [
        { time: "09:00 – 10:00", event: "Exhibition Open", note: "Start of Career Expo" },
        { time: "10:00 – 12:00", event: "Company Presentations", note: "Employer booths, HR talks" },
        { time: "12:00 – 13:00", event: "Networking Lunch", note: "Visiting exhibition area" },
        { time: "13:00 – 15:00", event: "Student Trainings", note: "Parallel masterclasses" },
        { time: "15:00 – 17:30", event: "Career Evening", note: "Final networking and Startup Battle" }
      ],
      ctaTitle: "Want to become an exhibitor?",
      ctaDesc: "The university provides the platform and target audience. Industrial and IT companies participate commercially by purchasing booths and partner packages.",
      ctaButton: "Contact via WhatsApp",
      ctaMessage: "Hello! I am writing regarding Career Expo Digital Atyrau 2026."
    },
    startupBattle: {
      badge: "Startup Battle 2026",
      title: "Startup\\nBattle 2026",
      subtitle: "Intensive platform for project development within the forum «Digital Atyrau: From Education to Career in Oil & Gas». Present your startup idea, get expert evaluation and find partners for scaling.",
      date: "April 28, 2026",
      time: "15:00 – 17:00",
      teamSize: "Teams up to 1–3 people",
      regSubtitle: "Registration",
      regPeriod: "07.04.2026 — 21.04.2026",
      regDeadlinePrefix: "Application deadline:",
      regDeadlineDate: "April 21, 2026",
      regWarning1: "Number of teams is limited",
      regWarning2: "Selection by idea and project potential",
      regWarning3: "Applications after deadline aren't accepted",
      regButton: "Apply Now",
      tracksSubtitle: "Tracks",
      tracksTitle: "7 Tracks of Startup Battle",
      tracks: [
        { label: "Oil & Gas Tech", desc: "Digital solutions for the oil and gas industry" },
        { label: "AI & Data", desc: "Artificial Intelligence and Data Analytics" },
        { label: "Industrial Tech", desc: "Manufacturing automation" },
        { label: "GreenTech", desc: "Environmental and sustainable solutions" },
        { label: "EdTech", desc: "Workforce preparation for the industry" },
        { label: "Smart City", desc: "Regional digital infrastructure" },
        { label: "FinTech", desc: "Digital services for business" }
      ],
      rewardsSubtitle: "Participants get",
      rewardsTitle: "What you will receive",
      rewards: [
        "Participant certificate",
        "Project presentation to investors and industrial companies",
        "Networking with business and IT community representatives",
        "Potential partnerships and project development support"
      ],
      formatSubtitle: "Format",
      format: [
        "Teamwork (1–3 people)",
        "Development or refinement of a startup project",
        "Mentorship support from industry experts",
        "Final pitch before a jury and investors"
      ],
      stepsSubtitle: "What you need to do",
      stepsTitle: "Participant Steps",
      steps: [
        { text: "Identify a relevant industry problem" },
        { text: "Propose an innovative solution" },
        { text: "Develop business and technological model" },
        { text: "Prepare a presentation (pitch deck)" }
      ],
      criteriaSubtitle: "Evaluation",
      criteriaTitle: "Jury Criteria",
      criteria: ["Idea innovation", "Practical applicability", "Scaling potential", "Presentation quality", "Teamwork"],
      welcomePrefix: "Projects welcomed:",
      welcomeTags: ["Technological and digital solutions", "Startup ideas with commercial potential", "Sustainability projects", "Interdisciplinary approaches"],
      modalTitle: "External Site Redirect",
      modalText: "You are leaving the forum website to fill out an application in Google Forms. Are you sure you want to proceed?",
      modalCancel: "Cancel",
      modalConfirm: "Proceed"
    },`;

const kzData = `    careerExpo: {
      badge: "Career Expo",
      title: "Career\\nExpo 2026",
      subtitle: "Мұнай-газ, IT-сектор және білім беру саласындағы ірі компаниялар жас мамандармен және студенттермен кездесетін форумның көрме алаңы. Oil & Gas саласында арманыңыздағы жұмысты табу мүмкіндігі.",
      location: "Сафи Өтебаев атындағы АММУ, Атырау",
      date: "09:00 – 17:30, 28 сәуір",
      participants: "800+ қатысушы",
      exhibitorsSubtitle: "Көрме қатысушылары",
      exhibitorsTitle: "Career Expo-да кімдер болады",
      exhibitorTypes: [
        { title: "Мұнай-газ компаниялары", desc: "KazMunayGas, Tengizchevroil, Karachaganak Petroleum және басқа да сала көшбасшылары стендтер мен бос жұмыс орындарын ұсынады", tag: "Oil & Gas" },
        { title: "IT компаниялар мен стартаптар", desc: "Өнеркәсіпке арналған цифрлық шешімдер әзірлейтін өңірдегі жетекші технологиялық компаниялар", tag: "Tech" },
        { title: "Университеттер мен білім беру орталықтары", desc: "Oil & Gas мамандарына арналған білім беру бағдарламалары, біліктілікті арттыру курстары мен магистратура", tag: "Education" },
        { title: "Мемлекеттік құрылымдар", desc: "Жас мамандарды қолдау бағдарламалары, гранттар және өңірді дамытудың бастамалары", tag: "Government" }
      ],
      opportunitiesSubtitle: "Мүмкіндіктер",
      opportunitiesTitle: "Сізді не күтеді",
      opportunities: [
        { title: "HR-мен тікелей байланыс", desc: "Жетекші компаниялар рекрутерлерімен тікелей сөйлесу" },
        { title: "Түйіндеме тапсыру", desc: "Түйіндемені жұмыс берушіге сол жерде қолма-қол беру" },
        { title: "Компаниялар презентациясы", desc: "Мәдениет пен мансап жолдары туралы іштей білу" },
        { title: "Мансаптық кеңес", desc: "HR-сарапшылар мен сала мамандарынан кеңестер" },
        { title: "Мастер-класстар", desc: "Жетекші компаниялардан шеберлік сыныптары қатары" },
        { title: "Нетворкинг", desc: "Нарық қатысушыларымен кәсіби байланысты кеңейту" }
      ],
      scheduleSubtitle: "Кесте",
      scheduleTitle: "Career Expo Бағдарламасы",
      timeline: [
        { time: "09:00 – 10:00", event: "Көрме аймағының ашылуы", note: "Career Expo жұмысының басталуы" },
        { time: "10:00 – 12:00", event: "Компаниялар презентациясы", note: "Жұмыс берушілер стендтері, HR-мен қарым-қатынас" },
        { time: "12:00 – 13:00", event: "Нетворкинг-түскі ас", note: "Көрме аймағын аралау" },
        { time: "13:00 – 15:00", event: "Студенттерге арналған тренингтер", note: "Параллельді мастер-класстар" },
        { time: "15:00 – 17:30", event: "Мансап кеші", note: "Қорытынды нетворкинг және Startup Battle" }
      ],
      ctaTitle: "Экспонент болғыңыз келе ме?",
      ctaDesc: "Университет алаң мен мақсатты аудиторияны ұсынады. Өнеркәсіптік және IT-компаниялар көрме стендтері мен серіктестік пакеттерді сатып алу арқылы коммерциялық негізде қатысады.",
      ctaButton: "WhatsApp-қа жазу",
      ctaMessage: "Сәлеметсіз бе! Мен Career Expo Digital Atyrau 2026 бойынша жазып тұрмын."
    },
    startupBattle: {
      badge: "Startup Battle 2026",
      title: "Startup\\nBattle 2026",
      subtitle: "«Digital Atyrau: From Education to Career in Oil & Gas» халықаралық форумы аясында жобаларды дамытуға арналған қарқынды алаң. Стартап идеяңызды ұсыныңыз, сараптамалық баға алыңыз және одан әрі өсу үшін серіктестер табыңыз.",
      date: "2026 жылғы 28 сәуір",
      time: "15:00 – 17:00",
      teamSize: "1–3 адамға дейінгі командалар",
      regSubtitle: "Тіркелу",
      regPeriod: "07.04.2026 — 21.04.2026",
      regDeadlinePrefix: "Өтінім беру дедлайны:",
      regDeadlineDate: "2026 жылғы 21 сәуір",
      regWarning1: "Командалар саны шектеулі",
      regWarning2: "Идея мен жоба әлеуеті бойынша іріктеу",
      regWarning3: "Дедлайннан кейінгі өтінімдер қаралмайды",
      regButton: "Өтінім қалдыру",
      tracksSubtitle: "Бағыттар",
      tracksTitle: "Startup Battle-дың 7 трегі",
      tracks: [
        { label: "Oil & Gas Tech", desc: "Мұнай-газ саласына арналған цифрлық шешімдер" },
        { label: "AI & Data", desc: "Жасанды интеллект және мәліметтерді талдау" },
        { label: "Industrial Tech", desc: "Өндірістерді автоматтандыру" },
        { label: "GreenTech", desc: "Экологиялық және тұрақты шешімдер" },
        { label: "EdTech", desc: "Индустрия үшін кадрлар даярлау" },
        { label: "Smart City", desc: "Өңірдің цифрлық инфрақұрылымы" },
        { label: "FinTech", desc: "Бизнеске арналған цифрлық сервистер" }
      ],
      rewardsSubtitle: "Қатысушылар не алады",
      rewardsTitle: "Сіз не аласыз",
      rewards: [
        "Қатысушы сертификаты",
        "Жобаны инвесторлар мен өнеркәсіптік компанияларға таныстыру",
        "Бизнес және IT-қауымдастық өкілдерімен нетворкинг",
        "Әлеуетті серіктестіктер және жобаның дамуына қолдау"
      ],
      formatSubtitle: "Формат",
      format: [
        "Командалық жұмыс (1–3 адам)",
        "Стартап-жобаны әзірлеу немесе пысықтау",
        "Индустрия сарапшыларынан тәлімгерлік қолдау",
        "Жюри мен инвесторлар алдындағы финалдық pitch"
      ],
      stepsSubtitle: "Не істеу керек",
      stepsTitle: "Қатысушының қадамдары",
      steps: [
        { text: "Саланың өзекті мәселесін анықтау" },
        { text: "Инновациялық шешім ұсыну" },
        { text: "Бизнес және технологиялық модельді әзірлеу" },
        { text: "Презентация дайындау (pitch deck)" }
      ],
      criteriaSubtitle: "Бағалау",
      criteriaTitle: "Жюри критерийлері",
      criteria: ["Идеяның инновациялығы", "Тәжірибеде қолдануға жарамдылығы", "Масштабтау әлеуеті", "Презентация сапасы", "Командалық жұмыс"],
      welcomePrefix: "Құпталады:",
      welcomeTags: ["Технологиялық және цифрлық шешімдер", "Коммерциялық әлеуеті бар стартап-идеялар", "Тұрақты даму саласындағы жобалар", "Пәнаралық тәсілдер"],
      modalTitle: "Сыртқы сайтқа өту",
      modalText: "Сіз Google Формада өтінім толтыру үшін форум сайтынан шығып барасыз. Жалғастырғыңыз келетініне сенімдісіз бе?",
      modalCancel: "Болдырмау",
      modalConfirm: "Жалғастыру"
    },`;

const zhData = `    careerExpo: {
      badge: "Career Expo",
      title: "职业展览\\n2026",
      subtitle: "论坛的展览平台，领先的油气、IT及教育公司在此与年轻专业人士和学生会面。这是您在Oil & Gas领域找到梦想工作的绝佳机会。",
      location: "萨菲·乌特巴耶夫命名AOUG，阿特劳",
      date: "09:00 – 17:30, 4月28日",
      participants: "800+ 参与者",
      exhibitorsSubtitle: "参展商",
      exhibitorsTitle: "谁将出席Career Expo",
      exhibitorTypes: [
        { title: "油气公司", desc: "KazMunayGas, Tengizchevroil 及其他行业领军者将提供职位", tag: "Oil & Gas" },
        { title: "IT 与 初创企业", desc: "开发工业数字解决方案的地区领先科技公司", tag: "Tech" },
        { title: "大学与教育机构", desc: "面向Oil & Gas专家的教育项目、进修和硕士学位", tag: "Education" },
        { title: "政府机构", desc: "青年专家支持计划、补助及区域发展举措", tag: "Government" }
      ],
      opportunitiesSubtitle: "机会",
      opportunitiesTitle: "您可以期待什么",
      opportunities: [
        { title: "直接联系HR", desc: "与顶尖公司的招聘人员面对面交流" },
        { title: "提交简历", desc: "现场将您的简历直接交给雇主" },
        { title: "公司介绍", desc: "从内部了解企业文化和职业发展路径" },
        { title: "职业咨询", desc: "来自HR专家及行业专家的建议" },
        { title: "大师班", desc: "由领先企业举办的系列大师班" },
        { title: "拓展人脉", desc: "与市场参与者扩展专业联系" }
      ],
      scheduleSubtitle: "日程",
      scheduleTitle: "Career Expo 议程",
      timeline: [
        { time: "09:00 – 10:00", event: "展览区开放", note: "Career Expo启动" },
        { time: "10:00 – 12:00", event: "公司介绍", note: "雇主展位，与HR交流" },
        { time: "12:00 – 13:00", event: "社交午餐", note: "参观展览区" },
        { time: "13:00 – 15:00", event: "学生培训", note: "同期的大师班" },
        { time: "15:00 – 17:30", event: "职业之夜", note: "最终的社交与Startup Battle" }
      ],
      ctaTitle: "想成为参展商吗？",
      ctaDesc: "大学提供平台和目标受众。工业及IT公司通过购买展位和合作包以商业化形式参与。",
      ctaButton: "通过 WhatsApp 联系",
      ctaMessage: "您好！我想咨询关于 Career Expo Digital Atyrau 2026 的事宜。"
    },
    startupBattle: {
      badge: "Startup Battle 2026",
      title: "Startup\\nBattle 2026",
      subtitle: "在国际论坛«Digital Atyrau: From Education to Career in Oil & Gas»框架内用于项目开发的密集平台。展示您的初创创意，获得专家评估并寻找合作伙伴以实现扩张。",
      date: "2026年4月28日",
      time: "15:00 – 17:00",
      teamSize: "团队规模：1-3人",
      regSubtitle: "注册",
      regPeriod: "07.04.2026 — 21.04.2026",
      regDeadlinePrefix: "申请截止日期：",
      regDeadlineDate: "2026年4月21日",
      regWarning1: "团队数量有限",
      regWarning2: "根据创意与项目潜力进行选拔",
      regWarning3: "截止日期后的申请不予受理",
      regButton: "提交申请",
      tracksSubtitle: "参赛方向",
      tracksTitle: "Startup Battle 的 7个赛道",
      tracks: [
        { label: "Oil & Gas Tech", desc: "油气行业的数字解决方案" },
        { label: "AI & Data", desc: "人工智能与数据分析" },
        { label: "Industrial Tech", desc: "生产自动化" },
        { label: "GreenTech", desc: "环保与可持续解决方案" },
        { label: "EdTech", desc: "为行业培养人才" },
        { label: "Smart City", desc: "区域数字基础设施" },
        { label: "FinTech", desc: "面向企业的数字服务" }
      ],
      rewardsSubtitle: "参与者将获得",
      rewardsTitle: "您将获得什么",
      rewards: [
        "参赛证书",
        "向投资者及工业公司展示项目的机会",
        "与商业及IT界代表交流",
        "潜在的合作关系及项目发展支持"
      ],
      formatSubtitle: "形式",
      format: [
        "团队合作 (1-3人)",
        "初创项目的开发或完善",
        "行业专家的指导支持",
        "在评审及投资者面前的最终路演"
      ],
      stepsSubtitle: "需要做什么",
      stepsTitle: "参赛者步骤",
      steps: [
        { text: "明确行业相关问题" },
        { text: "提出创新解决方案" },
        { text: "制定商业与技术模型" },
        { text: "准备路演PPT (pitch deck)" }
      ],
      criteriaSubtitle: "评估",
      criteriaTitle: "评审标准",
      criteria: ["创意的创新性", "实际适用性", "拓展潜力", "演讲质量", "团队合作"],
      welcomePrefix: "优先考虑的项目：",
      welcomeTags: ["技术与数字解决方案", "具有商业潜力的初创创意", "可持续发展项目", "跨学科方法"],
      modalTitle: "跳转至外部网站",
      modalText: "您将离开论坛网站，前往 Google 表单填写申请。确定要继续吗？",
      modalCancel: "取消",
      modalConfirm: "继续"
    },`;

let newFile = file.replace('  footer: {\\n    rights: string;\\n    organizer: string;\\n  };\\n}', '  footer: {\\n    rights: string;\\n    organizer: string;\\n  };\\n' + interfaceInjection + '\\n}');

newFile = newFile.replace(/ru: \\{\\n    nav:/, 'ru: {\\n' + ruData + '\\n    nav:');
newFile = newFile.replace(/en: \\{\\n    nav:/, 'en: {\\n' + enData + '\\n    nav:');
newFile = newFile.replace(/kz: \\{\\n    nav:/, 'kz: {\\n' + kzData + '\\n    nav:');
newFile = newFile.replace(/zh: \\{\\n    nav:/, 'zh: {\\n' + zhData + '\\n    nav:');

fs.writeFileSync('src/i18n/translations.ts', newFile);
console.log('Translations injected successfully!');
