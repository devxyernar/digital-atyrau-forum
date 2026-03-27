// src/components/AgendaSection.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

const sessionColors = [
  "border-neutral-700",
  "border-cyan-500/40",
  "border-cyan-500/40",
  "border-amber-500/40",
  "border-amber-500/40",
  "border-purple-500/40",
  "border-orange-500/40",
  "border-emerald-500/40",
];

export function AgendaSection() {
  const { t } = useLanguage();

  return (
    <section id="agenda" className="bg-neutral-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3">
            23 апр. 2026 · 09:00 – 17:30
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.agenda.title}
          </h2>
          <p className="text-neutral-400 text-lg">{t.agenda.subtitle}</p>
        </motion.div>

        {/* Session list */}
        <div className="space-y-4">
          {t.agenda.sessions.map((session, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`flex gap-6 p-5 rounded-xl bg-neutral-950/50 border-l-4 ${sessionColors[i % sessionColors.length]} border border-neutral-800 group hover:border-neutral-600 transition-colors`}
            >
              {/* Time */}
              <div className="flex-shrink-0 w-28 text-right">
                <span className="text-neutral-500 text-xs font-mono leading-relaxed">
                  {session.time}
                </span>
              </div>

              {/* Divider */}
              <div className="flex-shrink-0 w-px bg-neutral-800" />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-semibold mb-1 leading-snug">
                  {session.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {session.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
