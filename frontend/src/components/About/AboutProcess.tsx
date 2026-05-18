import { motion } from "framer-motion";
import { FaUsers, FaGlobeAmericas, FaUniversity, FaPlaneDeparture } from "react-icons/fa";

const processes = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Strategy session to align your goals with global opportunities.",
    icon: <FaUsers />,
    tag: "Discovery",
  },
  {
    step: "02",
    title: "University Selection",
    desc: "Data-driven selection of institutions that match your profile.",
    icon: <FaGlobeAmericas />,
    tag: "Strategy",
  },
  {
    step: "03",
    title: "Application & Admission",
    desc: "Meticulous documentation and end-to-end application management.",
    icon: <FaUniversity />,
    tag: "Execution",
  },
  {
    step: "04",
    title: "Visa & Departure",
    desc: "Expert visa counseling and comprehensive pre-departure briefing.",
    icon: <FaPlaneDeparture />,
    tag: "Launch",
  },
];

const AboutProcess = () => {
  return (
    <section className="py-8 md:py-12 bg-white relative overflow-hidden">
      {/* Faint grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#031627 1px, transparent 1px), linear-gradient(90deg, #031627 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 bg-[#FDC017]/10 border border-[#FDC017]/30 px-5 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FDC017]" />
              <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#FDC017]">
                How We Work
              </span>
            </div>
            <h2 className="text-5xl md:text-5xl font-black text-[#031627] tracking-tighter leading-[0.88]">
              Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#031627]">Seamless</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#FDC017] origin-left -z-0 rounded-sm"
                />
              </span> <br />{" "}
              Process
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium self-end"
          >
            Empowering your global journey through a meticulously crafted
            methodology designed for success.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[4%] right-[4%] h-[2px] z-0">
            <div className="w-full h-full border-t-2 border-dashed border-gray-200" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.8, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#FDC017] via-orange-400 to-[#FDC017] origin-left"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: idx * 0.15,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="relative z-10 w-[106px] h-[106px] rounded-full bg-white border-2 border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center mb-8 group-hover:border-[#FDC017] group-hover:shadow-[0_12px_40px_rgba(253,192,23,0.2)] transition-all duration-400"
                >
                  {/* Icon */}
                  <span className="text-2xl text-[#031627] group-hover:text-[#FDC017] transition-colors duration-300 mb-1">
                    {item.icon}
                  </span>
                  {/* Step number */}
                  <span className="text-[10px] font-black tracking-widest text-gray-300 group-hover:text-[#FDC017] transition-colors duration-300">
                    {item.step}
                  </span>
                  {/* Gold ring on hover */}
                  <span className="absolute inset-0 rounded-full border-2 border-[#FDC017] opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-400" />
                </motion.div>

                {/* Tag pill */}
                <span className="inline-block px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 group-hover:bg-[#FDC017]/10 group-hover:border-[#FDC017]/30 group-hover:text-[#FDC017] transition-all duration-300">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-black text-[#031627] tracking-tight mb-3 group-hover:text-[#FDC017] transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-medium leading-relaxed text-sm max-w-[220px]">
                  {item.desc}
                </p>

                {/* Bottom accent bar */}
                <div className="mt-6 w-8 h-1 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.15, duration: 0.8 }}
                    className="w-full h-full bg-[#FDC017]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
