import { motion } from "framer-motion";
import {
  Briefcase,
  Settings,
  Terminal,
  Stethoscope,
  Scale,
  Palette,
  ArrowRight,
  BookOpen,
  ArrowUpRight
} from "lucide-react";

interface Course {
  icon?: string;
  image: string | undefined;
  title: string;
  description: string;
  full: string;
}

interface CourseSectionProps {
  data: {
    title: string;
    list: Course[];
  };
}

const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("business")) return <Briefcase size={20} />;
  if (t.includes("engineering")) return <Settings size={20} />;
  if (t.includes("computer") || t.includes("it")) return <Terminal size={20} />;
  if (t.includes("health") || t.includes("nursing")) return <Stethoscope size={20} />;
  if (t.includes("law")) return <Scale size={20} />;
  return <Palette size={20} />;
};

const CourseSection = ({ data }: CourseSectionProps) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6"
            >
              <div className="w-12 h-[2px] bg-primary" />
              Strategic Specializations
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

          <div className="flex items-center gap-4 text-gray-400 font-bold text-xs uppercase tracking-widest pb-4">
             <BookOpen size={16} className="text-[#FDC017]" />
             <span>Across 50+ Global Universities</span>
          </div>
        </div>

        {/* Structured Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.list.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Compact Image Section */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031627]/80 to-transparent" />
                
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#FDC017]">
                  {course.icon ? course.icon : getIcon(course.title)}
                </div>

                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#FDC017] animate-pulse" />
                   <span className="text-white font-black text-[10px] uppercase tracking-widest">High Demand</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-[#031627] mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {course.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#031627] font-bold text-[10px] uppercase tracking-widest">
                    <ArrowUpRight size={14} className="text-primary" />
                    <span>View Curriculum</span>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ArrowRight size={16} />
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

export default CourseSection;