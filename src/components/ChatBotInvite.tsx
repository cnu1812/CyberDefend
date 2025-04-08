import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const ChatBotInvite = () => {
  const [showFooterMessage, setShowFooterMessage] = useState(false);
  const lastMessageRef = useRef(false);
  const confettiFired = useRef(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const halfway = pageHeight / 2;

      const isNowFooterMessage = scrollY > halfway;

      // Only update if state changes
      if (lastMessageRef.current !== isNowFooterMessage) {
        lastMessageRef.current = isNowFooterMessage;
        setShowFooterMessage(isNowFooterMessage);

        // Trigger confetti once on footer message
        if (isNowFooterMessage && !confettiFired.current) {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.7 },
          });
          confettiFired.current = true;
        }

        // Reset confetti flag when scrolling up
        if (!isNowFooterMessage) {
          confettiFired.current = false;
        }
      }

      setScrollDir(scrollY > window.scrollY ? "down" : "up");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2">
      <AnimatePresence>
        <motion.div
          key={showFooterMessage ? "footer" : "initial"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white text-primary px-4 py-3 rounded-2xl shadow-xl text-sm font-medium max-w-xs"
        >
          {showFooterMessage ? (
            <>
              💡 We do provide <strong>end-user training</strong>. Do reach out to us for more details!
            </>
          ) : (
            <>
              👋 Hey there! Join our <strong>WhatsApp Community</strong> for free resources, updates, and cyber tips!
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <motion.a
        href="https://wa.me/your-whatsapp-group-link"
        target="_blank"
        rel="noopener noreferrer"
        animate={
          scrollDir === "down"
            ? { scale: 1.15, rotate: [0, 5, -5, 0], filter: "drop-shadow(0 0 10px #00bcd4)" }
            : { scale: 0.95, rotate: 0, filter: "drop-shadow(0 0 4px #00bcd4)" }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-20 h-20 rounded-full bg-white flex items-center justify-center animate-[breath_4s_ease-in-out_infinite]"
      >
        {/* Your SVG bot face here */}

        {/* BOT SVG */}
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="70" height="70">
 <defs>
   <radialGradient id="bodyGradient" cx="50%" cy="50%" r="50%">
     <stop offset="0%" stopColor="#ccf2ff" />
     <stop offset="100%" stopColor="#00bcd4" />
   </radialGradient>
   <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
     <feGaussianBlur stdDeviation="4" result="coloredBlur" />
     <feMerge>
       <feMergeNode in="coloredBlur" />
       <feMergeNode in="SourceGraphic" />
     </feMerge>
   </filter>
 </defs>

 <g transform="translate(100, 100)" filter="url(#glow)">
   <circle r="70" fill="url(#bodyGradient)" />

   {/* Eyes */}
   <ellipse cx="-20" cy="-10" rx="10" ry="12" fill="white" />
   <ellipse cx="20" cy="-10" rx="10" ry="12" fill="white" />
   <circle cx="-20" cy="-10" r="5" fill="#001f3f">
     <animate
       attributeName="r"
       values={scrollDir === "down" ? "5;7;5" : "5;4;5"}
       dur="1.5s"
       repeatCount="indefinite"
     />
   </circle>
   <circle cx="20" cy="-10" r="5" fill="#001f3f">
     <animate
       attributeName="r"
       values={scrollDir === "down" ? "5;7;5" : "5;4;5"}
       dur="1.5s"
       repeatCount="indefinite"
     />
   </circle>

   {/* Smile */}
   <path
     d="M -25 10 Q 0 30 25 10"
     stroke="#001f3f"
     strokeWidth="3"
     fill="transparent"
     strokeLinecap="round"
   />

   {/* Antenna */}
   <line
     x1="0"
     y1="-70"
     x2="0"
     y2="-85"
     stroke="#00bcd4"
     strokeWidth="4"
   >
     <animateTransform
       attributeName="transform"
       type="translate"
       values="0,0; 0,5; 0,0"
       dur="0.8s"
       repeatCount="indefinite"
     />
   </line>
   <circle
     cx="0"
     cy="-90"
     r="6"
     fill="#00bcd4"
     stroke="#fff"
     strokeWidth="1"
   >
     <animateTransform
       attributeName="transform"
       type="translate"
       values="0,0; 0,5; 0,0"
       dur="0.8s"
       repeatCount="indefinite"
     />
   </circle>

   {/* Laptop */}
   <rect
     x="-30"
     y="30"
     rx="5"
     ry="5"
     width="60"
     height="30"
     fill="#e0f7ff"
     stroke="#00bcd4"
     strokeWidth="2"
   />
   <circle cx="0" cy="45" r="2" fill="#00bcd4" />
 </g>
</svg>

      </motion.a>
    </div>
  );
};

export default ChatBotInvite;








 













 










  
 



















 