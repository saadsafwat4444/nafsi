"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  const items = [
    {
      title: { ar: "إذا لم تكن متأكداً من أين تبدأ", en: "If you're not sure where to start" },
      content: {
        ar: "يمكن لأدواتنا مساعدتك في البداية على فهم حالتك — اختبار القلق السريع (3 أسئلة، دقيقتان)، اختبار المزاج (5 أسئلة، 3 دقائق)، أو اختبار التوتر (4 أسئلة، دقيقتان).",
        en: "Our tools can help you initially understand your condition — Quick Anxiety Test (3 questions, 2 min), Mood Test (5 questions, 3 min), or Stress Test (4 questions, 2 min)."
      },
    },
    {
      title: { ar: "ماذا يحدث بعد الاختبار؟", en: "What happens after the test?" },
      content: {
        ar: "ستحصل على نتيجة مخصصة وتوصيات بناءً على إجاباتك.",
        en: "You receive a personalized result and recommendations based on your answers."
      },
    },
    {
      title: { ar: "كيف أستعد لجلستي الأولى؟", en: "How to prepare for your first session?" },
      content: {
        ar: "جهز بملاحظة أعراضك وأهدافك وأي أسئلة تريد طرحها.",
        en: "Prepare by noting your symptoms, goals, and any questions you want to ask."
      },
    },
    {
      title: { ar: "هل يمكنني تغيير أخصائيي؟", en: "Can I change my specialist?" },
      content: {
        ar: "نعم، يمكنك تغيير الأخصائي في أي وقت بناءً على تفضيلاتك.",
        en: "Yes, you can switch specialists anytime based on your preference."
      },
    },
    {
      title: { ar: "ما هي فوائد الجلسات المنتظمة؟", en: "What are the benefits of regular sessions?" },
      content: {
        ar: "الجلسات المنتظمة تساعد في تتبع التقدم وتحسين الصحة النفسية طويلة الأمد.",
        en: "Regular sessions help track progress and improve long-term mental wellbeing."
      },
    },
    {
      title: { ar: "هل المنصة معتمدة؟", en: "Is the platform accredited?" },
      content: {
        ar: "نعم، المنصة تتبع المعايير المعترف بها لدعم الصحة النفسية.",
        en: "Yes, the platform follows recognized standards for mental health support."
      },
    },
  ];

  return (
    <section className="bg-[#f7f3eb]">
      <Reveal>
      <div className="max-w-[1280px] p-30">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="text-[0.72rem] font-bold text-[#14505c] tracking-widest uppercase">
              {t("الأسئلة الشائعة", "FAQ")}
            </span>

            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-[#0c2e34] leading-tight">
              {t("الأسئلة الأكثر شيوعاً", "Frequently Asked Questions")}
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-[#8a9a9e]">
              {t("إجابات لأكثر الأسئلة شيوعاً حول المنصة، الجلسات، والتقييمات.", "Answers to the most common questions about the platform, sessions, and assessments.")}
            </p>

            <Link
              href="/questions"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg text-white bg-[#14505c] text-sm font-semibold hover:shadow-lg transition"
            >
              <Play size={13} /> {t("ابدا الاختبار","Take A Test")}
            </Link>
          </div>

          {/* Right */}
          <div className="lg:col-span-3">
            {items.map((item, index) => (
              <div key={index} className="border-b border-[#d8d0c4]">
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-serif text-[0.9rem] font-semibold text-[#14505c]">
                    {item.title[lang as 'ar' | 'en']}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-200 text-[#14505c] ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="pb-5 text-sm leading-7 text-[#8a9a9e]">
                    {item.content[lang as 'ar' | 'en']}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
