// src/i18n/translations.ts

export type Language = "ru" | "en" | "kz" | "zh";

export interface Translations {
  nav: {
    about: string;
    agenda: string;
    register: string;
    careerExpo: string;
    jobFair: string;
    startupBattle: string;
    contacts: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    date: string;
    location: string;
    ctaAttendee: string;
    ctaSpeaker: string;
    statsAttendees: string;
    statsSpeakers: string;
    statsCompanies: string;
    ctaContacts: string;
  };
  agenda: {
    title: string;
    subtitle: string;
    sessions: Array<{
      time: string;
      title: string;
      description: string;
    }>;
  };
  registration: {
    title: string;
    subtitle: string;
    attendeeTab: string;
    speakerTab: string;
    form: {
      name: string;
      namePlaceholder: string;
      org: string;
      orgPlaceholder: string;
      position: string;
      positionPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      topic: string;
      topicPlaceholder: string;
      theses: string;
      thesesPlaceholder: string;
      submitAttendee: string;
      submitSpeaker: string;
      submitting: string;
    };
    validation: {
      nameRequired: string;
      nameMin: string;
      orgRequired: string;
      positionRequired: string;
      emailRequired: string;
      emailInvalid: string;
      topicRequired: string;
      thesesRequired: string;
      thesesMin: string;
    };
  };
  modal: {
    attendeeTitle: string;
    attendeeText: string;
    speakerTitle: string;
    speakerText: string;
    close: string;
  };
  careerExpo: {
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
  jobFair: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    stats: Array<{ value: string; label: string }>;
    location: string;
    date: string;
    howItWorksSubtitle: string;
    howItWorksTitle: string;
    howItWorks: Array<{ step: string; title: string; desc: string }>;
    categoriesSubtitle: string;
    categoriesTitle: string;
    vacancyCountLabel: string;
    categories: Array<{ title: string; positions: Array<string>; count: string; badge: string }>;
    employersSubtitle: string;
    ctaSeekerBadge: string;
    ctaSeekerTitle: string;
    ctaSeekerDesc: string;
    ctaSeekerButton: string;
    ctaCompanyBadge: string;
    ctaCompanyTitle: string;
    ctaCompanyDesc: string;
    ctaCompanyButton: string;
    ctaCompanyMessage: string;
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
  };
  contacts: {
    title: string;
    subtitle: string;
    director: string;
    directorName: string;
    deputy: string;
    deputyName: string;
    email: string;
    emailButton: string;
  };
  footer: {
    rights: string;
    organizer: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      about: "О форуме",
      agenda: "Программа",
      register: "Регистрация",
      careerExpo: "Career Expo",
      jobFair: "Ярмарка вакансий",
      startupBattle: "Startup Battle",
      contacts: "Контакты",
    },
    hero: {
      badge: "Интернациональный форум · 28 апреля 2026",
      title: "Digital Atyrau 2026:\nFrom Education to Career in Oil & Gas",
      subtitle:
        "Платформа для развития цифровой экосистемы Атырауской области. Объединяем бизнес, технологии и образование.",
      date: "28 апреля 2026",
      location: "АУНГ им. Сафи Утебаева, г. Атырау",
      ctaAttendee: "Стать слушателем",
      ctaSpeaker: "Стать спикером",
      statsAttendees: "участников",
      statsSpeakers: "спикеров",
      statsCompanies: "компаний",
      ctaContacts: "Контакты",
    },
    agenda: {
      title: "Программа форума",
      subtitle: "Полный день насыщенных сессий, тренингов и Startup Battle",
      sessions: [
        {
          time: "09:00 – 10:00",
          title: "Регистрация участников",
          description:
            "Выдача бейджей, начало работы выставочной зоны (Career Expo)",
        },
        {
          time: "10:00 – 10:30",
          title: "Официальное открытие форума",
          description:
            "Приветственные слова от руководства университета, акимата и партнеров",
        },
        {
          time: "10:30 – 12:00",
          title: "Панельная сессия №1: Цифровая трансформация промышленности",
          description:
            "Обсуждение внедрения цифровых решений в нефтегазовой и промышленной отрасли",
        },
        {
          time: "12:00 – 13:00",
          title: "Обед и Networking",
          description:
            "Неформальное общение участников, посещение выставочной зоны",
        },
        {
          time: "13:00 – 14:00",
          title: "Панельная сессия №2: Кадры под запрос экономики: дуальная модель образования",
          description:
            "Роль бизнеса и образования в подготовке востребованных специалистов",
        },
        {
          time: "14:00 – 15:00",
          title: "Панельная сессия №3: «Стартапы и экосистемы инноваций»",
          description:
            "Развитие стартап-экосистемы, инвестиции и рост технологических проектов",
        },
        {
          time: "13:00 – 15:00 (параллельно)",
          title: "Тренинги для студентов",
          description:
            "Серия мастер-классов от ведущих компаний (Microsoft, McKinsey, PwC, EY, Deloitte, BCG)",
        },
        {
          time: "15:00 – 17:00",
          title: "Startup Battle",
          description:
            "Презентации стартапов перед жюри, отбор лучших проектов",
        },
        {
          time: "17:00 – 17:30",
          title: "Награждение и закрытие форума",
          description:
            "Подведение итогов, вручение призов и благодарностей",
        },
      ],
    },
    registration: {
      title: "Зарегистрироваться",
      subtitle:
        "Присоединяйтесь к форуму в качестве слушателя или подайте заявку как спикер",
      attendeeTab: "Слушатель",
      speakerTab: "Спикер",
      form: {
        name: "ФИО",
        namePlaceholder: "Иванов Иван Иванович",
        org: "Организация / Учебное заведение",
        orgPlaceholder: "ТОО «Название компании» или АУНГ",
        position: "Должность / Специальность",
        positionPlaceholder: "Руководитель / Студент 3 курса",
        email: "Email",
        emailPlaceholder: "example@email.com",
        topic: "Тема выступления",
        topicPlaceholder: "Краткое название темы доклада",
        theses: "Краткие тезисы",
        thesesPlaceholder:
          "Опишите ключевые тезисы вашего выступления (минимум 50 символов)...",
        submitAttendee: "Зарегистрироваться как слушатель",
        submitSpeaker: "Подать заявку как спикер",
        submitting: "Отправка...",
      },
      validation: {
        nameRequired: "ФИО обязательно",
        nameMin: "ФИО должно содержать не менее 3 символов",
        orgRequired: "Укажите организацию",
        positionRequired: "Укажите должность",
        emailRequired: "Email обязателен",
        emailInvalid: "Введите корректный email",
        topicRequired: "Укажите тему выступления",
        thesesRequired: "Добавьте тезисы",
        thesesMin: "Тезисы должны содержать не менее 50 символов",
      },
    },
    modal: {
      attendeeTitle: "Регистрация прошла успешно!",
      attendeeText: "Ждём вас на форуме 28 апреля в Атырау",
      speakerTitle: "Заявка принята!",
      speakerText: "Организаторы свяжутся с вами в ближайшее время",
      close: "Закрыть",
    },
    careerExpo: {
      badge: "Career Expo",
      title: "Career\nExpo 2026",
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
    jobFair: {
      badge: "Ярмарка вакансий",
      titleLine1: "Ярмарка",
      titleLine2: "Вакансий 2026",
      subtitle: "Найдите работу или стажировку в ведущих компаниях нефтегазовой отрасли прямо на форуме. Более 300 актуальных вакансий от 30+ работодателей в одном месте.",
      stats: [
        { value: "300+", label: "Вакансий" },
        { value: "30+", label: "Компаний-работодателей" },
        { value: "120+", label: "Стажировок" },
        { value: "500+", label: "Соискателей" }
      ],
      location: "АУНГ им. Сафи Утебаева, Атырау",
      date: "28 апреля 2026, весь день",
      howItWorksSubtitle: "Как участвовать",
      howItWorksTitle: "4 шага к вашей карьере",
      howItWorks: [
        { step: "01", title: "Изучите стенды", desc: "Познакомьтесь с компаниями-участниками, их культурой и открытыми позициями" },
        { step: "02", title: "Подготовьте резюме", desc: "Принесите несколько копий резюме и будьте готовы к коротким интервью on-spot" },
        { step: "03", title: "Пообщайтесь с HR", desc: "Задайте вопросы напрямую рекрутерам и менеджерам по найму" },
        { step: "04", title: "Посетите мастер-классы", desc: "Прокачайте hard и soft skills на тренингах от лидеров индустрии" }
      ],
      categoriesSubtitle: "Направления",
      categoriesTitle: "Категории вакансий",
      vacancyCountLabel: "вакансий",
      categories: [
        { title: "Нефтегазовые инженеры", positions: ["Буровой инженер", "Технолог промысла", "Инженер по добыче", "Геолог"], count: "70+", badge: "Горячие вакансии" },
        { title: "IT и цифровизация", positions: ["DevOps Engineer", "Data Scientist", "Frontend / Backend Dev", "Системный аналитик"], count: "50+", badge: "В тренде" },
        { title: "Автоматизация и IoT", positions: ["Инженер КИПиА", "Специалист SCADA", "IoT-разработчик", "Инженер-электронщик"], count: "30+", badge: "Новые роли" },
        { title: "Финансы и аналитика", positions: ["Финансовый аналитик", "Бизнес-аналитик", "Аудитор", "Риск-менеджер"], count: "25+", badge: "Стабильно" },
        { title: "Экология и ГринТех", positions: ["Эколог", "HSE-специалист", "Инженер по охране труда", "GreenTech аналитик"], count: "20+", badge: "Зелёный сектор" },
        { title: "Стажировки для студентов", positions: ["Летние стажировки", "Дуальное обучение", "Graduate программы", "Практика в компаниях"], count: "120+", badge: "Для студентов" }
      ],
      employersSubtitle: "Работодатели-участники",
      ctaSeekerBadge: "Для соискателей",
      ctaSeekerTitle: "Найдите работу мечты",
      ctaSeekerDesc: "Зарегистрируйтесь как участник форума и получите доступ ко всем вакансиям, мастер-классам и нетворкинг-сессиям.",
      ctaSeekerButton: "Зарегистрироваться",
      ctaCompanyBadge: "Для компаний",
      ctaCompanyTitle: "Найдите лучших специалистов",
      ctaCompanyDesc: "Разместите вакансии и участвуйте в ярмарке вакансий. Приобретите выставочный стенд или партнёрский пакет форума.",
      ctaCompanyButton: "Написать в WhatsApp",
      ctaCompanyMessage: "Здравствуйте! Я пишу насчет Ярмарки Вакансий Digital Atyrau 2026."
    },
    startupBattle: {
      badge: "Startup Battle 2026",
      title: "Startup\nBattle 2026",
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
    },
    contacts: {
      title: "Контакты",
      subtitle: "Свяжитесь с организаторами форума Digital Atyrau",
      director: "Руководитель AI-HUB",
      directorName: "Абдигалиева Акмарал Нурасыловна",
      deputy: "Зам.руководитель AI-HUB",
      deputyName: "Мырзакелді Толғанай Дәулеткелдіқызы",
      email: "Почта",
      emailButton: "Написать письмо"
    },
    footer: {
      rights: "Все права защищены",
      organizer: "Атырауский университет им. Сафи Утебаева | Государственное учреждение «Аппарат акима города Атырау»",
    },
  },

  en: {
    nav: {
      about: "About",
      agenda: "Agenda",
      register: "Register",
      careerExpo: "Career Expo",
      jobFair: "Job Fair",
      startupBattle: "Startup Battle",
      contacts: "Contacts",
    },
    hero: {
      badge: "Regional Forum · April 28, 2026",
      title: "Digital Atyrau 2026:\nFrom Education to Career in Oil & Gas",
      subtitle:
        "A platform for developing the digital ecosystem of the Atyrau region. Connecting business, technology, and education.",
      date: "April 28, 2026",
      location: "AOUG named after Safi Utebayev, Atyrau",
      ctaAttendee: "Become an Attendee",
      ctaSpeaker: "Become a Speaker",
      statsAttendees: "attendees",
      statsSpeakers: "speakers",
      statsCompanies: "companies",
      ctaContacts: "Contacts",
    },
    agenda: {
      title: "Forum Agenda",
      subtitle:
        "A full day of intensive sessions, workshops, and Startup Battle",
      sessions: [
        {
          time: "09:00 – 10:00",
          title: "Participant Registration",
          description:
            "Badge collection, opening of the exhibition area (Career Expo)",
        },
        {
          time: "10:00 – 10:30",
          title: "Official Forum Opening",
          description:
            "Welcome speeches from university management, local government (akimat), and partners",
        },
        {
          time: "10:30 – 12:00",
          title: "Panel Session #1: Digital Transformation of Industry",
          description:
            "Discussion on the implementation of digital solutions in the oil & gas and industrial sectors",
        },
        {
          time: "12:00 – 13:00",
          title: "Lunch & Networking",
          description:
            "Informal networking among participants, visiting the exhibition area",
        },
        {
          time: "13:00 – 14:00",
          title: "Panel Session #2: Talent for the Economy: Dual Education Model",
          description:
            "The role of business and education in preparing in-demand specialists",
        },
        {
          time: "14:00 – 15:00",
          title: "Panel Session #3: Startups and Innovation Ecosystems",
          description:
            "Development of the startup ecosystem, investments, and growth of tech projects",
        },
        {
          time: "13:00 – 15:00 (parallel)",
          title: "Student Workshops",
          description:
            "A series of masterclasses from leading companies (Microsoft, McKinsey, PwC, EY, Deloitte, BCG)",
        },
        {
          time: "15:00 – 17:00",
          title: "Startup Battle",
          description:
            "Startup presentations to the jury, selection of the best projects",
        },
        {
          time: "17:00 – 17:30",
          title: "Awards Ceremony & Forum Closing",
          description:
            "Summarizing results, awarding prizes and certificates of appreciation",
        },
      ],
    },
    registration: {
      title: "Register Now",
      subtitle:
        "Join the forum as an attendee or apply to be a speaker",
      attendeeTab: "Attendee",
      speakerTab: "Speaker",
      form: {
        name: "Full Name",
        namePlaceholder: "John Smith",
        org: "Organization / Institution",
        orgPlaceholder: "Company Name LLC or University",
        position: "Position / Specialty",
        positionPlaceholder: "Manager / 3rd Year Student",
        email: "Email",
        emailPlaceholder: "example@email.com",
        topic: "Talk Topic",
        topicPlaceholder: "Short title of your presentation",
        theses: "Abstract / Theses",
        thesesPlaceholder:
          "Describe the key points of your talk (minimum 50 characters)...",
        submitAttendee: "Register as Attendee",
        submitSpeaker: "Apply as Speaker",
        submitting: "Submitting...",
      },
      validation: {
        nameRequired: "Full name is required",
        nameMin: "Name must be at least 3 characters",
        orgRequired: "Organization is required",
        positionRequired: "Position is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email",
        topicRequired: "Talk topic is required",
        thesesRequired: "Please add an abstract",
        thesesMin: "Abstract must be at least 50 characters",
      },
    },
    modal: {
      attendeeTitle: "Registration Successful!",
      attendeeText: "We look forward to seeing you on April 28 in Atyrau",
      speakerTitle: "Application Received!",
      speakerText: "Organizers will contact you shortly",
      close: "Close",
    },
    careerExpo: {
      badge: "Career Expo",
      title: "Career\nExpo 2026",
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
    jobFair: {
      badge: "Job Fair",
      titleLine1: "Job",
      titleLine2: "Fair 2026",
      subtitle: "Find a job or internship at leading oil and gas companies right at the forum. Over 300 active vacancies from 30+ employers in one place.",
      stats: [
        { value: "300+", label: "Vacancies" },
        { value: "30+", label: "Employers" },
        { value: "120+", label: "Internships" },
        { value: "500+", label: "Job Seekers" }
      ],
      location: "AOUG named after Safi Utebayev, Atyrau",
      date: "April 28, 2026, all day",
      howItWorksSubtitle: "How to participate",
      howItWorksTitle: "4 steps to your career",
      howItWorks: [
        { step: "01", title: "Explore booths", desc: "Get to know participating companies, their culture, and open positions" },
        { step: "02", title: "Prepare your resume", desc: "Bring several copies of your resume and be ready for short on-spot interviews" },
        { step: "03", title: "Talk to HR", desc: "Ask questions directly to recruiters and hiring managers" },
        { step: "04", title: "Attend workshops", desc: "Upgrade your hard and soft skills at training sessions from industry leaders" }
      ],
      categoriesSubtitle: "Directions",
      categoriesTitle: "Vacancy Categories",
      vacancyCountLabel: "vacancies",
      categories: [
        { title: "Oil & Gas Engineers", positions: ["Drilling Engineer", "Field Technologist", "Production Engineer", "Geologist"], count: "70+", badge: "Hot Jobs" },
        { title: "IT & Digitalization", positions: ["DevOps Engineer", "Data Scientist", "Frontend / Backend Dev", "System Analyst"], count: "50+", badge: "Trending" },
        { title: "Automation & IoT", positions: ["Instrumentation Engineer", "SCADA Specialist", "IoT Developer", "Electronics Engineer"], count: "30+", badge: "New Roles" },
        { title: "Finance & Analytics", positions: ["Financial Analyst", "Business Analyst", "Auditor", "Risk Manager"], count: "25+", badge: "Stable" },
        { title: "Ecology & GreenTech", positions: ["Ecologist", "HSE Specialist", "Occupational Safety Engineer", "GreenTech Analyst"], count: "20+", badge: "Green Sector" },
        { title: "Student Internships", positions: ["Summer Internships", "Dual Education", "Graduate Programs", "Company Practice"], count: "120+", badge: "For Students" }
      ],
      employersSubtitle: "Participating Employers",
      ctaSeekerBadge: "For Job Seekers",
      ctaSeekerTitle: "Find your dream job",
      ctaSeekerDesc: "Register as a forum participant and get access to all vacancies, master classes, and networking sessions.",
      ctaSeekerButton: "Register Now",
      ctaCompanyBadge: "For Companies",
      ctaCompanyTitle: "Find top talent",
      ctaCompanyDesc: "Post vacancies and participate in the job fair. Purchase an exhibition booth or a forum partnership package.",
      ctaCompanyButton: "Contact via WhatsApp",
      ctaCompanyMessage: "Hello! I am writing regarding the Digital Atyrau 2026 Job Fair."
    },
    startupBattle: {
      badge: "Startup Battle 2026",
      title: "Startup\nBattle 2026",
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
    },
    contacts: {
      title: "Contacts",
      subtitle: "Contact the organizers of the Digital Atyrau forum",
      director: "AI-HUB Director",
      directorName: "Abdigalieva Akmaral Nurasylovna",
      deputy: "AI-HUB Deputy Director",
      deputyName: "Myrzakeldi Tolganai Daultekeldikyzy",
      email: "Email",
      emailButton: "Send an Email"
    },
    footer: {
      rights: "All rights reserved",
      organizer: "Atyrau University named after Safi Utebayev | State Institution «Apparatus of the Akim of Atyrau City»",
    },
  },

  kz: {
    nav: {
      about: "Форум туралы",
      agenda: "Бағдарлама",
      register: "Тіркелу",
      careerExpo: "Career Expo",
      jobFair: "Жұмыс жәрмеңкесі",
      startupBattle: "Startup Battle",
      contacts: "Байланыс",
    },
    hero: {
      badge: "Өңірлік форум · 2026 жылғы 28 сәуір",
      title: "Digital Atyrau 2026:\nFrom Education to Career in Oil & Gas",
      subtitle:
        "Атырау облысының цифрлық экожүйесін дамытуға арналған платформа. Бизнесті, технологияларды және білім беруді біріктіреміз.",
      date: "2026 жылғы 28 сәуір",
      location: "Сафи Өтебаев атындағы АММУ, Атырау қ.",
      ctaAttendee: "Тыңдаушы болу",
      ctaSpeaker: "Спикер болу",
      statsAttendees: "қатысушы",
      statsSpeakers: "спикер",
      statsCompanies: "компания",
      ctaContacts: "Байланыс",
    },
    agenda: {
      title: "Форум бағдарламасы",
      subtitle:
        "Қарқынды сессиялар, тренингтер және Startup Battle толы бір күн",
      sessions: [
        {
          time: "09:00 – 10:00",
          title: "Қатысушыларды тіркеу",
          description:
            "Бейдждерді беру, көрме аймағының жұмысын бастау (Career Expo)",
        },
        {
          time: "10:00 – 10:30",
          title: "Форумның ресми ашылуы",
          description:
            "Университет басшылығы, әкімдік және серіктестер тарапынан құттықтау сөздер",
        },
        {
          time: "10:30 – 12:00",
          title: "№1 панельдік сессия: Өнеркәсіпті цифрлық трансформациялау",
          description:
            "Мұнай-газ және өнеркәсіп салаларына цифрлық шешімдерді енгізуді талқылау",
        },
        {
          time: "12:00 – 13:00",
          title: "Түскі ас және Networking",
          description:
            "Қатысушылардың бейресми қарым-қатынасы, көрме аймағына бару",
        },
        {
          time: "13:00 – 14:00",
          title: "№2 панельдік сессия: Экономика сұранысына сай кадрлар: дуальды білім беру моделі",
          description:
            "Сұранысқа ие мамандарды даярлаудағы бизнес пен білім берудің рөлі",
        },
        {
          time: "14:00 – 15:00",
          title: "№3 панельдік сессия: «Стартаптар және инновациялар экожүйесі»",
          description:
            "Стартап-экожүйені дамыту, инвестициялар және технологиялық жобалардың өсуі",
        },
        {
          time: "13:00 – 15:00 (қатарлас)",
          title: "Студенттерге арналған тренингтер",
          description:
            "Жетекші компаниялардың шеберлік сыныптары (Microsoft, McKinsey, PwC, EY, Deloitte, BCG)",
        },
        {
          time: "15:00 – 17:00",
          title: "Startup Battle",
          description:
            "Жюри алдында стартаптардың презентациясы, ең үздік жобаларды іріктеу",
        },
        {
          time: "17:00 – 17:30",
          title: "Марапаттау және форумның жабылуы",
          description:
            "Қорытындылау, сыйлықтар мен алғыс хаттар табыстау",
        },
      ],
    },
    registration: {
      title: "Тіркелу",
      subtitle:
        "Форумға тыңдаушы ретінде қосылыңыз немесе спикер ретінде өтініш беріңіз",
      attendeeTab: "Тыңдаушы",
      speakerTab: "Спикер",
      form: {
        name: "Аты-жөні",
        namePlaceholder: "Иванов Иван Иванович",
        org: "Ұйым / Оқу орны",
        orgPlaceholder: "«Компания атауы» ЖШС немесе АММУ",
        position: "Лауазым / Мамандық",
        positionPlaceholder: "Жетекші / 3-курс студенті",
        email: "Email",
        emailPlaceholder: "example@email.com",
        topic: "Сөз тақырыбы",
        topicPlaceholder: "Баяндамаңыздың қысқа атауы",
        theses: "Қысқаша тезистер",
        thesesPlaceholder:
          "Сөз сөйлеудің негізгі тезистерін сипаттаңыз (ең кемі 50 таңба)...",
        submitAttendee: "Тыңдаушы ретінде тіркелу",
        submitSpeaker: "Спикер ретінде өтінім беру",
        submitting: "Жіберілуде...",
      },
      validation: {
        nameRequired: "Аты-жөні міндетті",
        nameMin: "Аты-жөні кем дегенде 3 таңбадан тұруы керек",
        orgRequired: "Ұйымды көрсетіңіз",
        positionRequired: "Лауазымды көрсетіңіз",
        emailRequired: "Email міндетті",
        emailInvalid: "Дұрыс email енгізіңіз",
        topicRequired: "Сөз тақырыбын көрсетіңіз",
        thesesRequired: "Тезистер қосыңыз",
        thesesMin: "Тезистер кем дегенде 50 таңбадан тұруы керек",
      },
    },
    modal: {
      attendeeTitle: "Тіркеу сәтті өтті!",
      attendeeText: "Сізді 28 сәуірде Атырауда күтеміз",
      speakerTitle: "Өтінім қабылданды!",
      speakerText: "Ұйымдастырушылар жақын арада сізбен байланысады",
      close: "Жабу",
    },
    careerExpo: {
      badge: "Career Expo",
      title: "Career\nExpo 2026",
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
    jobFair: {
      badge: "Жұмыс жәрмеңкесі",
      titleLine1: "Жұмыс",
      titleLine2: "Жәрмеңкесі 2026",
      subtitle: "Форум барысында мұнай-газ саласының жетекші компанияларынан жұмыс немесе тағылымдама табыңыз. Бір жерде 30-дан астам жұмыс берушіден 300+ өзекті бос жұмыс орны.",
      stats: [
        { value: "300+", label: "Бос жұмыс орындары" },
        { value: "30+", label: "Жұмыс беруші компаниялар" },
        { value: "120+", label: "Тағылымдамалар" },
        { value: "500+", label: "Үміткерлер" }
      ],
      location: "Сафи Өтебаев атындағы АММУ, Атырау",
      date: "2026 жылғы 28 сәуір, күні бойы",
      howItWorksSubtitle: "Қалай қатысуға болады",
      howItWorksTitle: "Мансабыңызға 4 қадам",
      howItWorks: [
        { step: "01", title: "Стендтерді зерттеңіз", desc: "Қатысушы компаниялармен, олардың мәдениетімен және ашық позицияларымен танысыңыз" },
        { step: "02", title: "Түйіндемені дайындаңыз", desc: "Түйіндеменің бірнеше көшірмесін әкеліп, on-spot қысқаша сұхбатқа дайын болыңыз" },
        { step: "03", title: "HR-мен сөйлесіңіз", desc: "Рекрутерлерге және жалдау жөніндегі менеджерлерге тікелей сұрақ қойыңыз" },
        { step: "04", title: "Мастер-класстарға қатысыңыз", desc: "Индустрия көшбасшыларының тренингтерінде hard және soft дағдыларын дамытыңыз" }
      ],
      categoriesSubtitle: "Бағыттар",
      categoriesTitle: "Бос жұмыс орындарының санаттары",
      vacancyCountLabel: "вакансия",
      categories: [
        { title: "Мұнай-газ инженерлері", positions: ["Бұрғылау инженері", "Кәсіпшілік технологы", "Өндіру инженері", "Геолог"], count: "70+", badge: "Ыстық вакансиялар" },
        { title: "IT және цифрландыру", positions: ["DevOps Engineer", "Data Scientist", "Frontend / Backend Dev", "Жүйелік талдаушы"], count: "50+", badge: "Трендте" },
        { title: "Автоматтандыру және IoT", positions: ["БАҚжА инженері", "SCADA маманы", "IoT әзірлеушісі", "Электронщик-инженер"], count: "30+", badge: "Жаңа рөлдер" },
        { title: "Қаржы және аналитика", positions: ["Қаржы талдаушысы", "Бизнес-талдаушы", "Аудитор", "Тәуекел-менеджері"], count: "25+", badge: "Тұрақты" },
        { title: "Экология және ГринТех", positions: ["Эколог", "HSE маманы", "Еңбекті қорғау инженері", "GreenTech талдаушысы"], count: "20+", badge: "Жасыл сектор" },
        { title: "Студенттерге арналған тағылымдамалар", positions: ["Жазғы тағылымдамалар", "Дуальды оқыту", "Graduate бағдарламалар", "Компаниялардағы тәжірибе"], count: "120+", badge: "Студенттер үшін" }
      ],
      employersSubtitle: "Қатысушы жұмыс берушілер",
      ctaSeekerBadge: "Үміткерлер үшін",
      ctaSeekerTitle: "Арманыңыздағы жұмысты табыңыз",
      ctaSeekerDesc: "Форум қатысушысы ретінде тіркеліп, барлық вакансияларға, шеберлік сыныптарына және нетворкинг-сессияларға қол жеткізіңіз.",
      ctaSeekerButton: "Тіркелу",
      ctaCompanyBadge: "Компаниялар үшін",
      ctaCompanyTitle: "Үздік мамандарды табыңыз",
      ctaCompanyDesc: "Бос жұмыс орындарын орналастырып, жұмыс жәрмеңкесіне қатысыңыз. Көрме стендін немесе форумның серіктестік пакетін сатып алыңыз.",
      ctaCompanyButton: "WhatsApp-қа жазу",
      ctaCompanyMessage: "Сәлеметсіз бе! Мен Digital Atyrau 2026 Жұмыс жәрмеңкесі бойынша жазып тұрмын."
    },
    startupBattle: {
      badge: "Startup Battle 2026",
      title: "Startup\nBattle 2026",
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
    },
    contacts: {
      title: "Байланыс",
      subtitle: "Digital Atyrau форумының ұйымдастырушыларымен хабарласыңыз",
      director: "AI-HUB Басшысы",
      directorName: "Абдиғалиева Ақмарал Нұрасылқызы",
      deputy: "AI-HUB Басшысының орынбасары",
      deputyName: "Мырзакелді Толғанай Дәулеткелдіқызы",
      email: "Пошта",
      emailButton: "Хат жазу"
    },
    footer: {
      rights: "Барлық құқықтар қорғалған",
      organizer: "Сафи Өтебаев атындағы Атырау университеті | «Атырау қаласы әкімінің аппараты» мемлекеттік мекемесі",
    },
  },

  zh: {
    nav: {
      about: "关于论坛",
      agenda: "议程",
      register: "注册",
      careerExpo: "职业展览",
      jobFair: "招聘会",
      startupBattle: "创业大赛",
      contacts: "联系方式",
    },
    hero: {
      badge: "地区论坛 · 2026年4月28日",
      title: "Digital Atyrau 2026:\nFrom Education to Career in Oil & Gas",
      subtitle:
        "旨在发展阿特劳地区数字生态系统的平台。连接商业、技术与教育。",
      date: "2026年4月28日",
      location: "萨菲·乌特巴耶夫命名AOUG，阿特劳",
      ctaAttendee: "成为听众",
      ctaSpeaker: "成为演讲者",
      statsAttendees: "与会者",
      statsSpeakers: "演讲者",
      statsCompanies: "公司",
      ctaContacts: "联系方式",
    },
    agenda: {
      title: "论坛议程",
      subtitle:
        "全天丰富的会议、培训和Startup Battle",
      sessions: [
        {
          time: "09:00 – 10:00",
          title: "参会者注册",
          description:
            "领取胸牌，展览区开放 (Career Expo)",
        },
        {
          time: "10:00 – 10:30",
          title: "论坛正式开幕",
          description:
            "大学领导、市政府及合作伙伴致欢迎辞",
        },
        {
          time: "10:30 – 12:00",
          title: "第一场圆桌讨论：工业数字化转型",
          description:
            "探讨在油气及工业领域应用数字解决方案",
        },
        {
          time: "12:00 – 13:00",
          title: "午餐与拓展人脉 (Networking)",
          description:
            "参会者非正式交流，参观展览区",
        },
        {
          time: "13:00 – 14:00",
          title: "第二场圆桌讨论：面向经济需求的人才：双元制教育模式",
          description:
            "商业与教育在培养急需人才中的作用",
        },
        {
          time: "14:00 – 15:00",
          title: "第三场圆桌讨论：“初创企业与创新生态系统”",
          description:
            "初创生态系统的发展、投资与科技项目的增长",
        },
        {
          time: "13:00 – 15:00 (平行进行)",
          title: "学生培训",
          description:
            "领军企业系列大师班 (Microsoft, McKinsey, PwC, EY, Deloitte, BCG)",
        },
        {
          time: "15:00 – 17:00",
          title: "初创企业大赛 (Startup Battle)",
          description:
            "向评委展示初创项目，评选最佳项目",
        },
        {
          time: "17:00 – 17:30",
          title: "颁奖典礼与论坛闭幕",
          description:
            "总结成果，颁发奖项与感谢信",
        },
      ],
    },
    registration: {
      title: "立即注册",
      subtitle:
        "作为听众加入论坛或申请成为演讲者",
      attendeeTab: "听众",
      speakerTab: "演讲者",
      form: {
        name: "姓名",
        namePlaceholder: "张三",
        org: "组织 / 学校",
        orgPlaceholder: "公司名称或大学",
        position: "职位 / 专业",
        positionPlaceholder: "经理 / 三年级学生",
        email: "邮箱",
        emailPlaceholder: "example@email.com",
        topic: "演讲主题",
        topicPlaceholder: "演讲的简短标题",
        theses: "摘要 / 要点",
        thesesPlaceholder:
          "描述您演讲的关键要点（至少50个字符）...",
        submitAttendee: "作为听众注册",
        submitSpeaker: "申请成为演讲者",
        submitting: "提交中...",
      },
      validation: {
        nameRequired: "姓名为必填项",
        nameMin: "姓名至少3个字符",
        orgRequired: "请输入组织",
        positionRequired: "请输入职位",
        emailRequired: "邮箱为必填项",
        emailInvalid: "请输入有效邮箱",
        topicRequired: "请输入演讲主题",
        thesesRequired: "请输入摘要",
        thesesMin: "摘要至少50个字符",
      },
    },
    modal: {
      attendeeTitle: "注册成功！",
      attendeeText: "我们期待您于4月28日在阿特劳参加论坛",
      speakerTitle: "申请已接收！",
      speakerText: "组织者将尽快与您联系",
      close: "关闭",
    },
    careerExpo: {
      badge: "Career Expo",
      title: "职业展览\n2026",
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
    jobFair: {
      badge: "招聘会",
      titleLine1: "人才",
      titleLine2: "招聘会 2026",
      subtitle: "在论坛现场寻找领先油气公司的工作或实习机会。一个地方汇集30多家雇主的300多个热门职位。",
      stats: [
        { value: "300+", label: "职位空缺" },
        { value: "30+", label: "雇主公司" },
        { value: "120+", label: "实习机会" },
        { value: "500+", label: "求职者" }
      ],
      location: "Safi Utebayev AOUG，阿特劳",
      date: "2026年4月28日，全天",
      howItWorksSubtitle: "如何参与",
      howItWorksTitle: "开启职业生涯的4个步骤",
      howItWorks: [
        { step: "01", title: "参观展位", desc: "了解参展公司，他们的文化和空缺职位" },
        { step: "02", title: "准备简历", desc: "带上几份简历，准备进行现场简短面试" },
        { step: "03", title: "与HR交谈", desc: "直接向招聘人员和招聘经理提问" },
        { step: "04", title: "参加大师班", desc: "在行业领导者的培训课程中提升您的硬技能和软技能" }
      ],
      categoriesSubtitle: "方向",
      categoriesTitle: "职位类别",
      vacancyCountLabel: "个职位",
      categories: [
        { title: "油气工程师", positions: ["钻井工程师", "现场技术员", "生产工程师", "地质学家"], count: "70+", badge: "热门职位" },
        { title: "IT和数字化", positions: ["DevOps 工程师", "数据科学家", "前端 / 后端开发", "系统分析师"], count: "50+", badge: "热门趋势" },
        { title: "自动化和物联网", positions: ["仪表工程师", "SCADA 专家", "物联网开发人员", "电子工程师"], count: "30+", badge: "新角色" },
        { title: "金融与分析", positions: ["金融分析师", "商业分析师", "审计师", "风险经理"], count: "25+", badge: "稳定" },
        { title: "生态与绿色科技", positions: ["生态学家", "HSE专家", "职业安全工程师", "绿色科技分析师"], count: "20+", badge: "绿色部门" },
        { title: "学生实习", positions: ["暑期实习", "双元制教育", "毕业生计划", "公司实践"], count: "120+", badge: "面向学生" }
      ],
      employersSubtitle: "参展雇主",
      ctaSeekerBadge: "面向求职者",
      ctaSeekerTitle: "找到理想工作",
      ctaSeekerDesc: "注册为论坛参与者，并获得所有职位空缺，大师班和交流会议的机会。",
      ctaSeekerButton: "立即注册",
      ctaCompanyBadge: "面向公司",
      ctaCompanyTitle: "寻找顶尖人才",
      ctaCompanyDesc: "发布职位空缺并参加招聘会。购买展位或论坛合作伙伴套餐。",
      ctaCompanyButton: "通过 WhatsApp 联系",
      ctaCompanyMessage: "你好！我写信是关于 Digital Atyrau 2026 招聘会的事宜。"
    },
    startupBattle: {
      badge: "Startup Battle 2026",
      title: "Startup\nBattle 2026",
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
    },
    contacts: {
      title: "联系方式",
      subtitle: "联系 Digital Atyrau 论坛的组织者",
      director: "AI-HUB 负责人",
      directorName: "Abdigalieva Akmaral Nurasylovna",
      deputy: "AI-HUB 副负责人",
      deputyName: "Myrzakeldi Tolganai Daultekeldikyzy",
      email: "电子邮件",
      emailButton: "发送邮件"
    },
    footer: {
      rights: "版权所有",
      organizer: "萨菲·乌特巴耶夫阿特劳大学 | 国家机构 «阿特劳市政府（阿基马特）»",
    },
  },
};
