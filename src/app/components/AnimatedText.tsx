'use client';
import React, { useState, useEffect } from 'react';

export const AnimatedText = () => {
  const [text, setText] = useState('');
  const [mounted, setMounted] = useState(false);
  const fullText = "Building Custom AI Solutions That Scale";
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [mounted]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      {mounted ? text : fullText}<span className="animate-pulse">|</span>
    </h1>
  );
};