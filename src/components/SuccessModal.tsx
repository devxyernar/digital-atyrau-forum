// src/components/SuccessModal.tsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

interface SuccessModalProps {
  open: boolean;
  type: "attendee" | "speaker" | null;
  onClose: () => void;
}

export function SuccessModal({ open, type, onClose }: SuccessModalProps) {
  const { t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isAttendee = type === "attendee";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm mx-4"
          >
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 text-center shadow-2xl">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", damping: 15 }}
                className="flex justify-center mb-5"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    isAttendee ? "bg-cyan-400/10" : "bg-amber-400/10"
                  }`}
                >
                  <CheckCircle
                    size={36}
                    className={isAttendee ? "text-cyan-400" : "text-amber-400"}
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <h3 className="text-white text-xl font-bold mb-2">
                  {isAttendee ? t.modal.attendeeTitle : t.modal.speakerTitle}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {isAttendee ? t.modal.attendeeText : t.modal.speakerText}
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-6"
              >
                <button
                  onClick={onClose}
                  className={`w-full py-3 rounded-xl text-black font-bold text-sm transition-colors ${
                    isAttendee
                      ? "bg-cyan-400 hover:bg-cyan-300"
                      : "bg-amber-400 hover:bg-amber-300"
                  }`}
                >
                  {t.modal.close}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
