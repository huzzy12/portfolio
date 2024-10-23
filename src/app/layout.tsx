import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Developer & Consultant Portfolio',
  description: 'Full-stack AI developer helping businesses with AI & automation solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}