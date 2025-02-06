"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2024",
  },
  {
    title: "Red Hat Certified Enterprise Application Developer",
    organization: "Red Hat",
    date: "2024",
  },
  {
    title: "Salesforce Associate AI",
    organization: "Salesforce",
    date: "2024",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 bg-gray-900 text-white text-center">
      {/* Title with Animation */}
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certifications
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        These certifications validate my expertise in cloud computing, enterprise application development, and AI.
      </motion.p>

      {/* Certifications List */}
      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="w-80 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white">{cert.title}</h3>
            <p className="text-blue-300 mt-2">{cert.organization}</p>
            <p className="text-gray-400 mt-1">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
