import React from 'react';
import { Bot, Brain, Sparkles, Zap, MessageSquare, Shield } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
            alt="AI Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            AI Automation Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI automation. Streamline workflows, enhance productivity, and unlock new possibilities.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Powerful AI Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="Smart Automation"
              description="Automate complex tasks with our advanced AI algorithms that learn and adapt to your needs."
            />
            <FeatureCard
              icon={Zap}
              title="Real-time Processing"
              description="Process and analyze data in real-time for immediate insights and actions."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Natural Language"
              description="Communicate naturally with AI that understands context and intent."
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Security"
              description="Bank-grade security ensuring your data remains protected and private."
            />
            <FeatureCard
              icon={Sparkles}
              title="Custom Solutions"
              description="Tailored AI solutions designed to meet your specific business needs."
            />
            <FeatureCard
              icon={Bot}
              title="24/7 Support"
              description="Round-the-clock AI assistance to keep your operations running smoothly."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join thousands of companies already benefiting from our AI automation solutions.</p>
          <button className="bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;