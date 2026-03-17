import { useLanguage } from "../context/LanguageContext";
import { TranslationKeys } from "../data/translations";

export default function StatsSection() {
  const { t } = useLanguage();
  
  const stats: { number: string; labelKey: TranslationKeys }[] = [
    { number: "500+", labelKey: "stat_members" },
    { number: "20+", labelKey: "stat_open_source" },
    { number: "50+", labelKey: "stat_hackathons" },
    { number: "15+", labelKey: "stat_partners" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-4xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#F43F86] mb-2">{stat.number}</h2>
            <p className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-wider">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
