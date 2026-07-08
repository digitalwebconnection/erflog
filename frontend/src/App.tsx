import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Admission from './components/Admission/Admission'
import ProfilingCounselling from './components/Admission/SubPages/ProfilingCounselling'
import TestSelection from './components/Admission/SubPages/TestSelection'
import EditingSubmission from './components/Admission/SubPages/EditingSubmission'
import InterviewVisa from './components/Admission/SubPages/InterviewVisa'
import Scholarships from './components/Scholarships/Scholarships'
import Contact from './components/contact/ContactMain'
import DestinationPage from './components/Destination/DestinationPage'
import Alumni from './components/Alumni/Alumni'
import AdminApp from './admin/AdminApp'
import BlogMain from './components/blog/BlogMain'
import BlogDetails from './components/blog/BlogDetails'

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (isAdmin) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.0, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2, 
      touchMultiplier: 2,
      lerp: 0.12, 
      infinite: false,
      syncTouch: true,
    })

    lenisRef.current = lenis;

    function raf(time: number) {
      if (!lenisRef.current) return;
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    }
  }, [isAdmin])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      {!isAdmin && <Navbar />}
      <main className={`${isAdmin ? '' : 'pt-20'} overflow-x-hidden`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission/profiling" element={<ProfilingCounselling />} />
          <Route path="/admission/selection" element={<TestSelection />} />
          <Route path="/admission/submission" element={<EditingSubmission />} />
          <Route path="/admission/visa" element={<InterviewVisa />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination/:country" element={<DestinationPage />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </>
  )
}

export default App
