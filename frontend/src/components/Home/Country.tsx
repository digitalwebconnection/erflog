import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { countries } from "../../constants/countries";

const CountrySection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile viewport size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play timer for desktop rotation only
  useEffect(() => {
    if (isMobile) return;
    if (countries.length <= visibleCards) return;
    
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % countries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Display all countries on mobile for swipe list, or rotated subset on desktop
  const displayedCountries = isMobile
    ? countries
    : Array.from({ length: Math.min(visibleCards, countries.length) }, (_, i) =>
        countries[(startIndex + i) % countries.length]
      );

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-brandYellow font-semibold tracking-widest text-2xl">
          Choose Your Study Destination
        </h2>
        <p className="text-center text-4xl md:text-5xl font-bold mt-3 mb-14 text-primary tracking-tight leading-tight">
          Connect with Erfolg experts for study <br />
          <span>abroad consultation.</span>
        </p>

        {/* Mobile View: Infinite Auto-Scrolling CSS Marquee */}
        <div className="mobile-marquee-container overflow-hidden w-full relative z-20">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-infinite {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
            .animate-marquee-infinite:hover {
              animation-play-state: paused;
            }
            @media (min-width: 640px) {
              .mobile-marquee-container {
                display: none !important;
              }
            }
            @media (max-width: 639px) {
              .desktop-grid-container {
                display: none !important;
              }
            }
          `}</style>
          <div className="animate-marquee-infinite">
            {[...countries, ...countries].map((country, index) => (
              <div
                key={`marquee-${country._id}-${index}`}
                onClick={() => navigate(`/destination/${country.code}`)}
                className="relative group h-[340px] w-[260px] rounded-3xl overflow-hidden cursor-pointer shadow-lg shrink-0 mr-6 pointer-events-auto z-30"
              >
                {/* Image */}
                <img
                  src={country.image}
                  alt={country.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Country Name */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h3 className="text-white text-xl font-extrabold tracking-wide text-center px-4">
                    {country.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop & Tablet View: Original Rotated Grid Slide */}
        <div className="desktop-grid-container overflow-hidden min-h-[380px] relative z-20">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {displayedCountries.map((country, index) => (
                <motion.div
                  key={`${country._id}-${startIndex}-${index}`}
                  layout
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => navigate(`/destination/${country.code}`)}
                  className="relative group h-[380px] rounded-3xl overflow-hidden cursor-pointer shadow-lg z-30 pointer-events-auto"
                >
                  {/* Image */}
                  <img
                    src={country.image}
                    alt={country.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Country Name */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h3 className="text-white text-2xl font-extrabold tracking-wide transition-all duration-300 group-hover:opacity-0 text-center px-4">
                      {country.name}
                    </h3>
                  </div>

                  {/* Hover Panel */}
                  <div className="absolute bottom-0 right-0 w-[85%] h-[42%] bg-white/95 backdrop-blur-md p-5 rounded-tl-3xl translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20 flex flex-col justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      <h4 className="text-lg font-black text-primary mb-2">
                        {country.name}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {country.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CountrySection;