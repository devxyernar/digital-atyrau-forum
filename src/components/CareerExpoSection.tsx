// src/components/CareerExpoSection.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import {
  Briefcase, MapPin, Clock, Users, Star,
  Building2, GraduationCap, Network, TrendingUp, ArrowRight,
  Handshake, FileText, Presentation, Compass, Trophy, Globe
} from "lucide-react";

export function CareerExpoSection() {

  const { t } = useLanguage();
  const c = t.careerExpo;

  const exhibitorIcons = [
    <Building2 size={20} className="text-cyan-400" />,
    <Network size={20} className="text-purple-400" />,
    <GraduationCap size={20} className="text-emerald-400" />,
    <TrendingUp size={20} className="text-amber-400" />
  ];

  const exhibitorTagColors = [
    "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    "bg-purple-500/10 border-purple-500/30 text-purple-300",
    "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    "bg-amber-500/10 border-amber-500/30 text-amber-300"
  ];

  const opportunityIcons = [
    <Handshake size={32} className="text-cyan-400" />,
    <FileText size={32} className="text-purple-400" />,
    <Presentation size={32} className="text-amber-400" />,
    <Compass size={32} className="text-emerald-400" />,
    <Trophy size={32} className="text-yellow-400" />,
    <Globe size={32} className="text-sky-400" />
  ];

  return (
    <section
      id="career-expo"
      className="relative bg-neutral-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #06b6d4 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6">
            <Briefcase size={12} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
              {c.badge}
            </span>
          </div>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6 whitespace-pre-line"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {c.title.split('\n')[0]}<br />
            {c.title.split('\n')[1] && <span className="text-cyan-400">{c.title.split('\n')[1]}</span>}
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8">
            {c.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-300">
              <MapPin size={14} className="text-cyan-400" />
              <span>{c.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-300">
              <Clock size={14} className="text-cyan-400" />
              <span>{c.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-300">
              <Users size={14} className="text-cyan-400" />
              <span>{c.participants}</span>
            </div>
          </div>
        </motion.div>

        {/* Exhibitor types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">{c.exhibitorsSubtitle}</p>
          <h3 className="text-3xl font-black text-white mb-8">{c.exhibitorsTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.exhibitorTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-950/60 border border-neutral-800 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
                    {exhibitorIcons[i]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h4 className="text-white font-bold text-sm">{type.title}</h4>
                      <span className={`text-xs border rounded-full px-2 py-0.5 ${exhibitorTagColors[i]}`}>{type.tag}</span>
                    </div>
                    <p className="text-neutral-500 text-xs leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Opportunities grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">{c.opportunitiesSubtitle}</p>
          <h3 className="text-3xl font-black text-white mb-8">{c.opportunitiesTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.opportunities.map((opp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{opportunityIcons[i]}</div>
                <h4 className="text-white font-bold text-sm mb-1 group-hover:text-amber-300 transition-colors">{opp.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">{opp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">{c.scheduleSubtitle}</p>
          <h3 className="text-3xl font-black text-white mb-8">{c.scheduleTitle}</h3>
          <div className="space-y-3">
            {c.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex gap-6 p-5 rounded-xl bg-neutral-950/60 border border-neutral-800 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-neutral-500 text-xs font-mono">{item.time}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-neutral-800" />
                <div>
                  <p className="text-white text-sm font-semibold">{item.event}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-12 rounded-3xl bg-gradient-to-br from-cyan-950/40 to-neutral-900/60 border border-cyan-500/20"
        >
          <Star size={32} className="text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
            {c.ctaTitle}
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-6">
            {c.ctaDesc}
          </p>
          <a
            href={`https://wa.me/77788953273?text=${encodeURIComponent(c.ctaMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
          >
            {c.ctaButton} <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section >
  );
}
