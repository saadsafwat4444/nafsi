"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ChevronLeft } from "lucide-react"
import { useAppContext } from "../context/AppContext"
import { specialists } from "../Appoinment/page"


interface SpecialistsSectionProps {
  serviceId: string
}

  

  // Service to specialists mapping
  const serviceSpecialists: Record<string, string[]> = {
    anxiety: ["t1", "t3", "t5"], // Anxiety specialists (t1: Anxiety & Stress, t3: anxiety, t5: anxiety)
    depression: ["t1", "t2", "t6"], // Depression specialists (t1: depression, t2: depression, t6: depression)
    family: ["t2", "t4"], // Family & Relationships specialists (t2: relationships, t4: family-therapy)
    children: ["t5"], // Child specialists (t5: children, behavioral)
    sleep: ["t1"], // Sleep specialists (t1: sleep)
    selfdev: ["t3", "t6"], // Self-Development specialists (t3: self-development, t6: burnout)
    addiction: ["t2", "t6"], // Addiction specialists (t2: addiction, t6: addiction)
    relationships: ["t2", "t4"], // Relationships specialists (t2: relationships, t4: family-therapy)
    anger: ["t4"], // Anger Management specialists (t4: anger, family-therapy)
  };

export default function SpecialistsSection({ serviceId }: SpecialistsSectionProps) {
  const context = useAppContext()
  if (!context) return null
  const { lang, t } = context

  // Filter specialists based on serviceId
  const specialistIds = serviceSpecialists[serviceId] || []
  const filteredSpecialists = specialists.filter(specialist => 
    specialistIds.includes(specialist.id)
  )

  if (filteredSpecialists.length === 0) {
    return null
  }

  return (
    <div className="rounded-2xl border p-6" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="flex items-center justify-between mb-5">
        <h2 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
          {t("المختصون في هذه الخدمة", "Specialists for this Service")}
        </h2>
        <Link className="flex items-center gap-1" href="/appointments" style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "rgb(20, 80, 92)" }}>
          {t("شاهد الكل", "View All")}
          <ChevronLeft size={12} />
        </Link>
      </div>
      <div className="space-y-3">
        {filteredSpecialists.map((specialist) => (
          <Link key={specialist.id} className="block" href={`/specialist/${specialist.id}`}>
            <div className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md group" style={{ borderColor: "rgb(228, 234, 236)", backgroundColor: "rgb(250, 252, 252)" }}>
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2" style={{ borderColor: "rgb(232, 238, 240)" }}>
                  <Image
                    src={specialist.image}
                    alt={specialist.name[lang as 'ar' | 'en']}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                {specialist.rating && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white" style={{ backgroundColor: "rgb(34, 197, 94)" }}></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 style={{ fontFamily: "\"Noto Kufi Arabic\", sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "rgb(12, 46, 52)" }}>
                  {specialist.name[lang as 'ar' | 'en']}
                </h4>
                <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.72rem", color: "rgb(138, 154, 158)" }}>
                  {specialist.specialty[lang as 'ar' | 'en']}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="flex items-center gap-1">
                    <Star size={10} className="fill-[#f0a060] text-[#f0a060]" />
                    <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "rgb(212, 144, 58)" }}>
                      {specialist.rating}
                    </span>
                  </span>
                  <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.68rem", color: "rgb(170, 187, 190)" }}>
                    {specialist.reviews} {t("مراجعة", "reviews")}
                  </span>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "rgb(20, 80, 92)" }}>
                <ChevronLeft size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
