'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Terminal, 
  Cpu, 
  Brain, 
  Zap, 
  ChevronRight, 
  ArrowRight,
  ExternalLink,
  Code
} from 'lucide-react';
import { AnimatedText } from './components/AnimatedText';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="bg-[var(--background)] text-[var(--text-primary)]">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent-1)]/10 blur-[80px]" />
        </div>
        
        <div className="container mx-auto px-6 pt-36 pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-md bg-[var(--surface)]/30 border border-[rgba(255,255,255,0.05)]"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]"></span>
                <span className="text-[var(--text-secondary)] font-medium">AI Developer | AI & Automations Consultant</span>
              </motion.div>
              
              {isLoaded ? (
                <AnimatedText />
              ) : (
                <div className="h-32"></div>
              )}
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[var(--text-secondary)] text-lg md:text-xl max-w-lg"
              >
                Empowering you & your business with intelligent automation and AI integration
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a 
                  href="https://calendly.com/huzaifainspires/discovery-call" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300 flex items-center gap-2 group"
                >
                  Book Free Consultation 
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <Link 
                  href="/about" 
                  className="px-6 py-3 rounded-full border border-[var(--surface-light)] hover:border-[var(--primary)] text-[var(--text-primary)] font-medium transition-colors duration-300 flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-1/2 z-10"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Brain, title: "AI Solutions", desc: "Custom chatbots, models & integrations", color: "from-[#FF5722] to-[#FF8A65]", delay: 0.1 },
                  { icon: Cpu, title: "Automation", desc: "Workflow optimization", color: "from-[#FFA000] to-[#FFD54F]", delay: 0.2 },
                  { icon: Code, title: "Development", desc: "Full-stack implementation", color: "from-[#FF3D00] to-[#FF8A65]", delay: 0.3 },
                  { icon: Zap, title: "Consulting", desc: "Strategic AI adoption", color: "from-[#F57C00] to-[#FFB74D]", delay: 0.4 }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + item.delay }}
                    className="glass-card p-6 hover-scale"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-[var(--text-secondary)]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Featured Projects Section */}
      <div className="bg-[var(--surface)] py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-[var(--primary)] font-medium mb-2">SHOWCASE</h4>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>
            <Link href="#" className="text-[var(--primary)] font-medium flex items-center gap-2 group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Dashboard */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/image.png" 
                  alt="Financial Dashboard" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">Financial Dashboard</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">A comprehensive financial dashboard with authentication, CRUD operations, and data visualization.</p>
                <Link href="https://fin-dash-acme.vercel.app/" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* AI Readiness Quiz */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/ai-readiness-quiz.png" 
                  alt="AI Readiness Quiz" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">AI Readiness Quiz</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">A quiz that assesses AI-readiness with personalized roadmap and automation opportunities.</p>
                <Link href="https://ai-readiness-quiz.vercel.app/" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* AI ROI Calculator */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/roi-calculator.png" 
                  alt="AI ROI Calculator" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">AI ROI Calculator</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">ROI calculator showing time and cost savings from automating customer service.</p>
                <Link href="https://roi-calculator-frontend-nine.vercel.app/" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* TimeTamer */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/timetamer.png" 
                  alt="TimeTamer" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">TimeTamer</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">A landing page for an AI-powered productivity analysis tool.</p>
                <Link href="https://timetamer-lp.vercel.app/" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* SportHub by Nike */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/sporthub.png" 
                  alt="SportHub by Nike" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">SportHub by Nike</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">Multi-vendor marketplace for authentic sportswear distribution connecting verified sellers.</p>
                <Link href="https://sporthub-h.vercel.app/" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* AI SpeakSensei */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/speaksensei.png" 
                  alt="AI SpeakSensei" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">AI SpeakSensei</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">AI app that analyzes your speaking/video & scores your skills with actionable insights.</p>
                <Link href="https://app-speaksensei.vercel.app" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Complete Unit Converter */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/complete-uc.png" 
                  alt="Complete Unit Converter" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">Complete Unit Converter</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">A unit converter app covering all units for daily, scientific, and engineering needs.</p>
                <Link href="https://complete-uc.streamlit.app" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Password Prof */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/password-prof.png" 
                  alt="Password Prof" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">Password Prof</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">Password analyzer & secure custom password generator for strong, safe credentials.</p>
                <Link href="https://password-prof.streamlit.app" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Secure Your Data */}
            <div className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/secure-your-data.png" 
                  alt="Secure Your Data" 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">Secure Your Data</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">Streamlit-based secure data storage/retrieval with passkey encryption, attempt limits, and reauthorization.</p>
                <Link href="https://secure-your-data.streamlit.app" className="flex items-center text-[var(--primary)] font-medium gap-2 group/link">
                  View Project <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--accent-1)]/10 blur-[80px]" />
        
        <div className="container mx-auto px-6">
          <div className="relative glass-card p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-xl">
                  Schedule a free consultation to discuss how AI and automation can streamline your processes and boost productivity.
                </p>
              </div>
              <div>
                <a 
                  href="https://calendly.com/huzaifainspires/discovery-call" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                >
                  Book Your Free Consultation
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-1)] opacity-10 blur-xl" />
            <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-1)] opacity-10 blur-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}