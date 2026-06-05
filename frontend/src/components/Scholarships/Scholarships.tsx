import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, Globe, ArrowRight, DollarSign, Target, ChevronDown,
  Search, Filter, Calendar, MapPin, GraduationCap, UserCheck, Compass, FileText, CheckCircle2
} from "lucide-react";
import { SplitText, Counter } from "../About/Shared";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

interface ScholarshipDetails {
  name: string;
  country: string;
  level: string;
  coverage: string;
  eligibility: string;
  deadline: string;
  link: string;
}

const scholarshipDatabase: ScholarshipDetails[] = [
  {
    name: "Fulbright Foreign Student Program",
    country: "United States",
    level: "Postgraduate",
    coverage: "Full Tuition + Airfare + Living Stipend + Health Insurance",
    eligibility: "Bachelor's degree, strong academic record, English proficiency (TOEFL/IELTS)",
    deadline: "Varies by country (usually Feb - Oct)",
    link: "/contact"
  },
  {
    name: "Chevening Scholarships",
    country: "United Kingdom",
    level: "Postgraduate",
    coverage: "Full Tuition + Monthly Stipend + Travel Costs",
    eligibility: "2+ years work experience, undergraduate degree, leadership potential",
    deadline: "November annually",
    link: "/contact"
  },
  {
    name: "DAAD Scholarships (EPOS)",
    country: "Germany",
    level: "Postgraduate",
    coverage: "Full Tuition + €934 - €1,200 Monthly Stipend + Travel Allowance",
    eligibility: "Bachelor's degree, 2+ years of professional work experience",
    deadline: "Varies by course (typically Aug - Oct)",
    link: "/contact"
  },
  {
    name: "Erasmus Mundus Joint Master Degrees (EMJMD)",
    country: "Europe",
    level: "Postgraduate",
    coverage: "Full Tuition + Travel Costs + Monthly Allowance (€1,000)",
    eligibility: "Bachelor's degree, excellent academic standing",
    deadline: "January - March annually",
    link: "/contact"
  },
  {
    name: "Australia Awards Scholarships",
    country: "Australia",
    level: "Undergraduate & Postgraduate",
    coverage: "Full Tuition + Return Air Travel + Establishment Allowance + Living Expenses",
    eligibility: "Citizen of eligible partner country, 18+ years old, meeting academic/language criteria",
    deadline: "April annually",
    link: "/contact"
  },
  {
    name: "Gates Cambridge Scholarship",
    country: "United Kingdom",
    level: "Postgraduate",
    coverage: "Full Cost of Study + £20,000/year Stipend + Airfare",
    eligibility: "Outstanding intellectual ability, leadership capacity, commitment to improving others' lives",
    deadline: "December/January annually",
    link: "/contact"
  },
  {
    name: "MEXT Scholarships",
    country: "Japan",
    level: "Undergraduate & Postgraduate",
    coverage: "Full Tuition + Monthly Allowance (¥117,000 - ¥145,000) + Airfare",
    eligibility: "Willingness to learn Japanese, excellent academic records",
    deadline: "May - June annually",
    link: "/contact"
  },
  {
    name: "Ontario Graduate Scholarship (OGS)",
    country: "Canada",
    level: "Postgraduate",
    coverage: "CAD $15,000 per year",
    eligibility: "Enrolled in a participating Ontario university, high academic achievement",
    deadline: "Varies by department (typically Oct - Jan)",
    link: "/contact"
  }
];

const roadmapSteps = [
  {
    step: "01",
    title: "Profile Audit & Diagnostic",
    timeline: "9-12 Months Before Intake",
    desc: "We perform a comprehensive review of your academics, extra-curriculars, and leadership roles to identify your unique positioning.",
    icon: <Compass className="w-6 h-6" />
  },
  {
    step: "02",
    title: "Strategic Target Mapping",
    timeline: "8-10 Months Before Intake",
    desc: "We match your profile against thousands of institutional, governmental, and private scholarships to shortlist high-probability targets.",
    icon: <Target className="w-6 h-6" />
  },
  {
    step: "03",
    title: "Narrative & Essay Crafting",
    timeline: "6-8 Months Before Intake",
    desc: "Our strategists guide you through drafting compelling essays, personal statements, and letters of recommendation that resonate with funding committees.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    step: "04",
    title: "Dossier Submission & Tracking",
    timeline: "4-6 Months Before Intake",
    desc: "We double-check every documentation element and submit your polished applications, tracking updates and communication with coordinators.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    step: "05",
    title: "Interview Prep & Negotiation",
    timeline: "2-4 Months Before Intake",
    desc: "We conduct simulated mock interview panels and assist in negotiating/combining aid offers to secure the maximum possible funding.",
    icon: <UserCheck className="w-6 h-6" />
  }
];

const successStories = [
  {
    name: "Aditya Sharma",
    scholarship: "Erasmus Mundus Scholarship",
    award: "100% Fully Funded (Tuition + Stipend)",
    destination: "Europe (France & Italy)",
    quote: "Erfolg helped me build a unified narrative across my research projects, which was crucial for winning the Erasmus Mundus Joint Master's grant in AI.",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Sophia Chen",
    scholarship: "Fulbright Graduate Scholar",
    award: "Full Tuition + Travel + Monthly Living Allowance",
    destination: "United States (Harvard University)",
    quote: "Translating leadership potential into a paper application is incredibly tough. Erfolg's iteration cycles on my essays brought out my voice perfectly.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Amir Al-Hassan",
    scholarship: "Gates Cambridge Scholarship",
    award: "Full Cost of Study + £20,000 annual stipend",
    destination: "United Kingdom (University of Cambridge)",
    quote: "The mock panels success coaching at Erfolg gave me the confidence to handle the intense questions asked by the Gates Cambridge committee.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Elena Petrova",
    scholarship: "Vice-Chancellor's Excellence Award",
    award: "50% Tuition Waiver ($72,000 value)",
    destination: "Australia (University of Melbourne)",
    quote: "With Erfolg's early-action plan, I had my merit-based funding secured three months before other applicants had even finished their submissions.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  }
];

const Scholarships = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredScholarships = scholarshipDatabase.filter((item) => {
    const query = searchQuery.toLowerCase().trim();
    let matchesSearch = true;

    if (query) {
      const countryLower = item.country.toLowerCase();
      
      const isUSQuery = query === "us" || query === "usa" || query === "united states" || query === "america";
      const isUKQuery = query === "uk" || query === "united kingdom" || query === "britain" || query === "england";
      const isEuropeQuery = query === "europe" || query === "eu" || query === "germany" || query === "france" || query === "italy";
      const isCanadaQuery = query === "canada" || query === "ca";
      const isAustraliaQuery = query === "australia" || query === "au";
      const isJapanQuery = query === "japan" || query === "jp";

      if (isUSQuery || isUKQuery || isEuropeQuery || isCanadaQuery || isAustraliaQuery || isJapanQuery) {
        if (isUSQuery && countryLower === "united states") {
          matchesSearch = true;
        } else if (isUKQuery && countryLower === "united kingdom") {
          matchesSearch = true;
        } else if (isEuropeQuery && (countryLower === "europe" || countryLower === "germany" || countryLower === "france" || countryLower === "italy")) {
          matchesSearch = true;
        } else if (isCanadaQuery && countryLower === "canada") {
          matchesSearch = true;
        } else if (isAustraliaQuery && countryLower === "australia") {
          matchesSearch = true;
        } else if (isJapanQuery && countryLower === "japan") {
          matchesSearch = true;
        } else {
          matchesSearch = false;
        }
      } else {
        matchesSearch = countryLower.includes(query);
      }
    }
    
    const matchesCountry = selectedCountry === "All" || 
                          item.country === selectedCountry ||
                          (selectedCountry === "Europe" && (item.country === "Germany" || item.country === "Europe" || item.country === "France" || item.country === "Italy"));
    
    const matchesLevel = selectedLevel === "All" || item.level.includes(selectedLevel);
    
    return matchesSearch && matchesCountry && matchesLevel;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--x", `${x}px`);
    currentTarget.style.setProperty("--y", `${y}px`);
  };

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scholarshipTypes = [
    {
      title: "Merit-Based Awards",
      desc: "For students with exceptional academic records and high standardized test scores.",
      amount: "Up to 100% Tuition",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Need-Based Grants",
      desc: "Financial aid for talented students who require support to bridge the funding gap.",
      amount: "Partial to Full Cover",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Research Fellowships",
      desc: "Specialized funding for postgraduate students pursuing high-impact research projects.",
      amount: "Stipend + Tuition",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Global Diversity Grants",
      desc: "Awards aimed at promoting international diversity on global university campuses.",
      amount: "Fixed Grant Amount",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - 90vh Full-Width Background */}
      <section className="relative h-[90vh] py-20 flex items-center justify-center text-center bg-[#031627] text-white overflow-hidden">
        {/* Full-Width Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
              <SplitText text="Elite Funding &" className="block mb-1" />
              <span className="text-[#FDC017] relative">
                <SplitText text="Scholarship Mastery" />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-2xl mx-auto mb-10"
            >
              We decode the complexities of global financial aid, helping you secure the funding needed to attend the world's most prestigious institutions without the burden of debt.
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
                  className="bg-[#FDC017] text-[#031627] px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 mx-auto transition-all cursor-pointer"
                >
                  Start Your Journey <FaChevronRight className="text-sm" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Scholarship Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
              Curated <span className="text-[#FDC017]">Funding Opportunities</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Our experts track thousands of live grants to find the perfect match for your profile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarshipTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-10 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDC017]/5 rounded-bl-[100px] group-hover:bg-[#FDC017]/10 transition-colors" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-20 h-20 rounded-xl bg-gray-50 flex items-center justify-center text-[#FDC017] group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all duration-500 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-black text-[#031627]">{item.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-[#031627] font-bold text-[10px] uppercase tracking-widest rounded-lg">{item.amount}</span>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Tips Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="bg-[#031627] rounded-2xl p-12 lg:p-20 relative text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDC017]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                 >
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                       Mastering the <br />
                       <span className="text-[#FDC017] relative inline-block">
                          Scholarship Game
                          <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "100%" }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.6, duration: 0.8 }}
                             className="absolute bottom-1 left-0 h-[3px] bg-[#FDC017]/30"
                          />
                       </span>
                    </h2>
                    <motion.p 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.3, duration: 0.6 }}
                       className="text-gray-400 text-lg mb-10 leading-relaxed"
                    >
                       Scholarships are highly competitive. Beyond grades, committees look for specific leadership traits and community impact. Our strategists help you reveal these qualities.
                    </motion.p>
                    <motion.div 
                       className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       variants={{
                          hidden: { opacity: 0 },
                          visible: {
                             opacity: 1,
                             transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.4
                             }
                          }
                       }}
                    >
                       {[
                         { title: "Early Action", desc: "Most full-ride grants close 9-12 months before intake." },
                         { title: "Personal Branding", desc: "We help align your story with the donor's specific mission." }
                       ].map((tip, i) => (
                         <motion.div 
                           key={i} 
                           variants={{
                              hidden: { y: 20, opacity: 0 },
                              visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                           }}
                           whileHover={{ 
                              y: -8, 
                              scale: 1.02, 
                              borderColor: "rgba(253, 192, 23, 0.4)",
                              backgroundColor: "rgba(255, 255, 255, 0.08)",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                           }}
                           className="p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 group cursor-default"
                         >
                            <motion.h4 
                               whileHover={{ x: 3 }}
                               className="text-[#FDC017] font-bold mb-2 uppercase text-xs tracking-widest flex items-center gap-1.5"
                            >
                               <span className="w-1.5 h-1.5 rounded-full bg-[#FDC017] inline-block group-hover:scale-150 transition-transform" />
                               {tip.title}
                            </motion.h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{tip.desc}</p>
                         </motion.div>
                       ))}
                    </motion.div>
                 </motion.div>
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group/img"
                 >
                    {/* Glow element behind image on hover */}
                    <div className="absolute inset-0 bg-[#FDC017]/10 rounded-xl blur-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="overflow-hidden rounded-xl shadow-2xl">
                       <motion.img 
                         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                         whileHover={{ scale: 1.05 }}
                         transition={{ duration: 0.6 }}
                         className="rounded-xl object-cover w-full h-full transition-all duration-700 filter brightness-95 group-hover/img:brightness-100"
                         alt="Student Collaboration"
                       />
                    </div>

                    <motion.div 
                       initial={{ opacity: 0, scale: 0.8, y: 20 }}
                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                       className="absolute -bottom-6 -left-6 bg-[#FDC017] p-8 rounded-xl text-[#031627] shadow-2xl hidden sm:block cursor-default"
                    >
                       <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                       >
                          <p className="text-5xl font-black mb-1">
                            <Counter value="92%" />
                          </p>
                          <p className="text-xs font-bold uppercase tracking-wider opacity-90">Success Rate in 2024</p>
                       </motion.div>
                    </motion.div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Interactive Global Scholarship Finder */}
      <section className="py-12 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FDC017]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#031627]/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#031627]/5 text-[#031627] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-[#031627]/10">
              Scholarship
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
              Global Scholarship <span className="text-[#FDC017]">Finder</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore and filter live international scholarship opportunities. Search by name, country, or eligibility criteria.
            </p>
          </div>

          {/* Search and Filters Panel */}
          <div className="bg-white rounded-lg p-8 shadow-black/50 shadow-xl border border-gray-100 max-w-7xl mx-auto mb-16 relative overflow-hidden">
            {/* Ambient accent top border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FDC017]/40 via-[#031627]/20 to-[#FDC017]/40" />

            <div className="space-y-8">
              {/* Row 1: Search & Stats */}
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between ">
                <div className="w-full md:max-w-xl relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#031627]/40 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search scholarships by name, criteria, benefits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-16 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#FDC017] focus:bg-white focus:ring-4 focus:ring-[#FDC017]/10 focus:outline-none transition-all text-[#031627] placeholder-gray-400 text-sm font-semibold shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200/60 hover:bg-gray-200 text-[#031627] hover:text-black w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black cursor-pointer transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Matches counter and Reset */}
                <div className="flex items-center gap-4 shrink-0 w-full md:w-auto justify-between md:justify-end">
                  <span className="text-xs font-bold text-gray-400 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    {filteredScholarships.length} {filteredScholarships.length === 1 ? 'Match' : 'Matches'} Found
                  </span>

                  {(searchQuery || selectedCountry !== "All" || selectedLevel !== "All") && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCountry("All");
                        setSelectedLevel("All");
                      }}
                      className="px-4 py-2 text-xs font-bold text-[#031627] hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-xl transition-all border border-gray-100 cursor-pointer"
                    >
                      Reset Filters
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* Row 2: Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Destination Filter */}
                <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-wider text-[#031627]/60 flex items-center gap-1.5 shrink-0">
                    <Filter className="w-3.5 h-3.5 text-[#FDC017]" /> Destination:
                  </span>
                  <div className="flex gap-1 overflow-x-auto pb-1 max-w-full no-scrollbar">
                    {["All", "United States", "United Kingdom", "Canada", "Australia", "Europe", "Japan"].map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedCountry(c)}
                        className={`relative px-4 py-2.5 text-xs font-bold rounded-xl transition-colors duration-300 z-10 cursor-pointer shrink-0 ${
                          selectedCountry === c ? "text-[#031627]" : "text-gray-500 hover:text-[#031627]"
                        }`}
                      >
                        {selectedCountry === c && (
                          <motion.div
                            layoutId="activeCountry"
                            className="absolute inset-0 bg-[#FDC017] rounded-xl -z-10 shadow-[0_4px_12px_rgba(253,192,23,0.2)]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5">
                          {c === "All" ? "Global" : c === "United States" ? "US" : c === "United Kingdom" ? "UK" : c}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level Filter */}
                <div className="md:col-span-4 flex flex-col sm:flex-row sm:items-center gap-4 md:justify-end">
                  <span className="text-xs font-black uppercase tracking-wider text-[#031627]/60 flex items-center gap-1.5 shrink-0">
                    <GraduationCap className="w-3.5 h-3.5 text-[#FDC017]" /> Level:
                  </span>
                  <div className="flex gap-1 overflow-x-auto pb-1 max-w-full no-scrollbar">
                    {["All", "Undergraduate", "Postgraduate"].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setSelectedLevel(lvl)}
                        className={`relative px-4 py-2.5 text-xs font-bold rounded-xl transition-colors duration-300 z-10 cursor-pointer shrink-0 ${
                          selectedLevel === lvl ? "text-white" : "text-gray-500 hover:text-[#031627]"
                        }`}
                      >
                        {selectedLevel === lvl && (
                          <motion.div
                            layoutId="activeLevel"
                            className="absolute inset-0 bg-[#031627] rounded-xl -z-10 shadow-[0_4px_12px_rgba(3,22,39,0.15)]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{lvl === "All" ? "All Levels" : lvl === "Postgraduate" ? "Postgrad" : "Undergrad"}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="max-w-7xl mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredScholarships.map((scholarship) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onMouseMove={handleMouseMove}
                    key={scholarship.name}
                    className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_15px_45px_rgba(3,22,39,0.02)] hover:shadow-[0_30px_60px_rgba(3,22,39,0.06)] hover:border-[#FDC017]/35 transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-default"
                  >
                    {/* Premium Ambient Background Elements */}
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-[#FDC017]/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                    
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                      style={{
                        background: "radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.06), transparent 80%)"
                      }}
                    />

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col justify-between h-full flex-1">
                      <div>
                        {/* Top Metadata Row */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-wider">
                            <MapPin className="w-3.5 h-3.5 text-[#FDC017]" />
                            {scholarship.country}
                          </div>
                          
                          <span className="text-[#FDC017] font-black text-[10px] uppercase tracking-widest">
                            {scholarship.level}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-black text-[#031627] mb-6 group-hover:text-[#FDC017] transition-colors duration-300 leading-tight tracking-tight">
                          {scholarship.name}
                        </h3>

                        {/* Info Rows */}
                        <div className="space-y-5 mb-8">
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#FDC017] block mb-1.5">
                              Coverage & Value
                            </span>
                            <p className="text-base font-extrabold text-[#031627] leading-relaxed">
                              {scholarship.coverage}
                            </p>
                          </div>
                          
                          <div className="h-[1px] bg-gray-100" />
                          
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1.5">
                              Key Requirements
                            </span>
                            <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                              {scholarship.eligibility}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Footer Row */}
                      <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Application Deadline</span>
                          <span className="text-xs font-black text-[#031627] mt-1 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            {scholarship.deadline}
                          </span>
                        </div>

                        <Link to={scholarship.link}>
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-3 bg-[#031627] text-white hover:bg-[#FDC017] hover:text-[#031627] hover:shadow-[0_8px_25px_rgba(253,192,23,0.35)] text-xs font-black rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
                          >
                            Check Eligibility
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredScholarships.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4 border border-gray-100">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#031627] mb-2">No Matching Scholarships Found</h4>
                <p className="text-gray-400 max-w-md mx-auto text-sm mb-6">
                  Try adjusting your search terms or filters to find standard international grants.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCountry("All");
                    setSelectedLevel("All");
                  }}
                  className="px-6 py-2.5 bg-[#FDC017] text-[#031627] text-sm font-bold rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Proven Scholarship Roadmap (Timeline) */}
      <section className="py-12 bg-white relative overflow-hidden border-t border-gray-100">
        {/* Glow backdrop shapes */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FDC017]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-[#031627]/2 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Left Column: Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
              <span className="inline-block px-4 py-1.5 bg-[#FDC017]/10 text-[#031627] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#FDC017]/20">
                Application Blueprint
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#031627] leading-tight tracking-tighter">
                Our Proven <br />
                <span className="text-[#FDC017]">Scholarship Roadmap</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                Securing elite global funding requires structured planning and timeline compliance. Here is our step-by-step roadmap to maximizing your financial aid potential.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#FDC017] border border-gray-100 shadow-sm shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#031627] leading-none"><Counter value="92%" /></div>
                    <div className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wider mt-1.5">Success Rate</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#FDC017] border border-gray-100 shadow-sm shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#031627] leading-none"><Counter value="$4.2M" />+</div>
                    <div className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wider mt-1.5">Secured Aid</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Roadmap Timeline Stack */}
            <div className="lg:col-span-8 relative pl-6 md:pl-10">
              {/* Vertical timeline line */}
              <div className="absolute left-[13px] md:left-[17px] top-6 bottom-6 w-[2px] bg-gray-100" />

              <div className="space-y-8 relative z-10">
                {roadmapSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-10 md:pl-14 group"
                  >
                    {/* Timeline Node indicator containing Lucide Icon */}
                    <div className="absolute left-[-5px] md:left-[-1px] top-3.5 z-20 flex items-center justify-center">
                      <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-white border-2 border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-[#FDC017] group-hover:bg-[#031627] group-hover:text-[#FDC017] group-hover:shadow-[0_0_15px_rgba(253,192,23,0.25)] group-hover:rotate-6 transition-all duration-300 shadow-sm">
                        {item.icon}
                      </div>
                    </div>

                    {/* Step Card Content */}
                    <motion.div
                      whileHover={{ y: -6, borderColor: "rgba(253, 192, 23, 0.35)", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}
                      className="bg-gray-50/40 hover:bg-white rounded-2xl p-6 md:p-8 border border-gray-100/80 shadow-sm transition-all duration-500 relative cursor-default border-l-4 border-l-gray-200 hover:border-l-[#FDC017] overflow-hidden"
                    >
                      {/* Step index background watermark */}
                      <span className="absolute right-6 bottom-3 text-6xl font-black text-gray-100/70 group-hover:text-[#FDC017]/10 transition-colors pointer-events-none select-none z-0">
                        {item.step}
                      </span>

                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 bg-[#031627]/5 text-[#031627] text-[9px] font-black uppercase tracking-widest rounded border border-gray-100">
                              Step {item.step}
                            </span>
                            <h3 className="text-lg md:text-xl font-black text-[#031627] group-hover:text-[#FDC017] transition-colors duration-300">
                              {item.title}
                            </h3>
                          </div>
                          
                          <span className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-gray-400 group-hover:from-[#FDC017]/10 group-hover:to-[#FDC017]/20 group-hover:border-[#FDC017]/25 group-hover:text-[#031627] font-extrabold text-[10px] uppercase tracking-wider rounded-lg shrink-0 w-fit transition-all duration-300">
                            {item.timeline}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Alumni Scholarship Spotlight */}
      <section className="py-12 bg-[#031627] text-white relative overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDC017]/10 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDC017]/5 rounded-full blur-[120px] pointer-events-none -ml-48 -mb-48" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-[#FDC017]/10 text-[#FDC017] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-[#FDC017]/20">
              Hall of Fame
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">
              Alumni <span className="text-[#FDC017]">Scholarship Spotlight</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Witness the success of Erfolg scholars who received competitive funding to make their education affordable.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.015 }}
                onMouseMove={handleMouseMove}
                className="group bg-[#031627]/40 hover:bg-[#0a233c]/60 backdrop-blur-md rounded-lg p-8 border border-white/5 hover:border-[#FDC017]/35 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-default"
              >
                {/* Premium Glow Outer Border */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-[#FDC017]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                {/* Spotlight Ambient Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                  style={{
                    background: "radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(253, 192, 23, 0.08), transparent 80%)"
                  }}
                />

                {/* Subtle Dots Matrix Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0 pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-full flex-1">
                  <div>
                    {/* Profile row */}
                    <div className="flex items-center gap-5 mb-6">
                      <div className="relative shrink-0">
                        {/* Rotating dashed halo */}
                        <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#FDC017]/30 scale-90 group-hover:scale-100 group-hover:rotate-45 transition-all duration-700 pointer-events-none" />
                        
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#FDC017]/50 transition-colors shadow-lg relative z-10">
                          <img
                            src={story.img}
                            alt={story.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-black text-xl text-white group-hover:text-[#FDC017] transition-colors leading-tight tracking-tight">
                          {story.name}
                        </h3>
                        <p className="text-xs font-bold text-gray-400 flex items-center gap-1.5 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-[#FDC017]" />
                          {story.destination}
                        </p>
                      </div>
                    </div>

                    {/* Award Highlight Bar */}
                    <div className="bg-white/5 border border-white/5 group-hover:border-[#FDC017]/10 group-hover:bg-[#FDC017]/5 rounded-2xl px-5 py-3.5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FDC017] animate-pulse" />
                        <span className="text-[11px] font-black uppercase tracking-wider text-white">
                          {story.scholarship}
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-[#FDC017] bg-[#FDC017]/10 px-3 py-1 rounded-lg border border-[#FDC017]/25 w-fit shrink-0">
                        {story.award.split(" (")[0]}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="text-gray-300 group-hover:text-white italic text-sm leading-relaxed mb-6 font-medium relative pl-6 border-l-2 border-l-[#FDC017]/30 group-hover:border-l-[#FDC017] transition-all duration-300">
                      "{story.quote}"
                    </blockquote>
                  </div>

                  {/* Verification Footer Link */}
                  <div className="flex justify-between items-center pt-5 border-t border-white/5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Approved Success Case</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship FAQ Section */}
      <section className="py-12 bg-gray-50/50">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
              <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="text-center mb-16"
              >
                 <h2 className="text-4xl md:text-5xl font-black text-[#031627] mb-6 leading-tight tracking-tighter">
                   Funding <span className="text-[#FDC017] relative inline-block">
                     Intelligence
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="absolute bottom-1 left-0 h-[3px] bg-[#FDC017]/30"
                     />
                   </span>
                 </h2>
                 <p className="text-gray-500 text-lg max-w-xl mx-auto">Common questions about securing international financial aid.</p>
              </motion.div>

              <motion.div 
                 className="space-y-5"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={{
                    hidden: { opacity: 0 },
                    visible: {
                       opacity: 1,
                       transition: {
                          staggerChildren: 0.12,
                          delayChildren: 0.2
                       }
                    }
                 }}
              >
                 {[
                   { q: "Can I get a 100% scholarship for undergraduate studies?", a: "Yes, especially in the US and UK. Ivy League schools offer need-blind admissions, while UK universities offer specific vice-chancellor merit awards that cover full tuition." },
                   { q: "Do I need a high IELTS score for scholarships?", a: "While not always mandatory for the scholarship itself, a high language score (7.5+) significantly strengthens your academic profile in the eyes of funding committees." },
                   { q: "Is work experience required for postgraduate grants?", a: "For MBA and specialized Master's grants (like Chevening), 2-3 years of impact-driven work experience is often a core requirement." }
                 ].map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                      <motion.div
                        key={i}
                        variants={{
                           hidden: { y: 20, opacity: 0 },
                           visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        whileHover={{ 
                           y: -4, 
                           scale: 1.005,
                           boxShadow: "0 15px 30px rgba(3, 22, 39, 0.05)"
                        }}
                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer select-none ${
                          isOpen 
                            ? "border-[#FDC017] shadow-md shadow-[#FDC017]/5" 
                            : "border-gray-100 hover:border-gray-300 hover:shadow-sm"
                        }`}
                        onClick={() => toggleIndex(i)}
                      >
                         <div className="p-8 flex items-center justify-between gap-4">
                            <h4 className="text-lg md:text-xl font-bold text-[#031627] flex items-center gap-3">
                               <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shrink-0 ${isOpen ? "bg-[#FDC017] scale-125" : "bg-gray-300"}`} />
                               {faq.q}
                            </h4>
                            <motion.div
                               animate={{ rotate: isOpen ? 180 : 0 }}
                               transition={{ duration: 0.3, ease: "easeInOut" }}
                               className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? "bg-[#FDC017] text-[#031627]" : "bg-gray-100 text-gray-500"}`}
                            >
                               <ChevronDown className="w-4 h-4" />
                            </motion.div>
                         </div>
                         <motion.div
                            initial={false}
                            animate={{ 
                               height: isOpen ? "auto" : 0,
                               opacity: isOpen ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                         >
                            <p className="text-gray-500 leading-relaxed pb-8 px-8 pl-[3.25rem] border-t border-gray-50 pt-5 text-base md:text-lg">
                               {faq.a}
                            </p>
                         </motion.div>
                      </motion.div>
                    );
                 })}
              </motion.div>
           </div>
        </div>
      </section>

      {/* Perfect CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#031627] rounded-3xl p-12 lg:p-16 relative overflow-hidden text-center shadow-2xl"
          >
            {/* Subtle Brand Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDC017]/5 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FDC017]/5 rounded-full blur-[80px] -ml-32 -mb-32" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#FDC017]/10 text-[#FDC017] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-[#FDC017]/20">
                Funding Match
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Claim Your <span className="text-[#FDC017]">Scholarship</span> Today
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Speak with our financial aid experts to discover which global scholarships you are eligible for and start your application today.
              </p>
              
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#FDC017] text-[#031627] font-bold rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl shadow-[#FDC017]/20 group cursor-pointer"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
