import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [dynamicCountries, setDynamicCountries] = useState<any[]>([]);

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
    <motion.nav
      initial={false}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-[#092238] px-18 flex items-center justify-between z-50 shadow-md h-20 will-change-transform"
    >
      {/* Logo */}
      <Link to="/" className="cursor-pointer" onClick={scrollToTop}>
        <img src={Logo} alt="ERFOLG Logo" className="h-20 w-auto object-contain" />
      </Link>

      {/* Menu */}
      <ul className="flex items-center space-x-6 relative">

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
    </motion.nav>
  );
};

export default Navbar;