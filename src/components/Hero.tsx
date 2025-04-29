
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Code, CalendarCheck } from "lucide-react";
import Typewriter from "typewriter-effect";
import ConfettiExplosion from "react-confetti-explosion";
import AnimationSVG from "../images/ani.svg"; 

  
const Hero = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/cyberdefend1", "_blank"); 
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-primary pt-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* ✨ Mentorship Banner */}
        <motion.div
          className="relative z-10 mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-darkBg border border-accent/40 rounded-xl shadow-md p-6 sm:flex items-center justify-between gap-6 hover:shadow-accent/20 transition duration-300 relative overflow-hidden"
          >
            {isHovered && (
              <div className="absolute top-0 right-0 z-10">
                <ConfettiExplosion />
              </div>
            )}

            <div className="text-center sm:text-left text-white font-medium text-sm md:text-base flex flex-col gap-2">
              <div>
                 <strong>Free Resume Mentorship</strong> — Personalized guidance from real cybersecurity mentors.
              </div>
              <div className="text-accent text-sm md:text-base font-semibold">
                <Typewriter
                  options={{
                    strings: [
                      "Boost your CV 🚀",
                      "Land your dream job 💼",
                      "Stand out in interviews 💬",
                      "Get noticed by recruiters 🔍",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 20,
                    //pauseFor: 2000,
                  }}
                />
              </div>
            </div>

            <button
              onClick={openCalendly}
              className="mt-4 sm:mt-0 px-6 py-2 bg-accent text-primary font-semibold rounded-md hover:bg-accent/90 transition-all flex items-center gap-2 z-10"
            >
              <CalendarCheck size={18} />
              Book Now
            </button>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master Cybersecurity with <br />
              <span className="text-accent">Live Courses</span> &<br />
              Hands-On Training
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join our expert-led batches and become a cybersecurity pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="https://cyberdefend.nrichlearning.com" target="_blank" rel="noopener noreferrer">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-accent/20 transition"
  >
    Join a Live Batch Now
  </motion.button>
</a>


              <button
                onClick={openCalendly}
                className="flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-all"
              >
                <CalendarCheck size={20} />
                Book Mentorship
              </button>
            </div>
          </motion.div>

          {/* Right Side Animation */}
          <motion.div
            className="hidden lg:flex items-center justify-center w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={AnimationSVG}
              alt="Cybersecurity Animation"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              icon: Shield,
              title: "Industry-Leading Security Training",
              description: "Learn from top professionals in cybersecurity.",
            },
            {
              icon: Lock,
              title: "Hands-On Practical Labs",
              description: "Get real-world experience with live simulations.",
            },
            {
              icon: Code,
              title: "Latest Cyber Threat Insights",
              description: "Stay updated with cutting-edge security trends.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-darkBg p-6 rounded-lg shadow-lg"
            >
              <feature.icon size={48} className="text-accent mb-4 mx-auto" />
              <h3 className="text-white font-bold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;