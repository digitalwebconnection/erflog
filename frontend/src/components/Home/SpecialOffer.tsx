import { motion } from "framer-motion";
import { FaGraduationCap, FaCheckCircle, FaHospital } from "react-icons/fa";
import bgImage from "../../assets/hero_bg.png";

const Promotional = () => {
  return (
    <section className="py-8 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-primary"
      > 
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-[#FDC017] mb-4">
            <FaGraduationCap size={24} />
            <span className="font-bold tracking-widest uppercase text-sm">Special Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Study Medicine & Dentistry <br />
            <span className="text-[#FDC017] underline decoration-[#FDC017]/20 underline-offset-8">Across the Globe</span>
          </h2>
          <p className="text-white text-lg mb-8 leading-relaxed">
            Take the first step toward a global medical career. We provide complete assistance with university selection, documentation, and admission procedures.
          </p>
          <ul className="space-y-4 mb-10">
            {["High success rate", "Top biological universities", "Direct placements"].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white">
                <FaCheckCircle className="text-[#FDC017]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
         <button className="px-10 py-2 bg-[#FDC017] text-primary font-bold rounded-full hover:bg-white transition-all duration-300 cursor-pointer">
           Apply Now
         </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-yellow-300 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform"></div>
          <div className="rounded-2xl relative shadow-xl overflow-hidden p-10"
          style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>
          
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 text-accent border border-white/20">
                <FaHospital size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#FDC017] mb-2">UK Medical Schools</h3>
              <p className="text-white mb-6 font-semibold">Limited Seats Available for 2026</p>
              <div className="w-full h-[1px] bg-white/20 mb-6"></div>
              <div className="flex justify-center w-full">
                <div className="w-full md:w-1/2 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex flex-col items-center justify-center">
                  <div className="text-[#FDC017] font-bold text-xl">98%</div>
                  <div className="text-xs text-white/70 uppercase font-medium">Success</div>
                </div>
              </div>
            </div>
          </div>
          
        </motion.div>
        
      </div>
      
    </section>
  );
};

export default Promotional;
