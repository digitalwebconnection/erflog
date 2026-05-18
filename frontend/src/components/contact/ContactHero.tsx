import { motion } from "framer-motion";
import { SplitText } from "../About/Shared";

const ContactHero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center text-white bg-[#031627]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
          alt="Contact Erfolg"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#031627]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
            <SplitText text="Let’s Shape Your" className="block mb-1" />
            <span className="text-[#FDC017] relative">
              <SplitText text="Future Together" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 font-medium leading-relaxed"
          >
            Connect with Erfolg experts for career guidance and study abroad consultation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;