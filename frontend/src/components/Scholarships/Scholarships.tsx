import { motion } from "framer-motion";
import { Award, Globe, ArrowRight, DollarSign, Target } from "lucide-react";
import { SplitText } from "../About/Shared";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Scholarships = () => {
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
            alt="Prestigious University Campus" 
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
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
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
                  className="bg-[#FDC017] text-[#031627] px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 mx-auto transition-all"
                >
                  Start Your Journey <FaChevronRight className="text-sm" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Scholarship Grid */}
      <section className="py-24 bg-gray-50">
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
                    <div className="mt-6 flex items-center gap-2 text-[#FDC017] font-bold text-sm cursor-pointer group/link">
                      Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </div>
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
                 <div>
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Mastering the <br /><span className="text-[#FDC017]">Scholarship Game</span></h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                       Scholarships are highly competitive. Beyond grades, committees look for specific leadership traits and community impact. Our strategists help you reveal these qualities.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {[
                         { title: "Early Action", desc: "Most full-ride grants close 9-12 months before intake." },
                         { title: "Personal Branding", desc: "We help align your story with the donor's specific mission." }
                       ].map((tip, i) => (
                         <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="text-[#FDC017] font-bold mb-2 uppercase text-xs tracking-widest">{tip.title}</h4>
                            <p className="text-sm text-gray-400">{tip.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                      className="rounded-xl shadow-2xl hover:grayscale-0 transition-all duration-1000"
                      alt="Student Collaboration"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-[#FDC017] p-8 rounded-xl text-[#031627] shadow-xl hidden sm:block">
                       <p className="text-4xl font-black">92%</p>
                       <p className="text-xs font-bold uppercase tracking-wider">Success Rate in 2024</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Scholarship FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
                   Funding <span className="text-[#FDC017]">Intelligence</span>
                 </h2>
                 <p className="text-gray-500 text-lg">Common questions about securing international financial aid.</p>
              </div>
              <div className="space-y-4">
                 {[
                   { q: "Can I get a 100% scholarship for undergraduate studies?", a: "Yes, especially in the US and UK. Ivy League schools offer need-blind admissions, while UK universities offer specific vice-chancellor merit awards that cover full tuition." },
                   { q: "Do I need a high IELTS score for scholarships?", a: "While not always mandatory for the scholarship itself, a high language score (7.5+) significantly strengthens your academic profile in the eyes of funding committees." },
                   { q: "Is work experience required for postgraduate grants?", a: "For MBA and specialized Master's grants (like Chevening), 2-3 years of impact-driven work experience is often a core requirement." }
                 ].map((faq, i) => (
                   <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#FDC017]/30 transition-all shadow-sm">
                      <h4 className="text-xl font-bold text-[#031627] mb-3 flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#FDC017]" />
                         {faq.q}
                      </h4>
                      <p className="text-gray-500 leading-relaxed pl-5">{faq.a}</p>
                   </div>
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
                Funding Match
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Claim Your <span className="text-[#FDC017]">Scholarship</span> Today
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Speak with our financial aid experts to discover which global scholarships you are eligible for and start your application today.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl shadow-[#FDC017]/20 group"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
