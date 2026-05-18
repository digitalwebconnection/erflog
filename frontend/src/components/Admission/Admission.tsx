import { motion } from "framer-motion";
import AdmissionHero from "./AdmissionHero";
import AdmissionOverview from "./AdmissionOverview";
import AdmissionSteps from "./AdmissionSteps";
import AdmissionRequirements from "./AdmissionRequirements";
import AdmissionScholarships from "./AdmissionScholarships";
import AdmissionCTA from "./AdmissionCTA";

const Admission = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#031627] overflow-hidden selection:bg-[#FDC017] selection:text-[#031627]"
    >
      <AdmissionHero />
      <AdmissionOverview />
      <AdmissionSteps />
      <AdmissionRequirements />
      <AdmissionScholarships />
      <AdmissionCTA />
    </motion.div>
  );
};

export default Admission;
