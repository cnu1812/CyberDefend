import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

// Define testimonial type
type Testimonial = {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
};

// Testimonial Data
const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    role: "Cybersecurity Analyst",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    feedback:
      "CyberDefend's courses were a game-changer! The hands-on labs and expert guidance helped me land my first cybersecurity job.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Ethical Hacker",
    image: "https://images.unsplash.com/photo-1525357816819-392d2383f351",
    feedback:
      "The real-world scenarios and challenges prepared me for my CEH certification. Absolutely worth it!",
    rating: 5,
  },
  {
    name: "Sophia Patel",
    role: "Cloud Security Engineer",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    feedback:
      "I loved the detailed cloud security module. The instructors provided clear explanations and in-depth practicals.",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-primary via-darkBg to-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Hear from <span className="text-accent">Our Students</span>
        </motion.h2>

        {/* Infinite Scrolling Testimonials (Desktop) */}
        <div className="hidden md:block overflow-hidden">
          <motion.div
            className="flex space-x-6 md:space-x-8"
            initial={{ x: "0%" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-[280px] md:w-[300px] lg:w-[320px] bg-darkBg p-5 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-accent shadow-md"
                />
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-accent">{testimonial.role}</p>
                <div className="flex mt-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>
                <p className="text-gray-400 mt-3 text-sm leading-snug">
                  {testimonial.feedback}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel for Small Screens (Mobile) */}
        <div className="md:hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-darkBg p-6 rounded-xl shadow-lg flex flex-col items-center text-center mb-6"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-accent shadow-md"
              />
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-sm text-accent">{testimonial.role}</p>
              <div className="flex mt-1 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>
              <p className="text-gray-400 mt-3 text-sm leading-snug">
                {testimonial.feedback}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Filling Bottom Space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-3">
            Ready to Start Your Cybersecurity Journey?
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Join thousands of professionals who have upgraded their skills with
            CyberDefend. Explore our courses and secure your future today!
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-primary px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors"
              >
                Browse Courses
              </motion.button>
            </Link>
            <Link to="/blogs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-darkBg text-white px-6 py-3 rounded-md border border-accent font-bold hover:bg-accent hover:text-primary transition-colors"
              >
                Blogs
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
