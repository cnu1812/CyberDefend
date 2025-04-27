import React from "react";
import { Facebook, Twitter, Linkedin, Github, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative bg-darkBg text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Branding & About Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center md:justify-start space-x-2"
            >
              <ShieldAlert size={32} className="text-accent" />
              <h2 className="text-2xl font-bold text-white">CyberDefend</h2>
            </motion.div>
            <p className="mt-3 text-sm text-gray-500 max-w-xs mx-auto md:mx-0">
              Empowering the next generation of cybersecurity professionals with live training and hands-on labs.
            </p>
          </div>

          {/* Quick Links (Improved Styling & Positioning) */}
          <div className="flex flex-col items-center">
  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
  <div className="grid grid-cols-2 gap-4">
    {[
      { name: "Home", path: "/" },
      { name: "Courses", path: "/courses" },
      { name: "Blog", path: "/blogs" },
      { name: "About", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ].map((link, index) => (
      <motion.a
        key={index}
        href={link.path}
        className="text-gray-400 hover:text-accent text-sm font-medium transition duration-300 relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
        whileHover={{ scale: 1.1 }}
      >
        {link.name}
      </motion.a>
    ))}
  </div>
</div>


          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              {[
                { icon: BsInstagram, href: "https://www.instagram.com/defendcyber" },
                { icon: Twitter, href: "https://x.com/defend_cyber" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/cyberdefend1" },
                { icon: Github, href: "https://github.com/cnu1812/CyberDefend" }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 hover:text-accent transition duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            © {new Date().getFullYear()} CyberDefend. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
