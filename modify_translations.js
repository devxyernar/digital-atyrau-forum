const fs = require('fs');

let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

// Interface nav
content = content.replace(
  /startupBattle:\n?\s*string;\n\s*\};/,
  'startupBattle: string;\n    contacts: string;\n  };'
);

// Interface hero
content = content.replace(
  /statsCompanies:\n?\s*string;\n\s*\};/,
  'statsCompanies: string;\n    ctaContacts: string;\n  };'
);

// Interface contacts before footer
content = content.replace(
  /  footer: \{\n    rights: string;/,
  '  contacts: {\n    title: string;\n    subtitle: string;\n    director: string;\n    deputy: string;\n    email: string;\n  };\n  footer: {\n    rights: string;'
);

const replacements = [
  {
    lang: 'ru',
    contactsTitle: '"Контакты"',
    contactsSubtitle: '"Свяжитесь с организаторами форума Digital Atyrau"',
    director: '"Руководитель AI-HUB"',
    deputy: '"Зам.руководитель AI-HUB"',
    email: '"Почта"',
    navContacts: '"Контакты"',
    ctaContacts: '"Контакты"',
  },
  {
    lang: 'en',
    contactsTitle: '"Contacts"',
    contactsSubtitle: '"Contact the organizers of the Digital Atyrau forum"',
    director: '"AI-HUB Director"',
    deputy: '"AI-HUB Deputy Director"',
    email: '"Email"',
    navContacts: '"Contacts"',
    ctaContacts: '"Contacts"',
  },
  {
    lang: 'kz',
    contactsTitle: '"Байланыс"',
    contactsSubtitle: '"Digital Atyrau форумының ұйымдастырушыларымен хабарласыңыз"',
    director: '"AI-HUB Басшысы"',
    deputy: '"AI-HUB Басшысының орынбасары"',
    email: '"Пошта"',
    navContacts: '"Байланыс"',
    ctaContacts: '"Байланыс"',
  },
  {
    lang: 'zh',
    contactsTitle: '"联系方式"',
    contactsSubtitle: '"联系 Digital Atyrau 论坛的组织者"',
    director: '"AI-HUB 负责人"',
    deputy: '"AI-HUB 副负责人"',
    email: '"电子邮件"',
    navContacts: '"联系方式"',
    ctaContacts: '"联系方式"',
  }
];

replacements.forEach(({lang, contactsTitle, contactsSubtitle, director, deputy, email, navContacts, ctaContacts}) => {
  // Find block for language
  // we can use regex targeting specific sections since they are distinct
});

fs.writeFileSync('src/i18n/translations.ts', content);

