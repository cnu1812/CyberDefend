import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const positions = [
  {
    title: "Senior Security Instructor",
    slug: "senior-security-instructor",
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
    slug: "content-developer-cybersecurity",
    location: "Remote",
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
    slug: "lab-environment-specialist",
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
  {
    title: "HR Coordinator",
    slug: "hr-coordinator",
    location: "Remote",
    type: "Full-time",
    description:
      "Support recruitment, onboarding, and employee engagement initiatives.",
    requirements: [
      "1–3 years of experience in HR or related field",
      "Excellent interpersonal and communication skills",
      "Familiarity with HR tools and systems",
      "Strong organizational abilities",
    ],
  },
  {
    title: "Marketing Intern",
    slug: "marketing-intern",
    location: "Remote",
    type: "Internship",
    description:
      "Assist the marketing team with campaigns, content creation, and analytics.",
    requirements: [
      "Strong interest in digital marketing",
      "Good communication and writing skills",
      "Familiarity with social media platforms",
      "Ability to work independently and as part of a team",
    ],
  },
  {
    title: "Digital Marketing Intern",
    slug: "digital-marketing-intern",
    location: "Remote",
    type: "Internship",
    description:
      "Work closely with the digital marketing team to support SEO, paid ads, and email marketing efforts.",
    requirements: [
      "Basic understanding of digital marketing concepts",
      "Experience with tools like Google Analytics or HubSpot is a plus",
      "Attention to detail and analytical thinking",
      "Willingness to learn and grow",
    ],
  },
  {
    title: "Developer Relations (DevRel) Specialist",
    slug: "developer-relations-specialist",
    location: "Remote",
    type: "Full-time",
    description:
      "Engage with developer communities and advocate for our technology through content, talks, and support.",
    requirements: [
      "Experience in software development or technical advocacy",
      "Strong communication and public speaking skills",
      "Ability to create technical content (blogs, demos, tutorials)",
      "Community engagement experience preferred",
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
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-darkBg p-6 rounded-lg border border-gray-800 relative overflow-hidden transition-all"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-10 transition duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {position.title}
                  </h3>
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

                {/* Apply Now Button */}
                <Link to={`/careers/${position.slug}`} className="inline-block">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-accent hover:text-white border border-accent px-4 py-2 rounded-md"
                  >
                    Apply Now
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Careers;
