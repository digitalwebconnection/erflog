import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, GraduationCap, ChevronRight, CheckCircle2 } from "lucide-react";

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

const EducationSection = ({ data }: SectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#031627] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(253,192,23,0.1),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Navigation & Summary */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 text-[#FDC017] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                <div className="w-10 h-[1px] bg-[#FDC017]" />
                Academic Excellence
              </div>
              <h2 className="text-5xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                {data.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {data.intro}
              </p>
            </motion.div>

            {/* Interactive Timeline/Menu */}
            <div className="space-y-3">
              {data.sections.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full group flex items-center justify-between p-5 rounded-2xl transition-all duration-500 border ${
                    activeIndex === i 
                      ? "bg-[#FDC017] border-[#FDC017] text-[#031627] shadow-[0_20px_40px_-10px_rgba(253,192,23,0.3)]" 
                      : "bg-white/5 border-white/5 text-white/60 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`text-xs font-black transition-colors ${activeIndex === i ? "text-[#031627]/40" : "text-white/20"}`}>
                      0{i + 1}
                    </span>
                    <span className="font-bold tracking-tight">{item.title}</span>
                  </div>
                  <ChevronRight size={18} className={`transition-transform duration-500 ${activeIndex === i ? "translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Content Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 md:p-16 relative shadow-2xl"
              >
                 <div className="absolute top-10 right-10 opacity-5 text-white">
                  <GraduationCap size={150} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#FDC017]/10 flex items-center justify-center text-[#FDC017]">
                      <BookOpen size={24} />
                    </div>
                    <div className="h-[1px] grow bg-white/10" />
                  </div>

                  <h3 className="text-4xl font-black text-white mb-8 tracking-tighter">
                    {data.sections[activeIndex]?.title}
                  </h3>

                  <div 
                    className="text-gray-300 text-lg leading-relaxed mb-10 prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: data.sections[activeIndex]?.content }}
                  />

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {data.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#FDC017]" />
                        <span className="text-sm font-bold text-white/80 tracking-tight">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Summary Badge */}
                  <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-[#FDC017]/5 rounded-2xl border border-[#FDC017]/10">
                    <Award className="text-[#FDC017]" size={20} />
                    <span className="text-[#FDC017] text-xs font-black uppercase tracking-widest">Ranked Worldwide</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;