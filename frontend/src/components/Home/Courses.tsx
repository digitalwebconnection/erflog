import { motion } from "framer-motion";
import jointDegreeImg from "../../assets/joint_degree.png";

const courses = [
  { 
    title: "Undergraduate Project Management",  
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
    tag: "UK"
  },
  { 
    title: "Nursing & Midwifery (UG)", 
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80",
    tag: "UK"
  },
  { 
    title: "Data Science & AI (UG)", 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    tag: "UK"
  },
  { 
    title: "International Business (UG)", 
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
    tag: "UK"
  }
];

const jointDegrees = [
  { pair: "UK and Singapore", icon: "🇬🇧 🇸🇬" },
  { pair: "UK and Netherlands", icon: "🇬🇧 🇳🇱" },
  { pair: "UK and UAE", icon: "🇬🇧 🇦🇪" },
];

const Courses = () => {
  return (
    <section className="py-24 bg-bg-alt px-6" id="courses">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-primary/5 px-4 py-1 rounded-full border border-primary/10 mb-4"
          >
            <span className="text-primary font-bold tracking-wider text-sm uppercase">
              Admissions Open in UK
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mt-3 mb-6 text-primary tracking-tight"
          >
            Top Universities with <span className="text-[#FDC017]">Scholarships</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 text-lg max-w-2xl"
          >
            Secure your future with world-class undergraduate programs designed for global success. 
            Explore our most popular courses for the upcoming intake.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-black/5 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FDC017] text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {course.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4 transition-colors leading-tight">
                  {course.title}
                </h3>
                <button className="w-full py-3 bg-[#FDC017] text-black font-bold rounded-xl hover:bg-accent transition-all cursor-pointer shadow-md">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Joint Degree Section - Light Theme Redesign */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden relative border border-black/5"
        >
          {/* Subtle decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FDC017]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#FDC017] text-primary font-bold px-4 py-1.5 rounded-lg text-xs uppercase tracking-widest inline-block mb-6 shadow-sm"
              >
                Global Education
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Wondering of studying in <br/>
                <span className="text-[#FDC017] relative">
                  two countries?
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FDC017]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Experience the best of both worlds. Our joint degree programs are designed for ambitious students seeking dual international exposure and recognized certifications from top global universities.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-10">
                {jointDegrees.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
                    className="flex items-center gap-6 bg-bg-alt p-6 rounded-2xl border border-transparent hover:border-[#FDC017] hover:shadow-lg transition-all group"
                  >
                    <div className="w-20 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-primary text-xl">{item.pair}</p>
                      <p className="text-sm text-gray-500">Joint Degree Opportunity</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl hover:shadow-primary/20 group"
              >
                Contact us to know More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-dashed border-[#FDC017]/30 rounded-[3rem] animate-[spin_30s_linear_infinite]"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img 
                  src={jointDegreeImg} 
                  alt="Joint Degrees" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl border border-white/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full bg-[#FDC017] border-2 border-white flex items-center justify-center text-[10px] font-bold">U{i}</div>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-primary tracking-wider uppercase">Global Intake Active</span>
                    </div>
                    <p className="text-primary/80 font-medium italic mb-4 text-base md:text-lg">
                      "A joint degree gave me the edge I needed in the international job market."
                    </p>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest border-t border-black/5 pt-4 inline-block">— UG Student Alumni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
