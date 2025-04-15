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

const CISASlugPage: React.FC = () => {
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
          Certified Information Systems Auditor (CISA)
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          The CISA certification by ISACA is globally recognized for professionals who audit, control, monitor, and assess information technology and business systems. It validates your ability to assess vulnerabilities, report on compliance, and implement controls.
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
          <p><strong>📈 Importance:</strong> Highly respected by companies and government agencies around the world for professionals managing IT risk and auditing systems.</p>
          <p><strong>💵 Typical Market Price:</strong> $575 – $760</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Special member-only discounts</span> with added mentorship!
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get CISA Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Validates your expertise in auditing and IT governance.</li>
            <li>✅ Enhances credibility with enterprises and regulatory bodies.</li>
            <li>✅ Opens doors to audit, risk, and compliance leadership roles.</li>
            <li>✅ Aligned with global standards like COBIT and ISO/IEC 27001.</li>
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
            <li>📊 IT Auditors & Compliance Officers</li>
            <li>🧾 Risk & Control Professionals</li>
            <li>💼 CIOs, CISOs & IT Managers</li>
            <li>🔍 Professionals aiming for roles in governance and compliance</li>
            <li>🎯 Individuals seeking international credibility in auditing</li>
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
            CISA-certified professionals are indispensable in regulated sectors like finance, healthcare, and tech. They help organizations:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🧪 Perform detailed IT audits and ensure compliance</li>
            <li>🔐 Establish IT governance and risk frameworks</li>
            <li>📈 Align IT investments with business goals</li>
            <li>💼 Meet internal audit and external regulatory requirements</li>
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
            📌 Ready to become a certified IT auditor?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            Get exclusive guidance and discounts on the <strong>Certified Information Systems Auditor (CISA)</strong> program. Fill the form below to receive early access and pricing.
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CISASlugPage;
