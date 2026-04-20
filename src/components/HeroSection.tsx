// src/components/HeroSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Phone, Loader2, CheckCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onRegisterAttendee: () => void;
  onRegisterSpeaker: () => void;
}

const stats = [
  { value: "800+", key: "statsAttendees" as const },
  { value: "40+",  key: "statsSpeakers" as const },
  { value: "50+",  key: "statsCompanies" as const },
];

type ButtonState = "idle" | "loading" | "done";

export function HeroSection({ onRegisterAttendee, onRegisterSpeaker }: HeroSectionProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [attendeeState, setAttendeeState] = useState<ButtonState>("idle");
  const [speakerState, setSpeakerState] = useState<ButtonState>("idle");

  const handleAttendee = () => {
    if (attendeeState !== "idle") return;
    setAttendeeState("loading");
    setTimeout(() => {
      setAttendeeState("done");
      setTimeout(() => {
        setAttendeeState("idle");
        onRegisterAttendee();
      }, 400);
    }, 900);
  };

  const handleSpeaker = () => {
    if (speakerState !== "idle") return;
    setSpeakerState("loading");
    setTimeout(() => {
      setSpeakerState("done");
      setTimeout(() => {
        setSpeakerState("idle");
        onRegisterSpeaker();
      }, 400);
    }, 900);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950"
    >
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-neutral-400 text-xs font-medium tracking-widest uppercase">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            {t.hero.title.split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "text-cyan-400" : ""}`}>
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Date & Location chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <div className="flex items-center gap-2 text-neutral-300 text-sm bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2">
              <Calendar size={14} className="text-cyan-400 flex-shrink-0" />
              <span>{t.hero.date}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300 text-sm bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2">
              <MapPin size={14} className="text-cyan-400 flex-shrink-0" />
              <span>{t.hero.location}</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            {/* Attendee button */}
            <button
              onClick={handleAttendee}
              disabled={attendeeState !== "idle"}
              className="group relative flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-80 text-black font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 overflow-hidden min-w-[200px]"
            >
              <AnimatePresence mode="wait">
                {attendeeState === "idle" && (
                  <motion.span
                    key="idle"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    {t.hero.ctaAttendee}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                )}
                {attendeeState === "loading" && (
                  <motion.span
                    key="loading"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-sm">Loading...</span>
                  </motion.span>
                )}
                {attendeeState === "done" && (
                  <motion.span
                    key="done"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <CheckCircle size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Speaker button */}
            <button
              onClick={handleSpeaker}
              disabled={speakerState !== "idle"}
              className="group relative flex items-center justify-center gap-2 bg-transparent border-2 border-neutral-700 hover:border-cyan-500 disabled:opacity-80 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 min-w-[200px]"
            >
              <AnimatePresence mode="wait">
                {speakerState === "idle" && (
                  <motion.span
                    key="idle"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    {t.hero.ctaSpeaker}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
                  </motion.span>
                )}
                {speakerState === "loading" && (
                  <motion.span
                    key="loading"
                    className="flex items-center gap-2 text-cyan-400"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-sm">Loading...</span>
                  </motion.span>
                )}
                {speakerState === "done" && (
                  <motion.span
                    key="done"
                    className="flex items-center gap-2 text-cyan-400"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <CheckCircle size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Contacts expanding button */}
            <button
              onClick={() => navigate('/contacts')}
              className="group flex items-center justify-center bg-neutral-900 border-2 border-neutral-700 hover:border-cyan-500 rounded-xl transition-all duration-300 overflow-hidden h-[56px] px-4"
              title={t.hero.ctaContacts}
            >
              <Phone size={20} className="text-cyan-400 shrink-0" />
              <div className="grid grid-rows-[1fr] grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-[grid-template-columns] duration-300 ease-out">
                <span className="overflow-hidden whitespace-nowrap text-white font-medium pl-0 group-hover:pl-3 transition-all duration-300">
                  {t.hero.ctaContacts}
                </span>
              </div>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 pt-8 border-t border-neutral-800"
          >
            {stats.map(({ value, key }) => (
              <div key={key}>
                <div className="text-3xl font-black text-white">{value}</div>
                <div className="text-neutral-500 text-sm mt-0.5">{t.hero[key]}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
