import { motion } from "framer-motion";
import { CalendarDays, Snowflake, Sun, Leaf, ArrowRight, Clock, MapPin } from "lucide-react";

interface IntakeItem {
  name: string;
  tag: string;
  description: string;
  icon: "fall" | "winter" | "spring";
}

interface IntakeSectionProps {
  data: {
    title: string;
    subtitle?: string;
    list: IntakeItem[];
  };
}

const getIcon = (type: string) => {
  switch (type) {
    case "fall":
      return <Leaf size={20} />;
    case "winter":
      return <Snowflake size={20} />;
    case "spring":
      return <Sun size={20} />;
    default:
      return <CalendarDays size={20} />;
  }
};

const IntakeSection = ({ data }: IntakeSectionProps) => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6"
            >
              <div className="w-12 h-[2px] bg-primary" />
              Enrollment Cycles
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-[#031627] leading-[0.9] tracking-tighter mb-8"
            >
              {data.title}
            </motion.h2>

             <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 text-xs font-bold text-[#031627] uppercase tracking-widest shadow-sm">
                <Clock size={14} className="text-[#FDC017]" />
                Deadlines: 4 Months Prior
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 text-xs font-bold text-[#031627] uppercase tracking-widest shadow-sm">
                <MapPin size={14} className="text-[#FDC017]" />
                Global Applications Open
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm text-gray-500 text-lg leading-relaxed mt-4"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Structured List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.list.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row items-center gap-8 p-8 bg-white rounded-[2.5rem] border border-gray-100 hover:border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 shrink-0 rounded-3xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                {getIcon(item.icon)}
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                  <h3 className="text-2xl font-black text-[#031627] tracking-tight">
                    {item.name}
                  </h3>
                  <span className="px-3 py-1 bg-[#FDC017]/10 text-[#FDC017] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#FDC017]/20">
                    {item.tag}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  View Timeline <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntakeSection;