"use client"

import { useState, use } from "react"
import { useAppContext } from "../../context/AppContext"
import Link from "next/link"
import Image from "next/image"
import Reveal from "../../components/Reveal"
import { Search, BookOpen, Sparkles, Clock, Calendar, ArrowLeft, Share2, Heart, BookmarkPlus, User } from "lucide-react"
import { articles } from "../page"

 

 

export default function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const context = useAppContext()
  if (!context) return null
  const { lang, t } = context

  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const article = articles.find(a => a.id === resolvedParams.id)

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F4EDE4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif" }}>
            {t("المقال غير موجود", "Article not found")}
          </h1>
          <Link 
            href="/blog"
            className="text-[#4A9882] hover:text-[#3d8570] transition-colors"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            {t("العودة للمدونة", "Back to Blog")}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <Reveal>
      <section dir="rtl" className="min-h-screen bg-[#F4EDE4] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[#4A9882] hover:text-[#3d8570] transition-colors"
              style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.85rem", fontWeight: 600 }}
            >
              <ArrowLeft size={16} />
              {t("العودة للمقالات", "Back to Articles")}
            </Link>
          </div>

          {/* Article Header */}
          <div>
            {/* Category Badge */}
            <div 
              className="inline-block px-3 py-1 rounded-full text-white mb-4"
              style={{ 
                backgroundColor: article.categoryColor, 
                fontFamily: "Cairo, sans-serif", 
                fontSize: "0.75rem", 
                fontWeight: 600 
              }}
            >
              {article.category[lang as 'ar' | 'en']}
            </div>

            {/* Article Title */}
            <h1 
              className="mb-4"
              style={{ 
                fontFamily: "\"Noto Kufi Arabic\", sans-serif", 
                fontSize: "clamp(1.4rem, 3vw, 2rem)", 
                fontWeight: 700, 
                lineHeight: 1.7, 
                color: "rgb(26, 26, 26)" 
              }}
            >
              {article.title[lang as 'ar' | 'en']}
            </h1>

            {/* Article Meta */}
            <div className="flex items-center gap-5 mb-6">
              <div className="flex items-center gap-1.5 text-[#aaa]">
                <User size={13} />
                <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.8rem" }}>
                  {article.author[lang as 'ar' | 'en']}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#aaa]">
                <Calendar size={13} />
                <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.8rem" }}>
                  {article.date}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#aaa]">
                <Clock size={13} />
                <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.8rem" }}>
                  {article.readTime} {t("دقائق قراءة", "minutes read")}
                </span>
              </div>
            </div>
  </div>
            {/* Article Image */}
        
         <div className="mb-8 flex justify-center">
  <div className="relative w-24 h-24 md:w-300 md:h-90 rounded-2xl overflow-hidden">
    <Image
      src={article.image}
      alt={article.title[lang as "ar" | "en"]}
      fill
      className="object-cover"
    />
  </div>
</div>

          {/* Article Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#e8e0d4]/60 mb-8">
            {/* Excerpt */}
            <p 
              className="mb-6 pb-6 border-b border-[#f0ebe3]"
              style={{ 
                fontFamily: "Cairo, sans-serif", 
                fontSize: "1.05rem", 
                lineHeight: 2, 
                color: "rgb(74, 152, 130)", 
                fontWeight: 500 
              }}
            >
              {article.excerpt[lang as 'ar' | 'en']}
            </p>

            {/* Article Content */}
            <div className="space-y-5">
              {article.content[lang as 'ar' | 'en'].split('\n').map((paragraph, index) => (
                <p 
                  key={index}
                  style={{ 
                    fontFamily: "Cairo, sans-serif", 
                    fontSize: "0.95rem", 
                    lineHeight: 2.1, 
                    color: "rgb(85, 85, 85)" 
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Professional Support CTA */}
          <div className="bg-[#4A9882]/8 rounded-2xl p-6 border border-[#4A9882]/15 text-center">
            <p 
              className="mb-3"
              style={{ 
                fontFamily: "\"Noto Kufi Arabic\", sans-serif", 
                fontSize: "1rem", 
                fontWeight: 600, 
                color: "rgb(26, 26, 26)" 
              }}
            >
              {t("هل تحتاج دعم متخصص؟", "Do you need professional support?")}
            </p>
            <p 
              className="mb-5"
              style={{ 
                fontFamily: "Cairo, sans-serif", 
                fontSize: "0.85rem", 
                color: "rgb(136, 136, 136)" 
              }}
            >
              {t("المقالات مفيدة، لكن احيانًا تحتاج لشخص متخصص يساعدك.", "Articles are helpful, but sometimes you need a specialist to help you.")}
            </p>
            <Link 
              href="/questions"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4A9882] text-white rounded-full hover:bg-[#3d8570] transition-colors"
              style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.9rem", fontWeight: 600 }}
            >
              {t("ابدأ التقييم الآن", "Start Assessment Now")}
              <ArrowLeft size={15} />
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
