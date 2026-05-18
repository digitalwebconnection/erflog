import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const AdmissionCTA = () => {
  return (
    <section className="relative py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto bg-[#031627] rounded-4xl p-10 lg:p-16 overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDC017]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -ml-32 -mb-32" />

          <div className="flex flex-col items-center text-center justify-center relative z-10 max-w-3xl mx-auto">
            {/* Text Content */}
            <div className="text-center max-w-2xl flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <Star className="w-3.5 h-3.5 text-[#FDC017] fill-[#FDC017]" />
                <span className="text-white text-[10px] font-bold uppercase tracking-widest text-opacity-80">Start Your Journey Today</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                Ready to Start Your <br />
                <span className="text-[#FDC017]">Global Education Journey?</span>
              </h2>
              
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
                Our expert consultants are ready to guide you through every step of the admission process. Don't wait for the deadlines to approach.
              </p>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-2xl shadow-xl hover:shadow-[#FDC017]/20 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
