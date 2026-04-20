// src/components/StartupBattleSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import {
  Zap, Trophy, Users, Calendar, Clock, CheckCircle,
  Target, Lightbulb, BarChart3, Presentation, Star, ArrowRight, ExternalLink,
  Flame, Cpu, Factory, Leaf, GraduationCap, Building, CreditCard
} from "lucide-react";

export function StartupBattleSection() {
  const { t } = useLanguage();
  const c = t.startupBattle;
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleApplyClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmRedirect = () => {
    setShowConfirmModal(false);
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdcdsJjLiwB-mZhEbKWBPYbT5M3WM3JM8wOdKBw74mPjEOQUQ/viewform?usp=header", "_blank", "noopener,noreferrer");
  };

  const trackIcons = [
    <Flame className="text-orange-400" size={24} />,
    <Cpu className="text-blue-400" size={24} />,
    <Factory className="text-gray-400" size={24} />,
    <Leaf className="text-emerald-400" size={24} />,
    <GraduationCap className="text-purple-400" size={24} />,
    <Building className="text-sky-400" size={24} />,
    <CreditCard className="text-yellow-400" size={24} />
  ];
  
  const rewardIcons = [
    <CheckCircle size={18} className="text-cyan-400" />,
    <Trophy size={18} className="text-amber-400" />,
    <Users size={18} className="text-purple-400" />,
    <Star size={18} className="text-emerald-400" />
  ];

  const stepNums = ["01", "02", "03", "04"];

  const criteriaIcons = [
    <Lightbulb size={16} />,
    <Target size={16} />,
    <BarChart3 size={16} />,
    <Presentation size={16} />,
    <Users size={16} />
  ];

  return (
    <section
      id="startup-battle"
      className="relative bg-neutral-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
            <Zap size={12} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-semibold tracking-widest uppercase">
              {c.badge}
            </span>
          </div>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6 whitespace-pre-line"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {c.title.split('\n')[0]}<br />
            {c.title.split('\n')[1] && <span className="text-purple-400">{c.title.split('\n')[1]}</span>}
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8">
            {c.subtitle}
          </p>

          {/* Key info chips */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-neutral-300">
              <Calendar size={14} className="text-purple-400" />
              <span>{c.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-neutral-300">
              <Clock size={14} className="text-purple-400" />
              <span>{c.time}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-neutral-300">
              <Users size={14} className="text-purple-400" />
              <span>{c.teamSize}</span>
            </div>
          </div>
        </motion.div>

        {/* Registration deadline banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-cyan-900/20 border border-purple-500/30"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-purple-300 text-xs font-semibold uppercase tracking-widest mb-1">{c.regSubtitle}</p>
              <h3 className="text-white font-bold text-lg">{c.regPeriod}</h3>
              <p className="text-neutral-400 text-sm mt-1">{c.regDeadlinePrefix} <span className="text-amber-400 font-semibold">{c.regDeadlineDate}</span></p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {c.regWarning1}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {c.regWarning2}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {c.regWarning3}
              </div>
            </div>
            <button
              onClick={handleApplyClick}
              className="flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              {c.regButton} <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Directions / Tracks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">{c.tracksSubtitle}</p>
            <h3 className="text-2xl font-black text-white mb-6">{c.tracksTitle}</h3>
            <div className="space-y-3">
              {c.tracks.map((track, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/40 transition-colors group"
                >
                  <span className="text-2xl">{trackIcons[i]}</span>
                  <div>
                    <div className="text-white text-sm font-semibold group-hover:text-purple-300 transition-colors">{track.label}</div>
                    <div className="text-neutral-500 text-xs">{track.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What participants get */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Rewards */}
            <div>
              <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">{c.rewardsSubtitle}</p>
              <h3 className="text-2xl font-black text-white mb-6">{c.rewardsTitle}</h3>
              <div className="space-y-3">
                {c.rewards.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    {rewardIcons[i]}
                    <span className="text-neutral-300 text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Format */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">{c.formatSubtitle}</p>
              <ul className="space-y-2 text-sm text-neutral-300">
                {c.format.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> {f}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">{c.stepsSubtitle}</p>
          <h3 className="text-3xl font-black text-white mb-8">{c.stepsTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/40 transition-colors"
              >
                <div
                  className="text-4xl font-black mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(168,85,247,0.4)" }}
                >
                  {stepNums[i]}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Evaluation criteria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800"
        >
          <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">{c.criteriaSubtitle}</p>
          <h3 className="text-2xl font-black text-white mb-6">{c.criteriaTitle}</h3>
          <div className="flex flex-wrap gap-3">
            {c.criteria.map((cr, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-neutral-800/60 border border-neutral-700 rounded-full px-4 py-2 text-neutral-300 text-sm"
              >
                <span className="text-purple-400">{criteriaIcons[i]}</span>
                {cr}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800">
            <p className="text-neutral-400 text-sm mb-4 font-semibold">{c.welcomePrefix}</p>
            <div className="flex flex-wrap gap-3">
              {c.welcomeTags.map((tag, i) => (
                <span key={i} className="bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs rounded-full px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
              onClick={() => setShowConfirmModal(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md overflow-hidden bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
                  <ExternalLink className="text-purple-400 w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{c.modalTitle}</h3>
                
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                  {c.modalText}
                </p>
                
                <div className="flex w-full gap-3 sm:flex-row flex-col">
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="flex-1 px-4 py-3.5 rounded-xl border border-neutral-700 bg-neutral-800/50 text-neutral-300 font-medium hover:bg-neutral-800 hover:text-white transition-colors"
                  >
                    {c.modalCancel}
                  </button>
                  <button
                    onClick={handleConfirmRedirect}
                    className="flex-1 px-4 py-3.5 rounded-xl bg-purple-500 text-white font-bold hover:bg-purple-400 transition-colors shadow-lg shadow-purple-500/20"
                  >
                    {c.modalConfirm}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
