import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, Compass, BookOpen, GraduationCap, Globe, Coffee, ArrowRight, ArrowLeft, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Expert Counseling",
    description: "Deep dive into your aspirations and career goals with our experts. We help you map out a clear path to success with personalized mentorship.",
    icon: Search,
    color: "#FDC017",
    tag: "First Step"
  },
  {
    number: "02",
    title: "Global Selection",
    description: "Navigate 500+ universities to find your perfect academic match. Tailored recommendations based on your unique profile and budget.",
    icon: Globe,
    color: "#3b82f6",
    tag: "Phase 01"
  },
  {
    number: "03",
    title: "Applications",
    description: "Crafting winning SOPs and managing documentation with precision. Every detail of your application handled with absolute care.",
    icon: BookOpen,
    color: "#ef4444",
    tag: "Phase 02"
  },
  {
    number: "04",
    title: "Visa Excellence",
    description: "Success-driven visa guidance with a 99% approval track record. We prepare you for every possible interview scenario.",
    icon: Compass,
    color: "#10b981",
    tag: "Phase 03"
  },
  {
    number: "05",
    title: "Financial Planning",
    description: "Navigating scholarships to make your international dream affordable. Smart budgeting and secure funding strategies.",
    icon: GraduationCap,
    color: "#f97316",
    tag: "Phase 04"
  },
  {
    number: "06",
    title: "Arrival Support",
    description: "From airport pickup to accommodation, we ensure you feel at home. Your comfort is our priority in your new destination.",
    icon: Coffee,
    color: "#a855f7",
    tag: "Phase 05"
  },
  {
    number: "07",
    title: "Success & Beyond",
    description: "Join our global alumni network and continue your journey with ongoing support throughout your international career.",
    icon: Heart,
    color: "#ec4899",
    tag: "Phase 06"
  }
];

const AdmissionSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Cinematic Background Auras */}
      <AnimatePresence>
        <motion.div
          key={`aura-${activeStep}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none transition-colors duration-1000"
          style={{ backgroundColor: steps[activeStep].color }}
        />
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-24">
          
          {/* ── Left: Info & Control ── */}
          <div className="xl:w-2/5 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#FDC017]" />
                <span className="text-[#FDC017] text-[10px] font-black uppercase tracking-[0.5em]">The Erfolg Way</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-[0.85] tracking-tighter">
                Our Seamless <br />
                <span className="text-gray-200">6-Phase</span> Journey
              </h2>
              
              {/* Progress Bar Container */}
              <div className="space-y-4 mb-10 max-w-sm">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Journey Progress</span>
                  <span className="text-xl font-black text-[#031627]">{activeStep + 1}<span className="text-gray-300 text-sm font-medium">/{steps.length}</span></span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#FDC017]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6">
                <button 
                  onClick={prevStep}
                  className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#031627] hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl group cursor-pointer"
                >
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <div className="w-[1px] h-10 bg-gray-100" />
                <button 
                  onClick={nextStep}
                  className="flex items-center gap-4 bg-[#031627] text-white px-8 py-5 rounded-full font-bold hover:bg-[#FDC017] hover:text-[#031627] transition-all duration-500 shadow-2xl shadow-[#031627]/20 group cursor-pointer"
                >
                  Next Phase
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Cinematic Carousel Card ── */}
          <div className="xl:w-3/5 w-full h-[420px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 40, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -40, rotate: -2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="h-full w-full bg-white rounded-3xl border border-gray-200 shadow-[0_40px_80px_rgba(0,0,0,0.06)] p-8 md:p-12 flex flex-col justify-between group relative overflow-hidden">
                  
                  {/* Decorative Number Watermark */}
                  <div 
                    className="absolute top-0 right-0 text-[300px] font-black leading-none -translate-y-1/3 translate-x-1/4 pointer-events-none select-none opacity-[0.03]"
                    style={{ color: steps[activeStep].color }}
                  >
                    {steps[activeStep].number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-12">
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: `${steps[activeStep].color}15`, color: steps[activeStep].color }}
                      >
                        {(() => {
                          const ActiveIcon = steps[activeStep].icon;
                          return <ActiveIcon size={28} />;
                        })()}
                      </motion.div>
                      <div className="px-5 py-2 rounded-full border border-gray-100 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 bg-gray-50">
                        {steps[activeStep].tag}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-black text-[#031627] mb-4 tracking-tighter leading-none">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl font-medium">
                      {steps[activeStep].description}
                    </p>
                  </div>

                  {/* Dynamic Bottom Progress Line */}
                  <div 
                    className="absolute bottom-0 left-0 h-4 transition-all duration-1000 ease-out"
                    style={{ width: "100%", backgroundColor: steps[activeStep].color }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionSteps;
