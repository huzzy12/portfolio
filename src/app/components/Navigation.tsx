'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--surface)]/90 backdrop-blur-lg py-3 shadow-md' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">Your AI Doctor</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Contact'].map((item) => {
              const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link 
                  key={item}
                  href={itemPath} 
                  className={`relative font-medium transition-colors duration-300 ${
                    pathname === itemPath ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item}
                  {pathname === itemPath && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--primary)]" />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <a 
              href="https://calendly.com/huzaifainspires/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300"
            >
              Book a Call
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--text-primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--surface)] border-t border-[var(--surface-light)] shadow-lg py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {['Home', 'About', 'Contact'].map((item) => {
              const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link 
                  key={item}
                  href={itemPath} 
                  className={`py-2 px-4 rounded-md ${
                    pathname === itemPath 
                      ? 'bg-[var(--primary)]/10 text-[var(--primary)]' 
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface-light)]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            
            <a 
              href="https://calendly.com/huzaifainspires/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 rounded-md bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};