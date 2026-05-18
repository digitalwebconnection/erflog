import { motion } from "framer-motion";
import { Edit3, FileText, Send, ShieldCheck, CheckCircle2, ClipboardCheck } from "lucide-react";
import { SplitText } from "../../About/Shared";

const EditingSubmission = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - 90vh Full-Width Background */}
      <section className="relative h-[90vh] py-20 flex items-center justify-center text-center bg-[#031627] text-white overflow-hidden">
        {/* Full-Width Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop" 
            alt="Professional Writing and Editing" 
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
              Precision & Quality
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
              <SplitText text="Crafting " className="inline" />
              <span className="text-[#FDC017] relative">
                <SplitText text="Impactful" />
              </span>
              <br />
              <SplitText text="Narratives for Your Success" className="inline" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              We refine every word of your SOPs and LORs to ensure they resonate with admission committees, backed by a flawless submission process.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Editing Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-[#031627] mb-4">Our Editorial Expertise</h2>
             <p className="text-gray-500 max-w-2xl mx-auto text-lg">We provide multi-layered review processes to ensure your application is beyond reproach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Edit3 />, title: "SOP Enhancement", desc: "Turning your draft into a powerful statement of purpose." },
              { icon: <FileText />, title: "LOR Strategy", desc: "Ensuring recommendations highlight your specific traits." },
              { icon: <ClipboardCheck />, title: "CV Optimization", desc: "Tailoring your professional history for academic success." },
              { icon: <ShieldCheck />, title: "Plagiarism Check", desc: "Rigorous verification to ensure 100% original content." }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:bg-[#031627] hover:text-white transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#FDC017] mb-8 shadow-sm group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-400 transition-colors">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Submission Checklist */}
      <section className="py-24 bg-[#031627] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-4xl md:text-5xl font-bold mb-8">Flawless <span className="text-[#FDC017]">Submission</span> Management</h2>
               <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                 The submission phase is critical. We manage all university portals, ensuring every field is correctly filled and deadlines are met ahead of time.
               </p>
               <div className="space-y-4">
                  {[
                    "Portal account creation and management",
                    "Document formatting as per uni-standards",
                    "Application fee payment assistance",
                    "Immediate post-submission confirmation"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                       <CheckCircle2 className="text-[#FDC017] shrink-0" />
                       <span className="font-medium">{item}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" alt="Work" className="rounded-2xl" />
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" alt="Digital" className="rounded-2xl mt-8" />
               </div>
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FDC017] rounded-full blur-[120px] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Quality Assurance Process */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
               <h2 className="text-4xl font-bold text-[#031627] mb-6">The Success Editing Loop</h2>
               <p className="text-gray-600">How we ensure your application is nothing short of perfection.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-[40px] overflow-hidden bg-white shadow-xl">
               {[
                 { step: "Review", desc: "Primary review for clarity and narrative flow." },
                 { step: "Correction", desc: "Detailed grammatical and stylistic refinements." },
                 { step: "Validation", desc: "Final verification against university criteria." }
               ].map((item, i) => (
                 <div key={i} className={`p-12 text-center ${i < 2 ? 'border-r border-gray-200' : ''}`}>
                    <div className="text-[#FDC017] font-black text-6xl opacity-20 mb-4">{i + 1}</div>
                    <h4 className="text-2xl font-bold text-[#031627] mb-4">{item.step}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                 </div>
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
                Final Step
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to Submit Your <span className="text-[#FDC017]">Application?</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Don't leave your future to chance. Our experts are standing by to provide that final precision review your application deserves.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-2xl hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl shadow-[#FDC017]/20 group"
              >
                Schedule Final Review 
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EditingSubmission;
