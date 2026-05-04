 "use client";

import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";

export default function Availability() {
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  const days = [
    { d: "S", n: 8, disabled: true },
    { d: "M", n: 9 },
    { d: "T", n: 10, active: true },
    { d: "W", n: 11 },
    { d: "T", n: 12 },
    { d: "F", n: 13, disabled: true },
    { d: "S", n: 14 },
  ];

  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "12:00"];

  interface Doctor {
    name: { ar: string; en: string };
    specialty: { ar: string; en: string };
    rating: number;
    slots: string[];
    image: string;
  }

  const doctors: Doctor[] = [
    {
      name: { ar: "د. سارة أحمد", en: "Dr. Sarah Ahmed" },
      specialty: { ar: "أخصائي القلق والاكتئاب", en: "Anxiety & Depression Specialist" },
      rating: 4.9,
      slots: ["09:00", "10:30", "13:00", "15:00", "17:30"],
      image:
        "https://images.unsplash.com/photo-1733685318562-c726472bc1db?w=400&q=80",
    },
    {
      name: { ar: "د. محمد علي", en: "Dr. Mohammed Ali" },
      specialty: { ar: "علاقات الأسرة", en: "Family Relationships" },
      rating: 4.8,
      slots: ["10:00", "12:00", "15:00", "17:00", "19:00"],
      image:
        "https://images.unsplash.com/photo-1599913609289-be5c5c5e9d5b?w=400&q=80",
    },
    {
      name: { ar: "د. ليلاء حسن", en: "Dr. Laila Hassan" },
      specialty: { ar: "تطوير الذات", en: "Self-Development" },
      rating: 5,
      slots: ["09:30", "11:00", "14:00", "16:30"],
      image:
        "https://images.unsplash.com/photo-1635695696701-fc9b49c991bb?w=400&q=80",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto   p-30 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ================= LEFT ================= */}
          <div>
            {/* LIVE BADGE */}
            <div className="flex items-center gap-2 mb-5 ">
              <span className="relative h-2 w-2 flex">
                <span className="absolute h-full w-full rounded-full bg-green-500 animate-ping opacity-70" />
                <span className="h-2 w-2 rounded-full bg-green-500 relative" />
              </span>

              <span className="text-[0.7rem] uppercase tracking-widest font-bold text-green-500">
                {t("التوفر المباشر", "Live Availability")}
              </span>
            </div>

            {/* TITLE */}
            <Reveal>
              <h2 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] font-bold text-[#0c2e34] leading-tight">
                {t("المواعيد المتاحة الآن", "Available Appointments Now")}
              </h2>
            </Reveal>

            <p className="mt-5 text-[#7a8a8e] text-[0.95rem] leading-7">
              {t("اختر يوماً من التقويم وشاهد من هو متاح ومتى - فوراً.", "Pick a day from the calendar and see who's available and when — instantly.")}
            </p>

            {/* CALENDAR */}
            <Reveal>
              <div className="mt-8 p-8 rounded-2xl border border-[#e4eaec] bg-[#fafcfc]">
                
                {/* header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif font-semibold text-sm text-[#0c2e34]">
                    📅 {t("مارس 2026", "March 2026")}
                  </span>

                  <span className="text-[0.62rem] px-2 py-1 rounded-md bg-teal-50 text-teal-700 font-bold">
                    {t("اختر يوماً", "Pick a day")}
                  </span>
                </div>

                {/* days */}
                <div className="flex gap-1.5">
                  {days.map((day, i) => (
                    <button
                      key={i}
                      disabled={day.disabled}
                      className={`flex-1 py-2 rounded-xl border transition ${
                        day.disabled
                          ? "opacity-40 cursor-not-allowed"
                          : day.active
                          ? "bg-[#14505c] text-white border-[#14505c]"
                          : "bg-[rgba(20,80,92,0.02)] border-[rgba(20,80,92,0.1)]"
                      }`}
                    >
                      <p className="text-[0.55rem] uppercase text-gray-400">
                        {day.d}
                      </p>
                      <p className="font-serif text-[1.05rem] font-bold">
                        {day.n}
                      </p>
                    </button>
                  ))}
                </div>

                {/* dots */}
                <div className="flex gap-1 justify-center mt-2">
                  <span className="w-1 h-1 rounded-full bg-[#14505c]" />
                  <span className="w-1 h-1 rounded-full bg-[#14505c]/30" />
                </div>

                {/* times */}
                <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem]">
                  <span className="text-[#14505c] font-semibold">{t("اليوم:", "Today:")}</span>

                  {times.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-gray-100">
                      {t}
                    </span>
                  ))}

                  <span className="text-[#14505c] font-bold">+7</span>
                </div>

                <div className="mt-3 text-[0.68rem] text-[#14505c] font-semibold">
                  👤 {t("3 أخصائيين متاحين", "3 specialists available")}
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="mt-7 flex gap-3 items-center flex-wrap">
                <a
                  href="/Appoinment"
                  className="px-6 py-3 rounded-xl bg-[#14505c] text-white font-semibold text-sm"
                >
                  {t("عرض كل المواعيد", "View All Slots")}
                </a>

                <span className="text-[0.7rem] text-gray-400">
                  {t("مجاني · بدون التزام", "Free · No commitment")}
                </span>
              </div>
            </Reveal>
          </div>
            

          {/* ================= RIGHT ================= */}
          <div className="space-y-4 border-[#E4EAEC] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            {doctors.map((doc, i) => (
              <div
                key={i}
                className="group rounded-2xl hover:border hover:border-[#14505c] p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* header */}
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src={doc.image}
                      className="w-16 h-16 rounded-2xl object-cover group-hover:border group-hover:border-[#14505c] border border-gray-200"
                    />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-[#0c2e34]">
                      {doc.name[lang as keyof typeof doc.name]}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {doc.specialty[lang as keyof typeof doc.specialty]}
                    </p>

                    <div className="text-xs mt-2 font-semibold text-yellow-600">
                      ⭐ {doc.rating}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-[0.65rem] px-2 py-1 rounded bg-green-50 text-green-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {t("متاح اليوم", "Available Today")}
                      </span>

                      <span className="text-[0.65rem] px-2 py-1 rounded bg-gray-100 text-gray-500">
                        {doc.slots.length} {t("مواعيد", "slots")}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#AABBBE] mt-2">{t("الأوقات المتاحة", "Available times")}</p>
                
                {/* slots */}
                <div className="mt-4 border-t border-[#E4EAEC] pt-4 flex flex-wrap gap-2">
                  {doc.slots.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 border rounded-lg text-sm font-medium cursor-pointer hover:bg-[#14505c] hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="
                    overflow-hidden
                    max-h-0
                    opacity-0
                    translate-y-4

                    group-hover:max-h-20
                    group-hover:opacity-100
                    group-hover:translate-y-0

                    transition-all duration-600 ease-out
                    mt-0 group-hover:mt-4
                  "
                >
                  <Link
                    href="/Appoinment"
                    className="block text-center py-2 rounded-xl bg-[#14505c] text-white text-sm font-semibold"
                  >
                    {t("عرض الموعد", "View Appointment")}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}