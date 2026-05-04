"use client"

import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import Link from "next/link"
import Image from "next/image"
import Reveal from "../components/Reveal"

interface Specialist {
  id: string
  name: { ar: string; en: string }
  specialty: { ar: string; en: string }
  rating: number
  reviews: number
  bookings?: { ar: string; en: string }
  quote?: { ar: string; en: string }
  user?: { ar: string; en: string }
  experience: number
  price: number
  tags: string[]
  image: string
  availableSlots: string[]
}

export const specialists: Specialist[] = [
  {
    id: "t1",
    name: { ar: "د. سارة المنصوري", en: "Dr. Sara Al-Mansouri" },
    specialty: { ar: "اخصائية نفسية اكلينيكية", en: "Clinical Psychologist" },
    rating: 4.9,
    reviews: 128,
    
    quote: {
      ar: "أنام بدون دواء مرة أخرى",
      en: "I sleep again without medication"
    },
    experience: 12,
    price: 200,
    tags: ["Anxiety & Stress", "depression", "sleep"],
    image: "https://images.unsplash.com/photo-1755192632179-b73ac64a8ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiJTIwZmVtYWxlJTIwdGhlcmFwaXN0JTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyOTc0OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availableSlots: ["09:00", "11:00", "11:30", "14:00", "14:30", "16:30", "17:00", "19:00", "19:30"]
  },
  {
    id: "t2",
    name: { ar: "د. احمد الراشد", en: "Dr. Ahmed Al-Rashed" },
    specialty: { ar: "طبيب نفسي واستشاري", en: "Psychiatrist & Consultant" },
    rating: 4.8,
    reviews: 95,
    quote: {
      ar: "ساعدنا على التواصل بصدق مرة أخرى",
      en: "He helped us communicate honestly again"
    },
    experience: 15,
    price: 250,
    tags: ["depression", "relationships", "addiction"],
    image: "https://images.unsplash.com/photo-1756412066323-a336d2becc10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiJTIwbWFsZSUyMHBzeWNob2xvZ2lzdCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mjk3NDkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    availableSlots: ["09:30", "11:00", "12:00", "14:00", "15:00", "16:30", "17:30", "19:00", "20:00"]
  },
  {
    id: "t3",
    name: { ar: "د. نورة العتيبي", en: "Dr. Nora Al-Otaibi" },
    specialty: { ar: "معالجة نفسية - CBT", en: "Psychological Therapist - CBT" },
    rating: 4.9,
    reviews: 76,
    quote: {
      ar: "ابنتي تفتح أكثر في كل جلسة",
      en: "My daughter opens up more each session"
    },
    experience: 8,
    price: 180,
    tags: ["anxiety", "burnout", "self-development"],
    image: "https://images.unsplash.com/photo-1765833468912-56ca0afa0c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwZmVtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mjk3NDkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    availableSlots: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]
  },
  {
    id: "t4",
    name: { ar: "د. خالد الحربي", en: "Dr. Khaled Al-Harbi" },
    specialty: { ar: "استشاري علاج اسري وزوجي", en: "Family & Marriage Therapy Consultant" },
    rating: 4.7,
    reviews: 64,
     quote: {
        ar: "أنام بدون دواء مرة أخرى",
        en: "I sleep again without medication"
      },
    experience: 10,
    price: 220,
    tags: ["relationships", "anger", "family-therapy"],
    image: "https://images.unsplash.com/photo-1762066436595-67edb4610539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwbWFsZSUyMGNvdW5zZWxvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI5NzQ5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availableSlots: ["10:00", "11:00", "13:00", "14:00", "15:30", "16:30", "18:00", "19:00"]
  },
  {
    id: "t5",
    name: { ar: "د. ليلى الشمري", en: "Dr. Laila Al-Shammari" },
    specialty: { ar: "اخصائية نفسية للاطفال والمراهقين", en: "Child & Adolescent Psychologist" },
    rating: 4.9,
    reviews: 52,
     quote: {
        ar: "ساعدتني على اكتشاف نقاط قوتي",
        en: "She helped me discover my strengths"
      },
    experience: 9,
    price: 220,
    tags: ["children", "anxiety", "behavioral"],
    image: "https://images.unsplash.com/photo-1731514836024-614e2bab04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiJTIwd29tYW4lMjBkb2N0b3IlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzI5NzQ5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availableSlots: ["10:30", "11:00", "13:30", "14:00", "16:00", "16:30", "18:30", "19:00"]
  },
  {
    id: "t6",
    name: { ar: "د. عمر الفهد", en: "Dr. Omar Al-Fahad" },
    specialty: { ar: "طبيب نفسي - علاج الادمان", en: "Psychiatrist - Addiction Treatment" },
    rating: 4.8,
    reviews: 43,
     quote: {
        ar: "بعد 6 جلسات شعرت بنفسي مرة أخرى",
        en: "After 6 sessions I felt like myself again"
      },
    experience: 14,
    price: 250,
    tags: ["addiction", "depression", "burnout"],
    image: "https://images.unsplash.com/photo-1724632824319-4b43e74e000c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwbWFuJTIwdGhlcmFwaXN0JTIwb2ZmaWNlfGVufDF8fHx8MTc3Mjk3NDkyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    availableSlots: ["09:00", "11:00", "11:30", "14:00", "14:30", "16:30", "17:00", "19:00", "19:30"]
  }
]

export default function Appoinment() {
  const context = useAppContext()
  if (!context) return null
  const { lang, t } = context

  const [selectedDate, setSelectedDate] = useState(9)
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const specialties = [
    { id: "all", name: { ar: "الكل", en: "All" } },
    { id: "anxiety", name: { ar: "القلق والتوتر", en: "Anxiety & Stress" } },
    { id: "depression", name: { ar: "الاكتئاب", en: "Depression" } },
    { id: "sleep", name: { ar: "اضطرابات النوم", en: "Sleep Disorders" } },
    { id: "relationships", name: { ar: "العلاقات", en: "Relationships" } },
    { id: "addiction", name: { ar: "الادمان", en: "Addiction" } },
  ]
  
  const tagsMap = {
    anxiety: { ar: "القلق", en: "Anxiety" },
    depression: { ar: "الاكتئاب", en: "Depression" },
    sleep: { ar: "اضطرابات النوم", en: "Sleep" },
    burnout: { ar: "الاحتراق النفسي", en: "Burnout" },
    "self-development": { ar: "تطوير الذات", en: "Self Development" },
    anger: { ar: "الغضب", en: "Anger" },
    "family-therapy": { ar: "العلاج الأسري", en: "Family Therapy" },
    children: { ar: "الأطفال", en: "Children" },
    behavioral: { ar: "السلوكي", en: "Behavioral" },
    addiction: { ar: "الإدمان", en: "Addiction" },
    relationships: { ar: "العلاقات", en: "Relationships" }
  }

  const getDaysInMonth = () => {
    const days = []
    const dayNames = lang === "ar" ? ["أحد", "اثن", "ثلا", "أرب", "خمي", "جمع", "سبت"] : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    
    for (let i = 1; i <= 31; i++) {
      const dayOfWeek = new Date(2026, 2, i).getDay()
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6
      days.push({
        day: i,
        dayName: dayNames[dayOfWeek],
        isWeekend,
        hasAvailability: !isWeekend
      })
    }
    return days
  }

  const filteredSpecialists = specialists.filter(specialist => {
    const matchesSpecialty = selectedSpecialty === "all" || specialist.tags.includes(selectedSpecialty)
    const matchesSearch = specialist.name[lang as 'ar' | 'en'].toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSpecialty && matchesSearch
  })

  const getSpecialtyName = (tag: string) => {
    const specialty = specialties.find(s => s.id === tag)
    return specialty ? specialty.name[lang as 'ar' | 'en'] : tag
  }

  return (
    <Reveal>
    <section dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 transition-colors" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            {t("العودة للرئيسية", "Back to Home")}
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ backgroundColor: "rgb(34, 197, 94)" }}></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "rgb(34, 197, 94)" }}></span>
            </span>
            <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "rgb(34, 197, 94)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {t("مواعيد متاحة الآن", "Available Appointments Now")}
            </span>
          </div>
          <h1 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 700, color: "rgb(12, 46, 52)", lineHeight: 1.5 }}>
            {t("المواعيد المتاحة — مارس 2026", "Available Appointments — March 2026")}
          </h1>
          <p className="mt-3 max-w-xl" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.92rem", lineHeight: 2, color: "rgb(138, 154, 158)" }}>
            {t("اختر اليوم المناسب لك وشاهد المختصين المتاحين ومواعيدهم.", "Choose the right day for you and see available specialists and their times.")}
          </p>
        </div>

        {/* Calendar */}
        <div className="rounded-2xl border p-5 mb-8" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(228, 234, 236)" }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar" style={{ color: "rgb(20, 80, 92)" }}>
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                {t("مارس 2026", "March 2026")}
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-lg" style={{ backgroundColor: "rgba(20, 80, 92, 0.063)", fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "rgb(20, 80, 92)" }}>
              {t("اليوم: 9 مارس", "Today: March 9")}
            </span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-2" style={{ scrollbarWidth: "thin" }}>
            {getDaysInMonth().map((day) => (
              <button
                key={day.day}
                onClick={() => day.hasAvailability && setSelectedDate(day.day)}
                disabled={!day.hasAvailability}
                className={`flex-shrink-0 w-14 text-center py-2.5 rounded-xl transition-all ${
                  selectedDate === day.day
                    ? "text-white"
                    : day.hasAvailability
                    ? "hover:shadow-md"
                    : "opacity-35 cursor-not-allowed"
                }`}
                style={{
                  backgroundColor: selectedDate === day.day ? "rgb(20, 80, 92)" : "transparent",
                  border: "1.5px solid " + (day.hasAvailability ? "rgb(232, 238, 240)" : "rgb(244, 244, 244)"),
                  cursor: day.hasAvailability ? "pointer" : "not-allowed"
                }}
              >
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.55rem", fontWeight: 600, color: selectedDate === day.day ? "rgba(255, 255, 255, 0.7)" : "rgb(170, 187, 190)", textTransform: "uppercase" }}>
                  {day.dayName}
                </p>
                <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1rem", fontWeight: 700, color: selectedDate === day.day ? "rgb(255, 255, 255)" : day.hasAvailability ? "rgb(12, 46, 52)" : "rgb(208, 216, 218)", margin: "2px 0px" }}>
                  {day.day}
                </p>
                {day.hasAvailability && (
                  <div className="flex justify-center gap-0.5 mt-0.5">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: selectedDate === day.day ? "rgba(255, 255, 255, 0.6)" : "rgb(20, 80, 92)" }}></span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="relative flex-1 min-w-[200px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute top-1/2 -translate-y-1/2" style={{ [lang === "ar" ? "right" : "left"]: "14px", color: "rgb(170, 187, 190)" }}>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder={t("ابحث عن مختص...", "Search for specialist...")}
              className="w-full py-3 rounded-xl border outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                paddingInlineStart: lang === "ar" ? "16px" : "40px", 
                paddingInlineEnd: lang === "ar" ? "40px" : "16px",
                backgroundColor: "rgb(255, 255, 255)", 
                borderColor: "rgb(228, 234, 236)", 
                fontFamily: "Cairo, sans-serif", 
                fontSize: "0.85rem", 
                color: "rgb(12, 46, 52)" 
              }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                onClick={() => setSelectedSpecialty(specialty.id)}
                className="px-4 py-2.5 rounded-xl border transition-all"
                style={{
                  backgroundColor: selectedSpecialty === specialty.id ? "rgb(20, 80, 92)" : "rgb(255, 255, 255)",
                  borderColor: selectedSpecialty === specialty.id ? "rgb(20, 80, 92)" : "rgb(228, 234, 236)",
                  fontFamily: "Cairo, sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: selectedSpecialty === specialty.id ? "rgb(255, 255, 255)" : "rgb(122, 138, 142)"
                }}
              >
                {specialty.name[lang as 'ar' | 'en']}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="mb-6" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", color: "rgb(138, 154, 158)" }}>
          {filteredSpecialists.length} {t("مختصين متاحين في 9 مارس", "specialists available on March 9")}
        </p>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredSpecialists.map((specialist) => (
            <div key={specialist.id} className="rounded-2xl border bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg" style={{ borderColor: "rgb(228, 234, 236)" }}>
              <div className="p-5">
                <div className="flex items-start gap-4 mb-4">
                  <Link href={`/specialist/${specialist.id}`} className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2" style={{ borderColor: "rgb(232, 238, 240)" }}>
                      <Image
                        src={specialist.image}
                        alt={specialist.name[lang as 'ar' | 'en']}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: "rgb(34, 197, 94)" }}></span>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/specialist/${specialist.id}`}>
                      <h3 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                        {specialist.name[lang as 'ar' | 'en']}
                      </h3>
                    </Link>
                    <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.75rem", color: "rgb(138, 154, 158)", marginTop: "2px" }}>
                      {specialist.specialty[lang as 'ar' | 'en']}
                    </p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-lg" style={{ backgroundColor: "rgb(254, 249, 240)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star fill-[#f0a060] text-[#f0a060]">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "rgb(212, 144, 58)" }}>
                          {specialist.rating}
                        </span>
                      </span>
                      <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(170, 187, 190)" }}>
                        {specialist.reviews} {t("تقييم", "reviews")}
                      </span>
                      <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(170, 187, 190)" }}>
                        {specialist.experience} {t("سنة خبرة", "years experience")}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1rem", fontWeight: 700, color: "rgb(20, 80, 92)" }}>
                    {specialist.price} <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", fontWeight: 500, color: "rgb(170, 187, 190)" }}>
                      {t("ر.س", "SAR")}
                    </span>
                  </span>
                </div>

                <div className="flex gap-1.5 flex-wrap mb-4">
                  {specialist.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg" style={{ backgroundColor: "rgba(20, 80, 92, 0.03)", fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
                      {/* {getSpecialtyName(tag)} */}
                      {tagsMap[tag as keyof typeof tagsMap]?.[lang as 'ar' | 'en'] || tag}
                    </span>
                  ))}
                </div>

                <div className="border-t pt-4" style={{ borderColor: "rgb(240, 243, 244)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "rgb(170, 187, 190)" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock inline mr-1">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {t("المواعيد المتاحة", "Available Times")}
                    </span>
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
                      {specialist.availableSlots.length} {t("مواعيد", "appointments")}
                    </span>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {specialist.availableSlots.slice(0, 9).map((slot) => (
                      <button
                        key={slot}
                        className="px-3 py-1.5 rounded-lg border text-center transition-all hover:border-teal-500 hover:bg-teal-50"
                        style={{
                          borderColor: "rgb(228, 234, 236)",
                          backgroundColor: "rgb(255, 255, 255)",
                          fontFamily: "Cairo, sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "rgb(12, 46, 52)"
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                    {specialist.availableSlots.length > 9 && (
                      <button
                        className="px-3 py-1.5 rounded-lg border text-center transition-all"
                        style={{
                          borderColor: "rgb(228, 234, 236)",
                          backgroundColor: "rgb(255, 255, 255)",
                          fontFamily: "Cairo, sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "rgb(12, 46, 52)"
                        }}
                      >
                        +{specialist.availableSlots.length - 9}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  )
}