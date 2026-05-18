import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, ShieldCheck, Globe2 } from "lucide-react";

export interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    description?: string;
    image?: string;
    backgroundImages?: string[];
    ctaText?: string;
    ctaText2?: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();
  const images = data.backgroundImages || [];

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#020c16]">
      {/* Background with subtle zoom/parallax */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[currentBg] || data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#020c16]/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020c16]/50 to-[#020c16]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            {/* Elegant Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-[#FDC017] mb-8 shadow-xl"
            >
              <Globe2 size={16} />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em]">{data.subtitle}</span>
            </motion.div>

            {/* Main Title - Perfectly Balanced Size */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter max-w-5xl mx-auto">
              {data.title.split(' ').map((word, i, arr) => (
                <span key={i} className="inline-block whitespace-nowrap">
                  {word.toLowerCase() === "study" ? (
                    <span className="text-white/60 font-medium">{word}</span>
                  ) : i >= arr.length - 2 ? (
                     <span className="text-[#FDC017] drop-shadow-[0_0_20px_rgba(253,192,23,0.2)]">{word}</span>
                  ) : (
                    word
                  )}
                  &nbsp;
                </span>
              ))}
            </h1>

            {/* Balanced Description */}
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto font-normal opacity-90">
              {data.description}
            </p>

            {/* Arranged Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto group relative px-12 py-5 bg-[#FDC017] text-[#031627] font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(253,192,23,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center justify-center gap-3">
                  {data.ctaText}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => navigate("/admission")}
                className="w-full sm:w-auto px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 active:scale-95"
              >
                {data.ctaText2 || "Explore Programs"}
              </button>
            </div>

            {/* Minimal Trust Line */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 pt-12 border-t border-white/10 w-full max-w-4xl">
               <div className="flex items-center justify-center sm:justify-end gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <ShieldCheck size={24} className="text-[#FDC017]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-white text-lg font-black leading-none">95%</span>
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Visa Success Rate</span>
                  </div>
               </div>
               <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <Star size={24} className="text-[#FDC017]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-white text-lg font-black leading-none">500+</span>
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Global Partners</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle corner gradients */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-primary/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#FDC017]/5 blur-[120px] translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Hero;