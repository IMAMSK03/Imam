"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Supply Chain Management",
    description:
      "A scalable platform that streamlines supply chain operations for e-commerce businesses. It offers real-time inventory tracking, order processing, and analytics to optimize logistics.",
    tech: ["Node.js", "React.js", "MongoDB"],
  },
  {
    title: "Movie Recommendation System",
    description:
      "An AI-powered recommendation system that suggests movies based on user preferences and viewing history. It uses machine learning algorithms to provide personalized recommendations.",
    tech: ["Django", "Machine Learning", "Python"],
  },
 ,
  {
    title: "Mental Health Care Platform",
    description:
      "A digital platform that connects users with certified counselors and mental health resources. Includes features like self-assessments, appointment scheduling, and live chat support.",
    tech: ["Spring Boot", "React.js", "MySQL"],
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              <motion.h3
                className="text-xl font-bold text-blue-400 relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-300 relative z-10">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="mt-4 flex flex-wrap gap-2 relative z-10">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
