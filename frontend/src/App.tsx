import { useEffect } from 'react'
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

function App() {
  useEffect(() => {
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

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

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
