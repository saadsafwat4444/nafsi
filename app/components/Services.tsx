"use client";

import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";
import { services } from "../Services/page";
import { LucideIcon } from "lucide-react";




export default function Services() {
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  return (
    <section className="bg-[#f7f3eb]">
      <div className="max-w-[1280px] mx-auto p-30 md:py-28">

        {/* Header */}
        <Reveal>
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-lg">
            <span className="text-xs font-bold text-[#14505c] uppercase tracking-widest">
              {t("الخدمات العلاجية", "Therapeutic Services")}
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0c2e34] leading-tight font-serif">
              {t("تجربة كل شخص مختلفة", "Everyone's experience is different")}
            </h2>

            <p className="mt-3 text-sm text-gray-500 leading-7">
              {t("نقدم مجموعة متنوعة من الخدمات العلاجية مصممة لتناسب احتياجاتك.", "We offer a variety of therapeutic services tailored to your needs.")}
            </p>
          </div>

          <Link
            href="/Services/"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 border rounded-xl text-[#14505c] font-semibold hover:bg-white transition"
          >
            {t("جميع الخدمات →", "All Services →")}
          </Link>
        </div>
        </Reveal>

        {/* Grid */}
        <div className="space-y-4">
          {/* First row - 3 cards */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.slice(0, 3).map((s, i) => (
                <Link href={`/service/${s.id}`}  key={i}>
                  <div className="group border rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={s.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

                      <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center">
                        {React.createElement(s.icon as LucideIcon, { size: 18 })}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-serif font-bold text-[#0c2e34] text-sm">
                        {s.title[lang as 'ar' | 'en']}
                      </h3>

                      <p className="mt-2 text-xs text-gray-500 leading-6">
                        {s.description[lang as 'ar' | 'en']}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[0.7rem] px-3 py-1 rounded-lg bg-[#14505c]/5 text-[#14505c] font-semibold">
                          {`${s.sessions} · ${s.price} SAR`}
                        </span>

                        <span className="opacity-0 group-hover:opacity-100 transition text-[0.7rem] font-semibold text-[#14505c]">
                          {t("احجز الآن →", "Book Now →")}
                        </span>
                      </div>
                      
                    </div>
     
                  </div>
                 
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Second row - 3 cards */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.slice(3, 6).map((s, i) => (
                <Link href={`/service/${s.id}`} key={i + 3}>
                  <div className="group border rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={s.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

                      <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center">
                        {React.createElement(s.icon as LucideIcon, { size: 18 })}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-serif font-bold text-[#0c2e34] text-sm">
                        {s.title[lang as 'ar' | 'en']}
                      </h3>

                      <p className="mt-2 text-xs text-gray-500 leading-6">
                        {s.description[lang as 'ar' | 'en']}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[0.7rem] px-3 py-1 rounded-lg bg-[#14505c]/5 text-[#14505c] font-semibold">
                          {`${s.sessions} · ${s.price} SAR`}
                        </span>

                        <span className="opacity-0 group-hover:opacity-100 transition text-[0.7rem] font-semibold text-[#14505c]">
                          {t("احجز الآن →", "Book Now →")}
                        </span>
                      </div>
                      
                    </div>
     
                  </div>
                 
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
