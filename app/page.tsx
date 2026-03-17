"use client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import SupportedBySection from "./components/SupportedBySection";
import FeaturesSection from "./components/FeaturesSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-transparent">
      {/* Navbar represents the top, usually appears immediately without delay offset or small ease */}
      <Navbar />
      <AnimateOnScroll delay={200}>
        <HeroSection />
      </AnimateOnScroll>
      <AnimateOnScroll delay={300}>
        <StatsSection />
      </AnimateOnScroll>
      <AnimateOnScroll delay={100}>
        <SupportedBySection />
      </AnimateOnScroll>
      <AnimateOnScroll delay={100}>
        <FeaturesSection />
      </AnimateOnScroll>
      <AnimateOnScroll delay={100}>
        <CTABanner />
      </AnimateOnScroll>
      <AnimateOnScroll delay={100}>
        <Footer />
      </AnimateOnScroll>
    </main>
  );
}
