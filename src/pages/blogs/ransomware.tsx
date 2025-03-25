import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const RansomwareBlog: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-primary text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <motion.div
            className="flex justify-center items-center h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Loader className="animate-spin text-accent w-12 h-12" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              The Rise of Ransomware: How to Protect Your Organization
            </h1>

            <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                Cnu
              </div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                March 25, 2025
              </div>
            </div>

            <motion.img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7"
              alt="Ransomware"
              className="w-full h-64 object-cover rounded-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            <section className="text-gray-400 leading-relaxed space-y-6">
              <p>
                Ransomware has evolved into one of the most dangerous cyber
                threats of the 21st century. Businesses, hospitals, government
                agencies, and even individuals have fallen victim to these
                malicious attacks, causing billions of dollars in financial
                damage. Cybercriminals use <b>encryption-based malware</b> to lock
                critical data and demand ransom in cryptocurrency, making it
                almost impossible to trace them.
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Understanding Ransomware
              </h2>
              <p>
                Ransomware is a type of malware that encrypts files or
                locks users out of their devices. Attackers typically demand
                payments in Bitcoin or other cryptocurrencies in exchange for
                the decryption key. This type of attack has been around for
                decades, but with the rise of <b>Ransomware-as-a-Service (RaaS),</b>
                even amateur hackers can execute sophisticated ransomware
                campaigns.
              </p>

              <h2 className="text-2xl font-semibold text-white">
                How Ransomware Attacks Happen
              </h2>
              <p>
                Cybercriminals use various methods to distribute ransomware,
                with some of the most common including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <b>Phishing Emails</b> – Malicious attachments or links trick
                  users into downloading ransomware.
                </li>
                <li>
                  <b>Exploiting Vulnerabilities</b> – Unpatched software is often a
                  gateway for ransomware infections.
                </li>
                <li>
                  <b>Drive-By Downloads</b> – Users unknowingly download ransomware
                  from compromised websites.
                </li>
                <li>
                  <b>Remote Desktop Protocol (RDP) Attacks</b> – Attackers exploit
                  weak credentials to gain access.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white">
                The Evolution of Ransomware
              </h2>
              <p>
                Over the years, ransomware has become more sophisticated. Early
                versions of ransomware simply locked screens, but now attackers
                use advanced encryption to hold data hostage. Double extortion
                is a new technique where criminals threaten to release stolen
                data if the ransom is not paid.
              </p>

              <h2 className="text-2xl font-semibold text-white">
                The Impact on Organizations
              </h2>
              <p>
                A ransomware attack can have devastating consequences. Businesses
                lose access to critical data, suffer reputational damage, and
                often face legal consequences if sensitive customer information
                is leaked. Some companies have even gone bankrupt due to
                ransomware attacks.
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Preventing Ransomware Attacks
              </h2>
              <p>
                The best way to fight ransomware is through <b>prevention</b>. Here
                are some effective strategies to protect against ransomware:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Regular Data Backups: Ensure you have encrypted and
                  offline backups.
                </li>
                <li>
                  Security Awareness Training: Educate employees on
                  identifying phishing emails.
                </li>
                <li>
                  Zero Trust Security Model: Limit access to sensitive
                  systems and require multi-factor authentication.
                </li>
                <li>
                  Patch and Update Systems: Keep all software and operating
                  systems up to date.
                </li>
                <li>
                  Use AI-Powered Threat Detection: Advanced security
                  solutions can identify ransomware before it executes.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white">
                What to Do If You Get Attacked
              </h2>
              <p>
                If your organization is hit by ransomware, follow these steps:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Isolate the infected system to prevent the malware from
                  spreading.
                </li>
                <li>
                  Do not pay the ransom—paying does not guarantee file
                  recovery.
                </li>
                <li>
                  Report the attack to law enforcement agencies and
                  cybersecurity experts.
                </li>
                <li>
                  Try using decryption tools available from cybersecurity
                  organizations.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white">
                Conclusion
              </h2>
              <p>
                Ransomware is a growing threat that requires proactive
                security measures. Cybercriminals are constantly evolving their
                tactics, making it essential for organizations to stay ahead.
                By implementing strong cybersecurity defenses, conducting
                regular security audits, and fostering a culture of
                cyber-awareness, businesses can reduce their risk of
                ransomware attacks.
              </p>
            </section>

            <Link to="/blogs">
              <motion.button
                whileHover={{ x: -5 }}
                className="mt-6 flex items-center text-accent hover:text-accent/80 transition-colors"
              >
                ← Back to Blogs
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RansomwareBlog;
