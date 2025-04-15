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

const CISMSlugPage: React.FC = () => {
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
          CISM – Certified Information Security Manager
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          Offered by ISACA, CISM focuses on the management side of information security, including risk management, governance, and program development. It’s perfect for professionals advancing into leadership roles.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>🛡️ Issued By:</strong> ISACA</p>
          <p><strong>📈 Importance:</strong> Recognized globally for advancing strategic security skills, especially for those managing or building security teams and frameworks.</p>
          <p><strong>💵 Typical Market Price:</strong> $575 – $760</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Highly discounted</span> for our members — don’t miss out!
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get CISM Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Emphasizes leadership and risk management skills.</li>
            <li>✅ Designed for professionals building or managing security programs.</li>
            <li>✅ Aligns your knowledge with business goals and governance needs.</li>
            <li>✅ Highly regarded for mid-to-senior level security management roles.</li>
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
            <li>🧠 Security Managers</li>
            <li>📊 Risk Management Professionals</li>
            <li>🏢 IT Governance Leaders</li>
            <li>📈 Business Continuity & Compliance Officers</li>
            <li>🔒 Professionals transitioning into InfoSec leadership</li>
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
            CISM is trusted in enterprises for aligning cybersecurity with business strategy. It’s used for:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>📋 Defining governance and risk frameworks</li>
            <li>💼 Managing enterprise-wide security initiatives</li>
            <li>🛡️ Developing security policies and programs</li>
            <li>📉 Reducing organizational risk and ensuring compliance</li>
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
            🚀 Want to grow into a security leadership role?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            The <strong>CISM</strong> certification can transform your career. Register your interest below to unlock our <strong>exclusive pricing and guidance</strong> for this premium cert!
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CISMSlugPage;
