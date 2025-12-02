import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Trophy, Terminal, Shield, X, Activity, Globe, Wifi } from 'lucide-react';

// --- DATA GENERATOR ---
const names = ["Rahul", "Sneha", "Arjun", "Priya", "David", "Sarah", "Vikram", "Ananya", "Mike", "Elena", "Karthik", "Rohan", "Sam", "Zara", "Dev", "Nisha"];
const locations = ["India", "USA", "UK", "Dubai", "Singapore", "Canada", "Germany", "Remote"];

const eventTypes = [
  { 
    type: "enrollment",
    icon: User, 
    color: "text-cyan-400", 
    action: "initialized connection to",
    target: ["CEH Module", "Python Security Path", "SOC Labs", "Red Team Ops"]
  },
  { 
    type: "achievement",
    icon: Trophy, 
    color: "text-yellow-400", 
    action: "captured flag on",
    target: ["Box-42", "Server-X", "Firewall-01", "Database-9"]
  },
  { 
    type: "hack",
    icon: Terminal, 
    color: "text-green-400", 
    action: "executed script in",
    target: ["Sandbox Env", "Live Range", "Kali Container", "Network Sim"]
  },
  { 
    type: "job",
    icon: Shield, 
    color: "text-purple-400", 
    action: "secured role at",
    target: ["Top FinTech", "MNC Bank", "CyberSec Firm", "Startup"]
  }
];

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const LiveEvents = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [history, setHistory] = useState([]); // Stores the log
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const logEndRef = useRef(null);

  // --- GENERATOR LOGIC ---
  const generateEvent = () => {
    const person = random(names);
    const location = random(locations);
    const category = random(eventTypes);
    const target = random(category.target);
    const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const newEvent = {
      id: Date.now(),
      timestamp: time,
      text: `${person} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}. (${location})`,
      action: category.action,
      target: target,
      icon: category.icon,
      color: category.color,
    };

    return newEvent;
  };

  useEffect(() => {
    // Initial Event
    const initial = generateEvent();
    setCurrentEvent(initial);
    setHistory([initial]);
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsVisible(false); // Slide out

      setTimeout(() => {
        const evt = generateEvent();
        setCurrentEvent(evt);
        // Keep last 50 events in history
        setHistory(prev => [evt, ...prev].slice(0, 50));
        setIsVisible(true); // Slide in
      }, 600); // Animation gap

    }, Math.random() * 5000 + 4000); // Random interval 4-9s

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll log to top when new events added (optional, but we put new on top here)
  
  return (
    <>
      {/* --- 1. THE NANO NOTIFICATION PILL --- */}
      <AnimatePresence>
        {isVisible && !isLogOpen && (
          <motion.div
            key={currentEvent.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            onClick={() => setIsLogOpen(true)}
            className="fixed bottom-24 left-6 z-40 cursor-pointer group"
          >
            <div className="relative overflow-hidden bg-[#050C16]/90 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 pr-6 flex items-center gap-3 shadow-2xl hover:border-cyan-500/50 transition-colors">
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>

              {/* Icon */}
              <div className={`relative flex items-center justify-center w-6 h-6 rounded-full bg-white/5 ${currentEvent.color}`}>
                <currentEvent.icon size={12} />
                <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current"></span>
              </div>

              {/* Text - Responsive truncation */}
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <Activity size={8} className="text-green-500 animate-pulse" /> LIVE FEED
                </span>
                <div className="text-xs text-gray-200 font-medium truncate max-w-[200px] sm:max-w-none">
                  <span className="text-white font-bold">{currentEvent.text.split(' ')[0]}</span> {currentEvent.action} <span className={currentEvent.color}>{currentEvent.target}</span>
                </div>
              </div>

              {/* Tiny "Open" Hint */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Globe size={12} className="text-cyan-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 2. THE SERVER LOG MODAL (ON CLICK) --- */}
      <AnimatePresence>
        {isLogOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-4 left-4 z-50 w-[90vw] max-w-md bg-[#020408] border border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[400px]"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Wifi size={12} className="animate-pulse" /> GLOBAL_ACTIVITY_LOG
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsLogOpen(false); }}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Log Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs custom-scrollbar">
              {history.map((evt, i) => (
                <div key={evt.id} className={`flex gap-3 ${i === 0 ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity`}>
                  <div className="text-gray-600 shrink-0 select-none">[{evt.timestamp}]</div>
                  <div>
                    <span className="text-gray-300">{evt.text.split('(')[0]}</span> 
                    <span className="text-gray-500">{evt.action}</span> 
                    <span className={`ml-1 font-bold ${evt.color}`}>{evt.target}</span>
                  </div>
                </div>
              ))}
              
              <div className="text-gray-600 text-[10px] pt-2 animate-pulse">
                _ Waiting for incoming packets...
              </div>
            </div>

            {/* Footer Stats */}
            <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex justify-between text-[10px] text-gray-500 font-mono">
              <span>USERS_ONLINE: {Math.floor(Math.random() * 200) + 500}</span>
              <span>LATENCY: 24ms</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
};

export default LiveEvents;