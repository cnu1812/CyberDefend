import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, Code } from "lucide-react";
import { Link } from "react-router-dom";

const ZeroTrustBlog = () => {
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
          Zero Trust Architecture: A Modern Security Approach
        </motion.h1>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            Cnu
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            March 5, 2025
          </div>
        </div>

        {/* Animated Feature Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
          alt="Zero Trust Security"
          className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Introduction */}
        <p className="text-gray-400 leading-relaxed">
          In today's digital world, <strong>trusting internal networks is no longer safe</strong>. 
          Attackers are increasingly bypassing traditional defenses through **stolen credentials, phishing, and lateral movement**. 
          The answer? <strong>Zero Trust Architecture (ZTA)</strong>—a security model that enforces constant verification and least privilege access.
        </p>

        {/* Section: Core Concept */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">What is Zero Trust?</h2>
        <p className="text-gray-400 leading-relaxed">
          <strong>Zero Trust is a security approach based on the principle:</strong> 
          <strong>"Never trust, always verify."</strong> Unlike traditional security models that assume 
          <strong>everything inside the network is safe</strong>, Zero Trust enforces strict identity verification for every **user, device, and application**.
        </p>

        {/* Code Example - Basic Zero Trust Policy */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg text-sm mt-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center text-accent mb-2">
            <Code size={16} className="mr-2" /> <strong>Zero Trust Policy Example</strong>
          </div>
          <pre className="text-gray-300">
            {`{
  "requireMFA": true,
  "leastPrivilege": true,
  "deviceComplianceCheck": true,
  "networkSegmentation": true,
  "continuousMonitoring": true
}`}
          </pre>
        </motion.div>

        {/* Section: Why Traditional Security Fails */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          Why Traditional Security Models Fail
        </h2>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed">
          <li>🔓 <strong>Implicit Trust is Dangerous</strong> – Attackers move freely after breaching the perimeter.</li>
          <li>👨‍💻 <strong>Insider Threats</strong> – Employees and contractors can be exploited.</li>
          <li>🌍 <strong>Remote Work & Cloud</strong> – Data is accessed from untrusted networks and devices.</li>
          <li>🔑 <strong>Credential Theft</strong> – Phishing allows attackers to log in like real users.</li>
        </ul>

        {/* Section: Implementing Zero Trust */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          How to Implement Zero Trust
        </h2>
        <p className="text-gray-400">
          Implementing Zero Trust requires <strong>continuous verification and least-privilege access</strong>. 
          Below is an example of a <strong>Zero Trust authentication flow</strong> using **JSON Web Tokens (JWTs)** and **Multi-Factor Authentication (MFA)**.
        </p>

        {/* Code Example - JWT-Based Zero Trust Authentication */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg text-sm mt-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center text-accent mb-2">
            <Code size={16} className="mr-2" /> <strong>JWT-Based Zero Trust Authentication</strong>
          </div>
          <pre className="text-gray-300">
            {`const authenticateUser = async (username, password) => {
  const response = await fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  if (data.token) {
    localStorage.setItem("authToken", data.token);
    return true;
  }
  return false;
};`}
          </pre>
        </motion.div>

        {/* Section: Real-World Example */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          Real-World Zero Trust Implementations
        </h2>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed">
          <li>🌍 <strong>Google’s BeyondCorp</strong> – Zero Trust model replaced VPNs.</li>
          <li>🛡 <strong>Microsoft’s Security Framework</strong> – Enforces strict identity verification.</li>
          <li>🏛 <strong>U.S. Government Mandate</strong> – Federal agencies adopting Zero Trust.</li>
        </ul>

        {/* Code Example - Enforcing MFA in a Web App */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg text-sm mt-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center text-accent mb-2">
            <Code size={16} className="mr-2" /> <strong>Enforcing MFA for Enhanced Security</strong>
          </div>
          <pre className="text-gray-300">
            {`const enforceMFA = (user) => {
  if (!user.mfaEnabled) {
    throw new Error("Multi-Factor Authentication is required.");
  }
};`}
          </pre>
        </motion.div>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">Conclusion</h2>
        <p className="text-gray-400 leading-relaxed">
          <strong>Zero Trust isn’t an option—it’s a necessity.</strong> With cyberattacks rising, businesses must shift from  
          <strong>traditional security</strong> to <strong>continuous verification</strong> and <strong>least privilege access.</strong>
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

export default ZeroTrustBlog;
