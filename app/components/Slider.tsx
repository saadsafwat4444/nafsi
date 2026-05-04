 
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useAppContext } from "../context/AppContext";

const items = [
  { title: { ar: "علاج القلق", en: "Anxiety Therapy" }, img: "https://images.unsplash.com/photo-1758273240403-052b3c99f636?w=800&q=80" },
  { title: { ar: "علاج الاكتئاب", en: "Depression Therapy" }, img: "https://images.unsplash.com/photo-1716828866419-aadb91223bf0?w=800&q=80" },
  { title: { ar: "علاج الأسرة", en: "Family Therapy" }, img: "https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?w=800&q=80" },
  { title: { ar: "تطوير الذات", en: "Self-Development" }, img: "https://images.unsplash.com/photo-1769238507012-0c98e68582a9?w=800&q=80" },
  { title: { ar: "اليقظة الذهنية", en: "Mindfulness" }, img: "https://images.unsplash.com/photo-1758607234692-51ac051a2a4d?w=800&q=80" },
  { title: { ar: "اضطرابات النوم", en: "Sleep Disorders" }, img: "https://images.unsplash.com/photo-1768334661190-8e3c0ca1254b?w=800&q=80" },
];

export default function Slider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const context = useAppContext();
  if(!context) return null;
  const { lang } = context;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5;

    const interval = setInterval(() => {
      position += speed;

      // بدل scrollLeft → transform
      track.style.transform =
        lang === "ar"
          ? `translateX(${position}px)`
          : `translateX(-${position}px)`;

      // reset loop
      if (position >= track.scrollWidth / 2) {
        position = 0;
      }
    }, 16);

    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div className="overflow-hidden pb-6">
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 px-4 w-max"
          style={{
            willChange: "transform",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[260px] md:w-[320px] h-[180px] md:h-[220px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title[lang as "ar" | "en"]}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <span className="absolute top-3 left-4 text-white/20 font-bold text-2xl">
                {String((i % items.length) + 1).padStart(2, "0")}
              </span>

              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-white text-sm font-semibold">
                  {item.title[lang as "ar" | "en"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}