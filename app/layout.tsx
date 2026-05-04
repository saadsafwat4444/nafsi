import type { Metadata } from "next";
import {  Lora, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

 

const arabicFont = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ar",
});

const englishFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-en",
});

export const metadata: Metadata = {
  title: "موقع علاج نفسي",
  description: "موقع علاج نفسي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${arabicFont.variable} ${englishFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <Navbar/>
          {children}
          <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}
