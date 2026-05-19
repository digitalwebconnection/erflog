import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Building2, CheckCircle2, Award } from "lucide-react";

interface SectionItem {
  title: string;
  content: string;
}

interface SectionProps {
  data: {
    title: string;
    intro: string;
    sections: SectionItem[];
    highlights: string[];
  };
}

const icons = [BookOpen, GraduationCap, Building2];

const EducationSection = ({ data }: SectionProps) => {
  // Safely split title to highlight the country name
  let prefix = data.title;
  let suffix = "";
  
  const titleLower = data.title.toLowerCase();
  if (titleLower.startsWith("education system in the ")) {
    prefix = data.title.substring(0, 24); // "Education System in the "
    suffix = data.title.substring(24);    // "United Kingdom"
  } else if (titleLower.startsWith("education system in ")) {
    prefix = data.title.substring(0, 20);  // "Education System in "
    suffix = data.title.substring(20);     // "Canada"
  }

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FDC017]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#031627]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Properly Different Asymmetric Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20 relative">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[#031627] font-bold uppercase tracking-[0.3em] text-xs mb-6"
            >
              <div className="w-12 h-[2px] bg-[#FDC017]" />
              Academic Excellence
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#031627] leading-[1.1] tracking-tighter"
            >
              {prefix}
              {suffix && <span className="text-[#FDC017] block md:inline">{suffix}</span>}
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md relative p-6 bg-[#031627] text-white rounded-3xl shadow-xl flex items-center lg:mt-6 shrink-0"
          >
            {/* Elegant small quote mark decoration */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#FDC017] flex items-center justify-center text-[#031627] font-serif font-black text-xl shadow-lg">
              “
            </div>
            <div 
              className="text-gray-200 text-sm md:text-base leading-relaxed font-semibold italic"
              dangerouslySetInnerHTML={{ __html: data.intro || "" }}
            />
          </motion.div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {data.sections.map((item, i) => {
            const Icon = icons[i % icons.length];
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(3,22,39,0.03)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(253,192,23,0.12)] hover:border-[#FDC017]/40 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col h-full cursor-default"
              >
                {/* Floating Big Index Number */}
                <div className="absolute top-4 right-6 text-7xl font-black text-gray-100/60 group-hover:text-[#FDC017]/10 transition-colors duration-500 select-none">
                  {num}
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#031627] group-hover:bg-[#031627] group-hover:text-[#FDC017] group-hover:scale-110 transition-all duration-500 shadow-sm mb-6">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-black text-[#031627] mb-3 tracking-tight group-hover:text-[#FDC017] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div 
                    className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />

                  {/* Decorative Line */}
                  <div className="w-12 h-[3px] bg-[#FDC017]/30 group-hover:w-full group-hover:bg-[#FDC017] transition-all duration-500 mt-auto" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights Bento Row */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="bg-[#031627] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold glow inside navy box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(253,192,23,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-4 lg:w-1/3">
              <div className="w-16 h-16 rounded-2xl bg-[#FDC017] flex items-center justify-center text-[#031627] flex-shrink-0">
                <Award size={32} />
              </div>
              <div>
                <h4 className="text-[#FDC017] text-xs font-bold uppercase tracking-widest mb-1">Globally Recognized</h4>
                <p className="text-white text-xl font-black tracking-tight">Key Advantages</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-2/3 w-full">
              {data.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#FDC017]/30 hover:shadow-[0_0_20px_rgba(253,192,23,0.1)] transition-all duration-300 group cursor-default">
                  <CheckCircle2 size={20} className="text-[#FDC017] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white/90 tracking-tight group-hover:text-white transition-colors">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;
