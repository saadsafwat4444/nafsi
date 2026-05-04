"use client";

import Link from "next/link";
import { Heart, Calendar, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";

export default function Hero() {
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;
  return (
    <section className="bg-[#edf4f6]">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-10 md:pt-36 md:pb-14">
        <Reveal>
          {/* Badge + Title */}
          <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-[#14505c15] text-[#14505c] text-xs font-semibold">
            <Heart size={12} />
            {t("حجز ذكي", "Smart Booking")}
          </span>

          <h1 className="text-[#0c2e34] font-bold leading-tight tracking-tight text-3xl md:text-5xl lg:text-[3.8rem]">
            {t("ابدأ رحلتك نحو التوازن النفسي… في الوقت الذي يناسبك", "Start your journey toward mental balance… at a time that suits you")}
          </h1>

            {/* Paragraphs */}
            <div className="mt-6 max-w-xl mx-auto space-y-3">
              <p className="text-[#7a8a8e] text-sm md:text-base leading-7">
                {t("أحياناً يكون أصعب جزء في العلاج هو معرفة من أين نبدأ.", "Sometimes the hardest part of therapy is knowing where to start.")}
              </p>

              <p className="text-[#7a8a8e] text-sm md:text-base leading-7">
                {t("بدلاً من البحث endlessly في الخيارات، شاهد المواعيد المتاحة مباشرة واختر الوقت الذي يناسبك.", "Instead of endlessly searching through options, see available appointments directly and pick the time that works for you.")}
              </p>

              <p className="text-[#0c2e34] text-sm md:text-base leading-7">
                {t("جلسة هادئة، الأخصائي المناسب، وحجز واضح — بدون تعقيدات.", "A calm session, the right specialist, and clear booking — no complications.")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">

          <Link
            href="/Appoinment"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#14505c] text-white font-semibold text-sm hover:shadow-lg transition"
          >
            <Calendar size={16} />
            {t("عرض المواعيد المتاحة", "View Available Slots")}
          </Link>

          <Link
            href="/questions"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#c8d8dc] text-[#14505c] font-semibold text-sm hover:bg-white transition"
          >
            <Sparkles size={15} />
            {t("اختبار سريع", "Take a Quick Test")}
          </Link>

        </div>

      </div>
    </section>
  );
}