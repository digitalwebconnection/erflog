import { motion } from "framer-motion";
import { GraduationCap, Trophy, User, AlertCircle } from "lucide-react";

const categories = [
  {
    title: "Academic Documents",
    icon: GraduationCap,
    color: "#FDC017",
    items: [
      "High School / Degree Certificates",
      "Official Academic Transcripts",
      "Letters of Recommendation (LOR)",
      "Statement of Purpose (SOP)",
      "Resume / Curriculum Vitae (CV)"
    ]
  },
  {
    title: "Test Scores",
    icon: Trophy,
    color: "#FDC017",
    items: [
      "English Proficiency (IELTS/TOEFL/PTE)",
      "Standardized Tests (GRE/GMAT/SAT)",
      "Subject-specific Entrance Tests",
      "Language Proficiency (Optional)",
      "Portfolio (For Design/Arts courses)"
    ]
  },
  {
    title: "Personal Documents",
    icon: User,
    color: "#FDC017",
    items: [
      "Valid Passport Copy",
      "Birth Certificate",
      "Passport Size Photographs"
    ]
  }
];

const AdmissionRequirements = () => {
  return (
    <section className="relative py-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#FDC017]" />
              <span className="text-[#FDC017] font-bold uppercase tracking-[0.3em] text-[11px]">Documentation</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tighter leading-tight">
              Application
              <span className="text-[#FDC017] "> Checklist</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
              Organizing your documents correctly is the first step toward a successful university application. Here's everything you need.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[180px]">
          
          {/* 1. Academic Documents (Large vertical) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-4 row-span-3 bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8">
              <GraduationCap className="w-12 h-12 text-[#FDC017]/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-6 mt-2">Academic <br/>Portfolio</h3>
            <ul className="space-y-4">
              {categories[0].items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#FDC017] transition-colors font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#FDC017]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FDC017] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </motion.div>

          {/* 2. Important Tip (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 lg:col-span-8 row-span-1 bg-[#031627] rounded-xl p-8 flex items-center justify-between group overflow-hidden relative"
          >
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#FDC017]/10 flex items-center justify-center border border-[#FDC017]/20">
                <AlertCircle className="w-7 h-7 text-[#FDC017] animate-pulse" />
              </div>
              <div>
                <span className="text-[#FDC017] font-bold uppercase tracking-widest text-[10px] mb-2 block">Preparation Strategy</span>
                <p className="text-white text-base font-medium max-w-xl leading-relaxed">
                  Start document preparation <span className="text-[#FDC017]">6-8 months</span> before deadlines for a stress-free process.
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#FDC017]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* 3. Test Scores (Medium) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 lg:col-span-5 row-span-2 bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-black text-gray-900 leading-tight">Standardized <br/>Scores</h3>
              <Trophy className="w-8 h-8 text-[#FDC017]" />
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {categories[1].items.slice(0, 4).map((item, i) => (
                <div key={i} className="px-4 py-3 bg-gray-50 rounded-xl text-xs font-bold text-gray-700 group-hover:bg-[#FDC017]/10 group-hover:text-gray-900 transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Personal Documents (Small) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 lg:col-span-3 row-span-2 bg-[#031627] rounded-xl p-8 text-white group overflow-hidden relative shadow-lg"
          >
            <User className="w-8 h-8 mb-5 group-hover:rotate-12 transition-transform text-[#FDC017]" />
            <h3 className="text-xl font-bold mb-4 text-[#FDC017]">Identity</h3>
            <ul className="space-y-3 opacity-90 text-sm font-medium">
              {categories[2].items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>



        </div>
      </div>
    </section>
  );
};

export default AdmissionRequirements;
