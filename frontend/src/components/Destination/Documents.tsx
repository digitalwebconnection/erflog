import { motion } from "framer-motion";
import { FileCheck, Download, ExternalLink, ShieldCheck } from "lucide-react";

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
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6"
            >
              <div className="w-12 h-[2px] bg-primary" />
              Documentation Mastery
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-[#031627] leading-[0.9] tracking-tighter"
            >
              {data.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm text-gray-500 text-lg leading-relaxed mb-2"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {data.list.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl transition-all duration-700 hover:shadow-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
              }`}
            >
              <img
                src={item.image}
                alt={item.text}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031627] via-[#031627]/40 to-transparent opacity-80" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <FileCheck size={20} />
                  </div>
                  <div className="h-[1px] grow bg-white/20" />
                </div>

                <h3 className={`${index === 0 ? "text-3xl" : "text-xl"} font-black text-white tracking-tight leading-tight mb-4`}>
                  {item.text}
                </h3>

                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="flex items-center gap-2 text-[#FDC017] text-[10px] font-black uppercase tracking-widest hover:text-white">
                    <Download size={14} />
                    Sample
                  </button>
                  <button className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest hover:text-[#FDC017]">
                    <ExternalLink size={14} />
                    Checklist
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Verification Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-12 py-10 border-t border-gray-100"
        >
          <div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
            <ShieldCheck className="text-primary" />
            <span className="text-sm font-black uppercase tracking-widest text-[#031627]">100% Data Privacy</span>
          </div>
          <div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
            <ShieldCheck className="text-primary" />
            <span className="text-sm font-black uppercase tracking-widest text-[#031627]">Verified Documents</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Documents;