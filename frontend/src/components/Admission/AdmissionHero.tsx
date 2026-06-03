import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Landmark, Users } from "lucide-react";
import { SplitText } from "../About/Shared";

const AdmissionHero = () => {
  const navigate = useNavigate();
  const features = [
    { 
      icon: <GraduationCap className="w-5 h-5 lg:w-7 lg:h-7 text-[#FDC017]" />, 
      title: "Scholarship Guidance", 
      sub: "Unlock funding opportunities" 
    },
    { 
      icon: <Landmark className="w-5 h-5 lg:w-7 lg:h-7 text-[#FDC017]" />, 
      title: "Ivy League Focus", 
      sub: "Specialized prep for elite unis" 
    },
    { 
      icon: <Users className="w-5 h-5 lg:w-7 lg:h-7 text-[#FDC017]" />, 
      title: "Mentorship", 
      sub: "Learn from global alumni" 
    }
  ];

  return (
    <section className="relative min-h-[90vh] lg:h-[75vh] py-8 lg:py-12 flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1.5 bg-[#FDC017] text-[#031627] font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase rounded-full mb-5"
              >
                Global Education Hub
              </motion.span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-5 tracking-tight">
                <SplitText text="Your Pathway to" />{"\u00A0"}
                <span className="text-[#FDC017] inline-block relative">
                  <SplitText text="Excellence" />
                </span>{"\u00A0"}
                <SplitText text="at Top Universities" />
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-8 lg:mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
                We bridge the gap between your dreams and a world-class education. From identifying the right institution to securing your admission, we are with you at every step.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <motion.button
                  onClick={() => navigate("/contact")}
                  whileHover={{ y: -3, scale: 1.02, backgroundColor: "#fff" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 lg:py-4 bg-[#FDC017] text-[#031627] font-black text-sm rounded-xl shadow-xl shadow-[#FDC017]/20 transition-all duration-300 cursor-pointer"
                >
                  Start Your Journey
                </motion.button>
                <motion.button
                  onClick={() => navigate("/")}
                  whileHover={{ y: -3, scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 lg:py-4 bg-transparent border-2 border-white/20 text-white font-black text-sm rounded-xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  Explore Countries
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Features Grid (More Compact) */}
          <div className="w-full lg:w-2/5">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4"
             >
                {features.map((card, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="p-4 lg:p-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center gap-4 transition-all cursor-pointer group"
                  >
                     <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#FDC017]/20 transition-colors">
                        {card.icon}
                     </div>
                     <div className="text-left">
                        <h4 className="text-white text-xs lg:text-base font-bold tracking-tight">{card.title}</h4>
                        <p className="text-[9px] lg:text-[11px] text-gray-400 group-hover:text-gray-300 transition-colors">{card.sub}</p>
                     </div>
                  </motion.div>
                ))}
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;
