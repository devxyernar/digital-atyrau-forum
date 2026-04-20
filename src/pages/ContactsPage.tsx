import { motion } from "framer-motion";
import { Phone, Mail, User, MapPin } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export function ContactsPage() {
  const { t } = useLanguage();

  const contactsList = [
    {
      role: t.contacts.director,
      name: "Абдигалиева Акмарал Нурасыловна",
      phone: "+7 701 377 5454",
      phoneLink: "tel:+77013775454"
    },
    {
      role: t.contacts.deputy,
      name: "Мырзакелді Толғанай Дәулеткелдіқызы",
      phone: "+7 778 895 3273",
      phoneLink: "tel:+77788953273"
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Background elements */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-400 text-xs font-medium tracking-widest uppercase">
              {t.contacts.title}
            </span>
          </div>
          <h1
            className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            {t.contacts.title}
          </h1>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto">
            {t.contacts.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {contactsList.map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-cyan-500/40 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <User size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
                  {contact.role}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{contact.name}</h3>
                
                <a
                  href={contact.phoneLink}
                  className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group/link"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-800 group-hover/link:bg-cyan-500/20 flex items-center justify-center transition-colors">
                    <Phone size={18} className="text-cyan-400" />
                  </div>
                  <span className="text-lg font-medium">{contact.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/40 transition-colors group relative overflow-hidden lg:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="absolute left-0 bottom-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Mail size={160} />
            </div>

            <div className="relative z-10 flex-1 text-center sm:text-left">
              <div className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2">
                {t.contacts.email}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">ai.hub.aogu@gmail.com</h3>
            </div>

            <a
              href="mailto:ai.hub.aogu@gmail.com"
              className="relative z-10 inline-flex items-center gap-3 bg-neutral-800 hover:bg-emerald-500 hover:text-black text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300"
            >
              <Mail size={18} />
              <span>Написать письмо</span>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
