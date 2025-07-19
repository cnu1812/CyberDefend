import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

type Testimonial = {
  name: string;
  company: string;
  image: string;
  feedback: string;
  rating: number;
  linkedin?: string;
  twitter?: string;
  github?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Abhijeet Singh",
    company: "HCL",
    image: "https://github.com/user-attachments/assets/12be74e0-e94e-4b97-81a6-d17a754d2417",
    feedback:
      "As most of my experince was in Europe working in different IT domains, I had to move back to India for parents and I was left out with no job. One of my colleague who has got job got training from Manoj Kumar Sir, and enrolled from Cyberdefend to start my cybersecurity Journey. Now I have got placed in HCL with 20+ package with guidance from Cyberdefend",
    rating: 5,
   // linkedin: "https://linkedin.com/in/alicejohnson",
   // twitter: "https://twitter.com/alicejohnsec",
   // github: "https://github.com/alicejohnson",
  },
  {
    name: "Banoth Meenakshi ",
    company: "Optiv",
    image: "https://github.com/user-attachments/assets/52b37788-d27b-44c4-a2c9-f677bc035b4a",
    feedback:
      "I’m happy to say the cyberdefend team helped me to start my cybersecurity career into Security Operations Center (SOC) especially the way Manoj Kumar Sir teaches is impressive. I’m happy to refer you folks cyberdefend to kick start your cybersecurity Journey",
    rating: 5,
    linkedin: "www.linkedin.com/in/meenakshi-banoth-2a7419351/",
    
  },
  {
    name: "⁠krishna Vamshi",
    company: "TCS",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    feedback:
      " I got training from somewhere else in cybersecurity and that wasn’t enough to crack my job. Got to hear from some of my friends about cyberdefend and within a month they have helped me to get a job in TCS working for incident Response, Kudos - Manoj Sir, Thanks for all of your support. Good Luck CyberDefend",
    rating: 5,
   // linkedin: "https://linkedin.com/in/sophiapatel",
   // twitter: "https://twitter.com/sophiasec",
  },
];

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Testimonials: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-primary via-darkBg to-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-16"
        >
          What Our <span className="text-accent">Students Say</span>
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="relative bg-darkBg/60 backdrop-blur-md border border-accent/10 p-6 rounded-3xl shadow-xl hover:shadow-accent/30 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/30 to-transparent blur-lg opacity-30 group-hover:opacity-60 transition duration-500 rounded-3xl" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-accent shadow-md group-hover:scale-105 transition"
                />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-accent text-sm">{testimonial.company}</p>

                {/* Rating Stars */}
                <motion.div
                  className="flex mt-2 text-yellow-400"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} />
                  ))}
                </motion.div>

                {/* Feedback */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-gray-300 mt-4 text-sm leading-relaxed italic px-2"
                >
                  “{testimonial.feedback}”
                </motion.p>

           {/* Social Links */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  className="flex gap-4 mt-4"
>
  {testimonial.linkedin && (
    <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        alt="LinkedIn"
        className="w-5 h-5 hover:scale-125 transition"
      />
    </a>
  )}
  {testimonial.twitter && (
    <a href={testimonial.twitter} target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
        alt="Twitter"
        className="w-5 h-5 hover:scale-125 transition filter brightness-0 invert"
      />
    </a>
  )}
  {testimonial.github && (
    <a href={testimonial.github} target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        className="w-5 h-5 hover:scale-125 transition filter brightness-0 invert"
      />
    </a>
  )}
</motion.div>


              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Boost Your Cybersecurity Career?
          </h3>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-6">
            Take the next step with CyberDefend. Our courses are tailored for real-world success.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors"
            >
              <Link to="/courses">Browse Courses</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-accent hover:text-primary transition-colors"
            >
              <Link to="/blogs">Read Blogs</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
