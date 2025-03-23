import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, Sparkles, Handshake } from "lucide-react"; // Icons for animations

const Collaborate = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-darkBg py-20 px-6 text-center overflow-hidden"
    >
      {/* Floating Background Icons for Engagement */}
      <motion.div
        className="absolute top-10 left-10 text-accent/30"
        animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Users size={60} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-accent/30"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Handshake size={60} />
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Heading with Smooth Appear Animation */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Want to <span className="text-accent">Collaborate</span> with Us?
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg mt-4"
        >
          We are always looking for passionate instructors, cybersecurity professionals, and
          partners. Let's work together to create a safer digital world!
        </motion.p>

        {/* Animated Icon */}
        <motion.div
  className="flex justify-center mt-6 relative"
  initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
  whileInView={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      rotate: [0, 10, -10, 0],
      filter: [
        "drop-shadow(0px 0px 10px rgba(255, 200, 100, 0.8))",
        "drop-shadow(0px 0px 20px rgba(255, 200, 100, 1))",
        "drop-shadow(0px 0px 10px rgba(255, 200, 100, 0.8))",
      ],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Sparkles size={60} className="text-accent" />
  </motion.div>
</motion.div>


        {/* Call-to-Action Button */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 100, 100, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-4 bg-accent text-primary font-bold text-lg rounded-lg shadow-lg hover:bg-accent/90 transition-all duration-300"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Collaborate;
