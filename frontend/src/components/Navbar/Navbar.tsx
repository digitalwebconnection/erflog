import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [dynamicCountries, setDynamicCountries] = useState<any[]>([]);

  // Mobile Nav States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/countries`);
        if (response.ok) {
          const data = await response.json();
          setDynamicCountries(data);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    const diff = latest - prev;

    if (latest < 50) {
      setHidden(false);
    } else if (diff > 5) {
      setHidden(true);
    } else if (diff < -5) {
      setHidden(false);
    }
  });

  const getActiveItem = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/about") return "About Us";
    if (path.startsWith("/admission")) return "University Admission";
    if (path === "/scholarships") return "Scholarships & Funding";
    if (path === "/contact") return "Contact Us";
    return "";
  };

  const active = getActiveItem();

  const menuItemClass = (item: string) =>
    `cursor-pointer px-4 py-2 text-sm font-medium uppercase tracking-wide flex items-center gap-1 ${
      active === item ? "text-[#FDC017]" : "text-white"
    } hover:text-[#FDC017] transition-colors duration-200`;

  const Arrow = ({ open }: { open: boolean }) => (
    <svg
      className={`w-3 h-3 mt-[2px] transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full bg-[#092238] px-6 lg:px-18 flex items-center justify-between z-50 shadow-md h-20 will-change-transform"
      >
        {/* Logo */}
        <Link to="/" className="cursor-pointer" onClick={scrollToTop}>
          <img src={Logo} alt="ERFOLG Logo" className="h-20 w-auto object-contain" />
        </Link>

        {/* Desktop Menu - hidden on mobile/tablet */}
        <ul className="hidden lg:flex items-center space-x-6 relative">

          {/* Home */}
          <li>
            <Link to="/" className={menuItemClass("Home")} onClick={scrollToTop}>
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link to="/about" className={menuItemClass("About Us")} onClick={scrollToTop}>
              About Us
            </Link>
          </li>

          {/* University Admission */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("admission")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              to="/admission"
              className={menuItemClass("University Admission")}
              onClick={scrollToTop}
            >
              University Admission
              <Arrow open={openDropdown === "admission"} />
            </Link>

            {openDropdown === "admission" && (
              <div className="absolute top-full left-0 pt-2 w-80">
                <ul className="bg-white text-black shadow-xl rounded-lg border border-gray-100 overflow-hidden">
                  {[
                    { name: "Profiling & Counselling", path: "/admission/profiling" },
                    { name: "Test & Course Selection", path: "/admission/selection" },
                    { name: "Editing & Submission", path: "/admission/submission" },
                    { name: "Interview & Visa Guidance", path: "/admission/visa" },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="block px-6 py-4 hover:bg-[#FDC017]/10 hover:text-[#031627] transition-colors duration-200 border-b border-gray-50 last:border-0"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Countries */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("countries")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className={menuItemClass("Countries")}>
              Countries
              <Arrow open={openDropdown === "countries"} />
            </div>

            {openDropdown === "countries" && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <ul className="bg-white text-black shadow-xl rounded-lg border border-gray-100 overflow-hidden">
                  {dynamicCountries.length > 0 ? (
                    dynamicCountries.map((item) => (
                      <li key={item.code || item._id}>
                        <Link
                          to={`/destination/${item.code}`}
                          className="block px-6 py-3 hover:bg-[#FDC017]/10 hover:text-[#031627] cursor-pointer transition-colors duration-200 border-b border-gray-50 last:border-0"
                          onClick={() => {
                            setOpenDropdown(null);
                            scrollToTop();
                          }}
                        >
                          {item.name.startsWith("Study in") ? item.name : `Study in ${item.name}`}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="px-6 py-3 text-gray-400 text-sm italic text-center">
                      Loading countries...
                    </li>
                  )}
                </ul>
              </div>
            )}
          </li>

          {/* Scholarships */}
          <li>
            <Link
              to="/scholarships"
              className={menuItemClass("Scholarships & Funding")}
              onClick={scrollToTop}
            >
              Scholarships & Funding
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className={menuItemClass("Contact Us")}
              onClick={scrollToTop}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button - visible on mobile/tablet */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-white hover:text-[#FDC017] p-2 transition-colors cursor-pointer"
        >
          <Menu size={28} />
        </button>
      </motion.nav>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            />

            {/* Menu Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 w-[80vw] sm:w-[320px] h-screen bg-[#092238] z-[9999] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <img src={Logo} alt="ERFOLG Logo" className="h-12 w-auto object-contain" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-[#FDC017] p-2 cursor-pointer"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Vertical menu links */}
                <ul className="space-y-4 text-white text-base font-bold uppercase tracking-wider">
                  <li>
                    <Link
                      to="/"
                      className={`block py-2 ${location.pathname === "/" ? "text-[#FDC017]" : "text-white"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`block py-2 ${location.pathname === "/about" ? "text-[#FDC017]" : "text-white"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>

                  {/* Collapsible University Admission */}
                  <li>
                    <button
                      onClick={() => setMobileAdmissionOpen(!mobileAdmissionOpen)}
                      className={`w-full text-left py-2 flex items-center justify-between uppercase tracking-wider ${
                        location.pathname.startsWith("/admission") ? "text-[#FDC017]" : "text-white"
                      }`}
                    >
                      <span>University Admission</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileAdmissionOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileAdmissionOpen && (
                      <ul className="pl-4 mt-2 space-y-3 text-sm text-gray-300 capitalize tracking-normal border-l border-white/10 ml-2">
                        {[
                          { name: "Profiling & Counselling", path: "/admission/profiling" },
                          { name: "Test & Course Selection", path: "/admission/selection" },
                          { name: "Editing & Submission", path: "/admission/submission" },
                          { name: "Interview & Visa Guidance", path: "/admission/visa" },
                        ].map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              className="block py-1 hover:text-[#FDC017] transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Collapsible Countries */}
                  <li>
                    <button
                      onClick={() => setMobileCountriesOpen(!mobileCountriesOpen)}
                      className={`w-full text-left py-2 flex items-center justify-between uppercase tracking-wider ${
                        location.pathname.startsWith("/destination") ? "text-[#FDC017]" : "text-white"
                      }`}
                    >
                      <span>Countries</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileCountriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileCountriesOpen && (
                      <ul className="pl-4 mt-2 space-y-3 text-sm text-gray-300 capitalize tracking-normal border-l border-white/10 ml-2 max-h-60 overflow-y-auto">
                        {dynamicCountries.length > 0 ? (
                          dynamicCountries.map((item) => (
                            <li key={item.code || item._id}>
                              <Link
                                to={`/destination/${item.code}`}
                                className="block py-1 hover:text-[#FDC017] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name.startsWith("Study in") ? item.name : `Study in ${item.name}`}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <li className="py-1 text-gray-500 italic">Loading countries...</li>
                        )}
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link
                      to="/scholarships"
                      className={`block py-2 ${location.pathname === "/scholarships" ? "text-[#FDC017]" : "text-white"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Scholarships & Funding
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={`block py-2 ${location.pathname === "/contact" ? "text-[#FDC017]" : "text-white"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Footer inside drawer */}
              <div className="pt-8 border-t border-white/10 text-center">
                <p className="text-gray-400 text-xs font-semibold">© {new Date().getFullYear()} ERFOLG. All Rights Reserved.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;