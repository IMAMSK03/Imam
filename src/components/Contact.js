"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Contact Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>

        {/* Social Media Links */}
        <motion.div 
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/shaik-imam-mahabu-38b95828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:text-blue-400 transition transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>

          {/* GitHub */}
          <motion.a 
            href="https://github.com/IMAMSK03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-3xl hover:text-gray-400 transition transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>

          {/* Twitter */}
          <motion.a 
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-3xl hover:text-blue-300 transition transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
