"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-400">
          IMAM
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#education" className="hover:text-blue-400 transition">Education</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#resume" className="hover:text-blue-400 transition">Resume</a>
          <a href="#certifications" className="hover:text-blue-400 transition">Certifications</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-800 py-4"
          >
            <a 
              href="#home" 
              className="block text-center py-2 hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block text-center py-2 hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#education" 
              className="block text-center py-2 hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
            <a 
              href="#projects" 
              className="block text-center py-2 hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              
              Projects
            </a>
            <a 
              href="#resume" 
              className="block text-center py-2 hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
               Certifications
            </a>
            <a 
              href="#Certifications" 
              className="block text-center py-2 hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
            <a 
              href="#contact" 
              className="block text-center py-2 hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
