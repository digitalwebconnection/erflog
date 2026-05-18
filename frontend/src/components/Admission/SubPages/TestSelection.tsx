import { motion } from "framer-motion";
import { Globe, Award, CheckCircle, MapPin, Briefcase, Star } from "lucide-react";
import { SplitText } from "../../About/Shared";

const TestSelection = () => {
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
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#031627] mb-4">Specialized Test Coaching</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our instructors bring years of expertise to help you achieve the scores required by the world's most prestigious institutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "IELTS / TOEFL", level: "Expert", desc: "Language proficiency training with focus on all 4 modules." },
              { name: "SAT / ACT", level: "Advanced", desc: "Strategy-based prep for undergraduate entry in US/Canada." },
              { name: "GRE / GMAT", level: "Pro", desc: "Quantitative and verbal reasoning for postgraduate success." },
              { name: "PTE / Duolingo", level: "Special", desc: "Modern computer-based testing methods and practice." }
            ].map((test, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-4 border-b-[#FDC017]"
              >
                <div className="flex justify-between items-start mb-6">
                   <Award className="w-10 h-10 text-[#FDC017]" />
                   <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full text-gray-500">{test.level}</span>
                </div>
                <h4 className="font-bold text-[#031627] text-2xl mb-4">{test.name}</h4>
                <p className="text-gray-600 mb-6">{test.desc}</p>
                <button className="text-[#031627] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <CheckCircle className="w-4 h-4 text-[#FDC017]" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Country Comparison & Selection */}
      <section className="py-24 bg-[#031627] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-8">Data-Driven <span className="text-[#FDC017]">Country</span> Selection</h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Choosing where to study is as important as what to study. We provide a comprehensive comparison based on cost of living, post-study work rights, and industry presence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { icon: <MapPin />, title: "United Kingdom", sub: "1-year Masters & PSW" },
                     { icon: <Briefcase />, title: "USA / Canada", sub: "STEM & OPT benefits" },
                     { icon: <Globe />, title: "Europe", sub: "Low tuition & cultural depth" },
                     { icon: <Star />, title: "Australia", sub: "High lifestyle & work opportunities" }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-[#FDC017]/30 transition-all">
                        <div className="text-[#FDC017]">{item.icon}</div>
                        <div>
                           <h5 className="font-bold">{item.title}</h5>
                           <p className="text-xs text-gray-400">{item.sub}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="lg:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Students Collaborating" 
                  className="rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FDC017] rounded-full flex items-center justify-center -z-10 blur-3xl opacity-50" />
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Preparation Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#031627] mb-4">Your Preparation Roadmap</h2>
              <p className="text-gray-600">A typical timeline for test preparation and university selection.</p>
           </div>
           <div className="max-w-4xl mx-auto space-y-12 relative">
              <div className="absolute left-1/2 top-0 w-1 h-full bg-[#FDC017]/20 -translate-x-1/2 hidden md:block" />
              {[
                { month: "Month 1-2", title: "Diagnostic & Foundation", desc: "Initial tests and building core concepts in English/Math." },
                { month: "Month 3", title: "Advanced Practice", desc: "Full-length mock tests and performance analysis." },
                { month: "Month 4", title: "Country Finalization", desc: "Finalizing the shortlist based on projected test scores." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                   <div className="md:w-1/2 text-center md:text-left">
                      <div className={`flex flex-col ${i % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
                         <span className="text-[#FDC017] font-black text-xl mb-2">{step.month}</span>
                         <h4 className="text-2xl font-bold text-[#031627] mb-2">{step.title}</h4>
                         <p className="text-gray-600 max-w-sm">{step.desc}</p>
                      </div>
                   </div>
                   <div className="w-6 h-6 bg-[#FDC017] rounded-full border-4 border-white shadow-lg relative z-10 hidden md:block" />
                   <div className="md:w-1/2" />
                </motion.div>
              ))}
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
