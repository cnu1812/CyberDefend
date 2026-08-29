import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, Terminal, ArrowUpRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Certifications", path: "/certifications" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070C18]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2"
            : "bg-[#070C18]/70 backdrop-blur-md border-b border-white/5 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            
            {/* BRAND LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-accent/10 to-primaryLight border border-cyan-500/40 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all duration-300">
                <Shield className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white font-mono flex items-center">
                  CYBER<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyberCyan">DEFEND</span>
                </span>
                <span className="text-[9px] font-mono text-cyan-400/80 tracking-widest uppercase -mt-1 hidden sm:block">
                  ELITE DEFENSE ACADEMY
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0B1222]/80 border border-white/5 px-4 py-1.5 rounded-full shadow-inner">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10 shadow-[0_0_15px_rgba(0,255,159,0.15)] font-semibold"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://calendly.com/cyberdefend1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-mono font-medium text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-400 rounded-lg bg-cyan-500/5 hover:bg-cyan-500/15 transition-all flex items-center gap-1.5"
              >
                <Terminal size={14} /> 1:1 Mentorship
              </a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://cyberdefend.nrichlearning.com", "_blank")}
                className="relative group overflow-hidden px-4 py-2 bg-gradient-to-r from-accent to-cyberCyan text-[#050811] font-bold text-xs sm:text-sm rounded-lg shadow-[0_0_20px_rgba(0,255,159,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all flex items-center gap-1.5"
              >
                <span>Login LMS</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={22} className="text-accent" /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#070C18]/98 border-b border-cyan-500/30 px-6 pt-4 pb-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? "bg-accent/15 text-accent border border-accent/30 font-semibold"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="https://calendly.com/cyberdefend1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2.5 text-center text-sm font-mono text-cyan-400 border border-cyan-500/40 rounded-lg bg-cyan-500/10 flex items-center justify-center gap-2"
                  >
                    <Terminal size={16} /> Book 1:1 Mentorship
                  </a>
                  <button
                    onClick={() => {
                      window.open("https://cyberdefend.nrichlearning.com", "_blank");
                      setIsOpen(false);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-accent to-cyberCyan text-black font-bold text-sm rounded-lg shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Login to LMS Portal</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Top spacing offset for fixed header */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;