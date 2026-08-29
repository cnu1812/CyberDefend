import React, { useState } from 'react';
import { TrendingUp, Briefcase, Zap, Shield, ArrowUpRight, Award, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const MILESTONES = [
  { yr: 0, role: "Associate SOC Analyst / Trainee", cert: "CEH / Security+" },
  { yr: 2, role: "SOC Analyst L2 / Junior Pentester", cert: "BTL1 / OSCP Prep" },
  { yr: 5, role: "Senior Incident Responder / Lead Hunter", cert: "OSCP / CISSP" },
  { yr: 8, role: "Principal Security Architect", cert: "CISM / CCISO" },
  { yr: 10, role: "Director of Cybersecurity / CISO", cert: "Executive Board" }
];

const ROICalculator = () => {
  const [years, setYears] = useState(2);

  const itSalary = 3.5 + (years * 1.4);
  const cyberSalary = 7.5 + (years * 3.8);
  const multiplier = (cyberSalary / itSalary).toFixed(1);

  const currentMilestone = MILESTONES.reduce((prev, curr) => {
    return years >= curr.yr ? curr : prev;
  }, MILESTONES[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050811] relative border-t border-cyan-500/10 cyber-grid">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto bg-[#091122]/90 border border-cyan-500/20 rounded-3xl p-6 sm:p-12 relative overflow-hidden backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)]">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
            <Compass size={14} />
            <span>CAREER TRAJECTORY SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyberCyan">Salary ROI</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See how specialized cybersecurity offensive/defensive skills exponentially outpace traditional generic IT support packages.
          </p>
        </div>

        <div className="space-y-10 relative z-10">
          
          {/* Slider Container */}
          <div className="bg-[#050811] p-6 rounded-2xl border border-white/5 space-y-4">
            <div className="flex flex-wrap justify-between items-center text-xs font-mono text-gray-400">
              <span>FRESHER (0 YRS)</span>
              <span className="px-3 py-1 bg-accent/15 border border-accent/40 rounded-full text-accent font-bold text-sm">
                {years} {years === 1 ? "YEAR" : "YEARS"} EXPERIENCE
              </span>
              <span>10+ YEARS VETERAN</span>
            </div>

            <input 
              type="range" 
              min="0" max="10" step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              aria-label="Years of Experience Slider"
              className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#00FF9F] hover:accent-[#00E5FF] transition-all"
            />

            {/* Dynamic Milestone Role Pill */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs font-mono bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 gap-2">
              <span className="text-gray-400 flex items-center gap-1.5">
                <Award size={14} className="text-accent" />
                <span>EXPECTED ROLE:</span>
                <strong className="text-white">{currentMilestone.role}</strong>
              </span>
              <span className="text-cyan-400">KEY CERT: {currentMilestone.cert}</span>
            </div>
          </div>

          {/* Salary Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            
            {/* Standard Generic IT Support */}
            <div className="bg-[#070C18] p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between opacity-70 hover:opacity-100 transition-opacity">
              <div>
                <div className="flex items-center gap-2.5 mb-3 text-gray-400">
                  <Briefcase size={20} /> 
                  <span className="font-bold text-sm tracking-wide">GENERIC IT / DESK SUPPORT</span>
                </div>
                <div className="text-4xl sm:text-5xl font-mono font-bold text-gray-300 mb-2">
                  ₹{itSalary.toFixed(1)} <span className="text-xl text-gray-500">LPA</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 font-mono pt-4 border-t border-white/5">
                Linear ~5-8% annual incremental raises. High competition.
              </div>
            </div>

            {/* CyberDefend Pro */}
            <div className="bg-[#070C18] p-6 sm:p-8 rounded-2xl border-2 border-accent/60 relative overflow-hidden shadow-[0_0_40px_rgba(0,255,159,0.15)] flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-accent to-cyberCyan text-black text-[11px] font-mono font-black px-3.5 py-1 rounded-bl-xl flex items-center gap-1">
                <Zap size={12} fill="currentColor" /> {multiplier}x SALARY MULTIPLIER
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-3 text-accent">
                  <Shield size={20} /> 
                  <span className="font-bold text-sm tracking-wide">CYBERDEFEND GRADUATE</span>
                </div>
                <div className="text-5xl sm:text-6xl font-mono font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(0,255,159,0.4)]">
                  ₹{cyberSalary.toFixed(1)} <span className="text-2xl sm:text-3xl text-accent">LPA</span>
                </div>
              </div>

              <div className="text-xs text-cyan-300 font-mono pt-4 border-t border-white/10 flex items-center justify-between">
                <span>Exponential career velocity in Tier-1 SOCs</span>
                <span className="text-accent font-bold">+180% Surge</span>
              </div>
            </div>

          </div>

          <p className="text-center text-[11px] text-gray-500 font-mono">
            *Aggregated from Glassdoor, AmbitionBox & verified CyberDefend alumni placement records (2024-2025).
          </p>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;