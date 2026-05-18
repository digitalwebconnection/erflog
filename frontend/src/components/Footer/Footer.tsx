import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#092238] text-white pt-16 pb-8 px-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo + About */}
        <div>
          <Link
            to="/"
            className="cursor-pointer block mb-4"
            onClick={scrollToTop}
          >
            <img src={Logo} alt="ERFOLG Logo" className="h-16 w-auto object-contain" />
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed">
            We help students achieve their dream of studying abroad with expert
            guidance, university admissions, visa support, and end-to-end
            consultancy services.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-accent hover:text-primary cursor-pointer transition"
                >
                  <Icon size={14} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FDC017]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Scholarships & Funding", path: "/scholarships" },
              { name: "Contact Us", path: "/contact" }
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={scrollToTop}
                  className="hover:text-[#FDC017] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FDC017]">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { name: "Profiling & Counselling", path: "/admission/profiling" },
              { name: "Test & Course Selection", path: "/admission/selection" },
              { name: "Editing & Submission", path: "/admission/submission" },
              { name: "Interview & Visa Guidance", path: "/admission/visa" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={scrollToTop}
                  className="hover:text-[#FDC017] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FDC017]">
            Study Destinations
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "United Kingdom",
              "United States",
              "Australia",
              "Ireland",
              "Finland",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-[#FDC017] cursor-pointer transition-colors"
              >
                Study in {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-accent">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="cursor-pointer hover:text-yellow-400 transition">Email: info@erfolg.com</li>
            <li className="cursor-pointer hover:text-yellow-400 transition">Phone: +91 98765 43210</li>
            <li className="cursor-pointer hover:text-yellow-400 transition">Ahmedabad, Gujarat, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ERFOLG. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;