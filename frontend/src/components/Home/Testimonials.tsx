// import { motion } from "framer-motion";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Rahul Sharma",
//     country: "UK",
//     university: "University of Hertfordshire",
//     text: "Erfolg Solutions helped me every step of the way. From university selection to visa approval, the process was seamless."
//   },
//   {
//     name: "Priya Patel",
//     country: "Australia",
//     university: "Monash University",
//     text: "Expert guidance for my Nursing application in Australia. I highly recommend Erfolg to anyone wanting to study abroad."
//   },
//   {
//     name: "Anas Ahmed",
//     country: "Finland",
//     university: "Aalto University",
//     text: "Securing admission in Finland seemed impossible until I met the team at Erfolg. They made the documentation so easy."
//   }
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-24 bg-primary text-white overflow-hidden relative">
//       <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <motion.span
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-center text-accent font-semibold uppercase tracking-widest text-lg"
//           >
//             Success Stories
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-center text-2xl md:text-3xl font-bold mt-3 mb-10 uppercase tracking-tight"
//           >
//             What Our Students Say
//           </motion.h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((t, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 relative"
//             >
//               <FaQuoteLeft className="text-accent/30 text-4xl mb-6" />
//               <p className="text-gray-300 leading-relaxed mb-8 italic">
//                 "{t.text}"
//               </p>
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-accent text-sm" />
//                 ))}
//               </div>
//               <div>
//                 <h4 className="font-bold text-accent text-lg">{t.name}</h4>
//                 <p className="text-gray-400 text-sm">{t.university}, {t.country}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;





"use client";


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";


const reviews = [
  {
    name: "Michale Albert",
    role: "HAPPY CUSTOMER",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    text:
      "Thank you for making the process of getting a Canada visa so easy. Your phone and email response was prompt and courteous. I received my passport with the visa one day earlier than I had anticipated.",
  },
  {
    name: "Christine Eve",
    role: "HAPPY CUSTOMER",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    text:
      "The expertise provided for my study permit was invaluable. They handled every detail of the application with precision. Highly recommended for anyone looking for peace of mind.",
  },
];


export default function ReviewsSection() {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  const review = reviews[index];


  return (
    <section className="relative bg-[#1a1a1a] py-2  0 px-6 md:px-0 overflow-hidden min-h-130 flex items-center">
     
      {/* Luxury grain overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />


      {/* Background skyline */}
      <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 1200 300" fill="white">
          <path d="M0 300V250H20V220H40V250H60V180H80V250H100V100H120V250H140V210H160V250H180V150H200V250H220V200H240V250H260V50H280V250H300V210H320V250H1200V300H0Z" />
          <circle cx="550" cy="180" r="60" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">


        {/* LEFT CONTENT */}
        <div className="text-gray-300">
          <Quote className="w-12 h-12 text-zinc-700 mb-6" />


          {/* Animated stars */}
          <div className="flex mb-4 gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-[#c1972d] text-xl relative"
              >
                ★
                <span className="absolute inset-0 animate-pulse text-[#c1972d] blur-[1px]">
                  ★
                </span>
              </motion.span>
            ))}
          </div>


          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-lg"
              >
                {review.text}
              </motion.p>


              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-[#c1972d]"></div>
                <div>
                  <h4 className="font-bold text-white text-xl tracking-wide uppercase">
                    {review.name}
                  </h4>
                  <p className="text-xs text-zinc-500 font-bold tracking-widest mt-1">
                    {review.role}
                  </p>
                </div>
              </div>


              {/* Auto-slide progress bar */}
              <div className="mt-6 h-0.5 w-40 bg-zinc-800 overflow-hidden">
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-[#c1972d]"
                />
              </div>
            </motion.div>
          </AnimatePresence>


          {/* Controls */}
          <div className="flex items-center gap-1 mt-10">
            <button
              onClick={() =>
                setIndex((index - 1 + reviews.length) % reviews.length)
              }
              className="p-4 bg-zinc-900/80 border border-zinc-800 text-white
              hover:bg-zinc-800 hover:shadow-[0_0_15px_rgba(255,0,0,0.35)]
              transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>


            <button
              onClick={() =>
                setIndex((index + 1) % reviews.length)
              }
              className="p-4 bg-zinc-900/80 border border-zinc-800 text-white
              hover:bg-zinc-800 hover:shadow-[0_0_15px_rgba(255,0,0,0.35)]
              transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
         
          {/* Approved stamp */}
          <div className="absolute top-10 right-10 z-20 opacity-30 rotate-12 pointer-events-none">
            <div className="border-4 border-white p-2 rounded-xl text-center">
              <span className="block text-white font-black text-2xl border-b-2 border-white">
                APPROVED
              </span>
              <span className="text-white text-[10px] tracking-widest">
                VISA PROCESSED
              </span>
            </div>
          </div>


          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
              }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{
                duration: 0.8,
                y: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 6,
                  ease: "easeInOut",
                },
              }}
              className="relative"
            >
              <img
                src={review.image}
                alt="Successful Applicant"
                className="w-87.5 h-112.5 md:w-112.5 md:h-137.5 object-cover rounded-b-full shadow-2xl"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
