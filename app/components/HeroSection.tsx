import { Rocket } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 py-16 md:py-28 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-8 relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-pink-100/50 border border-pink-200/60 text-[#F43F86] text-[10px] font-extrabold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#F43F86]" />
            {t("hero_badge")}
          </div>

          {/* Headline */}
          <h1 className="flex flex-col text-[64px] sm:text-[80px] lg:text-[100px] font-extrabold leading-[0.95] tracking-tight text-[#0B132B] -ml-1">
            <span>{t("hero_innovate")}</span>
            <span>{t("hero_with")}</span>
            <span className="bg-linear-to-r from-[#F43F86] via-[#F66153] to-[#FCA21E] inline-block text-transparent bg-clip-text mt-1 pb-2">
              yyyazilim
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#64748B] text-lg md:text-[22px] max-w-xl leading-relaxed font-medium">
            {t("hero_desc")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-2 w-full sm:w-auto">
            <Link href="/join" className="w-full sm:w-auto">
              <button className="cursor-pointer w-full px-10 py-4 rounded-full bg-[#F43F86] text-white font-extrabold text-sm tracking-[0.15em] hover:bg-opacity-90 transition-all shadow-xl shadow-pink-500/20 uppercase">
                {t("hero_join_now")}
              </button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <button className="cursor-pointer w-full px-10 py-4 rounded-full bg-white text-[#0B132B] border border-slate-200/80 hover:border-slate-300 font-extrabold text-sm tracking-[0.15em] transition-all uppercase shadow-sm">
                {t("hero_projects")}
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content / Image */}
        <div className="w-full md:w-[45%] relative mt-16 md:mt-0 flex justify-end">
          <div className="relative w-full aspect-4/5 max-w-[540px] rounded-[40px] overflow-hidden shadow-2xl mr-4 md:mr-0">
            <img
              src="/hero.png"
              alt="Team Working"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Stat Card */}
          <div className="absolute -bottom-8 -left-2 sm:-left-12 bg-white rounded-[24px] p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] flex items-center gap-4 z-20 border border-slate-100">
            <div className="w-14 h-14 rounded-full bg-linear-to-tr from-[#F43F86] to-[#FCA21E] flex items-center justify-center text-white shrink-0">
              <Rocket className="w-6 h-6 fill-white" />
            </div>
            <div className="pr-6">
              <p className="text-base font-extrabold text-[#0B132B] leading-tight mb-1">{t("hero_active_projects")}</p>
              <p className="text-[11px] text-[#64748B] uppercase font-bold tracking-widest">{t("hero_live_deploying")}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
