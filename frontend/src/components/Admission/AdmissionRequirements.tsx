import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { GraduationCap, Trophy, User, AlertCircle, Check } from "lucide-react";

const categories = [
  {
    title: "Academic Documents",
    icon: GraduationCap,
    color: "#FDC017",
    items: [
      "High School / Degree Certificates",
      "Official Academic Transcripts",
      "Letters of Recommendation (LOR)",
      "Statement of Purpose (SOP)",
      "Resume / Curriculum Vitae (CV)"
    ]
  },
  {
    title: "Test Scores",
    icon: Trophy,
    color: "#FDC017",
    items: [
      "English Proficiency (IELTS/TOEFL/PTE)",
      "Standardized Tests (GRE/GMAT/SAT)",
      "Subject-specific Entrance Tests",
      "Language Proficiency (Optional)",
      "Portfolio (For Design/Arts courses)"
    ]
  },
  {
    title: "Personal Documents",
    icon: User,
    color: "#FDC017",
    items: [
      "Valid Passport Copy",
      "Birth Certificate",
      "Passport Size Photographs"
    ]
  }
];

// Staggered container animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14
    }
  }
};

const AdmissionRequirements = () => {
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
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#FDC017]/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#031627]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-8 h-[2px] bg-[#FDC017]"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-[#FDC017] font-bold uppercase tracking-[0.3em] text-[11px]">Documentation</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tighter leading-tight">
              Application
              <span className="text-[#FDC017] "> Checklist</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
              Organizing your documents correctly is the first step toward a successful university application. Here's everything you need.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[180px]">
          
          {/* 1. Academic Documents (Large vertical) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            whileHover={{ y: -8, scale: 1.015 }}
            onMouseMove={handleMouseMove}
            className="md:col-span-3 lg:col-span-4 row-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
          >
            {/* Spotlight Glow Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
              style={{
                background: "radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.08), transparent 80%)"
              }}
            />

            {/* Glowing top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FDC017] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

            {/* Top-Right Floating Icon */}
            <div className="absolute top-0 right-0 p-8 z-10">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <GraduationCap className="w-14 h-14 text-[#FDC017]/20 group-hover:text-[#FDC017]/30 transition-colors duration-500" />
              </motion.div>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 mt-2 tracking-tight">
                  Academic <br/><span className="text-[#FDC017]">Portfolio</span>
                </h3>

                {/* Staggered checklist items */}
                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {categories[0].items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium group/item p-2 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100"
                    >
                      {/* Interactive Premium Checkbox */}
                      <div className="w-5 h-5 rounded-md border-2 border-gray-200 flex items-center justify-center transition-all duration-300 group-hover/item:border-[#FDC017] group-hover/item:bg-[#FDC017]/10 shrink-0">
                        <Check className="w-3.5 h-3.5 text-transparent group-hover/item:text-[#FDC017] transition-all duration-300 scale-50 group-hover/item:scale-100" />
                      </div>
                      <span className="transition-colors group-hover/item:text-gray-900">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Decorative base bar */}
              <div className="w-full h-1 bg-[#FDC017]/30 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  className="h-full bg-[#FDC017]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* 2. Important Tip / Preparation Strategy (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            onMouseMove={handleMouseMove}
            className="md:col-span-3 lg:col-span-8 row-span-1 bg-[#031627] rounded-2xl p-8 flex items-center justify-between group overflow-hidden relative shadow-lg border border-white/5"
          >
            {/* Spotlight Glow Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
              style={{
                background: "radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.15), transparent 80%)"
              }}
            />

            <div className="relative z-10 flex items-center gap-6 w-full">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-[#FDC017]/10 flex items-center justify-center border border-[#FDC017]/20 shrink-0"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <AlertCircle className="w-7 h-7 text-[#FDC017] animate-pulse" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[#FDC017] font-bold uppercase tracking-widest text-[10px]">Preparation Strategy</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDC017] animate-ping" />
                </div>
                <p className="text-white text-sm lg:text-base font-medium max-w-xl leading-relaxed">
                  Start document preparation <span className="text-[#FDC017] font-bold underline decoration-wavy decoration-[#FDC017]/40 underline-offset-4">6-8 months</span> before deadlines for a stress-free process.
                </p>
              </div>
            </div>

            {/* Glowing gold backline decoration */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FDC017]/5 to-transparent pointer-events-none" />
          </motion.div>

          {/* 3. Test Scores (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.015 }}
            onMouseMove={handleMouseMove}
            className="md:col-span-3 lg:col-span-5 row-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
          >
            {/* Spotlight Glow Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
              style={{
                background: "radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.08), transparent 80%)"
              }}
            />

            {/* Top Glowing Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FDC017] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-2xl font-black text-gray-900 leading-tight tracking-tight">
                  Standardized <br/><span className="text-[#FDC017]">Scores</span>
                </h3>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                >
                  <Trophy className="w-8 h-8 text-[#FDC017] group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
              </div>

              {/* Render all 5 items with dynamic row animation */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-2 flex-1"
              >
                {categories[1].items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-700 hover:bg-[#FDC017]/10 hover:text-gray-900 hover:border-[#FDC017]/35 transition-all duration-200 group/pill shrink-0"
                  >
                    <Trophy className="w-3.5 h-3.5 text-[#FDC017]/50 group-hover/pill:text-[#FDC017] transition-colors shrink-0" />
                    <span className="truncate">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 4. Personal Documents / Identity (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.015 }}
            onMouseMove={handleMouseMove}
            className="md:col-span-3 lg:col-span-3 row-span-2 bg-[#031627] rounded-2xl p-8 text-white group overflow-hidden relative shadow-lg border border-white/5"
          >
            {/* Spotlight Glow Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
              style={{
                background: "radial-gradient(250px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.15), transparent 80%)"
              }}
            />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                  className="mb-4 inline-block"
                >
                  <User className="w-8 h-8 text-[#FDC017] group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 tracking-tight text-white">
                  Identity <br/><span className="text-[#FDC017]">Verification</span>
                </h3>
              </div>

              {/* Animated identity checklist list items */}
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 opacity-90 text-sm font-medium flex-1 justify-end flex flex-col"
              >
                {categories[2].items.map((item, i) => (
                  <motion.li 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-white/5 transition-all text-white/80 hover:text-white cursor-pointer group/ident"
                  >
                    <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center group-hover/ident:bg-[#FDC017] group-hover/ident:text-[#031627] text-[#FDC017] transition-all duration-300 text-[10px] font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-xs font-semibold leading-none">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionRequirements;
