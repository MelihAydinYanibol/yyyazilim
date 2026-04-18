"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// Arrow Right Icon Component
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
// Users Icon
const UsersIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
// Building/Club Icon
const BuildingIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M12 6h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M16 6h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
    <path d="M8 6h.01" />
    <path d="M9 22V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14" />
    <path d="M3 22V5a2 2 0 0 1 2-2h7" />
    <path d="M22 22h-5" />
  </svg>
);
// Mail Icon
const MailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
// Instagram Icon
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
// Calendar Icon
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
// History Icon
const HistoryIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 3v5h5" />
    <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
    <path d="M12 7v5l4 2" />
  </svg>
);
// Sparkles Icon
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);
// Info Icon - For Etkinlik Hakkında
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
// Map Pin Icon
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
// Clock Icon
const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
// Award Icon
const AwardIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);
// Person/Participant Icon
const PersonGroupIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
// LinkedIn Icon
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
// GitHub Icon
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
// External Link Icon
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);
const images = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
  "/photo7.jpg",
  "/photo8.jpg",
  "/photo9.jpg",
  "/photo10.jpg",
];
// Navigation buttons configuration - 5 pages
const navButtons = [
  { id: 0, label: "Etkinlik", icon: SparklesIcon },
  { id: 1, label: "Kulüp Hakkında", icon: BuildingIcon },
  { id: 2, label: "Etkinlik Hakkında", icon: InfoIcon },
  { id: 3, label: "Takımımız", icon: UsersIcon },
  { id: 4, label: "Etkinliğimize Katılın", icon: CalendarIcon },
];
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  
  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  // Page change handler with animation
  const handlePageChange = (pageIndex: number) => {
    if (pageIndex === currentPage || isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(pageIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Glassy Navigation with Logos */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-4 mt-4">
          <div className="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* YYY Logo */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/yyyLogo.png"
                  alt="YYY Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Vertical Separator */}
              <div className="h-8 w-px bg-white/30" />
              
              {/* UNI Logo */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/UNILogo.png"
                  alt="UNI Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Vertical Separator */}
             <div className="h-8 w-px bg-white/30" />
              
              {/* TCGenclik */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/TCGenclik.png"
                  alt="TCGenclik"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="h-8 w-px bg-white/30" />
              
              {/* UnidesLogo */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/UnidesLogo2.png"
                  alt="UnidesLogo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            
          </div>
        </div>
      </nav>
      {/* Main Content Area with Horizontal Slide Animation */}
      <main className="flex-1 relative">
        {/* Background with blur effect */}
        <div className="fixed inset-0 z-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Arka Plan ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover scale-105"
                sizes="100vw"
              />
            </div>
          ))}
          {/* Dark overlay with blur */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-[2px]" />
        </div>
        {/* Pages Container with Horizontal Sliding */}
        <div className="relative z-10 h-[calc(100vh-7rem)] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
        {/* Page 1: Etkinlik - Exactly full viewport, no scroll */}
        <div className="w-full h-full flex-shrink-0 overflow-hidden">
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-8 py-6">
            <EtkinlikPage onNavigate={handlePageChange} />
          </div>
        </div>
        {/* Page 2: Kulüp Hakkında - Scrollable with padding top for mobile */}
        <div className="w-full h-full flex-shrink-0 overflow-y-auto">
          <div className="min-h-full flex flex-col items-center justify-center px-4 sm:px-8 pt-20 pb-8 sm:pt-8 sm:pb-8">
            <OncekiEtkinliklerPage />
          </div>
        </div>
        {/* Page 3: Etkinlik Hakkında - Scrollable with padding top for mobile */}
        <div className="w-full h-full flex-shrink-0 overflow-y-auto">
          <div className="min-h-full flex flex-col items-center justify-center px-4 sm:px-8 pt-20 pb-8 sm:pt-8 sm:pb-8">
            <EtkinlikHakkindaPage />
          </div>
        </div>
        {/* Page 4: Takımımız - Scrollable with padding top for mobile */}
        <div className="w-full h-full flex-shrink-0 overflow-y-auto">
          <div className="min-h-full flex flex-col items-center justify-center px-4 sm:px-8 pt-20 pb-8 sm:pt-8 sm:pb-8">
            <TakimimizPage />
          </div>
        </div>
        {/* Page 5: Etkinliğimize Katılın - Scrollable with padding top for mobile */}
        <div className="w-full h-full flex-shrink-0 overflow-y-auto">
          <div className="min-h-full flex flex-col items-center justify-center px-4 sm:px-8 pt-20 pb-8 sm:pt-8 sm:pb-8">
            <KatilinPage 
              onSuccess={(email: string) => {
                setRegisteredEmail(email);
                setShowSuccessModal(true);
              }}
            />
          </div>
        </div>
          </div>
        </div>
        {/* Slide Indicators - Only visible on Etkinlik page (page 0) */}
        {currentPage === 0 && (
          <>
            <div className="absolute bottom-24 right-8 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-emerald-400 w-8 shadow-lg shadow-emerald-400/50"
                      : "bg-white/40 w-2 hover:bg-white/70"
                  }`}
                  aria-label={`Slayt ${index + 1}`}
                />
              ))}
            </div>
            {/* Slide Counter */}
            <div className="absolute bottom-24 left-8 text-white/60 text-sm font-medium z-20 glass px-4 py-2 rounded-full">
              {String(currentSlide + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
          </>
        )}
      </main>
      {/* Bottom Glassy Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="glass rounded-2xl p-2 max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-1">
            {/* Navigation Buttons */}
            {navButtons.map((button, index) => {
              const Icon = button.icon;
              const isActive = currentPage === index;
              return (
                <button
                  key={button.id}
                  onClick={() => handlePageChange(index)}
                  className={`relative flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 px-1 sm:px-3 py-3 rounded-xl transition-all duration-300 group min-w-0 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500/80 to-cyan-500/80 text-white shadow-lg shadow-emerald-500/30"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  {/* Label - hidden on mobile, visible on sm and up */}
                  <span className="hidden sm:block text-[10px] sm:text-xs font-semibold text-center whitespace-nowrap truncate max-w-full">
                    {button.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1 bg-white rounded-full shadow-lg" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      {/* Page indicator */}
      <div className="flex justify-center mt-3 gap-2">
        {navButtons.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentPage === index
                ? "w-6 bg-emerald-400 shadow-lg shadow-emerald-400/50"
                : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>

    {/* Success Modal - Global for entire app */}
    {showSuccessModal && (
      <div 
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          zIndex: 9999
        }}
      >
        {/* Backdrop with blur */}
        <div 
          className="fixed inset-0 bg-black/80"
          style={{ 
            position: 'fixed', 
            inset: 0,
            zIndex: 9999,
            backdropFilter: 'blur(8px)'
          }}
          onClick={() => setShowSuccessModal(false)}
        />
        
        {/* Modal Content */}
        <div 
          className="relative w-full max-w-md"
          style={{ 
            position: 'relative', 
            zIndex: 10000
          }}
        >
          <div 
            className="rounded-3xl p-8 text-center border-2"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.25) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderColor: 'rgba(16, 185, 129, 0.6)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)',
            }}
          >
            {/* Success Icon */}
            <div 
              className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
                boxShadow: '0 0 40px rgba(16, 185, 129, 0.7)',
              }}
            >
              <svg 
                className="w-12 h-12 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={3}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            
            {/* Success Title */}
            <h3 
              className="text-white text-3xl font-bold mb-3"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              Kayıt Başarılı!
            </h3>
            
            {/* Success Message */}
            <p className="text-white/90 text-lg mb-2">
              Başvurunuz başarıyla alındı.
            </p>
            <p 
              className="text-emerald-400 text-base font-medium mb-6"
              style={{ textShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}
            >
              UNIDES 2026&apos;da görüşmek üzere!
            </p>
            
            {/* Email Confirmation Note */}
            <div 
              className="rounded-xl p-4 mb-6"
              style={{
                background: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid rgba(16, 185, 129, 0.5)'
              }}
            >
              <p className="text-white/90 text-sm">
                Hatırlatma e-postası <span style={{ color: '#34d399', fontWeight: 600 }}>{registeredEmail}</span> adresinize gönderilecektir.
              </p>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full rounded-xl px-6 py-4 text-white font-bold text-lg flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(6, 182, 212, 0.9) 100%)',
                boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.5)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.02)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 20px 40px -5px rgba(16, 185, 129, 0.6)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(1)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 30px -5px rgba(16, 185, 129, 0.5)';
              }}
            >
              <span>Tamam</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
// Page 1: Etkinlik (Hero Page)
function EtkinlikPage({ onNavigate }: { onNavigate: (page: number) => void }) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="glass rounded-3xl p-8 md:p-12 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-6">
          <SparklesIcon className="w-4 h-4" />
          <span>YYYazılım Zirvesi 2026</span>
        </div>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6 drop-shadow-2xl">
          ZIRVE`26
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light mb-8 max-w-xl mx-auto">
          Geleceği Kodlayanlar İçin Teknoloji ve Yaratıcılık Zirvesi

        </p>
        <button 
          onClick={() => onNavigate(4)}
          className="group glass-strong rounded-2xl px-8 py-4 text-white font-semibold tracking-wide hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 mx-auto cursor-pointer"
        >
          <span>Başvur</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
// Page 2: Etkinlik Hakkında
function EtkinlikHakkindaPage() {
  const eventDetails = [
    {
      icon: CalendarIcon,
      title: "Tarih",
      description: "4 Mayıs 2026",
    },
    {
      icon: MapPinIcon,
      title: "Konum",
      description: "İstanbul Esenyurt Üniversitesi",
      isLink: true,
      url: "https://www.google.com/maps/search/?api=1&query=Istanbul+Esenyurt+Universitesi",
    },
    {
      icon: ClockIcon,
      title: "Süre",
      description: "09:00 - 17:00",
    },
    {
      icon: PersonGroupIcon,
      title: "Katılımcı Sayısı",
      description: "430 Kişi",
    },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-4">
          <InfoIcon className="w-4 h-4" />
          <span>Etkinlik Detayları</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Etkinlik Hakkında
        </h2>
        <div className="glass rounded-2xl p-6 max-w-4xl mx-auto">
          <p className="text-white/80 text-base leading-relaxed bg-[#00000073] p-4 rounded-2xl border border-blue-400/30">
            İstanbul Esenyurt Üniversitesi yazılım, yapay zeka ve yaratıcılık kulübü olarak 4 Mayıs 2026 tarihinde gençlik ve spor bakanlığı tarafından onaylı UNIDES kapsamında bir teknoloji ve yaratıcılık zirvesi etkinliğimiz gerçekleşecektir. Bu etkinliğimizde sektörden 6 tane konuşmacının katılımıyla biri 2 kişilik panel oturumu olmakla beraber toplamda beş tane sunum gerçekleşecektir. Etkinliğimiz 430 kişilik olup lise ve üniversite öğrencilerine hitap edecektir. Etkinliğimiz sabah 9'da başlayıp akşam 17'de sona erecektir. Etkinliğimiz genel olarak yapay zeka, yazılım ve teknoloji alanında olacaktır.
          </p>
        </div>
      </div>
      {/* Event Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {eventDetails.map((detail, index) => {
          const Icon = detail.icon;
          const content = (
            <div className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-white font-bold mb-1 flex items-center justify-center gap-1">
                {detail.title}
                {detail.isLink && (
                  <ExternalLinkIcon className="w-3 h-3 text-white/60" />
                )}
              </h3>
              <p className="text-white/60 text-sm">{detail.description}</p>
            </div>
          );
          
          if (detail.isLink && detail.url) {
            return (
              <a
                key={index}
                href={detail.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            );
          }
          
          return <div key={index}>{content}</div>;
        })}
      </div>
    </div>
  );
}
// Page 3: Takımımız - Modern Cards with Photos
function TakimimizPage() {
  const teamMembers = [
    { name: "Merve Bayezit", role: "Kulüp Başkanı", department: "Bilgisayar Mühendisliği", photo: "/photos/merve.png", linkedin: "https://www.linkedin.com/in/merve-bayezit/" },
    { name: "Sümeyye Yeğen", role: "Başkan Yardımcısı", department: "Bilgisayar Mühendisliği", photo: "/photos/sümeyye.png", linkedin: "https://www.linkedin.com/in/sümeyye-yeğen"},
    { name: "Ege Atılgan", role: "Etkinlik Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/photos/ege.png", linkedin: "https://www.linkedin.com/in/ege-at%C4%B1lgan-808840314/", github: "https://github.com/egeatilgan5757" },
    { name: "Seba Defa", role: "Etkinlik Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/photos/saba.png", linkedin: "https://www.linkedin.com/in/sabadefa/" },
    { name: "Emirhan Ertaş", role: "Sayman", department: "Bilgisayar Mühendisliği", photo: "/photos/emirhan.png", linkedin: "http://linkedin.com/in/emirertas"},
    { name: "Aydın Melih Yanıbol", role: "Yazılım Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/photos/melih.png", github: "https://github.com/MelihAydinYanibol/" },
    { name: "SeyyedBenyamin Valaei", role: "Yapay Zeka Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/photos/bunyamin.png", linkedin: "https://www.linkedin.com/in/seyyedbenyaminvalaei/", github: "https://github.com/seyyedbenyaminvalaei" },
    { name: "Umut Yıldız", role: "Yazılım Koordinatörü", department: "Bilgisayar Mühendisliği", photo: "/photos/umut.png", linkedin: "https://www.linkedin.com/in/umut-y%C4%B1ld%C4%B1z-670b79378" },
    { name: "İrem Kaya", role: "Sosyal Medya ve Tasarım Koordinatörü", department: "Yazılım Mühendisliği", photo: "/photos/irem.png", linkedin: "https://www.linkedin.com/in/irem-kaya-13324a394?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
    { name: "Başak Atlı", role: "Sosyal Medya ve Tasarım Koordinatörü", department: "Yazılım Mühendisliği", linkedin: "#" },
    { name: "Mehmet Karabulut", role: "Sosyal Medya ve Tasarım Koordinatörü", department: "Bilgisayar Mühendisliği", linkedin: "#" },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-4">
          <UsersIcon className="w-4 h-4" />
          <span>Ekibimiz</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Takımımız
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          UNIDES etkinliğini mümkün kılan 11 kişilik tutkulu ekibimiz
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative glass-strong rounded-2xl p-5 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Avatar with Photo or Initials */}
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-110">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-white font-bold text-sm mb-1 text-center">{member.name}</h3>
              <p className="text-emerald-400 text-xs font-medium mb-1 text-center">{member.role}</p>
              <p className="text-white/50 text-xs text-center mb-3">{member.department}</p>

              {/* Social Links - Only show if available */}
              {(member.linkedin || member.github) && (
                <div className="flex items-center justify-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-blue-600/50 transition-all duration-300"
                      title="LinkedIn"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
                      title="GitHub"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// Page 4: Önceki Etkinliklerimiz - Alternating Timeline
function OncekiEtkinliklerPage() {
  const pastEvents = [
    {
      year: "2025",
      title: "YYY Kuruluş",
      description: "Yazılım, Yapay Zeka ve Yaratıcılık Kulübünün Kuruluşu",
      participants: "12+",
      highlights: ["Kuruluş"]
    },
    {
      year: "2025",
      title: "Tavuk Pilav Etkinliği",
      description: "Üniversite öğrencileri için eğlenceli ve eğitici festival",
      participants: "100+",
      highlights: ["Etkinlik"]
    },
    {
      year: "2025",
      title: "Cisco Etkinliği",
      description: "CISCO Türkiye İşbirliği ile eğitim seminari ve soru cevap.",
      participants: "200+",
      highlights: ["CISCO", "NETWORKING"]
    },
    {
      year: "2026",
      title: "Pi Günü",
      description: "3/14 Pi günü özelinde matematik etkinliği.",
      participants: "100+",
      highlights: ["Matematik"]
    },
  ];
  
  const clubInfo = {
    name: "Yazılım, Yapay Zeka ve Yaratıcılık Kulübü",
    description: "Yazılım, Yapay Zeka ve Yaratıcılık Kulübü, 2025 yılında \"teknolojiyi sadece tüketen değil, ona yön veren bir nesil\" olma vizyonuyla yola çıktı. Üniversite hayatımızın ilk yıllarında, teorik bilgileri pratiğe dökecek, birlikte hata yapıp birlikte öğrenecek bir topluluğun eksikliğini hissettik ve bu boşluğu doldurmak için bir araya geldik. Kurulduğumuz ilk günden beri amacımız; yazılımın teknik gücünü, yapay zekanın sınırsız potansiyelini ve yaratıcılığın özgürlüğünü tek bir çatı altında toplamak. 2025'ten bu yana, her geçen gün büyüyen ekibimizle kampüsümüzde teknoloji rüzgarları estirmeye devam ediyoruz.",
    email: "yyyazilimkulubu@esenyurt.edu.tr",
    linkedin: "https://www.linkedin.com/company/yaz%C4%B1l%C4%B1m-yapay-zeka-ve-yarat%C4%B1c%C4%B1l%C4%B1k-toplulu%C4%9Fu/",
    instagram: "https://instagram.com/iesuyyyazilim",
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Club Banner Section */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-4">
            <BuildingIcon className="w-4 h-4" />
            <span>Kulübümüz Hakkında</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Kulüp Hakkında
          </h2>
        </div>
        
        {/* Club Banner Card */}
        <div 
          className="rounded-3xl p-8 mb-12 border-2"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderColor: 'rgba(59, 130, 246, 0.5)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Club Logo */}
            <div className="flex-shrink-0">
              <div 
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center p-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
                }}
              >
                <Image
                  src="/yyyLogo.png"
                  alt="YYYazılım Kulübü Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Club Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 
                className="text-white text-2xl md:text-3xl font-bold mb-4"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              >
                {clubInfo.name}
              </h3>
              <p className="text-white/80 text-base md:text-lg mb-6 leading-relaxed">
                {clubInfo.description}
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                {/* Email */}
                <a
                  href={`mailto:${clubInfo.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(16, 185, 129, 0.3)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(16, 185, 129, 0.2)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <MailIcon className="w-5 h-5 text-emerald-400" />
                  <span className="text-white text-sm font-medium">{clubInfo.email}</span>
                </a>
                
                {/* LinkedIn */}
                <a
                  href={clubInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(59, 130, 246, 0.2)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(59, 130, 246, 0.3)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(59, 130, 246, 0.2)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <LinkedInIcon className="w-5 h-5 text-blue-400" />
                  <span className="text-white text-sm font-medium">LinkedIn</span>
                </a>
                
                {/* Instagram */}
                <a
                  href={clubInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(236, 72, 153, 0.2)',
                    border: '1px solid rgba(236, 72, 153, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(236, 72, 153, 0.3)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(236, 72, 153, 0.2)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <InstagramIcon className="w-5 h-5 text-pink-400" />
                  <span className="text-white text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Past Events Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-4">
          <HistoryIcon className="w-4 h-4" />
          <span>Geçmiş Etkinlikler</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Önceki Etkinliklerimiz
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          UNIDES olarak geçmişte düzenlediğimiz başarılı etkinliklerimiz
        </p>
      </div>
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden lg:block">
        <div className="relative px-8">
          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal Line - positioned between cards and dots */}
            <div className="absolute left-0 right-0 top-[200px] h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 rounded-full shadow-lg shadow-purple-500/30" />
            
            {/* Events Grid */}
            <div className="grid grid-cols-4 gap-4">
              {pastEvents.map((event, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Card */}
                  <div className="glass-strong rounded-2xl p-4 hover:scale-105 transition-all duration-300 group w-full mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/30 text-white text-xs font-bold">
                        <CalendarIcon className="w-3 h-3" />
                        {event.year}
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 text-xs">
                        <UsersIcon className="w-3 h-3" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white font-bold text-sm mb-1 group-hover:text-purple-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-white/60 text-xs mb-2 line-clamp-2">{event.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1">
                      {event.highlights.slice(0, 2).map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 text-[10px] border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Dot - perfectly centered on the line */}
                  <div className="relative">
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-md opacity-60" />
                    {/* Dot */}
                    <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white shadow-xl flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Tablet: Horizontal Timeline */}
      <div className="hidden md:block lg:hidden">
        <div className="relative px-4">
          {/* Horizontal Line */}
          <div className="absolute left-4 right-4 top-[180px] h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 rounded-full shadow-lg shadow-purple-500/30" />
          
          {/* Events Grid */}
          <div className="grid grid-cols-4 gap-3">
            {pastEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Card */}
                <div className="glass-strong rounded-2xl p-3 hover:scale-105 transition-all duration-300 group w-full mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/30 text-white text-xs font-bold">
                      {event.year}
                    </div>
                    <div className="text-emerald-400 text-xs">
                      {event.participants}
                    </div>
                  </div>
                  
                  <h3 className="text-white font-bold text-xs mb-1 group-hover:text-purple-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-white/60 text-xs mb-2 line-clamp-2">{event.description}</p>
                </div>
                
                {/* Dot */}
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm opacity-60" />
                  <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-emerald-500 rounded-full" />
          
          {pastEvents.map((event, index) => (
            <div key={index} className="relative flex items-start mb-6 last:mb-0">
              {/* Dot */}
              <div className="absolute left-5 -translate-x-1/2 z-10 mt-3">
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm opacity-60" />
                  <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>
              </div>
              
              {/* Card */}
              <div className="ml-12 flex-1">
                <div className="glass-strong rounded-2xl p-4 hover:scale-[1.02] transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/30 text-white text-xs font-bold">
                      <CalendarIcon className="w-3 h-3" />
                      {event.year}
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs">
                      <UsersIcon className="w-3 h-3" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-purple-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3">{event.description}</p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1">
                    {event.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 text-[10px] border border-white/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Page 5: Etkinliğimize Katılın - Extended Form
function KatilinPage({ onSuccess }: { onSuccess?: (email: string) => void }) {
  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    universite: '',
    alan: '',
    kvkk: false,
    fotografIzni: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Turkish phone number validation: starts with 0, 11 digits total
    const phoneRegex = /^0[0-9]{10}$/;
    const digitsOnly = phone.replace(/\s/g, '');
    return phoneRegex.test(digitsOnly);
  };

  const validateName = (name: string): boolean => {
    // At least 2 characters, letters only (Turkish characters included)
    const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]{2,}$/;
    return nameRegex.test(name.trim());
  };

  const sanitizeInput = (input: string): string => {
    // Remove HTML tags and trim
    return input.replace(/<[^>]*>/g, '').trim();
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.ad.trim()) {
      newErrors.ad = 'Ad alanı zorunludur';
    } else if (!validateName(formData.ad)) {
      newErrors.ad = 'Geçerli bir ad giriniz (en az 2 karakter)';
    }

    if (!formData.soyad.trim()) {
      newErrors.soyad = 'Soyad alanı zorunludur';
    } else if (!validateName(formData.soyad)) {
      newErrors.soyad = 'Geçerli bir soyad giriniz (en az 2 karakter)';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı zorunludur';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    // Phone validation
    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefon alanı zorunludur';
    } else if (!validatePhone(formData.telefon)) {
      newErrors.telefon = 'Geçerli bir telefon numarası giriniz (05XX XXX XX XX)';
    }

    // University validation
    if (!formData.universite.trim()) {
      newErrors.universite = 'Üniversite alanı zorunludur';
    } else if (formData.universite.trim().length < 2) {
      newErrors.universite = 'Üniversite adı en az 2 karakter olmalıdır';
    }

    // Department validation
    if (!formData.alan.trim()) {
      newErrors.alan = 'Alan/bölüm alanı zorunludur';
    } else if (formData.alan.trim().length < 2) {
      newErrors.alan = 'Bölüm adı en az 2 karakter olmalıdır';
    }

    // KVKK validation
    if (!formData.kvkk) {
      newErrors.kvkk = 'KVKK onayı zorunludur';
    }

    // Fotoğraf izni validation
    if (!formData.fotografIzni) {
      newErrors.fotografIzni = 'Fotoğraf izni onayı zorunludur';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePhoneChange = (value: string) => {
    // Allow only digits and spaces, max 14 chars (0 + 10 digits + spaces)
    const cleaned = value.replace(/[^0-9\s]/g, '');
    setFormData(prev => ({ ...prev, telefon: cleaned }));
    if (errors.telefon) {
      setErrors(prev => ({ ...prev, telefon: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submit started');

    const isValid = validateForm();
    console.log('Form validation result:', isValid);
    
    if (!isValid) {
      console.log('Form validation failed, errors:', errors);
      return;
    }

    setIsSubmitting(true);
    console.log('Submitting form...');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Sanitize all data before sending
    const sanitizedData = {
      ad: sanitizeInput(formData.ad),
      soyad: sanitizeInput(formData.soyad),
      email: sanitizeInput(formData.email).toLowerCase(),
      telefon: formData.telefon.replace(/\s/g, ''),
      universite: sanitizeInput(formData.universite),
      alan: sanitizeInput(formData.alan),
      kvkk: formData.kvkk,
      fotografIzni: formData.fotografIzni,
    };

    console.log('Form submitted:', sanitizedData);
    
    // Call parent callback to show modal in Home component
    if (onSuccess) {
      onSuccess(sanitizedData.email);
    }
    
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      ad: '',
      soyad: '',
      email: '',
      telefon: '',
      universite: '',
      alan: '',
      kvkk: false,
      fotografIzni: false,
    });
    setErrors({});
  };

  // Custom Checkbox Component
  const CustomCheckbox = ({ 
    id, 
    checked, 
    onChange, 
    required = false,
    label
  }: { 
    id: string; 
    checked: boolean; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    label: React.ReactNode;
  }) => (
    <div className="flex items-start gap-3">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          required={required}
          className="peer sr-only"
        />
        <label
          htmlFor={id}
          className={`
            w-6 h-6 rounded-lg border-2 cursor-pointer
            flex items-center justify-center
            transition-all duration-300 ease-out
            ${checked 
              ? 'bg-gradient-to-br from-emerald-500 to-cyan-500 border-emerald-400 shadow-lg shadow-emerald-500/30' 
              : 'bg-white/10 border-white/30 hover:border-emerald-400/50 hover:bg-white/15'
            }
          `}
        >
          <svg
            className={`w-4 h-4 text-white transition-all duration-300 ${
              checked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </label>
      </div>
      <label htmlFor={id} className="text-white/80 text-sm cursor-pointer select-none">
        {label}
      </label>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-4">
          <CalendarIcon className="w-4 h-4" />
          <span>Kayıt</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Etkinliğimize Katılın
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          UNIDES 2026&apos;ya kaydolun ve geleceği kodlayanlar arasında yerinizi alın
        </p>
      </div>
      <div className="glass-strong rounded-3xl p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Row 1: Ad & Soyad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Adınız <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.ad}
                onChange={(e) => handleInputChange('ad', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.ad 
                    ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-white/20 focus:border-emerald-400/50 focus:bg-white/15 focus:ring-emerald-400/20'
                }`}
                placeholder="Adınızı girin"
                maxLength={50}
              />
              {errors.ad && <p className="text-red-400 text-xs mt-1">{errors.ad}</p>}
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Soyadınız <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.soyad}
                onChange={(e) => handleInputChange('soyad', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.soyad 
                    ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-white/20 focus:border-emerald-400/50 focus:bg-white/15 focus:ring-emerald-400/20'
                }`}
                placeholder="Soyadınızı girin"
                maxLength={50}
              />
              {errors.soyad && <p className="text-red-400 text-xs mt-1">{errors.soyad}</p>}
            </div>
          </div>
          {/* Row 2: Email & Telefon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                E-posta Adresiniz <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-white/20 focus:border-emerald-400/50 focus:bg-white/15 focus:ring-emerald-400/20'
                }`}
                placeholder="ornek@email.com"
                maxLength={100}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Telefon Numaranız <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                value={formData.telefon}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.telefon 
                    ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-white/20 focus:border-emerald-400/50 focus:bg-white/15 focus:ring-emerald-400/20'
                }`}
                placeholder="05XX XXX XX XX"
                maxLength={14}
              />
              {errors.telefon && <p className="text-red-400 text-xs mt-1">{errors.telefon}</p>}
            </div>
          </div>
          {/* Row 3: Üniversite & Alan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Üniversite <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.universite}
                onChange={(e) => handleInputChange('universite', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.universite 
                    ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-white/20 focus:border-emerald-400/50 focus:bg-white/15 focus:ring-emerald-400/20'
                }`}
                placeholder="Üniversitenizi girin"
                maxLength={100}
              />
              {errors.universite && <p className="text-red-400 text-xs mt-1">{errors.universite}</p>}
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Alanınız / Bölümünüz <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.alan}
                onChange={(e) => handleInputChange('alan', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.alan 
                    ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-white/20 focus:border-emerald-400/50 focus:bg-white/15 focus:ring-emerald-400/20'
                }`}
                placeholder="Örn: Bilgisayar Mühendisliği"
                maxLength={100}
              />
              {errors.alan && <p className="text-red-400 text-xs mt-1">{errors.alan}</p>}
            </div>
          </div>
          {/* Checkboxes */}
          <div className="space-y-4 pt-4">
            {/* KVKK Checkbox */}
            <CustomCheckbox
              id="kvkk"
              checked={formData.kvkk}
              required
              onChange={(e) => {
                setFormData({ ...formData, kvkk: e.target.checked });
                if (errors.kvkk) setErrors({ ...errors, kvkk: '' });
              }}
              label={
                <>
                  <span className="text-white font-medium">KVKK Aydınlatma Metni</span>&apos;ni okudum ve kişisel verilerimin işlenmesini kabul ediyorum.
                  <a
                    href="https://www.kvkk.gov.tr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 underline ml-1"
                  >
                    KVKK Kanunu ve Kuralları
                  </a>
                  <span className="text-red-400 ml-1">*</span>
                </>
              }
            />
            {errors.kvkk && <p className="text-red-400 text-xs ml-9">{errors.kvkk}</p>}
            
            {/* Fotoğraf İzni Checkbox */}
            <CustomCheckbox
              id="fotograf"
              checked={formData.fotografIzni}
              required
              onChange={(e) => {
                setFormData({ ...formData, fotografIzni: e.target.checked });
                if (errors.fotografIzni) setErrors({ ...errors, fotografIzni: '' });
              }}
              label={
                <>
                  Etkinlik sırasında çekilen fotoğraflarımın ve videolarımın sosyal medya hesaplarında paylaşılmasına izin veriyorum.
                  <span className="text-red-400 ml-1">*</span>
                </>
              }
            />
            {errors.fotografIzni && <p className="text-red-400 text-xs ml-9">{errors.fotografIzni}</p>}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full glass-strong bg-gradient-to-r from-emerald-500/80 to-cyan-500/80 rounded-xl px-8 py-4 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-3 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Gönderiliyor...' : 'Kayıt Ol'}</span>
            {!isSubmitting && <ArrowRightIcon className="w-5 h-5" />}
          </button>
          {/* Required Fields Note */}
          <p className="text-white/50 text-xs text-center">
            <span className="text-red-400">*</span> ile işaretli alanların doldurulması zorunludur.
          </p>
        </form>
      </div>
    </div>
  );
}