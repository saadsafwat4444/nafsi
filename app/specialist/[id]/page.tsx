"use client"

import { useState } from "react"
import { useAppContext } from "../../context/AppContext"
import Link from "next/link"
import Image from "next/image"
import { specialists } from "../../Appoinment/page"
import { notFound } from "next/navigation"
import { use } from "react"

export default function SpecialistPage({ params }: { params: Promise<{ id: string }> }) {
  const context = useAppContext()
  if (!context) return null
  const { lang, t } = context

  const { id } = use(params)
  const specialist = specialists.find(s => s.id === id)
  
  // Booking state
  const [showBookingQuestions, setShowBookingQuestions] = useState(false)
  const [bookingStep, setBookingStep] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState('')
  const [selectedSessionType, setSelectedSessionType] = useState('online')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [bookingCompleted, setBookingCompleted] = useState(false)
  
  if (!specialist) {
    notFound()
  }

  const reviews = [
    {
      id: 1,
      name: "سارة م.",
      date: "فبراير 2026",
      rating: 5,
      comment: "تجربة رائعة، شعرت بالراحة من أول جلسة"
    },
    {
      id: 2,
      name: "أحمد ع.",
      date: "يناير 2026",
      rating: 5,
      comment: "مختص محترف ومتفهم جدًا"
    },
    {
      id: 3,
      name: "نورة ك.",
      date: "ديسمبر 2025",
      rating: 4,
      comment: "ساعدني كثيرًا في فهم مشاعري"
    }
  ]

  const specialties = specialist.tags.map(tag => {
    const tagsMap: { [key: string]: { ar: string; en: string } } = {
      anxiety: { ar: "القلق والتوتر", en: "Anxiety & Stress" },
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
    return tagsMap[tag]?.[lang as 'ar' | 'en'] || tag
  })

  const workDays = ["السبت", "الاثنين", "الاربعاء"]

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "rgb(248, 249, 250)" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/Appoinment" className="inline-flex items-center gap-2 transition-colors hover:opacity-70" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            {t("العودة للمواعيد", "Back to Appointments")}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Specialist Card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border bg-white overflow-hidden sticky top-28" style={{ borderColor: "rgb(228, 234, 236)" }}>
              {/* Image */}
              <div className="relative h-[260px]">
                <Image
                  src={specialist.image}
                  alt={specialist.name[lang as 'ar' | 'en']}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12, 46, 52, 0.933) 0%, rgba(12, 46, 52, 0.25) 40%, transparent 70%)" }} />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check" style={{ color: "rgb(52, 211, 153)" }}>
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "rgb(52, 211, 153)" }}>
                      {t("معتمد", "Certified")}
                    </span>
                  </div>
                  <h1 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "rgb(255, 255, 255)" }}>
                    {specialist.name[lang as 'ar' | 'en']}
                  </h1>
                  <p className="mt-0.5" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.55)" }}>
                    {specialist.specialty[lang as 'ar' | 'en']}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2.5 rounded-xl" style={{ backgroundColor: "rgb(246, 248, 249)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star mx-auto mb-1" style={{ color: "rgb(240, 160, 96)", fill: "rgb(240, 160, 96)" }}>
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.92rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                      {specialist.rating}
                    </p>
                    <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.58rem", color: "rgb(170, 187, 190)" }}>
                      {t("التقييم", "Rating")}
                    </p>
                  </div>
                  <div className="text-center p-2.5 rounded-xl" style={{ backgroundColor: "rgb(246, 248, 249)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle mx-auto mb-1" style={{ color: "rgb(20, 80, 92)" }}>
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.92rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                      {specialist.reviews}
                    </p>
                    <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.58rem", color: "rgb(170, 187, 190)" }}>
                      {t("تقييم", "Reviews")}
                    </p>
                  </div>
                  <div className="text-center p-2.5 rounded-xl" style={{ backgroundColor: "rgb(246, 248, 249)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mx-auto mb-1" style={{ color: "rgb(20, 80, 92)" }}>
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.92rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                      {specialist.experience} {t("سنة", "years")}
                    </p>
                    <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.58rem", color: "rgb(170, 187, 190)" }}>
                      {t("الخبرة", "Experience")}
                    </p>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <p className="mb-2" style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                    {t("التخصصات", "Specialties")}
                  </p>
                  <div className="flex gap-1.5 flex-wrap">
                    {specialties.map((specialty, index) => (
                      <span key={index} className="px-2 py-0.5 rounded-md" style={{ backgroundColor: "rgba(20, 80, 92, 0.03)", fontFamily: "Cairo, sans-serif", fontSize: "0.67rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Work Days */}
                <div>
                  <p className="mb-2" style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                    {t("أيام العمل", "Work Days")}
                  </p>
                  <div className="flex gap-1.5 flex-wrap">
                    {workDays.map((day, index) => (
                      <span key={index} className="px-2 py-0.5 rounded-md border" style={{ borderColor: "rgb(232, 238, 240)", fontFamily: "Cairo, sans-serif", fontSize: "0.67rem", fontWeight: 600, color: "rgb(122, 138, 142)" }}>
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-3 border-t" style={{ borderColor: "rgb(240, 243, 244)" }}>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "rgb(20, 80, 92)" }}>
                      {specialist.price}
                    </span>
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                      {t("ر.س / الجلسة", "SAR / Session")}
                    </span>
                  </div>
                  <button onClick={() => setShowBookingQuestions(true)} className="w-full py-3 rounded-xl text-white flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg" style={{ backgroundColor: "rgb(20, 80, 92)", fontFamily: "Cairo, sans-serif", fontSize: "0.88rem", fontWeight: 600 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {t("ابدأ الحجز", "Start Booking")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border bg-white p-4" style={{ borderColor: "rgb(232, 238, 240)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield mb-2" style={{ color: "rgb(20, 80, 92)" }}>
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "rgb(12, 46, 52)", marginBottom: "2px" }}>
                  {t("خصوصية تامة", "Complete Privacy")}
                </p>
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                  {t("جلساتك مشفرة ومحمية", "Your sessions are encrypted and protected")}
                </p>
              </div>
              <div className="rounded-xl border bg-white p-4" style={{ borderColor: "rgb(232, 238, 240)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart mb-2" style={{ color: "rgb(61, 139, 156)" }}>
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "rgb(12, 46, 52)", marginBottom: "2px" }}>
                  {t("دعم مستمر", "Continuous Support")}
                </p>
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                  {t("متابعة بين الجلسات", "Follow-up between sessions")}
                </p>
              </div>
              <div className="rounded-xl border bg-white p-4" style={{ borderColor: "rgb(232, 238, 240)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mb-2" style={{ color: "rgb(123, 142, 181)" }}>
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "rgb(12, 46, 52)", marginBottom: "2px" }}>
                  {t("مختص معتمد", "Certified Specialist")}
                </p>
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                  {t(`خبرة ${specialist.experience} سنة`, `${specialist.experience} years experience`)}
                </p>
              </div>
            </div>

            {/* Booking Questions */}
            {showBookingQuestions && !bookingCompleted && (
              <div className="rounded-2xl border bg-white overflow-hidden mb-6" style={{ borderColor: "rgb(228, 234, 236)" }}>
                <div className="h-1.5" style={{ backgroundColor: "rgb(20, 80, 92)" }}></div>
                <div className="px-6 pt-5 pb-4 border-b" style={{ borderColor: "rgb(240, 243, 244)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                      {t("حجز جلستك", "Book Your Session")}
                    </h2>
                    <button 
                      onClick={() => setShowBookingQuestions(false)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgb(170, 187, 190)" }}>
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all" style={{ backgroundColor: bookingStep === 1 ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)" }}>
                          <span style={{ fontSize: "0.58rem", fontWeight: 700, color: bookingStep === 1 ? "rgb(255, 255, 255)" : "rgb(170, 187, 190)" }}>1</span>
                        </div>
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: bookingStep === 1 ? "rgb(20, 80, 92)" : "rgb(176, 192, 196)" }}>
                          {t("الباقة", "Package")}
                        </span>
                      </div>
                      <div className="h-[3px] rounded-full transition-all" style={{ backgroundColor: bookingStep >= 1 ? "rgba(20, 80, 92, 0.25)" : "rgb(232, 238, 240)" }}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all" style={{ backgroundColor: bookingStep === 2 ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)" }}>
                          <span style={{ fontSize: "0.58rem", fontWeight: 700, color: bookingStep === 2 ? "rgb(255, 255, 255)" : "rgb(170, 187, 190)" }}>2</span>
                        </div>
                        <span style={{ fontSize: "0.68rem", fontWeight: 500, color: bookingStep === 2 ? "rgb(20, 80, 92)" : "rgb(176, 192, 196)" }}>
                          {t("الموعد", "Appointment")}
                        </span>
                      </div>
                      <div className="h-[3px] rounded-full transition-all" style={{ backgroundColor: bookingStep >= 2 ? "rgba(20, 80, 92, 0.25)" : "rgb(232, 238, 240)" }}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all" style={{ backgroundColor: bookingStep === 3 ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)" }}>
                          <span style={{ fontSize: "0.58rem", fontWeight: 700, color: bookingStep === 3 ? "rgb(255, 255, 255)" : "rgb(170, 187, 190)" }}>3</span>
                        </div>
                        <span style={{ fontSize: "0.68rem", fontWeight: 500, color: bookingStep === 3 ? "rgb(20, 80, 92)" : "rgb(176, 192, 196)" }}>
                          {t("الدفع", "Payment")}
                        </span>
                      </div>
                      <div className="h-[3px] rounded-full transition-all" style={{ backgroundColor: bookingStep >= 3 ? "rgba(20, 80, 92, 0.25)" : "rgb(232, 238, 240)" }}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all" style={{ backgroundColor: bookingStep === 4 ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)" }}>
                          <span style={{ fontSize: "0.58rem", fontWeight: 700, color: bookingStep === 4 ? "rgb(255, 255, 255)" : "rgb(170, 187, 190)" }}>4</span>
                        </div>
                        <span style={{ fontSize: "0.68rem", fontWeight: 500, color: bookingStep === 4 ? "rgb(20, 80, 92)" : "rgb(176, 192, 196)" }}>
                          {t("تأكيد", "Confirmation")}
                        </span>
                      </div>
                      <div className="h-[3px] rounded-full transition-all" style={{ backgroundColor: bookingStep >= 4 ? "rgba(20, 80, 92, 0.25)" : "rgb(232, 238, 240)" }}></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {bookingStep === 1 && (
                    <div>
                      <div className="flex gap-2 mb-6">
                        <button 
                          onClick={() => setSelectedSessionType('online')}
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-all ${selectedSessionType === 'online' ? 'border-teal-600' : 'border-gray-200'}`}
                          style={{ backgroundColor: selectedSessionType === 'online' ? "rgba(20, 80, 92, 0.03)" : "rgb(255, 255, 255)", borderColor: selectedSessionType === 'online' ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)", fontSize: "0.8rem", fontWeight: 600, color: selectedSessionType === 'online' ? "rgb(20, 80, 92)" : "rgb(138, 154, 158)" }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                            <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                          </svg>
                          {t("أونلاين", "Online")}
                        </button>
                        <button 
                          onClick={() => setSelectedSessionType('offline')}
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-all ${selectedSessionType === 'offline' ? 'border-teal-600' : 'border-gray-200'}`}
                          style={{ backgroundColor: selectedSessionType === 'offline' ? "rgba(20, 80, 92, 0.03)" : "rgb(255, 255, 255)", borderColor: selectedSessionType === 'offline' ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)", fontSize: "0.8rem", fontWeight: 600, color: selectedSessionType === 'offline' ? "rgb(20, 80, 92)" : "rgb(138, 154, 158)" }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                          </svg>
                          {t("حضوري", "In-Person")}
                        </button>
                      </div>
                      <p className="mb-4" style={{ fontSize: "0.88rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                        {t("اختر الباقة المناسبة", "Choose the Right Package")}
                      </p>
                      <div className="space-y-3">
                        <button 
                          onClick={() => setSelectedPackage('single')}
                          className={`w-full rounded-xl border p-4 transition-all text-right relative overflow-hidden ${selectedPackage === 'single' ? 'border-teal-600' : 'border-gray-200'}`}
                          style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: selectedPackage === 'single' ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)" }}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${selectedPackage === 'single' ? 'border-teal-600' : 'border-gray-300'}`} style={{ borderColor: selectedPackage === 'single' ? "rgb(20, 80, 92)" : "rgb(205, 213, 216)" }}>
                              {selectedPackage === 'single' && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgb(20, 80, 92)" }}></div>}
                            </div>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgb(244, 246, 247)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgb(138, 154, 158)" }}>
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                                  {t("جلسة واحدة", "Single Session")}
                                </span>
                              </div>
                              <p style={{ fontSize: "0.72rem", color: "rgb(138, 154, 158)", marginTop: "2px" }}>
                                {t("جرّب أول جلسة", "Try your first session")}
                              </p>
                            </div>
                            <div className="shrink-0 text-left">
                              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>{specialist.price}</p>
                              <p style={{ fontSize: "0.6rem", color: "rgb(170, 187, 190)" }}>{t("ر.س", "SAR")}</p>
                            </div>
                          </div>
                        </button>
                        <button 
                          onClick={() => setSelectedPackage('four')}
                          className={`w-full rounded-xl border p-4 transition-all text-right relative overflow-hidden ${selectedPackage === 'four' ? 'border-teal-600' : 'border-gray-200'}`}
                          style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: selectedPackage === 'four' ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)" }}
                        >
                          {selectedPackage === 'four' && (
                            <div className="absolute top-0 left-0">
                              <div className="px-3 py-1 rounded-bl-lg rounded-tr-xl" style={{ backgroundColor: "rgb(20, 80, 92)" }}>
                                <span style={{ fontSize: "0.58rem", fontWeight: 700, color: "rgb(255, 255, 255)" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mb-0.5">
                                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                    <path d="M20 3v4"></path>
                                    <path d="M22 5h-4"></path>
                                    <path d="M4 17v2"></path>
                                    <path d="M5 18H3"></path>
                                  </svg> {t("الأكثر طلبًا", "Most Popular")}
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${selectedPackage === 'four' ? 'border-teal-600' : 'border-gray-300'}`} style={{ borderColor: selectedPackage === 'four' ? "rgb(20, 80, 92)" : "rgb(205, 213, 216)" }}>
                              {selectedPackage === 'four' && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgb(20, 80, 92)" }}></div>}
                            </div>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgb(244, 246, 247)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgb(138, 154, 158)" }}>
                                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                <path d="M12 22V12"></path>
                                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                <path d="m7.5 4.27 9 5.15"></path>
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                                  {t("باقة 4 جلسات", "4 Sessions Package")}
                                </span>
                                <span className="px-2 py-0.5 rounded-md" style={{ backgroundColor: "rgb(254, 243, 199)", fontSize: "0.58rem", fontWeight: 700, color: "rgb(146, 64, 14)" }}>-10%</span>
                              </div>
                              <p style={{ fontSize: "0.72rem", color: "rgb(138, 154, 158)", marginTop: "2px" }}>
                                {t("الأكثر طلبًا — وفّر 10%", "Most Popular — Save 10%")}
                              </p>
                            </div>
                            <div className="shrink-0 text-left">
                              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>{specialist.price * 4 * 0.9}</p>
                              <p style={{ fontSize: "0.6rem", color: "rgb(170, 187, 190)" }}>{t("ر.س", "SAR")}</p>
                            </div>
                          </div>
                        </button>
                        <button 
                          onClick={() => setSelectedPackage('eight')}
                          className={`w-full rounded-xl border p-4 transition-all text-right relative overflow-hidden ${selectedPackage === 'eight' ? 'border-teal-600' : 'border-gray-200'}`}
                          style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: selectedPackage === 'eight' ? "rgb(20, 80, 92)" : "rgb(232, 238, 240)" }}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${selectedPackage === 'eight' ? 'border-teal-600' : 'border-gray-300'}`} style={{ borderColor: selectedPackage === 'eight' ? "rgb(20, 80, 92)" : "rgb(205, 213, 216)" }}>
                              {selectedPackage === 'eight' && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgb(20, 80, 92)" }}></div>}
                            </div>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgb(244, 246, 247)" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgb(138, 154, 158)" }}>
                                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                <path d="M12 22V12"></path>
                                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                <path d="m7.5 4.27 9 5.15"></path>
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                                  {t("باقة 8 جلسات", "8 Sessions Package")}
                                </span>
                                <span className="px-2 py-0.5 rounded-md" style={{ backgroundColor: "rgb(254, 243, 199)", fontSize: "0.58rem", fontWeight: 700, color: "rgb(146, 64, 14)" }}>-20%</span>
                              </div>
                              <p style={{ fontSize: "0.72rem", color: "rgb(138, 154, 158)", marginTop: "2px" }}>
                                {t("أفضل قيمة — وفّر 20%", "Best Value — Save 20%")}
                              </p>
                            </div>
                            <div className="shrink-0 text-left">
                              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>{specialist.price * 8 * 0.8}</p>
                              <p style={{ fontSize: "0.6rem", color: "rgb(170, 187, 190)" }}>{t("ر.س", "SAR")}</p>
                            </div>
                          </div>
                        </button>
                      </div>
                      <button 
                        onClick={() => selectedPackage && setBookingStep(2)}
                        disabled={!selectedPackage}
                        className="w-full mt-6 py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                        style={{ backgroundColor: "rgb(20, 80, 92)", fontSize: "0.88rem", fontWeight: 600 }}
                      >
                        {t("التالي — اختيار الموعد", "Next — Choose Appointment")}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  )}
                  
                  {bookingStep === 2 && (
                    <div>
                      <p className="mb-4" style={{ fontSize: "0.88rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                        {t("اختر اليوم والوقت", "Choose Day and Time")}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="block mb-2" style={{ fontSize: "0.82rem", color: "rgb(138, 154, 158)" }}>
                            {t("التاريخ", "Date")}
                          </label>
                          <input 
                            type="date" 
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full p-3 rounded-xl border"
                            style={{ borderColor: "rgb(232, 238, 240)" }}
                          />
                        </div>
                        <div>
                          <label className="block mb-2" style={{ fontSize: "0.82rem", color: "rgb(138, 154, 158)" }}>
                            {t("الوقت", "Time")}
                          </label>
                          <select 
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full p-3 rounded-xl border"
                            style={{ borderColor: "rgb(232, 238, 240)" }}
                          >
                            <option value="">{t("اختر الوقت", "Select Time")}</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button 
                          onClick={() => setBookingStep(1)}
                          className="flex-1 py-3.5 rounded-xl border flex items-center justify-center gap-2 transition-all"
                          style={{ borderColor: "rgb(232, 238, 240)", fontSize: "0.88rem", fontWeight: 600, color: "rgb(138, 154, 158)" }}
                        >
                          {t("السابق", "Previous")}
                        </button>
                        <button 
                          onClick={() => setBookingStep(3)}
                          disabled={!selectedDate || !selectedTime}
                          className="flex-1 py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                          style={{ backgroundColor: "rgb(20, 80, 92)", fontSize: "0.88rem", fontWeight: 600 }}
                        >
                          {t("التالي — الدفع", "Next — Payment")}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {bookingStep === 3 && (
                    <div>
                      <p className="mb-4" style={{ fontSize: "0.88rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                        {t("الدفع", "Payment")}
                      </p>
                      <div className="space-y-4">
                        <div className="rounded-xl border p-4" style={{ borderColor: "rgb(232, 238, 240)" }}>
                          <div className="flex items-center justify-between mb-2">
                            <span style={{ fontSize: "0.82rem", color: "rgb(138, 154, 158)" }}>{t("الباقة", "Package")}</span>
                            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                              {selectedPackage === 'single' ? t('جلسة واحدة', 'Single Session') : 
                               selectedPackage === 'four' ? t('باقة 4 جلسات', '4 Sessions Package') : 
                               t('باقة 8 جلسات', '8 Sessions Package')}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span style={{ fontSize: "0.82rem", color: "rgb(138, 154, 158)" }}>{t("نوع الجلسة", "Session Type")}</span>
                            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                              {selectedSessionType === 'online' ? t('أونلاين', 'Online') : t('حضوري', 'In-Person')}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span style={{ fontSize: "0.82rem", color: "rgb(138, 154, 158)" }}>{t("الموعد", "Appointment")}</span>
                            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                              {selectedDate} {selectedTime}
                            </span>
                          </div>
                          <div className="border-t pt-2 mt-2" style={{ borderColor: "rgb(240, 243, 244)" }}>
                            <div className="flex items-center justify-between">
                              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>{t("الإجمالي", "Total")}</span>
                              <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "rgb(20, 80, 92)" }}>
                                {selectedPackage === 'single' ? specialist.price : 
                                 selectedPackage === 'four' ? specialist.price * 4 * 0.9 : 
                                 specialist.price * 8 * 0.8} {t("ر.س", "SAR")}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="w-full py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all shadow-md" style={{ backgroundColor: "rgb(20, 80, 92)", fontSize: "0.88rem", fontWeight: 600 }}>
                          {t("الدفع الآن", "Pay Now")}
                        </button>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button 
                          onClick={() => setBookingStep(2)}
                          className="flex-1 py-3.5 rounded-xl border flex items-center justify-center gap-2 transition-all"
                          style={{ borderColor: "rgb(232, 238, 240)", fontSize: "0.88rem", fontWeight: 600, color: "rgb(138, 154, 158)" }}
                        >
                          {t("السابق", "Previous")}
                        </button>
                        <button 
                          onClick={() => setBookingStep(4)}
                          className="flex-1 py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all shadow-md"
                          style={{ backgroundColor: "rgb(20, 80, 92)", fontSize: "0.88rem", fontWeight: 600 }}
                        >
                          {t("تأكيد الحجز", "Confirm Booking")}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {bookingStep === 4 && (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-teal-600 flex items-center justify-center" style={{ borderColor: "rgb(20, 80, 92)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(20, 80, 92)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4m5.618-3.618a1 1 0 010 1.414l-8.486 8.486a1 1 0 01-1.414 0L3.382 9.796a1 1 0 010-1.414l8.486-8.486a1 1 0 011.414 0l8.486 8.486z"></path>
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold mb-2" style={{ color: "rgb(12, 46, 52)" }}>
                        {t("تم الحجز بنجاح!", "Booking Confirmed!")}
                      </h2>
                      <p className="text-gray-500 text-lg mb-6">
                        {t("سنتواصل معك خلال 24 ساعة", "We will contact you within 24 hours")}
                      </p>
                      <button 
                        onClick={() => {
                          setShowBookingQuestions(false)
                          setBookingCompleted(true)
                        }}
                        className="w-full py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all shadow-md"
                        style={{ backgroundColor: "rgb(20, 80, 92)", fontSize: "0.88rem", fontWeight: 600 }}
                      >
                        {t("إغلاق", "Close")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Booking Confirmation */}
            {bookingCompleted && (
              <div className="rounded-2xl border bg-white p-6 mb-6" style={{ borderColor: "rgb(228, 234, 236)" }}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-teal-600 flex items-center justify-center" style={{ borderColor: "rgb(20, 80, 92)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(20, 80, 92)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4m5.618-3.618a1 1 0 010 1.414l-8.486 8.486a1 1 0 01-1.414 0L3.382 9.796a1 1 0 010-1.414l8.486-8.486a1 1 0 011.414 0l8.486 8.486z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "rgb(12, 46, 52)" }}>
                    {t("تم الحجز بنجاح!", "Booking Confirmed!")}
                  </h2>
                  <p className="text-gray-500 text-lg mb-6">
                    {t("هيوصلك تأكيد على الإيميل والواتساب", "You'll receive confirmation via email and WhatsApp")}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(244, 246, 247)" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgb(20, 80, 92)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="m22 21-3-3"></path>
                          <path d="m16 16 3 3"></path>
                        </svg>
                      </div>
                      <div className="text-right">
                        <p style={{ fontSize: "0.68rem", color: "rgb(138, 154, 158)" }}>{t("المختص", "Specialist")}</p>
                        <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>{specialist.name[lang as 'ar' | 'en']}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(244, 246, 247)" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgb(20, 80, 92)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                      </div>
                      <div className="text-right">
                        <p style={{ fontSize: "0.68rem", color: "rgb(138, 154, 158)" }}>{t("الباقة", "Package")}</p>
                        <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                          {selectedPackage === 'single' ? t('جلسة واحدة', 'Single Session') : 
                           selectedPackage === 'four' ? t('باقة 4 جلسات', '4 Sessions Package') : 
                           t('باقة 8 جلسات', '8 Sessions Package')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(244, 246, 247)" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgb(20, 80, 92)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                          <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                        </svg>
                      </div>
                      <div className="text-right">
                        <p style={{ fontSize: "0.68rem", color: "rgb(138, 154, 158)" }}>{t("النوع", "Type")}</p>
                        <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                          {selectedSessionType === 'online' ? t('أونلاين', 'Online') : t('حضوري', 'In-Person')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(244, 246, 247)" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgb(20, 80, 92)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </div>
                      <div className="text-right">
                        <p style={{ fontSize: "0.68rem", color: "rgb(138, 154, 158)" }}>{t("أول موعد", "First Appointment")}</p>
                        <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                          {selectedDate && selectedTime ? 
                            lang === 'ar' ? `${selectedDate.replace(/-/g, '/')} — ${selectedTime}` : 
                            `${selectedDate} — ${selectedTime}` : 
                            t('سيتم تحديد الموعد قريبًا', 'Appointment will be scheduled soon')
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(244, 246, 247)" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgb(20, 80, 92)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                      </div>
                      <div className="text-right">
                        <p style={{ fontSize: "0.68rem", color: "rgb(138, 154, 158)" }}>{t("الدفع", "Payment")}</p>
                        <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                          {selectedPackage === 'single' ? specialist.price : 
                           selectedPackage === 'four' ? specialist.price * 4 * 0.9 : 
                           specialist.price * 8 * 0.8} {t("ر.س — دفع كامل", "SAR — Full Payment")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "rgb(228, 234, 236)" }}>
              <h2 className="mb-5" style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                {t("آراء العملاء", "Client Reviews")}
              </h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="p-4 rounded-xl border" style={{ borderColor: "rgb(240, 243, 244)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(20, 80, 92, 0.063)" }}>
                          <span style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "rgb(20, 80, 92)" }}>
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <span style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                          {review.name}
                        </span>
                      </div>
                      <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", color: "rgb(170, 187, 190)" }}>
                        {review.date}
                      </span>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-star ${i < review.rating ? 'fill-[#f0a060] text-[#f0a060]' : 'text-gray-300'}`}>
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", color: "rgb(122, 138, 142)", lineHeight: "1.8" }}>
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

          </section>
  )
}
