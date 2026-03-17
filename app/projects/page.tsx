"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import {
  Globe,
  Smartphone,
  Cpu,
  BarChart3,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TranslationKeys } from "../data/translations";
import { useState } from "react";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<TranslationKeys>("projects_filter_all");

  const projects: { id: number; titleKey: TranslationKeys; descKey: TranslationKeys; categoryKey: TranslationKeys; image: string; tags: string[] }[] = [
    {
      id: 1,
      titleKey: "project_1_title",
      descKey: "project_1_desc",
      categoryKey: "projects_filter_web",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tags: ["NEXT.JS", "STRIPE", "POSTGRESQL"],
    },
    {
      id: 2,
      titleKey: "project_2_title",
      descKey: "project_2_desc",
      categoryKey: "projects_filter_ai",
      image: "https://images.unsplash.com/photo-1576091160550-217359991f8d?auto=format&fit=crop&q=80&w=800",
      tags: ["PYTORCH", "OPENCV", "FASTAPI"],
    },
    {
      id: 3,
      titleKey: "project_3_title",
      descKey: "project_3_desc",
      categoryKey: "projects_filter_iot",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
      tags: ["RUST", "WASM", "MQTT"],
    },
    {
      id: 4,
      titleKey: "project_4_title",
      descKey: "project_4_desc",
      categoryKey: "projects_filter_mobile",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      tags: ["REACT NATIVE", "FIREBASE", "REDUX"],
    },
    {
      id: 5,
      titleKey: "project_5_title",
      descKey: "project_5_desc",
      categoryKey: "projects_filter_ds",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
      tags: ["PYTHON", "D3.JS", "SNOWFLAKE"],
    },
    {
      id: 6,
      titleKey: "project_6_title",
      descKey: "project_6_desc",
      categoryKey: "projects_filter_web",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["GO", "REDIS", "AWS"],
    },
  ];

  const categories: { nameKey: TranslationKeys; icon: React.ReactNode }[] = [
    { nameKey: "projects_filter_all", icon: null },
    { nameKey: "projects_filter_web", icon: <Globe className="w-4 h-4" /> },
    { nameKey: "projects_filter_mobile", icon: <Smartphone className="w-4 h-4" /> },
    { nameKey: "projects_filter_ai", icon: <Cpu className="w-4 h-4" /> },
    { nameKey: "projects_filter_ds", icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const filteredProjects = activeCategory === "projects_filter_all"
    ? projects
    : projects.filter(p => p.categoryKey === activeCategory);

  return (
    <main className="min-h-screen bg-[#FBFBFC]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#F43F86] text-[10px] font-extrabold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F43F86]" />
              {t("nav_projects")}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0B132B] leading-tight tracking-tight mb-8">
              Featured <span className="bg-linear-to-r from-[#F43F86] to-[#FCA21E] inline-block text-transparent bg-clip-text">Student</span> Projects
            </h1>
            <p className="max-w-2xl text-[#64748B] text-lg md:text-xl font-medium leading-relaxed">
              {t("projects_desc")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Filters */}
        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16 px-4">
            {categories.map((cat) => (
              <button
                key={cat.nameKey}
                onClick={() => setActiveCategory(cat.nameKey)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[11px] font-black tracking-widest transition-all uppercase shadow-xs ${activeCategory === cat.nameKey
                    ? "bg-[#F43F86] text-white"
                    : "bg-white text-[#4A5568] hover:text-[#F43F86] border border-gray-100"
                  }`}
              >
                {cat.icon}
                {t(cat.nameKey)}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <AnimateOnScroll key={project.id} delay={idx * 100}>
              <div className="bg-white rounded-[40px] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col h-full group">
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-[#0B132B] tracking-widest uppercase shadow-sm">
                    {t(project.categoryKey)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-black text-[#0B132B] mb-4 group-hover:text-[#F43F86] transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-[#64748B] text-[15px] leading-relaxed font-medium mb-8">
                    {t(project.descKey)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-[#F8F9FA] text-[#64748B] text-[10px] font-bold tracking-widest rounded-full border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#F8FAFC] text-[#0B132B] font-black text-[12px] tracking-widest rounded-full hover:bg-[#F43F86] hover:text-white transition-all group/btn uppercase self-start">
                    {t("projects_view_project")}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Pagination */}
        {/* <AnimateOnScroll delay={300}>
          <div className="flex items-center justify-center gap-3">
            <button className="w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:text-[#F43F86] transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-brand-pink text-white flex items-center justify-center text-sm font-black shadow-lg shadow-pink-500/30 transition-all">
              1
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center text-sm font-black text-gray-500 hover:text-[#F43F86] transition-all">
              2
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center text-sm font-black text-gray-500 hover:text-[#F43F86] transition-all">
              3
            </button>
            <div className="text-gray-400 font-bold px-1">...</div>
            <button className="w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center text-sm font-black text-gray-500 hover:text-[#F43F86] transition-all">
              12
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:text-[#F43F86] transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </AnimateOnScroll> */}
      </div>

      <Footer />
    </main>
  );
}
