import React from 'react';
import { motion } from 'framer-motion';
import { Check, Unlock, ShieldAlert, Zap, Percent, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: "Certified Ethical Hacker",
    subtitle: "(CEH Equivalent)",
    savings: "SAVE ~60%", // Focus on the percentage
    link: "/certification/certified-ethical-hacker",
    features: ["Network Scanning", "System Hacking", "Malware Analysis", "Exam Voucher"]
  },
  {
    title: "SOC Analyst L1",
    subtitle: "(Blue Team Ops)",
    savings: "SAVE ~50%",
    link: "/courses/cybersecurity-intermediate-course",
    features: ["Splunk Fundamentals", "Traffic Analysis", "Incident Response", "Live Labs"]
  },
  {
    title: "Web App Pentesting",
    subtitle: "(Bug Bounty Hunter)",
    savings: "BEST VALUE", // Special tag for popular course
    link: "/courses/cybersecurity-masterclass",
    features: ["OWASP Top 10", "Burp Suite Pro", "API Hacking", "Report Writing"],
    bestValue: true
  }
];

const PriceHack = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-darkBg/50">
      
      {/* Background Glitch Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/50 -skew-x-12 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-danger/10 border border-danger/40 text-danger text-xs font-mono mb-6 animate-pulse">
            <ShieldAlert size={14} /> DETECTED: INFLATED_MARKET_RATES
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            We <span className="text-danger line-through decoration-4 decoration-white">Hacked</span> the Pricing.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop paying for corporate overhead. We stripped away the "middleman tax" to offer elite training at 
            <span className="text-accent font-bold mx-1">Student-Friendly</span> rates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-[#050C16] border ${course.bestValue ? 'border-accent shadow-[0_0_30px_rgba(0,255,159,0.15)]' : 'border-white/10'} p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300 flex flex-col`}
            >
              {/* Savings Badge */}
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs tracking-wider flex items-center gap-1 shadow-lg font-bold ${
                course.bestValue ? 'bg-accent text-primary' : 'bg-white/10 text-white border border-white/20'
              }`}>
                {course.bestValue ? <Zap size={12} fill="currentColor" /> : <Percent size={12} />}
                {course.savings}
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-6 font-mono">{course.subtitle}</p>

              {/* The "Hack" Logic - Comparative Value */}
              <div className="mb-8 p-4 bg-primary/30 rounded-lg border border-white/5 relative overflow-hidden">
                {/* Market Row */}
                <div className="flex justify-between items-center mb-3 opacity-60">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Industry Std.</span>
                  <span className="text-sm font-mono text-danger line-through decoration-2 decoration-danger">High Cost</span>
                </div>
                
                <div className="w-full h-[1px] bg-white/10 mb-3"></div>

                {/* Our Row */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-accent uppercase tracking-widest font-bold">CyberDefend</span>
                  <span className="text-lg font-mono font-bold text-white group-hover:text-accent transition-colors flex items-center gap-2">
                    Dynamic Offer <span className="animate-pulse w-2 h-2 bg-accent rounded-full"></span>
                  </span>
                </div>

                {/* Glitch Overlay on Hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {course.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Check size={12} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link 
                to={course.link}
                className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all group/btn ${
                  course.bestValue 
                    ? 'bg-accent text-primary hover:bg-white' 
                    : 'bg-white/10 text-white hover:bg-white hover:text-primary'
                }`}
              >
                <Unlock size={18} /> CHECK LIVE PRICE
                <ArrowRight size={16} className="opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
              </Link>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PriceHack;