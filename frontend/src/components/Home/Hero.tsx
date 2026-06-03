import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SplitText } from "../About/Shared";

import homehero12 from "../../assets/homehero12.jpg";
import homehero14 from "../../assets/homehero14.jpg";
import homehero17 from "../../assets/homehero17.jpg";


const images = [homehero12, homehero14, homehero17];

const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const currentIndex = Math.abs(page % images.length);

  // ✅ CLEAN AUTO SLIDER (no re-render issue)
  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([prev]) => [prev + 1, 1]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative -mt-3 h-[90vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Slider */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={page}
            src={images[currentIndex]}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-primary/60 z-10"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-brandYellow mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandYellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brandYellow"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">India's #1 Trusted Study Abroad Partner</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
          <SplitText text="Transform Your Future with" />
          <br />
          <span className="text-brandYellow relative inline-block">
            <SplitText text="Global Education" />
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-brandYellow/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Get expert guidance for top-tier admissions in the UK, Australia, Ireland, Finland, and UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          {/* <button
            onClick={() => {
              document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-10 py-4 bg-brandYellow text-primary font-black rounded-2xl shadow-[0_15px_30px_-5px_rgba(253,192,23,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Destinations
          </button> */}

          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto px-10 py-4 bg-brandYellow text-primary font-black rounded-2xl shadow-[0_15px_30px_-5px_rgba(253,192,23,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Book Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;