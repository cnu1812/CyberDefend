import React, { useEffect } from "react";
import InterestForm from "../../components/InterestForm";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5 },
  }),
};

const CyberOpsSlugPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-primary text-white px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="max-w-5xl mx-auto space-y-8">
        <motion.h1
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          custom={1}
          className="text-4xl font-bold text-accent"
        >
          Cisco Certified CyberOps Associate
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          The Cisco Certified CyberOps Associate certification equips professionals with the foundational skills required for cybersecurity operations roles. It emphasizes monitoring, detecting, and responding to cybersecurity threats in SOC environments.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>🔐 Issued By:</strong> Cisco</p>
          <p><strong>📈 Importance:</strong> Recognized as a strong entry point into cybersecurity, especially for Security Operations Center (SOC) and threat response roles.</p>
          <p><strong>💵 Typical Market Price:</strong> $300</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Exclusive access with added mentorship and resources!</span>
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get CyberOps Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Builds a solid cybersecurity foundation aligned with real-world SOC operations.</li>
            <li>✅ Prepares you for entry-level roles in threat detection, monitoring, and analysis.</li>
            <li>✅ Cisco's reputation enhances your credibility in the job market.</li>
            <li>✅ Includes hands-on and scenario-based learning to develop practical skills.</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={5}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Who Is It For?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🛡️ Aspiring Security Analysts</li>
            <li>🧠 IT Professionals transitioning to cybersecurity</li>
            <li>📡 SOC Technicians & Junior Threat Hunters</li>
            <li>🎓 Students or early-career professionals entering InfoSec</li>
            <li>📈 Anyone looking to build a career in cybersecurity operations</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={6}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Industry Use Cases</h2>
          <p className="text-gray-300">
            CyberOps Associate holders are often the first line of defense in cybersecurity teams. Industries leveraging this certification include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🚨 Assisting in real-time monitoring of network traffic and alerts</li>
            <li>🧪 Conducting threat intelligence and log analysis</li>
            <li>⚙️ Supporting security incident detection and reporting processes</li>
            <li>🔐 Maintaining compliance and internal security standards</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-darkBg border border-accent rounded-lg p-6 mt-10 text-center shadow-lg"
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl font-semibold text-accent mb-3"
          >
            🛡️ Kickstart your cybersecurity journey with Cisco!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            Launch a career in cybersecurity operations with the <strong>Cisco Certified CyberOps Associate</strong> certification. Get discounts, mentorship, and expert-led prep by joining us today.
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CyberOpsSlugPage;
