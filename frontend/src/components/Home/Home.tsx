import { motion } from "framer-motion";
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
