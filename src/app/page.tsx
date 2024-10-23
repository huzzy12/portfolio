import Image from 'next/image';
import Link from 'next/link';
import { Terminal, Cpu, Brain, Zap, ChevronRight } from 'lucide-react';
import { AnimatedText } from './components/AnimatedText';

export default function Home() {
  return (
    <div className="bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section with Services */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block bg-purple-900/30 rounded-lg px-4 py-2 mb-4">
              <span className="text-purple-400">AI Developer | AI & Automations Consultant</span>
            </div>
            
            <AnimatedText />
            
            <p className="text-gray-400 text-lg md:text-xl">
              Empowering you & your business with intelligent automation and AI integration
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://calendly.com/huzaifainspires/discovery-call" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium flex items-center gap-2 text-white no-underline"
              >
                Book Consultation <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, title: "AI Solutions", desc: "Custom chatbots, models & integrations" },
                { icon: Cpu, title: "Automation", desc: "Workflow optimization" },
                { icon: Terminal, title: "Development", desc: "Full-stack implementation" },
                { icon: Zap, title: "Consulting", desc: "Strategic AI adoption" }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                  <item.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link href="https://fin-dash-git-main-huzaifas-projects-bd0d2a1f.vercel.app/" className="block">
              <div className="border border-white/20 rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-all">
                <Image 
                  src="/image.png" 
                  alt="Financial Dashboard" 
                  width={600} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Financial Dashboard</h3>
                  <p className="text-gray-400">A financial dashboard that has:

A public home page.
A login page.
Dashboard pages that are protected by authentication.
The ability for users to add, edit, and delete invoices.
The dashboard also has an accompanying database.</p>
                </div>
              </div>
            </Link>
             {/* Add more project cards here */}
          </div>
        </section>
      </div>
    </div>
  );
}