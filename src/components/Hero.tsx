
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Terminal,
  CalendarCheck,
  Sparkles,
  CheckCircle2,
  Flame,
  Radio,
  Play,
  ArrowRight,
  ShieldAlert,
  Cpu,
  Server,
  Star,
  Users
} from "lucide-react";
import Typewriter from "typewriter-effect";
import ConfettiExplosion from "react-confetti-explosion";

const ATTACK_SCENARIOS = [
  {
    id: "sqli",
    name: "OWASP SQLi Attack",
    color: "#00E5FF",
    severity: "HIGH",
    cve: "CVE-2024-3094",
    payload: "UNION SELECT username, password_hash FROM auth_users--",
    defense: "WAF Rule #942100 triggered. Sanitizing parameter & isolating IP: 198.51.100.44",
    mitigatedTime: "12ms",
  },
  {
    id: "ddos",
    name: "Layer 7 HTTP Flood",
    color: "#FF2E54",
    severity: "CRITICAL",
    cve: "CVE-2023-44487",
    payload: "4.2M req/sec distributed from 1,200 botnet nodes",
    defense: "eBPF rate-limiting engaged. Synthetic traffic dropped at edge edge-proxy-04",
    mitigatedTime: "8ms",
  },
  {
    id: "ransomware",
    name: "LockBit 3.0 Ransomware",
    color: "#FFB800",
    severity: "CRITICAL",
    cve: "Zero-Day Heuristic",
    payload: "vssadmin.exe delete shadows /all /quiet",
    defense: "EDR Behavioral Trap caught shadow copy deletion. Host quarantined in 0.04s",
    mitigatedTime: "40ms",
  },
];

const Hero = () => {
  const [activeScenario, setActiveScenario] = useState(ATTACK_SCENARIOS[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[*] SIEM Gateway Initialized... Connection Established.",
    "[+] Active Sensors: 14 Nodes Online.",
    "[!] Threat Monitoring: Listening on eth0...",
  ]);
  const [isBannerHovered, setIsBannerHovered] = useState(false);
  const [defenseScore, setDefenseScore] = useState(99.98);

  const openCalendly = () => {
    window.open("https://calendly.com/cyberdefend1", "_blank");
  };

  const runSimulation = (scenario: typeof ATTACK_SCENARIOS[0]) => {
    setActiveScenario(scenario);
    setIsSimulating(true);

    setTerminalLogs(prev => [
      `[>] INCOMING: ${scenario.name} (${scenario.cve})`,
      `[!] RAW PAYLOAD: ${scenario.payload}`,
      `[*] ANALYZING THREAT SIGNATURE...`,
    ]);

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        `[✓] COUNTERMEASURE APPLIED: ${scenario.defense}`,
        `[★] THREAT NEUTRALIZED in ${scenario.mitigatedTime} | ZERO DATA LOSS`,
      ]);
      setIsSimulating(false);
      setDefenseScore(Number((99.95 + Math.random() * 0.04).toFixed(2)));
    }, 900);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center bg-darkBg text-white overflow-hidden pt-4 pb-16 cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-accent/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">

        {/* TOP STATUS BEACON & MENTORSHIP BANNER */}
        <div className="mb-12 relative" style={{ perspective: 1200 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={{
              hidden: { opacity: 0, y: -40, rotateX: 20, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotateX: 0, 
                scale: 1,
                transition: { 
                  type: "spring", damping: 18, stiffness: 90, 
                  staggerChildren: 0.15, delayChildren: 0.3 
                }
              },
              hover: { 
                y: -3, 
                scale: 1.01, 
                boxShadow: "0px 15px 40px rgba(0, 255, 159, 0.2)",
                borderColor: "rgba(0, 255, 159, 0.5)",
                transition: { duration: 0.4, ease: "easeOut" } 
              }
            }}
            className="group flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#070C18]/95 to-[#091122]/95 border-l-4 border-l-accent border border-cyan-500/20 backdrop-blur-xl shadow-[0_0_30px_rgba(0,229,255,0.1)] relative overflow-hidden transition-colors duration-500"
            onMouseEnter={() => setIsBannerHovered(true)}
            onMouseLeave={() => setIsBannerHovered(false)}
          >
            {/* Infinite Sweeping Skew Shine */}
            <motion.div 
               animate={{ x: ["-100%", "300%"] }} 
               transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
               className="absolute inset-0 w-[30%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[30deg] pointer-events-none" 
            />

            {isBannerHovered && (
              <div className="absolute top-0 right-10 z-20">
                <ConfettiExplosion particleCount={60} force={0.6} duration={2500} colors={['#00FF9F', '#00E5FF', '#9D4EDD']} />
              </div>
            )}

            <div className="flex items-center gap-4 w-full sm:w-auto relative z-10">
              <motion.div 
                variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: "spring" } } }}
                className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-accent/15 border border-accent/40 shrink-0 text-accent shadow-[0_0_15px_rgba(0,255,159,0.3)]"
              >
                <Radio className="w-5 h-5 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              </motion.div>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring" } } }}
                className="flex flex-col text-left"
              >
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white tracking-wide">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyberCyan drop-shadow-md">100% Free Resume Mentorship:</span>
                  <span className="hidden md:inline text-gray-300 font-medium">Fast-track your cybersecurity career</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold mt-0.5">
                  <Typewriter
                    options={{
                      strings: [
                        "🎯 Crack SOC Analyst & Pentester Interviews",
                        "💼 Optimize Resume for ATS & Security Recruiters",
                        "🚀 Get 1-on-1 Guidance from Manoj Kumar & Mentors",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      deleteSpeed: 20,
                    }}
                  />
                </div>
              </motion.div>
            </div>

            <motion.button
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { type: "spring" } } }}
              onClick={openCalendly}
              className="relative z-10 w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-accent to-cyberCyan text-black font-black text-xs sm:text-sm rounded-xl shadow-[0_0_20px_rgba(0,255,159,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shrink-0 group/btn"
            >
              <CalendarCheck size={18} className="group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
              <span className="tracking-wide uppercase">Book Slot Now</span>
            </motion.button>
          </motion.div>
        </div>

        {/* HERO MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* LEFT: COPY & CTAS */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Live Cohort Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>LIVE COHORTS ENROLLING // LIMITED SEATS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              {/* Line 1: Become an [ELITE] */}
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span>Become an</span>
                <span className="group relative inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-lg bg-[#070C18] border-2 border-accent text-accent font-mono text-2xl sm:text-4xl font-black shadow-[0_0_25px_rgba(0,255,159,0.3)] overflow-hidden">
                  <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <span className="tracking-widest uppercase">ELITE</span>
                </span>
              </div>

              {/* Line 2: Glowing Animated Focus Role */}
              <div className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] min-h-[1.2em] flex items-center justify-center lg:justify-start">
                <div className="relative inline-block w-full">
                  {/* Ambient Backlight Glow */}
                  <span className="absolute -inset-2 bg-gradient-to-r from-accent via-cyberCyan to-purple-600 rounded-2xl blur-2xl opacity-40 animate-pulse-slow pointer-events-none" />

                  <span className="relative font-black">
                    <Typewriter
                      options={{
                        strings: [
                          "Cyber Defense Pro",
                          "Ethical Hacker",
                          "SOC Threat Hunter",
                          "Penetration Tester",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 30,
                        wrapperClassName: "text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9F] via-[#00E5FF] to-[#FFFFFF] drop-shadow-[0_0_35px_rgba(0,229,255,0.7)] inline-block",
                        cursorClassName: "text-accent font-normal animate-pulse",
                      }}
                    />
                  </span>
                </div>
              </div>

              {/* Line 3: Through <Live Attack Labs /> */}
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-200 tracking-tight flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span>Through</span>
                <span className="font-mono text-cyan-300 font-bold bg-[#091122]/95 border border-cyan-500/40 px-3.5 py-1 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.2)] inline-flex items-center gap-2 text-xl sm:text-3xl tracking-normal">
                  <span className="text-accent">&lt;</span>
                  <span>Live Attack Labs</span>
                  <span className="text-accent">/&gt;</span>
                </span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-2"
            >
              Master offensive ethical hacking, SOC incident response, and live CVE threat mitigation through real war-room simulations with seasoned industry practitioners.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch justify-center lg:justify-start gap-1 pt-4"
            >
              <a
                href="https://cyberdefend.nrichlearning.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.02, x: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00FF9F] to-[#00E5FF] text-black font-extrabold text-base sm:rounded-l-full sm:rounded-r-none rounded-xl shadow-[0_0_30px_rgba(0,255,159,0.35)] hover:shadow-[0_0_45px_rgba(0,229,255,0.6)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10">Join a Live Batch Now</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                </motion.button>
              </a>

              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={openCalendly}
                className="w-full h-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#00FF9F] text-black font-extrabold text-base sm:rounded-r-full sm:rounded-l-none rounded-xl transition-all flex items-center justify-center gap-2 group relative overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.35)] hover:shadow-[0_0_45px_rgba(0,255,159,0.6)]"
              >
                <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <CalendarCheck size={18} className="text-black group-hover:-rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Book 1:1 Mentorship</span>
              </motion.button>
            </motion.div>

            {/* TRUST PROOF PILLS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-mono"
            >
              <div className="flex items-center gap-1.5 text-white">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="font-bold">4.9 / 5</span>
                <span className="text-gray-400">(1,200+ Alumni)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={16} className="text-accent" />
                <span>Alumni placed at TCS, HCL, Optiv & Deloitte</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: INTERACTIVE CYBER DEFENSE TERMINAL COMMAND CENTER */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative rounded-2xl bg-[#060B16] border-2 border-cyan-500/40 shadow-[0_0_60px_rgba(0,229,255,0.2)] overflow-hidden group hover:border-accent/60 hover:shadow-[0_0_70px_rgba(0,255,159,0.3)] transition-all duration-500"
            >
              {/* Animated Scanning Laser */}
              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-accent/70 shadow-[0_0_15px_rgba(0,255,159,0.9)] z-50 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"
              />

              {/* Terminal Title Bar */}
              <div className="bg-gradient-to-r from-[#091122] to-[#0D182E] px-4 py-3 border-b border-cyan-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] inline-block hover:bg-red-400 transition-colors"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)] inline-block hover:bg-yellow-400 transition-colors"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] inline-block hover:bg-green-400 transition-colors"></span>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 font-bold ml-2 flex items-center gap-2 tracking-wide">
                    <Terminal size={14} className="text-accent animate-pulse" />
                    CYBERDEFEND_SANDBOX // v2.4
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-1 rounded-md border border-accent/20">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                  <span>SCORE: {defenseScore}%</span>
                </div>
              </div>

              {/* Interactive Scenario Buttons */}
              <div className="p-3 bg-[#0A1224]/90 border-b border-white/5">
                <p className="text-[11px] font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Test Live Attack Mitigations:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {ATTACK_SCENARIOS.map((scenario) => {
                    const isSelected = activeScenario.id === scenario.id;
                    return (
                      <button
                        key={scenario.id}
                        onClick={() => runSimulation(scenario)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all text-left truncate flex items-center gap-1.5 ${isSelected
                          ? "bg-accent/20 text-accent border border-accent/50 shadow-[0_0_12px_rgba(0,255,159,0.2)]"
                          : "bg-[#060B16] text-gray-400 hover:text-white border border-white/10 hover:border-cyan-500/30"
                          }`}
                      >
                        <Play size={11} className={isSelected ? "text-accent fill-accent" : "text-gray-500"} />
                        <span className="truncate">{scenario.name.split(" ")[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Terminal Feed Screen */}
              <div className="p-4 bg-[#040711] font-mono text-xs min-h-[220px] max-h-[260px] overflow-y-auto cyber-scrollbar space-y-2 relative">
                {terminalLogs.map((log, index) => {
                  const isSuccess = log.includes("[✓]") || log.includes("[★]");
                  const isDanger = log.includes("[>]") || log.includes("[!]");
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`leading-relaxed break-words ${isSuccess
                        ? "text-accent font-semibold"
                        : isDanger
                          ? "text-cyan-400"
                          : "text-gray-400"
                        }`}
                    >
                      {log}
                    </motion.div>
                  );
                })}

                {isSimulating && (
                  <div className="flex items-center gap-2 text-yellow-400 text-xs">
                    <span className="animate-spin inline-block">⚙</span>
                    <span>Intercepting & mitigating active exploit vector...</span>
                  </div>
                )}
              </div>

              {/* Terminal Stats Footer */}
              <div className="bg-[#091122] px-4 py-2.5 border-t border-cyan-500/20 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-cyan-400" />
                  <span>LATENCY: 0.4ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server size={14} className="text-accent" />
                  <span>PACKET INSPECTION: 100% PASS</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;