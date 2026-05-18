import { motion } from "framer-motion";
import { GraduationCap, Globe, BookOpen, Users } from "lucide-react";

const AdmissionOverview = () => {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Top Universities",
      description: "Direct partnerships with 500+ prestigious institutions worldwide across US, UK, Canada, and Europe."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Expert guidance for admissions in over 25 countries, ensuring you find the perfect cultural and academic fit."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Course Selection",
      description: "Personalized profiling to help you choose the right course that aligns with your career goals and interests."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "One-on-one sessions with experienced counselors who have helped thousands of students succeed."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* ── Centered Header ── */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-[#031627] mb-6 leading-[0.9] tracking-tighter">
              Empowering Your <br />
              <span className="text-[#FDC017]">Educational</span> Ambitions
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-4xl mx-auto">
              Navigating the complex landscape of international admissions can be daunting. Our comprehensive support system is designed to simplify every step, from initial counseling to final enrollment.
            </p>
          </motion.div>
        </div>

        {/* ── Content Grid ── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          
          {/* Image Side (Left) */}
          <div className="lg:w-[45%] relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-full min-h-[400px] rounded-[0.5rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Students at University" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031627]/60 via-transparent to-transparent" />
              
              {/* Overlay Stat Badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
                 <div className="text-[#031627] font-black text-3xl leading-none mb-1">98%</div>
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Success Rate</div>
              </div>
            </motion.div>
          </div>

          {/* Features Side (Right) */}
          <div className="lg:w-[55%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group p-8 rounded-[0.8rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#FDC017]/30 hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-[#031627] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#FDC017] group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#031627] mb-3 tracking-tight group-hover:text-[#FDC017] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionOverview;
