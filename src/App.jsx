import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Table from './Table';

function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-400/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <span className="text-slate-900 font-bold text-xl">🧠</span>
            </div>
            <span className="text-amber-400 font-bold text-xl tracking-tight">Digital Psyche</span>
          </Link>
          
          <div className="flex gap-2">
            <Link 
              to="/" 
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/30' 
                  : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/dashboard') 
                  ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/30' 
                  : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/data" 
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/data') 
                  ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/30' 
                  : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'
              }`}
            >
              Data Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        {/* Animated background pattern */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(251 191 36 / 0.3) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
            animation: 'pulse 8s ease-in-out infinite'
          }}></div>
        </div>
        
        <Navigation />
        
        <main className="relative pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/data" element={<Table />} />
          </Routes>
        </main>
        
        <footer className="relative mt-20 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm">
                Research Project • AI & Digital Behavior Analysis
              </p>
              <p className="text-slate-500 text-sm">
                Survey Data from January 2026
              </p>
            </div>
          </div>
        </footer>
        
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.3; }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
