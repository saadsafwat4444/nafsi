"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";

function ProgressSteps({ current = 0, total = 5, progress = 0 }) {
  return (
    <div className="mt-4 flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => {
        const isCompleted = i < current;
        const isActive = i === current;

        return (
          <div
            key={i}
            className="flex-1 h-[2px] rounded-full overflow-hidden"
            style={{
              backgroundColor: "rgba(20, 80, 92, 0.08)",
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-300 ease-linear"
              style={{
                backgroundColor: "rgb(20, 80, 92)",
                width: isCompleted
                  ? "100%"
                  : isActive
                  ? `${progress}%` 
                  : "0%",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [progress, setProgress] = useState(0);
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  const testimonials = [
    {
      name: { ar: "د. نوراء الشمري", en: "Dr. Noura Al-Shamri" },
      specialty: { ar: "أخصائية القلق والاكتئاب", en: "Anxiety & Depression Specialist" },
      rating: "4.9",
      bookings: "347+",
      image: "https://images.unsplash.com/photo-1670191069225-f992139f6545?w=600&q=80",
      quote: {
        ar: "كنت خائفة من الجلسة الأولى، لكن د. نوراء جعلتني أشعر بالأمان من اللحظة الأولى. بعد 4 جلسات، شعرت بفرق هائل.",
        en: "I was afraid of first session, but Dr. Noura made me feel safe from very first minute. After 4 sessions, I felt a huge difference."
      },
      author: { ar: "سارة، 28", en: "Sara, 28" },
    },
    {
      name: { ar: "د. أحمد خالد", en: "Dr. Ahmed Khalid" },
      specialty: { ar: "أخصائي علاج الأسرة", en: "Family Therapy Specialist" },
      rating: "4.8",
      bookings: "256+",
      image: "https://images.unsplash.com/photo-1698465281093-9f09159733b9?w=600&q=80",
      quote: {
        ar: "ساعدنا د. أحمد على التواصل بشكل أفضل كأسرة. تعلمنا الاستماع وحل النزاعات بسلام.",
        en: "Dr. Ahmed helped us communicate better as a family. We learned to listen and resolve conflicts peacefully."
      },
      author: { ar: "محمد، 42", en: "Mohammed, 42" },
    },
    {
      name: { ar: "د. ليلى حسن", en: "Dr. Layla Hassan" },
      specialty: { ar: "مدربة تطوير الذات", en: "Self-Development Coach" },
      rating: "5.0",
      bookings: "189+",
      image: "https://images.unsplash.com/photo-1758522277121-0fdf56f45bf1?w=600&q=80",
      quote: {
        ar: "العمل مع د. ليلى حول ثقتي بنفسي. الآن أتعامل مع التوتر وأسعى لتحقيق أهدافي.",
        en: "Working with Dr. Layla transformed my confidence. I now handle stress and pursue my goals."
      },
      author: { ar: "فاطمة، 31", en: "Fatima, 31" },
    },
    {
      name: { ar: "د. عمر فاروق", en: "Dr. Omar Farouq" },
      specialty: { ar: "أخصائي اضطرابات النوم", en: "Sleep Disorders Specialist" },
      rating: "4.9",
      bookings: "412+",
      image: "https://images.unsplash.com/photo-1617925357736-8a4ea869b800?w=600&q=80",
      quote: {
        ar: "بعد سنوات من الأرق، ساعدني د. عمر على النوم بشكل طبيعي. أستيقظ وأنا نشيط ومنتعش.",
        en: "After years of insomnia, Dr. Omar helped me sleep naturally. I wake up refreshed."
      },
      author: { ar: "علي، 35", en: "Ali, 35" },
    },
    {
      name: { ar: "د. مريم يوسف", en: "Dr. Mariam Youssef" },
      specialty: { ar: "معالجة الأطفال والمراهقين", en: "Children & Teens Therapist" },
      rating: "4.7",
      bookings: "298+",
      image: "https://images.unsplash.com/photo-1770627000564-3feb36aecbcd?w=600&q=80",
      quote: {
        ar: "ابنتي وجدت مساحة آمنة للتعبير عن نفسها والتغلب على القلق.",
        en: "My daughter found a safe space to express herself and overcome anxiety."
      },
      author: { ar: "نادية، 38", en: "Nadia, 38" },
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentTestimonial];

  // Auto slider and progress
  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2; // 2% every 100ms = 100% in 5 seconds
      });
    }, 100);

    const testimonialInterval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(testimonialInterval);
    };
  }, [currentTestimonial]);

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto p-30   md:pb-10">

        {/* Header */}
        <Reveal>
        <div className="max-w-2xl mb-16">
          <span className="inline-block  rounded-full mb-5 bg-[#14505c10] text-[#14505c] text-xs font-bold uppercase">
            {t("تجارب حقيقية", "Real Experiences")}
          </span>

          <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold text-[#0c2e34]">
            {t("ماذا يقول الذين سبقوك؟", "What do those before you say?")}
          </h2>

          <p className="mt-4 text-sm text-[#8a9a9e]">
            {t("ساعد أخصائيونا المئات على بدء رحلتهم.", "Our specialists helped hundreds start their journey.")}
          </p>
        </div>
        </Reveal>

        {/* Card */}
        <Reveal>
        <div className="rounded-2xl overflow-hidden bg-[#0c2e34] h-[370px] grid grid-cols-1 lg:grid-cols-5">

          {/* LEFT IMAGE */}
          <div className="lg:col-span-2 relative h-full min-h-[180px] overflow-hidden bg-gray-200">

            {/* fallback skeleton */}
            <div className="absolute inset-0 bg-gray-300 animate-pulse" />

            <AnimatePresence mode="wait">
              <motion.img
                key={testimonial.image}
                src={testimonial.image}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2e34ee] via-transparent" />

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="font-serif text-xl font-bold">
                {testimonial.name[lang as 'ar' | 'en']}
              </h3>
              <p className="text-xs text-white/60">
                {testimonial.specialty[lang as 'ar' | 'en']}
              </p>
              <p className="text-xs mt-2 text-white/40">
                ⭐ {testimonial.rating} • {testimonial.bookings}
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 p-10 md:p-20 flex flex-col justify-between">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="font-serif text-white/85 text-base leading-7">
                  "{testimonial.quote[lang as 'ar' | 'en']}"
                </blockquote>

                <p className="mt-4 text-xs text-white/30">
                  — {testimonial.author[lang as 'ar' | 'en']}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}
            <div className="mt-8 flex items-center justify-between">

              {/* avatars */}
              <div className="flex gap-2">
                {testimonials.map((testItem, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`rounded-full overflow-hidden transition-all ${
                      i === currentTestimonial
                        ? "w-11 h-11 border-2 border-[#14505c]"
                        : "w-9 h-9 opacity-50"
                    }`}
                  >
                    <img src={testItem.image} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/10 text-white/50"
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-[#14505c] text-white"
                >
                  →
                </button>
              </div>
            </div>
          </div>

        </div>
        

        {/* Progress Steps */}
        
        <ProgressSteps 
          current={currentTestimonial} 
          total={testimonials.length} 
          progress={progress} 
        />
        </Reveal>

        {/* Steps Cards */}
        <Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["1", { ar: "اختر الأخصائي", en: "Choose Specialist" }, { ar: "التخصص · التقييم · المواعيد", en: "Specialty · Rating · Slots" }],
            ["2", { ar: "اختر يوم", en: "Pick a Day" }, { ar: "الأيام المتاحة التالية", en: "Next available days" }],
            ["3", { ar: "تأكيد الحجز", en: "Confirm Booking" }, { ar: "اختر الوقت وأكد في ثوانٍ", en: "Select time & confirm in seconds" }],
          ].map(([n, title, desc]) => (
            <div
              key={String(n)}
              className="flex items-start gap-4 p-5 rounded-xl bg-[#14505c05] border border-[#14505c12]"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#14505c] text-white font-bold text-sm">
                {String(n)}
              </span>

              <div>
                <h4 className="font-serif font-bold text-[#0c2e34]">
                  {typeof title === 'string' ? title : title[lang as 'ar' | 'en']}
                </h4>
                <p className="text-xs text-[#8a9a9e] mt-1">{typeof desc === 'string' ? desc : desc[lang as 'ar' | 'en']}</p>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
