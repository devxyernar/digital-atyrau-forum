export interface Sponsor {
  id: string;
  name: string;
  logo?: string;
  initials: string;
  color: string;
  website?: string;
}

export const sponsors: Sponsor[] = [
  {
    id: "halyk-bank",
    name: "Halyk Bank",
    initials: "HB",
    color: "#006B3F",
    website: "https://halykbank.kz",
    logo: "/halyk.svg",
  },
  {
    id: "akimat-atyrau",
    name: "Акимат Атырау",
    initials: "АА",
    color: "#003580",
    website: "https://www.gov.kz/memleket/entities/atyrau",
    logo: "/atyrauakimat.svg",
  },
  {
    id: "astana-hub",
    name: "Astana Hub",
    initials: "AH",
    color: "#1A1A2E",
    website: "https://astanahub.com",
    logo: "/astana-hub.svg",
  },
  {
    id: "aoug",
    name: "АУНГ",
    initials: "УН",
    color: "#8B1A1A",
    website: "https://aogu.edu.kz",
    logo: "/aogu.png",
  },
  {
    id: "ai-hub",
    name: "AI Hub",
    initials: "AI",
    color: "#0EA5E9",
    website: "https://ai-hubaogu.kz/",
    logo: "/AIhub logo_monoWT.svg",
  },
  {
    id: "digital-ministry",
    name: "Digital Ministry KZ",
    initials: "DM",
    color: "#7C3AED",
    website: "https://www.gov.kz/memleket/entities/maidd",
    logo: "/ministry.png",
  },
  {
    id: "kmg-kumkol",
    name: "KMG Kumkol",
    initials: "KK",
    color: "#B45309",
    website: "https://kmg.kz",
    logo: "/kmgkumkol.svg",
  },
  {
    id: "norsec",
    name: "Norsec Delta",
    initials: "ND",
    color: "#0F766E",
    website: "https://norsec.kz",
    logo: "/norsec.png",
  },
];
