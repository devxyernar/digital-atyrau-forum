// src/App.tsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Language } from "./i18n/translations";
import { translations } from "./i18n/translations";
import { LanguageContext } from "./hooks/useLanguage";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { CareerExpoPage } from "./pages/CareerExpoPage";
import { JobFairPage } from "./pages/JobFairPage";
import { StartupBattlePage } from "./pages/StartupBattlePage";
import { ContactsPage } from "./pages/ContactsPage";

export function App() {
  const [lang, setLang] = useState<Language>("ru");

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-950 text-white">
          {/* Global font import */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');
            * { font-family: 'DM Sans', sans-serif; }
          `}</style>

          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/career-expo" element={<CareerExpoPage />} />
            <Route path="/job-fair" element={<JobFairPage />} />
            <Route path="/startup-battle" element={<StartupBattlePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>

          {/* Footer */}
          <footer className="bg-neutral-950 border-t border-neutral-800 py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">

              {/* Логотип в футере */}
              <div className="flex items-center">
                <img
                  src="/atyrau.svg"
                  alt="Digital Atyrau Logo"
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
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}
