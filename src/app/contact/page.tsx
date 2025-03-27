'use client'

import { Calendar, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      {/* Header Section with Gradient Background */}
      <div className="relative pt-36 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[var(--accent-1)]/10 blur-[80px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h4
              className="text-[var(--primary)] font-medium mb-2 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Connect
            </motion.h4>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="gradient-text">Get in touch</span> 
              <span className="block mt-2">with me</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to revolutionize your business with AI? Whether you have questions about custom AI solutions, automation, workforce training or need expert consulting, I'm here to help.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Options Section */}
      <div className="bg-[var(--surface)] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Option 1 */}
              <motion.div 
                className="glass-card p-8 text-center hover-scale"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
                <p className="text-[var(--text-secondary)] mb-6">Book a free 30-minute consultation to discuss your AI and automation needs.</p>
                <a 
                  href="https://calendly.com/huzaifainspires/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium inline-block hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300"
                >
                  Book Free Consultation
                </a>
              </motion.div>
              
              {/* Option 2 */}
              <motion.div 
                className="glass-card p-8 text-center hover-scale"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Send an Email</h3>
                <p className="text-[var(--text-secondary)] mb-6">Got a specific question or inquiry? Reach out directly to my inbox.</p>
                <a 
                  href="mailto:huzaifainfluences@gmail.com"
                  className="px-6 py-3 rounded-full border border-[var(--primary)] text-[var(--primary)] font-medium inline-block hover:bg-[var(--primary)]/10 transition-all duration-300"
                >
                  Email Me
                </a>
              </motion.div>
              
              {/* Option 3 */}
              <motion.div 
                className="glass-card p-8 text-center hover-scale"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Connect on LinkedIn</h3>
                <p className="text-[var(--text-secondary)] mb-6">Let's connect professionally and discuss how we can collaborate.</p>
                <a 
                  href="https://linkedin.com/in/huzaifainspires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-[var(--primary)] text-[var(--primary)] font-medium inline-block hover:bg-[var(--primary)]/10 transition-all duration-300"
                >
                  Connect on LinkedIn
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--accent-1)]/10 blur-[80px]" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto glass-card p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business with AI?</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Let's explore how we can empower your business with intelligent technology. Schedule a call today!
            </p>
            <a 
              href="https://calendly.com/huzaifainspires/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium inline-block hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300"
            >
              Schedule Your Free Consultation
            </a>
            
            {/* Background design elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-1)] opacity-10 blur-xl" />
            <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-1)] opacity-10 blur-lg" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}