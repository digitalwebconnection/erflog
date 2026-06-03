import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Award, Heart, CheckCircle2, ChevronRight } from "lucide-react";
import { SplitText, Counter, FloatingShape, containerVariants, itemVariants } from "../About/Shared";
import { Link } from "react-router-dom";

interface Alumnus {
  name: string;
  country: string;
  university: string;
  course: string;
  intake: string;
  image: string;
  quote: string;
  visaStatus: string;
}

const alumniData: Alumnus[] = [
  {
    name: "Rahul Sharma",
    country: "United Kingdom",
    university: "University of Hertfordshire",
    course: "MSc in Data Science",
    intake: "Fall 2025",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    quote: "Erfolg Solutions helped me every step of the way. From university selection to visa approval, the process was seamless. The team was extremely patient and guided me in building a solid SOP.",
    visaStatus: "Visa Approved"
  },
  {
    name: "Priya Patel",
    country: "Australia",
    university: "Monash University",
    course: "Bachelor of Nursing",
    intake: "Spring 2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    quote: "Expert guidance for my Nursing application in Australia. I highly recommend Erfolg to anyone wanting to study abroad. They simplified the complex financial documentation for my visa application.",
    visaStatus: "Visa Approved"
  },
  {
    name: "Anas Ahmed",
    country: "Finland",
    university: "Aalto University",
    course: "MSc in Mobile Computing",
    intake: "Fall 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    quote: "Securing admission in Finland seemed impossible until I met the team at Erfolg. They made the documentation so easy and helped me prepare for the entrance interview thoroughly.",
    visaStatus: "Visa Approved"
  },
  {
    name: "Sneha Reddy",
    country: "Canada",
    university: "University of British Columbia",
    course: "MBA",
    intake: "Fall 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    quote: "I am extremely grateful to Erfolg Solutions for helping me get into UBC. Their feedback on my essays and mock interview prep made all the difference in my application's success.",
    visaStatus: "Visa Approved"
  },
  {
    name: "Karan Mehta",
    country: "United States",
    university: "New York University",
    course: "MS in Computer Engineering",
    intake: "Fall 2025",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    quote: "The personalized coaching at Erfolg helped me target top-tier universities. Their visa guidance was spot-on, helping me clear the interview with absolute confidence. Incredible service!",
    visaStatus: "Visa Approved"
  },
  {
    name: "Amara Silva",
    country: "Ireland",
    university: "Trinity College Dublin",
    course: "MSc in Finance",
    intake: "Spring 2026",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    quote: "Ireland was my dream destination, and Erfolg turned it into reality. Their counselors handled everything from application submission to finding accommodation options in Dublin.",
    visaStatus: "Visa Approved"
  }
];

const countriesList = ["All", "United Kingdom", "Canada", "Australia", "United States", "Finland"];

const Alumni = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredAlumni = activeFilter === "All"
    ? alumniData
    : alumniData.filter(al => al.country.toLowerCase() === activeFilter.toLowerCase());

  const stats = [
    { label: "Global Network", value: "5000+", icon: <Globe className="w-6 h-6" /> },
    { label: "Visa Approvals", value: "98%", icon: <CheckCircle2 className="w-6 h-6" /> },
    { label: "Partner Institutions", value: "200+", icon: <Award className="w-6 h-6" /> },
    { label: "Student Satisfaction", value: "100%", icon: <Heart className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#FDC017] selection:text-[#031627]">
      {/* Hero Section */}
      <section className="relative h-[90vh] py-20 lg:py-28 flex items-center bg-[#031627] text-white overflow-hidden">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
            alt="Graduation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031627] via-transparent to-[#031627]" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left flex flex-col items-start"
            >
              <span className="inline-block px-4 py-1.5 bg-[#FDC017]/10 text-[#FDC017] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-[#FDC017]/20">
                Global Alumni Network
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                <SplitText text="Stories of Global" className="block mb-1" />
                <span className="text-[#FDC017] relative">
                  <SplitText text="Student Success" />
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FDC017]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-10">
                Meet our inspiring graduates who turned their dreams of study abroad into reality. Discover their personal journeys, choices, and achievements under our premium consultancy guidance.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(253, 192, 23, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FDC017] text-[#031627] px-8 py-4 rounded-xl font-bold text-base flex items-center gap-3 transition-all cursor-pointer shadow-lg shadow-[#FDC017]/10"
                  >
                    Write Your Success Story <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              {/* Decorative Glowing Elements */}
              <div className="absolute inset-0 bg-[#FDC017]/10 rounded-2xl blur-3xl opacity-50 -z-10" />
              <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-[#FDC017] rounded-tl-2xl hidden sm:block" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-[#FDC017]/40 rounded-br-2xl hidden sm:block" />

              {/* Main Image Showcase Card */}
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-[#092238]/40 p-3 max-w-lg w-full">
                <div className="overflow-hidden rounded-xl relative">
                  <motion.img
                    src="/alumni_hero_image.png"
                    alt="Successful Alumni Group"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-[70vh] object-cover rounded-xl transition-all duration-500 filter brightness-95 group-hover:brightness-100"
                  />
                  {/* Decorative stamp label */}
                  <div className="absolute bottom-4 right-4 bg-[#FDC017] text-[#031627] font-black text-[10px] sm:text-xs px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> Class of 2025/2026
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <FloatingShape className="bg-[#FDC017]/10 w-[300px] h-[300px] -top-24 -right-24" />
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
                className="relative group p-6 rounded-xl bg-gray-100 border border-gray-100 hover:shadow-2xl hover:shadow-[#FDC017]/10 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FDC017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[0.75rem]" />
                <motion.div
                  whileHover={{ y: -5, rotate: 5 }}
                  className="text-3xl text-[#FDC017] mb-4 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-black mb-1 text-center text-[#031627] tracking-tighter">
                  <Counter value={stat.value} />
                </div>
                <div className="text-gray-500 font-bold text-center tracking-[0.2em] uppercase text-[9px]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Alumni Stories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
              Where Our <span className="text-[#FDC017]">Alumni Stood Out</span>
            </h2>
            <p className="text-gray-500 max-w-5xl mx-auto text-lg leading-relaxed">
              Filter by country to read the real experiences, academic achievements, and visa success stories of students who successfully transitioned to leading global educational hubs and universities under our expert guidance.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-3xl mx-auto">
            {countriesList.map((country) => (
              <button
                key={country}
                onClick={() => setActiveFilter(country)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border cursor-pointer ${activeFilter === country
                  ? "bg-[#031627] border-[#031627] text-[#FDC017] shadow-lg"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#031627] hover:text-[#031627]"
                  }`}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Alumni Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredAlumni.map((alumnus) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={alumnus.name}
                  className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Header with stamp overlay */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                      <img
                        src={alumnus.image}
                        alt={alumnus.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Stamp badge */}
                      <div className="absolute top-4 right-4 z-10 rotate-12 bg-emerald-500/90 text-white font-black text-xs tracking-wider px-3 py-1 rounded border border-emerald-400 shadow-md">
                        {alumnus.visaStatus}
                      </div>

                      {/* Header overlay metadata */}
                      <div className="absolute bottom-4 left-6 text-white">
                        <span className="px-2.5 py-0.5 bg-[#FDC017] text-[#031627] text-[9px] font-black uppercase tracking-widest rounded-md">
                          {alumnus.country}
                        </span>
                        <h3 className="text-2xl font-black mt-1 leading-tight">{alumnus.name}</h3>
                      </div>
                    </div>

                    {/* Description content */}
                    <div className="p-8">
                      <div className="mb-4">
                        <p className="text-xs text-[#031627] font-black tracking-wider uppercase mb-0.5">
                          {alumnus.university}
                        </p>
                        <p className="text-xs text-gray-400 font-semibold">{alumnus.course}</p>
                      </div>

                      <p className="text-gray-500 leading-relaxed text-sm italic">
                        "{alumnus.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-8 pb-8 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400">
                    <span>Intake: {alumnus.intake}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#031627] rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center text-white shadow-2xl"
          >
            {/* Shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDC017]/5 rounded-full blur-[100px] -ml-48 -mt-48" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDC017]/5 rounded-full blur-[100px] -mr-48 -mb-48" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Ready to Study <span className="text-[#FDC017]">Abroad?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Connect with our premium consultants and set your application on the path of guaranteed visa approval and scholarships.
              </p>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#031627" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-xl transition-all duration-300 inline-flex items-center gap-3 cursor-pointer shadow-xl shadow-[#FDC017]/10"
                >
                  Get Free Consultation
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
