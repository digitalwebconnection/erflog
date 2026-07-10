import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        {/* Title */}
        <title>Study Abroad Admission Consultants Mumbai | Erfolg Solutions</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Choose Erfolg Solutions, trusted study abroad admission consultants in Mumbai for expert counselling, university selection, applications, scholarships, and visa support."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="study abroad admission consultants, admission consultants Mumbai, Erfolg Solutions, university selection, admission application, study abroad counselling, scholarships, student visa support"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://erfolg.in/admission" />

        {/* Open Graph */}
        <meta property="og:title" content="Study Abroad Admission Consultants Mumbai | Erfolg Solutions" />
        <meta property="og:description" content="Choose Erfolg Solutions, trusted study abroad admission consultants in Mumbai for expert counselling, university selection, applications, scholarships, and visa support." />
        <meta property="og:url" content="https://erfolg.in/admission" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Abroad Admission Consultants Mumbai | Erfolg Solutions" />
        <meta name="twitter:description" content="Choose Erfolg Solutions, trusted study abroad admission consultants in Mumbai for expert counselling, university selection, applications, scholarships, and visa support." />
      </Helmet>

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
