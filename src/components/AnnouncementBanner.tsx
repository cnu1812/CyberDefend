import React, { useState, useEffect } from "react";

const messages = [
  "🚀 CyberDefend’s First Batch Begins June 1st — Enroll Now and Launch Your Cybersecurity Journey! 🔐",
  "🛡️ Master Ethical Hacking & Real-World Pentesting with Our Live Hands-On Courses!",
  "📢 Early Bird Offer Ends Soon — Secure Your Spot with Exclusive Discounts!",
  "🔥 Learn from Big 4 & Fortune 500 Cybersecurity Pros — Join CyberDefend Today!"
];

const AnnouncementBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 8000); // change message every 8 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="fixed top-0 w-full bg-black border-b border-accent z-[1000] shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href="https://cyberdefend.nrichlearning.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full cursor-pointer"
      >
        <div className="overflow-hidden py-2 h-[2.5rem]">
          <div
            key={currentIndex}
            className="animate-marquee whitespace-nowrap font-bold text-sm sm:text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-pink-500 neon-glow px-4"
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
          >
            {messages[currentIndex]}
          </div>
        </div>
      </a>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
          .neon-glow {
            text-shadow: 0 0 4px #0ff, 0 0 6px #0ff, 0 0 12px #00ffff;
          }
        `}
      </style>
    </div>
  );
};

export default AnnouncementBanner;
