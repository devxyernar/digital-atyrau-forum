// src/i18n/translations.ts

export type Language = "ru" | "en" | "kz" | "zh";

export interface Translations {
  nav: {
    about: string;
    agenda: string;
    register: string;
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
    },
    hero: {
      badge: "Интернациональный форум · 23 апреля 2026",
      title: "Digital Atyrau 2026:\nSynergy of Industry and Talent",
      subtitle:
        "Платформа для развития цифровой экосистемы Атырауской области. Объединяем бизнес, технологии и образование.",
      date: "23 апреля 2026",
      location: "АУНГ им. Сафи Утебаева, г. Атырау",
      ctaAttendee: "Стать слушателем",
      ctaSpeaker: "Стать спикером",
      statsAttendees: "участников",
      statsSpeakers: "спикеров",
      statsCompanies: "компаний",
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
      attendeeText: "Ждём вас на форуме 23 апреля в Атырау",
      speakerTitle: "Заявка принята!",
      speakerText: "Организаторы свяжутся с вами в ближайшее время",
      close: "Закрыть",
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
    },
    hero: {
      badge: "Regional Forum · April 23, 2026",
      title: "Digital Atyrau 2026:\nSynergy of Industry and Talent",
      subtitle:
        "A platform for developing the digital ecosystem of the Atyrau region. Connecting business, technology, and education.",
      date: "April 23, 2026",
      location: "AOUG named after Safi Utebayev, Atyrau",
      ctaAttendee: "Become an Attendee",
      ctaSpeaker: "Become a Speaker",
      statsAttendees: "attendees",
      statsSpeakers: "speakers",
      statsCompanies: "companies",
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
      attendeeText: "We look forward to seeing you on April 23 in Atyrau",
      speakerTitle: "Application Received!",
      speakerText: "Organizers will contact you shortly",
      close: "Close",
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
    },
    hero: {
      badge: "Өңірлік форум · 2026 жылғы 23 сәуір",
      title: "Digital Atyrau 2026:\nSynergy of Industry and Talent",
      subtitle:
        "Атырау облысының цифрлық экожүйесін дамытуға арналған платформа. Бизнесті, технологияларды және білім беруді біріктіреміз.",
      date: "2026 жылғы 23 сәуір",
      location: "Сафи Өтебаев атындағы АММУ, Атырау қ.",
      ctaAttendee: "Тыңдаушы болу",
      ctaSpeaker: "Спикер болу",
      statsAttendees: "қатысушы",
      statsSpeakers: "спикер",
      statsCompanies: "компания",
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
      attendeeText: "Сізді 23 сәуірде Атырауда күтеміз",
      speakerTitle: "Өтінім қабылданды!",
      speakerText: "Ұйымдастырушылар жақын арада сізбен байланысады",
      close: "Жабу",
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
    },
    hero: {
      badge: "地区论坛 · 2026年4月23日",
      title: "Digital Atyrau 2026:\nSynergy of Industry and Talent",
      subtitle:
        "旨在发展阿特劳地区数字生态系统的平台。连接商业、技术与教育。",
      date: "2026年4月23日",
      location: "萨菲·乌特巴耶夫命名AOUG，阿特劳",
      ctaAttendee: "成为听众",
      ctaSpeaker: "成为演讲者",
      statsAttendees: "与会者",
      statsSpeakers: "演讲者",
      statsCompanies: "公司",
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
      attendeeText: "我们期待您于4月23日在阿特劳参加论坛",
      speakerTitle: "申请已接收！",
      speakerText: "组织者将尽快与您联系",
      close: "关闭",
    },
    footer: {
      rights: "版权所有",
      organizer: "萨菲·乌特巴耶夫阿特劳大学 | 国家机构 «阿特劳市政府（阿基马特）»",
    },
  },
};
