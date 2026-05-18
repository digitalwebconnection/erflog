import { motion } from "framer-motion";
import { UserCheck, Compass, Target, MessageSquare, ShieldCheck, Heart, Lightbulb, Zap } from "lucide-react";

const ProfilingCounselling = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - 90vh Full-Width Background */}
      <section className="relative h-[90vh] py-20 flex items-center bg-[#031627] text-white overflow-hidden">
        {/* Full-Width Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
            alt="Professional Mentorship" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <span className="inline-block px-4 py-1 bg-[#FDC017] text-[#031627] font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Expert Mentorship
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Unlocking Your <span className="text-[#FDC017]">Potential</span> <br />
              Through Expert Profiling
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our professional counselors use advanced behavioral analysis and academic assessment to craft a unique profile that stands out to top-tier global universities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Core Services */}
      <section className="py-24">
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
                    className="flex gap-5 p-5 rounded-2xl hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 group cursor-pointer"
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
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50">
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
                className="absolute -bottom-10 -left-10 bg-[#FDC017] p-8 rounded-3xl hidden md:block shadow-2xl max-w-xs z-10"
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
      <section className="py-24 bg-[#031627] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Our <span className="text-[#FDC017]">Counselling</span> Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We combine years of experience with a student-centric approach to deliver results that transform lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Verified Success", desc: "98% of our students receive offers from their top 3 choices." },
              { icon: <Heart />, title: "Empathetic Approach", desc: "We understand the stress of applications and provide emotional support." },
              { icon: <Lightbulb />, title: "Innovative Strategy", desc: "Using data-driven insights to predict university selection trends." },
              { icon: <Zap />, title: "Fast Tracking", desc: "Streamlined processes to ensure early bird application benefits." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FDC017]/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FDC017]/10 flex items-center justify-center text-[#FDC017] mb-6 group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Journey Roadmap */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
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
            {/* Unique Desktop Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                    {/* Number Badge */}
                    <div className="w-14 h-14 bg-[#031627] text-[#FDC017] rounded-2xl flex items-center justify-center text-xl font-black mb-8 shadow-lg group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all duration-300">
                      {item.step}
                    </div>

                    <h4 className="text-xl font-bold text-[#031627] mb-4 tracking-tight group-hover:text-[#FDC017] transition-colors">
                      {item.label}
                    </h4>
                    
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.sub}
                    </p>

                    {/* Decorative Background Icon */}
                    <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-[#031627]">
                      <div className="scale-[3] rotate-12">
                        {item.icon}
                      </div>
                    </div>
                  </div>
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
            className="bg-[#031627] rounded-[3rem] p-12 lg:p-16 relative overflow-hidden text-center shadow-2xl"
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-xl shadow-[#FDC017]/20"
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
