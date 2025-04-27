import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, BookOpen, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import InterestForm from "../../components/InterestForm";

const CybersecurityIntermediateCourse = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestedCourse: "Cybersecurity Intermediate Course",
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
    title: "Cybersecurity Intermediate Course",
    instructor: "Manoj Kumar",
    startDate: "TBA",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    slug: "cybersecurity-intermediate-course",
    description:
      "This 8-week intermediate cybersecurity course is designed for individuals with a foundational understanding of cybersecurity principles and practices. It aims to equip learners with practical skills and in-depth knowledge across key cybersecurity domains, enabling them to analyze, mitigate, and respond to more complex security threats. Through hands-on labs, real-world scenarios, and engaging discussions, participants will gain the expertise necessary to advance their cybersecurity careers.",
    prerequisites: [
      "Completion of a basic cybersecurity course or equivalent knowledge.",
      "Familiarity with networking fundamentals (TCP/IP, DNS, HTTP, etc.).",
      "Basic understanding of operating systems (Windows, Linux).",
      "Some experience with command-line interfaces.",
      "A basic understanding of scripting (e.g., Python, Bash) is beneficial but not mandatory.",
    ],
    learningObjectives: [
      "Conduct intermediate-level vulnerability assessments and penetration testing.",
      "Implement and manage security controls for network infrastructure.",
      "Analyze and respond to various types of malware and advanced persistent threats.",
      "Understand and apply cryptographic principles in securing data.",
      "Implement and manage identity and access management systems.",
      "Analyze security logs and implement effective security monitoring techniques.",
      "Understand the principles of cloud security and common cloud vulnerabilities.",
      "Apply cybersecurity best practices and understand relevant legal and ethical considerations.",
    ],
  };

  const keywords = [
    "intermediate cybersecurity course",
    "cybersecurity training",
    "penetration testing",
    "vulnerability assessment",
    "network security",
    "malware analysis",
    "cryptography",
    "IAM",
    "security monitoring",
    "incident response",
    "cloud security",
    "GRC",
    "ethical hacking",
  ];

  return (
    <div className="pt-16 min-h-screen bg-primary text-white">
      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>{courseDetails.title} | Intermediate Cybersecurity Training</title>
        <meta name="description" content={courseDetails.description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href={`https://www.cyberdefend.in/courses/${courseDetails.slug}`} /> 
        <meta property="og:title" content={`${courseDetails.title} | Intermediate Cybersecurity Training`} />
        <meta property="og:description" content={courseDetails.description} />
        <meta property="og:image" content={courseDetails.image} />
        <meta property="og:url" content={`https://www.cyberdefend.in/courses/${courseDetails.slug}`} /> 
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
            <ShieldAlert size={14} className="mr-1" aria-label="Level" />
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

          <h2 className="text-2xl font-semibold mb-3">Course Structure (8 Weeks)</h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 1: Advanced Network Security</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth review of TCP/IP and network protocols.</li>
                <li>Advanced firewall concepts and configuration (stateful firewalls, next-generation firewalls).</li>
                <li>Intrusion Detection and Prevention Systems (IDS/IPS): architecture, deployment, and tuning.</li>
                <li>Network segmentation and VLANs for enhanced security.</li>
                <li>Wireless network security: WPA2/3 enterprise, RADIUS authentication.</li>
                <li>Introduction to Network Security Monitoring (NSM).</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Configuring advanced firewall rules.</li>
                <li>Deploying and analyzing IDS/IPS alerts.</li>
                <li>Setting up and securing VLANs.</li>
                <li>Implementing WPA2/3 enterprise authentication.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 2: Intermediate Penetration Testing and Vulnerability Assessment</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth discussion of penetration testing methodologies and lifecycle.</li>
                <li>Information gathering and reconnaissance techniques (active and passive).</li>
                <li>Advanced scanning techniques (Nmap scripting engine, vulnerability scanners).</li>
                <li>Exploitation frameworks (Metasploit, Cobalt Strike - introduction).</li>
                <li>Client-side exploitation techniques.</li>
                <li>Report writing and vulnerability disclosure.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Performing advanced Nmap scans and analyzing results.</li>
                <li>Utilizing vulnerability scanners to identify weaknesses.</li>
                <li>Basic exploitation using Metasploit.</li>
                <li>Crafting a professional penetration testing report.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 3: Malware Analysis and Reverse Engineering</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth discussion of malware types and behavior.</li>
                <li>Static and dynamic malware analysis techniques.</li>
                <li>Using sandboxing environments for malware analysis.</li>
                <li>Basic reverse engineering with tools like IDA Pro (introduction) and Ghidra.</li>
                <li>Analyzing common malware functionalities (persistence, communication).</li>
                <li>Threat intelligence and malware information sharing.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Analyzing malware samples in a sandbox environment.</li>
                <li>Performing basic static and dynamic analysis.</li>
                <li>Identifying key indicators of compromise (IOCs).</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 4: Cryptography and Data Security</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth discussion of symmetric and asymmetric encryption algorithms.</li>
                <li>Hashing algorithms and their security applications.</li>
                <li>Digital signatures and certificates.</li>
                <li>Public Key Infrastructure (PKI) concepts.</li>
                <li>Data loss prevention (DLP) strategies and technologies.</li>
                <li>Disk encryption and file encryption techniques.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Working with encryption and hashing tools.</li>
                <li>Creating and managing digital certificates.</li>
                <li>Implementing basic DLP rules.</li>
                <li>Encrypting and decrypting data using various methods.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 5: Identity and Access Management (IAM)</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth discussion of authentication, authorization, and auditing.</li>
                <li>Multi-factor authentication (MFA) implementation and best practices.</li>
                <li>Directory services (LDAP, Active Directory) and their security implications.</li>
                <li>Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC).</li>
                <li>Privileged access management (PAM) concepts and tools.</li>
                <li>Federated identity and Single Sign-On (SSO).</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Implementing MFA on various platforms.</li>
                <li>Exploring Active Directory security features.</li>
                <li>Configuring RBAC policies.</li>
                <li>Working with basic PAM principles.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 6: Security Monitoring and Incident Response</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth discussion of Security Information and Event Management (SIEM) systems.</li>
                <li>Log analysis and correlation techniques.</li>
                <li>Developing effective security monitoring rules and alerts.</li>
                <li>Incident response lifecycle and methodologies.</li>
                <li>Digital forensics fundamentals (evidence collection, preservation).</li>
                <li>Creating and testing incident response plans.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Analyzing security logs using a SIEM tool (e.g., Splunk, ELK stack - basic introduction).</li>
                <li>Creating custom security alerts.</li>
                <li>Simulating and responding to basic security incidents.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 7: Cloud Security Fundamentals</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth discussion of security considerations for cloud computing models (IaaS, PaaS, SaaS).</li>
                <li>Common cloud vulnerabilities and threats.</li>
                <li>Cloud security best practices and frameworks (e.g., NIST CSF, CSA).</li>
                <li>Identity and Access Management in the cloud (IAM roles, policies).</li>
                <li>Cloud data security and encryption.</li>
                <li>Network security in the cloud (security groups, virtual networks).</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Exploring security features of a major cloud provider (e.g., AWS, Azure, GCP - basic level).</li>
                <li>Configuring basic cloud security controls.</li>
                <li>Analyzing common cloud security misconfigurations.</li>
              </ul>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Week 8: Cybersecurity Governance, Risk, and Compliance (GRC) & Ethical Hacking</h3>
            <p className="text-gray-400 mb-2">
              Topics:<br />
              <ul className="list-disc ml-6">
                <li>In-depth discussion of cybersecurity governance frameworks and standards (e.g., ISO 27001, GDPR, HIPAA - overview).</li>
                <li>Risk management principles and methodologies.</li>
                <li>Security policies and procedures development.</li>
                <li>Legal and ethical considerations in cybersecurity.</li>
                <li>Advanced ethical hacking methodologies and responsible disclosure.</li>
                <li>Career paths in cybersecurity and continuous learning.</li>
              </ul>
              Labs:<br />
              <ul className="list-disc ml-6">
                <li>Developing a basic security policy.</li>
                <li>Conducting a basic risk assessment.</li>
                <li>Discussing ethical considerations in penetration testing.</li>
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
          <h2 className="text-2xl font-semibold mb-4">Interested in Advancing Your Skills?</h2>
          <p className="text-gray-400 mb-4">Fill out the form below to register your interest in the {courseDetails.title} course.</p>
          <InterestForm />
        </div>
      </div>
    </div>
  );
};

export default CybersecurityIntermediateCourse;