import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface Course {
  title: string;
  instructor: string;
  startDate: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  image: string;
  slug: string;
}

const allCourses: Course[] = [
  {
    title: "Cybersecurity Beginner Course",
    instructor: "Alice Smith",
    startDate: "May 1, 2025",
    duration: "6 weeks",
    level: "Beginner",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    slug: "ethical-hacking-fundamentals",
  },
  {
    title: "Cybersecurity Intermediate Course",
    instructor: "Bob Johnson",
    startDate: "May 15, 2025",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    slug: "cybersecurity-intermediate-course",
  },
  {
    title: "Cybersecurity Masterclass",
    instructor: "Charlie Wilson",
    startDate: "June 1, 2025",
    duration: "10 weeks",
    level: "Advanced",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    slug: "cybersecurity-masterclass",
  },
];

const categories = ["All", "Cybersecurity", "Web Security", "Malware", "Cloud Security", "Network Security"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="pt-16 min-h-screen bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Cybersecurity Journey Starts Here
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            We’ve structured our learning path into three dynamic tracks:{" "}
            <span className="text-accent font-semibold">Beginner</span>,{" "}
            <span className="text-accent font-semibold">Intermediate</span>, and{" "}
            <span className="text-accent font-semibold">Masterclass</span>. All courses are taught by{" "}
            <span className="text-accent font-semibold">industry experts</span> to ensure real-world readiness.
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-12 h-1 bg-accent mx-auto rounded-full"
          />
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-darkBg text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-darkBg text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-darkBg text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </motion.div>
        </motion.div>

        {/* Course Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 200, 100, 0.5)" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-darkBg rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <img src={`${course.image}?auto=format&fit=crop&w=500&q=80`} alt={course.title} className="w-full h-48 object-cover" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {course.level}
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{course.title}</h3>
                <div className="space-y-2 mb-6 text-gray-400">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {course.startDate}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-2" />
                    {course.category}
                  </div>
                </div>

                <Link to={`/courses/${course.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-accent text-primary py-2 rounded-md font-bold hover:bg-accent/90 transition-colors"
                  >
                    View Course Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 bg-darkBg p-8 rounded-lg text-center text-white shadow-md border border-accent"
        >
          <h3 className="text-2xl font-bold mb-2">🚀 More Domains Coming Soon!</h3>
          <p className="text-gray-300">
            Get ready for courses in Web Security, Malware Analysis, Blue Team Ops, and more — all taught by top cybersecurity professionals.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
