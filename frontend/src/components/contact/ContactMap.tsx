import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const ContactMap = () => {
  const details = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: (
        <>
          HO – 3/31 Atlanta building, <br />
          Kandivali village, Kandivali West, Mumbai - 400067
        </>
      ),
      link: "https://maps.google.com/?q=HO+3/31+Atlanta+building+Kandivali+West+Mumbai+400067"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: (
        <>
          +91 75062 73011 <br />
          +91 75067 23011
        </>
      ),
      link: "tel:+917506273011"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      value: (
        <>
          info@erfolgsolutions.in <br />
          &nbsp;
        </>
      ),
      link: "mailto:info@erfolgsolutions.in"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Working Hours",
      value: (
        <>
          Mon - Sat: 10:00 AM - 6:30 PM <br />
          Sunday: Closed
        </>
      ),
      link: null
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle Aura/Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#031627]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDC017]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
          
          {/* Details Section (Right) */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#031627]/5 border border-[#031627]/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FDC017]"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#031627]">Office Details</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#031627] leading-[1.1] tracking-tight">
                Visit Our <br />
                <span className="text-[#FDC017]">Global Office</span>
              </h2>
              <p className="text-gray-500 text-base mt-3 max-w-md font-medium leading-relaxed">
                Connect with our expert counselors in person. We're here to guide your international education journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
              {details.map((item, idx) => {
                const isClickable = !!item.link;
                const Component = isClickable ? "a" : "div";
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="h-full"
                  >
                    {/* @ts-ignore */}
                    <Component
                      href={item.link || undefined}
                      target={isClickable ? "_blank" : undefined}
                      rel={isClickable ? "noopener noreferrer" : undefined}
                      className="group block h-full p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#FDC017]/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(253,192,23,0.08)] transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover Aura */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FDC017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 bg-[#FDC017]/10 rounded-xl flex items-center justify-center text-[#FDC017] group-hover:bg-[#FDC017] group-hover:text-[#031627] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                            {item.icon}
                          </div>
                          {isClickable && (
                            <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#031627] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                          )}
                        </div>
                        
                        <div className="mt-auto">
                          <h4 className="font-bold text-[#031627] text-sm uppercase tracking-wider mb-1.5">
                            {item.label}
                          </h4>
                          <p className="text-gray-600 text-[13px] leading-relaxed font-medium group-hover:text-[#031627] transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </Component>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Map Section (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12 h-[350px] lg:h-auto min-h-[380px] relative rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 group"
          >
            {/* Overlay Gradient for premium feel */}
            <div className="absolute inset-0 border-[6px] border-[#FDC017]/10 z-10 pointer-events-none rounded-[1.5rem] group-hover:border-[#FDC017]/30 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031627]/30 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <iframe 
              title="Erfolg Office Location"
              src="https://maps.google.com/maps?q=HO%20%E2%80%93%203/31%20Atlanta%20building,%20Kandivali%20village,%20Kandivali%20West,%20Mumbai%20-%20400067&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Floating Info Card on Map */}
            <div className="absolute bottom-5 left-5 right-5 md:left-auto md:right-5 md:w-64 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#FDC017]/30 shadow-[0_10px_40px_rgba(3,22,39,0.1)] z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#FDC017] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#031627]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#031627] text-sm">Erfolg Solutions</h5>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Kandivali West, Mumbai</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
