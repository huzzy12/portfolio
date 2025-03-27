'use client';

import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-[var(--surface)] relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[var(--primary)]/5 blur-[80px]" />
      <div className="absolute top-0 right-1/4 w-[200px] h-[200px] rounded-full bg-[var(--accent-1)]/5 blur-[60px]" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <h2 className="text-2xl font-bold gradient-text">M. Huzaifa Madni</h2>
            </div>
            <p className="text-[var(--text-secondary)] max-w-md">
              Empowering businesses with intelligent AI solutions and strategic automations
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex space-x-4">
              <a 
                href="https://github.com/huzzy12" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors hover-scale"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/huzaifainspires" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors hover-scale"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/huzaifainspires" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors hover-scale"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors hover-scale"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a 
              href="https://calendly.com/huzaifainspires/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300 text-sm"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
        
        {/* Center quick links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--text-primary)]">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--text-primary)]">Services</h3>
            <ul className="space-y-2">
              {[
                'AI Development', 
                'Workflow Automation', 
                'Custom Integrations',
                'AI Consulting'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--text-primary)]">Let's Connect</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              Ready to transform your business with AI? Let's discuss how I can help.
            </p>
            <a 
              href="https://calendly.com/huzaifainspires/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              Schedule a call <ArrowUp className="w-4 h-4 rotate-45" />
            </a>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[var(--surface-light)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--text-secondary)] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} M. Huzaifa Madni. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors hover-scale"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};