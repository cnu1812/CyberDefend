import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Users, 
  Award, 
  ShieldCheck, 
  Zap, 
  Target, 
  Cpu, 
  Binary, 
  ArrowUpRight,
  Shield,
  FileCode,
  Radio
} from "lucide-react";

const bentoFeatures = [
  {
    id: "labs",
    colSpan: "lg:col-span-8",
    title: "100% Practical Attack / Defend Cyber Range",
    subtitle: "VIRTUAL CYBER RANGE // ZERO FLUFF",
    description: "Train inside isolated live sandboxes. Practice real-world offensive penetration testing and blue team defensive hardening against live attack scripts.",
    icon: Terminal,
    accentColor: "from-cyan-500/20 via-accent/10 to-transparent",
    badge: "LIVE LABS",
    highlightText: "Simulate 50+ OWASP & MITRE ATT&CK Matrix Scenarios",
    interactiveGraphic: (
      <div className="mt-4 p-3.5 bg-[#050811] rounded-xl border border-cyan-500/20 font-mono text-xs text-gray-300 space-y-1.5 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] text-cyan-400 border-b border-white/5 pb-1">
          <span className="flex items-center gap-1.5"><Radio size={12} className="text-accent animate-pulse" /> TARGET: 10.0.8.22 [ROOT ACCESS LAB]</span>
          <span className="text-accent">STATUS: VULNERABLE</span>
        </div>
        <div className="text-gray-400">$ nmap -sV -sC -Pn 10.0.8.22</div>
        <div className="text-accent/90">&gt; PORT 80/tcp OPEN (Apache 2.4.49 - Path Traversal RCE)</div>
        <div className="text-cyan-300">&gt; Exploit staged: Spawning reverse shell payload to listener... [OK]</div>
      </div>
    )
  },
  {
    id: "mentorship",
    colSpan: "lg:col-span-4",
    title: "1-on-1 Career Mentorship",
    subtitle: "DIRECT ACCESS // TOP SOC LEADS",
    description: "Personalized mock interviews, resume tailoring for ATS, and referral networks across top Tier-1 security consultancies.",
    icon: Users,
    accentColor: "from-purple-500/20 via-cyan-500/10 to-transparent",
    badge: "1:1 MENTORSHIP",
    highlightText: "Placed at TCS, HCL, Optiv, Deloitte",
    interactiveGraphic: (
      <div className="mt-4 p-3 bg-[#050811] rounded-xl border border-purple-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center font-bold text-purple-300 text-xs">
            MK
          </div>
          <div>
            <div className="text-xs font-bold text-white">Manoj Kumar</div>
            <div className="text-[10px] text-gray-400">Chief Mentor & Lead Architect</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono font-bold text-accent">+180%</div>
          <div className="text-[9px] text-gray-400">Avg Hike</div>
        </div>
      </div>
    )
  },
  {
    id: "cve",
    colSpan: "lg:col-span-4",
    title: "Real-World CVE Analysis",
    subtitle: "ZERO-DAY & MALWARE FORENSICS",
    description: "Reverse engineer real modern malware families (Emotet, LockBit) and dissect critical zero-day vulnerabilities.",
    icon: ShieldCheck,
    accentColor: "from-accent/20 to-transparent",
    badge: "CVE RESEARCH",
    highlightText: "Log4Shell, Spring4Shell, OpenSSH RCE",
    interactiveGraphic: (
      <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
        {["CVE-2024-3094", "CVE-2023-3824", "OWASP Top 10", "Mitre ATT&CK"].map((cve, i) => (
          <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-cyan-300">
            {cve}
          </span>
        ))}
      </div>
    )
  },
  {
    id: "certifications",
    colSpan: "lg:col-span-4",
    title: "Industry Aligned Certifications",
    subtitle: "GLOBAL RECOGNITION",
    description: "Curriculum designed to effortlessly clear CEH, CompTIA Security+, OSCP, and Blue Team SOC L1 certification exams.",
    icon: Award,
    accentColor: "from-yellow-500/20 to-transparent",
    badge: "GLOBAL CERTS",
    highlightText: "98.4% First-Attempt Pass Rate",
    interactiveGraphic: (
      <div className="mt-4 p-3 bg-[#050811] rounded-xl border border-yellow-500/20 flex items-center justify-around text-center">
        <div>
          <div className="text-lg font-mono font-bold text-white">98.4%</div>
          <div className="text-[10px] text-gray-400">Pass Rate</div>
        </div>
        <div className="w-[1px] h-8 bg-white/10" />
        <div>
          <div className="text-lg font-mono font-bold text-accent">1,200+</div>
          <div className="text-[10px] text-gray-400">Certified</div>
        </div>
      </div>
    )
  },
  {
    id: "ai-threats",
    colSpan: "lg:col-span-4",
    title: "Next-Gen AI Threat Defense",
    subtitle: "AUTOMATED SOC & SIEM",
    description: "Master modern AI threat defense, automated incident response playbooks, Splunk SIEM querying, and eBPF kernel telemetry.",
    icon: Cpu,
    accentColor: "from-cyan-500/20 to-transparent",
    badge: "AI & SIEM",
    highlightText: "Splunk + ELK + Sentinel Stacks",
    interactiveGraphic: (
      <div className="mt-4 flex items-center justify-between p-3 bg-[#050811] rounded-xl border border-cyan-500/20 text-xs font-mono">
        <div className="flex items-center gap-2 text-cyan-300">
          <Zap size={14} className="text-accent" />
          <span>Auto-Triage Playbook</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-[10px] font-bold">READY</span>
      </div>
    )
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden border-t border-cyan-500/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-semibold"
          >
            <Shield size={14} />
            <span>INDUSTRY-GRADE TRAINING ADVANTAGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Why Top Engineers Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyberCyan to-white">
              CyberDefend Academy
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            We bridge the gap between boring classroom theory and real battlefield operations with hands-on live labs and dedicated 1-on-1 mentorship.
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${feat.colSpan} relative rounded-2xl bg-[#091122]/90 border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.15)] transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feat.accentColor} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Top pill & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                      {feat.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Interactive Graphic / Preview */}
                <div>
                  {feat.interactiveGraphic}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
