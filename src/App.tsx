// src/App.tsx
import { useState, useRef } from "react";
import type { Language } from "./i18n/translations";
import { translations } from "./i18n/translations";
import { LanguageContext } from "./hooks/useLanguage";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AgendaSection } from "./components/AgendaSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { SuccessModal } from "./components/SuccessModal";

type ModalType = "attendee" | "speaker" | null;

export function App() {
  const [lang, setLang] = useState<Language>("ru");
  const [modal, setModal] = useState<ModalType>(null);
  const [regTab, setRegTab] = useState<"attendee" | "speaker">("attendee");

  const registerRef = useRef<HTMLDivElement>(null);

  const scrollToRegister = (tab: "attendee" | "speaker") => {
    setRegTab(tab);
    // Small delay to let state update before scrolling
    setTimeout(() => {
      document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] }}
    >
      <div className="min-h-screen bg-neutral-950 text-white">
        {/* Global font import */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');
          * { font-family: 'DM Sans', sans-serif; }
        `}</style>

        <Header
          onRegisterAttendee={() => scrollToRegister("attendee")}
          onRegisterSpeaker={() => scrollToRegister("speaker")}
        />

        <main>
          <HeroSection
            onRegisterAttendee={() => scrollToRegister("attendee")}
            onRegisterSpeaker={() => scrollToRegister("speaker")}
          />

          <AgendaSection />

          <div ref={registerRef}>
            <RegistrationSection
              defaultTab={regTab}
              onAttendeeSuccess={() => setModal("attendee")}
              onSpeakerSuccess={() => setModal("speaker")}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-neutral-950 border-t border-neutral-800 py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">

            {/* Логотип в футере */}
            <div className="flex items-center">
              <img
                src="../public/logos/atyrau.svg"
                alt="Digital Atyrau Logo"
                /* h-10 для мобилок, sm:h-12 для ПК. opacity-70 делает его слегка приглушенным для футера */
                className="h-10 sm:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Организатор */}
            <div className="text-center">
              <p className="text-neutral-500 text-xs sm:text-sm">
                {translations[lang].footer.organizer}
              </p>
            </div>

            {/* Копирайт */}
            <p className="text-neutral-600 text-xs sm:text-sm text-center sm:text-right">
              © 2026 · {translations[lang].footer.rights}
            </p>

          </div>
        </footer>

        <SuccessModal
          open={modal !== null}
          type={modal}
          onClose={() => setModal(null)}
        />
      </div>
    </LanguageContext.Provider>
  );
}
