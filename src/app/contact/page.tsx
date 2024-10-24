'use client'

import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in touch!
        </motion.h1>

        <motion.div 
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-4 max-w-2xl text-center">
            Ready to revolutionize your business with AI? Whether you have questions about custom AI solutions, automation, workforce training or need expert consulting, I'm here to help. Let's explore how we can empower your business with intelligent tech!
          </p>

          <motion.div 
            className="flex space-x-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* X (formerly Twitter) Icon */}
            <a
              href="https://twitter.com/Huzaifainspires"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-125 hover:text-purple-500"
              aria-label="X (Twitter)"
            >
              <FaTwitter className="text-5xl" />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/huzaifainspires"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-125 hover:text-purple-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-5xl" />
            </a>

            {/* Email Icon */}
            <a
              href="mailto:huzaifainfluences@gmail.com"
              className="transition duration-300 transform hover:scale-125 hover:text-purple-500"
              aria-label="Email"
            >
              <FaEnvelope className="text-5xl" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Let's Chat</h3>
          <a 
            href="https://calendly.com/huzaifainspires/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md transition duration-300">
              Schedule Your Free Consultation
            </button>
          </a>
        </motion.div>
      </div>
    </main>
  );
}