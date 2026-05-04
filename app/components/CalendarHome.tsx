"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";

export default function CalendarHome() {
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  return (
    <section className="bg-[#0c2e34]">
      
      {/* top line */}
      <div className="max-w-[1280px]">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* content */}
      <div className="max-w-[1280px]  p-30 md:pb-28">

        {/* header */}
        <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h2 className="font-serif text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold text-white leading-tight">
            {t("الكثيرون يريدون المساعدة…", "Many people want help…")}
            <br />
            <span className="text-[#14505c]">{t("لكن البدء يبدو صعباً", "but starting feels hard")}</span>
          </h2>

          <p className="mt-5 max-w-lg text-white/45 leading-7 text-sm">
            {t("قد تشعر بالحاجة للتحدث مع أخصائي، لكن تجد نفسك عالقاً على أسئلة مثل:", "You might feel the need to talk to a specialist, but find yourself stuck on questions like:")}
          </p>
        </motion.div>
        </Reveal>

        {/* cards */}
          <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 mb-14">

          {[
            { icon: "🤔", text: { ar: "من هو الأخصائي المناسب لي؟", en: "Who is the right specialist for me?" } },
            { icon: "📅", text: { ar: "متى يمكنني الحجز؟", en: "When can I book?" } },
            { icon: "⏰", text: { ar: "هل سجد وقتاً يناسب يومي؟", en: "Will I find a time that fits my day?" } },
            { icon: "😟", text: { ar: "ماذا لم تكن التجربة مناسبة؟", en: "What if the experience doesn't suit me?" } },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl border border-white/10 bg-white/5"
            >
              <span className="block mb-3 text-2xl">
                {item.icon}
              </span>
              <p className="text-white/55 text-sm leading-6">
                {item.text[lang as 'ar' | 'en']}
              </p>
            </motion.div>
          ))}

        </div>

        {/* bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/30 text-base"
        >
          {t("لكن في الواقع،", "But in reality,")}
          <span className="text-[#14505c] font-semibold">
            {t("البدء يمكن أن يكون أبسط بكثير مما تعتقد.", "starting can be much simpler than you think.")}
          </span>
        </motion.p>
        </Reveal>

      </div>
    </section>
  );
}