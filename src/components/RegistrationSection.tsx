// src/components/RegistrationSection.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { submitToGoogleForm } from "../config/googleForms";

// ---------- Zod schemas (built dynamically from translations) ----------
function buildAttendeeSchema(v: ReturnType<typeof useLanguage>["t"]["registration"]["validation"]) {
  return z.object({
    name:     z.string().min(1, v.nameRequired).min(3, v.nameMin),
    org:      z.string().min(1, v.orgRequired),
    position: z.string().min(1, v.positionRequired),
    email:    z.string().min(1, v.emailRequired).email(v.emailInvalid),
  });
}

function buildSpeakerSchema(v: ReturnType<typeof useLanguage>["t"]["registration"]["validation"]) {
  return z.object({
    name:     z.string().min(1, v.nameRequired).min(3, v.nameMin),
    org:      z.string().min(1, v.orgRequired),
    position: z.string().min(1, v.positionRequired),
    email:    z.string().min(1, v.emailRequired).email(v.emailInvalid),
    topic:    z.string().min(1, v.topicRequired),
    theses:   z.string().min(1, v.thesesRequired).min(50, v.thesesMin),
  });
}

type AttendeeData = z.infer<ReturnType<typeof buildAttendeeSchema>>;
type SpeakerData  = z.infer<ReturnType<typeof buildSpeakerSchema>>;

// ---------- Field component ----------
interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}
function Field({ label, error, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-neutral-300 text-sm font-medium">{label}</label>
      {children}
      {error && (
        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full bg-neutral-900 border border-neutral-700 text-white text-sm rounded-lg px-4 py-3 " +
  "placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 " +
  "transition-colors duration-200";

// ---------- Attendee form ----------
interface AttendeeFormProps {
  onSuccess: () => void;
}
function AttendeeForm({ onSuccess }: AttendeeFormProps) {
  const { t } = useLanguage();
  const f = t.registration.form;
  const schema = buildAttendeeSchema(t.registration.validation);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AttendeeData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: AttendeeData) => {
    await submitToGoogleForm("attendee", data);
    reset();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Field label={f.name} error={errors.name?.message}>
        <input {...register("name")} className={inputClass} placeholder={f.namePlaceholder} />
      </Field>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={f.org} error={errors.org?.message}>
          <input {...register("org")} className={inputClass} placeholder={f.orgPlaceholder} />
        </Field>
        <Field label={f.position} error={errors.position?.message}>
          <input {...register("position")} className={inputClass} placeholder={f.positionPlaceholder} />
        </Field>
      </div>
      <Field label={f.email} error={errors.email?.message}>
        <input {...register("email")} type="email" className={inputClass} placeholder={f.emailPlaceholder} />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan-400 hover:bg-cyan-300 disabled:bg-neutral-700 disabled:text-neutral-500 text-black font-bold text-sm py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            {f.submitting}
          </>
        ) : (
          f.submitAttendee
        )}
      </button>
    </form>
  );
}

// ---------- Speaker form ----------
interface SpeakerFormProps {
  onSuccess: () => void;
}
function SpeakerForm({ onSuccess }: SpeakerFormProps) {
  const { t } = useLanguage();
  const f = t.registration.form;
  const schema = buildSpeakerSchema(t.registration.validation);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SpeakerData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: SpeakerData) => {
    await submitToGoogleForm("speaker", data);
    reset();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Field label={f.name} error={errors.name?.message}>
        <input {...register("name")} className={inputClass} placeholder={f.namePlaceholder} />
      </Field>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={f.org} error={errors.org?.message}>
          <input {...register("org")} className={inputClass} placeholder={f.orgPlaceholder} />
        </Field>
        <Field label={f.position} error={errors.position?.message}>
          <input {...register("position")} className={inputClass} placeholder={f.positionPlaceholder} />
        </Field>
      </div>
      <Field label={f.email} error={errors.email?.message}>
        <input {...register("email")} type="email" className={inputClass} placeholder={f.emailPlaceholder} />
      </Field>
      <Field label={f.topic} error={errors.topic?.message}>
        <input {...register("topic")} className={inputClass} placeholder={f.topicPlaceholder} />
      </Field>
      <Field label={f.theses} error={errors.theses?.message}>
        <textarea
          {...register("theses")}
          className={`${inputClass} resize-none min-h-[100px]`}
          placeholder={f.thesesPlaceholder}
        />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-neutral-700 disabled:text-neutral-500 text-black font-bold text-sm py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            {f.submitting}
          </>
        ) : (
          f.submitSpeaker
        )}
      </button>
    </form>
  );
}

// ---------- Main section ----------
interface RegistrationSectionProps {
  defaultTab?: "attendee" | "speaker";
  onAttendeeSuccess: () => void;
  onSpeakerSuccess: () => void;
}

export function RegistrationSection({
  defaultTab = "attendee",
  onAttendeeSuccess,
  onSpeakerSuccess,
}: RegistrationSectionProps) {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"attendee" | "speaker">(defaultTab);

  return (
    <section id="register" className="bg-neutral-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.registration.title}
          </h2>
          <p className="text-neutral-400">{t.registration.subtitle}</p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex bg-neutral-900 border border-neutral-800 p-1 rounded-xl mb-8">
          {(["attendee", "speaker"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setTab(type)}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                tab === type
                  ? type === "attendee"
                    ? "bg-cyan-400 text-black shadow-sm"
                    : "bg-amber-400 text-black shadow-sm"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {type === "attendee" ? t.registration.attendeeTab : t.registration.speakerTab}
            </button>
          ))}
        </div>

        {/* Form card */}
        <motion.div
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {tab === "attendee" ? (
                <AttendeeForm onSuccess={onAttendeeSuccess} />
              ) : (
                <SpeakerForm onSuccess={onSpeakerSuccess} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// Expose a way to imperatively switch tabs from parent
export type { RegistrationSectionProps };
