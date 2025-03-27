'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mounted, setMounted] = useState(false);
  const fullText = "Building Custom AI Solutions That Scale";
  const cursorRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let currentIndex = 0;
    const typingSpeed = 80; // Speed in milliseconds
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        
        // Add a blinking effect to cursor after typing is done
        if (cursorRef.current) {
          cursorRef.current.classList.add('animate-blink');
        }
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [mounted]);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Split the title into parts for separate animations
  const titleParts = [
    { text: "Building Custom ", className: "gradient-text" },
    { text: "AI Solutions", className: "block" },
    { text: "That Scale", className: "block" }
  ];

  if (!mounted) {
    return (
      <div className="h-32 w-full"></div>
    );
  }

  return (
    <div>
      {isTyping ? (
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="gradient-text">{text.slice(0, 17)}</span>
          <span className="block">{text.slice(17, 32)}</span>
          <span className="block">{text.slice(32)}</span>
          <span 
            ref={cursorRef}
            className="text-[var(--primary)] inline-block ml-1 animate-pulse"
          >
            |
          </span>
        </h1>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {titleParts.map((part, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className={part.className}
              >
                {part.text}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      )}
    </div>
  );
};

// Add this to your globals.css if not already there
// @keyframes blink {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0; }
// }
// 
// .animate-blink {
//   animation: blink 1s infinite;
// }