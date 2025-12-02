import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-primary">
      
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,159,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,159,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-4xl px-6">
        
        {/* Terminal Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-[#050C16] border border-accent/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-xs font-mono text-lightGray">NEXT_BATCH: <span className="text-accent font-bold">ENROLLING NOW</span></span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none text-white"
        >
          TRAIN LIKE A <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-emerald-400 animate-pulse">HACKER</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
        >
          Forget theory. Master offensive security on live targets. 
          The only academy that drafts students directly into its own Red Team.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/courses"
            className="px-8 py-4 bg-accent text-primary font-bold text-lg rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,159,0.4)] flex items-center justify-center gap-2 group"
          >
            Start Learning <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="#curriculum"
            className="px-8 py-4 bg-transparent border border-accent/30 text-accent font-bold text-lg rounded hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
          >
            <Terminal size={20} /> View Curriculum
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default AcademyHero;