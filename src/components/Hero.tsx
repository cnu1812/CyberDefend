import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Code } from "lucide-react";
import AnimationSVG from "../images/ani.svg"; // Import the SVG file

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-primary pt-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master Cybersecurity with <br />
              <motion.span
                className="text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                Live Courses
              </motion.span>{" "}
              &<br />
              Hands-On Training
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join our expert-led batches and become a cybersecurity pro.
            </p>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-accent/20"
            >
              Join a Live Batch Now
            </motion.button>
          </motion.div>

          {/* Right-Side Always Running Animation */}
          <motion.div
            className="hidden lg:flex items-center justify-center w-full max-w-md"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={AnimationSVG} alt="Cybersecurity Animation" className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ delay: index * 0.2 }}
              className="bg-darkBg p-6 rounded-lg shadow-lg"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <feature.icon size={48} className="text-accent mb-4 mx-auto" />
              </motion.div>
              <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

