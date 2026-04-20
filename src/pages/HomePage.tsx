// src/pages/HomePage.tsx
import { useState, useRef } from "react";
import { HeroSection } from "../components/HeroSection";
import { AgendaSection } from "../components/AgendaSection";
import { RegistrationSection } from "../components/RegistrationSection";
import { SuccessModal } from "../components/SuccessModal";

type ModalType = "attendee" | "speaker" | null;

export function HomePage() {
  const [modal, setModal] = useState<ModalType>(null);
  const [regTab, setRegTab] = useState<"attendee" | "speaker">("attendee");
  const registerRef = useRef<HTMLDivElement>(null);

  const scrollToRegister = (tab: "attendee" | "speaker") => {
    setRegTab(tab);
    setTimeout(() => {
      document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
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

      <SuccessModal
        open={modal !== null}
        type={modal}
        onClose={() => setModal(null)}
      />
    </>
  );
}
