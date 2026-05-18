import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import AboutStory from "./AboutStory";
import AboutProcess from "./AboutProcess";
import AboutCEOMessage from "./AboutCEOMessage";
import AboutCoreValues from "./AboutCoreValues";
import AboutPartners from "./AboutPartners";
import AboutCTA from "./AboutCTA";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white overflow-hidden selection:bg-[#FDC017] selection:text-[#031627]"
    >
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutProcess />
      <AboutCEOMessage />
      <AboutCoreValues />
      <AboutPartners />
      <AboutCTA />
    </motion.div>
  );
};

export default About;
