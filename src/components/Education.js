"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "KL University",
    year: "2022 - 2026",
    cgpa: "9.26",
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "APMS & Jr.College",
    year: "2020 - 2022",
    cgpa: "5.95",
  },
  {
    degree: "High School (10th Grade)",
    institution: "Jai Bharat High School",
    year: "2019 - 2020",
    cgpa: "9.8",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="inline-block overflow-hidden border-b-4 border-blue-500"
          >
            Education
          </motion.span>
        </motion.h2>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-110"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(0, 191, 255, 0.5)",
              }}
            >
              <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400">{edu.year}</p>
              <span className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-lg">
                CGPA: {edu.cgpa}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
