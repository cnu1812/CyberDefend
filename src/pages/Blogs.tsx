// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, User, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom"; // Import routing

// const blogs = [
//   {
//     title: "The Rise of Ransomware: How to Protect Your Organization",
//     author: "John Smith",
//     date: "March 1, 2024",
//     category: "Cybersecurity",
//     image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
//     slug: "ransomware",
//     excerpt:
//       "Learn about the latest ransomware threats and effective protection strategies...",
//   },
//   {
//     title: "Zero Trust Architecture: A Modern Security Approach",
//     author: "Sarah Johnson",
//     date: "March 5, 2024",
//     category: "Network Security",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//     slug: "zerotrust",
//     excerpt: "Understand the principles of Zero Trust and how to implement it...",
//   },
//   {
//     title: "Cloud Security Best Practices for 2024",
//     author: "Mike Wilson",
//     date: "March 10, 2024",
//     category: "Cloud Security",
//     image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
//     slug: "cloud-security",
//     excerpt:
//       "Essential security measures for protecting your cloud infrastructure...",
//   },
//   {
//     title: "The Impact of AI on Cybersecurity",
//     author: "Emma Davis",
//     date: "March 12, 2024",
//     category: "AI & Security",
//     image: "https://images.unsplash.com/photo-1555066931-4365735651c2",
//     slug: "ai-cybersecurity",
//     excerpt:
//       "Exploring how artificial intelligence is transforming cybersecurity...",
//   },
// ];

// const Blogs = () => {
//   return (
//     <div className="pt-16 min-h-screen bg-primary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12"
//         >
//           <h1 className="text-4xl font-bold text-white mb-6">
//             Latest <span className="text-accent">Insights</span>
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog, index) => (
//               <motion.article
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-darkBg rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
//               >
//                 <div className="relative">
//                   <img
//                     src={`${blog.image}?auto=format&fit=crop&w=500&q=80`}
//                     alt={blog.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
//                     {blog.category}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h2 className="text-xl font-bold text-white mb-4 hover:text-accent transition-colors">
//                     {blog.title}
//                   </h2>

//                   <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
//                     <div className="flex items-center">
//                       <User size={14} className="mr-1" />
//                       {blog.author}
//                     </div>
//                     <div className="flex items-center">
//                       <Calendar size={14} className="mr-1" />
//                       {blog.date}
//                     </div>
//                   </div>

//                   <p className="text-gray-400 mb-6">{blog.excerpt}</p>

//                   <Link to={`/blogs/${blog.slug}`}>
//                     <motion.button
//                       whileHover={{ x: 10 }}
//                       className="flex items-center text-accent hover:text-accent/80 transition-colors"
//                     >
//                       Read More
//                       <ArrowRight size={16} className="ml-2" />
//                     </motion.button>
//                   </Link>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import routing

const blogs = [
  {
    title: "The Rise of Ransomware: How to Protect Your Organization",
    author: "John Smith",
    date: "March 1, 2024",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    slug: "ransomware",
    excerpt: "Learn about the latest ransomware threats and effective protection strategies...",
  },
  {
    title: "Zero Trust Architecture: A Modern Security Approach",
    author: "Sarah Johnson",
    date: "March 5, 2024",
    category: "Network Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    slug: "zerotrust",
    excerpt: "Understand the principles of Zero Trust and how to implement it...",
  },
  {
    title: "Cloud Security Best Practices for 2024",
    author: "Mike Wilson",
    date: "March 10, 2024",
    category: "Cloud Security",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    slug: "cloud-security",
    excerpt: "Essential security measures for protecting your cloud infrastructure...",
  },
  {
    title: "The Impact of AI on Cybersecurity",
    author: "Emma Davis",
    date: "March 12, 2024",
    category: "AI & Security",
    image: "https://images.unsplash.com/photo-1555066931-4365735651c2",
    slug: "ai-cybersecurity",
    excerpt: "Exploring how artificial intelligence is transforming cybersecurity...",
  },
];

const Blogs = () => {
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
            Latest <span className="text-accent">Insights</span>
          </h1>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-12 h-1 bg-accent mx-auto rounded-full"
          />
        </motion.div>

        {/* Blog Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 200, 100, 0.5)" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-darkBg rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative group">
                <motion.img
                  src={`${blog.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {blog.category}
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h2
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xl font-bold text-white mb-4 hover:text-accent transition-colors"
                >
                  {blog.title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-4 text-gray-400 text-sm mb-4"
                >
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {blog.date}
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="text-gray-400 mb-6"
                >
                  {blog.excerpt}
                </motion.p>

                <Link to={`/blogs/${blog.slug}`}>
                  <motion.button
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;

