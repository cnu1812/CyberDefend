import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Award, Target } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Security Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "Former cybersecurity advisor with 15+ years of experience.",
    },
    {
      name: "Michael Chen",
      role: "Lead Instructor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Certified ethical hacker and security researcher.",
    },
    {
      name: "Emma Davis",
      role: "Cloud Security Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description:
        "AWS certified professional with extensive cloud security experience.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 animate-glow">
            About <span className="text-accent">CyberDefend</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto fade-in-text">
            At CyberDefend, we are dedicated to empowering individuals with the
            skills and knowledge to tackle cybersecurity challenges.
          </p>
        </motion.section>

        {/* Mission & Aim */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 animate-bounce">Our Mission & Aim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target size={40} className="text-accent mb-4" />,
                title: "Our Mission",
                description: "Providing top-notch cybersecurity education.",
              },
              {
                icon: <Shield size={40} className="text-accent mb-4" />,
                title: "Our Aim",
                description: "Creating a community of ethical hackers.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-darkBg p-6 rounded-lg shadow-lg hover:shadow-accent/50 transform hover:scale-105 transition-all duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center slide-in">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={40} className="text-accent mb-4" />,
                title: "Expert Instructors",
                description: "Learn from experienced security professionals.",
              },
              {
                icon: <Award size={40} className="text-accent mb-4" />,
                title: "Hands-on Training",
                description: "Gain practical skills with real-world labs.",
              },
              {
                icon: <Shield size={40} className="text-accent mb-4" />,
                title: "Industry Recognized",
                description: "Courses aligned with top certifications.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-darkBg p-6 rounded-lg shadow-lg hover:bg-accent/20 transition-all duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Team */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-bold mb-8 text-center slide-in">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-darkBg p-6 rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-lg mb-4 hover:scale-110 transition-transform duration-500"
                />
                <h3 className="text-white font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
