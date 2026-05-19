import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Globe, Award, CheckCircle, MapPin, Briefcase, Star } from "lucide-react";
import { SplitText } from "../../About/Shared";

// Staggered Container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      stiffness: 85,
      damping: 14
    }
  }
};

const TestSelection = () => {
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
    <div className="bg-white min-h-screen">
      {/* Hero Section - 90vh Full-Width Background */}
      <section className="relative h-[90vh] py-20 flex items-center justify-center text-center bg-[#031627] text-white overflow-hidden">
        {/* Full-Width Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Students Studying" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#031627]/60 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[#FDC017]/10 text-[#FDC017] text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-[#FDC017]/20">
              Global Standards
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
              <SplitText text="Master Your " className="inline" />
              <span className="text-[#FDC017] relative">
                <SplitText text="Exams" />
              </span>
              <SplitText text=" &" className="inline" />
              <br />
              <SplitText text="Choose Your Path" className="inline" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              From IELTS to GRE, we provide specialized coaching and data-driven insights to help you select the country and course that perfectly aligns with your career goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Test Preparation */}
      <section className="py-12 bg-gray-50/30 overflow-hidden relative">
        {/* Backdrop Ambient Glow */}
        <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-[#FDC017]/3 rounded-full filter blur-[90px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
                Specialized <span className="text-[#FDC017]">Test Coaching</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                Our instructors bring years of expertise to help you achieve the scores required by the world's most prestigious institutions.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: "IELTS / TOEFL", level: "Expert", desc: "Language proficiency training with focus on all 4 modules." },
              { name: "SAT / ACT", level: "Advanced", desc: "Strategy-based prep for undergraduate entry in US/Canada." },
              { name: "GRE / GMAT", level: "Pro", desc: "Quantitative and verbal reasoning for postgraduate success." },
              { name: "PTE / Duolingo", level: "Special", desc: "Modern computer-based testing methods and practice." }
            ].map((test, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.025 }}
                onMouseMove={handleMouseMove}
                className="group relative h-full"
              >
                {/* Premium Outer Border Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-[#FDC017]/20 to-transparent rounded-2xl shadow-black/100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                <div className="h-full bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-2xl hover:border-[#FDC017]/35 transition-all duration-500 overflow-hidden relative z-10 flex flex-col justify-between">
                  
                  {/* Spotlight Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                    style={{
                      background: "radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.08), transparent 80%)"
                    }}
                  />

                  {/* Subtle Dots Matrix Grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0 pointer-events-none" />

                  {/* Sliding glowing bottom bar */}
                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FDC017] origin-left scale-x-70 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="relative z-10">
                    {/* Card Top Row */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="relative">
                        {/* Rotating dashed outline decoration on hover */}
                        <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#FDC017]/30 scale-90 group-hover:scale-100 group-hover:rotate-45 transition-all duration-700 pointer-events-none" />
                        
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-[#FDC017]/10 group-hover:border-[#FDC017]/30 transition-all duration-500">
                          <Award className="w-6 h-6 text-[#031627] group-hover:text-[#FDC017] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                        </div>
                      </div>

                      <span className="text-[9px] font-black uppercase tracking-widest bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full group-hover:bg-[#FDC017]/15 group-hover:text-[#031627] border border-transparent group-hover:border-[#FDC017]/20 transition-all duration-300">
                        {test.level}
                      </span>
                    </div>

                    {/* Test Title */}
                    <h4 className="font-black text-[#031627] text-2xl mb-3 tracking-tight group-hover:text-gray-900 transition-colors">
                      {test.name}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-600 transition-colors">
                      {test.desc}
                    </p>
                  </div>

                  {/* Custom animated Learn More CTA */}
                  <div className="relative z-10 pt-4 flex items-center">
                    <button className="text-[#031627] font-bold text-sm flex items-center gap-2.5 transition-all duration-300 group/btn bg-transparent border-none p-0 cursor-pointer">
                      <span className="group-hover:text-[#FDC017] transition-colors duration-300">Learn More</span>
                      <motion.div
                        className="w-6 h-6 rounded-full bg-gray-50 border border-gray-150 flex items-center justify-center group-hover/btn:bg-[#FDC017] group-hover/btn:border-[#FDC017] transition-all duration-300 shrink-0"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#FDC017] group-hover/btn:text-[#031627] transition-colors duration-300" />
                      </motion.div>
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: Country Comparison & Selection */}
      <section className="py-8 bg-[#031627] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="lg:w-1/2"
             >
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Data-Driven <span className="text-[#FDC017]">Country</span> Selection</h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Choosing where to study is as important as what to study. We provide a comprehensive comparison based on cost of living, post-study work rights, and industry presence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { icon: <MapPin className="w-6 h-6" />, title: "United Kingdom", sub: "1-year Masters & PSW" },
                     { icon: <Briefcase className="w-6 h-6" />, title: "USA / Canada", sub: "STEM & OPT benefits" },
                     { icon: <Globe className="w-6 h-6" />, title: "Europe", sub: "Low tuition & cultural depth" },
                     { icon: <Star className="w-6 h-6" />, title: "Australia", sub: "High lifestyle & work opportunities" }
                   ].map((item, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -5, scale: 1.03 }}
                        className="group relative flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#FDC017]/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#FDC017]/10 transition-all duration-300 overflow-hidden"
                     >
                        {/* Hover glow background effect inside card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FDC017]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="text-[#FDC017] mt-1 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                            {item.icon}
                        </div>
                        <div className="relative z-10">
                           <h5 className="font-bold text-lg mb-1 group-hover:text-[#FDC017] transition-colors duration-300">{item.title}</h5>
                           <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.sub}</p>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="lg:w-1/2 relative group"
             >
                {/* Decorative border behind image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#FDC017]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl z-0" />
                
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Students Collaborating" 
                  className="rounded-2xl shadow-2xl relative z-10 border border-white/5 group-hover:border-[#FDC017]/30 transition-colors duration-500" 
                />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FDC017] rounded-full flex items-center justify-center -z-10 blur-[100px] opacity-40 group-hover:opacity-60 group-hover:scale-150 transition-all duration-700" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Preparation Timeline */}
      <section className="py-20 bg-gray-50 overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-[#FDC017]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-20">
              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
                  Your <span className="text-[#FDC017]">Preparation Roadmap</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">A typical timeline for test preparation and university selection designed to maximize your potential.</p>
              </motion.div>
           </div>
           
           <div className="max-w-5xl mx-auto relative">
              {/* Animated Center Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#FDC017]/50 via-[#FDC017] to-[#FDC017]/10 -translate-x-1/2 hidden md:block rounded-full shadow-[0_0_15px_rgba(253,192,23,0.5)]" 
              />
              
              <div className="space-y-10">
                {[
                  { month: "Month 1-2", title: "Diagnostic & Foundation", desc: "Initial tests and building core concepts in English/Math.", delay: 0.2 },
                  { month: "Month 3", title: "Advanced Practice", desc: "Full-length mock tests and performance analysis.", delay: 0.4 },
                  { month: "Month 4", title: "Country Finalization", desc: "Finalizing the shortlist based on projected test scores.", delay: 0.6 }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: step.delay }}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                     <div className="md:w-1/2 text-center md:text-left w-full">
                        <motion.div 
                           whileHover={{ scale: 1.03, y: -5 }}
                           transition={{ type: "spring", stiffness: 300, damping: 20 }}
                           className={`flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#FDC017]/30 transition-all duration-300 relative overflow-hidden ${i % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start text-left'}`}
                        >
                           {/* Hover Glow inside card */}
                           <div className="absolute inset-0 bg-gradient-to-br from-[#FDC017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                           
                           <span className="inline-block px-4 py-1.5 bg-[#FDC017]/10 text-[#FDC017] text-sm font-black uppercase tracking-widest rounded-full mb-4 border border-[#FDC017]/20 group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-colors duration-300">
                             {step.month}
                           </span>
                           <h4 className="text-2xl md:text-3xl font-bold text-[#031627] mb-3 group-hover:text-[#FDC017] transition-colors duration-300">{step.title}</h4>
                           <p className="text-gray-500 leading-relaxed max-w-sm group-hover:text-gray-700 transition-colors duration-300">{step.desc}</p>
                        </motion.div>
                     </div>
                     
                     {/* Timeline Node */}
                     <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: step.delay + 0.3, type: "spring", stiffness: 200 }}
                        className="w-10 h-10 bg-white rounded-full border-4 border-[#FDC017] shadow-[0_0_20px_rgba(253,192,23,0.4)] relative z-10 hidden md:flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
                     >
                        <div className="w-3 h-3 bg-[#031627] rounded-full group-hover:bg-[#FDC017] transition-colors duration-300" />
                     </motion.div>
                     
                     <div className="md:w-1/2 hidden md:block" />
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Perfect CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#031627] rounded-3xl p-12 lg:p-16 relative overflow-hidden text-center shadow-2xl"
          >
            {/* Subtle Brand Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDC017]/5 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FDC017]/5 rounded-full blur-[80px] -ml-32 -mb-32" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#FDC017]/10 text-[#FDC017] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-[#FDC017]/20">
                Diagnostic Aid
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Unsure Which <span className="text-[#FDC017]">Test</span> to Take?
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Get a free diagnostic test and an expert consultation today to determine your optimal path to success.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-2xl hover:bg-white transition-all duration-300 shadow-xl shadow-[#FDC017]/20"
                >
                  Start Diagnostic
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Talk to Counselor
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestSelection;
