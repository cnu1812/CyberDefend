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

const GSECSlugPage: React.FC = () => {
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
          GIAC Security Essentials (GSEC)
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          The GSEC certification by GIAC is a foundational cybersecurity credential that proves you have the knowledge and hands-on skills to handle IT systems security tasks, even if you don’t have prior security experience.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>🛡️ Issued By:</strong> GIAC (Global Information Assurance Certification)</p>
          <p><strong>📈 Importance:</strong> Demonstrates hands-on knowledge in real-world security concepts, tools, and procedures. It bridges the gap between theoretical and practical knowledge.</p>
          <p><strong>💵 Typical Market Price:</strong> $2,499</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Up to 30% off</span> through our partnered training paths and community offers!
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get GSEC Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Proves that you can implement security tasks at a technical level.</li>
            <li>✅ Covers a wide range of essential topics like access control, cryptography, networking, and incident response.</li>
            <li>✅ Opens doors for roles that require both foundational and hands-on skills in security.</li>
            <li>✅ Backed by the SANS Institute — a trusted name in cybersecurity training.</li>
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
            <li>🛠️ System & Network Administrators</li>
            <li>🧑‍💻 Entry-Level Security Professionals</li>
            <li>💼 IT Professionals making a move into cybersecurity</li>
            <li>🎓 Students or Graduates looking to build credibility</li>
            <li>🧠 Anyone wanting to understand practical security operations</li>
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
            GSEC-certified professionals are highly regarded in operational roles across industries. It's commonly used for:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🔒 Securing networks, endpoints, and user access</li>
            <li>📊 Managing real-time incident detection and response</li>
            <li>🔍 Performing security audits and compliance checks</li>
            <li>🚀 Launching careers in cybersecurity with a practical edge</li>
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
            🎯 Interested in GIAC GSEC at a reduced rate?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            We offer <strong>GSEC training support</strong> and <strong>partnered discounts</strong> to help you become certified without breaking the bank. Show your interest below!
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GSECSlugPage;
