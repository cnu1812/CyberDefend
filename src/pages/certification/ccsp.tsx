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

const CCSPSlugPage: React.FC = () => {
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
          Certified Cloud Security Professional (CCSP)
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="initial"
          animate="animate"
          className="text-lg text-gray-300"
        >
          The CCSP certification by (ISC)² validates advanced technical skills and knowledge in cloud security. It's tailored for professionals who design, manage, and secure data, applications, and infrastructure in the cloud.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.03 }}
          className="border border-accent rounded-lg p-6 bg-darkBg space-y-4 shadow-md"
        >
          <p><strong>☁️ Issued By:</strong> (ISC)²</p>
          <p><strong>📈 Importance:</strong> Recognized globally for professionals securing cloud environments and ensuring compliance in dynamic infrastructure settings.</p>
          <p><strong>💵 Typical Market Price:</strong> $599</p>
          <p className="text-accent font-semibold">
            💰 Our Price: <span className="text-white">Exclusive discounted pricing</span> with mentorship & exam prep resources!
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          initial="initial"
          animate="animate"
          className="bg-darkBg border border-gray-700 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Should You Get CCSP Certified?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ Proves your ability to secure cloud platforms and environments.</li>
            <li>✅ Enhances your credibility with enterprises migrating to the cloud.</li>
            <li>✅ Boosts earning potential and opens roles in cloud architecture and security leadership.</li>
            <li>✅ Aligns with industry standards like NIST, CSA, ISO/IEC 27017.</li>
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
            <li>🌐 Cloud Security Architects & Engineers</li>
            <li>🛡️ Security Consultants & Managers</li>
            <li>💼 Enterprise Architects & Systems Architects</li>
            <li>🔍 IT Auditors focused on cloud compliance</li>
            <li>🚀 Professionals working with AWS, Azure, Google Cloud, and hybrid systems</li>
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
            CCSP-certified professionals play a critical role in cloud security strategy and operations across industries like finance, healthcare, and tech. They help organizations:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🔐 Design secure cloud architecture and policy</li>
            <li>⚖️ Ensure compliance with privacy and regulatory standards</li>
            <li>💾 Implement data protection and access controls</li>
            <li>🧠 Bridge the gap between cloud adoption and cybersecurity strategy</li>
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
            ☁️ Ready to secure the cloud and advance your career?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-300 mb-4"
          >
            Start your journey toward becoming a <strong>Certified Cloud Security Professional (CCSP)</strong>. Get insider pricing, expert guidance, and tailored prep support. Fill out the form below to take the next step.
          </motion.p>
          <InterestForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CCSPSlugPage;
