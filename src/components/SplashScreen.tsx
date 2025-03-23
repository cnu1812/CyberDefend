import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../images/v2.svg"; 

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 5500); // 5.5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary z-50 overflow-hidden">
      {/* Cyber Grid Background */}
      <motion.div
        className="absolute inset-0 bg-grid opacity-10"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />

      {/* Scanning Radar Effect */}
       <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 border border-accent/30 rounded-full"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full"
          initial={{
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: Math.random() * window.innerHeight - window.innerHeight / 2,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: Math.random() * window.innerHeight - window.innerHeight / 2,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

       {/* Electromagnetic Pulses */}
       <motion.div
        className="absolute w-24 h-24 bg-accent/10 rounded-full blur-lg"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Random Hex Code Sparks */}
             {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent text-sm font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
          }}
        >
          {`0x${Math.floor(Math.random() * 16777215).toString(16)}`}
        </motion.div>
      ))}


      {/* Cybersecurity Intro Message */}
      <motion.div
        className="absolute top-16 text-white text-xl md:text-2xl font-bold text-center px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, textShadow: "0px 0px 10px rgba(0, 255, 255, 0.8)" }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      >
        <motion.span
          className="text-accent"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          YOU ARE IN THE RIGHT PLACE
        </motion.span>
        <br />
        TO CONQUER SECURITY ATTACKS & THREATS
      </motion.div>

      {/* Glitch Effect for Message */}
      <motion.div
        className="absolute top-16 text-white text-xl md:text-2xl font-bold text-center px-6 mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 0.3, repeat: 3, delay: 2.5 }}
      >
        YOU ARE IN THE RIGHT PLACE TO CONQUER SECURITY ATTACKS & THREATS
      </motion.div>

      {/* Rotating Firewall Rings */}
      <motion.div
        className="absolute w-72 h-72 md:w-96 md:h-96 border-4 border-accent rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1.2, rotate: 360 }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute w-52 h-52 md:w-72 md:h-72 border-2 border-accent/50 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1.5, rotate: -360 }}
        transition={{ duration: 7, ease: "linear", repeat: Infinity }}
      />

      {/* Terminal Log Simulation */}
      <div className="absolute bottom-10 left-5 text-green-400 text-xs font-mono opacity-80">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.5 }}
            >
              [SECURITY] Intrusion attempt detected at {Math.random().toFixed(2)}.{Math.random().toFixed(2)}.**
            </motion.p>
          ))}
      </div>

      {/* Cyberdefend Logo */}
      <motion.img
        src={logo}
        alt="CyberDefend Logo"
        className="h-40 md:h-48 lg:h-56 w-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        exit={{ opacity: 0, scale: 1.2 }}
      />
    </div>
  );
};

export default SplashScreen;
