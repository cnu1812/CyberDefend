import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    { name: "Certification", path: "/certifications" },
  ];

  return (
    <nav className="bg-primary fixed w-full z-50 border-b-2 border-accent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-16 w-auto flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  className="h-14 w-auto"
                >
                  <rect width="500" height="500" fill="#0A192F" rx="20" ry="20" />
                  <g transform="translate(250, 110) scale(0.8)" opacity="0">
                    <animate attributeName="opacity" from="0" to="1" dur="1s" begin="4.5s" fill="freeze" />
                    <circle cx="0" cy="0" r="50" fill="#121212" stroke="#00FF9F" strokeWidth="3" />
                    <circle cx="0" cy="0" r="42" fill="transparent" stroke="#FFD100" strokeWidth="2" strokeDasharray="5,3" />
                    <path d="M0,-20 L-20,0 L0,25 L20,0 Z" fill="transparent" stroke="#00FF9F" strokeWidth="2" />
                    <rect x="-7" y="0" width="14" height="12" fill="#00FF9F" rx="2" ry="2" />
                    <rect x="-5" y="-5" width="10" height="8" fill="transparent" stroke="#00FF9F" strokeWidth="2" rx="1" ry="1" />
                    <rect x="-15" y="-12" width="15" height="5" fill="transparent" stroke="#00FF9F" strokeWidth="1.5" rx="1" ry="1" />
                    <rect x="-15" y="-5" width="10" height="5" fill="transparent" stroke="#00FF9F" strokeWidth="1.5" rx="1" ry="1" />
                    <circle cx="15" cy="5" r="7" fill="transparent" stroke="#00FF9F" strokeWidth="1.5" />
                    <path d="M12,5 L15,7 L18,5" fill="transparent" stroke="#00FF9F" strokeWidth="1.5" />
                  </g>
                  <path
                    d="M175,250 C120,320 120,180 175,250 C225,315 275,315 325,250"
                    fill="none"
                    stroke="#0A3A5C"
                    strokeWidth="30"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="600"
                    strokeDashoffset="600"
                  >
                    <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" begin="0.5s" fill="freeze" />
                  </path>
                  <path
                    d="M325,250 C375,185 375,315 325,250 C275,185 225,185 175,250"
                    fill="none"
                    stroke="#0A3A5C"
                    strokeWidth="30"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="600"
                    strokeDashoffset="600"
                  >
                    <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" begin="2s" fill="freeze" />
                  </path>
                  <path
                    d="M175,250 C120,320 120,180 175,250 C225,315 275,315 325,250"
                    fill="none"
                    stroke="#FFD100"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="600"
                    strokeDashoffset="600"
                  >
                    <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" begin="1s" fill="freeze" />
                  </path>
                  <path
                    d="M325,250 C375,185 375,315 325,250 C275,185 225,185 175,250"
                    fill="none"
                    stroke="#FFD100"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="600"
                    strokeDashoffset="600"
                  >
                    <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" begin="2.5s" fill="freeze" />
                  </path>
                  <path
                    d="M175,250 L325,250"
                    fill="none"
                    stroke="#00FF9F"
                    strokeWidth="12"
                    strokeLinecap="round"
                    opacity="0"
                  >
                    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="3.5s" fill="freeze" />
                  </path>
                  <g opacity="0">
                    <animate attributeName="opacity" from="0" to="1" dur="1s" begin="4s" fill="freeze" />
                    <text x="180" y="380" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#E0E0E0">CYBER</text>
                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E0E0E0" />
                      <stop offset="100%" stopColor="#00FF9F" />
                    </linearGradient>
                    <text x="320" y="380" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="url(#textGradient)">DEFEND</text>
                  </g>
                  <g opacity="0.3">
                    <animate attributeName="opacity" from="0" to="0.3" dur="1s" begin="5s" fill="freeze" />
                    <circle cx="120" cy="150" r="1.5" fill="#00FF9F">
                      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="380" cy="150" r="1.5" fill="#00FF9F">
                      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="350" r="1.5" fill="#00FF9F">
                      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="350" r="1.5" fill="#00FF9F">
                      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-8 flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                    <Link
                      to={item.path}
                      className="text-gray-200 hover:text-white px-3 py-1 rounded-md text-lg font-semibold transition duration-200 border-b-2 border-transparent hover:border-accent"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* LOGIN / SIGNUP BUTTON */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-accent text-primary px-4 py-2 rounded-md font-semibold shadow-md transition duration-200 hover:bg-opacity-90"
              onClick={() => window.open("https://lms-link.com", "_blank")}
            >
              Login to LMS
            </motion.button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white transition duration-200"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary border-t-2 border-accent shadow-lg"
        >
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-200 hover:text-white block px-4 py-2 rounded-md text-lg font-semibold transition duration-200 border-b-2 border-transparent hover:border-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="w-full bg-accent text-primary mt-4 px-5 py-2 rounded-md font-semibold shadow-md transition duration-200 hover:bg-opacity-90"
              onClick={() => {
                window.open("https://lms-link.com", "_blank");
                setIsOpen(false);
              }}
            >
              Login to LMS
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
