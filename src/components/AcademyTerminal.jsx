import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal, Command, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AcademyTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  // --- KEYBOARD SHORTCUT (Ctrl+K) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- BOOT SEQUENCE ---
  const runBootSequence = () => {
    setIsBooting(true);
    setHistory([]);
    const bootLines = [
      { text: "INITIALIZING LEARNING ENVIRONMENT v3.0...", delay: 50 },
      { text: "ALLOCATING VIRTUAL RAM [32GB]...", delay: 150 },
      { text: "CONNECTING TO KNOWLEDGE BASE...", delay: 300 },
      { text: "MOUNTING KALI_LINUX_CONTAINER...", delay: 600 },
      { text: "ACCESS GRANTED. WELCOME, OPERATOR.", delay: 900 },
      { text: "Type 'help' to see what you can do.", delay: 1100, type: 'info' }
    ];

    let accumulatedDelay = 0;
    bootLines.forEach((line) => {
      accumulatedDelay += line.delay;
      setTimeout(() => {
        setHistory(prev => [...prev, { type: line.type || 'system', content: line.text }]);
      }, accumulatedDelay);
    });

    setTimeout(() => setIsBooting(false), accumulatedDelay + 200);
  };

  useEffect(() => {
    if (isOpen) runBootSequence();
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isBooting]);

  useEffect(() => {
    if (isOpen && !isBooting) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isBooting]);

  // --- FUN SIMULATIONS ---
  const runMatrixEffect = () => {
    const lines = 10;
    for (let i = 0; i < lines; i++) {
      setTimeout(() => {
        const randomHex = Array(40).fill(0).map(() => Math.floor(Math.random()*16).toString(16)).join(" ");
        setHistory(prev => [...prev, { type: 'matrix', content: randomHex }]);
      }, i * 100);
    }
    setTimeout(() => {
        setHistory(prev => [...prev, { type: 'success', content: "SYSTEM BYPASSED. YOU ARE IN." }]);
    }, lines * 100 + 200);
  }

  const runCTFSimulation = () => {
    const logs = [
      "[INFO] Connecting to Target Box (10.10.10.5)...",
      "[SCAN] Running Nmap... Ports 22, 80 OPEN",
      "[EXPLOIT] Found SQL Injection in /login.php",
      "[PAYLOAD] Injecting payload: ' OR 1=1 --",
      "[SUCCESS] Bypass Successful! Dumping Database...",
      "[DATA] User: admin | Pass: $up3rS3cr3t",
      "[PRIVESC] Escalating privileges to ROOT...",
      "[FLAG] CAPTURED: {CYBERDEFEND_ACADEMY_MASTER}"
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        let type = 'system';
        if (log.includes('[SUCCESS]')) type = 'success';
        if (log.includes('[EXPLOIT]')) type = 'warning';
        if (log.includes('[FLAG]')) type = 'accent';
        setHistory(prev => [...prev, { type, content: log }]);
      }, index * 500);
    });

    setTimeout(() => {
      setHistory(prev => [
        ...prev, 
        { type: 'info', content: "Want to do this for real? Check our courses." },
        { type: 'accent', content: ">> CLICK TO VIEW COURSES <<", action: () => navigate('/courses') }
      ]);
    }, logs.length * 500 + 500);
  };

  const handleCommand = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Added 'home' and 'services' to autocomplete
      const commands = ['help', 'courses', 'ctf', 'salary', 'tools', 'roadmap', 'matrix', 'home', 'services', 'clear', 'exit'];
      const match = commands.find(c => c.startsWith(input));
      if (match) setInput(match);
    } else if (e.key === 'Enter') {
      if (!input.trim()) return;
      
      const cmd = input.trim().toLowerCase();
      setCmdHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
      
      const newHistory = [...history, { type: 'user', content: `student@academy:~$ ${input}` }];

      // --- COMMANDS SWITCH ---
      switch (cmd) {
        case 'help':
          newHistory.push({ type: 'success', content: 'AVAILABLE COMMANDS:' });
          newHistory.push({ type: 'system', content: '  courses  - View training modules' });
          newHistory.push({ type: 'system', content: '  home     - Go to CyberDefend Main Hub' });
          newHistory.push({ type: 'system', content: '  services - Go to Corporate Services' });
          newHistory.push({ type: 'system', content: '  salary   - See potential earnings ($)' });
          newHistory.push({ type: 'system', content: '  tools    - List tools we teach' });
          newHistory.push({ type: 'system', content: '  ctf      - Run Hack Simulation' });
          newHistory.push({ type: 'system', content: '  matrix   - Enter the Matrix' });
          newHistory.push({ type: 'system', content: '  clear    - Clear screen' });
          break;
        
        // --- NEW NAVIGATION COMMANDS ---
        case 'home':
          newHistory.push({ type: 'accent', content: 'Initiating Uplink to Main Hub...' });
          setTimeout(() => window.location.href = 'https://cyberdefend.in', 1000);
          break;

        case 'services':
          newHistory.push({ type: 'accent', content: 'Accessing Corporate Services Node...' });
          setTimeout(() => window.location.href = 'https://services.cyberdefend.in', 1000);
          break;
        // -------------------------------

        case 'courses':
          newHistory.push({ type: 'accent', content: '1. Certified Ethical Hacker (CEH)' });
          newHistory.push({ type: 'accent', content: '2. SOC Analyst L1 (Blue Team)' });
          newHistory.push({ type: 'accent', content: '3. Web App Pentesting' });
          newHistory.push({ type: 'info', content: 'Redirecting to full catalog...' });
          setTimeout(() => navigate('/courses'), 1200);
          break;

        case 'salary':
          newHistory.push({ type: 'info', content: 'AVERAGE SALARIES (India/Global):' });
          newHistory.push({ type: 'success', content: '  • SOC Analyst: ₹6-12 LPA' });
          newHistory.push({ type: 'success', content: '  • Pentester:   ₹8-18 LPA' });
          newHistory.push({ type: 'success', content: '  • CISO:        ₹40+ LPA' });
          newHistory.push({ type: 'warning', content: '  * Skill matters more than degrees.' });
          break;

        case 'tools':
          newHistory.push({ type: 'info', content: 'WEAPONS YOU WILL MASTER:' });
          newHistory.push({ type: 'system', content: '  [+] Metasploit Framework' });
          newHistory.push({ type: 'system', content: '  [+] Burp Suite Pro' });
          newHistory.push({ type: 'system', content: '  [+] Wireshark & Nmap' });
          newHistory.push({ type: 'system', content: '  [+] Python for Security' });
          break;

        case 'roadmap':
          newHistory.push({ type: 'accent', content: 'PHASE 1: Networking & Linux Basics' });
          newHistory.push({ type: 'accent', content: 'PHASE 2: Python & Scripting' });
          newHistory.push({ type: 'accent', content: 'PHASE 3: Web/Network Exploitation' });
          newHistory.push({ type: 'accent', content: 'PHASE 4: Live Projects & Internship' });
          break;

        case 'ctf':
          setHistory(newHistory);
          setInput('');
          runCTFSimulation();
          return;

        case 'matrix':
          setHistory(newHistory);
          setInput('');
          runMatrixEffect();
          return;

        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'exit':
          setIsOpen(false);
          return;
        default:
          newHistory.push({ type: 'error', content: `Error: Command '${cmd}' not recognized. Type 'help'.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-black border-2 border-cyan-400 rounded-full text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all group flex items-center gap-3 animate-pulse"
        title="Open Student Terminal (Ctrl+K)"
      >
        <Terminal size={22} />
        
        {/* Text Hidden on Mobile */}
        <div className="hidden md:flex flex-col items-start">
          <span className="text-[10px] font-bold font-mono tracking-widest uppercase">
            Hacker Console
          </span>
          <span className="text-[10px] font-bold px-1 rounded flex items-center gap-1">
            <Command size={10} /> K
          </span>
        </div>
      </button>

      {/* TERMINAL MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-mono">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-3xl bg-[#0a0a0a] border-2 border-cyan-500/50 rounded-lg shadow-[0_0_50px_rgba(0,229,255,0.2)] overflow-hidden flex flex-col h-[60vh] md:h-[500px] relative"
            >
              {/* Window Bar */}
              <div className="bg-[#151515] px-4 py-2 flex justify-between items-center border-b border-cyan-500/30 select-none">
                <div className="flex gap-2 items-center text-cyan-400 text-xs tracking-widest font-bold">
                  <Zap size={14} className="fill-current" />
                  <span className="hidden sm:inline">ACADEMY_SHELL :: </span>STUDENT_ACCESS
                </div>
                <div className="flex gap-3">
                   <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500 transition-colors"><X size={18}/></button>
                </div>
              </div>

              {/* Console Output */}
              <div 
                className="flex-1 overflow-y-auto p-4 space-y-1 cursor-text bg-black/90"
                onClick={() => !isBooting && inputRef.current?.focus()}
                style={{ fontFamily: '"Fira Code", "JetBrains Mono", monospace' }}
              >
                <div className="relative z-10">
                    {history.map((line, i) => (
                    <div 
                        key={i} 
                        onClick={line.action}
                        className={`text-sm md:text-base tracking-wide font-medium break-words ${line.action ? 'cursor-pointer hover:underline hover:text-white' : ''} ${
                            line.type === 'error' ? 'text-red-400' : 
                            line.type === 'success' ? 'text-emerald-400' : 
                            line.type === 'warning' ? 'text-yellow-300' : 
                            line.type === 'accent' ? 'text-cyan-300 font-bold' :
                            line.type === 'info' ? 'text-fuchsia-400' :
                            line.type === 'matrix' ? 'text-green-500 text-xs' :
                            line.type === 'user' ? 'text-white mt-3 mb-1 font-bold border-b border-gray-800 pb-1' : 
                            'text-gray-300'
                        }`}
                    >
                        {line.content}
                    </div>
                    ))}
                    
                    {!isBooting && (
                    <div className="flex items-center gap-2 text-cyan-400 mt-2 text-base">
                        <span className="font-bold">student:~$</span>
                        <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 font-medium caret-cyan-400"
                        autoFocus
                        spellCheck="false"
                        autoComplete="off"
                        />
                    </div>
                    )}
                    <div ref={bottomRef} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AcademyTerminal;