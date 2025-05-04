import React from "react";
import { motion } from "framer-motion";

interface VideoCardProps {
  videoId: string;
  title: string;
}

const videos: VideoCardProps[] = [
  { videoId: "f43yMGmScRU", title: "Glimpse of CyberDefend" },
  { videoId: "OFwwhAzqSz8", title: "What is CyberDefend?" },
  { videoId: "ksWtzaK9dEw", title: "Course Demo" }
];

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title }) => (
  <motion.div
    className="relative rounded-xl overflow-hidden border-2 border-accent bg-darkBg shadow-[0_0_20px_#00FF9F33] group transition-all duration-500 ease-in-out hover:scale-[1.04] hover:rotate-[0.4deg] hover:shadow-[0_0_30px_#00FF9F55] hover:border-[#00FF9F]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="relative pt-[56.25%] bg-black group-hover:animate-pulse">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-t-xl"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-4 bg-darkBg text-lightGray transition-colors duration-300 group-hover:bg-[#1c1c1c]">
      <h3 className="text-lg font-semibold relative">
        {title}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-accent to-[#0ff] rounded-full group-hover:w-full transition-all duration-500"></span>
      </h3>
    </div>
  </motion.div>
);

const VideoGallery: React.FC = () => {
  return (
    <section className="relative bg-primary py-16 px-4 sm:px-8 overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#00FF9F11_1px,_transparent_1px)] [background-size:20px_20px] pointer-events-none animate-pulse opacity-10"></div>

      {/* Scrolling Ticker */}
      <div className="overflow-hidden whitespace-nowrap mb-8">
      <div className="inline-block animate-scroll text-accent text-md sm:text-lg font-mono uppercase tracking-wider">
      
          <span className="mx-4">💥 Secure Your Future</span>
          <span className="mx-4">🚨 Learn Ethical Hacking</span>
          <span className="mx-4">🛡️ Master Threat Intelligence</span>
          <span className="mx-4">🔐 Become CyberSmart</span>

          
          <span className="mx-4">💥 Secure Your Future</span>
          <span className="mx-4">🚨 Learn Ethical Hacking</span>
          <span className="mx-4">🛡️ Master Threat Intelligence</span>
          <span className="mx-4">🔐 Become CyberSmart</span>
          
        </div>
      </div>

      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-accent text-center mb-12 relative inline-block after:absolute after:w-24 after:h-[3px] after:bg-gradient-to-r after:from-accent after:to-[#0ff] after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🎥 Video Previews
      </motion.h2>

      {/* Video Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto animate-slide-up">
        {videos.map((video) => (
          <VideoCard key={video.videoId} {...video} />
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
