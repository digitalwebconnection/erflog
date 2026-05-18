import { motion } from "framer-motion";
import { FaShieldAlt, FaTrophy, FaRocket, FaLightbulb } from "react-icons/fa";
import { containerVariants, itemVariants } from "./Shared";

const AboutCoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all of our actions.",
      icon: <FaShieldAlt />,
      color: "#FDC017"
    },
    {
      title: "Commitment",
      description: "We are committed to providing the best possible service to our students.",
      icon: <FaTrophy />,
      color: "#031627"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
      icon: <FaRocket />,
      color: "#FDC017"
    },
    {
      title: "Innovation",
      description: "We embrace innovation to improve our services and outcomes.",
      icon: <FaLightbulb />,
      color: "#031627"
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-[#F8F9FA] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDC017]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#031627]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-[#FDC017]" />
                <span className="text-[#FDC017] font-bold uppercase tracking-[0.2em] text-xs">Our Principles</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#031627] mb-6 tracking-tight leading-[1.1]">
                Our <span className="text-[#FDC017] relative">
                  Core
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewBox="0 0 500 20"
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#FDC017]/30 stroke-current fill-none stroke-[3]"
                  >
                    <path d="M10,10 Q250,20 490,10" />
                  </motion.svg>
                </span> Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                The fundamental principles that define our commitment to your future success, shaping every decision we make.
              </p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="bg-white p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDC017]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150 group-hover:bg-[#FDC017]/10" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-xl bg-[#031627] text-[#FDC017] text-3xl flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all duration-500 shadow-xl group-hover:shadow-[#FDC017]/40">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#031627] tracking-tight">{value.title}</h3>
                <p className="text-base text-gray-500 font-medium leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCoreValues;
