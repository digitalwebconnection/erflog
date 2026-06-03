import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Globe, ArrowRight, DollarSign, Target, ChevronDown } from "lucide-react";
import { SplitText, Counter } from "../About/Shared";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Scholarships = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scholarshipTypes = [
    {
      title: "Merit-Based Awards",
      desc: "For students with exceptional academic records and high standardized test scores.",
      amount: "Up to 100% Tuition",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Need-Based Grants",
      desc: "Financial aid for talented students who require support to bridge the funding gap.",
      amount: "Partial to Full Cover",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Research Fellowships",
      desc: "Specialized funding for postgraduate students pursuing high-impact research projects.",
      amount: "Stipend + Tuition",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Global Diversity Grants",
      desc: "Awards aimed at promoting international diversity on global university campuses.",
      amount: "Fixed Grant Amount",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - 90vh Full-Width Background */}
      <section className="relative h-[90vh] py-20 flex items-center justify-center text-center bg-[#031627] text-white overflow-hidden">
        {/* Full-Width Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
              <SplitText text="Elite Funding &" className="block mb-1" />
              <span className="text-[#FDC017] relative">
                <SplitText text="Scholarship Mastery" />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-2xl mx-auto mb-10"
            >
              We decode the complexities of global financial aid, helping you secure the funding needed to attend the world's most prestigious institutions without the burden of debt.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(253, 192, 23, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#FDC017] text-[#031627] px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 mx-auto transition-all cursor-pointer"
                >
                  Start Your Journey <FaChevronRight className="text-sm" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Scholarship Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
              Curated <span className="text-[#FDC017]">Funding Opportunities</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Our experts track thousands of live grants to find the perfect match for your profile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarshipTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-10 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDC017]/5 rounded-bl-[100px] group-hover:bg-[#FDC017]/10 transition-colors" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-20 h-20 rounded-xl bg-gray-50 flex items-center justify-center text-[#FDC017] group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all duration-500 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-black text-[#031627]">{item.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-[#031627] font-bold text-[10px] uppercase tracking-widest rounded-lg">{item.amount}</span>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Tips Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="bg-[#031627] rounded-2xl p-12 lg:p-20 relative text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDC017]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                 >
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                       Mastering the <br />
                       <span className="text-[#FDC017] relative inline-block">
                          Scholarship Game
                          <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "100%" }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.6, duration: 0.8 }}
                             className="absolute bottom-1 left-0 h-[3px] bg-[#FDC017]/30"
                          />
                       </span>
                    </h2>
                    <motion.p 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.3, duration: 0.6 }}
                       className="text-gray-400 text-lg mb-10 leading-relaxed"
                    >
                       Scholarships are highly competitive. Beyond grades, committees look for specific leadership traits and community impact. Our strategists help you reveal these qualities.
                    </motion.p>
                    <motion.div 
                       className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       variants={{
                          hidden: { opacity: 0 },
                          visible: {
                             opacity: 1,
                             transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.4
                             }
                          }
                       }}
                    >
                       {[
                         { title: "Early Action", desc: "Most full-ride grants close 9-12 months before intake." },
                         { title: "Personal Branding", desc: "We help align your story with the donor's specific mission." }
                       ].map((tip, i) => (
                         <motion.div 
                           key={i} 
                           variants={{
                              hidden: { y: 20, opacity: 0 },
                              visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                           }}
                           whileHover={{ 
                              y: -8, 
                              scale: 1.02, 
                              borderColor: "rgba(253, 192, 23, 0.4)",
                              backgroundColor: "rgba(255, 255, 255, 0.08)",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                           }}
                           className="p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 group cursor-default"
                         >
                            <motion.h4 
                               whileHover={{ x: 3 }}
                               className="text-[#FDC017] font-bold mb-2 uppercase text-xs tracking-widest flex items-center gap-1.5"
                            >
                               <span className="w-1.5 h-1.5 rounded-full bg-[#FDC017] inline-block group-hover:scale-150 transition-transform" />
                               {tip.title}
                            </motion.h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{tip.desc}</p>
                         </motion.div>
                       ))}
                    </motion.div>
                 </motion.div>
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group/img"
                 >
                    {/* Glow element behind image on hover */}
                    <div className="absolute inset-0 bg-[#FDC017]/10 rounded-xl blur-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="overflow-hidden rounded-xl shadow-2xl">
                       <motion.img 
                         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 0.6 }}
                         className="rounded-xl object-cover w-full h-full transition-all duration-700 filter brightness-95 group-hover/img:brightness-100"
                         alt="Student Collaboration"
                       />
                    </div>

                    <motion.div 
                       initial={{ opacity: 0, scale: 0.8, y: 20 }}
                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                       className="absolute -bottom-6 -left-6 bg-[#FDC017] p-8 rounded-xl text-[#031627] shadow-2xl hidden sm:block cursor-default"
                    >
                       <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                       >
                          <p className="text-5xl font-black mb-1">
                            <Counter value="92%" />
                          </p>
                          <p className="text-xs font-bold uppercase tracking-wider opacity-90">Success Rate in 2024</p>
                       </motion.div>
                    </motion.div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Scholarship FAQ Section */}
      <section className="py-12 bg-gray-50/50">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
              <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="text-center mb-16"
              >
                 <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
                   Funding <span className="text-[#FDC017] relative inline-block">
                     Intelligence
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="absolute bottom-1 left-0 h-[3px] bg-[#FDC017]/30"
                     />
                   </span>
                 </h2>
                 <p className="text-gray-500 text-lg max-w-xl mx-auto">Common questions about securing international financial aid.</p>
              </motion.div>

              <motion.div 
                 className="space-y-5"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={{
                    hidden: { opacity: 0 },
                    visible: {
                       opacity: 1,
                       transition: {
                          staggerChildren: 0.12,
                          delayChildren: 0.2
                       }
                    }
                 }}
              >
                 {[
                   { q: "Can I get a 100% scholarship for undergraduate studies?", a: "Yes, especially in the US and UK. Ivy League schools offer need-blind admissions, while UK universities offer specific vice-chancellor merit awards that cover full tuition." },
                   { q: "Do I need a high IELTS score for scholarships?", a: "While not always mandatory for the scholarship itself, a high language score (7.5+) significantly strengthens your academic profile in the eyes of funding committees." },
                   { q: "Is work experience required for postgraduate grants?", a: "For MBA and specialized Master's grants (like Chevening), 2-3 years of impact-driven work experience is often a core requirement." }
                 ].map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                      <motion.div
                        key={i}
                        variants={{
                           hidden: { y: 20, opacity: 0 },
                           visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        whileHover={{ 
                           y: -4, 
                           scale: 1.005,
                           boxShadow: "0 15px 30px rgba(3, 22, 39, 0.05)"
                        }}
                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer select-none ${
                          isOpen 
                            ? "border-[#FDC017] shadow-md shadow-[#FDC017]/5" 
                            : "border-gray-100 hover:border-gray-300 hover:shadow-sm"
                        }`}
                        onClick={() => toggleIndex(i)}
                      >
                         <div className="p-8 flex items-center justify-between gap-4">
                            <h4 className="text-lg md:text-xl font-bold text-[#031627] flex items-center gap-3">
                               <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shrink-0 ${isOpen ? "bg-[#FDC017] scale-125" : "bg-gray-300"}`} />
                               {faq.q}
                            </h4>
                            <motion.div
                               animate={{ rotate: isOpen ? 180 : 0 }}
                               transition={{ duration: 0.3, ease: "easeInOut" }}
                               className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? "bg-[#FDC017] text-[#031627]" : "bg-gray-100 text-gray-500"}`}
                            >
                               <ChevronDown className="w-4 h-4" />
                            </motion.div>
                         </div>
                         <motion.div
                            initial={false}
                            animate={{ 
                               height: isOpen ? "auto" : 0,
                               opacity: isOpen ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                         >
                            <p className="text-gray-500 leading-relaxed pb-8 px-8 pl-[3.25rem] border-t border-gray-50 pt-5 text-base md:text-lg">
                               {faq.a}
                            </p>
                         </motion.div>
                      </motion.div>
                    );
                 })}
              </motion.div>
           </div>
        </div>
      </section>

      {/* Perfect CTA Section */}
      <section className="py-12 bg-white">
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
                Funding Match
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Claim Your <span className="text-[#FDC017]">Scholarship</span> Today
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Speak with our financial aid experts to discover which global scholarships you are eligible for and start your application today.
              </p>
              
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl shadow-[#FDC017]/20 group cursor-pointer"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
