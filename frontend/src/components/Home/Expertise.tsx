import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaHospital,
  FaBusinessTime,
  FaMicrochip,
  FaPalette,
  FaBalanceScale,
} from "react-icons/fa";

const disciplines = [
  {
    icon: FaHospital,
    title: "Medicine & Health",
    desc: "Advanced degrees in Medicine, Nursing, and Dentistry.",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: FaBusinessTime,
    title: "Business & Management",
    desc: "MBA, Finance, and International Business courses.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: FaMicrochip,
    title: "Engineering & IT",
    desc: "Software, Mechanics, and Modern Technology fields.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: FaBalanceScale,
    title: "Law & Social Sciences",
    desc: "International Law, Psychology, and Sociology.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: FaPalette,
    title: "Arts & Design",
    desc: "Fashion, Architecture, and Visual Communications.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: FaUserGraduate,
    title: "Foundation Programs",
    desc: "Pathways to top-tier international universities.",
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=80",
  },
];

const Disciplines = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brandYellow font-bold tracking-widest text-3xl"
        >
          Expertise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mt-3 mb-10 text-primary"
        >
          Specialized in Study Abroad
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {disciplines.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white shadow-lg shadow-black-300 rounded-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-[#FDC017] mb-4">
                  <item.icon size={22} />
                </div>

                <h3 className="text-lg font-bold mb-2 text-primary">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Disciplines;