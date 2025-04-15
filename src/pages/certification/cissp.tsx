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

const CISSPSlugPage: React.FC = () => {
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
          CISSP – Certified Information Systems Security Professional
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          CISSP by (ISC)² is one of the most prestigious certifications in cybersecurity. It validates your ability to design, implement, and manage a best-in-class cybersecurity program.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>🛡️ Issued By:</strong> (ISC)²</p>
          <p><strong>📈 Importance:</strong> A gold-standard certification for experienced cybersecurity professionals involved in security leadership, architecture, and operations.</p>
          <p><strong>💵 Typical Market Price:</strong> $749</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Substantial discount</span> for our vetted learners!
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get CISSP Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Globally recognized certification for senior security roles.</li>
            <li>✅ Covers 8 domains, from security operations to risk management.</li>
            <li>✅ Demonstrates leadership, deep technical expertise, and policy skills.</li>
            <li>✅ Opens doors to top-tier roles like CISO, Security Director, and more.</li>
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
            <li>🏢 CISOs and Security Managers</li>
            <li>🎯 Security Architects and Consultants</li>
            <li>🔐 IT Security Analysts and Engineers</li>
            <li>📈 Professionals targeting leadership in security</li>
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
            CISSP is trusted by Fortune 500 companies, government agencies, and security-focused enterprises. It’s ideal for:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🏛️ Regulatory and compliance leadership</li>
            <li>🔒 Enterprise-level security program design</li>
            <li>🧠 Risk management and mitigation</li>
            <li>🚨 Incident response planning and execution</li>
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
            🚀 Ready to level up with CISSP?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            Get access to the <strong>CISSP</strong> certification at a <strong>special price</strong>. Fill out the form to express your interest and claim your exclusive offer!
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CISSPSlugPage;
