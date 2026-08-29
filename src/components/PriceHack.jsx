import React from 'react';
import { motion } from 'framer-motion';
import { Check, Unlock, ShieldAlert, Zap, Percent, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: "Certified Ethical Hacker",
    subtitle: "OFFENSIVE PENTESTING // CEH",
    savings: "SAVE 60%",
    link: "/certifications",
    features: [
      "Network Scanning & Port Enumeration",
      "System Exploitation & Privilege Escalation",
      "Active Malware Analysis & Reverse Engineering",
      "Official Exam Preparation & Voucher Guidance"
    ]
  },
  {
    title: "SOC Analyst L1",
    subtitle: "BLUE TEAM DEFENSE // SIEM OPS",
    savings: "SAVE 55%",
    link: "/courses",
    features: [
      "Splunk & ELK SIEM Threat Hunting",
      "Network Traffic Analysis & Wireshark",
      "Real-World Incident Response Playbooks",
      "Live EDR & Memory Forensics Labs"
    ]
  },
  {
    title: "Web App Pentesting",
    subtitle: "BUG BOUNTY & OWASP // PRO",
    savings: "MOST POPULAR",
    link: "/courses",
    features: [
      "Deep OWASP Top 10 Exploitation",
      "Burp Suite Professional Mastery",
      "API Hacking & Cloud Security Testing",
      "Professional Penetration Testing Reports"
    ],
    bestValue: true
  }
];

const PriceHack = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-darkBg border-t border-cyan-500/10 cyber-grid">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-danger/15 border border-danger/40 text-danger text-xs font-mono font-bold animate-pulse">
            <ShieldAlert size={14} /> DETECTED: INFLATED_MARKET_RATES
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyberCyan">Hacked</span> Traditional Pricing.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Stop paying ₹1,00,000+ for outdated legacy bootcamps. We eliminated corporate overhead to offer battle-tested training at student-first rates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-[#091122]/90 backdrop-blur-xl border ${
                course.bestValue 
                  ? 'border-accent shadow-[0_0_40px_rgba(0,255,159,0.2)] md:-translate-y-2' 
                  : 'border-white/10 hover:border-cyan-500/40'
              } p-6 sm:p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Savings Badge */}
              <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg ${
                course.bestValue 
                  ? 'bg-gradient-to-r from-accent to-cyberCyan text-black' 
                  : 'bg-white/10 text-cyan-300 border border-white/20'
              }`}>
                {course.bestValue ? <Zap size={12} fill="currentColor" /> : <Percent size={12} />}
                {course.savings}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-cyan-400/80 text-xs font-mono tracking-wider mb-6">
                  {course.subtitle}
                </p>

                {/* Comparative Value Box */}
                <div className="mb-6 p-4 bg-[#050811] rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 uppercase tracking-wider font-mono">Market Standard</span>
                    <span className="text-danger font-mono font-bold line-through">₹45,000 - ₹80,000</span>
                  </div>
                  
                  <div className="w-full h-[1px] bg-white/10" />

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-xs text-accent font-mono font-bold uppercase">CyberDefend</span>
                    <span className="text-sm font-mono font-black text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                      Dynamic Student Offer
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0 mt-0.5">
                        <Check size={11} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link 
                to={course.link}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  course.bestValue 
                    ? 'bg-gradient-to-r from-accent to-cyberCyan text-black hover:shadow-[0_0_25px_rgba(0,255,159,0.5)]' 
                    : 'bg-white/10 text-white hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-transparent'
                }`}
              >
                <Unlock size={16} />
                <span>EXPLORE SYLLABUS & ADMISSION</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PriceHack;