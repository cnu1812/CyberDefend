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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // ✅ Added phone to state
    interestType: "Courses",
    selectedCourse: courseOptions[0],
    selectedCertification: certOptions[0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycby-VH93FedWd0cExlOvYWrDCaPfXK2Ed1iZDW4N9dsEWvEqq63a4J098gSSmLzhW334TQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("🎉 Submission Successful! We’ll get back to you shortly 🚀", {
        duration: 4000,
      });

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });

      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "", // ✅ Reset phone
        interestType: "Courses",
        selectedCourse: courseOptions[0],
        selectedCertification: certOptions[0],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Oops! Something went wrong. Try again.");
    }
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
          onSubmit={handleSubmit}
          className="bg-darkBg p-6 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-primary border border-accent rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-primary border border-accent rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-primary border border-accent rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Interested In</label>
            <select
              name="interestType"
              value={formData.interestType}
              onChange={handleChange}
              className="w-full bg-primary border border-accent rounded px-4 py-2"
            >
              <option value="Courses">Courses</option>
              <option value="Certifications">Certifications</option>
            </select>
          </div>

          {formData.interestType === "Courses" && (
            <div>
              <label className="block text-sm font-medium mb-1">Select Course</label>
              <select
                name="selectedCourse"
                value={formData.selectedCourse}
                onChange={handleChange}
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

          {formData.interestType === "Certifications" && (
            <div>
              <label className="block text-sm font-medium mb-1">Select Certification</label>
              <select
                name="selectedCertification"
                value={formData.selectedCertification}
                onChange={handleChange}
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
