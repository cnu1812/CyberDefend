import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import RansomwareBlog from "./pages/blogs/ransomware";
import ZeroTrustBlog from './pages/blogs/zerotrust';
import CloudSecurityBlog from './pages/blogs/cloud-security';
import TheImpactOfAIBlog from './pages/blogs/ai-cybersecurity';
import SplashScreen from "./components/SplashScreen";
import ChatBotInvite from "./components/ChatBotInvite";
import Certification from "./components/Certification";
import CEHSlugPage from './pages/certification/certified-ethical-hacker';
import JobFormPage from './components/JobFormPage';
import ComptiaSecurityPlusSlugPage from './pages/certification/comptia-security-plus';
import CISSPSlugPage from './pages/certification/cissp';
import CISMSlugPage from './pages/certification/cism';
import OSCPSlugPage from './pages/certification/oscp';
import GSECSlugPage from './pages/certification/giac-security-essentials';
import CISASlugPage from './pages/certification/cisa';
import CCSPSlugPage from './pages/certification/ccsp';
import CyberOpsSlugPage from './pages/certification/cisco-cyberops-associate';
import ECSASlugPage from './pages/certification/ecsa';
import CyberSecurityBeginner from './pages/courses/cybersecurity-beginners';
import CybersecurityIntermediateCourse from './pages/courses/cybersecurity-intermediate-course';
import CybersecurityMasterclass from './pages/courses/cybersecurity-masterclass';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => setLoading(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider> {/* Wrap your entire app with HelmetProvider */}
      <Router>
        {loading ? (
          <SplashScreen onFinish={function (): void {
            throw new Error('Function not implemented.');
          } } />
        ) : (
          <div className="min-h-screen bg-primary">
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/certifications" element={<Certification />} />
              <Route path="/careers/:slug" element={<JobFormPage />} />

              {/* // blogs  */}
              <Route path="/blogs/ransomware" element={<RansomwareBlog />} />
              <Route path="/blogs/zerotrust" element={<ZeroTrustBlog />} />
              <Route path='/blogs/cloud-security' element={<CloudSecurityBlog />} />
              <Route path='/blogs/ai-cybersecurity' element={<TheImpactOfAIBlog />} />
              {/* Courses */}
              <Route path="/courses/cybersecurity-beginners" element={<CyberSecurityBeginner />} />
              <Route path='/courses/cybersecurity-intermediate-course' element={<CybersecurityIntermediateCourse/>} />
              <Route path='/courses/cybersecurity-masterclass' element={<CybersecurityMasterclass/>}/>
              {/* Certifications */}
              <Route path="/certification/certified-ethical-hacker" element={<CEHSlugPage />} />
              <Route path="/certification/comptia-security-plus" element={<ComptiaSecurityPlusSlugPage />} />
              <Route path="/certification/cissp" element={<CISSPSlugPage />} />
              <Route path="/certification/cism" element={<CISMSlugPage />} />
              <Route path="/certification/oscp" element={<OSCPSlugPage/>} />
              <Route path="/certification/giac-security-essentials" element={<GSECSlugPage/>} />
              <Route path="/certification/cisa" element={<CISASlugPage/>} />
              <Route path="/certification/ccsp" element={<CCSPSlugPage/>} />
              <Route path="/certification/cisco-cyberops-associate" element={<CyberOpsSlugPage/>} />
              <Route path="/certification/ecsa" element={<ECSASlugPage/>} />

            </Routes>

            <Footer />
            <ChatBotInvite />
          </div>
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;