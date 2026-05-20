import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ErfolgForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="py-12 px-6 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">

        {/* 🔥 SECTION HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-center text-[#FDC017] font-semibold text-5xl">
            <span className="text-black font-serif"> Get in Touch </span> <span className="font-serif">with Erfolg</span>
          </h2>
         
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-5xl font-serif font-bold text-[#FDC017] mb-4">
             <span className="text-black"> Arrange a </span> Consultation
            </h3>

            <p className="text-gray-700 mb-6">
              Get expert guidance for your future with our personalized counselling services.
              Our experienced advisors are here to understand your goals and help you make confident decisions.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">✅ Career Counselling</li>
              <li className="flex items-center gap-2">✅ Study Abroad Consultation</li>
            </ul>

            <div className="space-y-6">
              {[
                {
                  type: "Phone",
                  value: "+91 7506273011",
                  href: "tel:+917506273011",
                  icon: <Phone className="w-5 h-5 text-primary" />,
                },
                {
                  type: "Email",
                  value: "info@erfolgsolutions.in",
                  href: "mailto:info@erfolgsolutions.in",
                  icon: <Mail className="w-5 h-5 text-primary" />,
                },
                {
                  type: "Address",
                  value: "4/11, 1st floor, Plot No. 43, RTO Road, Nr. Bank of Maharashtra, New Panvel (East), Navi Mumbai - 410206",
                  href: "https://maps.google.com/?q=4/11, 1st floor, Plot No. 43, RTO Road, New Panvel East, Navi Mumbai - 410206",
                  icon: <MapPin className="w-5 h-5 text-primary" />,
                },
              ].map((item, index) => (
                <motion.a
                  key={item.type}
                  href={item.href}
                  target={item.type === "Address" ? "_blank" : undefined}
                  rel={item.type === "Address" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-black/5 bg-gray-50/50 hover:bg-white hover:border-[#FDC017] hover:shadow-lg transition-all duration-300 group cursor-pointer block"
                >
                  <div className="p-3 bg-[#FDC017] rounded-xl shadow-[0_4px_12px_rgba(253,192,23,0.3)] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#b4860b] text-sm uppercase tracking-wider mb-1">
                      {item.type}
                    </p>
                    <p className="text-gray-800 font-semibold text-base md:text-lg leading-relaxed group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-8  shadow-2xl shadow-black/50 border border-black/10">
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#FDC017]">
              Book Your Session
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-black/20 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-black/20 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-black/20 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-black/20 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select Service</option>
                <option value="career">Career Counselling</option>
                <option value="abroad">Study Abroad Consultation</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-black/20 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#FDC017] text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition cursor-pointer"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ErfolgForm;