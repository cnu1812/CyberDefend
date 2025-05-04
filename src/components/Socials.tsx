import { useState, useEffect, useRef } from "react";

// SVG Icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8">
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" className="w-8 h-8">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
  </svg>
);

// Define social media links with custom colors matching your theme
const socials = [
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/defendcyber",
    color: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
    hoverColor: "from-pink-600 via-red-600 to-yellow-600",
    shadow: "shadow-pink-500/50"
  },
  {
    name: "YouTube",
    icon: <YoutubeIcon />,
    url: "https://www.youtube.com/channel/UCQch9CrAAdWVOLP1iIxyCSQ",
    color: "bg-gradient-to-br from-red-500 to-red-700",
    hoverColor: "from-red-600 to-red-800",
    shadow: "shadow-red-500/50"
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    url: "https://x.com/defend_cyber",
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    hoverColor: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-500/50"
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/company/cyberdefend1",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    hoverColor: "from-blue-700 to-blue-900",
    shadow: "shadow-blue-600/50"
  },
  {
    name: "WhatsApp",
    icon: <WhatsappIcon />,
    url: "https://chat.whatsapp.com/LRzT7qWKvWGKlQIoElqYbF",
    color: "bg-gradient-to-br from-green-400 to-green-600",
    hoverColor: "from-green-500 to-green-700",
    shadow: "shadow-green-500/50"
  },
  {
    name: "GitHub",
    icon: <GithubIcon />,
    url: "https://github.com/cnu1812/CyberDefend",
    color: "bg-gradient-to-br from-gray-700 to-gray-900",
    hoverColor: "from-gray-800 to-black",
    shadow: "shadow-gray-700/50"
  }
];

const SocialIcon = ({ social, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const iconRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationPhase, setAnimationPhase] = useState(0);
  
  // Handle mouse move for advanced 3D effect
  const handleMouseMove = (e) => {
    if (!iconRef.current) return;
    
    const card = iconRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate distance from center (normalized from -1 to 1)
    const x = (mouseX - centerX) / (rect.width / 2);
    const y = (mouseY - centerY) / (rect.height / 2);
    
    setMousePosition({ x, y });
    
    // Calculate rotation based on mouse position with more pronounced effect
    const rotateX = y * 15; // Tilt up/down
    const rotateY = -x * 15; // Tilt left/right
    const rotateZ = (x * y) * 5; // Slight twist
    
    setRotation({ x: rotateX, y: rotateY, z: rotateZ });
  };
  
  const resetRotation = () => {
    setRotation({ x: 0, y: 0, z: 0 });
    setMousePosition({ x: 0, y: 0 });
  };
  
  // Floating animation
  useEffect(() => {
    if (!isHovered) return;
    
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 360);
    }, 30);
    
    return () => clearInterval(interval);
  }, [isHovered]);
  
  // Calculate floating motion
  const floatY = isHovered ? Math.sin(animationPhase * Math.PI / 180) * 5 : 0;
  
  // Handle click effect
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={iconRef}
      className={`relative w-24 h-24 md:w-32 md:h-32 rounded-xl flex flex-col items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 overflow-hidden group cursor-pointer ${isHovered ? `${social.shadow} z-20` : "shadow-lg z-10"}`}
      style={{
        transform: `
          perspective(1200px) 
          rotateX(${rotation.x}deg) 
          rotateY(${rotation.y}deg) 
          rotateZ(${rotation.z}deg)
          translateY(${floatY}px)
          scale(${isPressed ? 0.95 : 1})
        `,
        transition: isHovered ? "transform 0.1s ease" : "transform 0.5s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetRotation();
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* 3D layered background with depth */}
      <div className="absolute inset-0 bg-black/10 transform -translate-z-10"></div>
      <div 
        className="absolute inset-2 rounded-lg opacity-70" 
        style={{
          background: `radial-gradient(
            circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, 
            rgba(255,255,255,0.4) 0%, 
            rgba(255,255,255,0) 60%
          )`,
          transform: `translateZ(10px)`,
        }}
      ></div>
      
      {/* Moving shine effect */}
      <div 
        className="absolute inset-0 bg-white/20 w-1/2 h-full transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"
        style={{ transform: `translateZ(20px) skewX(-12deg) translateX(${isHovered ? '200%' : '-100%'})` }}
      ></div>
      
      {/* Icon with 3D pop effect */}
      <div 
        className="text-4xl md:text-5xl mb-2 text-white drop-shadow-lg relative"
        style={{
          transform: `
            translateZ(25px) 
            scale(${isHovered ? 1.1 : 1}) 
            rotateY(${isHovered ? 360 : 0}deg)
          `,
          transition: "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          filter: `drop-shadow(0 10px 8px rgb(0 0 0 / 0.3))`,
        }}
      >
        {social.icon}
      </div>
      
      {/* Name with spotlight effect */}
      <p 
        className="text-sm font-bold text-white tracking-wider relative"
        style={{
          transform: `translateZ(15px)`,
          textShadow: isHovered ? '0 0 5px rgba(255,255,255,0.7)' : 'none',
        }}
      >
        {social.name}
      </p>
      
      {/* Click ripple effect */}
      <div 
        className={`absolute inset-0 rounded-full scale-0 bg-white/30 transition-all duration-700 ease-out ${isPressed ? 'scale-150 opacity-0' : 'opacity-0 scale-0'}`}
        style={{ transform: `translateZ(5px) scale(${isPressed ? 1.5 : 0})` }}
      ></div>
      
      {/* Bottom shadow for 3D effect */}
      <div 
        className="absolute -bottom-8 left-0 right-0 mx-auto w-4/5 h-4 rounded-full opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300"
        style={{ 
          background: `radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 80%)`,
          transform: `translateY(${isHovered ? 8 : 4}px)`,
        }}
      ></div>
      
      {/* Edge highlight for depth */}
      <div 
        className="absolute inset-0 rounded-xl border border-white/20"
        style={{ transform: 'translateZ(30px)' }}
      ></div>
    </a>
  );
};

export default function Socials() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Animation when component enters viewport
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setScrollPosition(scrollTop);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax effect
  const getParallaxOffset = (idx) => {
    if (!containerRef.current) return 0;
    const baseOffset = (idx % 3) * 5;
    return scrollPosition * 0.03 + baseOffset;
  };

  return (
    <div 
      ref={containerRef}
      className="bg-primary relative py-16 px-6 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom, #0A192F, #0c1e3d)",
        minHeight: "100vh",
      }}
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/20 blur-2xl"
            style={{
              width: `${Math.random() * 10 + 5}rem`,
              height: `${Math.random() * 10 + 5}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${Math.sin((scrollPosition + i * 100) / 500) * 30}px)`,
              transition: "transform 0.5s ease",
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* 3D Grid Lines */}
      <div className="absolute inset-0 perspective-1000">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            transform: `rotateX(60deg) translateY(${scrollPosition * 0.1}px)`,
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{
            textShadow: '0 0 15px rgba(0, 255, 159, 0.6)',
            transform: `translateZ(50px)`,
          }}
        >
          <span className="text-accent">Connect</span> <span className="text-white">with Us</span>
        </h2>
        
        <p 
          className={`text-center text-lightGray max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'} transition-all delay-100`}
          style={{ backdropFilter: 'blur(5px)' }}
        >
          Follow CyberDefend across our social platforms to stay updated with the latest in cybersecurity.
        </p>
        
        {/* 3D Scene with social icons */}
        <div 
          className="flex flex-wrap justify-center gap-8 md:gap-12 perspective-1000 py-12 px-6"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {socials.map((social, idx) => (
            <div 
              key={idx} 
              className={`${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${idx * 100}ms`, 
                transitionDuration: '500ms', 
                transitionProperty: 'all',
                transform: `translateZ(${getParallaxOffset(idx)}px)`,
              }}
            >
              <SocialIcon social={social} index={idx} />
            </div>
          ))}
        </div>
        
        {/* Glowing accent line */}
        <div className="mt-16 w-1/2 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent opacity-70 rounded-full blur-sm"></div>
      </div>
      
      {/* Ambient light */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 30%, rgba(0, 255, 159, 0.15), transparent 70%)`,
        }}
      ></div>
    </div>
  );
}