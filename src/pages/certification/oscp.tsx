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

const OSCPSlugPage: React.FC = () => {
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
          Offensive Security Certified Professional (OSCP)
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          OSCP by Offensive Security is one of the most respected and hands-on certifications in the cybersecurity world. It tests your ability to think and act like a real-world penetration tester with a rigorous exam.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>🛡️ Issued By:</strong> Offensive Security</p>
          <p><strong>📈 Importance:</strong> Recognized as a gold standard for penetration testing skills. OSCP holders are seen as battle-tested experts in ethical hacking.</p>
          <p><strong>💵 Typical Market Price:</strong> $1,499 – $1,599</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Ask us about community-driven mentorship and discounts!</span>
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get OSCP Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Validates real-world offensive security skills under time pressure.</li>
            <li>✅ Demonstrates in-depth understanding of exploitation, pivoting, privilege escalation, and more.</li>
            <li>✅ Respected globally in high-level cybersecurity roles.</li>
            <li>✅ Helps break into red teaming, consulting, and advanced pen-testing roles.</li>
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
            <li>🎯 Penetration Testers</li>
            <li>👾 Red Team Operators</li>
            <li>🧠 Experienced Security Analysts</li>
            <li>💼 Security Engineers & Consultants</li>
            <li>🚀 Anyone ready to level up in offensive security</li>
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
            OSCP-certified professionals are hired in top firms, consultancy agencies, and security teams. They typically work on:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🔍 Advanced penetration testing and exploitation</li>
            <li>🛡️ Red teaming and threat emulation</li>
            <li>💥 Breach simulations and post-exploitation analysis</li>
            <li>🔐 Incident response and root cause forensics</li>
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
            🎯 Want to crack the OSCP with ease?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            We offer <strong>OSCP preparation support</strong> along with <strong>discounted access</strong> to resources, labs, and mentors. Fill the form to show interest and get updates!
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OSCPSlugPage;
