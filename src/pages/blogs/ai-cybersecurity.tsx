import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, Code } from "lucide-react";
import { Link } from "react-router-dom";

const TheImpactOfAIBlog = () => {
  return (
    <div className="pt-16 min-h-screen bg-primary text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-accent"
        >
          The Impact of AI on Cybersecurity: A Double-Edged Sword
        </motion.h1>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            Amrutha
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            March 19, 2025
          </div>
        </div>

        {/* Feature Image */}
        <motion.img
          src="https://specials-images.forbesimg.com/imageserve/670511e5c45b970c22dd83e2/As-AI-capabilities-advance--so-do-the-threats-posed-by-malicious-actors-/960x0.jpg?fit=scale"
          alt="AI and Cybersecurity"
          className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Introduction */}
        <p className="text-gray-400 leading-relaxed">
          Artificial Intelligence (AI) is revolutionizing cybersecurity, providing <strong> powerful threat detection, predictive analytics, and automated responses</strong>. 
          However, this innovation also introduces new risks, as cybercriminals leverage AI to develop <strong> sophisticated attacks</strong>. 
          In this article, we explore the <strong> impact of AI on cybersecurity</strong>, its benefits, challenges, and how organizations can leverage AI for defense.
        </p>

        {/* Section: The Role of AI in Cybersecurity */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          The Role of AI in Cybersecurity
        </h2>
        <p className="text-gray-400 leading-relaxed">
          AI-powered security solutions are transforming how businesses <strong> identify, respond to, and mitigate cyber threats</strong>. 
          These technologies include:
        </p>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed">
          <li>🔍 <strong>Threat Detection & Response</strong> – AI detects anomalies in real-time.</li>
          <li>📊 <strong>Predictive Analytics</strong> – AI anticipates cyberattacks before they occur.</li>
          <li>🤖 <strong>Automated Security Operations</strong> – AI-driven SOCs reduce human workload.</li>
          <li>🔑 <strong>Identity Verification</strong> – AI enhances biometric authentication and fraud detection.</li>
        </ul>

        {/* Section: AI-Powered Cyber Defense */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          AI-Powered Cyber Defense Strategies
        </h2>

        {/* AI-Powered Threat Detection */}
        <h3 className="text-xl font-semibold mt-6 mb-2 text-accent">1. AI-Powered Threat Detection</h3>
        <p className="text-gray-400 leading-relaxed">
          Traditional security systems rely on <strong> signature-based detection</strong>, which struggles against emerging threats. 
          AI-based systems use <strong> machine learning (ML) and deep learning</strong> to identify <strong> abnormal behavior</strong> in networks.
        </p>

        {/* Code Example - AI-Based Threat Detection */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg text-sm mt-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center text-accent mb-2">
            <Code size={16} className="mr-2" /> <strong>Python: AI-Based Anomaly Detection</strong>
          </div>
          <pre className="text-gray-300">
            {`import numpy as np
from sklearn.ensemble import IsolationForest

# Simulated network traffic data
data = np.random.rand(100, 5)

# Train anomaly detection model
model = IsolationForest(contamination=0.05)
model.fit(data)

# Detect anomalies
anomalies = model.predict(data)
print("Anomalies:", anomalies)`}
          </pre>
        </motion.div>

        {/* AI-Driven Security Automation */}
        <h3 className="text-xl font-semibold mt-6 mb-2 text-accent">2. AI-Driven Security Automation</h3>
        <p className="text-gray-400 leading-relaxed">
          AI enhances <strong> Security Operations Centers (SOCs)</strong> by automating tasks such as:
        </p>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed">
          <li>🚀 <strong>Incident Response Automation</strong> – AI automatically mitigates threats.</li>
          <li>⚠️ <strong>False Positive Reduction</strong> – AI filters out noise in security alerts.</li>
          <li>📡 <strong>Continuous Monitoring</strong> – AI ensures <strong> 24/7 threat intelligence</strong>.</li>
        </ul>

        {/* Section: The Dark Side - AI-Powered Cyber Attacks */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          The Dark Side: AI-Powered Cyber Attacks
        </h2>
        <p className="text-gray-400 leading-relaxed">
          While AI strengthens cybersecurity, it also <strong> empowers cybercriminals</strong> to develop advanced threats, such as:
        </p>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed">
          <li>🛠 <strong>AI-Generated Phishing Attacks</strong> – Deepfake phishing emails deceive users.</li>
          <li>🦠 <strong>AI-Driven Malware</strong> – Self-learning malware adapts to bypass defenses.</li>
          <li>🔍 <strong>Automated Vulnerability Exploits</strong> – AI scans for and exploits security weaknesses.</li>
        </ul>

        {/* Section: Future of AI in Cybersecurity */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          Future of AI in Cybersecurity
        </h2>
        <p className="text-gray-400 leading-relaxed">
          AI will continue to <strong> redefine cybersecurity</strong> through innovations such as:
        </p>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed">
          <li>🔒 <strong>AI-Powered Zero Trust Security</strong> – Continuous verification of users and devices.</li>
          <li>⚡ <strong>Quantum-Resistant AI Encryption</strong> – Protects against quantum computing threats.</li>
          <li>🤖 <strong>AI-Powered Cyber Warfare</strong> – Governments deploying AI for defense and offense.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">Conclusion</h2>
        <p className="text-gray-400 leading-relaxed">
          AI is a <strong> game-changer in cybersecurity</strong>, offering unparalleled protection against cyber threats. 
          However, it also presents new risks, as hackers leverage AI to launch sophisticated attacks. 
          Organizations must embrace <strong> AI-driven cybersecurity strategies</strong> while staying vigilant against AI-powered threats.
        </p>

        {/* Back to Blogs Button */}
        <Link to="/blogs">
          <motion.button
            whileHover={{ x: -5 }}
            className="mt-6 flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            ← Back to Blogs
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default TheImpactOfAIBlog;
