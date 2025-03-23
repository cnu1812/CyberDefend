import React from "react";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const ZeroTrustBlog = () => {
  return (
    <div className="pt-16 min-h-screen bg-primary text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          The Rise of Ransomware: How to Protect Your Organization
        </motion.h1>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            John Smith
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            March 1, 2024
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7"
          alt="Ransomware"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <p className="text-gray-400 leading-relaxed">
          Ransomware has become one of the biggest threats in cybersecurity.
          Attackers are increasingly targeting businesses with sophisticated
          malware that locks critical files. Organizations must adopt best
          security practices, including...
        </p>

        <Link to="/blogs">
          <motion.button
            whileHover={{ x: -5 }}
            className="mt-6 flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            ← Back to Blogs
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default ZeroTrustBlog;
