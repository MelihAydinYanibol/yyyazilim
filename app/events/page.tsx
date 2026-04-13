"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { Calendar } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { TranslationKeys } from "../data/translations";

export default function EventsPage() {
  const { t } = useLanguage();

  const events: { id: number; titleKey: TranslationKeys; date: string; time: string; descKey: TranslationKeys; categoryKey: TranslationKeys; image: string; color: string }[] = [
    {
      id: 1,
      titleKey: "event_1_title",
      date: "OCT 24, 2024",
      time: "18:00",
      descKey: "event_1_desc",
      categoryKey: "event_cat_workshop",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      color: "bg-pink-500",
    },
    {
      id: 2,
      titleKey: "event_2_title",
      date: "NOV 12, 2024",
      time: "09:00",
      descKey: "event_2_desc",
      categoryKey: "event_cat_hackathon",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      color: "bg-teal-600",
    },
    {
      id: 3,
      titleKey: "event_3_title",
      date: "DEC 05, 2024",
      time: "18:30",
      descKey: "event_3_desc",
      categoryKey: "event_cat_social",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-200",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFC] max-w-screen overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 pb-40">
        {/* Header Section */}
        <AnimateOnScroll>
          <div className="flex flex-col items-start text-left mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#F43F86] text-[10px] font-extrabold tracking-widest uppercase mb-6">
              {t("events_hub")}
            </div>
            <h1 className="text-6xl md:text-[90px] font-black text-[#0B132B] leading-[0.9] tracking-tighter mb-8">
              Campus <span className="bg-linear-to-r from-[#F43F86] to-[#FCA21E] inline-block text-transparent bg-clip-text">Events</span>
            </h1>
            <p className="max-w-xl text-[#64748B] text-lg md:text-[20px] font-medium leading-relaxed">
              {t("events_desc")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <AnimateOnScroll key={event.id} delay={idx * 100}>
              <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col h-full group">
                
                {/* Image / Header Container */}
                <div className={`relative h-[280px] overflow-hidden ${event.categoryKey === 'event_cat_hackathon' ? 'bg-[#2D6A64]' : event.categoryKey === 'event_cat_social' ? 'bg-[#C1D6D1]' : ''}`}>
                  {event.categoryKey === 'event_cat_workshop' ? (
                    <img 
                      src={event.image} 
                      alt={t(event.titleKey)} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : event.categoryKey === 'event_cat_hackathon' ? (
                    <div className="w-full h-full flex items-center justify-center p-12">
                      <div className="w-full h-full flex items-center justify-center relative">
                        {/* Bracket Graphic */}
                        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-20 border-x-2 border-t-2 border-white/30 rounded-t-lg" />
                        <div className="flex flex-col items-center justify-center text-white z-10">
                          <div className="text-[28px] font-black tracking-[0.15em] uppercase">{t("event_cat_hackathon")}</div>
                          <div className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase mt-2">NANCUIOPARK</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                       <div className="relative w-28 h-44 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl transform  transition-all group-hover:rotate-3">
                         <div className="flex flex-col items-center gap-1.5 opacity-20 text-[#0B132B]">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t("event_cat_social")}</span>
                            <div className="w-10 h-[2px] bg-current rounded-full" />
                            <span className="text-[8px] font-bold">18:30</span>
                            <div className="flex gap-0.5 mt-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-current" />
                              <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
                              <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20" />
                            </div>
                         </div>
                       </div>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className={`absolute top-5 right-5 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm ${
                    event.categoryKey === 'event_cat_workshop' ? 'bg-pink-100 text-[#F43F86]' : 
                    event.categoryKey === 'event_cat_hackathon' ? 'bg-[#FCA21E] text-white' : 
                    'bg-[#4299E1] text-white'
                  }`}>
                    {t(event.categoryKey)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-[#64748B] text-[11px] font-bold uppercase tracking-wider mb-5">
                    <Calendar className="w-4 h-4 text-[#F43F86]" />
                    {event.date} • {event.time}
                  </div>

                  <h3 className="text-[26px] font-black text-[#0B132B] mb-5 leading-tight group-hover:text-[#F43F86] transition-colors">
                    {t(event.titleKey)}
                  </h3>
                  
                  <p className="text-[#64748B] text-[15px] leading-relaxed font-medium mb-12">
                    {t(event.descKey)}
                  </p>

                  <button className="mt-auto inline-flex items-center justify-center w-full px-8 py-4.5 bg-white text-[#0B132B] border border-gray-100 font-extrabold text-[12px] tracking-widest rounded-2xl hover:bg-[#F43F86] hover:text-white hover:border-[#F43F86] hover:shadow-xl hover:shadow-pink-500/20 transition-all uppercase">
                    {t("events_register")}
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
