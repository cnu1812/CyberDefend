import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, Code } from "lucide-react";
import { Link } from "react-router-dom";

const CloudSecurityBlog = () => {
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
          Cloud Security Best Practices for 2025
        </motion.h1>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            Manoj
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            March 22, 2025
          </div>
        </div>

        {/* Animated Feature Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
          alt="Cloud Security"
          className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Introduction */}
        <p className="text-gray-400 leading-relaxed">
          The cloud is the backbone of modern IT infrastructure, but with its rapid adoption comes 
          <strong> escalating security threats</strong>. 
          <strong> Misconfigurations, data breaches, and identity theft</strong> remain key challenges in cloud security. 
          To ensure <strong> robust protection in 2025</strong>, businesses must implement <strong> Zero Trust principles, continuous monitoring, and AI-driven security automation</strong>.
        </p>

        {/* Section: Emerging Cloud Security Threats */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          Emerging Cloud Security Threats in 2025
        </h2>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed">
          <li>🔓 <strong>Misconfigured Cloud Services</strong> – The #1 cause of cloud data breaches.</li>
          <li>⚠️ <strong>Identity and Access Management (IAM) Attacks</strong> – Weak IAM policies lead to unauthorized access.</li>
          <li>🕵️ <strong>AI-Powered Cyber Attacks</strong> – Attackers use AI to bypass security defenses.</li>
          <li>🌍 <strong>Supply Chain Vulnerabilities</strong> – Third-party cloud services can introduce security risks.</li>
        </ul>

        {/* Section: Cloud Security Best Practices */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          Top Cloud Security Best Practices for 2025
        </h2>

        {/* Best Practice #1: Zero Trust Implementation */}
        <h3 className="text-xl font-semibold mt-6 mb-2 text-accent">1. Enforce Zero Trust Security</h3>
        <p className="text-gray-400 leading-relaxed">
          <strong>"Never trust, always verify."</strong> Zero Trust security ensures that every <strong> user, device, and application</strong> is continuously authenticated. 
          Implement <strong> least privilege access</strong> and <strong> Multi-Factor Authentication (MFA)</strong> to reduce attack vectors.
        </p>

        {/* Code Example - Zero Trust Policy */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg text-sm mt-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center text-accent mb-2">
            <Code size={16} className="mr-2" /> <strong>Zero Trust Policy in AWS</strong>
          </div>
          <pre className="text-gray-300">
            {`{
  "Effect": "Deny",
  "Action": "*",
  "Resource": "*",
  "Condition": {
    "BoolIfExists": {
      "aws:MultiFactorAuthPresent": false
    }
  }
}`}
          </pre>
        </motion.div>

        {/* Best Practice #2: Secure Cloud IAM */}
        <h3 className="text-xl font-semibold mt-6 mb-2 text-accent">2. Secure Cloud Identity and Access Management (IAM)</h3>
        <p className="text-gray-400 leading-relaxed">
          <strong> IAM misconfigurations</strong> are the primary cause of cloud breaches. Use <strong> role-based access control (RBAC)</strong>, enforce <strong> MFA</strong>, 
          and monitor for <strong> suspicious login attempts</strong>.
        </p>

        {/* Code Example - Secure IAM Policy */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg text-sm mt-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center text-accent mb-2">
            <Code size={16} className="mr-2" /> <strong>IAM Policy for Least Privilege</strong>
          </div>
          <pre className="text-gray-300">
            {`{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": "arn:aws:s3:::secure-bucket/*",
  "Condition": {
    "IpAddress": {"aws:SourceIp": "192.168.1.0/24"}
  }
}`}
          </pre>
        </motion.div>

        {/* Best Practice #3: AI-Based Security Automation */}
        <h3 className="text-xl font-semibold mt-6 mb-2 text-accent">3. Implement AI-Powered Threat Detection</h3>
        <p className="text-gray-400 leading-relaxed">
          AI-driven security tools can detect anomalies, prevent <strong> zero-day attacks</strong>, and automate incident response. 
          Use <strong> AWS GuardDuty, Microsoft Defender for Cloud, and Google Chronicle</strong> for AI-powered threat intelligence.
        </p>

        {/* Section: Real-World Implementations */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
          Real-World Cloud Security Implementations
        </h2>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed">
          <li>☁️ <strong>Google’s BeyondProd</strong> – A Zero Trust approach for securing cloud workloads.</li>
          <li>🛡 <strong>Microsoft’s Cloud Security Framework</strong> – Uses AI for real-time threat detection.</li>
          <li>🏛 <strong>NIST’s Cloud Security Guidelines</strong> – Federal agencies enforcing strict cloud policies.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">Conclusion</h2>
        <p className="text-gray-400 leading-relaxed">
          Cloud security is <strong> not optional</strong>—it’s a necessity in 2025. Organizations must shift from <strong> traditional security models</strong> to <strong> Zero Trust, AI-powered defense mechanisms, and IAM best practices</strong>. 
          By implementing these best practices, businesses can protect their <strong> data, applications, and users</strong> against evolving cyber threats.
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

export default CloudSecurityBlog;
