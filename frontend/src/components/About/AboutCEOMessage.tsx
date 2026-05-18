import { motion } from "framer-motion";

const AboutCEOMessage = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative flex flex-col lg:flex-row items-stretch rounded-xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] bg-[#031627]"
        >
          <div className="w-full lg:w-[30%] min-h-[260px] lg:min-h-[380px] relative overflow-hidden">
            <motion.img
              whileInView={{ scale: 1.02 }}
              initial={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
              alt="CEO"
              className="absolute inset-0 w-full h-full object-cover object-left-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#031627]/80" />
          </div>
          
          <div className="w-full lg:w-[70%] p-8 lg:p-10 flex flex-col justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-12 h-1.5 bg-[#FDC017] mb-5 rounded-xl" />
              <blockquote className="text-xl md:text-3xl font-light italic text-white leading-tight mb-5 tracking-tight">
                "Education is the most powerful tool to change the world. At <span className="text-[#FDC017] font-black">ERFOLG</span>, we don't just build careers; we sculpt destinies for a brighter tomorrow."
              </blockquote>
              
              <div className="flex flex-col gap-1">
                <h4 className="text-2xl font-black text-white tracking-tight">John Doe</h4>
                <p className="text-[#FDC017] font-bold tracking-[0.3em] uppercase text-[10px]">Founder & CEO, ERFOLG Global</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCEOMessage;
