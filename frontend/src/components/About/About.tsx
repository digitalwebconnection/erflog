import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        {/* Title */}
        <title>About Erfolg Solutions | Study Visa Consultants Mumbai</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Meet Erfolg Solutions, trusted study visa consultants in Mumbai offering expert guidance for admissions, visa applications, scholarships, and overseas education."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="About Erfolg Solutions, study visa consultants Mumbai, study abroad consultants, overseas education guidance, university admissions, visa applications, scholarships"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://erfolg.in/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Erfolg Solutions | Study Visa Consultants Mumbai" />
        <meta property="og:description" content="Meet Erfolg Solutions, trusted study visa consultants in Mumbai offering expert guidance for admissions, visa applications, scholarships, and overseas education." />
        <meta property="og:url" content="https://erfolg.in/about" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Erfolg Solutions | Study Visa Consultants Mumbai" />
        <meta name="twitter:description" content="Meet Erfolg Solutions, trusted study visa consultants in Mumbai offering expert guidance for admissions, visa applications, scholarships, and overseas education." />
      </Helmet>

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
