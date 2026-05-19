import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { DollarSign, Percent, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const scholarships = [
  {
    title: "Merit Excellence",
    description: "Recognition for high achievers with exceptional academic backgrounds.",
    amount: "100% Tuition",
    tag: "Academic",
    icon: TrendingUp,
    percentage: 100
  },
  {
    title: "Financial Aid",
    description: "Needs-based support to bridge the gap in your education funding.",
    amount: "Partial Grants",
    tag: "Support",
    icon: DollarSign,
    percentage: 60
  },
  {
    title: "Early Enrollment",
    description: "Privileged waivers for proactive students securing early seats.",
    amount: "20% Waiver",
    tag: "Time-Sensitive",
    icon: Percent,
    percentage: 20
  }
];

// Staggered Container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

const AdmissionScholarships = () => {
  // A helper function to track mouse hover for premium spotlight glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--x", `${x}px`);
    currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-[#FDC017]/3 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#031627]/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-[#FDC017] animate-pulse" />
                <span className="text-[#031627] font-bold uppercase tracking-[0.3em] text-[10px]">Financial Support</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-[#031627] leading-[1.05] tracking-tighter">
                Scholarships & <br />
                <span className="text-[#FDC017]">Global Funding</span>
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-md pl-6 border-l-2 border-[#FDC017]/40 lg:mb-2"
          >
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Don't let financial barriers stop your dreams. We guide you through the complex landscape of university grants and international aid.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {scholarships.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              onMouseMove={handleMouseMove}
              className="group relative h-full"
            >
              {/* Premium Glow Outer Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[#FDC017]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
              
              <div className="h-full bg-gray-50/80 backdrop-blur-sm rounded-2xl p-10 border border-gray-200/60 shadow-md group-hover:shadow-2xl group-hover:bg-white group-hover:border-[#FDC017]/35 transition-all duration-500 overflow-hidden relative z-10 flex flex-col justify-between">
                
                {/* Spotlight Ambient Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                  style={{
                    background: "radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.09), transparent 80%)"
                  }}
                />

                {/* Subtle Dots Matrix Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-0 pointer-events-none" />

                <div className="relative z-10 flex-1">
                  {/* Top Row with concentric pulsing icon containers */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative">
                      {/* Decorative outer rotating halo */}
                      <div className="absolute -inset-2 rounded-2xl border border-dashed border-[#FDC017]/30 scale-90 group-hover:scale-100 group-hover:rotate-45 transition-all duration-700 pointer-events-none" />
                      
                      <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:border-[#FDC017]/50 group-hover:shadow-md group-hover:bg-[#031627] transition-all duration-500">
                        <item.icon className="w-8 h-8 text-[#031627] group-hover:text-[#FDC017] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                      </div>
                    </div>

                    <span className="px-3.5 py-1.5 rounded-full bg-[#031627]/5 text-[#031627] text-[10px] font-bold uppercase tracking-wider group-hover:bg-[#FDC017]/15 group-hover:text-[#031627] transition-all duration-300 border border-transparent group-hover:border-[#FDC017]/20">
                      {item.tag}
                    </span>
                  </div>

                  {/* Scholarship Name */}
                  <h3 className="text-3xl font-black text-[#031627] mb-4 tracking-tight group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-600 transition-colors min-h-[48px]">
                    {item.description}
                  </p>
                </div>

                {/* Progress / Value Visualization */}
                <div className="relative z-10 w-full mb-8 shrink-0">
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">
                    <span>Funding Level</span>
                    <span className="text-[#FDC017] font-black">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200/70 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#FDC017]/80 to-[#FDC017]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Bottom Row: Grant Value and CTA */}
                <div className="relative z-10 pt-6 border-t border-gray-100 flex items-center justify-between shrink-0">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1.5">Grant Value</div>
                    <div className="text-2xl font-black text-[#031627] tracking-tight group-hover:text-[#FDC017] transition-colors duration-300">
                      {item.amount}
                    </div>
                  </div>
                  
                  <motion.div 
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:bg-[#FDC017] group-hover:border-[#FDC017] group-hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#031627] group-hover:translate-x-1.5 transition-all duration-300" />
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionScholarships;
