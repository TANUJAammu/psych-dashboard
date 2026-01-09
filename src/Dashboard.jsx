import React, { useState, useMemo } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { surveyData } from './data';

function Dashboard() {
  const [activeChart, setActiveChart] = useState(null);
  
  // Color palette
  const COLORS = {
    primary: ['#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e'],
    accent: ['#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412'],
    cool: ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'],
    warm: ['#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b']
  };

  // 1. Posting Frequency vs Privacy Concern
  const postingPrivacyData = useMemo(() => {
    const grouped = {};
    
    surveyData.forEach(item => {
      const posting = item['How often do you post on social media?  '];
      const privacy = item['I value online privacy  '];
      
      if (!grouped[posting]) {
        grouped[posting] = { posting, total: 0, privacySum: 0 };
      }
      grouped[posting].total += 1;
      grouped[posting].privacySum += privacy;
    });
    
    return Object.values(grouped).map(item => ({
      posting: item.posting,
      avgPrivacy: (item.privacySum / item.total).toFixed(2),
      count: item.total
    })).sort((a, b) => b.count - a.count);
  }, []);

  // 2. Emoji Use Distribution
  const emojiData = useMemo(() => {
    const grouped = {};
    
    surveyData.forEach(item => {
      const emoji = item['I mostly use emojis to express  '];
      grouped[emoji] = (grouped[emoji] || 0) + 1;
    });
    
    return Object.entries(grouped).map(([name, value]) => ({
      name,
      value
    })).sort((a, b) => b.value - a.value);
  }, []);

  // 3. AI Belief vs AI Awareness (Scatter)
  const aiBeliefAwarenessData = useMemo(() => {
    return surveyData.map((item, index) => ({
      awareness: item['I was aware that AI can infer personality from my digital behaviour  '],
      accuracy: item['Do you think AI personality predictions are accurate  '],
      name: `Respondent ${index + 1}`
    }));
  }, []);

  // 4. Personality Type Distribution (based on introversion/extroversion)
  const personalityTypeData = useMemo(() => {
    const grouped = {};
    
    surveyData.forEach(item => {
      const type = item['I consider myself more  '];
      grouped[type] = (grouped[type] || 0) + 1;
    });
    
    return Object.entries(grouped).map(([name, value]) => ({
      name,
      value,
      percentage: ((value / surveyData.length) * 100).toFixed(1)
    }));
  }, []);

  // 5. Texting Style Distribution
  const textingStyleData = useMemo(() => {
    const grouped = {};
    
    surveyData.forEach(item => {
      const style = item['My texting style is usually  '];
      grouped[style] = (grouped[style] || 0) + 1;
    });
    
    return Object.entries(grouped).map(([name, value]) => ({
      name,
      value
    })).sort((a, b) => b.value - a.value);
  }, []);

  // 6. AI Ethics Opinion Distribution
  const aiEthicsData = useMemo(() => {
    const grouped = {};
    
    surveyData.forEach(item => {
      const opinion = item['AI inferring personality without asking is  '];
      grouped[opinion] = (grouped[opinion] || 0) + 1;
    });
    
    return Object.entries(grouped).map(([name, value]) => ({
      name,
      value,
      percentage: ((value / surveyData.length) * 100).toFixed(1)
    }));
  }, []);

  // 7. Average ratings comparison
  const avgRatingsData = useMemo(() => {
    const privacySum = surveyData.reduce((sum, item) => sum + item['I value online privacy  '], 0);
    const awarenessSum = surveyData.reduce((sum, item) => sum + item['I was aware that AI can infer personality from my digital behaviour  '], 0);
    const accuracySum = surveyData.reduce((sum, item) => sum + item['Do you think AI personality predictions are accurate  '], 0);
    
    const total = surveyData.length;
    
    return [
      { category: 'Privacy Value', rating: (privacySum / total).toFixed(2) },
      { category: 'AI Awareness', rating: (awarenessSum / total).toFixed(2) },
      { category: 'AI Accuracy Belief', rating: (accuracySum / total).toFixed(2) }
    ];
  }, []);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-amber-400/30 rounded-lg p-3 shadow-xl">
          <p className="text-amber-400 font-semibold mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-slate-300 text-sm">
              {entry.name}: <span className="text-amber-400 font-semibold">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const ChartCard = ({ title, description, children, id }) => (
    <div 
      className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300 ${
        activeChart === id ? 'border-amber-400 shadow-lg shadow-amber-400/20' : 'border-slate-700/50 hover:border-amber-400/50'
      }`}
      onMouseEnter={() => setActiveChart(id)}
      onMouseLeave={() => setActiveChart(null)}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-amber-400 mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
      {children}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full">
          <span className="text-amber-400 text-sm font-semibold tracking-wide">DATA VISUALIZATION</span>
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Survey Analytics Dashboard
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Interactive visualizations of {surveyData.length} survey responses exploring digital behavior and AI personality inference
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-400/30">
          <div className="text-3xl font-bold text-amber-400 mb-1">{surveyData.length}</div>
          <div className="text-slate-400 text-sm">Total Responses</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30">
          <div className="text-3xl font-bold text-blue-400 mb-1">
            {avgRatingsData[0].rating}
          </div>
          <div className="text-slate-400 text-sm">Avg Privacy Value</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
          <div className="text-3xl font-bold text-purple-400 mb-1">
            {avgRatingsData[1].rating}
          </div>
          <div className="text-slate-400 text-sm">Avg AI Awareness</div>
        </div>
        <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-400/30">
          <div className="text-3xl font-bold text-red-400 mb-1">
            {avgRatingsData[2].rating}
          </div>
          <div className="text-slate-400 text-sm">Avg AI Accuracy</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Chart 1: Posting Frequency vs Privacy */}
        <ChartCard
          id="chart1"
          title="Posting Frequency vs Privacy Concern"
          description="How posting habits correlate with privacy values (1-5 scale)"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={postingPrivacyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="posting" 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                angle={-20}
                textAnchor="end"
                height={80}
              />
              <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="avgPrivacy" fill="#fbbf24" name="Avg Privacy Rating" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 2: Emoji Usage */}
        <ChartCard
          id="chart2"
          title="Emoji Usage Purposes"
          description="What users express through emoji usage"
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={emojiData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name.substring(0, 15)}... (${(percent * 100).toFixed(0)}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {emojiData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.primary[index % COLORS.primary.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 3: AI Awareness vs Accuracy Belief */}
        <ChartCard
          id="chart3"
          title="AI Awareness vs Accuracy Belief"
          description="Correlation between knowing about AI inference and believing in its accuracy"
        >
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                type="number" 
                dataKey="awareness" 
                name="AI Awareness" 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                label={{ value: 'AI Awareness', position: 'bottom', fill: '#94a3b8' }}
              />
              <YAxis 
                type="number" 
                dataKey="accuracy" 
                name="Accuracy Belief" 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                label={{ value: 'Accuracy Belief', angle: -90, position: 'left', fill: '#94a3b8' }}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
              <Scatter name="Respondents" data={aiBeliefAwarenessData} fill="#fbbf24" />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 4: Personality Types */}
        <ChartCard
          id="chart4"
          title="Personality Type Distribution"
          description="Self-reported introversion, extroversion, or ambiversion"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={personalityTypeData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
              <YAxis 
                dataKey="name" 
                type="category" 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8' }}
                width={100}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#f59e0b" name="Count" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 flex gap-2 flex-wrap">
            {personalityTypeData.map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 px-3 py-1 rounded-full border border-amber-400/30">
                <span className="text-slate-300 text-sm">{item.name}: </span>
                <span className="text-amber-400 font-semibold text-sm">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Chart 5: Texting Style */}
        <ChartCard
          id="chart5"
          title="Texting Style Distribution"
          description="How respondents describe their communication style"
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={textingStyleData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name.substring(0, 12)}... (${value})`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {textingStyleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.accent[index % COLORS.accent.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 6: AI Ethics Opinions */}
        <ChartCard
          id="chart6"
          title="AI Ethics: Personality Inference Opinions"
          description="How respondents view AI inferring personality without consent"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={aiEthicsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="name" 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                angle={-20}
                textAnchor="end"
                height={100}
              />
              <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#ef4444" name="Respondents" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-red-900/20 border border-red-500/30 rounded-lg p-3">
            <p className="text-red-400 text-sm">
              <span className="font-semibold">Key Finding:</span> {aiEthicsData.find(d => d.name === "Depends on usage")?.percentage || 0}% say "Depends on usage" - showing nuanced views on AI ethics
            </p>
          </div>
        </ChartCard>
      </div>

      {/* Insights Section */}
      <div className="mt-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-400/30">
        <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
          <span className="text-3xl">💡</span>
          Key Insights
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-3">Privacy Paradox</h3>
            <p className="text-slate-400 leading-relaxed">
              Respondents who post "Rarely" or "Never" show higher privacy concerns (avg {postingPrivacyData.find(d => d.posting === "Rarely")?.avgPrivacy || "N/A"}), 
              yet many remain highly engaged online through passive consumption and private messaging.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-3">Awareness Gap</h3>
            <p className="text-slate-400 leading-relaxed">
              While average AI awareness is {avgRatingsData[1].rating}/5, belief in AI accuracy is only {avgRatingsData[2].rating}/5, 
              suggesting skepticism even among informed users about the reliability of AI personality predictions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-3">Communication Styles</h3>
            <p className="text-slate-400 leading-relaxed">
              "Short and direct" dominates as the most common texting style, potentially reflecting efficiency-driven digital communication norms, 
              while emoji usage varies significantly based on purpose (mood, sarcasm, tone-softening).
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-3">Ethics Nuance</h3>
            <p className="text-slate-400 leading-relaxed">
              The majority view AI personality inference through a context-dependent lens ("Depends on usage"), 
              rather than categorically accepting or rejecting the practice, indicating sophisticated ethical reasoning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
