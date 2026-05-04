"use client"

 import { createContext, useContext, useEffect, useState } from "react";
 

const AppContext=createContext<{ lang: string; setLang: (lang: string) => void; t: (ar: string, en: string) => string } | null>(null);


export function AppProvider({ children }: { children: React.ReactNode }) {
      const [lang, setLang] = useState("ar");
        useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLang(savedLang);
  }, []);
   useEffect(() => {
    localStorage.setItem("lang", lang);

    // RTL / LTR
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
    const t = (ar: string, en: string) => (lang === "ar" ? ar : en);

      
      return (
        <AppContext.Provider value={{ lang, setLang, t }}>
          {children}
        </AppContext.Provider>
      );
    
}
 export function useAppContext() {
    return useContext(AppContext);
    }