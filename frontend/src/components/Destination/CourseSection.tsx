import { motion } from "framer-motion";
import {
  Briefcase,
  Settings,
  Terminal,
  Stethoscope,
  Scale,
  Palette,
  Globe
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
  // Dynamically split the title to highlight country/destination
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
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[#FDC017]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#031627]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Title & Key Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[#031627] font-bold uppercase tracking-[0.3em] text-xs mb-6"
            >
              <div className="w-12 h-[2px] bg-[#FDC017]" />
              Strategic Specializations
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#031627] leading-[1.1] tracking-tighter mb-8"
            >
              {prefix}
              {suffix && <span className="text-[#FDC017] block">{suffix}</span>}
            </motion.h2>

            {/* Premium Stats Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#031627] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden hidden lg:block"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(253,192,23,0.1),transparent_70%)] pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#FDC017] flex items-center justify-center text-[#031627]">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-[#FDC017]">Global Network</p>
                  <p className="text-sm font-bold text-white/90">Worldwide Affiliated</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-xs leading-relaxed">
                Connect with prestigious universities across the country with tailored pathways and direct admissions.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Course Rows List */}
          <div className="lg:col-span-8 space-y-4">
            {data.list.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:pr-36 bg-white border border-gray-100 rounded-3xl hover:border-[#FDC017]/30 hover:shadow-[0_15px_40px_rgba(253,192,23,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Left: Icon & Title */}
                <div className="flex items-center gap-4 sm:w-2/5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#031627] group-hover:bg-[#031627] group-hover:text-[#FDC017] transition-all duration-300 flex-shrink-0">
                    {course.icon ? course.icon : getIcon(course.title)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-black text-[#031627] tracking-tight group-hover:text-[#FDC017] transition-colors truncate">
                      {course.title}
                    </h3>
                    <span className="text-[9px] uppercase tracking-widest font-black text-[#FDC017] block mt-0.5">
                      Popular Program
                    </span>
                  </div>
                </div>

                {/* Center: Description */}
                <p className="text-gray-500 text-sm leading-relaxed sm:w-3/5 min-w-0">
                  {course.description}
                </p>

                {/* Right: Full-height borderless Image on Right */}
                <div className="absolute top-0 right-0 bottom-0 w-32 overflow-hidden hidden sm:block">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#031627]/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CourseSection;