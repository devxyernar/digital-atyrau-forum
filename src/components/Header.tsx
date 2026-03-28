// src/components/Header.tsx
import { useState, useEffect } from "react";
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

interface HeaderProps {
  onRegisterAttendee: () => void;
  onRegisterSpeaker: () => void;
}

export function Header({ onRegisterAttendee, onRegisterSpeaker }: HeaderProps) {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.agenda, href: "#agenda" },
    { label: t.nav.register, href: "#register" },
  ];

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

          {/* Logo */}
          <a href="#" className="flex items-center shrink-0 group hover:opacity-80 transition-opacity">

            <img
              src="/atyrau.svg"
              alt="Digital Atyrau Logo"
              className="h-12 md:h-20 w-auto object-contain scale-110 md:scale-125 origin-left"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-400 hover:text-white text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
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
                onClick={onRegisterAttendee}
                className="text-xs text-neutral-300 border border-neutral-700 px-3 py-1.5 rounded-lg hover:border-neutral-500 transition-colors"
              >
                {t.hero.ctaAttendee}
              </button>
              <button
                onClick={onRegisterSpeaker}
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
          <div className="md:hidden border-t border-neutral-800 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-neutral-300 hover:text-white text-sm py-1 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-neutral-800">
              <button
                onClick={() => { onRegisterAttendee(); setMenuOpen(false); }}
                className="text-sm text-neutral-300 border border-neutral-700 px-4 py-2 rounded-lg hover:border-neutral-500 transition-colors"
              >
                {t.hero.ctaAttendee}
              </button>
              <button
                onClick={() => { onRegisterSpeaker(); setMenuOpen(false); }}
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
