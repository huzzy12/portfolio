import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-12 md:p-12 pt-34">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto space-y-8 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About</h1>
        
        {/* Personal Story Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 text-center">Personal Story</h2>
          <p className="text-gray-300 leading-relaxed">
            I bridge the gap between cutting-edge AI technology and real-world business applications. As a full-stack AI developer and AI & automations expert, I've spent the last 2 years mastering the practical applications of AI tools while continuing intensive technical training at my full-stack AI dev bootcamp.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My journey began with a simple realization: most founders & businesses waste countless hours on tasks that could be automated. This insight drove me to master both the technical and practical aspects of AI implementation, from Next.js & TypeScript to advanced prompt engineering & workflow optimization.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 text-center">My Approach</h2>
          <p className="text-gray-300 mb-4 text-center">
            I don't just implement AI solutions – I ensure they deliver real business value. My technical expertise spans:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 bg-zinc-900 border-purple-500/20">
              <ul className="space-y-2 text-gray-300">
                <li>• Full-stack AI Development</li>
                <li>• NextJS & TypeScript</li>
                <li>• Custom AI Integration</li>
              </ul>
            </Card>
            <Card className="p-6 bg-zinc-900 border-purple-500/20">
              <ul className="space-y-2 text-gray-300">
                <li>• Workflow Automation</li>
                <li>• Advanced Prompt Engineering</li>
                <li>• UI/UX Design with Figma</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 text-center">Why Work With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-center">Technical Expertise + Business Acumen</h3>
              <p className="text-gray-300">I combine deep technical knowledge with a clear understanding of business objectives.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-center">Custom Solutions</h3>
              <p className="text-gray-300">Every business is unique. I create tailored AI solutions that address your specific challenges.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-center">Future-Focused</h3>
              <p className="text-gray-300">As an active AI developer and consultant, I stay ahead of industry trends to bring you cutting-edge solutions.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-center">Results-Driven</h3>
              <p className="text-gray-300">My success is measured by your outcomes – increased efficiency, reduced costs, and improved operations.</p>
            </div>
          </div>
        </div>

        {/* Current Focus Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 text-center">Current Focus</h2>
          <p className="text-gray-300 mb-4 text-center">
            I'm currently expanding my expertise through advanced training in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 bg-zinc-900 border-purple-500/20">
              <ul className="space-y-2 text-gray-300">
                <li>• Python Development</li>
                <li>• AI Agent Creation</li>
              </ul>
            </Card>
            <Card className="p-6 bg-zinc-900 border-purple-500/20">
              <ul className="space-y-2 text-gray-300">
                <li>• Automations Implementation</li>
                <li>• Large Language Model Integration</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Let's Chat!</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Looking to optimize your business operations with AI? Let's discuss how we can leverage technology to achieve your goals.
          </p>
          <a 
            href="https://calendly.com/huzaifainspires/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-md">
              Schedule Your Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
