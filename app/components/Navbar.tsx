"use client";

import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_projects"), href: "/projects" },
    { name: t("nav_events"), href: "/events" },
    { name: t("nav_about"), href: "/about" },
  ];

  return (
    <nav className="w-full sticky top-0 px-6 py-4 md:px-12 lg:px-24 bg-white/80 backdrop-blur-md border-b-[0.5px] border-gray-100 z-100">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between relative z-50">

        {/* Left Side: Logos */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative shrink-0 transition-transform group-hover:scale-110 duration-300">
              <img
                src="/yyyLogo.png"
                alt="Logo"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <span className="font-extrabold text-[#0B132B] text-[26px] tracking-tight group-hover:text-[#F43F86] transition-colors duration-300">yyyazilim</span>
          </Link>

          {/* Vertical Divider */}
          <div className="hidden sm:block h-8 w-px bg-gray-200" />

          {/* Seal Logo */}
          <div className="hidden sm:block w-10 h-10 relative shrink-0">
            <img
              src="/UNILogo.png"
              alt="Seal"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-[#4A5568] uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#F43F86] transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F43F86] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side: Action Buttons & Language Switcher */}
        <div className="hidden lg:flex items-center gap-8 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-full border border-gray-100">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${
                language === "en" 
                  ? "bg-white text-[#F43F86] shadow-sm" 
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("tr")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${
                language === "tr" 
                  ? "bg-white text-[#F43F86] shadow-sm" 
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              TR
            </button>
          </div>

          <Link href="/join">
            <button className="cursor-pointer px-8 py-3.5 rounded-full bg-linear-to-r from-[#F43F86] to-[#E32B70] text-white text-[13px] font-bold tracking-[0.15em] hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-md shadow-pink-500/20 uppercase whitespace-nowrap">
              {t("nav_join")}
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Mobile Language Toggle (Simple) */}
          <button
            onClick={() => setLanguage(language === "en" ? "tr" : "en")}
            className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] font-black text-[#F43F86]"
          >
            {language === "en" ? "TR" : "EN"}
          </button>
          
          <button
            className="text-[#0B132B] p-2 relative z-50 transition-colors hover:text-[#F43F86]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-white w-full min-h-screen h-full z-9999 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col justify-center h-full px-10 gap-12">
          {/* Close button inside overlay for better mobile UX */}
          <button
            className="absolute top-6 right-6 text-[#0B132B] p-2 hover:text-[#F43F86] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-10 h-10" />
          </button>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between text-4xl font-black text-[#0B132B] transition-all duration-500 hover:text-[#F43F86] ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 100 + 150}ms` }}
              >
                {link.name}
                <ChevronRight className="w-8 h-8 text-gray-200" />
              </Link>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div
            className={`flex flex-col gap-6 transition-all duration-500 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: `${navLinks.length * 100 + 200}ms` }}
          >
            <div className="w-full h-px bg-gray-100 mb-2" />

            <Link href="/join" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="cursor-pointer w-full py-5 rounded-2xl bg-linear-to-r from-[#F43F86] to-[#E32B70] text-white text-[16px] font-black tracking-widest shadow-xl shadow-pink-500/30 uppercase">
                {t("nav_join")}
              </button>
            </Link>
          </div>
        </div>

        {/* Decorative element for mobile menu */}
        <div className="absolute bottom-10 left-10 text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
          © 2026 yyyazilim
        </div>
      </div>
    </nav>
  );
}
