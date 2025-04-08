import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

const courseOptions = [
  "Beginner Cybersecurity Course",
  "Intermediate Cybersecurity Course",
  "Cybersecurity Masterclass",
];

const certOptions = [
  "Certified Ethical Hacker (CEH)",
  "CompTIA Security+",
  "CISSP",
  "CISM",
];

const InterestForm: React.FC = () => {
  const [interestType, setInterestType] = useState("Courses");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => {
        toast.success("🎉 Submission Successful! We’ll get back to you shortly 🚀", {
          duration: 4000,
        });

        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });

        setShowModal(true);
        form.reset();
        setInterestType("Courses");
      })
      .catch(() => toast.error("❌ Oops! Something went wrong. Try again."));
  };

  return (
    <section className="bg-primary text-white py-16 px-4" id="interest-form">
      <div className="max-w-xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🚀 Show Your Interest
        </motion.h2>

        <form
          name="interest-form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-darkBg p-6 rounded-lg shadow-md space-y-6"
        >
          <input type="hidden" name="form-name" value="interest-form" />
          <input type="hidden" name="bot-field" />

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-primary border border-accent rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-primary border border-accent rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Interested In</label>
            <select
              name="interestType"
              value={interestType}
              onChange={(e) => setInterestType(e.target.value)}
              className="w-full bg-primary border border-accent rounded px-4 py-2"
            >
              <option value="Courses">Courses</option>
              <option value="Certifications">Certifications</option>
            </select>
          </div>

          {interestType === "Courses" && (
            <div>
              <label className="block text-sm font-medium mb-1">Select Course</label>
              <select
                name="selectedCourse"
                className="w-full bg-primary border border-accent rounded px-4 py-2"
              >
                {courseOptions.map((course, idx) => (
                  <option key={idx} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          )}

          {interestType === "Certifications" && (
            <div>
              <label className="block text-sm font-medium mb-1">Select Certification</label>
              <select
                name="selectedCertification"
                className="w-full bg-primary border border-accent rounded px-4 py-2"
              >
                {certOptions.map((cert, idx) => (
                  <option key={idx} value={cert}>
                    {cert}
                  </option>
                ))}
              </select>
            </div>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-accent text-primary font-bold py-3 rounded hover:bg-accent/90"
          >
            Submit Interest
          </motion.button>
        </form>
      </div>

      {/* 🎉 Celebratory Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-lg p-8 max-w-md text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h2 className="text-2xl font-bold mb-2">🎊 You're All Set!</h2>
              <p className="text-lg mb-6">We'll reach out to you soon with the details!</p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-accent text-primary font-semibold px-6 py-2 rounded hover:bg-accent/90"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InterestForm;
