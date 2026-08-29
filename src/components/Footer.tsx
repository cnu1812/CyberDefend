import React from "react";
import { Shield, Radio, Terminal, Send, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { BsGithub, BsInstagram, BsTwitter, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#040711] text-gray-400 pt-20 pb-12 border-t border-cyan-500/20 cyber-grid">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP ROW: BRANDING + NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center text-accent">
                <Shield size={22} />
              </div>
              <span className="text-2xl font-black font-mono tracking-wider text-white">
                CYBER<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyberCyan">DEFEND</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Empowering the next wave of offensive ethical hackers and Blue Team SOC defense specialists through live interactive cohorts and battle-tested cyber ranges.
            </p>
            
            {/* Live System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#091122] border border-white/10 text-xs font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>LIVE LAB RANGE: 100% OPERATIONAL // ALL REGIONS</span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#091122]/90 border border-cyan-500/20 p-6 sm:p-8 rounded-2xl backdrop-blur-xl">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Terminal size={18} className="text-accent" />
              <span>Subscribe to Cyber Threat Intel & CVE Alerts</span>
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Get weekly breakdown of zero-day exploits, SOC analysis playbooks, and upcoming cohort discounts directly in your inbox.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email (e.g. alex@defend.sec)"
                className="w-full px-4 py-2.5 bg-[#050811] border border-white/10 rounded-xl text-xs font-mono text-white placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-accent to-cyberCyan text-black font-bold text-xs rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(0,255,159,0.5)] transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Subscribe</span>
                <Send size={13} />
              </button>
            </form>
          </div>

        </div>

        {/* MIDDLE ROW: QUICK LINKS & SOCIALS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          
          <div>
            <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-4">
              Programs & Cohorts
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/courses" className="hover:text-accent transition-colors">Ethical Hacking Fundamentals</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">SOC Analyst L1 & L2</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Web App Pentesting Pro</Link></li>
              <li><Link to="/certifications" className="hover:text-accent transition-colors">CEH / OSCP Exam Prep</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-4">
              Resources & Intel
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/blogs" className="hover:text-accent transition-colors">Threat Intel Blog</Link></li>
              <li><a href="https://cyberdefend.nrichlearning.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1"><span>LMS Portal</span><ExternalLink size={11} /></a></li>
              <li><a href="https://calendly.com/cyberdefend1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Book Free Mentorship</a></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Hire Our Graduates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About CyberDefend</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers & Hiring</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
              <li><a href="https://chat.whatsapp.com/LRzT7qWKvWGKlQIoElqYbF" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Community Discord / WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-4">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {[
                { icon: BsLinkedin, href: "https://www.linkedin.com/company/cyberdefend1", label: "LinkedIn" },
                { icon: BsTwitter, href: "https://x.com/defend_cyber", label: "Twitter" },
                { icon: BsInstagram, href: "https://www.instagram.com/defendcyber", label: "Instagram" },
                { icon: BsGithub, href: "https://github.com/cnu1812/CyberDefend", label: "GitHub" },
                { icon: BsWhatsapp, href: "https://chat.whatsapp.com/LRzT7qWKvWGKlQIoElqYbF", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-[#091122] border border-white/10 hover:border-accent flex items-center justify-center text-gray-300 hover:text-accent transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-[11px] font-mono text-gray-500">
              Response SLA: &lt; 2 Hours on Official WhatsApp Channel
            </p>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} CyberDefend Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>TLS 1.3 256-BIT ENCRYPTED</span>
            <span>WCAG 2.2 AA COMPLIANT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
