import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Disciplines from "./Expertise";
import Promotional from "./SpecialOffer";
import Courses from "./Courses";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Form from "./Form";
import CountrySection from "./Country";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <Helmet>
        {/* Title */}
        <title>Best Study Abroad Consultants in Mumbai | Erfolg Solutions</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Looking for the best study abroad consultants in Mumbai? Erfolg Solutions offers expert counselling, university admissions, visas & scholarships for global education."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="study abroad consultants in Mumbai, best study abroad consultants, Erfolg Solutions, study abroad counselling, university admissions, student visa, scholarships, global education"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://erfolg.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="Best Study Abroad Consultants in Mumbai | Erfolg Solutions" />
        <meta property="og:description" content="Looking for the best study abroad consultants in Mumbai? Erfolg Solutions offers expert counselling, university admissions, visas & scholarships for global education." />
        <meta property="og:url" content="https://erfolg.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Study Abroad Consultants in Mumbai | Erfolg Solutions" />
        <meta name="twitter:description" content="Looking for the best study abroad consultants in Mumbai? Erfolg Solutions offers expert counselling, university admissions, visas & scholarships for global education." />
      </Helmet>

      <Hero />
      <CountrySection />
      <Disciplines />
      <Promotional />
      <Courses />
      <Services />
      <Testimonials />
      <Form />
    </motion.div>
  );
};

export default Home;
