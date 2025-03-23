import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Footer from "./components/Footer";
import RansomwareBlog from "./pages/blogs/ransomware";
import ZeroTrustBlog from './pages/blogs/zerotrust';
import EthicalHackingFundamentals from './pages/courses/ethical-hacking-fundamentals';
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => setLoading(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <Router>
      {loading ? (
        <SplashScreen onFinish={function (): void {
          throw new Error('Function not implemented.');
        } } />
      ) : (
        <div className="min-h-screen bg-primary">
          
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blogs/ransomware" element={<RansomwareBlog />} />
            <Route path="/blogs/zerotrust" element={<ZeroTrustBlog />} />
            <Route path="/courses/ethical-hacking-fundamentals" element={<EthicalHackingFundamentals />} />
          </Routes>
         
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
