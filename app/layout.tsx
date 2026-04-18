import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNIDES – YYYazılım Zirvesi '26",
  description:
    "İstanbul Esenyurt Üniversitesi YYYazılım Kulübü tarafından düzenlenen Yazılım, Yapay Zeka ve Teknoloji Zirvesi.",
  keywords: ["UNIDES", "yazılım", "yapay zeka", "teknoloji", "zirve", "İstanbul", "üniversite"],
  openGraph: {
    title: "UNIDES – YYYazılım Zirvesi '26",
    description: "Geleceği Kodlayanlar İçin Teknoloji ve Yaratıcılık Zirvesi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
