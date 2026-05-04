"use client";

import { Shield, Users, Heart, Calendar, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";

export default function About() {
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;
  return (
    <section id="about-v2" className="bg-[#0c2e34]">
      <div className="max-w-[1280px] p-30">
        {/* Header */}
        <Reveal>
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full mb-5 bg-white/5 text-white/40 text-xs font-semibold tracking-wide">
            {t("عن", "About")}
          </span>

          <h2 className="text-white text-[clamp(1.5rem,4vw,2.4rem)] font-bold leading-snug mb-4">
            {t("نؤمن بأن صحتك النفسية تستحق الأفضل", "We believe your mental health deserves the best")}
          </h2>

          <p className="max-w-2xl  text-white/40 text-sm md:text-base leading-8">
            {t("نفسي منصة عربية متخصصة في الصحة النفسية، أسسها فريق من المحترفين الشغوفين بتقديم رعاية نفسية آمنة ومتاحة. نحن نجمع بين التكنولوجيا والخبرة السريرية لربطك بالأخصائي المناسب في الوقت المناسب.", "Nafsi is an Arabic-specialized mental health platform, founded by a team of professionals passionate about delivering safe and accessible psychological care. We combine technology with clinical expertise to connect you with the right specialist at the right time.")}
          </p>
        </div>
</Reveal>
        {/* Cards */}
        <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="rounded-2xl p-7 border border-white/10 bg-white/5">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-4 bg-[#14505c]/10 text-[#14505c]">
              <Shield size={20} />
            </div>
            <h4 className="text-white font-bold mb-2">{t("خصوصية كاملة", "Complete Privacy")}</h4>
            <p className="text-white/30 text-sm leading-7">
              {t("بياناتك وجلساتك مشفرة بالكامل. لا يمكنك أنت وأخصائيك فقط الوصول إليها.", "Your data and sessions are fully encrypted. Only you and your specialist can access them.")}
            </p>
          </div>

          <div className="rounded-2xl p-7 border border-white/10 bg-white/5">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-4 bg-orange-400/10 text-orange-400">
              <Users size={20} />
            </div>
            <h4 className="text-white font-bold mb-2">{t("أخصائيون معتمدون", "Certified Specialists")}</h4>
            <p className="text-white/30 text-sm leading-7">
              {t("جميع أخصائيونا يحملون تراخيص معتمدة بخبرة سريرية لا تقل عن 5 سنوات.", "All our specialists hold certified licenses with at least 5 years of clinical experience.")}
            </p>
          </div>

          <div className="rounded-2xl p-7 border border-white/10 bg-white/5">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-4 bg-purple-400/10 text-purple-300">
              <Heart size={20} />
            </div>
            <h4 className="text-white font-bold mb-2">{t("رعاية مستمرة", "Continuous Care")}</h4>
            <p className="text-white/30 text-sm leading-7">
              {t("ليس فقط جلسات — نحن نتابع بين المواعيد ونوفر أدوات لدعم رحلتك.", "Not just sessions — we follow up between appointments and provide tools to support your journey.")}
            </p>
          </div>
        </div>
        </Reveal>

        {/* Stats */}
        <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border border-white/10 bg-white/5 rounded-2xl p-8">
          <div className="text-center">
            <p className="text-[#14505c] text-2xl font-bold">+5,000</p>
            <p className="text-white/30 text-xs mt-1">{t("عملاء راضون", "Satisfied Clients")}</p>
          </div>

          <div className="text-center">
            <p className="text-[#14505c] text-2xl font-bold">+40</p>
            <p className="text-white/30 text-xs mt-1">{t("أخصائيون معتمدون", "Certified Specialists")}</p>
          </div>

          <div className="text-center">
            <p className="text-[#14505c] text-2xl font-bold">98%</p>
            <p className="text-white/30 text-xs mt-1">{t("رضا العملاء", "Client Satisfaction")}</p>
          </div>

          <div className="text-center">
            <p className="text-[#14505c] text-2xl font-bold">+15,000</p>
            <p className="text-white/30 text-xs mt-1">{t("جلسات مكتملة", "Sessions Completed")}</p>
          </div>
        </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal>
        <div>
          <h2 className="text-white/10 text-[clamp(2.5rem,8vw,5rem)] font-bold mb-5">
            {t("نفسي", "Nafsi")}
          </h2>

          <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
            {t("قد تكون الخطوة الأولى أقرب مما تعتقد.", "The first step may be closer than you think.")}
          </h3>

          <p className="text-white/30 text-sm max-w-lg">
            {t("اختر الوقت يناسبك، وابدأ رحلتك بهدوء.", "Pick a time that suits you, and start your journey calmly.")}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/Appoinment"
              className="px-8 py-3.5 rounded-lg bg-[#14505c] text-white font-semibold text-sm flex items-center gap-2 hover:opacity-90"
            >
              <Calendar size={16} /> {t("عرض المواعيد المتاحة", "View Available Slots")}
            </a>

            <a
              href="/questions"
              className="px-8 py-3.5 rounded-lg border border-white/10 text-white/60 font-semibold text-sm flex items-center gap-2"
            >
              <Sparkles size={15} /> {t("ابدا الاختبار", "Take Test")}
            </a>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
