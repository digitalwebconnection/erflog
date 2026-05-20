import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { SplitText } from "../About/Shared";

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
  const images = data.backgroundImages || (data.image ? [data.image] : []);

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

  // Safely split title to style "Study in" and the country name separately
  let prefix = "";
  let suffix = "";
  
  const titleLower = data.title.toLowerCase();
  if (titleLower.startsWith("study in the ")) {
    prefix = data.title.substring(0, 12); // "Study in the"
    suffix = data.title.substring(13);    // "United Kingdom"
  } else if (titleLower.startsWith("study in ")) {
    prefix = data.title.substring(0, 8);  // "Study in"
    suffix = data.title.substring(9);     // "Canada"
  } else {
    const words = data.title.split(' ');
    const splitIndex = words.length > 2 ? 2 : words.length;
    prefix = words.slice(0, splitIndex).join(' ');
    suffix = words.slice(splitIndex).join(' ');
  }

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center bg-[#031627]">
      {/* Background with subtle zoom slider */}
      <div className="absolute inset-0 z-0 bg-[#031627]">
        <AnimatePresence>
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[currentBg]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-white flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl flex flex-col items-center"
        >
          {data.subtitle && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{data.subtitle}</span>
            </motion.div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tighter">
            <SplitText text={prefix} className="block mb-1" />
            {suffix && (
              <span className="text-[#FDC017] relative">
                <SplitText text={suffix} />
              </span>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 font-medium leading-relaxed mb-8"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mx-auto"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(253, 192, 23, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FDC017] text-[#031627] px-8 md:px-10 py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all w-full sm:w-auto cursor-pointer"
            >
              {data.ctaText || "Book Free Consultation"} <FaChevronRight className="text-sm" />
            </motion.button>
            
            {/* Added secondary CTA for exploring programs */}
            <motion.button
              onClick={() => navigate("/admission")}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#031627" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 md:px-10 py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all w-full sm:w-auto cursor-pointer"
            >
              {data.ctaText2 || "Explore Programs"}
            </motion.button>
          </motion.div>
          
          {/* Minimal Trust Line aligned with the clean About style */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-16 pt-6 border-t border-white/20 w-full max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div>
                <span className="block text-[#FDC017] text-3xl font-black leading-none mb-1">95%</span>
                <span className="text-gray-300 text-xs uppercase font-bold tracking-widest">Visa Success Rate</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div>
                <span className="block text-[#FDC017] text-3xl font-black leading-none mb-1">500+</span>
                <span className="text-gray-300 text-xs uppercase font-bold tracking-widest">Global Partners</span>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
