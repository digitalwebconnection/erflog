export interface StaticBlog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  isStatic?: boolean;
}

export const staticBlogs: StaticBlog[] = [
  {
    _id: "static-1",
    slug: "what-is-profile-evaluation-for-study-abroad",
    title: "What Is a Profile Evaluation for Study Abroad and Why Should You Do It Before Applying?",
    categories: "study abroad",
    readTime: "7 min",
    date: "July 07, 2026",
    excerpt: "Preparing for an international education is indeed thrilling, but it comes hand in hand with perhaps one of the toughest choices you will have to make in your educational career.",
    image: "/static_blog1.png",
    content: `
      <h2>Preparing for International Education</h2>
      <p>Preparing for an international education is indeed thrilling, but it comes hand in hand with perhaps one of the toughest choices you will have to make in your educational career. Thousands of individuals apply each year to foreign institutions without knowing if their academic profile and experience are up to par with the admission criteria. Many get rejected or waste money on application fees and lose out on scholarships.</p>
      
      <p>This is where study abroad consultants Mumbai can make a significant difference. A professional profile evaluation helps you understand your strengths, identify areas for improvement, and build a strategic application plan before you start applying to universities.</p>
      
      <p>Whether you are planning to pursue an MBA, engineering, management, healthcare, or research-based programs, a profile evaluation provides clarity and confidence throughout your study abroad journey.</p>
      
      <h3>What Is a Study Abroad Profile Evaluation?</h3>
      <p>A profile evaluation for a study abroad program is an assessment of your academic and professional profile in order to check your eligibility for various international universities. Unlike traditional counseling in which universities are recommended according to your grades alone, expert counselors assess all facets of your profile to devise a unique admission strategy for you.</p>
      
      <p>Profile evaluation usually includes:</p>
      <ul>
        <li>Academic record</li>
        <li>English language competence</li>
        <li>Scores of standardized tests (if required)</li>
        <li>Work experience</li>
        <li>Projects done</li>
        <li>Extracurricular activities</li>
        <li>Career plans</li>
        <li>Budget and preferred study location</li>
      </ul>
      
      <p>The purpose is to find universities to which you have realistic chances of admission and can receive maximum scholarships at the same time.</p>
      
      <h3>What Does a Study Abroad Profile Evaluation Include?</h3>
      <h4>Academic Performance</h4>
      <p>The academic credentials of yours act as the backbone of your application. The counselor evaluates your:</p>
      <ul>
        <li>Class 10 and 12 marks</li>
        <li>UG CGPA or percentage</li>
        <li>PG credentials, if any</li>
        <li>Academic consistency</li>
        <li>Backlogs, if any</li>
      </ul>
      <p>Several universities assess your overall academic performance instead of one semester's marks.</p>
    `,
    isStatic: true
  }
];
