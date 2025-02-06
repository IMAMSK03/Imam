"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // For handling images in Next.js

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-8 relative overflow-hidden pt-20">
      {/* Background Animated Elements */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Subtle Floating Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-blue-500 opacity-50 rounded-full blur-xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 opacity-40 rounded-full blur-xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Profile Picture */}
      <motion.div
        className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 mb-6 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/proimage.jpg" // Replace with your actual profile image path
          alt="Profile Picture"
          width={160}
          height={160}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        className="text-center w-full max-w-3xl relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I'm IMAM
        </motion.h1>

        <motion.p 
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I am a Full Stack Developer & AI Enthusiast with expertise in building scalable and innovative applications.
        </motion.p>

        {/* Animated Buttons (Contact Section) */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 w-40 text-center bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-500 transition hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 w-40 text-center border border-gray-300 text-gray-300 text-lg font-semibold rounded-lg shadow-md hover:border-white transition hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </main>
  );
}
