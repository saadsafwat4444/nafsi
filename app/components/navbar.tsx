
"use client"
import { Heart, Globe, Calendar, Menu } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Navbar() {
    const context = useAppContext();
    if (!context) return null;
    const pathname = usePathname();
    const isHome = pathname === "/"
    const { lang, setLang, t } = context;
  return (
   <nav
  dir={lang === "ar" ? "rtl" : "ltr"}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-[14px] ${
    isHome
      ? "border-b border-white/10"
      : "bg-white border-b border-gray-200 shadow-sm"
  }`}
  style={{
    backgroundColor: isHome
      ? "rgba(12, 46, 52, 0.8)"
      : "white",
  }}
>

      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        {/* Left side - Logo and Language */}
        <div className="flex items-center gap-3">
          {/* Language button next to logo */}
         
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10">
              <Heart size={15} className={`font-bold text-[1.15rem] ${isHome ? "text-white" : "text-gray-900"}`} />
            </div>
            <span className={`font-bold text-[1.15rem] ${isHome ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "Lora, serif" }}>
              {t("نفسي", "Nafsi")}
            </span>
          </Link>
        </div>

        

        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
  <Link
    href="/"
    className={isHome ? "text-white/60 hover:text-white transition" : (pathname === "/" ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 transition")}
  >
    {t("الرئيسية", "Home")}
  </Link>

  <Link
    href="/Appoinment"
    className={isHome ? "text-white/60 hover:text-white transition" : (pathname === "/Appoinment" ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 transition")}
  >
    {t("المختصون", "Specialists")}
  </Link>

  <Link
    href="/Services"
    className={isHome ? "text-white/60 hover:text-white transition" : (pathname === "/Services" ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 transition")}
  >
    {t("الخدمات", "Services")}
  </Link>

  <Link
    href="/blog"
    className={isHome ? "text-white/60 hover:text-white transition" : (pathname === "/blog" ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 transition")}
  >
    {t("المقالات", "Blog")}
  </Link>

  <Link
    href="/#about-v2"
    className={isHome ? "text-white/60 hover:text-white transition" : (pathname === "/about" ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 transition")}
    onClick={(e) => {
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById('about-v2')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }}
  >
    {t("من نحن", "About Us")}
  </Link>

  <Link
    href="/#contact-v2"
    className={isHome ? "text-white/60 hover:text-white transition" : (pathname === "/contact" ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 transition")}
    onClick={(e) => {
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById('contact-v2')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }}
  >
    {t("اتصل بنا", "Contact")}
  </Link>
</div>
  
        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
           <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition ${
              isHome 
                ? "border-white/20 bg-white/10 text-white/60 hover:bg-white/20" 
                : "border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Globe size={13} />
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          {/* CTA */}
          <Link
            href="/Appoinment"
            className="px-5 py-2 rounded-full flex items-center gap-2 text-white text-sm font-semibold"
            style={{ backgroundColor: "#14505c" }}
          >
            <Calendar size={14} />
            {t("احجز جلستك", "Book a Session")}
          </Link>

           
        </div>

        {/* Mobile menu */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}