"use client"

import React, { useState } from "react"
import { useAppContext } from "../context/AppContext"
import Link from "next/link"
import Image from "next/image"
import Reveal from "../components/Reveal"
import { LucideIcon } from "lucide-react"
import { 
  Heart, 
  Calendar, 
  Sparkles, 
  Brain, 
  Users, 
  Lightbulb, 
  ShieldAlert, 
  Baby, 
  Moon, 
  Flame,
  Clock,
  UserCheck,
  Star,
  ChevronLeft,
  ArrowRight
} from "lucide-react"

interface Service {
  
  id: string
  category: string
  title: { ar: string; en: string }
  description: { ar: string; en: string }
  price: number
  color: string
  icon: LucideIcon
  image: string
  sessions: string
  specialists: string
  features: { ar: string; en: string }[]
}

export const services: Service[] = [
    {
      id: "anxiety",
      category: "therapy",
      title: { ar: "علاج القلق والتوتر", en: "Anxiety & Stress Treatment" },
      description: { ar: "برامج متخصصة للتعامل مع القلق المزمن واضطرابات التوتر", en: "Specialized programs for chronic anxiety and stress disorders" },
      price: 200,
      color: "#14505c",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1758273240631-59d44c8f5b66?w=800&q=80",
      sessions: "8-12 جلسة",
      specialists: "2 مختص",
      features: [
        { ar: "جلسات فردية مخصصة", en: "Individual customized sessions" },
        { ar: "تقنيات CBT المتقدمة", en: "Advanced CBT techniques" },
        { ar: "تمارين استرخاء وتأمل", en: "Relaxation and meditation exercises" }
      ],
     },
    {
      id: "depression",
      category: "therapy",
      title: { ar: "علاج الاكتئاب", en: "Depression Treatment" },
      description: { ar: "خطط علاجية شاملة للتغلب على الاكتئاب واستعادة التوازن", en: "Comprehensive treatment plans to overcome depression and restore balance" },
      price: 200,
      color: "#c4915e",
      icon: Heart,
      image: "	https://images.unsplash.com/photo-1641352742391-f3372f14254b?w=800&q=80",
      sessions: "12-16 جلسة",
      specialists: "3 مختص",
      features: [
        { ar: "تشخيص دقيق وشامل", en: "Accurate and comprehensive diagnosis" },
        { ar: "علاج معرفي سلوكي", en: "Cognitive behavioral therapy" },
        { ar: "متابعة مستمرة", en: "Continuous follow-up" }
      ],
     },
    {
      id: "family",
      category: "relationships",
      title: { ar: "العلاج الأسري والزوجي", en: "Family & Marriage Therapy" },
      description: { ar: "جلسات عائلية وزوجية لحل النزاعات وتحسين التواصل", en: "Family and couples sessions to resolve conflicts and improve communication" },
      price: 300,
      color: "#7b8eb5",
      icon: Users,
      image: "https://images.unsplash.com/photo-1772412922143-fb66cf1fe7d1?w=800&q=80",
      sessions: "8-12 جلسة",
      specialists: "2 مختص",
      features: [
        { ar: "جلسات فردية وجماعية", en: "Individual and group sessions" },
        { ar: "حل نزاعات متقدم", en: "Advanced conflict resolution" },
        { ar: "تطوير مهارات التواصل", en: "Communication skills development" }
      ],
     },
    {
      id: "selfdev",
      category: "personal",
      title: { ar: "تطوير الذات والكوتشينج", en: "Self Development & Coaching" },
      description: { ar: "برامج تدريبية لتحسين الثقة بالنفس وتحقيق الأهداف", en: "Training programs to improve self-confidence and achieve goals" },
      price: 180,
      color: "#9b7fb8",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1758274538250-bf28b2e369da?w=800&q=80",
      sessions: "6-8 جلسات",
      specialists: "1 مختص",
      features: [
        { ar: "كوتشينج احترافي معتمد", en: "Certified professional coaching" },
        { ar: "خطط عمل مخصصة", en: "Customized action plans" },
        { ar: "تتبع تقدم مستمر", en: "Continuous progress tracking" }
      ],
     },
    {
      id: "addiction",
      category: "therapy",
      title: { ar: "علاج الإدمان", en: "Addiction Treatment" },
      description: { ar: "برامج متخصصة للتعافي من الإدمان مع دعم شامل", en: "Specialized programs for addiction recovery with comprehensive support" },
      price: 250,
      color: "#e07070",
      icon: ShieldAlert,
      image: "https://images.unsplash.com/photo-1698757264929-409ff213e807?w=800&q=80",
      sessions: "16-24 جلسة",
      specialists: "2 مختص",
      features: [
        { ar: "برنامج تعافي متكامل", en: "Integrated recovery program" },
        { ar: "دعم نفسي 24/7", en: "24/7 psychological support" },
        { ar: "خطة وقاية من الانتكاسة", en: "Relapse prevention plan" }
      ],
     },
    {
      id: "children",
      category: "personal",
      title: { ar: "استشارات الأطفال والمراهقين", en: "Children & Adolescents Counseling" },
      description: { ar: "برامج متخصصة للأطفال والمراهقين لمعالجة القلق والسلوك", en: "Specialized programs for children and adolescents to address anxiety and behavior" },
      price: 220,
      color: "#e0976b",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1509781827353-fb95c262fc40?w=800&q=80",
      sessions: "8-12 جلسة",
      specialists: "1 مختص",
      features: [
        { ar: "أخصائيون متخصصون بالأطفال", en: "Child-specialized professionals" },
        { ar: "لعب علاجي وفن", en: "Play therapy and art" },
        { ar: "إشراك الأهل", en: "Parent involvement" }
      ],
     },
    {
      id: "sleep",
      category: "personal",
      title: { ar: "علاج اضطرابات النوم", en: "Sleep Disorders Treatment" },
      description: { ar: "برامج لعلاج الأرق واضطرابات النوم بتقنيات CBT-I", en: "Programs for insomnia and sleep disorders using CBT-I techniques" },
      price: 200,
      color: "#7b8eb5",
      icon: Moon,
      image: "https://images.unsplash.com/photo-1700168333952-3d44a3f427af?w=800&q=80",
      sessions: "6-8 جلسات",
      specialists: "1 مختص",
      features: [
        { ar: "تقنيات CBT-I المتقدمة", en: "Advanced CBT-I techniques" },
        { ar: "تحسين عادات النوم", en: "Sleep habits improvement" },
        { ar: "تتبع أنماط النوم", en: "Sleep pattern tracking" }
      ],
     },
    {
      id: "anger",
      category: "relationships",
      title: { ar: "إدارة الغضب والضغط النفسي", en: "Anger Management & Stress" },
      description: { ar: "تعلم مهارات إدارة الغضب والتعامل مع الضغوط", en: "Learn anger management skills and stress coping" },
      price: 190,
      color: "#c4915e",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1758273240403-052b3c99f636?w=800&q=80",
      sessions: "6-10 جلسة",
      specialists: "1 مختص",
      features: [
        { ar: "تحكم في الغضب والانفعالات", en: "Control anger and emotions" },
        { ar: "مهارات تواصل فعال", en: "Effective communication skills" },
        { ar: "إدارة ضغوط العمل", en: "Work stress management" }
      ],
     }
  ]



export default function Services() {
  const context = useAppContext()
  if (!context) return null
  const { lang, setLang, t } = context

  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: { ar: "الكل", en: "All" } },
    { id: "therapy", name: { ar: "علاج نفسي", en: "Therapy" } },
    { id: "relationships", name: { ar: "علاقات", en: "Relationships" } },
    { id: "personal", name: { ar: "نمو شخصي", en: "Personal Growth" } }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === "all" || service.category === selectedCategory
  )


  return (
    <Reveal>
      <section dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 transition-colors" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
              <ArrowRight size={16} />
              {t("العودة للرئيسية", "Back to Home")}
            </Link>
          </div>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} style={{ color: "rgb(20, 80, 92)" }} />
              <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "rgb(20, 80, 92)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {t("الخدمات العلاجية", "Therapeutic Services")}
              </span>
            </div>
            <h1 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 700, color: "rgb(12, 46, 52)", lineHeight: 1.5 }}>
              {t("كل شخص يمر بتجربة مختلفة", "Every person goes through a different experience")}
            </h1>
            <p className="mt-3 max-w-2xl" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.92rem", lineHeight: 2, color: "rgb(138, 154, 158)" }}>
              {t("نقدم خدمات علاجية متنوعة تناسب احتياجك، مع مختصين معتمدين وبرامج مبنية على أسس علمية. اختر الخدمة المناسبة لك واكتشف التفاصيل.", "We offer diverse therapeutic services to suit your needs, with certified specialists and scientifically-based programs. Choose the right service for you and discover the details.")}
            </p>
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="px-4 py-2.5 rounded-xl border transition-all"
                style={{
                  backgroundColor: selectedCategory === category.id ? "rgb(20, 80, 92)" : "rgb(255, 255, 255)",
                  borderColor: selectedCategory === category.id ? "rgb(20, 80, 92)" : "rgb(228, 234, 236)",
                  fontFamily: "Cairo, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: selectedCategory === category.id ? "rgb(255, 255, 255)" : "rgb(122, 138, 142)"
                }}
              >
                {category.name[lang as 'ar' | 'en']}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-8 px-5 py-4 rounded-2xl border" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(250, 252, 252)" }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(20, 80, 92, 0.063)" }}>
                <Sparkles size={14} style={{ color: "rgb(20, 80, 92)" }} />
              </div>
              <div>
                <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>8</p>
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", color: "rgb(170, 187, 190)" }}>
                  {t("خدمة متخصصة", "Specialized Service")}
                </p>
              </div>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: "rgb(228, 234, 236)" }}></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(20, 80, 92, 0.063)" }}>
                <UserCheck size={14} style={{ color: "rgb(20, 80, 92)" }} />
              </div>
              <div>
                <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>6+</p>
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", color: "rgb(170, 187, 190)" }}>
                  {t("مختص معتمد", "Certified Specialist")}
                </p>
              </div>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: "rgb(228, 234, 236)" }}></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(20, 80, 92, 0.063)" }}>
                <Star size={14} style={{ color: "rgb(20, 80, 92)" }} />
              </div>
              <div>
                <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>4.9</p>
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", color: "rgb(170, 187, 190)" }}>
                  {t("متوسط التقييم", "Average Rating")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {filteredServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={service.id} href={`/service/${service.id}`} className="block group cursor-pointer">
                  <div className="rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(255, 255, 255)" }}>
                    <div className="relative h-[180px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title[lang as 'ar' | 'en']}
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                        <Icon size={18} style={{ color: service.color }} />
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight size={14} className="text-white" />
                      </div>
                      <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg backdrop-blur-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                        <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(138, 154, 158)" }}>
                          {t("من", "From")}
                        </span>
                        <span style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.95rem", fontWeight: 700, color: service.color }}>
                          {service.price}
                        </span>
                        <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(138, 154, 158)" }}>
                          {t("ر.س", "SAR")}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                          {service.title[lang as 'ar' | 'en']}
                        </h3>
                        <span className="px-2 py-0.5 rounded-md shrink-0" style={{ backgroundColor: `${service.color}15`, fontFamily: "Cairo, sans-serif", fontSize: "0.6rem", fontWeight: 700, color: service.color }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", lineHeight: 1.8, color: "rgb(138, 154, 158)" }}>
                        {service.description[lang as 'ar' | 'en']}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg" style={{ backgroundColor: "rgb(244, 246, 247)", fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(122, 138, 142)" }}>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }}></div>
                            {feature[lang as 'ar' | 'en']}
                          </span>
                        ))}
                        <span className="px-2.5 py-1 rounded-lg" style={{ backgroundColor: `${service.color}15`, fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", fontWeight: 600, color: service.color }}>
                          +3
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgb(240, 243, 244)" }}>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                            <Clock size={12} />
                            {service.sessions}
                          </span>
                          <span className="flex items-center gap-1.5" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(170, 187, 190)" }}>
                            <UserCheck size={12} />
                            {service.specialists}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
                          {t("التفاصيل", "Details")}
                          <ChevronLeft size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Assessment CTA */}
          <div className="rounded-2xl border p-6 mb-8" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(250, 252, 252)" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(20, 80, 92, 0.063)" }}>
                  <Brain size={22} style={{ color: "rgb(20, 80, 92)" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "rgb(12, 46, 52)", marginBottom: "3px" }}>
                    {t("مش متأكد أيه الخدمة المناسبة؟", "Not sure which service is right for you?")}
                  </p>
                  <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.82rem", color: "rgb(138, 154, 158)", lineHeight: 1.7 }}>
                    {t("ابدأ بالتقييم الذكي المجاني وسنوجهك للخدمة الأنسب.", "Start with the free smart assessment and we'll guide you to the most suitable service.")}
                  </p>
                </div>
              </div>
              <Link href="/assessment" className="px-6 py-3 text-white rounded-xl transition-all hover:shadow-lg shrink-0 flex items-center gap-2" style={{ backgroundColor: "rgb(20, 80, 92)", fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>
                {t("ابدأ التقييم", "Start Assessment")}
                <ChevronLeft size={14} />
              </Link>
            </div>
          </div>

         
          
          {/* View All Appointments */}
          <div className="text-center">
            <Link href="/Appoinment" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white transition-all hover:shadow-lg" style={{ backgroundColor: "rgb(20, 80, 92)", fontFamily: "Cairo, sans-serif", fontSize: "0.88rem", fontWeight: 600 }}>
              <Calendar size={16} />
              {t("شاهد جميع المواعيد المتاحة", "View All Available Appointments")}
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
