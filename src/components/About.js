"use client";

import { motion } from "framer-motion";

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const waveVariant = {
  hidden: { rotate: 0 },
  visible: {
    rotate: [0, -20, 20, -20, 0],
    transition: { duration: 1, repeat: Infinity },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-bold mb-6 text-blue-400"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          About Me{" "}
          <motion.span
            className="ml-2 text-4xl inline-block"
            variants={waveVariant}
            initial="hidden"
            animate="visible"
          >
            👋
          </motion.span>
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
        >
          I am a dedicated Full Stack Developer and Artificial Intelligence enthusiast with hands-on experience in developing innovative and user-focused solutions. My technical expertise includes working with technologies like Spring Boot, React.js, and Django, as well as databases such as MySQL. I have successfully delivered projects like an e-commerce supply chain management platform, a movie recommendation system, and a stock management application 
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-4"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
        >
          {["Spring Boot", "React.js", "Django", "MySQL", "AI & ML", "Full Stack Development"].map(
            (skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:scale-110 transition"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
