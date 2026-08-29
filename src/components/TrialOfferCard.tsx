import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, Shield, Lock, Zap } from "lucide-react";

const TrialOfferCard = () => {
  const [mousePosition, setMousePosition] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the background elements if desired
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;
    setMousePosition({ rotateX, rotateY });
  };

  const perks = [
    "Full Access to Sandbox Attack/Defend Labs",
    "1-on-1 Personalized Resume & CV Audit",
    "Direct Q&A with Senior SOC Mentors",
    "Trial Entry to Live Interactive Cohort Batch"
  ];

  return (
    <section className="w-full flex justify-center items-center py-24 bg-darkBg overflow-hidden relative border-y border-white/5 cyber-grid">
      {/* Background ambient lighting */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-accent/10 to-cyberCyan/10 blur-[130px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: The Offer Card */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: -150, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
            className="w-full relative"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              animate={{
                rotateY: isHovering ? mousePosition.rotateY : 0,
                rotateX: isHovering ? mousePosition.rotateX : 0,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ rotateX: 0, rotateY: 0 });
              }}
              className="relative rounded-[2rem] p-1 bg-gradient-to-br from-accent via-cyberCyan to-purple-600 shadow-[0_0_60px_rgba(0,255,159,0.15)] group transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,229,255,0.25)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Inner Card */}
              <div className="rounded-[1.8rem] bg-[#070C18]/95 p-8 sm:p-10 relative overflow-hidden backdrop-blur-2xl h-full flex flex-col justify-between">
                
                {/* Glossy top edge reflection */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Top Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold shadow-[0_0_15px_rgba(0,255,159,0.2)]">
                    <Sparkles size={14} className="animate-pulse" />
                    <span className="tracking-wider">LIMITED TIME TRIAL PASS</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-danger/10 border border-danger/30 text-danger text-xs font-mono font-bold animate-pulse flex items-center gap-1.5">
                    <Zap size={12} className="fill-danger" />
                    <span>60% DISCOUNT ACTIVE</span>
                  </div>
                </div>

                {/* Heading & Perks */}
                <div className="space-y-6 text-left mb-10">
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.1]">
                    Test Drive CyberDefend <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9F] to-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,255,159,0.3)]">
                      Premium Academy
                    </span>
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
                    Experience live cohort lectures, hands-on lab environments, and expert resume mentoring without paying full tuition upfront.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/5">
                    {perks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                        <span className="font-medium">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Box & CTA */}
                <div className="bg-gradient-to-b from-[#0D1629] to-[#091122] p-6 rounded-2xl border border-cyan-500/20 text-center space-y-6 shadow-[inset_0_0_30px_rgba(0,229,255,0.05)] relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                  {/* Background flare inside pricing box */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-[40px] rounded-full pointer-events-none" />
                  
                  <div>
                    <div className="text-xs font-mono text-cyan-400 font-semibold tracking-widest mb-2 uppercase">
                      All-Inclusive Trial Pass
                    </div>
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-gray-500 line-through text-xl font-mono font-medium mb-1 relative">
                        ₹499
                        <span className="absolute inset-0 top-1/2 h-[2px] bg-danger -rotate-12 rounded-full"></span>
                      </span>
                      <span className="text-5xl font-black text-white font-mono tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        ₹199
                      </span>
                      <span className="text-xs text-accent font-bold font-mono mb-2 tracking-wide">/ ONLY</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-2 font-mono">Instant 24/7 Access • No Recurring Fees</p>
                  </div>

                  <motion.a
                    href="https://cyberdefend.nrichlearning.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00FF9F] to-[#00E5FF] text-black font-extrabold text-sm shadow-[0_0_25px_rgba(0,255,159,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.7)] transition-all relative overflow-hidden group/btn"
                  >
                    <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <span className="flex items-center justify-center gap-2 relative z-10">
                      <span className="uppercase tracking-wide">Activate Trial Pass</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
                    </span>
                  </motion.a>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: CyberDefend Parallax Logo */}
          <motion.div
            initial={{ opacity: 0, x: 150, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center justify-center space-y-8 relative"
          >
            {/* Holographic Logo Construction */}
            <div className="relative group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border border-dashed border-cyan-500/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-20 border border-dashed border-accent/10 rounded-full"
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-cyberCyan/5 blur-[80px] rounded-full" />
              
              <div className="relative z-10 w-64 h-64 flex items-center justify-center">
                <Shield size={240} className="text-cyan-500/10 absolute drop-shadow-[0_0_30px_rgba(0,229,255,0.2)]" strokeWidth={1} />
                <Shield size={200} className="text-cyan-400 absolute drop-shadow-[0_0_50px_rgba(0,229,255,0.6)]" strokeWidth={1.5} />
                <Lock size={70} className="text-accent relative z-20 drop-shadow-[0_0_30px_rgba(0,255,159,0.8)]" strokeWidth={2} />
              </div>
            </div>

            {/* Typography Logo */}
            <div className="text-center space-y-3 relative z-10">
              <h3 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-2xl">
                CYBERDEFEND
              </h3>
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-accent" />
                <div className="text-accent font-mono tracking-[0.4em] text-sm font-bold uppercase drop-shadow-[0_0_10px_rgba(0,255,159,0.5)]">
                  Live Attack Labs
                </div>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-accent" />
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrialOfferCard;