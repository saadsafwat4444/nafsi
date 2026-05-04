"use client"

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";
import { specialists } from "../Appoinment/page";

export default function Specialists() {
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  

  return (
    <section className="bg-white">
      <div className="max-w-[1280px]  p-30">
        {/* Header */}
        <Reveal>
        <div className="mb-14">
          <span className="inline-flex items-center gap-2  py-1.5 rounded-full mb-5 bg-teal-50 text-teal-800 font-bold text-xs">
            {t("أخصائيونا", "Our Specialists")}
          </span>

          <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-bold text-teal-950 leading-snug font-serif">
            {t("أخصائيون تثق بهم… ونتائج تتحدث عن نفسها", "Specialists you trust… and results that speak for themselves")}
          </h2>

          <p className="mt-3 max-w-lg  text-sm leading-relaxed text-gray-400">
            {t("ساعد أخصائيونا المئات على بدء رحلتهم. اقرأ قصصهم.", "Our doctors have helped hundreds start their journey. Read their stories.")}
          </p>
        </div>
        </Reveal>

        {/* Grid */}
        <div className="space-y-5">
          {/* First row - 3 cards */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {specialists.slice(0, 3).map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name[lang as 'ar' | 'en']}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent" />

                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-white font-bold font-serif text-lg">
                        {doc.name[lang as 'ar' | 'en']}
                      </h3>
                      <p className="text-white/60 text-xs">{doc.specialty[lang as 'ar' | 'en']}</p>
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 text-white text-xs font-bold">
                      ⭐ {doc.rating}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-semibold">
                        {doc.bookings?.[lang as 'ar' | 'en'] || `${128}+ ${t('حجز', 'bookings')}`}
                      </span>

                      <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 font-semibold">
                        ⭐ {doc.rating}
                      </span>
                    </div>

                    <div className="text-sm font-serif text-teal-950">
                      <p>{doc.quote?.[lang as 'ar' | 'en'] || t("ساعد الأخصائيون المئات على بدء رحلتهم", "Specialists have helped hundreds start their journey")}</p>
                      <p className="mt-2 text-xs text-gray-400">— {doc.bookings?.[lang as 'ar' | 'en'] || t("مريض سابق", "Former patient")}</p>
                    </div>

                    <Link
                      href={`/specialist/${doc.id}`}
                      className="mt-4 w-full flex items-center justify-center py-2.5 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 text-sm font-semibold hover:bg-teal-100 transition"
                    >
                      {t("احجز مع هذا الأخصائي", "Book with this specialist")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Second row - 3 cards */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {specialists.slice(3, 6).map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name[lang as 'ar' | 'en']}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent" />

                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-white font-bold font-serif text-lg">
                        {doc.name[lang as 'ar' | 'en']}
                      </h3>
                      <p className="text-white/60 text-xs">{doc.specialty[lang as 'ar' | 'en']}</p>
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 text-white text-xs font-bold">
                      ⭐ {doc.rating}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-semibold">
                        {doc.bookings?.[lang as 'ar' | 'en'] || `${128}+ ${t('حجز', 'bookings')}`}
                      </span>

                      <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 font-semibold">
                        ⭐ {doc.rating}
                      </span>
                    </div>

                    <div className="text-sm font-serif text-teal-950">
                      <p>{doc.quote?.[lang as 'ar' | 'en'] || t("ساعد الأخصائيون المئات على بدء رحلتهم", "Specialists have helped hundreds start their journey")}</p>
                      <p className="mt-2 text-xs text-gray-400">— {doc.quote?.[lang as 'ar' | 'en'] || t("مريض سابق", "Former patient")}</p>
                    </div>

                    <Link
                      href={`/specialist/${doc.id}`}
                      className="mt-4 w-full flex items-center justify-center py-2.5 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 text-sm font-semibold hover:bg-teal-100 transition"
                    >
                      {t("احجز مع هذا الأخصائي", "Book with this specialist")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
