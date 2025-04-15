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

const ComptiaSecurityPlusSlugPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div className="min-h-screen bg-primary text-white px-4 py-20"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <motion.div className="max-w-5xl mx-auto space-y-8">
        <motion.h1
          initial="initial" animate="animate" variants={fadeInUp} custom={1}
          className="text-4xl font-bold text-accent"
        >
          CompTIA Security+
        </motion.h1>

        <motion.p variants={fadeInUp} custom={2} initial="initial" animate="animate" className="text-lg text-gray-300">
          The CompTIA Security+ certification is a globally recognized credential that validates foundational skills in cybersecurity, including network security, compliance, threats, and vulnerabilities.
        </motion.p>

        <motion.div
          variants={fadeInUp} custom={3} initial="initial" animate="animate" whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>🔐 Issued By:</strong> CompTIA</p>
          <p><strong>📈 Importance:</strong> Provides foundational knowledge in cybersecurity, ideal for beginners. It covers essential principles of risk management, threat detection, and response strategies.</p>
          <p><strong>💵 Typical Market Price:</strong> $392</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Significantly lower</span> with exclusive community access!
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={4} initial="initial" animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get CompTIA Security+ Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Learn cybersecurity fundamentals and terminology.</li>
            <li>✅ Boost your resume with a vendor-neutral, globally recognized cert.</li>
            <li>✅ Qualify for roles like Security Administrator, Network Engineer, and IT Auditor.</li>
            <li>✅ Meet DoD 8570 compliance for government jobs.</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp} custom={5} initial="initial" animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Who Is It For?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🎓 IT beginners looking to enter cybersecurity</li>
            <li>🔐 Helpdesk & Network Support Professionals</li>
            <li>📚 Computer Science Students</li>
            <li>💼 Career switchers aiming for security roles</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp} custom={6} initial="initial" animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Industry Use Cases</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🏢 Entry-level roles at cybersecurity startups and enterprises</li>
            <li>🛡️ Compliance roles requiring foundational certs</li>
            <li>⚙️ IT support with a security-first approach</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-darkBg border border-accent rounded-lg p-6 mt-10 text-center shadow-lg"
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl font-semibold text-accent mb-3"
          >
            🚀 Get CompTIA Security+ at a discounted rate!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            We're offering <strong>CompTIA Security+</strong> certification at a <strong>special rate</strong> for learners in our community.
            Fill the form below to express interest and unlock your offer.
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ComptiaSecurityPlusSlugPage;
