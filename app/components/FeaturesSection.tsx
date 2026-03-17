import { Code2, GraduationCap, LayoutTemplate } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TranslationKeys } from "../data/translations";

export default function FeaturesSection() {
  const { t } = useLanguage();

  interface FeatureItem {
    icon: React.ReactNode;
    titleKey: TranslationKeys;
    descKey: TranslationKeys;
  }

  const features: FeatureItem[] = [
    {
      icon: <Code2 className="w-6 h-6 text-pink-500" />,
      titleKey: "feature_1_title",
      descKey: "feature_1_desc"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-pink-500" />,
      titleKey: "feature_2_title",
      descKey: "feature_2_desc"
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 text-pink-500" />,
      titleKey: "feature_3_title",
      descKey: "feature_3_desc"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-black text-[--color-brand-dark] mb-4">
        {t("features_title")}
      </h2>
      <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-base mb-16">
        {t("features_desc")}
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="bg-white rounded-4xl p-8 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(236,62,124,0.1)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{t(item.titleKey)}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t(item.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
