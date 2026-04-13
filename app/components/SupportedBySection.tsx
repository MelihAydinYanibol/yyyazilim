import { useLanguage } from "../context/LanguageContext";

export default function SupportedBySection() {
  const { t } = useLanguage();
  const logos = [
    {
      src: "/Sponsors/IESULogo.png",
      alt: "IESU"
    },
    {
      src: "/Sponsors/IbbLogo.png",
      alt: "Ibb"
    },
    {
      src: "/Sponsors/AkdenizUniversityLogo.png",
      alt: "Akdeniz University"
    },
    {
      src: "/Sponsors/TeknofestLogo.png",
      alt: "Teknofest"
    },
    {
      src: "/Sponsors/TubitakLogo.png",
      alt: "Tubitak"
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 text-center">
      <h3 className="text-3xl font-extrabold text-[--color-brand-dark] mb-12 inline-block relative">
        {t("supported_by")}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-[--color-brand-pink] rounded-full"></span>
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 ">
        {logos.map((data, key) => (
          <div key={key} className="w-20 h-20   flex items-center justify-center">
            <img src={data.src} alt={data.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
