import { motion } from "framer-motion";
import { FaPassport, FaUserCheck, FaMapMarkedAlt, FaPlane } from "react-icons/fa";

const services = [
  {
    icon: FaMapMarkedAlt,
    title: "University Admission",
    desc: "Profiling, assessment, research, and application for multiple universities and courses globally."
  },
  {
    icon: FaPassport,
    title: "Visa Counselling",
    desc: "Expert guidance for student visas with a high success rate and documentation support."
  },
  {
    icon: FaUserCheck,
    title: "Document Assistance",
    desc: "Editing and reviewing SOPs, LORs, and CVs to ensure the highest standards for admissions."
  },
  {
    icon: FaPlane,
    title: "Post-Arrival Support",
    desc: "Helping you settle in your new country with accommodation and orientation assistance."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FDC017] font-bold tracking-widest text-3xl"
          >
            End-to-End
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-3 mb-10 text-primary tracking-tight"
          >
            Our Consultancy Services
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              
              className="
                group p-6 rounded-xl 
                border border-black/10 
                bg-white shadow-sm shadow-black/30
                hover:bg-yellow-50 
                hover:shadow-xl 
                hover:-translate-y-2
                transition-all duration-500
                flex gap-6
              "
            >
              
              {/* Icon */}
              <div className="
                flex-shrink-0 w-15 h-15 
                bg-yellow-100 text-yellow-600
                rounded-[2rem] 
                flex items-center justify-center 
                group-hover:bg-[#FDC017] 
                group-hover:text-white
                transition-all duration-500
              ">
                <service.icon size={32} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.desc}
                </p>

                <button className="mt-4 text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                  Read More <span className="text-yellow-500">→</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;