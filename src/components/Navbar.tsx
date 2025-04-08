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
    { name: "Certification", path: "/certifications"}
  ];

  return (
    <nav className="bg-primary fixed w-full z-50 border-b-2 border-accent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14"> 
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/">
              <motion.img               
                src="src/assets/ani.svg"
                alt="CyberDefend Logo"
                className="h-16 w-auto" 
                whileHover={{ scale: 1.1 }}
              />
            </Link>
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
