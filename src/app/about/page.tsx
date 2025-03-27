'use client';

import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      {/* Header Section with Gradient Background */}
      <div className="relative pt-36 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--accent-1)]/10 blur-[80px]" />
        
        <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
          <div className="text-center">
            <h4 className="text-[var(--primary)] font-medium mb-2 uppercase tracking-wider">About Me</h4>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">AI Solutions </span>
              <span>Expert</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mx-auto mt-4 mb-8 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Personal Story Section */}
      <div className="bg-[var(--surface)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-10 relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Personal Story</h2>
            
            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p>
                I bridge the gap between cutting-edge AI technology and real-world business applications. As a full-stack AI developer and AI & automations expert, I've spent the last 2 years mastering the practical applications of AI tools while continuing intensive technical training at my full-stack AI dev bootcamp.
              </p>
              <p>
                My journey began with a simple realization: most founders & businesses waste countless hours on tasks that could be automated. This insight drove me to master both the technical and practical aspects of AI implementation, from Next.js & TypeScript to advanced prompt engineering & workflow optimization.
              </p>
            </div>
            
            {/* Background design elements */}
            <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-1)] opacity-10 blur-xl" />
          </div>
        </div>
      </div>
      
      {/* My Approach Section */}
      <div className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-[var(--primary)] font-medium mb-2 uppercase tracking-wider">How I Work</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Approach</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              I don't just implement AI solutions – I ensure they deliver real business value. My technical expertise spans:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card p-8 border-none hover-scale">
              <div className="rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent-1)] p-1 w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]"></span>
                  Full-stack AI Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]"></span>
                  NextJS & TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]"></span>
                  Custom AI Integration
                </li>
              </ul>
            </Card>
            
            <Card className="glass-card p-8 border-none hover-scale">
              <div className="rounded-lg bg-gradient-to-br from-[var(--accent-1)] to-[var(--primary)] p-1 w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-1)]"></span>
                  Workflow Automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-1)]"></span>
                  Advanced Prompt Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-1)]"></span>
                  UI/UX Design with Figma
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Why Work With Me Section */}
      <div className="bg-[var(--surface)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-[var(--primary)] font-medium mb-2 uppercase tracking-wider">Benefits</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Me?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 text-center hover-scale">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-1)] flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Expertise + Business Acumen</h3>
              <p className="text-[var(--text-secondary)]">I combine deep technical knowledge with a clear understanding of business objectives.</p>
            </div>
            
            <div className="glass-card p-8 text-center hover-scale">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--primary)] flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-[var(--text-secondary)]">Every business is unique. I create tailored AI solutions that address your specific challenges.</p>
            </div>
            
            <div className="glass-card p-8 text-center hover-scale">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-1)] flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Future-Focused</h3>
              <p className="text-[var(--text-secondary)]">As an active AI developer and consultant, I stay ahead of industry trends to bring you cutting-edge solutions.</p>
            </div>
            
            <div className="glass-card p-8 text-center hover-scale">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--primary)] flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Results-Driven</h3>
              <p className="text-[var(--text-secondary)]">My success is measured by your outcomes – increased efficiency, reduced costs, and improved operations.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Current Focus Section */}
      <div className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[var(--accent-1)]/10 blur-[80px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-[var(--primary)] font-medium mb-2 uppercase tracking-wider">What's Next</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Focus</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              I'm currently expanding my expertise through advanced training in:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border border-[rgba(255,255,255,0.05)] hover-scale">
              <div className="mb-6">
                <div className="gradient-text font-bold text-3xl">01</div>
              </div>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]"></span>
                  Python Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]"></span>
                  AI Agent Creation
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 border border-[rgba(255,255,255,0.05)] hover-scale">
              <div className="mb-6">
                <div className="gradient-text font-bold text-3xl">02</div>
              </div>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-1)]"></span>
                  Automations Implementation
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-1)]"></span>
                  Large Language Model Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-[var(--surface)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Let's Chat!</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              Looking to optimize your business operations with AI? Let's discuss how we can leverage technology to achieve your goals.
            </p>
            <a 
              href="https://calendly.com/huzaifainspires/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium inline-flex items-center gap-2 hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300"
            >
              Schedule Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            
            {/* Background design elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-1)] opacity-10 blur-xl" />
            <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent-1)] opacity-10 blur-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
