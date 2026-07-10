import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { UserCheck, Compass, Target, MessageSquare, ShieldCheck, Heart, Lightbulb, Zap } from "lucide-react";
import { SplitText } from "../../About/Shared";

const ProfilingCounselling = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // A helper function to track mouse hover for premium spotlight glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--x", `${x}px`);
    currentTarget.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        {/* Title */}
        <title>Study Abroad Profile Evaluation Mumbai | Erfolg Solutions</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get expert study abroad profile evaluation in Mumbai with personalized counselling, university shortlisting, career guidance, and admission planning."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="study abroad profile evaluation, profile evaluation Mumbai, Erfolg Solutions, personalized counselling, university shortlisting, career guidance, admission planning"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://erfolg.in/admission/profiling" />

        {/* Open Graph */}
        <meta property="og:title" content="Study Abroad Profile Evaluation Mumbai | Erfolg Solutions" />
        <meta property="og:description" content="Get expert study abroad profile evaluation in Mumbai with personalized counselling, university shortlisting, career guidance, and admission planning." />
        <meta property="og:url" content="https://erfolg.in/admission/profiling" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Abroad Profile Evaluation Mumbai | Erfolg Solutions" />
        <meta name="twitter:description" content="Get expert study abroad profile evaluation in Mumbai with personalized counselling, university shortlisting, career guidance, and admission planning." />
      </Helmet>
      {/* Hero Section - 90vh Full-Width Background */}
      <section className="relative h-[90vh] py-20 flex items-center justify-center text-center bg-[#031627] text-white overflow-hidden">
        {/* Full-Width Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1653566031587-74f7d86a2e71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fEV4cGVydCUyME1lbnRvcnNoaXB8ZW58MHx8MHx8fDA%3D" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[#FDC017]/10 text-[#FDC017] text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-[#FDC017]/20">
              Expert Mentorship
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
              <SplitText text="Unlocking Your" className="inline" />{"\u00A0"}
              <span className="text-[#FDC017] relative">
                <SplitText text="Potential" />
              </span>
              <br />
              <SplitText text="Through Expert Profiling" className="inline" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              Our professional counselors use advanced behavioral analysis and academic assessment to craft a unique profile that stands out to top-tier global universities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Core Services */}
      <section className="py-18">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
                Tailored <span className="text-[#FDC017]">Roadmaps</span> for Every Aspirant
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every student has a story worth telling. Our profiling methodology goes beyond standard metrics, focusing on your passions, resilience, and unique life experiences to build a compelling narrative for admission committees.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  { icon: <UserCheck className="text-[#FDC017] group-hover:text-[#031627] transition-colors duration-300" />, title: "Aptitude Assessment", desc: "Scientific evaluation of your natural strengths and academic capabilities." },
                  { icon: <Compass className="text-[#FDC017] group-hover:text-[#031627] transition-colors duration-300" />, title: "Extracurricular Strategy", desc: "Building a portfolio that demonstrates leadership and community impact." },
                  { icon: <Target className="text-[#FDC017] group-hover:text-[#031627] transition-colors duration-300" />, title: "Career Alignment", desc: "Ensuring your academic choices lead to sustainable global careers." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex gap-5 p-5 rounded-2xl hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#031627] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#FDC017] group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#031627] mb-1 group-hover:text-[#FDC017] transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                    alt="Student Profiling Success" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031627]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-[#FDC017] p-8 rounded-xl hidden md:block shadow-2xl max-w-xs z-10"
              >
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-[#031627]" />
                </div>
                <p className="font-bold text-[#031627] text-lg leading-snug">"The profiling session gave me clarity I never thought possible."</p>
                <p className="mt-4 text-sm text-[#031627]/70 font-bold tracking-wider uppercase">- Sarah J., Oxford Applicant</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Why Choose Our Counselling */}
      <section className="py-16 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column: Sticky Title Information */}
            <div className="lg:w-5/12 lg:sticky lg:top-24 lg:h-fit">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 bg-[#FDC017]/10 text-[#031627] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-[#FDC017]/20">
                  Why Erfolg
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#031627] mb-6 tracking-tight leading-tight">
                  Why Our <br className="hidden lg:block" />
                  <span className="text-[#FDC017]">Counselling</span> Works
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                  We combine years of experience with a student-centric approach to deliver results that transform lives.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Sleek Editorial List (No Cards) */}
            <div className="lg:w-7/12 flex flex-col gap-2">
              {[
                { 
                  num: "01", 
                  title: "Verified Success", 
                  desc: "98% of our students receive offers from their top 3 choices.",
                  icon: <ShieldCheck className="w-5 h-5 text-[#FDC017]" />
                },
                { 
                  num: "02", 
                  title: "Empathetic Approach", 
                  desc: "We understand the stress of applications and provide emotional support.",
                  icon: <Heart className="w-5 h-5 text-[#FDC017]" />
                },
                { 
                  num: "03", 
                  title: "Innovative Strategy", 
                  desc: "Using data-driven insights to predict university selection trends.",
                  icon: <Lightbulb className="w-5 h-5 text-[#FDC017]" />
                },
                { 
                  num: "04", 
                  title: "Fast Tracking", 
                  desc: "Streamlined processes to ensure early bird application benefits.",
                  icon: <Zap className="w-5 h-5 text-[#FDC017]" /> 
                }
              ].map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`py-6 flex gap-6 items-start transition-all duration-500 ${
                      isActive ? "pl-4 border-l-2 border-[#FDC017]" : "pl-0 border-l-2 border-transparent"
                    }`}
                  >
                    {/* Huge Number Accent */}
                    <span className={`text-3xl lg:text-4xl font-black transition-colors duration-500 shrink-0 leading-none ${
                      isActive ? "text-[#FDC017]" : "text-gray-200"
                    }`}>
                      {item.num}
                    </span>

                    {/* Text Details */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 flex items-center gap-2 ${
                        isActive ? "text-[#FDC017]" : "text-[#031627]"
                      }`}>
                        <span className="shrink-0">{item.icon}</span>
                        {item.title}
                      </h3>
                      <p className={`text-sm transition-colors duration-500 leading-relaxed ${
                        isActive ? "text-gray-700 font-medium" : "text-gray-400"
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Success Journey Roadmap */}
      <section className="py-12 lg:py-8 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FDC017] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Methodology</span>
              <h2 className="text-4xl lg:text-6xl font-black text-[#031627] tracking-tight">
                The Road to <span className="text-[#FDC017]">Success</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            >
              {[
                { 
                  step: "01", 
                  label: "Discovery & Auditing", 
                  sub: "We begin with a holistic audit of your academic history, extracurriculars, and personal values to identify your true north.",
                  icon: <Lightbulb className="w-6 h-6" />
                },
                { 
                  step: "02", 
                  label: "Strategic Mapping", 
                  sub: "Our experts cross-reference your profile with thousands of global programs to find the perfect cultural and academic fit.",
                  icon: <Compass className="w-6 h-6" />
                },
                { 
                  step: "03", 
                  label: "Profile Refinement", 
                  sub: "Precision editing of SOPs, LORs, and CVs to ensure your unique voice resonates with admission officers.",
                  icon: <Target className="w-6 h-6" />
                },
                { 
                  step: "04", 
                  label: "Launch & Victory", 
                  sub: "A streamlined application submission followed by interview coaching to secure your celebratory offer letter.",
                  icon: <Zap className="w-6 h-6" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { type: "spring", stiffness: 85, damping: 14 }
                    }
                  }}
                  whileHover={{ y: -10, scale: 1.015 }}
                  onMouseMove={handleMouseMove}
                  className="group relative h-full"
                >
                  <div className="h-full bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 relative z-10 flex flex-col justify-between overflow-hidden">
                    
                    {/* Spotlight Glow Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                      style={{
                        background: "radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.08), transparent 80%)"
                      }}
                    />

                    <div>
                      {/* Step Number Badge */}
                      <div className="w-14 h-14 bg-[#031627] text-[#FDC017] rounded-xl flex items-center justify-center text-xl font-black mb-8 shadow-lg group-hover:bg-[#FDC017] group-hover:text-[#031627] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative shrink-0 z-10">
                        {item.step}
                      </div>

                      <h4 className="text-xl font-bold text-[#031627] mb-4 tracking-tight group-hover:text-[#FDC017] transition-colors duration-300">
                        {item.label}
                      </h4>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-600 transition-colors">
                        {item.sub}
                      </p>
                    </div>

                    {/* Decorative Background Icon Watermark */}
                    <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.14] group-hover:scale-[3.3] group-hover:rotate-[24deg] group-hover:text-[#FDC017] transition-all duration-700 pointer-events-none text-[#031627]">
                      <div className="scale-[3] rotate-12">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                Start Journey
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to Build Your <span className="text-[#FDC017]">Winning</span> Profile?
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Join thousands of successful students who have started their journey with our expert profiling and strategic counselling.
              </p>
              
              <motion.button 
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-xl shadow-[#FDC017]/20 cursor-pointer"
              >
                Book a Session Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProfilingCounselling;
