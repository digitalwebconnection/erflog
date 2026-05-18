import { motion, useScroll, useTransform } from "framer-motion";
import { FaShieldAlt, FaGlobe } from "react-icons/fa";
import { useRef } from "react";
import storyImg from "../../assets/homehero10.jpg";

const AboutStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="py-4 md:py-6 px-6 container mx-auto relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="relative z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-[2px] bg-[#FDC017]" 
              />
              <span className="text-[#FDC017] font-bold uppercase tracking-[0.2em] text-[10px]">
                About ERFOLG
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-[#031627] mb-6 leading-[1.1] tracking-tight">
              Legacy of <br />
              <span className="text-[#FDC017] relative inline-block">
                Success
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewBox="0 0 500 20"
                  className="absolute -bottom-1 left-0 w-full h-2 text-[#FDC017]/30 stroke-current fill-none stroke-[3]"
                >
                  <path d="M10,10 Q250,20 490,10" />
                </motion.svg>
              </span> & Vision
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Founded on the pillars of transparency and excellence, ERFOLG has redefined the landscape of international education consultancy. We don't just process applications; we curate <strong className="font-semibold text-[#031627]">life-changing academic experiences</strong>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Our journey began with a simple belief: that talent should know no borders. Today, we stand as the preferred partner for thousands of students aiming for the world's elite universities.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl bg-[#031627] shadow-lg flex items-center justify-center text-white text-lg group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-colors duration-300">
                  <FaShieldAlt />
                </div>
                <div>
                  <span className="block font-bold text-[#031627] text-base mb-0.5">Certified Agency</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Trusted Worldwide</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl bg-[#FDC017] shadow-lg flex items-center justify-center text-[#031627] text-lg group-hover:bg-[#031627] group-hover:text-white transition-colors duration-300">
                  <FaGlobe />
                </div>
                <div>
                  <span className="block font-bold text-[#031627] text-base mb-0.5">Global Network</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Elite Partnerships</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Image Content */}
        <div className="relative order-1 lg:order-2">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FDC017]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#031627]/5 rounded-full blur-3xl" />

          <motion.div
             style={{ y: y1 }}
             className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[1.1/1]"
            >
              <img 
                src={storyImg}
                alt="Students collaborating" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031627]/80 via-[#031627]/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="text-4xl md:text-5xl font-black mb-1 tracking-tighter text-[#FDC017]">15+</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-200">Years of Excellence</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Floating Element */}
          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -right-6 bottom-16 z-20 hidden md:block"
          >
            <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg">
                 <FaShieldAlt />
               </div>
               <div>
                 <div className="font-bold text-[#031627] text-base">100%</div>
                 <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Success Rate</div>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-40 h-40 border-[1.5px] border-dashed border-[#FDC017]/30 rounded-full -z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
