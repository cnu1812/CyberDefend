import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: "Cybersecurity Beginner Course",
    instructor: "Manoj Kumar",
    startDate: "TBA",
    duration: "6 weeks",
    level: "Beginner",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    slug: "ethical-hacking-fundamentals",
  },
  {
    title: "Cybersecurity Intermediate Course",
    instructor: "Manoj Kumar",
    startDate: "TBA",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    slug: "cybersecurity-intermediate-course",
  },
  {
    title: "Cybersecurity Masterclass",
    instructor: "Manoj Kumar",
    startDate: "TBA",
    duration: "10 weeks",
    level: "Advanced",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    slug: "cybersecurity-masterclass",
  },
];

const CourseSlider = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollNext = () => {
      if (!slider) return;
      slider.scrollLeft += 350;
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }
    };

    intervalRef.current = setInterval(scrollNext, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Pause scrolling on hover
  const pauseAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resumeAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (!sliderRef.current) return;
      sliderRef.current.scrollLeft += 350;
      if (
        sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
        sliderRef.current.scrollWidth
      ) {
        sliderRef.current.scrollLeft = 0;
      }
    }, 3000);
  };

  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Upcoming <span className="text-accent">Courses</span>
        </motion.h2>

        <div
          ref={sliderRef}
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
          className="flex gap-6 pb-6 cursor-grab overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory'
          }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="min-w-[300px] md:min-w-[350px] bg-darkBg rounded-lg overflow-hidden snap-center transform transition-transform hover:scale-110"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={`${course.image}?auto=format&fit=crop&w=350&q=80`}
                  alt={course.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-125"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{course.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-400">
                    <User size={16} className="mr-2" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {course.startDate}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-2" />
                    {course.duration}
                  </div>
                </div>

                {/* Enroll Now Button with Navigate */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/courses')}
                  className="w-full bg-accent text-primary py-2 rounded-md font-bold transition-colors duration-300 hover:bg-accent/90"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSlider;
