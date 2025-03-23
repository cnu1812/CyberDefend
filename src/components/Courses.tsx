import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

const courses = [
  {
    title: 'Ethical Hacking Fundamentals',
    instructor: 'John Smith',
    startDate: 'March 15, 2024',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
  },
  {
    title: 'Network Security Advanced',
    instructor: 'Sarah Johnson',
    startDate: 'March 20, 2024',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
  },
  {
    title: 'Cloud Security Masterclass',
    instructor: 'Mike Wilson',
    startDate: 'April 3, 2024',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    title: 'Cloud Security Intermediate',
    instructor: 'Mike Wilson',
    startDate: 'April 4, 2024',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    title: 'Cloud Security Beginner',
    instructor: 'Mike Wilson',
    startDate: 'April 5, 2024',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  }
];

const Courses = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Upcoming <span className="text-accent">Courses</span>
        </motion.h2>

        <div className="flex overflow-x-auto gap-6 pb-6 snap-x">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="min-w-[300px] md:min-w-[350px] bg-darkBg rounded-lg overflow-hidden snap-center"
            >
              <img
                src={`${course.image}?auto=format&fit=crop&w=350&q=80`}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-accent text-primary py-2 rounded-md font-bold"
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

export default Courses;