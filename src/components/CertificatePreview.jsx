import React, { useState, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Shield, Award, CheckCircle, Fingerprint, ScanLine, Terminal } from 'lucide-react';

const TIERS = {
  cyan: {
    name: "CLASSIFIED",
    color: "text-cyan-400",
    border: "border-cyan-500",
    shadow: "shadow-cyan-500/50",
    gradient: "from-cyan-900/40 to-blue-900/40",
    accent: "bg-cyan-500",
    glow: "drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
  },
  gold: {
    name: "SECRET",
    color: "text-yellow-400",
    border: "border-yellow-500",
    shadow: "shadow-yellow-500/50",
    gradient: "from-yellow-900/40 to-orange-900/40",
    accent: "bg-yellow-500",
    glow: "drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
  },
  red: {
    name: "TOP SECRET",
    color: "text-red-500",
    border: "border-red-600",
    shadow: "shadow-red-500/50",
    gradient: "from-red-900/40 to-rose-900/40",
    accent: "bg-red-600",
    glow: "drop-shadow-[0_0_15px_rgba(239,68,68,0.9)]"
  }
};

const CertificatePreview = () => {
  const [name, setName] = useState("");
  const [tier, setTier] = useState("cyan");
  const ref = useRef(null);

  const currentTheme = TIERS[tier];

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;
    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 px-6 bg-[#020202] relative overflow-hidden border-t border-gray-900">
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Input & Controls */}
        <div className="relative z-10">
          <div className={`inline-flex items-center gap-2 font-mono text-xs mb-6 px-3 py-1 rounded border bg-opacity-10 transition-colors duration-300 ${currentTheme.color} ${currentTheme.border} ${currentTheme.accent.replace('bg-', 'bg-opacity-10 ')}`}>
            <Award size={14} /> CLEARANCE_LEVEL_SELECTOR
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Claim Your <br/>
            <span className={`transition-colors duration-500 ${currentTheme.color} ${currentTheme.glow}`}>Credentials</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8">
            This isn't just paper. It's proof of survival. Choose your clearance level and visualize your future.
          </p>

          {/* Interactive Input Panel */}
          <div className="bg-[#0A0A0A] p-6 rounded-xl border border-gray-800 shadow-2xl">
            
            <label className={`block text-xs font-mono mb-2 transition-colors ${currentTheme.color}`}>ENTER_OPERATOR_NAME</label>
            <div className="relative">
                <input 
                type="text" 
                placeholder="YOUR NAME HERE"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
                className={`w-full bg-black border border-gray-700 p-4 pl-12 text-white font-mono text-xl rounded focus:outline-none focus:border-opacity-100 transition-all uppercase placeholder:text-gray-700 ${currentTheme.border}`}
                />
                <Terminal size={20} className={`absolute top-1/2 left-4 -translate-y-1/2 ${currentTheme.color}`} />
            </div>

            {/* Rarity Selector */}
            <div className="mt-6">
                <label className="block text-xs font-mono text-gray-500 mb-3">SELECT_CLEARANCE_TIER</label>
                <div className="flex gap-3">
                    {Object.keys(TIERS).map((t) => (
                        <button
                            key={t}
                            onClick={() => setTier(t)}
                            className={`flex-1 py-2 text-xs font-bold rounded border transition-all duration-300 ${
                                tier === t 
                                ? `${TIERS[t].accent} text-black border-transparent shadow-[0_0_15px_currentColor]` 
                                : 'bg-transparent border-gray-700 text-gray-500 hover:border-gray-500'
                            }`}
                        >
                            {TIERS[t].name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-green-400 font-mono">
              <CheckCircle size={14} /> BLOCKCHAIN VERIFIED ID: {Math.random().toString(36).substr(2, 8).toUpperCase()}
            </div>
          </div>
        </div>

        {/* RIGHT: The 3D Holographic Card */}
        <div className="flex justify-center perspective-1000 relative">
            
            {/* Ambient Back Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-opacity-20 blur-[100px] rounded-full transition-colors duration-500 ${currentTheme.accent.replace('bg-', 'bg-')}`}></div>

            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: "preserve-3d", transform }}
                className={`
                    relative w-full max-w-[550px] aspect-[1.6/1] rounded-xl border-2 transition-all duration-500 cursor-none group
                    ${currentTheme.border} ${currentTheme.shadow}
                `}
            >
                {/* --- CARD BACKGROUND --- */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradient} opacity-80 z-0`}></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
                
                {/* --- HOLOGRAPHIC SHEEN --- */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* --- LASER SCANNER --- */}
                <div className={`absolute top-0 left-0 w-full h-1 z-20 shadow-[0_0_20px_currentColor] animate-scan-slow ${currentTheme.color.replace('text-', 'bg-')}`}></div>

                {/* --- CONTENT LAYER --- */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 p-8 transform translate-z-20">
                
                    {/* Logo Watermark */}
                    <Shield className={`absolute opacity-10 w-64 h-64 transition-colors duration-500 ${currentTheme.color}`} />

                    <div className="relative space-y-6 w-full">
                        
                        {/* Top Metadata */}
                        <div className="flex justify-between items-center w-full border-b border-white/20 pb-2 mb-4">
                            <div className={`text-xs font-mono font-bold tracking-[0.2em] ${currentTheme.color}`}>CYBERDEFEND ACADEMY</div>
                            <Fingerprint size={24} className={`opacity-50 ${currentTheme.color}`} />
                        </div>
                        
                        {/* Main Title */}
                        <div>
                            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
                            CERTIFIED
                            </h3>
                            <h3 className={`text-xl md:text-3xl font-black uppercase tracking-[0.2em] ${currentTheme.color} ${currentTheme.glow}`}>
                            OPERATOR
                            </h3>
                        </div>
                        
                        {/* Dynamic Name Field */}
                        <div className="py-2 relative">
                            <div className="text-gray-300 text-xs uppercase tracking-widest mb-1">Awarded To</div>
                            <div className={`font-mono text-2xl md:text-4xl font-bold uppercase transition-all duration-300 ${name ? 'text-white' : 'text-gray-600'}`}>
                                {name || "______________"}
                            </div>
                            {/* Blinking Cursor if empty */}
                            {!name && <span className={`absolute bottom-3 right-1/3 w-3 h-6 animate-pulse ${currentTheme.accent.replace('bg-', 'bg-')}`}></span>}
                        </div>

                        {/* Footer ID */}
                        <div className="flex justify-between items-end pt-4 border-t border-white/10 mt-4">
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 font-mono">AUTHORIZATION</div>
                                <div className="text-xs text-white font-bold font-mono">0x{Math.floor(Date.now()).toString(16).toUpperCase()}</div>
                            </div>
                            <ScanLine size={24} className={`animate-pulse ${currentTheme.color}`} />
                        </div>
                    </div>
                </div>

                {/* --- DECORATIVE CORNERS --- */}
                <div className={`absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 ${currentTheme.border} opacity-50`}></div>
                <div className={`absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 ${currentTheme.border} opacity-50`}></div>

            </motion.div>
        </div>

      </div>

      <style>{`
        @keyframes scan-slow {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-slow {
          animation: scan-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CertificatePreview;