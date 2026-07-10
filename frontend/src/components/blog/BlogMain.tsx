import SolarBlogPage from "./BlogHero"
import { Helmet } from "react-helmet-async"

const BlogMain = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Study Abroad Blogs | Visa, Scholarships & University Tips</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Read study abroad blogs with practical advice on university selection, applications, scholarships, visas, and studying abroad successfully."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="study abroad blogs, study visa tips, scholarship advice, university selection, overseas education tips, admissions guidance"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://erfolg.in/blog" />

        {/* Open Graph */}
        <meta property="og:title" content="Study Abroad Blogs | Visa, Scholarships & University Tips" />
        <meta property="og:description" content="Read study abroad blogs with practical advice on university selection, applications, scholarships, visas, and studying abroad successfully." />
        <meta property="og:url" content="https://erfolg.in/blog" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://erfolg.in/blog-hero2.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Abroad Blogs | Visa, Scholarships & University Tips" />
        <meta name="twitter:description" content="Read study abroad blogs with practical advice on university selection, applications, scholarships, visas, and studying abroad successfully." />
      </Helmet>

      <SolarBlogPage />
    </>
  )
}

export default BlogMain
