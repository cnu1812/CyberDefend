import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import InterestForm from "../../components/InterestForm";

const CybersecurityMasterclass = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestedCourse: "Cybersecurity Masterclass",
    phone: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your interest has been recorded!");
  };

  const courseDetails = {
    title: "Cybersecurity Masterclass",
    instructor: "Manoj Kumar",
    startDate: "TBA",
    duration: "10 weeks",
    level: "Advanced",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    slug: "cybersecurity-masterclass",
    description:
      "This intensive 10-week Cybersecurity Masterclass is tailored for seasoned cybersecurity professionals seeking to deepen their expertise in cutting-edge domains and strategic thinking. The course delves into advanced topics, including sophisticated threat analysis, proactive defense strategies, security architecture design, and leadership in cybersecurity. Through in-depth case studies, advanced labs, and collaborative projects, participants will develop the mastery required to tackle the most challenging cybersecurity landscapes and drive organizational security initiatives.",
    prerequisites: [
      "Completion of an intermediate cybersecurity course or equivalent extensive experience in the field.",
      "Strong understanding of networking protocols, operating systems, and security principles.",
      "Significant hands-on experience with security tools and technologies.",
      "Proficiency in at least one scripting language (Python, Bash, PowerShell).",
      "Familiarity with cloud computing concepts and security models.",
      "Experience with security frameworks and compliance standards.",
    ],
    learningObjectives: [
      "Conduct advanced penetration testing and exploit development.",
      "Design and implement secure network architectures for complex environments.",
      "Analyze and respond to advanced persistent threats (APTs) and sophisticated malware.",
      "Apply advanced cryptographic techniques and implement secure communication channels.",
      "Design and manage robust identity and access management (IAM) solutions at scale.",
      "Implement and optimize security monitoring and incident response capabilities for complex attacks.",
      "Architect and secure cloud deployments across various service models.",
      "Understand and apply cybersecurity governance, risk management, and compliance principles at a strategic level.",
      "Lead and contribute to cybersecurity research and innovation.",
    ],
  };

  const keywords = [
    "advanced cybersecurity course",
    "cybersecurity masterclass",
    "advanced penetration testing",
    "exploit development",
    "secure network architecture",
    "APT analysis",
    "advanced malware analysis",
    "advanced cryptography",
    "scalable IAM",
    "security monitoring mastery",
    "incident response leadership",
    "cloud security architecture",
    "cybersecurity governance",
    "risk management",
    "cybersecurity leadership",
  ];

  return (
    <div className="pt-16 min-h-screen bg-primary text-white">
      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>{courseDetails.title} | Advanced Cybersecurity Training</title>
        <meta name="description" content={courseDetails.description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href={`https://yourdomain.com/courses/${courseDetails.slug}`} /> {/* Replace with your actual domain */}
        <meta property="og:title" content={`${courseDetails.title} | Advanced Cybersecurity Training`} />
        <meta property="og:description" content={courseDetails.description} />
        <meta property="og:image" content={courseDetails.image} />
        <meta property="og:url" content={`https://yourdomain.com/courses/${courseDetails.slug}`} /> {/* Replace with your actual domain */}
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          {courseDetails.title}
        </motion.h1>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center">
            <User size={14} className="mr-1" aria-label="Instructor" />
            {courseDetails.instructor}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" aria-label="Start Date" />
            {courseDetails.startDate}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" aria-label="Duration" />
            {courseDetails.duration}
          </div>
          <div className="flex items-center">
            <Award size={14} className="mr-1" aria-label="Level" />
            {courseDetails.level}
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1" aria-label="Category" />
            {courseDetails.category}
          </div>
        </div>

        <img
          src={courseDetails.image}
          alt={courseDetails.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <p className="text-gray-400 leading-relaxed mb-4">
          {courseDetails.description}
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Prerequisites</h2>
          <ul className="list-disc ml-6 text-gray-400 mb-4">
            {courseDetails.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Learning Objectives</h2>
          <ul className="list-disc ml-6 text-gray-400 mb-4">
            {courseDetails.learningObjectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Course Structure (10 Weeks)</h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 1: Advanced Penetration Testing and Exploit Development</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>Advanced reconnaissance and intelligence gathering.</li>
                <li>Deep dive into web application security vulnerabilities (OWASP Top 10 and beyond).</li>
                <li>Binary exploitation fundamentals (buffer overflows, format string vulnerabilities).</li>
                <li>Advanced exploitation techniques and tool customization.</li>
                <li>Mobile security penetration testing (Android and iOS).</li>
                <li>Report generation for executive audiences.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Exploiting complex web application vulnerabilities.</li>
                <li>Developing basic exploits for software vulnerabilities.</li>
                <li>Conducting mobile application penetration testing.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 2: Secure Network Architecture and Design</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>Principles of zero-trust networking.</li>
                <li>Designing secure multi-tiered architectures.</li>
                <li>Software-Defined Networking (SDN) and security implications.</li>
                <li>Micro-segmentation strategies and implementation.</li>
                <li>Secure remote access solutions and VPN technologies.</li>
                <li>Threat modeling for network infrastructure.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Designing a secure network architecture for a specific scenario.</li>
                <li>Implementing micro-segmentation using virtualized environments.</li>
                <li>Configuring and analyzing secure VPN connections.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Weeks 3 & 4: Advanced Threat Analysis and Intelligence</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth analysis of Advanced Persistent Threats (APTs): methodologies, actors, and tools.</li>
                <li>Reverse engineering complex malware samples.</li>
                <li>Developing custom signatures and detection rules.</li>
                <li>Threat intelligence platforms and data analysis.</li>
                <li>Proactive threat hunting techniques and methodologies.</li>
                <li>Understanding and mitigating supply chain attacks.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Analyzing advanced malware samples using disassemblers and debuggers (IDA Pro, Ghidra - advanced usage).</li>
                <li>Developing YARA rules and Sigma rules for threat detection.</li>
                <li>Utilizing threat intelligence platforms for analysis and correlation.</li>
                <li>Simulating threat hunting scenarios.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 5: Advanced Cryptography and Secure Communications</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>Advanced cryptographic algorithms and their mathematical foundations.</li>
                <li>Cryptographic protocols (TLS/SSL, SSH, IPsec) in depth.</li>
                <li>Implementing secure communication channels and key management systems.</li>
                <li>Homomorphic encryption and other emerging cryptographic techniques.</li>
                <li>Side-channel attacks and countermeasures.</li>
                <li>Quantum cryptography and its implications.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Implementing secure communication using advanced cryptographic libraries.</li>
                <li>Analyzing the security of cryptographic protocols.</li>
                <li>Exploring the concepts of quantum cryptography.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 6: Scalable Identity and Access Management (IAM)</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>Designing and implementing enterprise-grade IAM systems.</li>
                <li>Advanced authentication and authorization frameworks (OAuth 2.0, OpenID Connect).</li>
                <li>Attribute-Based Access Control (ABAC) in complex environments.</li>
                <li>Identity federation and management across multiple domains.</li>
                <li>Implementing Privileged Access Management (PAM) for large organizations.</li>
                <li>Biometric authentication and its security considerations.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Setting up and managing a federated identity environment.</li>
                <li>Implementing ABAC policies for complex access control requirements.</li>
                <li>Deploying and configuring advanced PAM solutions.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 7: Security Monitoring, Incident Response, and Digital Forensics Mastery</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>Designing and optimizing Security Information and Event Management (SIEM) deployments for large-scale environments.</li>
                <li>Developing advanced correlation rules and anomaly detection techniques.</li>
                <li>Orchestrating incident response processes using SOAR platforms.</li>
                <li>Advanced digital forensics methodologies: memory analysis, network forensics, timeline analysis.</li>
                <li>Legal and ethical considerations in digital forensics.</li>
                <li>Conducting post-incident analysis and lessons learned.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Implementing advanced SIEM correlation rules and dashboards.</li>
                <li>Automating incident response workflows using a SOAR platform.</li>
                <li>Performing advanced memory and network forensic analysis.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 8: Cloud Security Architecture and Advanced Topics</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>Designing secure cloud architectures across different cloud providers (AWS, Azure, GCP - in-depth).</li>
                <li>Implementing advanced cloud security controls and services.</li>
                <li>Serverless security and container security (Docker, Kubernetes).</li>
                <li>Cloud-native security tools and best practices.</li>
                <li>Hybrid and multi-cloud security strategies.</li>
                <li>Compliance and governance in the cloud.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Architecting and securing a multi-tier application in the cloud.</li>
                <li>Implementing security controls for serverless functions and containers.</li>
                <li>Analyzing cloud security logs and identifying threats.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 9: Cybersecurity Governance, Risk Management, and Compliance (GRC) - Strategic Level</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>Developing and implementing comprehensive cybersecurity governance frameworks.</li>
                <li>Advanced risk assessment and management methodologies (quantitative and qualitative).</li>
                <li>Navigating complex regulatory landscapes (e.g., GDPR, HIPAA, PCI DSS) at an organizational level.</li>
                <li>Developing and enforcing security policies and standards.</li>
                <li>Business continuity and disaster recovery planning in the context of cyber threats.</li>
                <li>Communicating cybersecurity risks to executive leadership and the board.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 10: Emerging Threats, Research, and Leadership in Cybersecurity</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>Analysis of emerging cyber threats (e.g., AI-powered attacks, IoT security, blockchain vulnerabilities).</li>
                <li>Fundamentals of cybersecurity research methodologies.</li>
                <li>Leading and building high-performing security teams.</li>
                <li>Strategic planning and foresight in cybersecurity.</li>
                <li>Ethical leadership and professional development in the cybersecurity field.</li>
                <li>Capstone project presentations and discussions.</li>
              </ul>
            </p>
          </div>
        </div>

        <Link to="/courses" aria-label="Back to Courses">
          <motion.button
            whileHover={{ x: -5 }}
            className="mt-6 flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            ← Back to Courses
          </motion.button>
        </Link>

        <div className="bg-primary text-white mt-8">
          <h2 className="text-2xl font-semibold mb-4">Ready to Master Cybersecurity?</h2>
          <p className="text-gray-400 mb-4">Fill out the form below to register your interest in the {courseDetails.title} Masterclass.</p>
          <InterestForm />
        </div>
      </div>
    </div>
  );
};

export default CybersecurityMasterclass;