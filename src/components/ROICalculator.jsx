import React, { useState } from 'react';
import { TrendingUp, Briefcase, Zap } from 'lucide-react';

const ROICalculator = () => {
  const [years, setYears] = useState(1);

  const itSalary = 3 + (years * 1.5);
  const cyberSalary = 6 + (years * 3.5);

  return (
    <section className="py-24 px-6 bg-[#050505] relative border-y border-gray-900">
      <div className="max-w-5xl mx-auto bg-[#0A0A0A] border border-gray-800 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Ambient Green Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Calculate Your <span className="text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">ROI</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            See how a career in Cyber Security exponentially outpaces traditional IT support roles over time.
          </p>
        </div>

        <div className="space-y-16 relative z-10">
          
          {/* Slider Section */}
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <div className="flex justify-between text-sm text-gray-400 mb-6 font-mono tracking-widest">
              <span>FRESHER (0 YRS)</span>
              <span className="text-white font-bold text-lg">{years} YEARS EXPERIENCE</span>
              <span>VETERAN (10 YRS)</span>
            </div>
            <input 
              type="range" 
              min="0" max="10" step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all"
            />
          </div>

          {/* The Output Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Standard IT */}
            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 mb-4 text-gray-400">
                <Briefcase size={24} /> 
                <span className="font-bold tracking-wide">GENERIC IT SUPPORT</span>
              </div>
              <div className="text-5xl font-mono font-bold text-gray-300 mb-2">
                ₹{itSalary.toFixed(1)} <span className="text-2xl">LPA</span>
              </div>
              <div className="text-sm text-gray-500 font-mono">Standard linear growth trajectory</div>
            </div>

            {/* CyberDefend */}
            <div className="bg-green-900/10 p-8 rounded-2xl border-2 border-green-500/50 relative overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.1)] transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-black px-3 py-1 flex items-center gap-1">
                <Zap size={12} fill="currentColor" /> HIGH DEMAND
              </div>
              <div className="flex items-center gap-3 mb-4 text-green-400">
                <TrendingUp size={24} /> 
                <span className="font-bold tracking-wide">CYBER SECURITY PRO</span>
              </div>
              <div className="text-6xl font-mono font-black text-white mb-2 drop-shadow-lg">
                ₹{cyberSalary.toFixed(1)} <span className="text-3xl text-green-400">LPA</span>
              </div>
              <div className="text-sm text-green-200/70 font-mono">Exponential career trajectory</div>
            </div>

          </div>

          <p className="text-center text-xs text-gray-500 italic">
            *Based on average industry market rates for 2024.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;