import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
};

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
              className="bg-darkBg p-6 rounded-2xl shadow-lg hover:shadow-accent/30 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-accent shadow-md"
                />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-accent text-sm">{testimonial.role}</p>

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

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-gray-300 mt-4 text-sm leading-relaxed"
                >
                  “{testimonial.feedback}”
                </motion.p>
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
