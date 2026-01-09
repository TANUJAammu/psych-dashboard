import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="mb-20 animate-fadeIn">
        <div className="inline-block mb-6 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full">
          <span className="text-amber-400 text-sm font-semibold tracking-wide">RESEARCH PROJECT 2026</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent leading-tight">
          Do AI Inferences Match Human Reality?
        </h1>
        
        <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
          Exploring the intersection of artificial intelligence, digital behavior, and personality psychology through empirical survey research.
        </p>
      </div>

      {/* Main Content Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* About AI & Digital Behavior */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-14 h-14 bg-amber-400/20 rounded-xl flex items-center justify-center mb-6">
            <span className="text-3xl">🤖</span>
          </div>
          
          <h2 className="text-2xl font-bold text-amber-400 mb-4">AI & Digital Footprints</h2>
          
          <p className="text-slate-300 mb-4 leading-relaxed">
            Modern AI systems increasingly analyze digital behaviors to infer psychological traits, from emoji usage patterns to posting frequency. Machine learning algorithms claim to predict personality types, emotional states, and behavioral tendencies from social media activity.
          </p>
          
          <p className="text-slate-300 mb-4 leading-relaxed">
            These technologies power personalization engines, content recommendation systems, and targeted advertising. But how accurate are these AI predictions when compared to how people actually perceive themselves?
          </p>
          
          <p className="text-slate-300 leading-relaxed">
            This research investigates whether algorithmic personality inferences align with human self-perception and explores the ethical implications of AI-driven psychological profiling.
          </p>
        </div>

        {/* Survey Purpose */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-14 h-14 bg-amber-400/20 rounded-xl flex items-center justify-center mb-6">
            <span className="text-3xl">📊</span>
          </div>
          
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Survey Methodology</h2>
          
          <p className="text-slate-300 mb-4 leading-relaxed">
            We collected 29 anonymized survey responses during January 2026, gathering data on digital behavior patterns, communication styles, personality self-assessments, and attitudes toward AI inference systems.
          </p>
          
          <div className="bg-slate-800/50 rounded-lg p-4 mb-4 border border-slate-700">
            <h3 className="text-amber-400 font-semibold mb-3">Data Points Collected:</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Demographics (age group, gender, occupation)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Online behavior (platforms, posting frequency, interaction style)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Communication patterns (texting style, emoji usage)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Personality self-assessment (MBTI types, introversion/extroversion)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Privacy concerns and AI awareness ratings (1-5 scale)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Attitudes toward AI personality inference</span>
              </li>
            </ul>
          </div>
          
          <p className="text-slate-300 leading-relaxed">
            Participants provided informed consent and all responses remain anonymous. No personally identifiable information was collected.
          </p>
        </div>
      </div>

      {/* Ethics Discussion */}
      <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30 mb-16">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-2xl">⚠️</span>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-red-400 mb-4">Ethical Considerations</h2>
            
            <p className="text-slate-300 mb-4 leading-relaxed">
              AI personality inference raises significant ethical concerns. When algorithms analyze our digital footprints without explicit consent, they create psychological profiles that may influence the content we see, the opportunities we're offered, and how we're perceived by institutions and corporations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-red-500/20">
                <h3 className="text-red-400 font-semibold mb-2 text-sm">Privacy Invasion</h3>
                <p className="text-slate-400 text-sm">Inferring intimate psychological traits without permission violates personal boundaries and autonomy.</p>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4 border border-red-500/20">
                <h3 className="text-red-400 font-semibold mb-2 text-sm">Algorithmic Bias</h3>
                <p className="text-slate-400 text-sm">AI systems may perpetuate stereotypes or make inaccurate predictions based on limited behavioral data.</p>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4 border border-red-500/20">
                <h3 className="text-red-400 font-semibold mb-2 text-sm">Consent & Transparency</h3>
                <p className="text-slate-400 text-sm">Many users remain unaware that their digital behaviors are being analyzed for psychological profiling.</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Our research findings show that <span className="text-amber-400 font-semibold">only 55% of respondents were highly aware</span> that AI can infer personality from digital behavior, highlighting a significant transparency gap. While some see personalization benefits, others view unsolicited personality inference as an invasion of privacy. This study aims to contribute to informed public discourse on AI ethics and digital rights.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-200 mb-6">Explore the Data</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Dive into interactive visualizations and detailed survey responses to understand how people perceive AI personality inference and how their digital behaviors correlate with self-reported traits.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            to="/dashboard" 
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-amber-400/30 transform hover:scale-105 transition-all duration-300"
          >
            View Dashboard →
          </Link>
          
          <Link 
            to="/data" 
            className="px-8 py-4 bg-slate-800 text-amber-400 font-bold rounded-xl border border-amber-400/30 hover:bg-slate-700 hover:border-amber-400 transform hover:scale-105 transition-all duration-300"
          >
            Browse Raw Data
          </Link>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Home;
