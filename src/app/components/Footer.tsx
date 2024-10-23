import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">M. Huzaifa Madni</h2>
            <p className="text-gray-400 mt-2">Empowering businesses with AI solutions</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/huzzy12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/huzaifainspires" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/huzaifainspires" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} M. Huzaifa Madni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};