import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Shield, Zap, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: "Ethical Hacking & Penetration Testing",
    instructor: "Manoj Kumar",
    startDate: "Next Cohort: Oct 15",
    duration: "6 Weeks (Live Labs)",
    level: "Beginner to Pro",
    seatsLeft: 4,
    tags: ["OWASP", "Nmap", "Metasploit", "Burp Suite"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    slug: "ethical-hacking-fundamentals",
    badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
  },
  {
    title: "SOC Analyst L1 & Threat Hunting",
    instructor: "Manoj Kumar",
    startDate: "Next Cohort: Oct 20",
    duration: "8 Weeks (Incident Sim)",
    level: "Intermediate",
    seatsLeft: 3,
    tags: ["Splunk SIEM", "Wireshark", "MITRE ATT&CK", "EDR"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    slug: "cybersecurity-intermediate-course",
    badgeColor: "border-accent/40 text-accent bg-accent/10"
  },
  {
    title: "Advanced Web Pentesting & Bug Bounty",
    instructor: "Manoj Kumar",
    startDate: "Next Cohort: Nov 01",
    duration: "10 Weeks (Live Targets)",
    level: "Advanced Elite",
    seatsLeft: 6,
    tags: ["API Hacking", "Zero-Day CVEs", "OAuth Exploits", "IDOR"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    slug: "cybersecurity-masterclass",
    badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10"
  },
];

const CourseSlider = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden border-t border-cyan-500/10 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-mono text-xs font-bold">
              <Sparkles size={14} />
              <span>UPCOMING LIVE BATCHES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Master In-Demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyberCyan">Cohorts</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl">
              Cohort-based interactive live batches with guaranteed weekend lab access and direct mentor supervision.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous Course"
              className={`p-3 rounded-xl border border-white/10 bg-[#091122] text-white transition-all ${
                !canScrollLeft ? 'opacity-40 cursor-not-allowed' : 'hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next Course"
              className={`p-3 rounded-xl border border-white/10 bg-[#091122] text-white transition-all ${
                !canScrollRight ? 'opacity-40 cursor-not-allowed' : 'hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Courses Container */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex gap-6 pb-6 overflow-x-auto cyber-scrollbar scroll-smooth snap-x"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-w-[320px] sm:min-w-[380px] max-w-[380px] bg-[#091122]/90 rounded-2xl border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden snap-start flex flex-col justify-between group hover:shadow-[0_0_35px_rgba(0,229,255,0.15)] transition-all duration-300"
            >
              <div>
                {/* Course Header Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${course.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091122] via-[#091122]/50 to-transparent" />
                  
                  {/* Badge Pills */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border ${course.badgeColor}`}>
                      {course.level}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-danger/20 border border-danger/40 text-danger animate-pulse">
                      {course.seatsLeft} Seats Left
                    </span>
                  </div>
                </div>

                {/* Course Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {course.title}
                  </h3>

                  {/* Instructor & Timeline Info */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-1.5 bg-[#050811] p-2 rounded-lg border border-white/5">
                      <User size={14} className="text-cyan-400 shrink-0" />
                      <span className="truncate">{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#050811] p-2 rounded-lg border border-white/5">
                      <Clock size={14} className="text-accent shrink-0" />
                      <span className="truncate">{course.duration}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Footer & CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate('/courses')}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-accent to-cyberCyan text-black font-bold text-xs sm:text-sm rounded-xl shadow-[0_0_20px_rgba(0,255,159,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Enroll in Cohort</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseSlider;
