"use client"

import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import Link from "next/link"
import Reveal from "../components/Reveal"
import { specialists } from "../Appoinment/page"

export default function QuestionsPage() {
  const context = useAppContext()
  if (!context) return null
  const { lang, t } = context

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [assessmentStarted, setAssessmentStarted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const questions = [
    {
      id: 1,
      question: lang === "ar" ? "إيه اكتر حاجة بتحسها الفترة دي؟" : "What do you feel most these days?",
      options: lang === "ar" 
        ? ["قلق وتوتر مستمر 😟", "حزن وفقدان حافز 😔", "مشاكل في العلاقات 💔", "إرهاق نفسي وجسدي 🔥", "صعوبة في النوم 😴", "غضب وضغط نفسي 😤"]
        : ["Constant anxiety and stress 😟", "Sadness and loss of motivation 😔", "Relationship problems 💔", "Mental and physical exhaustion 🔥", "Difficulty sleeping 😴", "Anger and psychological pressure 😤"]
    },
    {
      id: 2,
      question: lang === "ar" ? "ما هي المدة التي شعرت فيها بهذه المشاعر؟" : "How long have you been feeling this way?",
      options: lang === "ar"
        ? ["أقل من شهر", "1-3 شهور", "3-6 شهور", "أكثر من 6 شهور"]
        : ["Less than a month", "1-3 months", "3-6 months", "More than 6 months"]
    },
    {
      id: 3,
      question: lang === "ar" ? "هل أثرت هذه المشاعر على حياتك اليومية؟" : "Have these feelings affected your daily life?",
      options: lang === "ar"
        ? ["لا على الإطلاق", "بشكل طفيف", "بشكل متوسط", "بشكل كبير"]
        : ["Not at all", "Slightly", "Moderately", "Significantly"]
    },
    {
      id: 4,
      question: lang === "ar" ? "هل سبق لك استشارة طبيب نفسي من قبل؟" : "Have you ever consulted a psychiatrist before?",
      options: lang === "ar"
        ? ["نعم، عدة مرات", "نعم، مرة واحدة", "لا، هذه هي المرة الأولى", "فكرت في ذلك لكن لم أفعل"]
        : ["Yes, several times", "Yes, once", "No, this is my first time", "I've thought about it but haven't done it"]
    },
    {
      id: 5,
      question: lang === "ar" ? "ما هو نمط العلاج الذي تفضله؟" : "What type of therapy do you prefer?",
      options: lang === "ar"
        ? ["علاج فردي 🧑‍⚕️", "علاج جماعي 👥", "علاج عبر الإنترنت 💻", "علاج混合 (فردي + جماعي) 🔄"]
        : ["Individual therapy 🧑‍⚕️", "Group therapy 👥", "Online therapy 💻", "Mixed therapy (individual + group) 🔄"]
    },
    {
      id: 6,
      question: lang === "ar" ? "هل تفضل التحدث مع دكتور ذكر أم أنثى؟" : "Do you prefer to speak with a male or female doctor?",
      options: lang === "ar"
        ? ["ذكر 👨‍⚕️", "أنثى 👩‍⚕️"]
        : ["Male 👨‍⚕️", "Female 👩‍⚕️"]
    }
  ]

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Last question answered, show loading before results
      setIsLoading(true)
      // Simulate loading time to show specialists
      setTimeout(() => {
        setIsLoading(false)
        setCurrentQuestion(currentQuestion + 1) // Move to results
      }, 2000) // 2 seconds loading
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  // Filter specialists based on gender preference
  const getFilteredSpecialists = () => {
    const genderAnswer = answers[5] // Gender preference is the 6th question (index 5)
    if (!genderAnswer) return specialists
    
    if (genderAnswer.includes('ذكر') || genderAnswer.includes('Male')) {
      // Filter for male specialists - using actual names from the data
      return specialists.filter(s => 
        s.name.ar.includes('د. احمد') || 
        s.name.ar.includes('د. خالد') || 
        s.name.ar.includes('د. عمر') ||
        s.name.en.includes('Dr. Ahmed') || 
        s.name.en.includes('Dr. Khaled') || 
        s.name.en.includes('Dr. Omar')
      )
    } else if (genderAnswer.includes('أنثى') || genderAnswer.includes('Female')) {
      // Filter for female specialists - using actual names from the data
      return specialists.filter(s => 
        s.name.ar.includes('د. سارة') || 
        s.name.ar.includes('د. نورة') || 
        s.name.ar.includes('د. ليلى') ||
        s.name.en.includes('Dr. Sara') || 
        s.name.en.includes('Dr. Nora') || 
        s.name.en.includes('Dr. Laila')
      )
    }
    return specialists
  }

  return (
    <Reveal>
    <section dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 transition-colors" style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            {t("العودة للرئيسية", "Back to Home")}
          </Link>
        </div>

        {/* Header */}
        <div className="rounded-2xl overflow-hidden border mb-8 relative" style={{ borderColor: "rgb(228, 234, 236)" }}>
          <div className="relative h-[200px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?w=1200&q=80" 
              alt="Assessment" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12, 46, 52, 0.867) 0%, rgba(20, 80, 92, 0.6) 100%)" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center" style={{ transform: "translateY(-0.48391px)" }}>
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain text-white">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 0 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 0 1 12 18Z"></path>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                  </svg>
                </div>
                <h1 style={{ fontSize: "clamp(1.3rem, 3.5vw, 2rem)", fontWeight: 700, lineHeight: 1.6, color: "rgb(255, 255, 255)" }}>
                  {t("التقييم النفسي الذكي", "Smart Psychological Assessment")}
                </h1>
                <p className="mt-2 max-w-md mx-auto px-4" style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(255, 255, 255, 0.7)" }}>
                  {t("6 اسئلة بسيطة تساعدنا نفهم حالتك ونوصلك بالمختص الانسب لك.", "6 simple questions help us understand your condition and recommend the most suitable specialist for you.")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="rounded-lg p-6 border text-center bg-white" style={{ borderColor: "rgb(229, 231, 235)" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgb(239, 246, 255)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgb(17, 24, 39)", marginBottom: "0.5rem" }}>
              {t("سري تمامًا", "Completely Secure")}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "rgb(107, 114, 128)", lineHeight: 1.5 }}>
              {t("اجاباتك محمية ومشفرة", "Your answers are protected and encrypted")}
            </p>
          </div>
          <div className="rounded-lg p-6 border text-center bg-white" style={{ borderColor: "rgb(229, 231, 235)" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgb(239, 246, 255)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgb(17, 24, 39)", marginBottom: "0.5rem" }}>
              {t("دقيقتين فقط", "Just 2 Minutes")}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "rgb(107, 114, 128)", lineHeight: 1.5 }}>
              {t("6 اسئلة سريعة", "6 quick questions")}
            </p>
          </div>
          <div className="rounded-lg p-6 border text-center bg-white" style={{ borderColor: "rgb(229, 231, 235)" }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgb(239, 246, 255)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgb(17, 24, 39)", marginBottom: "0.5rem" }}>
              {t("نتائج دقيقة", "Accurate Results")}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "rgb(107, 114, 128)", lineHeight: 1.5 }}>
              {t("مختص مناسب لحالتك", "Specialist suitable for your condition")}
            </p>
          </div>
        </div>

        {/* Start Assessment Button - Only show when assessment hasn't started */}
        {!assessmentStarted && (
          <div className="text-center">
            <button 
              onClick={() => setAssessmentStarted(true)}
              className="px-8 py-3 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-teal-700 flex items-center gap-2 mx-auto transition-all duration-200" 
              style={{ backgroundColor: "rgb(20, 80, 92)", fontSize: "0.95rem", fontWeight: 500 }}
            >
              {t("ابدأ التقييم", "Start Assessment")}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                <path d="m12 19-7-7 7-7 7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <p className="mt-3" style={{ fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
              {t("مجاني تمامًا · بدون تسجيل", "Completely free · No registration")}
            </p>
          </div>
        )}

        {/* Questions Section - Only show when assessment has started */}
        {assessmentStarted && currentQuestion < questions.length && (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="relative">
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500 ease-out relative"
                    style={{ 
                      width: `${progress}%`,
                      background: "linear-gradient(90deg, rgb(20, 80, 92) 0%, rgb(32, 120, 136) 100%)"
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <span style={{ fontSize: "0.75rem", color: "rgb(20, 80, 92)", fontWeight: 600 }}>
                    {t(`سؤال ${currentQuestion + 1}`, `Question ${currentQuestion + 1}`)}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "rgb(170, 187, 190)" }}>
                    {t(`${questions.length} أسئلة`, `${questions.length} questions`)}
                  </span>
                </div>
              </div>
            </div>

            {/* Question Card */}
            <div className="rounded-2xl border bg-white p-8 mb-8" style={{ borderColor: "rgb(228, 234, 236)" }}>
              <h2 className="mb-6" style={{ fontSize: "1.2rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                {questions[currentQuestion].question}
              </h2>
              <div className={`grid ${questions[currentQuestion].options.length > 4 ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="p-4 rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-right flex items-center justify-start gap-3"
                    style={{ 
                      fontSize: "0.95rem", 
                      fontWeight: 500,
                      color: "rgb(12, 46, 52)",
                      textAlign: "right"
                    }}
                  >
                    <span className="text-2xl">
                      {option.includes('😟') ? '😟' : 
                       option.includes('😔') ? '😔' :
                       option.includes('💔') ? '💔' :
                       option.includes('🔥') ? '�' :
                       option.includes('�') ? '😴' :
                       option.includes('😤') ? '😤' :
                       option.includes('👨‍⚕️') ? '👨‍⚕️' :
                       option.includes('👩‍⚕️') ? '👩‍⚕️' :
                       option.includes('🧑‍⚕️') ? '🧑‍⚕️' :
                       option.includes('👥') ? '�' :
                       option.includes('💻') ? '💻' :
                       option.includes('🔄') ? '🔄' : ''}
                    </span>
                    <span>
                      {option.replace('😟', '').replace('😔', '').replace('💔', '').replace('🔥', '').replace('😴', '').replace('😤', '').replace('👨‍⚕️', '').replace('👩‍⚕️', '').replace('🧑‍⚕️', '').replace('👥', '').replace('💻', '').replace('🔄', '').trim()}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Loading State - Show after gender selection */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-teal-600 animate-spin mx-auto" style={{ borderTopColor: "rgb(20, 80, 92)" }}></div>
            </div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "rgb(12, 46, 52)", marginBottom: "1rem" }}>
              {t("جاري البحث عن المختصين المناسبين...", "Finding suitable specialists...")}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgb(122, 138, 142)", lineHeight: 1.6 }}>
              {t("نحن نبحث عن أفضل المختصين بناءً على تفضيلاتك", "We are searching for the best specialists based on your preferences")}
            </p>
          </div>
        )}

        {/* Specialists Display Section */}
        {assessmentStarted && currentQuestion >= questions.length && !isLoading && (
          <div>
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(20, 80, 92, 0.063)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgb(20, 80, 92)" }}>
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
              </div>
              <h2 className="mb-2" style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                {t("المختصين الانسب لك", "The Most Suitable Specialists For You")}
              </h2>
              <p style={{ fontSize: "0.88rem", color: "rgb(138, 154, 158)" }}>
                {t("بناءً على اجاباتك، دول اكتر المختصين توافقًا مع حالتك", "Based on your answers, these are the most compatible specialists for your condition")}
              </p>
            </div>

            {/* Specialists List */}
            <div className="space-y-4 mb-8">
              {getFilteredSpecialists().map((specialist) => (
                <Link key={specialist.id} href={`/specialist/${specialist.id}`}>
                  <div className="rounded-2xl border cursor-pointer transition-all duration-300 hover:shadow-lg group overflow-hidden" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(255, 255, 255)" }}>
                    <div className="h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "rgb(20, 80, 92)" }}></div>
                    <div className="p-5">
                      <div className="flex gap-4">
                        <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 border-2" style={{ borderColor: "rgb(228, 234, 236)" }}>
                          <img src={specialist.image} alt={specialist.name[lang as 'ar' | 'en']} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                                {specialist.name[lang as 'ar' | 'en']}
                              </h3>
                              <p style={{ fontSize: "0.75rem", color: "rgb(138, 154, 158)" }}>
                                {specialist.specialty[lang as 'ar' | 'en']}
                              </p>
                            </div>
                            <div className="px-3 py-1.5 rounded-lg shrink-0" style={{ backgroundColor: "rgba(20, 80, 92, 0.03)" }}>
                              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgb(20, 80, 92)" }}>
                                {Math.floor(Math.random() * 15) + 80}%
                              </span>
                              <span style={{ fontSize: "0.6rem", color: "rgb(138, 154, 158)", display: "block" }}>
                                {t("توافق", "Match")}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2.5 mb-3">
                            {specialist.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="px-2.5 py-0.5 rounded-md" style={{ backgroundColor: "rgb(244, 246, 247)", fontSize: "0.68rem", color: "rgb(122, 138, 142)" }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 flex-wrap">
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgb(240, 160, 96)" }} className="fill-current">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgb(90, 106, 110)" }}>
                                {specialist.rating}
                              </span>
                              <span style={{ fontSize: "0.65rem", color: "rgb(170, 187, 190)" }}>
                                ({specialist.reviews})
                              </span>
                            </span>
                            <span style={{ fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                              {specialist.experience} {t("سنة خبرة", "years experience")}
                            </span>
                            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
                              {specialist.price} {t("ر.س", "SAR")}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3.5 pt-3 border-t flex items-center justify-between" style={{ borderColor: "rgb(228, 234, 236)" }}>
                        <span style={{ fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                          {t("متاح: الاحد، الثلاثاء، الخميس", "Available: Sunday, Tuesday, Thursday")}
                        </span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform" style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
                          {t("احجز الآن", "Book Now")}
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Back to Home Button */}
            <div className="text-center">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 transition-all hover:shadow-lg"
                style={{ 
                  borderColor: "rgb(20, 80, 92)", 
                  color: "rgb(20, 80, 92)",
                  fontSize: "0.95rem", 
                  fontWeight: 600 
                }}
              >
                {t("العودة للرئيسية", "Back to Home")}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
    </Reveal>
  )
}
