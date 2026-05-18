import { motion } from "framer-motion";
import { Mic, Video, Users, CheckCircle, FileCheck, Landmark, Clock } from "lucide-react";

const InterviewVisa = () => {
  return (
      <div className="bg-white min-h-screen">
      {/* Hero Section - 90vh Full-Width Background */}
      <section className="relative h-[90vh] py-20 flex items-center bg-[#031627] text-white overflow-hidden">
        {/* Full-Width Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Global Academic Connectivity" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/65 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0"
          >
            <span className="inline-block px-4 py-1 bg-[#FDC017] text-[#031627] font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Final Milestone
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Master the Final <span className="text-[#FDC017]">Hurdle</span> <br />
              with Confidence
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our specialized interview coaching and expert visa guidance ensure that your dream of studying abroad becomes a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mock Interview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold text-[#031627] mb-8 leading-tight">Expert Mock Interview Sessions</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Many prestigious universities use interviews as a deciding factor. We provide one-on-one sessions that cover common questions, body language, and strategic communication.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { icon: <Video className="text-[#FDC017]" />, title: "Digital Prep", desc: "Simulated online interviews via Zoom/Teams." },
                   { icon: <Mic className="text-[#FDC017]" />, title: "Tone Analysis", desc: "Guidance on speech speed and clarity." },
                   { icon: <Users className="text-[#FDC017]" />, title: "Panel Practice", desc: "Mock rounds with multiple interviewers." },
                   { icon: <CheckCircle className="text-[#FDC017]" />, title: "Feedback Loop", desc: "Detailed analysis after every session." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="shrink-0 mt-1">{item.icon}</div>
                      <div>
                         <h5 className="font-bold text-[#031627]">{item.title}</h5>
                         <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
               <img 
                 src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop" 
                 alt="Collaboration" 
                 className="rounded-[48px] shadow-2xl relative z-10" 
               />
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FDC017] rounded-full blur-[100px] opacity-30 -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Visa Success System */}
      <section className="py-24 bg-[#031627] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-[#FDC017]">Visa</span> Support Ecosystem</h2>
             <p className="text-gray-400 max-w-2xl mx-auto text-lg">We maintain a 98% visa success rate through rigorous document verification and policy awareness.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FileCheck />, title: "Financial Audit", desc: "Expert review of bank statements and funding proof." },
              { icon: <Landmark />, title: "Embassy Guidelines", desc: "Strict adherence to specific country visa regulations." },
              { icon: <Clock />, title: "Slot Booking", desc: "Timely management of biometrics and interview slots." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FDC017]/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FDC017]/10 flex items-center justify-center text-[#FDC017] mb-8 group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Visa Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                 <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:w-1 before:h-full before:bg-[#FDC017]/20">
                    {[
                      { step: "Application", desc: "Gathering and preparing all required visa documents." },
                      { step: "Verification", desc: "Internal audit for consistency and correctness." },
                      { step: "Submission", desc: "Filing the application and paying embassy fees." },
                      { step: "Interview", desc: "Attending the embassy interview with confidence." }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-8 relative z-10"
                      >
                         <div className="w-6 h-6 rounded-full bg-[#FDC017] shrink-0 mt-1 border-4 border-white shadow-sm" />
                         <div>
                            <h4 className="font-bold text-xl text-[#031627]">{item.step}</h4>
                            <p className="text-gray-500">{item.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                 <h2 className="text-4xl font-bold text-[#031627] mb-8">The Visa Journey Timeline</h2>
                 <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    Every country has a different timeline. We provide you with a customized schedule to ensure you receive your visa well before your university intake begins.
                 </p>
                 <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-[#FDC017]">
                    <h5 className="font-bold text-[#031627] mb-4 text-xl">Did you know?</h5>
                    <p className="text-gray-600">Starting your visa process 3-4 months in advance significantly reduces the risk of last-minute delays and stress.</p>
                 </div>
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
                Final Step
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Secure Your <span className="text-[#FDC017]">Success</span> Today
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Don't let an interview or visa rejection stand in your way. Join our coaching program and move forward with absolute confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#FDC017]/20 group"
                >
                  Join Coaching 
                  <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Visa Expert
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InterviewVisa;
