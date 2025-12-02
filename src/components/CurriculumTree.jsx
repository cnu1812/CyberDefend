import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, Lock, Network, Sword, Database, Wifi, Users, ChevronDown, CheckCircle, Play, Hexagon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const modules = [
  {
    level: "LVL 01",
    title: "Linux & Networking Core",
    desc: "You can't hack what you don't understand. Master the CLI, bash scripting, and TCP/IP stack.",
    icon: Terminal,
    tools: ["Bash", "Wireshark", "Linux CLI"],
    topics: ["File System Hierarchy", "Permissions (chmod/chown)", "OSI Model Deep Dive", "Analyzing Packets"],
    color: "text-cyan-400",
    border: "border-cyan-400",
    shadow: "shadow-cyan-500/50",
    bg: "bg-cyan-500"
  },
  {
    level: "LVL 02",
    title: "Python for Security",
    desc: "Stop using other people's tools. Write your own malware, port scanners, and automation scripts.",
    icon: Cpu,
    tools: ["Python", "Socket Lib", "Requests"],
    topics: ["Writing Keyloggers", "Brute-force Scripts", "Automating Nmap", "Socket Programming"],
    color: "text-green-400",
    border: "border-green-400",
    shadow: "shadow-green-500/50",
    bg: "bg-green-500"
  },
  {
    level: "LVL 03",
    title: "Web Exploitation",
    desc: "Break into modern applications. SQL Injection, XSS, CSRF, and bypassing WAFs.",
    icon: Network,
    tools: ["Burp Suite", "OWASP ZAP", "SQLMap"],
    topics: ["OWASP Top 10", "Intercepting Requests", "Blind SQLi", "Cross-Site Scripting (XSS)"],
    color: "text-yellow-400",
    border: "border-yellow-400",
    shadow: "shadow-yellow-500/50",
    bg: "bg-yellow-500"
  },
  {
    level: "LVL 04",
    title: "Network Penetration",
    desc: "Scanning, enumeration, and exploitation of enterprise networks and Active Directory.",
    icon: Wifi,
    tools: ["Nmap", "Metasploit", "Responder"],
    topics: ["Active Directory Enum", "Pass-the-Hash", "Kerberoasting", "Pivoting Networks"],
    color: "text-blue-400",
    border: "border-blue-400",
    shadow: "shadow-blue-500/50",
    bg: "bg-blue-500"
  },
  {
    level: "LVL 05",
    title: "Privilege Escalation",
    desc: "You have a shell, now what? Learn Linux and Windows privilege escalation techniques to get Root/System.",
    icon: Lock,
    tools: ["LinPEAS", "WinPEAS", "Kernel Exploits"],
    topics: ["SUID Binaries", "Windows Token Manipulation", "Cron Job Abuse", "Kernel Exploits"],
    color: "text-red-400",
    border: "border-red-400",
    shadow: "shadow-red-500/50",
    bg: "bg-red-500"
  },
  {
    level: "LVL 06",
    title: "Cloud Security (AWS/Azure)",
    desc: "The future is cloud. Learn to audit S3 buckets, IAM roles, and cloud-native attack vectors.",
    icon: Database,
    tools: ["Pacu", "ScoutSuite", "AWS CLI"],
    topics: ["S3 Bucket Enumeration", "IAM Privilege Escalation", "Lambda Injection", "CloudTrails Evasion"],
    color: "text-orange-400",
    border: "border-orange-400",
    shadow: "shadow-orange-500/50",
    bg: "bg-orange-500"
  },
  {
    level: "LVL 07",
    title: "Red Team Ops",
    desc: "The endgame. Advanced evasion, C2 (Command & Control), and simulating APT groups.",
    icon: Sword,
    tools: ["Cobalt Strike", "Mimikatz", "Covenant"],
    topics: ["Antivirus Evasion", "Custom C2 Profiles", "Phishing Campaigns", "Data Exfiltration"],
    color: "text-purple-500",
    border: "border-purple-500",
    shadow: "shadow-purple-500/50",
    bg: "bg-purple-500"
  },
  {
    level: "LVL 08",
    title: "Career & Interview Prep",
    desc: "Mock interviews, resume building, and salary negotiation strategies for SOC and Pentest roles.",
    icon: Shield,
    tools: ["Resume", "LinkedIn", "Mock Interviews"],
    topics: ["HR Round Hacks", "Technical Interview Q&A", "Salary Negotiation", "Building a Brand"],
    color: "text-white",
    border: "border-white",
    shadow: "shadow-white/50",
    bg: "bg-white"
  }
];

const CurriculumTree = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(null);
  
  // --- LIVE USERS SIMULATION ---
  const [activeUsers, setActiveUsers] = useState(modules.map(() => Math.floor(Math.random() * 50) + 20));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev.map(count => {
        const change = Math.floor(Math.random() * 5) - 2; 
        return Math.max(10, count + change);
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-gray-900 border border-gray-700 text-xs font-mono text-gray-400 mb-4"
          >
            SYSTEM_UPGRADE_PATH_V2.0
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">SKILL TREE</span>
          </h2>
          <p className="text-gray-400 text-lg">Click to Decrypt Syllabus.</p>
        </div>

        {/* The Tree Container */}
        <div className="relative">
          
          {/* Vertical Connecting Spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-900 -translate-x-1/2 md:transform-none">
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent animate-pulse-slow"></div>
          </div>

          <div className="space-y-12 md:space-y-20">
            {modules.map((mod, index) => {
              const isActive = activeModule === index;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* --- HORIZONTAL CONNECTOR (Desktop Only) --- */}
                  <div className={`hidden md:block absolute top-1/2 left-1/2 w-[50%] h-[2px] -translate-y-1/2 z-0 transition-all duration-500 ${isActive ? mod.bg : 'bg-transparent'}`}
                       style={{ 
                         width: isActive ? '50%' : '0%', 
                         left: isEven ? 'auto' : '50%',
                         right: isEven ? '50%' : 'auto',
                         opacity: isActive ? 1 : 0
                       }}
                  ></div>

                  {/* 1. The Content Card */}
                  <motion.div 
                    layout
                    onClick={() => toggleModule(index)}
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }} // Slide in from sides
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className="flex-1 w-full pl-12 md:pl-0 cursor-pointer relative z-10"
                  >
                    <div className={`
                      relative bg-[#0A0A0A] border p-6 md:p-8 rounded-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2
                      ${isActive ? `border-${mod.color.split('-')[1]}-500 shadow-[0_0_30px_rgba(0,0,0,0.6)] ring-1 ring-${mod.color.split('-')[1]}-500` : 'border-gray-800 hover:border-gray-600'}
                    `}>
                      
                      {/* Active Glow Background */}
                      {isActive && (
                        <div className={`absolute inset-0 opacity-5 ${mod.bg}`}></div>
                      )}

                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-current transition-colors ${mod.color}`}>
                             <mod.icon size={24} />
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>{mod.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                               <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gray-900 border ${mod.border} ${mod.color}`}>
                                 {mod.level}
                               </span>
                               <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                 {activeUsers[index]} Live
                               </span>
                            </div>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`text-gray-500 transition-transform duration-300 ${isActive ? 'rotate-180 text-white' : ''}`} 
                          size={20} 
                        />
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed relative z-10 pl-14">
                        {mod.desc}
                      </p>

                      {/* --- EXPANDABLE CONTENT --- */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-14"
                          >
                            <div className="pt-4 border-t border-gray-800 mt-4">
                              <h4 className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest">Syllabus Decrypted:</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {mod.topics.map((topic, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-white transition-colors">
                                    <CheckCircle size={14} className={mod.color} /> {topic}
                                  </div>
                                ))}
                              </div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation(); 
                                  navigate('/courses');
                                }}
                                className={`w-full py-3 rounded-lg font-bold text-sm bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 hover:${mod.border} flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                              >
                                <Play size={14} fill="currentColor" className={mod.color} /> ACCESS MODULE
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Tools Tags (Always Visible) */}
                      {!isActive && (
                        <div className="flex flex-wrap gap-2 mt-4 pl-14">
                          {mod.tools.map((tool, i) => (
                            <span key={i} className="text-[10px] uppercase font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800 group-hover:border-gray-600 transition-colors">
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </motion.div>

                  {/* 2. The Center HEX Node (Connector) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    onClick={() => toggleModule(index)}
                    className={`
                      absolute left-4 md:left-1/2 -translate-x-1/2 z-20 cursor-pointer transition-all duration-500
                      ${isActive ? 'scale-125' : 'hover:scale-110'}
                    `}
                  >
                    <div className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#050505] rounded-full border-2 ${isActive ? mod.border : 'border-gray-700'}`}>
                       <Hexagon size={isActive ? 24 : 20} className={`${isActive ? mod.color : 'text-gray-600'} transition-colors duration-300`} fill={isActive ? "currentColor" : "none"} fillOpacity={0.2} />
                       
                       {/* Spinning Ring when active */}
                       {isActive && (
                         <div className={`absolute inset-0 rounded-full border-2 border-dashed ${mod.border} animate-spin-slow opacity-50`}></div>
                       )}
                    </div>
                  </motion.div>

                  {/* 3. Empty Spacer for Layout Balance */}
                  <div className="flex-1 hidden md:block"></div>

                </div>
              );
            })}
          </div>

          {/* Final Node */}
          <div className="flex justify-center mt-24 relative z-10">
             <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               onClick={() => navigate('/courses')}
               className="bg-cyan-500 text-black font-bold px-10 py-4 rounded-full shadow-[0_0_50px_rgba(0,229,255,0.4)] animate-bounce flex items-center gap-3 hover:scale-110 transition-transform cursor-pointer border-4 border-[#050505]"
             >
               <Shield size={24} fill="currentColor" /> 
               <span>YOU ARE READY FOR OPS</span>
             </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CurriculumTree;