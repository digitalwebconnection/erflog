import { motion } from "framer-motion";
import { SplitText } from "../About/Shared";
import BlogPage from "./BlogPage";
import heroImg from "../../assets/blog-hero2.jpg";

export default function SolarBlogPage() {
  return (
    <>
      {/* ===== BLOG HERO SECTION ===== */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center text-white bg-[#031627]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Study Abroad Blog"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#031627]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
              <SplitText text="Insights & Guides for" className="block mb-1" />
              <span className="text-[#FDC017] relative">
                <SplitText text="Your Study Journey" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 font-medium leading-relaxed"
            >
              Explore the latest news, updates, and comprehensive guides from Erfolg experts to help navigate your international education.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== MAIN CONTENT: BLOG GRID ===== */}
      <main className="mx-auto max-w-7xl px-4 md:px-0 py-6 md:py-10 space-y-10 md:space-y-14">
        <BlogPage />
      </main>
    </>
  );
}
