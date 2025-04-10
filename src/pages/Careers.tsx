import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Senior Security Instructor",
    location: "Remote",
    type: "Full-time",
    description:
      "Looking for an experienced cybersecurity professional to lead our advanced training programs.",
    requirements: [
      "Minimum 5 years of industry experience",
      "CISSP or equivalent certification",
      "Strong teaching and communication skills",
      "Experience in developing curriculum",
    ],
  },
  {
    title: "Content Developer - Cybersecurity",
    location: "Hybrid",
    type: "Full-time",
    description:
      "Create engaging and informative content for our cybersecurity courses.",
    requirements: [
      "Strong background in cybersecurity",
      "Excellent writing and editing skills",
      "Experience with e-learning platforms",
      "Knowledge of current security trends",
    ],
  },
  {
    title: "Lab Environment Specialist",
    location: "Remote",
    type: "Full-time",
    description:
      "Maintain and develop hands-on lab environments for practical training.",
    requirements: [
      "Experience with virtualization technologies",
      "Strong scripting skills",
      "Knowledge of cloud platforms",
      "Security certification preferred",
    ],
  },
];

const Careers = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Join Our <span className="text-accent">Mission</span>
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
            Help us shape the future of cybersecurity education. We're looking
            for passionate individuals who want to make a difference in the
            security industry.
          </p>
        </motion.section>

        {/* Culture Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description:
                  "We embrace new technologies and methodologies to stay ahead in cybersecurity education.",
              },
              {
                title: "Continuous Learning",
                description:
                  "We believe in constant growth and provide resources for professional development.",
              },
              {
                title: "Work-Life Balance",
                description:
                  "We value flexibility and understand the importance of personal time.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-darkBg p-6 rounded-lg shadow-lg hover:shadow-accent/30 transition duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Open Positions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Open Positions
          </h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-darkBg p-6 rounded-lg border border-gray-800 relative overflow-hidden transition-all"
              >
                {/* Floating Glow Effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-10 transition duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{position.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {position.type}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{position.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <motion.button
  whileHover={{
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.5)",
  }}
  transition={{ duration: 0.3 }}
  className="flex items-center text-accent hover:text-white transition-all py-2 px-5 border border-accent rounded-md relative overflow-hidden"
>
  Apply Now
  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
</motion.button>

              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Careers;
