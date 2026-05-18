import { motion } from "framer-motion";
import { FaGraduationCap, FaGlobe, FaUsers, FaHandshake } from "react-icons/fa";
import { Counter, FloatingShape, containerVariants, itemVariants } from "./Shared";

const AboutStats = () => {
  const stats = [
    { label: "Students Placed", value: "5000+", icon: <FaGraduationCap /> },
    { label: "Partner Universities", value: "200+", icon: <FaGlobe /> },
    { label: "Expert Consultants", value: "50+", icon: <FaUsers /> },
    { label: "Success Rate", value: "98%", icon: <FaHandshake /> },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <FloatingShape className="bg-[#FDC017]/10 w-[400px] h-[400px] -top-48 -left-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group p-6 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-[#FDC017]/10 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDC017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem]" />
              <motion.div 
                whileHover={{ y: -5, rotate: 5 }}
                className="text-4xl text-[#FDC017] mb-4 flex justify-center"
              >
                {stat.icon}
              </motion.div>
              <div className="text-4xl md:text-5xl font-black mb-1 text-center text-[#031627] tracking-tighter">
                <Counter value={stat.value} />
              </div>
              <div className="text-gray-500 font-bold text-center tracking-[0.2em] uppercase text-[10px]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;
