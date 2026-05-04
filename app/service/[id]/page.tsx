"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, UserCheck, Star, Calendar, Brain, Check, ChevronLeft, Shield, Play, Heart, Users, Lightbulb } from "lucide-react"
import Reveal from "../../components/Reveal"
import SpecialistsSection from "../../components/SpecialistsSection"
import { useAppContext } from "../../context/AppContext"
import { services } from "@/app/Services/page"

interface Service {
  id: string
  category: string
  title: { ar: string; en: string }
  description: { ar: string; en: string }
  price: number
  color: string
  icon: any
  image: string
  sessions: string
  specialists: string
  features: { ar: string; en: string }[]
}

 

export default function ServicePage({params}: {params: Promise<{ id: string }>}) {
  const { id } = React.use(params);
  const context = useAppContext()
  if (!context) return null
  const { lang, t } = context
  
 const [book,isBooked]=useState(false);
    function handleService(){
      isBooked(true)
    }
  const service = services.find(s => s.id === id)
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link href="/Services" className="text-blue-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <Reveal>
      <section dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2">
            <Link href="/" className="transition-colors" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.78rem", color: "rgb(170, 187, 190)" }}>
              {t("الرئيسية", "Home")}
            </Link>
            <span style={{ color: "rgb(208, 216, 218)" }}>/</span>
            <Link href="/Services" className="transition-colors" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.78rem", color: "rgb(170, 187, 190)" }}>
              {t("الخدمات", "Services")}
            </Link>
            <span style={{ color: "rgb(208, 216, 218)" }}>/</span>
            <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
              {service.title[lang as 'ar' | 'en']}
            </span>
          </div>

          {/* Header Image */}
          <div className="rounded-2xl overflow-hidden border mb-8" style={{ borderColor: "rgb(228, 234, 236)" }}>
            <div className="relative h-[260px] md:h-[320px] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title[lang as 'ar' | 'en']}
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                    <Brain size={22} style={{ color: "rgb(20, 80, 92)" }} />
                  </div>
                  <span className="px-3 py-1 rounded-lg backdrop-blur-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "rgb(255, 255, 255)" }}>
                    01
                  </span>
                </div>
                <h1 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "rgb(255, 255, 255)", lineHeight: 1.5 }}>
                  {service.title[lang as 'ar' | 'en']}
                </h1>
                <p className="mt-1 max-w-xl" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.7 }}>
                  {service.description[lang as 'ar' | 'en']}
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Program */}
              <div className="rounded-2xl border p-6" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(255, 255, 255)" }}>
                <h2 className="mb-4" style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                  {t("عن البرنامج", "About the Program")}
                </h2>
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.88rem", lineHeight: 2.1, color: "rgb(106, 122, 126)" }}>
                  {t("نقدم برنامج علاجي شامل مبني على أحدث الأبحاث العلمية في مجال علاج القلق. يشمل البرنامج تقنيات العلاج المعرفي السلوكي (CBT) وتمارين الاسترخاء والتأمل، مع متابعة مستمرة من مختصين معتمدين.", "We offer a comprehensive therapeutic program based on the latest scientific research in anxiety treatment. The program includes Cognitive Behavioral Therapy (CBT) techniques, relaxation and meditation exercises, with continuous follow-up from certified specialists.")}
                </p>
              </div>

              {/* Program Features */}
              <div className="rounded-2xl border p-6" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(255, 255, 255)" }}>
                <h2 className="mb-5" style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                  {t("ما يتضمنه البرنامج", "What the Program Includes")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(250, 252, 252)", border: "1px solid rgb(240, 243, 244)" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(20, 80, 92, 0.063)" }}>
                        <Check size={13} style={{ color: "rgb(20, 80, 92)" }} />
                      </div>
                      <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", color: "rgb(90, 106, 110)" }}>
                        {feature[lang as 'ar' | 'en']}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialists Section */}
              <SpecialistsSection serviceId={service.id} />

              {/* FAQ Section */}
              <div className="rounded-2xl border p-6" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(255, 255, 255)" }}>
                <h2 className="mb-5" style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                  {t("أسئلة شائعة", "Frequently Asked Questions")}
                </h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl" style={{ backgroundColor: "rgb(250, 252, 252)", border: "1px solid rgb(240, 243, 244)" }}>
                    <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "rgb(12, 46, 52)", marginBottom: "6px" }}>
                      {t("هل الجلسة الأولى مجانية؟", "Is the first session free?")}
                    </p>
                    <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", lineHeight: 1.9, color: "rgb(122, 138, 142)" }}>
                      {t("نعم، نقدم استشارة أولية مجانية لمدة 15 دقيقة لتقييم احتياجاتك وشرح البرنامج.", "Yes, we offer a free 15-minute initial consultation to assess your needs and explain the program.")}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: "rgb(250, 252, 252)", border: "1px solid rgb(240, 243, 244)" }}>
                    <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "rgb(12, 46, 52)", marginBottom: "6px" }}>
                      {t("هل الجلسات أونلاين أم حضوري؟", "Are sessions online or in-person?")}
                    </p>
                    <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", lineHeight: 1.9, color: "rgb(122, 138, 142)" }}>
                      {t("نوفر الخيارين — جلسات فيديو عالية الجودة أو جلسات حضورية في عيادتنا.", "We provide both options — high-quality video sessions or in-person sessions at our clinic.")}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: "rgb(250, 252, 252)", border: "1px solid rgb(240, 243, 244)" }}>
                    <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "rgb(12, 46, 52)", marginBottom: "6px" }}>
                      {t("كم مدة البرنامج العلاجي؟", "How long is the therapeutic program?")}
                    </p>
                    <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", lineHeight: 1.9, color: "rgb(122, 138, 142)" }}>
                      {t("البرنامج يتراوح بين 8-12 جلسة حسب حالتك، ويتم تعديله بناءً على تقدمك.", "The program ranges between 8-12 sessions depending on your condition, and is adjusted based on your progress.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="rounded-2xl border p-6 sticky top-28" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(255, 255, 255)" }}>
                <div className="h-1 rounded-full mb-5" style={{ backgroundColor: "rgb(20, 80, 92)" }}></div>
                <div className="text-center mb-5">
                  <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(170, 187, 190)", marginBottom: "4px" }}>
                    {t("يبدأ من", "Starts from")}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "2.2rem", fontWeight: 700, color: "rgb(20, 80, 92)" }}>
                      {service.price}
                    </span>
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", color: "rgb(138, 154, 158)" }}>
                      {t("ر.س / جلسة", "SAR / session")}
                    </span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(250, 252, 252)" }}>
                    <Clock size={15} style={{ color: "rgb(170, 187, 190)" }} />
                    <div>
                      <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(170, 187, 190)" }}>
                        {t("مدة البرنامج", "Program Duration")}
                      </p>
                      <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                        {service.sessions}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(250, 252, 252)" }}>
                    <UserCheck size={15} style={{ color: "rgb(170, 187, 190)" }} />
                    <div>
                      <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(170, 187, 190)" }}>
                        {t("المختصون", "Specialists")}
                      </p>
                      <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                        {t("2 مختص متاح", "2 specialists available")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "rgb(250, 252, 252)" }}>
                    <Play size={15} style={{ color: "rgb(170, 187, 190)" }} />
                    <div>
                      <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(170, 187, 190)" }}>
                        {t("نوع الجلسة", "Session Type")}
                      </p>
                      <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgb(12, 46, 52)" }}>
                        {t("أونلاين أو حضوري", "Online or in-person")}
                      </p>
                    </div>
                  </div>
                </div>
                {!book?(
                <button onClick={handleService} className="w-full py-3.5 rounded-xl text-white transition-all hover:shadow-lg flex items-center justify-center gap-2" style={{ backgroundColor: "rgb(20, 80, 92)", fontFamily: "Cairo, sans-serif", fontSize: "0.9rem", fontWeight: 600 }}>
                  <Calendar size={16} />
                  {t("احجز استشارة مجانية", "Book Free Consultation")}
                </button>
                )
:(
<div className="bg-[#f5f7f8] rounded-3xl p-8 text-center max-w-md mx-auto shadow-sm">
  
  {/* Icon */}
  <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-[#0c4b57] flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/1000/svg"
      className="w-8 h-8 text-[#0c4b57]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-3.618a1 1 0 010 1.414l-8.486 8.486a1 1 0 01-1.414 0L3.382 9.796a1 1 0 010-1.414l8.486-8.486a1 1 0 011.414 0l8.486 8.486z"
      />
    </svg>
  </div>

  {/* Title */}
  <h2 className="text-3xl font-bold text-[#0c4b57] mb-3">
    تم الحجز بنجاح!
  </h2>

  {/* Subtitle */}
  <p className="text-gray-500 text-lg">
    سنتواصل معك خلال 24 ساعة
  </p>

</div>
)
}
                <Link href="/Appoinment" className="w-full mt-3 py-3 rounded-xl border transition-all flex items-center justify-center gap-2" style={{ borderColor: "rgb(228, 234, 236)", fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
                  {t("شاهد المواعيد المتاحة", "View Available Appointments")}
                </Link>
                <div className="mt-5 pt-4 border-t space-y-2" style={{ borderColor: "rgb(240, 243, 244)" }}>
                  <div className="flex items-center gap-2">
                    <Shield size={11} style={{ color: "rgb(34, 197, 94)" }} />
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(138, 154, 158)" }}>
                      {t("استشارة أولى مجانية", "Free initial consultation")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={11} style={{ color: "rgb(34, 197, 94)" }} />
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(138, 154, 158)" }}>
                      {t("سرية تامة ومضمونة", "Complete confidentiality guaranteed")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={11} style={{ color: "rgb(34, 197, 94)" }} />
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(138, 154, 158)" }}>
                      {t("مختصون معتمدون", "Certified specialists")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16">
            <h2 className="mb-6" style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
              {t("خدمات أخرى قد تهمك", "Other Services That Might Interest You")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {services.filter(s => s.id !== id).slice(0, 3).map((relatedService) => {
                const getIcon = (categoryId: string) => {
                  switch (categoryId) {
                    case 'depression': return <Heart size={18} />;
                    case 'family': return <Users size={18} />;
                    case 'selfdev': return <Lightbulb size={18} />;
                    default: return <Brain size={18} />;
                  }
                };
                
                return (
                  <Link key={relatedService.id} className="block group" href={`/service/${relatedService.id}`}>
                    <div className="rounded-2xl border p-5 transition-all duration-300 hover:shadow-md" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(255, 255, 255)" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${relatedService.color}15` }}>
                          <div style={{ color: relatedService.color }}>
                            {getIcon(relatedService.id)}
                          </div>
                        </div>
                        <h3 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                          {relatedService.title[lang as 'ar' | 'en']}
                        </h3>
                      </div>
                      <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.78rem", lineHeight: 1.8, color: "rgb(138, 154, 158)" }}>
                        {relatedService.description[lang as 'ar' | 'en']}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                          {t("من", "From")} {relatedService.price} {t("ر.س", "SAR")}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
                          {t("التفاصيل →", "Details →")}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
