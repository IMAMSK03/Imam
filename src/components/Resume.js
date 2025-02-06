"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-800 text-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Resume
      </motion.h2>
      <p className="text-gray-300 mb-6">
        Download my resume to learn more about my experience and skills.
      </p>
      <a
        href="/resume.pdf" // Change this to your actual resume file path
        download="Imam_Resume.pdf"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
      >
        Download Resume
      </a>
    </section>
  );
}
