"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { useAppContext } from "../context/AppContext";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const context = useAppContext();
  if (!context) return null;
  const { lang, setLang, t } = context;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
    setIsSubmitted(true);
  }
function handleClick() {
  setShowMessage(true);
  
  }

  function handleSendAnother() {
    setIsSubmitted(false);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact-v2" className="bg-white">
      <Reveal>
      <div className="max-w-[1280px] p-30  ">
        <div className="grid grid-cols-1  lg:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(12,46,52,0.12)]">
          {/* Left Side */}
          <div className="relative py-12 px-10 bg-[#0c2e34] overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[radial-gradient(circle,rgba(20,80,92,0.08),transparent_70%)]" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(20,80,92,0.07),transparent_70%)]" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 bg-[rgba(20,80,92,0.12)] text-[#14505c] text-[0.72rem] font-bold">
                <Send size={11} /> {t("تواصل معنا", "Get in Touch")}
              </span>

              <h2 className="text-white text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-tight">
                {t("نحب أن نسمع منك", "We'd Love to Hear from You")}
              </h2>

              <p className="mt-4 max-w-sm text-[rgba(255,255,255,0.4)] text-sm leading-7">
                {t("سواء كان لديك سؤال عن الخدمات أو تحتاج مساعدة في الحجز — فريقنا هنا لمساعدتك.", "Whether you have a question about services or need help booking — our team is here for you.")}
              </p>
            </div>

            {/* Contact Items */}
            <div className="relative z-10 mt-10 space-y-3">
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t("واتساب", "WhatsApp")}</p>
                  <p className="text-white/40 text-xs">+966 50 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#14505c]/10 text-[#14505c]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t("البريد الإلكتروني", "Email")}</p>
                  <p className="text-white/40 text-xs">support@nafsi.care</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg text-orange-400 bg-orange-400/10">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t("الدردشة المباشرة", "Live Chat")}</p>
                  <p className="text-white/40 text-xs">{t("متصل الآن", "Online Now")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg text-purple-400 bg-purple-400/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t("الموقع", "Location")}</p>
                  <p className="text-white/40 text-xs">{t("الرياض، المملكة العربية السعودية", "Riyadh, Saudi Arabia")}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#14505c]/10 border border-[#14505c]/20">
              <p className="text-[#14505c] text-xs font-semibold mb-1">
                {t("ساعات الدعم", "Support Hours")}
              </p>
              <p className="text-white/40 text-xs leading-6">
                {t("السبت – الخميس: 9 ص – 11 م <br /> الجمعة: 2 م – 11 م", "Sat – Thu: 9 AM – 11 PM <br /> Fri: 2 PM – 11 PM")}
              </p>
            </div>
          </div>

          {/* Right Side */}
          {!isSubmitted ? (
          <div className="p-8 md:p-12 bg-white">
            <h3 className="text-[#0c2e34] text-lg font-bold">{t("أرسل لنا رسالة", "Send Us a Message")}</h3>
            <p className="mt-2 mb-8 text-sm text-[#8a9a9e]">
              {t("وسنرد عليك في أقرب وقت ممكن.", "And we'll get back to you as soon as possible.")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#0c2e34]">
                    {t("الاسم", "Name")}
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("اسمك", "Your name")}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-[#f7f3eb] border border-[#e8e0d4] text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2e34]">
                    {t("البريد الإلكتروني", "Email")}
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("example@email.com", "example@email.com")}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-[#f7f3eb] border border-[#e8e0d4] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#0c2e34]">
                  {t("كيف يمكننا مساعدتك؟", "How can we help?")}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder={t("اكتب رسالتك هنا...", "Write your message here...")}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-[#f7f3eb] border border-[#e8e0d4] text-sm resize-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#14505c] text-white text-sm font-semibold hover:shadow-lg"
                >
                  <Send size={14} /> {t("أرسل رسالة", "Send Message")}
                </button>
                

                <span className="text-[11px] text-gray-400">
                  {t("الرد خلال 24 ساعة", "Reply within 24 hours")}
                </span>
              </div>
            </form>
          </div>
          ) : (
              

                 <div className="flex flex-col items-center justify-center text-center py-16">
      
      {/* Icon Circle */}
      <div className="w-24 h-24 rounded-full bg-[#f0f3f4] flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-[#14505c]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-[#0c2e34]">
        {t("تم الإرسال بنجاح!", "Sent Successfully!")}
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-sm text-[#8a9a9e]">
        {t("شكراً لتواصلك معنا. سنرد قريباً.", "Thanks for reaching out. We'll reply soon.")}
      </p>

      {/* Button */}
      <button
        onClick={handleSendAnother}
        className="mt-8 px-6 py-3 rounded-xl bg-[#14505c] text-white text-sm font-semibold hover:shadow-lg transition"
      >
        {t("أرسل رسالة أخرى", "Send Another Message")}
      </button>
    </div>
            )}
      
      </div>
      </div>
      </Reveal>
    </section>
  );
}
