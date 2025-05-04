import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Lock } from "lucide-react";

const TrialOfferCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);
  const [glowOpacity, setGlowOpacity] = useState(0);

  // For the floating icons
  const floatingIcons = [
    { Icon: Shield, delay: 0, offset: { x: -20, y: -10 } },
    { Icon: Lock, delay: 1, offset: { x: 20, y: 10 } },
    { Icon: Zap, delay: 2, offset: { x: 0, y: -20 } }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowOpacity((prev) => (prev === 0 ? 0.6 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    setMousePosition({ rotateX, rotateY });
  };

  // Particle class for 3D floating particles
  const Particle = ({ delay = 0 }) => (
    <motion.div
      className="absolute w-1 h-1 bg-accent rounded-full"
      initial={{ opacity: 0 }}
      animate={{ 
        y: [20, -20, 20], 
        x: [0, 10, -10, 0],
        opacity: [0, 1, 0] 
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut"
      }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  );

  // Generate particles
  const particles = Array.from({ length: 15 }).map((_, i) => (
    <Particle key={i} delay={i * 0.2} />
  ));

  return (
    <div className="w-full flex justify-center items-center py-16 bg-gradient-to-b from-black via-primary to-black overflow-hidden relative">
      {/* Background cosmic effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary/10 to-transparent opacity-40" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%2300FF9F\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {particles}

      {/* Floating moving grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern"
          animate={{ y: [0, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,255,159,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,159,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        />
      </div>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, rotateY: 45, rotateX: -15, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          rotateY: isHovering ? mousePosition.rotateY : 0, 
          rotateX: isHovering ? mousePosition.rotateX : 0, 
          scale: 1
        }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          rotateX: { duration: 0.1, ease: "linear" },
          rotateY: { duration: 0.1, ease: "linear" }
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setMousePosition({ rotateX: 0, rotateY: 0 });
        }}
        className="bg-gradient-to-br from-accent to-accent/70 p-1 rounded-2xl shadow-2xl relative"
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transformOrigin: "center center"
        }}
      >
        {/* Glowing effect on hover */}
        <motion.div 
          className="absolute -inset-4 bg-accent rounded-3xl blur-2xl opacity-0"
          animate={{ opacity: isHovering ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Pulse glow effect */}
        <motion.div 
          className="absolute -inset-2 bg-accent rounded-3xl blur-xl opacity-0"
          animate={{ opacity: glowOpacity }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <div 
          className="bg-primary rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden group"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-accent/10 blur-2xl opacity-40"
            animate={{ 
              scale: [1, 1.2, 1], 
              rotate: [0, 180, 360],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* 3D floating elements */}
          <div className="relative" style={{ perspective: "1000px" }}>
            {floatingIcons.map(({ Icon, delay, offset }, index) => (
              <motion.div
                key={index}
                className="absolute w-8 h-8 text-accent opacity-0"
                initial={{ opacity: 0, y: 20, x: offset.x }}
                animate={{ 
                  opacity: [0, 0.8, 0], 
                  y: [offset.y, offset.y - 30, offset.y], 
                  rotateY: [0, 180, 360],
                  scale: [0.8, 1, 0.8],
                  z: [0, 40, 0]
                }}
                transition={{ 
                  duration: 6,
                  delay: delay, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ 
                  left: `calc(50% + ${offset.x}px)`,
                  top: `calc(30% + ${offset.y}px)`,
                  transformStyle: "preserve-3d"
                }}
              >
                <Icon className="w-full h-full" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          >
            <Sparkles className="mx-auto text-accent w-12 h-12 mb-4" />
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
          >
            Try CyberDefend Premium
          </motion.h2>

          <motion.p 
            className="text-lightGray mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          >
            Get access to our exclusive content, resume mentorship, and trial our premium cybersecurity courses for just{" "}
            <motion.span 
              className="text-accent font-semibold inline-block"
              whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              ₹199
            </motion.span>.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
          >
            <motion.a
              href="https://cyberdefend.nrichlearning.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(0, 255, 159, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block bg-accent text-primary font-semibold px-8 py-3 rounded-full shadow-lg overflow-hidden group/button"
            >
              <motion.span
                className="absolute inset-0 bg-white/20 opacity-0 group-hover/button:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <motion.span 
                className="relative z-10 flex items-center justify-center gap-2"
                whileHover={{ 
                  textShadow: "0 0 8px rgba(0,0,0,0.5)"
                }}
              >
                <span className="text-black-400 line-through mr-2">₹499</span>
                Start Trial Now <span className="ml-1">→</span> ₹199
              </motion.span>
            </motion.a>
          </motion.div>

          {/* 3D badge in the corner */}
          <motion.div
            className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg"
            style={{ 
              transformStyle: "preserve-3d", 
              transform: "translateZ(60px) rotate(-15deg)" 
            }}
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            drag
            dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
          >
            60% OFF
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrialOfferCard;