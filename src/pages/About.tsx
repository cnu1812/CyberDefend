import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Award, Target } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";


const About = () => {
  const coFounders = [
    {
      name: "V Sreenivas",
      role: "Co-Founder and CTO",
      image: "https://private-user-images.githubusercontent.com/75531528/438939255-7ba357b8-0192-4996-9532-92aabcd1d993.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDU5NTQyMDAsIm5iZiI6MTc0NTk1MzkwMCwicGF0aCI6Ii83NTUzMTUyOC80Mzg5MzkyNTUtN2JhMzU3YjgtMDE5Mi00OTk2LTk1MzItOTJhYWJjZDFkOTkzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDI5VDE5MTE0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU0YjA3OTg5MTA2OWQ4OWRkZDQyYjBmOTBhZGY5NzM1ZjViMjExMTY3MDg1MWNkMzNjYjc0ZmY1NzZjOGUwMDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.JVODPH1xIaB0leYPKBRhxqBaNFbsA3LtIW33wSbyS-s",
      description: "Leading strategy, operations, and outreach.",
      socials: {
        linkedin: "https://www.linkedin.com/in/v-sreenivas-985088203/",
        twitter: "https://twitter.com/cnu1812",
        github: "https://github.com/cnu1812",
      },
    },
    {
      name: "Manoj Kumar",
      role: "Founder",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG6m8Glfb1IHQ/profile-displayphoto-shrink_400_400/B4DZWucRVkHkAk-/0/1742388402040?e=1749686400&v=beta&t=OcvhvcAbW3UtF-aDEMP9Bf6GGK-VwaDH_V9k6bQEHG0",
      description: "Driving vision and product innovation at CyberDefend.",
      socials: {
        linkedin: "https://www.linkedin.com/in/manoj-kumar-797977241/",
        
      },
    },
    {
      name: "G Amrutha",
      role: "Co-Founder and CIO",
      image: "https://private-user-images.githubusercontent.com/75531528/438939291-f1163e15-9530-4e0f-97be-34795f8a555e.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDU5NTQyMDAsIm5iZiI6MTc0NTk1MzkwMCwicGF0aCI6Ii83NTUzMTUyOC80Mzg5MzkyOTEtZjExNjNlMTUtOTUzMC00ZTBmLTk3YmUtMzQ3OTVmOGE1NTVlLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQyOVQxOTExNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZWQyZTA4NmY1NzUxNmZkM2YwZTE4ZjlkOTIzOTAxZDlkMjcyMWIwOTJlYjNkZDYwYTkwODg5NjM4MzZmZDJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.cIcHgHtylJkvcqBBcPFLHpmriAnA80cxqRvbqwEyjGY",
      description: "Focusing on content, community, and technical excellence.",
      socials: {
        linkedin: "https://www.linkedin.com/in/third-cofounder/",
        github: "https://github.com/thirdcofounder",
      },
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
                description: "Cybersecurity Simplified!",
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
          <h2 className="text-3xl font-bold mb-8 text-center slide-in">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coFounders.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-darkBg p-6 rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                <div className="w-full aspect-w-4 aspect-h-3 mb-4">
                <img
  src={member.image}
  alt={member.name}
  className="w-[400px] h-[500px] object-cover rounded-lg mx-auto mb-4 max-w-full"
/>

                </div>
                <h3 className="text-white font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.description}</p>
                <div className="flex gap-4">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-white hover:text-accent transition" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-white hover:text-accent transition" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-white hover:text-accent transition" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
