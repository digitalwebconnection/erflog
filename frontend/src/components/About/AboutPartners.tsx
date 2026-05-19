import { motion } from "framer-motion";

const destinations = [
  { label: "United Kingdom", short: "UK", students: "12k+", unis: "85+",  color: "#3b82f6", flag: "🇬🇧" },
  { label: "United States",  short: "USA", students: "18k+", unis: "120+", color: "#ef4444", flag: "🇺🇸" },
  { label: "Canada",         short: "CA", students: "9k+",  unis: "60+",  color: "#f97316", flag: "🇨🇦" },
  { label: "Australia",      short: "AU",  students: "11k+", unis: "45+",  color: "#10b981", flag: "🇦🇺" },
  { label: "Germany",        short: "DE",  students: "5k+",  unis: "38+",  color: "#FDC017", flag: "🇩🇪" },
  { label: "Singapore",      short: "SG",  students: "3k+",  unis: "22+",  color: "#a855f7", flag: "🇸🇬" },
  { label: "Europe",         short: "EU",  students: "7k+",  unis: "90+",  color: "#06b6d4", flag: "🇪🇺" },
];

const stats = [
  { val: "200+", lbl: "Universities" },
  { val: "65K+", lbl: "Students"     },
  { val: "98%",  lbl: "Success"      },
];

const AboutPartners = () => {
  return (
    <section className="py-12 bg-[#031627] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* ── Left Side: Minimal Header ── */}
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#FDC017]" />
                <span className="text-[#FDC017] text-[9px] font-black uppercase tracking-[0.4em]">Our Impact</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-4">
                Global <span className="text-[#FDC017]">Presence</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Expertly navigating global education landscapes across prime destinations.
              </p>
              
              <div className="flex gap-6">
                {stats.map(({ val, lbl }) => (
                  <div key={lbl}>
                    <div className="text-xl font-black text-white leading-none">{val}</div>
                    <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">{lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Side: Animated Marquee ── */}
          <div className="w-full md:w-1/2 relative">
             <div className="flex flex-col gap-4">
                {/* First Row - Right to Left */}
                <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                  <motion.div 
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-4 pr-4 whitespace-nowrap"
                  >
                    {[...destinations, ...destinations].map((d, i) => (
                      <div key={i} className="px-6 py-4 rounded-2xl bg-white/3 border border-white/5 flex items-center gap-3">
                        <span className="text-2xl">{d.flag}</span>
                        <span className="text-white font-bold text-sm">{d.label}</span>
                        <span className="text-[#FDC017] font-black text-[10px] bg-[#FDC017]/10 px-2 py-0.5 rounded-full">{d.short}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Second Row - Left to Right */}
                <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                  <motion.div 
                    animate={{ x: [-1000, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex gap-4 pr-4 whitespace-nowrap"
                  >
                    {[...destinations, ...destinations].reverse().map((d, i) => (
                      <div key={i} className="px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                        <span className="text-2xl">{d.flag}</span>
                        <div className="flex flex-col">
                           <span className="text-white font-bold text-xs">{d.label}</span>
                           <span className="text-[9px] text-gray-500 font-bold uppercase">{d.students} Students</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
