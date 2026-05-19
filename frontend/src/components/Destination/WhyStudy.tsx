import { motion } from "framer-motion";
import { GraduationCap, Timer, Briefcase, Globe, Handshake, Building2, CheckCircle } from "lucide-react";

interface Point {
  title: string;
  description: string;
  image: string;
  full: string;
  emoji?: string;
}

interface SectionProps {
  data: {
    title: string;
    intro?: string;
    points: Point[];
  };
}

const icons = [
  <GraduationCap key="1" className="w-5 h-5" />,
  <Timer key="2" className="w-5 h-5" />,
  <Briefcase key="3" className="w-5 h-5" />,
  <Globe key="4" className="w-5 h-5" />,
  <Handshake key="5" className="w-5 h-5" />,
  <Building2 key="6" className="w-5 h-5" />,
];

const WhyStudy = ({ data }: SectionProps) => {
  // Safely split title to highlight the country name
  let prefix = data.title;
  let suffix = "";
  
  const titleLower = data.title.toLowerCase();
  if (titleLower.startsWith("why study in the ")) {
    prefix = data.title.substring(0, 17); // "Why Study in the "
    suffix = data.title.substring(17);    // "United Kingdom?"
  } else if (titleLower.startsWith("why study in ")) {
    prefix = data.title.substring(0, 13);  // "Why Study in "
    suffix = data.title.substring(13);     // "Canada?"
  }

  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[#031627] font-bold uppercase tracking-[0.3em] text-xs mb-6"
            >
              <div className="w-12 h-[2px] bg-[#FDC017]" />
              Excellence in Education
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-[#031627] leading-[1.1] tracking-tighter"
            >
              {prefix}
              {suffix && <span className="text-[#FDC017]">{suffix}</span>}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-gray-500 text-lg leading-relaxed border-l-4 border-[#FDC017] pl-8"
            dangerouslySetInnerHTML={{ __html: data.intro || "" }}
          />
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {data.points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-8 group"
            >
              {/* Number/Icon Column */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white shadow-[0_10px_30px_rgba(3,22,39,0.05)] flex items-center justify-center text-[#031627] border border-gray-100 group-hover:bg-[#FDC017] group-hover:text-[#031627] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  {icons[index % icons.length]}
                </div>
                <div className="w-[2px] h-full bg-gradient-to-b from-gray-200 to-transparent group-hover:from-[#FDC017]/30 transition-colors duration-500" />
              </div>

              {/* Content Column */}
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-4 mb-4">
                   <h3 className="text-2xl font-black text-[#031627] tracking-tight group-hover:text-[#FDC017] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="h-[2px] grow bg-gray-100 group-hover:bg-[#FDC017]/30 transition-colors" />
                </div>

                <p className="text-[#FDC017] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                  {item.description}
                </p>

                <div 
                  className="text-gray-500 leading-relaxed text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-500 mb-6"
                  dangerouslySetInnerHTML={{ __html: item.full }}
                />

                <div className="flex items-center gap-2 text-[#031627] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <CheckCircle size={14} className="text-[#FDC017]" />
                  Key Benefit Realized
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStudy;
