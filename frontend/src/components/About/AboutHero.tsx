import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { SplitText } from "./Shared";

const AboutHero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1651953527447-4ad756efcd48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Erfolg"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#031627]/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
            <SplitText text="Empowering Your" className="block mb-1" />
            <span className="text-[#FDC017] relative">
              <SplitText text="Global Aspirations" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 font-medium leading-relaxed mb-10"
          >
            Building a bridge between your local potential and global possibilities with premium educational consultancy services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(253, 192, 23, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FDC017] cursor-pointer text-[#031627] px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 mx-auto transition-all"
              >
                Start Your Journey <FaChevronRight className="text-sm" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
