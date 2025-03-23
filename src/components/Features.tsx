// import React from 'react';
// import { motion } from 'framer-motion';
// import { Video, Users, Terminal, Award } from 'lucide-react';

// const features = [
//   {
//     icon: Video,
//     title: 'Live Interactive Classes',
//     description: 'Learn in real-time with industry experts'
//   },
//   {
//     icon: Users,
//     title: 'Expert Instructors',
//     description: 'Learn from cybersecurity professionals'
//   },
//   {
//     icon: Terminal,
//     title: 'Hands-on Labs',
//     description: 'Practice in real-world scenarios'
//   },
//   {
//     icon: Award,
//     title: 'Industry Certifications',
//     description: 'Get certified and career-ready'
//   }
// ];

// const Features = () => {
//   return (
//     <section className="py-20 bg-darkBg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="bg-primary p-6 rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
//             >
//               <feature.icon className="w-12 h-12 text-accent mb-4" />
//               <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
//               <p className="text-gray-400">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, Terminal, Award, Shield, Lock, Globe, Cpu } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Live Interactive Classes',
    description: 'Learn in real-time with industry experts in an engaging virtual environment.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Train with certified cybersecurity professionals who work in the field.',
  },
  {
    icon: Terminal,
    title: 'Hands-on Labs',
    description: 'Practice real-world cybersecurity challenges with simulated attacks.',
  },
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'Earn recognized certifications to boost your cybersecurity career.',
  },
  {
    icon: Shield,
    title: 'Advanced Threat Defense',
    description: 'Learn to combat cyber threats with cutting-edge defensive strategies.',
  },
  {
    icon: Lock,
    title: 'Ethical Hacking Training',
    description: 'Master penetration testing and ethical hacking techniques.',
  },
  {
    icon: Globe,
    title: 'Global Security Trends',
    description: 'Stay updated with the latest developments in cybersecurity worldwide.',
  },
  {
    icon: Cpu,
    title: 'AI & Cybersecurity',
    description: 'Explore AI-driven security techniques for next-gen protection.',
  },
];

const Features = () => {
  return (
    <section className="relative py-20 bg-darkBg overflow-hidden">
      {/* Background Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Why Choose <span className="text-accent">CyberDefend?</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105 relative group"
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>

              {/* Subtle Glow Animation */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
