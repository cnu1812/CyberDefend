import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import InterestForm from "../../components/InterestForm";

const EthicalHackingFundamentals = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestedCourse: "Ethical Hacking Fundamentals",
    phone: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your interest has been recorded!");
  };

  return (
    <div className="pt-16 min-h-screen bg-primary text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Ethical Hacking Fundamentals
        </motion.h1>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            Manoj Kumar
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            TBA
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            8 weeks
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1" />
            Ethical Hacking
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
          alt="Ethical Hacking Fundamentals"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          This beginner-level course covers ethical hacking fundamentals, including penetration testing, vulnerability assessment, and security best practices. Learn how to think like a hacker to defend against cyber threats.
        </p>

        <Link to="/courses">
          <motion.button
            whileHover={{ x: -5 }}
            className="mt-6 flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            ← Back to Courses
          </motion.button>
        </Link>

        <div className="bg-primary text-white">
      {/* Course details UI... */}

      {/* Interest form at the end */}
      <InterestForm />
    </div>
        
      </div>
    </div>
  );
};

export default EthicalHackingFundamentals;
