import React from "react";
import { motion } from "framer-motion";
import {
  BadgePercent,
  ShieldCheck,
  Lock,
  KeyRound,
  Fingerprint,
  ServerCog,
  Target,
  Cloud,
  UserCheck,
  FileCheck2,
} from "lucide-react";
import { Link } from "react-router-dom";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH)",
    slug: "certified-ethical-hacker",
    icon: <ShieldCheck size={36} className="text-accent" />,
    issuedBy: "EC-Council",
    importance: "Equips professionals with skills to assess and improve system security by identifying vulnerabilities, essential for penetration testers and security analysts.",
    cost: "$950–$1,199",
  },
  {
    title: "CompTIA Security+",
    slug: "comptia-security-plus",
    icon: <Lock size={36} className="text-accent" />,
    issuedBy: "CompTIA",
    importance: "Provides foundational knowledge in cybersecurity, covering essential principles for network security and risk management, ideal for beginners.",
    cost: "$392",
  },
  {
    title: "Certified Information Systems Security Professional (CISSP)",
    slug: "cissp",
    icon: <KeyRound size={36} className="text-accent" />,
    issuedBy: "(ISC)²",
    importance: "Recognized globally, validates expertise in designing, implementing, and managing cybersecurity programs, suited for experienced security practitioners.",
    cost: "$749",
  },
  {
    title: "Certified Information Security Manager (CISM)",
    slug: "cism",
    icon: <Fingerprint size={36} className="text-accent" />,
    issuedBy: "ISACA",
    importance: "Focuses on management and governance of information security, aligning IT security with broader business goals, ideal for aspiring security managers.",
    cost: "$575–$760",
  },
  {
    title: "GIAC Security Essentials (GSEC)",
    slug: "giac-security-essentials",
    icon: <ServerCog size={36} className="text-accent" />,
    issuedBy: "GIAC",
    importance: "Validates knowledge of information security beyond simple terminology and concepts, including hands-on skills in IT systems.",
    cost: "$2,499",
  },
  {
    title: "Offensive Security Certified Professional (OSCP)",
    slug: "oscp",
    icon: <Target size={36} className="text-accent" />,
    issuedBy: "Offensive Security",
    importance: "Demonstrates ability to identify, exploit, and remediate vulnerabilities in various operating systems, essential for penetration testers.",
    cost: "$999",
  },
  {
    title: "Certified Information Systems Auditor (CISA)",
    slug: "cisa",
    icon: <FileCheck2 size={36} className="text-accent" />,
    issuedBy: "ISACA",
    importance: "Recognizes expertise in assessing and auditing information systems, critical for ensuring effective security controls.",
    cost: "$575–$760",
  },
  {
    title: "Certified Cloud Security Professional (CCSP)",
    slug: "ccsp",
    icon: <Cloud size={36} className="text-accent" />,
    issuedBy: "(ISC)²",
    importance: "Validates advanced technical skills and knowledge to design, manage, and secure data, applications, and infrastructure in the cloud.",
    cost: "$599",
  },
  {
    title: "Cisco Certified CyberOps Associate",
    slug: "cisco-cyberops-associate",
    icon: <UserCheck size={36} className="text-accent" />,
    issuedBy: "Cisco",
    importance: "Provides foundational knowledge and skills needed for a career in cybersecurity operations, focusing on security principles and techniques.",
    cost: "$300",
  },
  {
    title: "EC-Council Certified Security Analyst (ECSA)",
    slug: "ecsa",
    icon: <ShieldCheck size={36} className="text-accent" />,
    issuedBy: "EC-Council",
    importance: "Builds on CEH certification, focusing on advanced methodologies and tools for penetration testing and security analysis.",
    cost: "$999",
  },
];

const Certification: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-primary text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          🎓 Top Cybersecurity Certifications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          We bring you industry-leading <span className="text-accent font-semibold">cybersecurity certifications</span> at unbeatable prices. Learn from the best, earn elite credentials, and pay less than anywhere else.
        </motion.p>

        {/* Certification Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="bg-darkBg p-6 rounded-lg border border-accent hover:shadow-xl text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                {cert.icon}
                <Link
                  to={`/certification/${cert.slug}`}
                  className="text-xl font-semibold hover:text-accent transition"
                >
                  {cert.title}
                </Link>
              </div>
              <p className="text-sm text-gray-400 mb-1">
                <strong>Issued By:</strong> {cert.issuedBy}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                <strong>Importance:</strong> {cert.importance}
              </p>
              <p className="text-sm text-gray-400">
                <strong>Typical Cost:</strong> {cert.cost} —{" "}
                <span className="text-accent font-medium">We offer it for much less!</span>
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Discount Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16 bg-darkBg border border-accent px-6 py-8 rounded-lg"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BadgePercent size={28} className="text-accent" />
            <span className="text-xl font-semibold text-accent">Exclusive Discounts Just for You</span>
          </div>
          <p className="text-gray-300">
            Don’t pay the full price elsewhere. Grab globally recognized certifications at discounted prices—only here!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;
