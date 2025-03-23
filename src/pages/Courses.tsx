// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search, Filter, Calendar, Clock, User, BookOpen } from 'lucide-react';
// import { Link } from "react-router-dom";


// const allCourses = [
//   {
//     title: "Ethical Hacking Fundamentals",
//     instructor: "John Smith",
//     startDate: "March 15, 2024",
//     duration: "8 weeks",
//     level: "Beginner",
//     category: "Ethical Hacking",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
//     slug: "ethical-hacking-fundamentals",
//   },
//   {
//     title: "Network Security Advanced",
//     instructor: "Sarah Johnson",
//     startDate: "March 20, 2024",
//     duration: "10 weeks",
//     level: "Advanced",
//     category: "Network Security",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
//     slug: "network-security-advanced",
//   },
//   {
//     title: "Cloud Security Masterclass",
//     instructor: "Mike Wilson",
//     startDate: "April 1, 2024",
//     duration: "12 weeks",
//     level: "Intermediate",
//     category: "Cloud Security",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
//     slug: "cloud-security-masterclass",
//   },
// ];


// const categories = ['All', 'Ethical Hacking', 'Network Security', 'Cloud Security', 'Web Security', 'Malware'];
// const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

// const Courses = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedLevel, setSelectedLevel] = useState('All');

//   const filteredCourses = allCourses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
//     const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
//     return matchesSearch && matchesCategory && matchesLevel;
//   });

//   return (
//     <div className="pt-16 min-h-screen bg-primary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl font-bold text-white mb-6">
//             Explore Our <span className="text-accent">Courses</span>
//           </h1>
          
//           {/* Search and Filters */}
//           <div className="flex flex-col md:flex-row gap-4 mb-8">
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-darkBg text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
//               />
//             </div>
            
//             <div className="flex gap-4">
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="bg-darkBg text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
//               >
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
              
//               <select
//                 value={selectedLevel}
//                 onChange={(e) => setSelectedLevel(e.target.value)}
//                 className="bg-darkBg text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
//               >
//                 {levels.map(level => (
//                   <option key={level} value={level}>{level}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Course Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    

// {filteredCourses.map((course, index) => (
//   <motion.div
//     key={index}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: index * 0.1 }}
//     className="bg-darkBg rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
//   >
//     <div className="relative">
//       <img
//         src={`${course.image}?auto=format&fit=crop&w=500&q=80`}
//         alt={course.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
//         {course.level}
//       </div>
//     </div>

//     <div className="p-6">
//       <h3 className="text-xl font-bold text-white mb-4">{course.title}</h3>
//       <div className="space-y-2 mb-6">
//         <div className="flex items-center text-gray-400">
//           <User size={16} className="mr-2" />
//           {course.instructor}
//         </div>
//         <div className="flex items-center text-gray-400">
//           <Calendar size={16} className="mr-2" />
//           {course.startDate}
//         </div>
//         <div className="flex items-center text-gray-400">
//           <Clock size={16} className="mr-2" />
//           {course.duration}
//         </div>
//         <div className="flex items-center text-gray-400">
//           <BookOpen size={16} className="mr-2" />
//           {course.category}
//         </div>
//       </div>
//       <Link to={`/courses/${course.slug}`}>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full bg-accent text-primary py-2 rounded-md font-bold hover:bg-accent/90 transition-colors"
//         >
//           View Course Details
//         </motion.button>
//       </Link>
//     </div>
//   </motion.div>
// ))}

//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const allCourses = [
  {
    title: "Ethical Hacking Fundamentals",
    instructor: "John Smith",
    startDate: "March 15, 2024",
    duration: "8 weeks",
    level: "Beginner",
    category: "Ethical Hacking",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    slug: "ethical-hacking-fundamentals",
  },
  {
    title: "Network Security Advanced",
    instructor: "Sarah Johnson",
    startDate: "March 20, 2024",
    duration: "10 weeks",
    level: "Advanced",
    category: "Network Security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    slug: "network-security-advanced",
  },
  {
    title: "Cloud Security Masterclass",
    instructor: "Mike Wilson",
    startDate: "April 1, 2024",
    duration: "12 weeks",
    level: "Intermediate",
    category: "Cloud Security",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    slug: "cloud-security-masterclass",
  },
];

const categories = ["All", "Ethical Hacking", "Network Security", "Cloud Security", "Web Security", "Malware"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
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
          <h1 className="text-4xl font-bold text-white mb-6">
            Explore Our <span className="text-accent">Courses</span>
          </h1>
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
      </div>
    </div>
  );
};

export default Courses;
