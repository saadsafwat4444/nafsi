"use client"
import Link from "next/link";
import { useAppContext } from "../context/AppContext";

export default function Footer() {
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  return (
    <footer dir={lang === "ar" ? "rtl" : "ltr"}
     className="bg-white border-t border-[#e8eef0]">
      <div className="max-w-6xl p-30">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-teal-500/10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-700"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <span className="text-[1.15rem] font-bold text-[#0c2e34]">
                {t("نفسي", "Nafsi")}
              </span>
            </div>

            <p className="mb-5 text-xs leading-6 text-gray-400">
              {t("منصة عربية متخصصة في الصحة النفسية. نحن نربطك بالأخصائي المناسب في بيئة آمنة ومحفوظة.", "An Arabic platform specialized in mental health. We connect you with the right specialist in a safe, confidential environment.")}
            </p>

            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span>hello@nafsi.care</span>
              </div>
              <div className="flex items-center gap-2">
                <span dir="ltr">+966 50 000 0000</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 text-xs font-bold text-[#0c2e34]">{t("المنصه","Platform")}</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/assessment">{t("تقييم ذكي", "Smart Assessment")}</Link></li>
              <li><Link href="/appointments">{t("المواعيد", "Appointments")}</Link></li>
              <li><Link href="/services">{t("الخدمات", "Services")}</Link></li>
              <li><Link href="/appointments">{t("الأخصائيون", "Specialists")}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-xs font-bold text-[#0c2e34]">{t("الدعم","Support")}</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/">{t("الأسئلة الشائعة", "FAQ")}</Link></li>
              <li><Link href="/contact">{t("اتصل بنا", "Contact")}</Link></li>
              <li><Link href="/">{t("مركز المساعدة", "Help Center")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-bold text-[#0c2e34]">{t("الشركه","Company")}</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/">{t("عن", "About Us")}</Link></li>
              <li><Link href="/">{t("فريقنا", "Our Team")}</Link></li>
              <li><Link href="/">{t("الشراكات", "Partnerships")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-bold text-[#0c2e34]">{t("قانوني","Legal")}</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/">{t("سياسة الخصوصية", "Privacy Policy")}</Link></li>
              <li><Link href="/">{t("الشروط والأحكام", "Terms & Conditions")}</Link></li>
              <li><Link href="/">{t("حماية البيانات", "Data Protection")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#e8eef0] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-300">
            {t("© 2026 نفسي. جميع الحقوق محفوظة.", "© 2026 Nafsi. All Rights Reserved.")}
          </p>

          <div className="flex items-center gap-3">
            {["Twitter", "Instagram", "YouTube", "TikTok"].map((name, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 hover:scale-110 transition"
                aria-label={name}
              >
                <span className="text-gray-400 text-[10px]">{name[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}