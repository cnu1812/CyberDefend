import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

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
            John Smith
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            March 15, 2024
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

        {/* Interest Form */}
        <div className="mt-12 p-6 bg-darkBg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Show Your Interest</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="w-full bg-accent text-primary py-2 rounded font-semibold hover:bg-opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EthicalHackingFundamentals;
