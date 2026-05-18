import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const AboutCTA = () => {
  return (
    <section className="py-8 container mx-auto px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-100/20 rounded-full blur-[80px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-[#fdfbf7] rounded-[2.5rem] p-8 md:p-12 text-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#FDC017]/10 max-w-3xl mx-auto"
      >
        <div className="relative z-10">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDC017] animate-pulse" />
            <span className="text-[#031627] text-[9px] font-black uppercase tracking-[0.3em]">Start Journey</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight tracking-tighter text-[#031627]">
            Ready to Conquer <br />
            <span className="text-[#FDC017] italic">The World?</span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-500 mb-8 font-medium leading-relaxed max-w-md mx-auto">
            Join <span className="text-[#031627] font-bold">5,000+ successful students</span> who found their future with ERFOLG.
          </p>
          
          {/* Button */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FDC017] text-[#031627] px-8 py-3.5 rounded-xl font-black text-sm transition-all duration-500 shadow-lg flex items-center gap-3 mx-auto group"
            >
              Book Free Consultation 
              <FaChevronRight className="text-[#031627]/40 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* Floating background shapes for extra "premium" feel */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#FDC017] opacity-20" />
        <div className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-blue-600 opacity-10" />
      </motion.div>
    </section>
  );
};

export default AboutCTA;
