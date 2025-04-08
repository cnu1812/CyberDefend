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

const CEHSlugPage: React.FC = () => {
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
        {/* Title */}
        <motion.h1
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          custom={1}
          className="text-4xl font-bold text-accent"
        >
          Certified Ethical Hacker (CEH)
        </motion.h1>

        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          The CEH certification by EC-Council teaches you how to think and act like a hacker, but for ethical purposes. It’s an industry-standard certification designed to build your ability to identify, exploit, and mitigate vulnerabilities in computer systems.
        </motion.p>

        {/* Info Card */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>🛡️ Issued By:</strong> EC-Council</p>
          <p><strong>📈 Importance:</strong> Equips professionals with skills to assess and improve system security by identifying vulnerabilities. It's essential for penetration testers, SOC analysts, and red team professionals.</p>
          <p><strong>💵 Typical Market Price:</strong> $950 – $1,199</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Significantly lower</span> with an exclusive discount — only for our community!
          </p>
        </motion.div>

        {/* Why CEH */}
        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get CEH Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Gain deep insights into ethical hacking phases and tools.</li>
            <li>✅ Become proficient in vulnerability analysis, malware threats, cryptography, and more.</li>
            <li>✅ Increase your chances of landing high-paying cybersecurity roles globally.</li>
            <li>✅ Stay compliant — many organizations require CEH-certified professionals to meet industry standards (like PCI-DSS, ISO 27001).</li>
          </ul>
        </motion.div>

        {/* Who Should Do This */}
        <motion.div
          variants={fadeInUp}
          custom={5}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Who Is It For?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🔐 Penetration Testers</li>
            <li>🔍 Security Analysts</li>
            <li>🧠 Cybersecurity Enthusiasts</li>
            <li>📊 Risk Assessment Professionals</li>
            <li>💼 IT Professionals looking to switch into security</li>
          </ul>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          variants={fadeInUp}
          custom={6}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Industry Use Cases</h2>
          <p className="text-gray-300">
            CEH is widely recognized in sectors like finance, healthcare, government, and tech. It is often required for:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🛡️ Red Team operations in large enterprises</li>
            <li>🔍 Conducting vulnerability assessments and penetration testing</li>
            <li>🖥️ Securing infrastructure and digital assets</li>
            <li>🔐 Creating incident response and threat mitigation strategies</li>
          </ul>
        </motion.div>

        {/* CTA with Animation */}
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
            🚀 Want to get CEH at a discounted price?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            We're offering the <strong>Certified Ethical Hacker (CEH)</strong> certification at a <strong>heavily discounted rate</strong>, only for our community learners.
            Fill out the form below to show your interest and get notified about the exclusive offer!
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CEHSlugPage;
