import { motion } from "framer-motion";
import { CalendarDays, Snowflake, Sun, Leaf, Clock, MapPin } from "lucide-react";

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
      return <Leaf size={24} />;
    case "winter":
      return <Snowflake size={24} />;
    case "spring":
      return <Sun size={24} />;
    default:
      return <CalendarDays size={24} />;
  }
};

const IntakeSection = ({ data }: IntakeSectionProps) => {
  // Dynamically split the title to highlight country name
  const titleWords = data.title.split(' ');
  const countryIndex = titleWords.findIndex(w => 
    ["uk", "canada", "australia", "usa", "germany", "france", "united"].includes(w.toLowerCase())
  );
  
  let prefix = data.title;
  let suffix = "";
  
  if (countryIndex !== -1) {
    prefix = titleWords.slice(0, countryIndex).join(' ') + " ";
    suffix = titleWords.slice(countryIndex).join(' ');
  } else {
    if (titleWords.length > 2) {
      prefix = titleWords.slice(0, titleWords.length - 2).join(' ') + " ";
      suffix = titleWords.slice(titleWords.length - 2).join(' ');
    }
  }

  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FDC017]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centered High-Impact Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-[#031627] font-bold uppercase tracking-[0.3em] text-xs mb-6"
          >
            <div className="w-12 h-[2px] bg-[#FDC017]" />
            Enrollment Cycles
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#031627] leading-[1.1] tracking-tighter mb-12"
          >
            {prefix}
            {suffix && <span className="text-[#FDC017]">{suffix}</span>}
          </motion.h2>

          {/* Premium Info Dashboard Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 bg-[#031627] border border-gray-800 rounded-3xl p-6 md:p-8 text-left shadow-2xl divide-y md:divide-y-0 md:divide-x divide-gray-800"
          >
            {/* Col 1 */}
            <div className="md:pr-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FDC017]/10 flex items-center justify-center text-[#FDC017] shrink-0 mt-0.5">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#FDC017] mb-1">Recommended Deadlines</h4>
                <p className="text-white text-lg font-black tracking-tight">4 Months Prior</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="md:px-8 flex items-start gap-4 pt-6 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-[#FDC017]/10 flex items-center justify-center text-[#FDC017] shrink-0 mt-0.5">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#FDC017] mb-1">Current Status</h4>
                <p className="text-white text-lg font-black tracking-tight">Applications Open</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="md:pl-8 flex items-start gap-4 pt-6 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-[#FDC017]/10 flex items-center justify-center text-[#FDC017] shrink-0 mt-0.5">
                <CalendarDays size={20} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#FDC017] mb-1">Intake Guidelines</h4>
                <div 
                  className="text-gray-400 text-xs leading-relaxed font-semibold [&>p]:mb-0"
                  dangerouslySetInnerHTML={{ __html: data.subtitle || "Application deadlines usually fall 3–4 months prior to intake." }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Structured Grid Layout - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.list.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(3,22,39,0.04)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(253,192,23,0.15)] hover:border-[#FDC017]/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Card Hover Aura */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDC017]/0 via-transparent to-[#FDC017]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex-grow flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-[#031627] group-hover:bg-[#031627] group-hover:text-[#FDC017] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-inner mb-6">
                  {getIcon(item.icon)}
                </div>

                {/* Intake Tag */}
                <span className="inline-block w-fit px-3 py-1 bg-[#FDC017]/10 text-[#031627] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#FDC017]/20 mb-3 group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all">
                  {item.tag}
                </span>

                {/* Intake Title */}
                <h3 className="text-2xl font-black text-[#031627] mb-4 tracking-tight group-hover:text-[#FDC017] transition-colors duration-300">
                  {item.name}
                </h3>

                {/* Description - HTML Parsed */}
                <div 
                  className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow [&>p]:mb-4 last:[&>p]:mb-0"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntakeSection;
