"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { 
  Users2, 
  Check, 
  ArrowRight, 
  MapPin, 
  Monitor, 
  Brain, 
  Smartphone, 
  ShieldCheck, 
  Gamepad2, 
  Cloud,
  Clock,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TranslationKeys } from "../data/translations";
import { useState } from "react";

export default function JoinPage() {
  const { t } = useLanguage();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const membershipTiers: { nameKey: TranslationKeys; priceKey: TranslationKeys; featuresKeys: TranslationKeys[]; popular: boolean }[] = [
    {
      nameKey: "join_tier_core",
      priceKey: "join_tier_free",
      featuresKeys: [
        "join_tier_core_f1",
        "join_tier_core_f2",
        "join_tier_core_f3"
      ],
      popular: false
    },
    {
      nameKey: "join_tier_pro",
      priceKey: "join_tier_sem",
      featuresKeys: [
        "join_tier_pro_f1",
        "join_tier_pro_f2",
        "join_tier_pro_f3"
      ],
      popular: true
    }
  ];

  const interestList: { nameKey: TranslationKeys; icon: React.ReactNode }[] = [
    { nameKey: "join_interest_web", icon: <Monitor className="w-4 h-4" /> },
    { nameKey: "join_interest_ai", icon: <Brain className="w-4 h-4" /> },
    { nameKey: "join_interest_mobile", icon: <Smartphone className="w-4 h-4" /> },
    { nameKey: "join_interest_cyber", icon: <ShieldCheck className="w-4 h-4" /> },
    { nameKey: "join_interest_game", icon: <Gamepad2 className="w-4 h-4" /> },
    { nameKey: "join_interest_cloud", icon: <Cloud className="w-4 h-4" /> },
  ];

  const departments: TranslationKeys[] = [
    "join_dept_cs",
    "join_dept_se",
    "join_dept_ee",
    "join_dept_ds",
    "join_dept_mis",
  ];

  const toggleInterest = (name: string) => {
    setSelectedInterests(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  return (
    <main className="min-h-screen bg-[#FBFBFC] max-w-screen overflow-x-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 pb-40">
        
        {/* Hero Header */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#F43F86] text-[10px] font-extrabold tracking-widest uppercase mb-8">
              <Users2 className="w-3.5 h-3.5" />
              {t("join_badge")}
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-[#0B132B] leading-[0.9] tracking-tighter mb-8">
              {t("join_headline_1")} <br />
              <span className="bg-linear-to-r from-[#F43F86] via-[#E23164] to-[#FCA21E] inline-block text-transparent bg-clip-text">{t("join_headline_2")}</span>
            </h1>
            <p className="max-w-2xl text-[#64748B] text-lg font-medium leading-relaxed">
              {t("join_desc")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-gray-100">
                <h2 className="text-2xl font-black text-[#0B132B] mb-10">{t("join_form_title")}</h2>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-[#4A5568] uppercase tracking-widest">{t("join_form_name")}</label>
                      <input 
                        type="text" 
                        placeholder="Alex Rivera"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#F43F86] transition-all outline-hidden font-medium text-[#0B132B]"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-[#4A5568] uppercase tracking-widest">{t("join_form_email")}</label>
                      <input 
                        type="email" 
                        placeholder="student@university.edu"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#F43F86] transition-all outline-hidden font-medium text-[#0B132B]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-[#4A5568] uppercase tracking-widest">{t("join_form_dept")}</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#F43F86] transition-all outline-hidden font-medium text-[#0B132B] appearance-none cursor-pointer">
                      {departments.map((deptKey) => (
                        <option key={deptKey}>{t(deptKey)}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-5">
                    <label className="text-xs font-black text-[#4A5568] uppercase tracking-widest block">{t("join_form_interests")}</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {interestList.map((interest) => (
                        <button
                          key={interest.nameKey}
                          type="button"
                          onClick={() => toggleInterest(t(interest.nameKey))}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all text-sm font-bold ${
                            selectedInterests.includes(t(interest.nameKey))
                              ? "bg-[#F43F86] border-[#F43F86] text-white shadow-lg shadow-pink-500/20"
                              : "bg-white border-gray-100 text-[#4A5568] hover:border-pink-300"
                          }`}
                        >
                          <span className={selectedInterests.includes(t(interest.nameKey)) ? "text-white" : "text-[#F43F86]"}>
                            {interest.icon}
                          </span>
                          {t(interest.nameKey)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-5 rounded-3xl bg-[#F43F86] text-white font-black text-[16px] tracking-widest hover:opacity-90 hover:scale-[1.02] transition-all shadow-xl shadow-pink-500/30 flex items-center justify-center gap-3 uppercase">
                    {t("join_form_btn")} <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {t("join_form_tos")}
                  </p>
                </form>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Info Blocks */}
          <div className="lg:col-span-5 space-y-10">
            {/* Membership Tiers */}
            <AnimateOnScroll delay={200}>
              <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-gray-100">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#F43F86]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-[#0B132B]">{t("join_tiers_title")}</h3>
                </div>

                <div className="space-y-6">
                  {membershipTiers.map((tier) => (
                    <div 
                      key={tier.nameKey}
                      className={`relative p-8 rounded-3xl border transition-all ${
                        tier.popular 
                          ? "bg-pink-50/50 border-pink-200 ring-2 ring-pink-500/20" 
                          : "bg-gray-50/50 border-transparent hover:border-gray-200"
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 right-6 px-3 py-1 bg-[#F43F86] text-white text-[9px] font-black tracking-widest rounded-full uppercase">
                           {t("join_tier_popular")}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-lg font-black text-[#0B132B]">{t(tier.nameKey)}</h4>
                        <span className="text-sm font-black text-[#F43F86] bg-white px-3 py-1 rounded-lg">
                          {tier.priceKey === "join_tier_sem" ? `$15 ${t("join_tier_sem")}` : t(tier.priceKey)}
                        </span>
                      </div>

                      <ul className="space-y-4">
                        {tier.featuresKeys.map((fKey, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-medium text-[#4A5568]">
                            <div className="w-5 h-5 rounded-full bg-[#F43F86] flex items-center justify-center text-white shrink-0 mt-0.5">
                              <Check className="w-3 h-3" strokeWidth={4} />
                            </div>
                            {t(fKey)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Social Proof */}
            <AnimateOnScroll delay={300}>
              <div className="bg-[#0B132B] rounded-[40px] p-8 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-2">{t("join_social_proof")}</h4>
                  <p className="text-white/60 text-sm font-medium mb-6">{t("join_social_desc")}</p>
                  
                  <div className="flex -space-x-4 mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0B132B] overflow-hidden bg-gray-800">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-[#0B132B] bg-[#F43F86] flex items-center justify-center text-[11px] font-black">
                      +50
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-pink-600/20 blur-[80px] rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-125 duration-500" />
              </div>
            </AnimateOnScroll>

            {/* Next Event */}
            <AnimateOnScroll delay={400}>
              <div className="p-8 rounded-[40px] border-2 border-dashed border-gray-200 flex items-center justify-between group hover:border-[#F43F86] transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-pink-50 flex flex-col items-center justify-center transition-colors">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">OCT</span>
                    <span className="text-2xl font-black text-[#0B132B]">12</span>
                  </div>
                  <div>
                    <h5 className="font-black text-[#0B132B] mb-1">{t("join_next_event")}</h5>
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Main Tech Lab</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 6:00 PM</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-[#F43F86] group-hover:translate-x-1 transition-all" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
