import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto rounded-[40px] bg-linear-to-br from-[#DF287E] via-[#E23164] to-[#F49F1D] p-12 md:p-24 text-center text-white relative shadow-[0_20px_50px_-15px_rgba(223,40,126,0.3)]">
        <h2 className="text-[48px] md:text-[72px] font-black leading-[0.95] tracking-tighter mb-6 relative z-10">
          {t("cta_title")}
        </h2>
        <p className="text-[17px] md:text-[22px] font-medium opacity-95 max-w-2xl mx-auto mb-10 leading-snug relative z-10">
          {t("cta_desc")}
        </p>
        <Link href="/join">
          <button className="cursor-pointer px-12 py-4 bg-white text-[#0B132B] rounded-[24px] font-black hover:scale-105 transition-transform relative z-10 uppercase tracking-widest text-[15px] shadow-sm">
            {t("cta_btn")}
          </button>
        </Link>
      </div>
    </section>
  );
}
