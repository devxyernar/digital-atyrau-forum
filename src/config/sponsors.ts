// src/config/sponsors.ts
// Легко добавляйте новые компании — просто добавьте объект в массив

export interface Sponsor {
  id: string;
  name: string;
  /** URL логотипа. Используйте SVG для чёткости на любых экранах */
  logo?: string;
  /** Инициалы/аббревиатура для fallback, если нет logo */
  initials: string;
  /** Цвет фона для fallback badge */
  color: string;
  website?: string;
}

// src/config/sponsors.ts
export const sponsors: Sponsor[] = [
  {
    id: "halyk-bank",
    name: "Halyk Bank",
    initials: "HB",
    color: "#006B3F",
    website: "https://halykbank.kz",
    logo: "../../public/halyk.svg",
  },
  {
    id: "akimat-atyrau",
    name: "Акимат Атырау",
    initials: "АА",
    color: "#003580",
    website: "https://atyrau.gov.kz",
    logo: "../../public/atyrauakimat.svg",
  },
  {
    id: "astana-hub",
    name: "Astana Hub",
    initials: "AH",
    color: "#1A1A2E",
    website: "https://astanahub.com",
    logo: "../../public/astana-hub.svg",
  },
  {
    id: "aoug",
    name: "АУНГ",
    initials: "УН",
    color: "#8B1A1A",
    website: "https://aung.edu.kz",
    logo: "../../public/aogu.png",
  },
  {
    id: "ai-hub",
    name: "AI Hub",
    initials: "AI",
    color: "#0EA5E9",
    website: "https://aihub.kz",
    logo: "../../public/AIhub logo_monoWT.svg",
  },
  {
    id: "digital-ministry",
    name: "Digital Ministry KZ",
    initials: "DM",
    color: "#7C3AED",
    website: "https://mdai.gov.kz",
    logo: "../../public/ministry.png",
  },
  {
    id: "kmg-kumkol",
    name: "KMG Kumkol",
    initials: "KK",
    color: "#B45309",
    website: "https://kmg.kz",
    logo: "../../public/kmgkumkol.svg",
  },
  {
    id: "norsec",
    name: "Norsec Delta",
    initials: "ND",
    color: "#0F766E",
    website: "https://norsec.kz",
    logo: "../../public/norsec.png",
  },
];
