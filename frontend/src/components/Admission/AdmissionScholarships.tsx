import { motion } from "framer-motion";
import { DollarSign, Percent, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const AdmissionScholarships = () => {
  const scholarships = [
    {
      title: "Merit Excellence",
      description: "Recognition for high achievers with exceptional academic backgrounds.",
      amount: "100% Tuition",
      tag: "Academic",
      icon: TrendingUp
    },
    {
      title: "Financial Aid",
      description: "Needs-based support to bridge the gap in your education funding.",
      amount: "Partial Grants",
      tag: "Support",
      icon: DollarSign
    },
    {
      title: "Early Enrollment",
      description: "Privileged waivers for proactive students securing early seats.",
      amount: "20% Waiver",
      tag: "Time-Sensitive",
      icon: Percent
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-[#FDC017]" />
                <span className="text-[#031627] font-bold uppercase tracking-[0.3em] text-[10px]">Financial Support</span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-black text-[#031627] leading-[0.9] tracking-tighter">
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
            className="lg:w-1/3"
          >
            <p className="text-gray-500 text-lg leading-relaxed">
              Don't let financial barriers stop your dreams. We guide you through the complex landscape of university grants and international aid.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scholarships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-gray-50 rounded-xl p-10 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-[#FDC017]/30 transition-all duration-500 overflow-hidden relative">
                {/* Decorative Pattern Background */}
               

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:border-[#FDC017]/50 group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-8 h-8 text-[#031627] group-hover:text-[#FDC017]" />
                    </div>
                    
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-[#FDC017]/10 text-[#031627] text-[10px] font-bold uppercase tracking-widest mb-4">
                    {item.tag}
                  </span>

                  <h3 className="text-3xl font-black text-[#031627] mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-base leading-relaxed mb-12">
                    {item.description}
                  </p>

                  <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Grant Value</div>
                      <div className="text-2xl font-black text-[#031627] tracking-tight">{item.amount}</div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#FDC017] group-hover:border-[#FDC017] transition-all">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#031627] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionScholarships;
