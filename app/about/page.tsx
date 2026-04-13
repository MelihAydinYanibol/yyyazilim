"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import {
  CheckCircle2,
  Users2,
  Zap,
  Code2,
  Calendar,
  Flag,
  Linkedin,
  Mail,
  ChevronRight
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { TranslationKeys } from "../data/translations";

export default function AboutPage() {
  const { t } = useLanguage();

  const team: { name: string; roleKey: TranslationKeys; image: string; linkedin: string; email: string }[] = [
    {
      name: "Arda Yılmaz",
      roleKey: "about_role_president",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arda",
      linkedin: "#",
      email: "#",
    },
    {
      name: "Selin Demir",
      roleKey: "about_role_projects",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Selin",
      linkedin: "#",
      email: "#",
    },
    {
      name: "Caner Kaya",
      roleKey: "about_role_events",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Caner",
      linkedin: "#",
      email: "#",
    },
    {
      name: "İrem Yıldız",
      roleKey: "about_role_tech",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Irem",
      linkedin: "#",
      email: "#",
    }
  ];

  const milestones: { titleKey: TranslationKeys; descKey: TranslationKeys; year: string; icon: React.ReactNode; align: string }[] = [
    {
      titleKey: "about_milestone_1_title",
      descKey: "about_milestone_1_desc",
      year: "2022",
      icon: <Flag className="w-5 h-5" />,
      align: "left"
    },
    {
      titleKey: "about_milestone_2_title",
      descKey: "about_milestone_2_desc",
      year: "2023",
      icon: <Code2 className="w-5 h-5" />,
      align: "right"
    },
    {
      titleKey: "about_milestone_3_title",
      descKey: "about_milestone_3_desc",
      year: "2024",
      icon: <Users2 className="w-5 h-5" />,
      align: "left"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFC] max-w-screen overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">

        {/* Hero / Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <AnimateOnScroll>
            <div className="flex flex-col items-start gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#F43F86] text-[10px] font-extrabold tracking-widest uppercase">
                {t("about_mission")}
              </div>
              <h1 className="text-6xl md:text-6xl font-black text-[#0B132B] leading-[0.9] tracking-tighter">
                {t("about_headline_1")} <br />
                <span className="bg-linear-to-r from-[#F43F86] via-[#E23164] to-[#FCA21E] inline-block text-transparent bg-clip-text">
                  {t("about_headline_2")}
                </span>
              </h1>
              <p className="text-[#64748B] text-lg md:text-[20px] leading-relaxed font-medium max-w-xl">
                {t("about_desc")}
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-sm text-[11px] font-bold text-[#4A5568]">
                  <CheckCircle2 className="w-4 h-4 text-[#F43F86]" /> {t("about_quality")}
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-sm text-[11px] font-bold text-[#4A5568]">
                  <Users2 className="w-4 h-4 text-pink-500" /> {t("about_community")}
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-sm text-[11px] font-bold text-[#4A5568]">
                  <Zap className="w-4 h-4 text-orange-500" /> {t("about_future")}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="bg-[#0B132B] rounded-[48px] p-12 md:p-20 text-white flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F43F86]/20 blur-[100px] rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full -ml-20 -mb-20" />

              <div className="relative z-10 flex flex-col gap-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-[#F43F86] mb-2 border border-white/10 group-hover:scale-110 transition-transform">
                    <Code2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-5xl font-black">15+</h2>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-xs">{t("hero_active_projects")}</p>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-pink-400 mb-2 border border-white/10 group-hover:scale-110 transition-transform">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h2 className="text-5xl font-black">50+</h2>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-xs">{t("stat_hackathons")}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Journey Section */}
        <section className="mb-40">
          <AnimateOnScroll>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-[#0B132B] mb-4">{t("about_journey_title")}</h2>
              <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">{t("about_journey_desc")}</p>
            </div>
          </AnimateOnScroll>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-100 hidden md:block" />

            <div className="flex flex-col gap-24">
              {milestones.map((ms, idx) => (
                <AnimateOnScroll key={idx} delay={idx * 150}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${ms.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`flex-1 w-full text-center ${ms.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-black text-[#F43F86] mb-2">{t(ms.titleKey)}</h3>
                      <p className={`text-gray-500 text-[15px] font-medium leading-relaxed max-w-sm mx-auto md:mx-0 ${ms.align === 'left' ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        {t(ms.descKey)}
                      </p>
                    </div>

                    {/* Dot */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-[#F43F86] flex items-center justify-center text-[#F43F86] shadow-xl shadow-pink-500/10 shrink-0">
                      {ms.icon}
                    </div>

                    {/* Invisible Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <AnimateOnScroll>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-[#0B132B] mb-4">{t("about_team_title")}</h2>
              <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">{t("about_team_desc")}</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 100}>
                <div className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 group hover:translate-y-[-8px] transition-all duration-300">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-gray-50 group-hover:border-pink-50 transition-colors">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-black text-[#0B132B] mb-2">{person.name}</h4>
                  <p className="text-[#F43F86] text-sm font-bold uppercase tracking-widest mb-8">{t(person.roleKey)}</p>

                  <div className="flex gap-4">
                    <a href={person.linkedin} className="text-gray-400 hover:text-[#F43F86] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={person.email} className="text-gray-400 hover:text-pink-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
