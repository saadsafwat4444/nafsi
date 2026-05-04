"use client"

import Link from "next/link";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";

export default function Plans() {
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  const plans = [
    {
      title: { ar: "أساسي", en: "Basic" },
      sessions: { ar: "جلسة واحدة/أسبوع", en: "1 session/week" },
      price: "200",
      currency: { ar: "ريال / أسبوع", en: "SAR / week" },
      features: [
        { ar: "جلسة واحدة في الأسبوع", en: "One session per week" },
        { ar: "اختر أخصائيك", en: "Choose your specialist" },
        { ar: "تذكير قبل الجلسة", en: "Pre-session reminder" },
      ],
      buttonStyle:
        "border border-gray-200 text-[#14505C] bg-transparent hover:bg-gray-50",
    },
    {
      title: { ar: "قياسي", en: "Standard" },
      badge: { ar: "الأكثر شعبية", en: "Most Popular" },
      sessions: { ar: "جلستان/أسبوع", en: "2 sessions/week" },
      price: "360",
      currency: { ar: "ريال / أسبوع", en: "SAR / week" },
      discount: { ar: "خصم 10%", en: "10% Off" },
      dark: true,
      features: [
        { ar: "جلستان في الأسبوع", en: "Two sessions per week" },
        { ar: "جدولة أولوية", en: "Priority scheduling" },
        { ar: "متابعة بين الجلسات", en: "Between-session follow-up" },
        { ar: "تقرير شهري بالتقدم", en: "Monthly progress report" },
      ],
      buttonStyle: "bg-[#14505C] text-white hover:opacity-90",
    },
    {
      title: { ar: "مميز", en: "Premium" },
      sessions: { ar: "4 جلسات/أسبوع", en: "4 sessions/week" },
      price: "680",
      currency: { ar: "ريال / أسبوع", en: "SAR / week" },
      discount: { ar: "خصم 15%", en: "15% Off" },
      features: [
        { ar: "4 جلسات في الأسبوع", en: "Four sessions per week" },
        { ar: "دعم عبر واتساب", en: "WhatsApp support" },
        { ar: "جلسة طوارئ مجانية", en: "Free emergency session" },
        { ar: "خطة علاج مخصصة", en: "Custom treatment plan" },
      ],
      buttonStyle:
        "border border-gray-200 text-[#14505C] bg-transparent hover:bg-gray-50",
    },
  ];

  return (
    <section id="packages" className="bg-[#EDF4F6]">
      <div className="max-w-[1280px] p-30">
        {/* Header */}
        <Reveal>
          <div className="mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#14505C]">
              {t("الباقات", "Plans")}
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-[#0C2E34]">
              {t("باقات مرنة للدعم المستمر", "Flexible Plans for Ongoing Support")}
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.dark
                    ? "bg-[#0C2E34] text-white shadow-lg ring-2 border-[#0C2E34]"
                    : "bg-white border border-gray-200"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="px-6 pt-4">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-bold bg-[#14505C] text-white rounded">
                      {plan.badge[lang as "ar" | "en"]}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">
                    {plan.title[lang as "ar" | "en"]}
                  </h3>

                <p
                  className={`text-sm mb-5 ${
                    plan.dark ? "text-white/50" : "text-gray-400"
                  }`}
                >
                  {plan.sessions[lang as 'ar' | 'en']}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-[#14505C]">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.dark ? "text-white/40" : "text-gray-400"
                    }`}
                  >
                    {plan.currency[lang as 'ar' | 'en']}
                  </span>

                  {plan.discount && (
                    <span className="text-xs font-bold text-[#14505C] bg-[#14505C]/10 px-2 py-0.5 rounded">
                      {plan.discount[lang as 'ar' | 'en']}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#14505C]">✔</span>
                      <span
                        className={`text-sm ${
                          plan.dark ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        {f[lang as 'ar' | 'en']}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href="/Appoinment"
                  className={`w-full py-3 flex items-center justify-center rounded-lg font-semibold transition-all ${plan.buttonStyle}`}
                >
                  {t("اختر الباقة", "Choose Plan")}
                </Link>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}