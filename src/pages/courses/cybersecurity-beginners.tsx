import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import InterestForm from "../../components/InterestForm";

const CyberSecurityBeginner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestedCourse: "Ethical Hacking Fundamentals",
    phone: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your interest has been recorded!");
  };

  const courseName = "CyberSecurity Beginners Course";
  const description =
    "Beginner-friendly course covering ethical hacking fundamentals, penetration testing, vulnerability assessment, and cybersecurity best practices. Learn to defend against cyber threats by understanding hacker techniques.";
  const keywords = [
    "ethical hacking",
    "cybersecurity",
    "penetration testing",
    "vulnerability assessment",
    "cyber threats",
    "security best practices",
    "online course",
    "beginner",
    "cyber security basics",
  ];

  return (
    <div className="pt-16 min-h-screen bg-primary text-white">
      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>{courseName} | Learn Ethical Hacking</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        {/* Add more SEO-related meta tags as needed */}
        <link rel="canonical" href={window.location.href} /> {/* Dynamic canonical URL */}
        <meta property="og:title" content={`${courseName} | Learn Ethical Hacking`} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content="URL_TO_YOUR_COURSE_IMAGE" /> */}
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          {courseName}
        </motion.h1>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center">
            <User size={14} className="mr-1" aria-label="Instructor" />
            Manoj Kumar
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" aria-label="Schedule" />
            TBA
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" aria-label="Duration" />
            6–8 weeks
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1" aria-label="Category" />
            Ethical Hacking
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
          alt={courseName}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <p className="text-gray-400 leading-relaxed mb-4">
          {description}
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Course Curriculum</h2>
          <p className="text-gray-400 mb-2">
            Duration: 6–8 weeks<br />
            Format: Online (Live + Recorded)<br />
            Level: Beginner<br />
            Prerequisites: None<br />
            Outcome: Understand cybersecurity basics, threats, best practices, and start practical skills in ethical hacking & defense.
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Module 1: Introduction to Cybersecurity</h3>
            <p className="text-gray-400 mb-2">
              Week 1<br />
              <ul className="list-disc ml-6">
                <li>What is Cybersecurity?</li>
                <li>Importance in the Digital Age</li>
                <li>Real-World Cyber Attacks (Case Studies)</li>
                <li>CIA Triad: Confidentiality, Integrity, Availability</li>
                <li>Careers in Cybersecurity & Roadmap</li>
                <li>Mini Project: Create a cyber attack timeline of real-world breaches.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Module 2: Threats, Vulnerabilities & Attacks</h3>
            <p className="text-gray-400 mb-2">
              Week 2<br />
              <ul className="list-disc ml-6">
                <li>Types of Cyber Threats: Malware, Phishing, Ransomware, DDoS</li>
                <li>Vulnerability vs Exploit</li>
                <li>Insider Threats vs External Threats</li>
                <li>Common Attack Vectors</li>
                <li>OWASP Top 10 (Intro)</li>
                <li>Hands-On: Simulate a phishing email attack scenario using GoPhish (demo only).</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Module 3: System & Network Fundamentals</h3>
            <p className="text-gray-400 mb-2">
              Week 3<br />
              <ul className="list-disc ml-6">
                <li>Basics of Operating Systems (Linux & Windows)</li>
                <li>Introduction to Networking</li>
                <li>TCP/IP, Ports, Protocols</li>
                <li>Firewalls, Routers, Switches (Simplified)</li>
                <li>Packet Sniffing with Wireshark</li>
                <li>Lab Task: Analyze network packets using Wireshark.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Module 4: Cybersecurity Tools & Techniques</h3>
            <p className="text-gray-400 mb-2">
              Week 4<br />
              <ul className="list-disc ml-6">
                <li>Password Cracking Basics</li>
                <li>Hashing, Encryption (Intro to AES, SHA-256)</li>
                <li>Antivirus, EDR, and SIEM</li>
                <li>Penetration Testing Basics</li>
                <li>Reconnaissance & Footprinting (Nmap)</li>
                <li>Tools Covered: Nmap, Wireshark, Hashcat, VirusTotal</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Module 5: Web & Application Security Basics</h3>
            <p className="text-gray-400 mb-2">
              Week 5<br />
              <ul className="list-disc ml-6">
                <li>Web Application Architecture</li>
                <li>Common Web Attacks: SQL Injection, XSS (Cross-site Scripting), CSRF</li>
                <li>Burp Suite (Introduction)</li>
                <li>Secure Coding Practices (OWASP)</li>
                <li>Lab Task: Exploit a vulnerable web app (Damn Vulnerable Web App or PortSwigger Labs)</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Module 6: Defensive Security & Best Practices</h3>
            <p className="text-gray-400 mb-2">
              Week 6<br />
              <ul className="list-disc ml-6">
                <li>Firewalls & IDS/IPS</li>
                <li>Endpoint Security</li>
                <li>Security Policies & Controls</li>
                <li>Incident Response Basics</li>
                <li>Cyber Hygiene for Individuals & Organizations</li>
                <li>Exercise: Draft a basic security policy for a fictional company.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Module 7: Introduction to Ethical Hacking</h3>
            <p className="text-gray-400 mb-2">
              Week 7<br />
              <ul className="list-disc ml-6">
                <li>Phases of Ethical Hacking</li>
                <li>Recon, Scanning, Gaining Access, Maintaining Access, Clearing Tracks</li>
                <li>Kali Linux Basics</li>
                <li>Metasploit Framework (Intro)</li>
                <li>Lab: Run basic Metasploit commands on vulnerable VMs (in isolated lab).</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Module 8: Careers & Certification Prep</h3>
            <p className="text-gray-400 mb-2">
              Week 8<br />
              <ul className="list-disc ml-6">
                <li>Resume & LinkedIn for Cybersecurity</li>
                <li>Portfolio Building Tips</li>
                <li>Overview of Certifications: CompTIA Security+, CEH, OSCP</li>
                <li>Final Project Presentation</li>
                <li>Project: Simulated company audit & report vulnerabilities + fixes.</li>
              </ul>
            </p>
          </div>
        </div>

        <Link to="/courses" aria-label="Back to Courses">
          <motion.button
            whileHover={{ x: -5 }}
            className="mt-6 flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            ← Back to Courses
          </motion.button>
        </Link>

        <div className="bg-primary text-white mt-8">
          <h2 className="text-2xl font-semibold mb-4">Interested in Learning More?</h2>
          <p className="text-gray-400 mb-4">Fill out the form below to register your interest in the {courseName} course.</p>
          <InterestForm />
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityBeginner;