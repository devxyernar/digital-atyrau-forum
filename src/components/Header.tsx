// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { SponsorsCarousel } from "./SponsorsCarousel";
import type { Language } from "../i18n/translations";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
  { code: "kz", label: "ҚАЗ" },
  { code: "zh", label: "中文" },
];

// Nav items: pages get `to`, in-page anchors get `href`
const PAGE_NAV = [
  { key: "careerExpo", to: "/career-expo" },
  { key: "jobFair",    to: "/job-fair" },
  { key: "startupBattle", to: "/startup-battle" },
  { key: "contacts", to: "/contacts" },
] as const;

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll to register section on home page
  const goToRegister = (_tab: "attendee" | "speaker") => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors duration-200 ${
      isActive ? "text-cyan-400" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-neutral-950"
      }`}
    >
      <SponsorsCarousel />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo → home */}
          <Link to="/" className="flex items-center shrink-0 group hover:opacity-80 transition-opacity">
            <img
              src="/atyrau.svg"
              alt="Digital Atyrau Logo"
              className="h-12 md:h-20 w-auto object-contain scale-110 md:scale-125 origin-left"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Home-page anchors */}
            <a
              href="/#about"
              onClick={(e) => { e.preventDefault(); navigate("/"); setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 100); }}
              className="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
            >
              {t.nav.about}
            </a>
            <a
              href="/#agenda"
              onClick={(e) => { e.preventDefault(); navigate("/"); setTimeout(() => document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" }), 100); }}
              className="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
            >
              {t.nav.agenda}
            </a>

            {/* Separator */}
            <span className="w-px h-4 bg-neutral-800" />

            {/* Page links */}
            {PAGE_NAV.map(({ key, to }) => (
              <NavLink key={to} to={to} className={navLinkClass}>
                {t.nav[key]}
              </NavLink>
            ))}
          </div>

          {/* Right: Language switcher + CTA */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-xs transition-colors px-2 py-1.5 rounded-md hover:bg-neutral-800"
                onClick={() => setLangOpen((v) => !v)}
              >
                <Globe size={14} />
                <span>{LANGUAGES.find((l) => l.code === lang)?.label}</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl overflow-hidden z-50 min-w-[90px]">
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-neutral-800 ${
                        lang === code
                          ? "text-cyan-400 bg-neutral-800"
                          : "text-neutral-300"
                      }`}
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => goToRegister("attendee")}
                className="text-xs text-neutral-300 border border-neutral-700 px-3 py-1.5 rounded-lg hover:border-neutral-500 transition-colors"
              >
                {t.hero.ctaAttendee}
              </button>
              <button
                onClick={() => goToRegister("speaker")}
                className="text-xs text-black bg-cyan-400 px-3 py-1.5 rounded-lg hover:bg-cyan-300 transition-colors font-semibold"
              >
                {t.hero.ctaSpeaker}
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-neutral-400 hover:text-white p-1"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-800 py-4 space-y-1">
            {/* Home anchors */}
            <a
              href="/#about"
              className="block text-neutral-300 hover:text-white text-sm py-2 px-1 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                navigate("/");
                setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
            >
              {t.nav.about}
            </a>
            <a
              href="/#agenda"
              className="block text-neutral-300 hover:text-white text-sm py-2 px-1 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                navigate("/");
                setTimeout(() => document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
            >
              {t.nav.agenda}
            </a>

            <div className="pt-1 pb-1 border-t border-neutral-800/50" />

            {/* Page links */}
            {PAGE_NAV.map(({ key, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `block text-sm py-2 px-1 transition-colors ${
                    isActive ? "text-cyan-400" : "text-neutral-300 hover:text-white"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[key]}
              </NavLink>
            ))}

            <div className="flex flex-col gap-2 pt-3 border-t border-neutral-800">
              <button
                onClick={() => { goToRegister("attendee"); setMenuOpen(false); }}
                className="text-sm text-neutral-300 border border-neutral-700 px-4 py-2 rounded-lg hover:border-neutral-500 transition-colors"
              >
                {t.hero.ctaAttendee}
              </button>
              <button
                onClick={() => { goToRegister("speaker"); setMenuOpen(false); }}
                className="text-sm text-black bg-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors font-semibold"
              >
                {t.hero.ctaSpeaker}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
