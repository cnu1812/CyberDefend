import React, { useEffect, useRef, useState } from 'react';
import { ShieldAlert, Terminal, Globe, Wifi, Crosshair, MapPin, Activity, X, FileText, Download, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION ---
const THREAT_SIGNATURES = [
  { name: "CVE-2023-3824 (Buffer Overflow)", type: "Exploit", severity: "CRITICAL", color: "#FF2E54" },
  { name: "Cobalt Strike Beacon (HTTP)", type: "C2", severity: "HIGH", color: "#FF2E54" },
  { name: "Win32/Emotet Payload", type: "Malware", severity: "HIGH", color: "#FFA500" }, 
  { name: "SQL Injection (UNION BASED)", type: "Web", severity: "MEDIUM", color: "#00E5FF" },
  { name: "Log4Shell Reconnaissance", type: "Scan", severity: "MEDIUM", color: "#FFFF00" },
  { name: "RDP Brute Force Attempt", type: "Auth", severity: "LOW", color: "#00FF94" },
  { name: "Data Exfiltration (DNS Tunnel)", type: "Leak", severity: "CRITICAL", color: "#FF2E54" },
];

const LOCATIONS = [
  { name: "N. Virginia", lat: 38.92, lon: -77.03, ip: "192.168.10.4" },
  { name: "Frankfurt", lat: 50.11, lon: 8.68, ip: "172.16.55.2" },
  { name: "Singapore", lat: 1.35, lon: 103.81, ip: "10.0.4.55" },
  { name: "Mumbai", lat: 19.07, lon: 72.87, ip: "10.20.1.9" },
  { name: "Tokyo", lat: 35.67, lon: 139.65, ip: "192.168.4.1" },
  { name: "Sydney", lat: -33.86, lon: 151.20, ip: "172.16.99.1" },
  { name: "London", lat: 51.50, lon: -0.12, ip: "10.5.1.12" },
];

const GlobalThreatMap = () => {
  const canvasRef = useRef(null);
  const [logs, setLogs] = useState([]); 
  const [history, setHistory] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState({ pps: 0, blocked: 14020, active: 0 });
  const [currentCoords, setCurrentCoords] = useState({ lat: 0, lon: 0, name: "SCANNING..." });

  // --- NEW: EXPORT CSV FUNCTION ---
  const handleExportCSV = () => {
    // 1. Define Headers
    const headers = ["TIMESTAMP", "SEVERITY", "SIGNATURE", "TYPE", "SOURCE IP", "SOURCE LOC", "TARGET LOC", "STATUS"];
    
    // 2. Format Data Rows
    const rows = history.map(log => [
      log.timestamp,
      log.severity,
      `"${log.signature}"`, // Wrap in quotes to handle potential commas
      log.type,
      log.sourceIP,
      `"${log.source}"`,
      `"${log.target}"`,
      "BLOCKED"
    ]);

    // 3. Combine into CSV String
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    // 4. Trigger Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `cyberdefend_siem_logs_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const globeRadius = width < 500 ? 150 : 220;
    const dotCount = 700;
    const dots = [];
    let rotation = 0;
    let projectiles = [];
    let lastSpawnTime = 0;

    for(let i = 0; i < dotCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotCount);
      const theta = Math.sqrt(dotCount * Math.PI) * phi;
      dots.push({
        x: globeRadius * Math.cos(theta) * Math.sin(phi),
        y: globeRadius * Math.sin(theta) * Math.sin(phi),
        z: globeRadius * Math.cos(phi)
      });
    }

    const project = (x, y, z) => {
      const rx = x * Math.cos(rotation) - z * Math.sin(rotation);
      const rz = z * Math.cos(rotation) + x * Math.sin(rotation);
      const scale = 400 / (400 + rz);
      return {
        x: rx * scale + width / 2,
        y: y * scale + height / 2,
        scale: scale,
        visible: rz < 0
      };
    };

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, width, height);
      rotation += 0.002;

      dots.forEach(dot => {
        const p = project(dot.x, dot.y, dot.z);
        if (p.scale > 0 && p.visible) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 229, 255, ${(p.scale - 0.5) * 0.8})`; 
          ctx.fill();
        }
      });

      if (timestamp - lastSpawnTime > (Math.random() * 1000 + 1500)) {
        lastSpawnTime = timestamp;

        const source = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
        let target = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
        while (target.name === source.name) target = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
        
        const threat = THREAT_SIGNATURES[Math.floor(Math.random() * THREAT_SIGNATURES.length)];

        setCurrentCoords({ lat: target.lat, lon: target.lon, name: target.name });

        projectiles.push({
          progress: 0,
          color: threat.color,
          startVec: latLonToVector(source.lat, source.lon, globeRadius),
          endVec: latLonToVector(target.lat, target.lon, globeRadius),
        });

        const newLog = {
          id: Date.now(),
          timestamp: new Date().toLocaleTimeString(),
          signature: threat.name,
          type: threat.type,
          source: source.name,
          target: target.name,
          sourceIP: source.ip,
          severity: threat.severity,
          color: threat.color
        };

        setLogs(prev => [newLog, ...prev].slice(0, 4));
        setHistory(prev => [newLog, ...prev].slice(0, 50)); 
        setStats(prev => ({ 
          ...prev, 
          active: prev.active + 1, 
          blocked: prev.blocked + 1,
          pps: Math.floor(Math.random() * 200) + 1200 
        }));
      }

      projectiles.forEach((proj, index) => {
        proj.progress += 0.008;
        if (proj.progress >= 1) {
          projectiles.splice(index, 1);
          setStats(prev => ({ ...prev, active: Math.max(0, prev.active - 1) }));
          return;
        }

        const p1 = project(proj.startVec.x, proj.startVec.y, proj.startVec.z);
        const p2 = project(proj.endVec.x, proj.endVec.y, proj.endVec.z);

        if (p1.visible || p2.visible) {
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          const dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
          const archHeight = dist * 0.4;
          const cpX = midX + (midX - width/2) * (archHeight/globeRadius);
          const cpY = midY + (midY - height/2) * (archHeight/globeRadius);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(cpX, cpY, p2.x, p2.y);
          
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(Math.max(0, proj.progress - 0.3), 'transparent');
          gradient.addColorStop(proj.progress, proj.color);
          gradient.addColorStop(Math.min(1, proj.progress + 0.1), 'transparent');
          
          ctx.lineWidth = 3;
          ctx.strokeStyle = gradient;
          ctx.lineCap = 'round';
          ctx.stroke();

          if(proj.progress > 0.9 && p2.visible) {
             ctx.beginPath();
             ctx.arc(p2.x, p2.y, (proj.progress - 0.9) * 100, 0, Math.PI * 2);
             ctx.strokeStyle = proj.color;
             ctx.lineWidth = 1;
             ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    const handleResize = () => {
        if(canvas) {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-[#020202] relative overflow-hidden border-t border-gray-900">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT PANEL */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-green-400 font-mono text-xs mb-3 animate-pulse">
              <Wifi size={14} /> LIVE_THREAT_FEED
            </div>
            <h2 className="text-3xl font-black text-white mb-2 leading-none">
              GLOBAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">INTEL</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0A0A0A] border border-gray-800 p-3 rounded-lg">
              <div className="text-gray-500 text-[10px] font-mono mb-1 uppercase">Attacks Blocked</div>
              <div className="text-xl font-mono font-bold text-white">{stats.blocked.toLocaleString()}</div>
            </div>
            <div className="bg-[#0A0A0A] border border-gray-800 p-3 rounded-lg">
              <div className="text-gray-500 text-[10px] font-mono mb-1 uppercase">Bandwidth</div>
              <div className="text-xl font-mono font-bold text-cyan-400">{stats.pps} Mb/s</div>
            </div>
          </div>

          <div 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0A0A0A] border border-gray-800 rounded-lg overflow-hidden h-[300px] flex flex-col cursor-pointer group hover:border-cyan-500/50 transition-colors shadow-2xl"
          >
            <div className="bg-[#111] px-4 py-2 border-b border-gray-800 flex justify-between items-center group-hover:bg-[#151515]">
              <span className="text-[10px] text-gray-400 font-mono flex items-center gap-2">
                <Terminal size={12} /> SIEM_LOGS (PREVIEW)
              </span>
              <div className="flex items-center gap-2 text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                VIEW FULL LOGS <ChevronRight size={10} />
              </div>
            </div>
            <div className="p-3 space-y-2 overflow-hidden flex-1 relative">
              <AnimatePresence>
              {logs.map((log) => (
                <motion.div 
                  key={log.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs font-mono border-l-2 pl-3 py-2 bg-white/5 rounded-r-md"
                  style={{ borderLeftColor: log.color }}
                >
                  <div className="text-white font-bold flex items-center gap-2">
                    <ShieldAlert size={12} style={{color: log.color}}/> {log.signature}
                  </div>
                  <div className="flex justify-between mt-1 opacity-70 text-[10px]">
                    <div className="flex gap-2">
                        <span>SRC: {log.source}</span>
                    </div>
                    <span style={{ color: log.color }}>{log.severity}</span>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (Globe) */}
        <div className="lg:col-span-8 relative h-[500px] flex items-center justify-center rounded-3xl border border-white/5 bg-[#050505] overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-full cursor-crosshair z-20" />
          
          <div className="absolute top-6 right-6 z-30 text-right space-y-1">
             <div className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] font-mono tracking-tighter">
                {Math.abs(currentCoords.lat).toFixed(2)}°
             </div>
             <div className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] font-mono tracking-tighter">
                {Math.abs(currentCoords.lon).toFixed(2)}°
             </div>
          </div>
          
          <div className="absolute bottom-6 left-6 z-30">
             <div className="flex items-center gap-2 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
               <span className="text-xs font-bold text-red-400">ACTIVE THREATS: <span className="text-white text-lg">{stats.active}</span></span>
             </div>
          </div>
        </div>

      </div>

      {/* --- FORENSIC LOG MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-5xl bg-[#0B0F19] border border-cyan-500/30 rounded-lg shadow-2xl flex flex-col max-h-[80vh]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-[#080B12]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded">
                    <Activity size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Forensic Event Log</h3>
                    <p className="text-xs text-gray-500 font-mono">LIVE FEED // UPLINK ESTABLISHED</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={handleExportCSV} // <--- ATTACHED FUNCTION HERE
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-xs text-gray-300 rounded hover:bg-gray-700 transition-colors"
                  >
                    <Download size={14} /> EXPORT CSV
                  </button>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Modal Body (Table) */}
              <div className="overflow-auto p-4 custom-scrollbar flex-1">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs font-mono text-gray-500 border-b border-gray-800">
                      <th className="p-3">TIMESTAMP</th>
                      <th className="p-3">SEVERITY</th>
                      <th className="p-3">SIGNATURE / CVE</th>
                      <th className="p-3">SOURCE IP</th>
                      <th className="p-3">TARGET</th>
                      <th className="p-3">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-xs">
                    {history.map((log) => (
                      <tr key={log.id} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                        <td className="p-3 text-gray-400">{log.timestamp}</td>
                        <td className="p-3">
                          <span className="px-2 py-1 rounded text-[10px] font-bold bg-opacity-20" 
                                style={{ backgroundColor: `${log.color}20`, color: log.color }}>
                            {log.severity}
                          </span>
                        </td>
                        <td className="p-3 text-gray-200">{log.signature}</td>
                        <td className="p-3 text-cyan-400/80">{log.sourceIP}</td>
                        <td className="p-3 text-gray-400">{log.target}</td>
                        <td className="p-3 text-green-500 font-bold">BLOCKED</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Modal Footer */}
              <div className="p-3 bg-[#080B12] border-t border-gray-800 text-center text-xs text-gray-600 font-mono">
                Showing recent 50 events. Authenticate for full archives.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0F172A; }
      `}</style>
    </section>
  );
};

// Helper
function latLonToVector(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return {
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    y: (radius * Math.cos(phi)),
    z: (radius * Math.sin(phi) * Math.sin(theta))
  };
}

export default GlobalThreatMap;