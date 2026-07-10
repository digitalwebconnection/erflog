import { Helmet } from "react-helmet-async";
import ContactHero from "./ContactHero";
import ErfolgForm from "./contactForm";
import ContactMap from "./ContactMap";

const ContactMain = () => {
  return (
    <div>
      <Helmet>
        {/* Title */}
        <title>Contact Study Abroad Consultants Mumbai | Erfolg Solutions</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get in touch with study abroad consultants Mumbai for personalized guidance on admissions, visas, scholarships, and overseas education planning."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Contact Erfolg Solutions, study abroad consultants Mumbai, overseas education consultants Mumbai, study visa guidance Mumbai, admission counseling, scholarship planning, Erfolg Solutions contact number"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://erfolg.in/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Study Abroad Consultants Mumbai | Erfolg Solutions" />
        <meta property="og:description" content="Get in touch with study abroad consultants Mumbai for personalized guidance on admissions, visas, scholarships, and overseas education planning." />
        <meta property="og:url" content="https://erfolg.in/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Study Abroad Consultants Mumbai | Erfolg Solutions" />
        <meta name="twitter:description" content="Get in touch with study abroad consultants Mumbai for personalized guidance on admissions, visas, scholarships, and overseas education planning." />
      </Helmet>

      <ContactHero />
      <ErfolgForm />
      <ContactMap />
    </div>
  );
};

export default ContactMain;
