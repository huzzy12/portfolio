'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">Your AI Doctor!</Link>
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={`hover:text-purple-400 transition-colors ${pathname === '/' ? 'text-purple-400' : 'text-white'}`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`hover:text-purple-400 transition-colors ${pathname === '/about' ? 'text-purple-400' : 'text-white'}`}
            >
              About
            </Link>
            <Link 
              href="/contact"
              className={`hover:text-purple-400 transition-colors ${pathname === '/contact' ? 'text-purple-400' : 'text-white'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};