import { motion } from "framer-motion";
import { ShieldCheck, FileCheck } from "lucide-react";

interface ListSectionProps {
  data: {
    title: string;
    subtitle?: string;
    list: {
      text: string;
      image: string;
    }[];
  };
}

const Documents = ({ data }: ListSectionProps) => {
  // Dynamically split the title to highlight country/visa name (e.g., "UK Student Visa")
  const titleWords = data.title.split(' ');
  const countryIndex = titleWords.findIndex(w => 
    ["uk", "canada", "australia", "usa", "germany", "france", "new"].includes(w.toLowerCase())
  );
  
  let prefix = data.title;
  let suffix = "";
  
  if (countryIndex !== -1) {
    prefix = titleWords.slice(0, countryIndex).join(' ') + " ";
    suffix = titleWords.slice(countryIndex).join(' ');
  } else {
    // Fallback: split last 3 words
    if (titleWords.length > 3) {
      prefix = titleWords.slice(0, titleWords.length - 3).join(' ') + " ";
      suffix = titleWords.slice(titleWords.length - 3).join(' ');
    }
  }

  // To make it look super unique, we format the title dynamically with custom badges
  const formatTitle = (pref: string, suff: string) => {
    const hasRequired = pref.toLowerCase().includes("required");
    if (hasRequired) {
      const parts = pref.split(/required/i);
      return (
        <span className="leading-[1.6]">
          {parts[0]}
          <span className="relative inline-block px-3 py-1 bg-[#FDC017] text-[#031627] rounded-xl transform -rotate-2 mx-1 text-2xl md:text-3xl lg:text-4xl font-black">
            Required
          </span>
          {parts[1]}
          <span className="relative inline-block px-4 py-1.5 bg-[#031627] text-white rounded-2xl transform rotate-2 shadow-xl mx-1 text-2xl md:text-3xl lg:text-4xl font-black whitespace-nowrap">
            {suff}
          </span>
        </span>
      );
    }
    return (
      <>
        {pref} <span className="text-[#FDC017]">{suff}</span>
      </>
    );
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#031627]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#FDC017]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Asymmetric Side-by-Side Header Layout with Unique Badges */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
          <div className="max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#031627] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDC017] animate-pulse" />
              Documentation Mastery
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#031627] leading-[1.3] tracking-tighter mb-8"
            >
              {formatTitle(prefix, suffix)}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-base md:text-lg leading-relaxed border-l-4 border-[#FDC017] pl-8"
            >
              {data.subtitle}
            </motion.p>
          </div>

          {/* Right Column: Dashed Verified Compliance Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-80 bg-white border-2 border-dashed border-[#FDC017]/40 rounded-[2rem] p-6 text-center hover:border-[#FDC017] transition-colors duration-300 flex-shrink-0 lg:mt-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#FDC017]/10 flex items-center justify-center text-[#031627] mx-auto mb-4">
              <ShieldCheck size={24} className="text-[#FDC017]" />
            </div>
            <h4 className="font-black text-[#031627] text-sm uppercase tracking-wider mb-2">Verified Checklist</h4>
            <p className="text-gray-400 text-xs leading-normal">
              All documents listed align with current government guidelines.
            </p>
          </motion.div>
        </div>

        {/* Clean, scalable 4-Column Grid for large lists of image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.list.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-[0_10px_30px_rgba(3,22,39,0.08)] hover:shadow-[0_20px_50px_rgba(253,192,23,0.2)] border border-gray-100 hover:border-[#FDC017]/30 transition-all duration-700 cursor-default"
            >
              <img
                src={item.image}
                alt={item.text}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031627] via-[#031627]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <FileCheck size={16} />
                  </div>
                  <div className="h-[1px] grow bg-white/20" />
                </div>

                <h3 className="text-lg md:text-xl font-black text-white tracking-tight leading-snug group-hover:text-[#FDC017] transition-colors duration-300">
                  {item.text}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Documents;