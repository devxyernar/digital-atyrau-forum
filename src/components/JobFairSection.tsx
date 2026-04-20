// src/components/JobFairSection.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import {
  Search, FileText, Building2, GraduationCap,
  MapPin, Clock, ChevronRight, ArrowRight, Sparkles,
  Flame, Laptop, Bot, LineChart, FlaskConical
} from "lucide-react";

export function JobFairSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const jf = t.jobFair;

  const categoryIcons = [
    <Flame size={32} className="text-orange-400" />,
    <Laptop size={32} className="text-cyan-400" />,
    <Bot size={32} className="text-purple-400" />,
    <LineChart size={32} className="text-emerald-400" />,
    <FlaskConical size={32} className="text-lime-400" />,
    <GraduationCap size={32} className="text-amber-400" />
  ];

  const categoryColors = [
    "border-orange-500/30 hover:border-orange-500/60",
    "border-cyan-500/30 hover:border-cyan-500/60",
    "border-purple-500/30 hover:border-purple-500/60",
    "border-emerald-500/30 hover:border-emerald-500/60",
    "border-lime-500/30 hover:border-lime-500/60",
    "border-amber-500/30 hover:border-amber-500/60"
  ];

  const categoryBadgeColors = [
    "bg-orange-500/10 border-orange-500/30 text-orange-300",
    "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    "bg-purple-500/10 border-purple-500/30 text-purple-300",
    "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    "bg-lime-500/10 border-lime-500/30 text-lime-300",
    "bg-amber-500/10 border-amber-500/30 text-amber-300"
  ];

  const howItWorksIcons = [
    <Search size={20} />,
    <FileText size={20} />,
    <Building2 size={20} />,
    <GraduationCap size={20} />
  ];

  const employers = [
    "KazMunayGas", "Tengizchevroil", "KPO", "NCOC", "Kazmunaigas EP",
    "Emerson", "Schlumberger", "Baker Hughes", "Halliburton", "SAP Kazakhstan",
    "Microsoft KZ", "Deloitte", "PwC", "McKinsey", "EY Kazakhstan",
  ];

  const goToRegister = () => {
    navigate("/");
    setTimeout(() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <section
      id="job-fair"
      className="relative bg-neutral-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}
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
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={12} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              {jf.badge}
            </span>
          </div>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {jf.titleLine1}<br />
            <span className="text-amber-400">{jf.titleLine2}</span>
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8">
            {jf.subtitle}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 py-6 border-t border-b border-neutral-800 mb-8">
            {jf.stats.map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-neutral-500 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-neutral-300">
              <MapPin size={14} className="text-amber-400" />
              <span>{jf.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-neutral-300">
              <Clock size={14} className="text-amber-400" />
              <span>{jf.date}</span>
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">{jf.howItWorksSubtitle}</p>
          <h3 className="text-3xl font-black text-white mb-8">{jf.howItWorksTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {jf.howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 group"
              >
                {i < 3 && (
                  <ChevronRight
                    size={16}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 text-neutral-700 hidden lg:block z-10"
                  />
                )}
                <div
                  className="text-4xl font-black mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(245,158,11,0.25)" }}
                >
                  {item.step}
                </div>
                <div className="text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">
                  {howItWorksIcons[i]}
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vacancy categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">{jf.categoriesSubtitle}</p>
          <h3 className="text-3xl font-black text-white mb-8">{jf.categoriesTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jf.categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`p-6 rounded-2xl bg-neutral-900/60 border transition-all duration-300 cursor-pointer group ${categoryColors[i]}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span>{categoryIcons[i]}</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-white">{cat.count}</div>
                    <div className="text-neutral-500 text-xs">{jf.vacancyCountLabel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <h4 className="text-white font-bold text-sm group-hover:text-amber-300 transition-colors">{cat.title}</h4>
                  <span className={`text-xs border rounded-full px-2 py-0.5 ${categoryBadgeColors[i]}`}>{cat.badge}</span>
                </div>
                <ul className="space-y-1">
                  {cat.positions.map((pos, j) => (
                    <li key={j} className="text-neutral-500 text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-neutral-700" />
                      {pos}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Employers marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase mb-6 text-center">
            {jf.employersSubtitle}
          </p>
          <div className="overflow-hidden">
            <div
              className="flex gap-4 items-center"
              style={{
                animation: "marquee 30s linear infinite",
                width: "max-content",
              }}
            >
              {[...employers, ...employers].map((emp, i) => (
                <div
                  key={i}
                  className="px-5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 text-xs font-medium whitespace-nowrap hover:border-amber-500/40 hover:text-neutral-200 transition-colors cursor-default"
                >
                  {emp}
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {/* For job seekers */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-950/40 to-neutral-900/60 border border-amber-500/20">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">{jf.ctaSeekerBadge}</p>
            <h4 className="text-xl font-black text-white mb-2">{jf.ctaSeekerTitle}</h4>
            <p className="text-neutral-400 text-sm mb-5 leading-relaxed">
              {jf.ctaSeekerDesc}
            </p>
            <button
              onClick={goToRegister}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              {jf.ctaSeekerButton} <ArrowRight size={16} />
            </button>
          </div>

          {/* For companies */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-neutral-900/60 border border-emerald-500/20">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">{jf.ctaCompanyBadge}</p>
            <h4 className="text-xl font-black text-white mb-2">{jf.ctaCompanyTitle}</h4>
            <p className="text-neutral-400 text-sm mb-5 leading-relaxed">
              {jf.ctaCompanyDesc}
            </p>
            <a
              href={`https://wa.me/77788953273?text=${encodeURIComponent(jf.ctaCompanyMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-black font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              {jf.ctaCompanyButton} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
