import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white bg-opacity-80 backdrop-blur-md mt-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/yyyLogo.png"
                alt="Logo"
                className="w-10 h-10 object-contain relative z-10"
              />
              <span className="font-bold text-xl tracking-tight text-gray-900">yyyazilim</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-8">
              {t("footer_desc")}
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/iesuyyyazilim/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/yaz%C4%B1l%C4%B1m-yapay-zeka-ve-yarat%C4%B1c%C4%B1l%C4%B1k-toplulu%C4%9Fu/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-black transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              {/* <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-black transition-colors">
                <MessageCircle className="w-4 h-4" />
              </Link> */}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-bold text-xs tracking-widest text-gray-900 uppercase mb-6">{t("footer_explore")}</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/" className="hover:text-pink-500 transition-colors">{t("nav_home")}</Link></li>
              <li><Link href="/projects" className="hover:text-pink-500 transition-colors">{t("nav_projects")}</Link></li>
              <li><Link href="/events" className="hover:text-pink-500 transition-colors">{t("nav_events")}</Link></li>
              <li><Link href="/about" className="hover:text-pink-500 transition-colors">{t("nav_about")}</Link></li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-bold text-xs tracking-widest text-gray-900 uppercase mb-6">{t("footer_community")}</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="https://www.instagram.com/iesuyyyazilim/" className="hover:text-pink-500 transition-colors">INSTAGRAM</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">GITHUB</Link></li>
              <li><Link href="https://www.linkedin.com/company/yaz%C4%B1l%C4%B1m-yapay-zeka-ve-yarat%C4%B1c%C4%B1l%C4%B1k-toplulu%C4%9Fu/" className="hover:text-pink-500 transition-colors">LINKEDIN</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">DISCORD</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-medium font-sans">
          <img
            src="/UNILogo.png"
            alt="Logo"
            className="w-10 h-10 object-contain relative z-10"

          />
          <p>{t("footer_copyright")}</p>
        </div>

      </div>
      <p className="text-center text-xs text-gray-400 font-medium pb-4">{t("footer_developed_by")} <Link href="https://linkedin.com/in/seyyedbenyaminvalaei">SeyyedBenyamin Valaei</Link></p>
    </footer>
  );
}
