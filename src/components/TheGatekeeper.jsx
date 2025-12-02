import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Terminal, AlertTriangle, XCircle, ChevronRight, Ban, Activity } from 'lucide-react';

const SECRET_FLAG = "ROOT_ACCESS_GRANTED";

// --- AUDIO ENGINE (Pure JS Synth) ---
const playSound = (type) => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === 'error') {
    // Glitchy Low Sawtooth
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } else if (type === 'success') {
    // High Cyber Chime
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } else if (type === 'type') {
    // Click
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
    osc.start();
    osc.stop(ctx.currentTime + 0.03);
  }
};

// --- DECRYPT COMPONENT ---
const DecryptReveal = ({ text }) => {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(prev => 
        text.split('').map((char, index) => {
          if (index < i) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      i += 1/3;
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{display}</span>;
};

const TheGatekeeper = () => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("LOCKED");
  const [attempts, setAttempts] = useState(0);
  const [lockdownTime, setLockdownTime] = useState(0);
  const [errorLog, setErrorLog] = useState("System: Waiting for input...");
  const [shake, setShake] = useState(0);

  // 1. Console Hint
  useEffect(() => {
    console.log(
      "%c [SYSTEM ALERT] %c HIDDEN FLAG DETECTED: " + SECRET_FLAG, 
      "color: #FF2E54; font-size: 20px; font-weight: bold; background: #000; padding: 10px;", 
      "color: #00FF9F; font-size: 20px; background: #000; padding: 10px; font-weight: bold;"
    );
  }, []);

  // 2. Lockdown Timer Logic
  useEffect(() => {
    let timer;
    if (lockdownTime > 0) {
      timer = setInterval(() => setLockdownTime(prev => prev - 1), 1000);
    } else if (lockdownTime === 0 && attempts >= 3) {
      setAttempts(0); // Reset attempts after lockdown
      setErrorLog("SYSTEM REBOOT: Login Enabled.");
    }
    return () => clearInterval(timer);
  }, [lockdownTime, attempts]);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (lockdownTime > 0) return; // Prevent input during lockdown

    const val = input.toUpperCase().trim();

    if (val === SECRET_FLAG) {
      playSound('success');
      setStatus("UNLOCKING");
      setErrorLog("AUTHENTICATION_SUCCESS: Decrypting vault...");
      setTimeout(() => setStatus("OPEN"), 1500);
    } else {
      playSound('error');
      setShake(prev => prev + 1);
      setInput("");
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        setLockdownTime(10); // 10s Lockdown
        setErrorLog("INTRUSION DETECTED: System Lockdown Initiated.");
      } else {
        if (val === "HINT" || val === "HELP") {
          setErrorLog("HINT: The password is hidden in the Console (F12).");
        } else {
          setErrorLog(`ACCESS_DENIED: Invalid Token. (${3 - newAttempts} attempts remaining)`);
        }
      }
    }
  };

  return (
    <section className="py-32 px-6 bg-[#030303] relative overflow-hidden" data-secret-hint={``}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">The <span className="text-cyan-400">Gatekeeper</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A real hacker knows where to look. The password isn't on the screen—it's inside the system.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            animate={{ x: shake % 2 === 0 ? [-10, 10, -10, 10, 0] : 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-lg"
          >
            <div className={`
              relative bg-black border-2 p-10 rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl
              ${lockdownTime > 0 ? 'border-red-600 shadow-[0_0_50px_rgba(255,0,0,0.2)]' : 
                status === 'OPEN' ? 'border-green-500 shadow-[0_0_50px_rgba(0,255,0,0.4)]' : 'border-gray-800'}
            `}>
              
              <AnimatePresence mode="wait">
                {status === 'OPEN' ? (
                  /* --- UNLOCKED STATE --- */
                  <motion.div 
                    key="unlocked"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 animate-bounce">
                      <Unlock size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">ACCESS GRANTED</h3>
                    <p className="text-gray-300 mb-8">You passed the test. Here is your reward.</p>
                    
                    <div className="bg-green-900/20 border-2 border-dashed border-green-500 p-6 rounded-lg relative overflow-hidden group cursor-pointer hover:bg-green-900/30 transition-colors">
                      <div className="font-mono text-3xl text-green-400 font-bold tracking-widest select-all">
                        <DecryptReveal text="HACKER_10_OFF" />
                      </div>
                      <p className="text-xs text-green-600 mt-2 font-bold uppercase">Use code at checkout</p>
                    </div>
                  </motion.div>
                ) : (
                  /* --- LOCKED STATE --- */
                  <motion.div 
                    key="locked"
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center"
                  >
                    {/* Status Icon */}
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 border transition-all duration-300 ${
                        lockdownTime > 0 ? "bg-red-900/20 border-red-600 text-red-600 animate-pulse" :
                        shake > 0 ? "bg-red-500/10 border-red-500 text-red-500" : "bg-gray-900 border-gray-700 text-gray-500"
                    }`}>
                      {lockdownTime > 0 ? <Ban size={40} /> : shake > 0 ? <XCircle size={40} /> : <Lock size={40} />}
                    </div>

                    {lockdownTime > 0 ? (
                      /* LOCKDOWN UI */
                      <div className="bg-red-900/20 border border-red-600/50 rounded-lg p-6 text-red-500 font-mono">
                        <AlertTriangle className="mx-auto mb-2" />
                        <div className="text-xl font-bold">SYSTEM LOCKDOWN</div>
                        <div className="text-sm mt-1">Too many failed attempts.</div>
                        <div className="text-4xl font-black mt-4 text-white">{lockdownTime}s</div>
                      </div>
                    ) : (
                      /* INPUT UI */
                      <form onSubmit={handleUnlock} className="relative space-y-4">
                        <div className="flex items-center gap-3 bg-[#111] border border-gray-700 rounded-lg px-5 py-4 focus-within:border-cyan-400 focus-within:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                          <Terminal size={20} className="text-gray-400" />
                          <input 
                            type="text" 
                            value={input}
                            onChange={(e) => {
                              setInput(e.target.value);
                              playSound('type'); // Typing sound
                            }}
                            placeholder="ENTER_FLAG_HERE"
                            className="bg-transparent border-none outline-none text-white w-full font-mono placeholder:text-gray-700 text-lg uppercase"
                            autoComplete="off"
                            autoFocus
                          />
                        </div>
                        
                        <button className="w-full bg-white text-black hover:bg-cyan-400 hover:text-black font-black py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-lg tracking-wide group">
                          {status === 'UNLOCKING' ? 'DECRYPTING...' : 'AUTHENTICATE'}
                          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    )}

                    {/* DYNAMIC ERROR LOG */}
                    <div className="mt-8 text-left bg-black p-4 rounded border border-gray-800 font-mono text-xs h-24 overflow-hidden flex flex-col justify-end relative">
                      <Activity size={12} className="absolute top-3 right-3 text-gray-700 animate-pulse" />
                      <div className="opacity-50 text-gray-500 mb-1">System: Security Protocol Active...</div>
                      <div className={`font-bold flex items-center gap-2 ${
                          errorLog.includes("SUCCESS") ? "text-green-400" : 
                          errorLog.includes("LOCKDOWN") ? "text-red-500 animate-pulse" : 
                          errorLog.includes("Waiting") ? "text-cyan-500" : "text-red-400"
                      }`}>
                        <span className="animate-pulse">&gt;</span> {errorLog}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheGatekeeper;