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

const ECSASlugPage: React.FC = () => {
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
          EC-Council Certified Security Analyst (ECSA)
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          The EC-Council Certified Security Analyst (ECSA) builds upon the Certified Ethical Hacker (CEH) certification and focuses on advanced penetration testing methodologies, tools, and hands-on vulnerability assessment skills.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>🛡️ Issued By:</strong> EC-Council</p>
          <p><strong>📈 Importance:</strong> Ideal for cybersecurity professionals looking to deepen their offensive security skills and deliver real-world penetration test reports.</p>
          <p><strong>💵 Typical Market Price:</strong> $999</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Special discounted rates</span> with expert mentorship and hands-on lab access!
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get ECSA Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Expands your ethical hacking knowledge into real-world pentesting scenarios.</li>
            <li>✅ Validates your ability to document and present findings in professional reports.</li>
            <li>✅ Builds credibility for roles in red teaming, vulnerability assessment, and consulting.</li>
            <li>✅ Complements CEH and serves as a stepping stone toward Licensed Penetration Tester (LPT).</li>
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
            <li>🧠 Experienced Ethical Hackers & Red Teamers</li>
            <li>🔬 Penetration Testers looking to upgrade their skills</li>
            <li>🛠️ Network Security Professionals & SOC Analysts</li>
            <li>📝 Professionals who need to write formal pentest reports</li>
            <li>🚀 Those planning to advance toward LPT (Master)</li>
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
            ECSA-certified professionals are a valuable asset in offensive security, risk assessment, and consulting roles. They're typically involved in:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🛠️ Performing full-scope penetration tests</li>
            <li>📑 Writing comprehensive security reports with risk ratings</li>
            <li>🏛️ Supporting audits, security assessments, and compliance programs</li>
            <li>🎯 Advising on remediation and mitigation strategies post-assessment</li>
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
            🎯 Ready to take your penetration testing skills to the next level?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            Advance your offensive security career with the <strong>EC-Council Certified Security Analyst (ECSA)</strong>. Sign up below for expert support, discounted pricing, and early access to premium resources.
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ECSASlugPage;
