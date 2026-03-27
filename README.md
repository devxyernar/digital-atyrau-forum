# Digital Atyrau Forum — Сайт регистрации

## 🚀 Быстрый старт

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 📦 Сборка для продакшена

```bash
npm run build
# Выходные файлы в /dist
```

---

## 🔧 Настройка Google Forms

### Шаг 1 — Создайте две Google Forms

1. **Форма для слушателей** — поля: ФИО, Организация, Должность, Email
2. **Форма для спикеров** — поля: ФИО, Организация, Должность, Email, Тема, Тезисы

### Шаг 2 — Получите Form ID

Из URL формы при редактировании:
```
https://docs.google.com/forms/d/YOUR_FORM_ID/edit
```

### Шаг 3 — Получите entry IDs полей

1. Откройте опубликованную форму
2. DevTools → Network → заполните форму и нажмите «Отправить»
3. Найдите POST-запрос на `.../formResponse`
4. Скопируйте `entry.XXXXXXXXXX` для каждого поля

### Шаг 4 — Обновите конфиг

```ts
// src/config/googleForms.ts
export const GOOGLE_FORMS_CONFIG = {
  attendee: {
    formId: "1FAIpQLSe...",          // ← ваш Form ID
    fields: {
      name:     "entry.1234567890",  // ← ваши entry IDs
      org:      "entry.0987654321",
      position: "entry.1122334455",
      email:    "entry.5544332211",
    },
  },
  speaker: {
    formId: "1FAIpQLSf...",
    fields: {
      name:     "entry.1234567890",
      org:      "entry.0987654321",
      position: "entry.1122334455",
      email:    "entry.5544332211",
      topic:    "entry.6677889900",
      theses:   "entry.0099887766",
    },
  },
};
```

---

## 🌍 Мультиязычность

Все тексты находятся в `src/i18n/translations.ts`.

Чтобы добавить новый язык:
1. Добавьте код языка в тип `Language`
2. Добавьте объект переводов в `translations`
3. Добавьте кнопку в массив `LANGUAGES` в `Header.tsx`

---

## 🏢 Спонсоры / партнёры

Редактируйте `src/config/sponsors.ts`:

```ts
export const sponsors: Sponsor[] = [
  {
    id: "new-company",
    name: "Новая компания",
    initials: "НК",
    color: "#FF6B35",
    website: "https://example.com",
  },
  // ...
];
```

Логотипы отображаются в автоматической бегущей строке.

---

## 🗂️ Структура проекта

```
src/
├── components/
│   ├── Header.tsx           # Sticky header + language switcher
│   ├── SponsorsCarousel.tsx # Infinite scroll sponsors strip
│   ├── HeroSection.tsx      # Главный экран с CTA
│   ├── AgendaSection.tsx    # Программа форума
│   ├── RegistrationSection.tsx # Формы с валидацией
│   └── SuccessModal.tsx     # Popup после отправки
├── config/
│   ├── googleForms.ts       # Google Forms integration
│   └── sponsors.ts          # Список партнёров
├── hooks/
│   └── useLanguage.ts       # Language context hook
├── i18n/
│   └── translations.ts      # RU / EN / KZ / ZH
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🛠️ Технологии

| Слой         | Стек                               |
|--------------|------------------------------------|
| Framework    | React 18 + TypeScript              |
| Bundler      | Vite 5                             |
| Styling      | TailwindCSS 3                      |
| Animations   | Framer Motion                      |
| Forms        | react-hook-form + zod              |
| i18n         | Встроенный context (без i18next)   |
| Backend      | Нет — данные в Google Sheets       |

---

## 📋 Чеклист деплоя

- [ ] Заменить Form IDs в `src/config/googleForms.ts`
- [ ] Заменить entry IDs полей форм
- [ ] Добавить настоящие URL логотипов в `sponsors.ts` (поле `logo`)
- [ ] Обновить `og:image` в `index.html`
- [ ] Настроить домен и деплой (Vercel / Netlify рекомендуется)
