import React, { useState, useMemo } from 'react';
import { surveyData } from './data';

function Table() {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [privacyFilter, setPrivacyFilter] = useState('all');

  const ageGroups = ['all', ...new Set(surveyData.map(item => item['Age Group']))];

  const tableData = useMemo(() => {
    return surveyData.map((item, index) => ({
      id: index + 1,
      timestamp: item['Timestamp'],
      ageGroup: item['Age Group'],
      gender: item['Gender'],
      occupation: item['Which of these best describes you?  '],
      onlineTime: item['Average time you spend online daily'],
      postingFrequency: item['How often do you post on social media?  '],
      textingStyle: item['My texting style is usually  '],
      emojiUse: item['I mostly use emojis to express  '],
      personalityTest: item['Did u take any personality tests ?'],
      personalityType: item['What is your personality type ?\n'],
      introExtro: item['I consider myself more  '],
      privacyRating: item['I value online privacy  '],
      aiAwareness: item['I was aware that AI can infer personality from my digital behaviour  '],
      aiAccuracy: item['Do you think AI personality predictions are accurate  '],
      aiEthics: item['AI inferring personality without asking is  ']
    }));
  }, []);

  const filteredAndSortedData = useMemo(() => {
    let filtered = tableData.filter(item => {
      const matchesSearch = item.introExtro.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesAge = ageFilter === 'all' || item.ageGroup === ageFilter;
      const matchesPrivacy = privacyFilter === 'all' ||
        (privacyFilter === 'high' && item.privacyRating >= 4) ||
        (privacyFilter === 'low' && item.privacyRating <= 2) ||
        (privacyFilter === 'medium' && item.privacyRating === 3);
      return matchesSearch && matchesAge && matchesPrivacy;
    });

    if (sortColumn) {
      filtered.sort((a, b) => {
        let aVal = a[sortColumn];
        let bVal = b[sortColumn];
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
        }
        aVal = String(aVal).toLowerCase();
        bVal = String(bVal).toLowerCase();
        return sortDirection === 'asc' ? (aVal < bVal ? -1 : aVal > bVal ? 1 : 0) : (aVal > bVal ? -1 : aVal < bVal ? 1 : 0);
      });
    }
    return filtered;
  }, [tableData, sortColumn, sortDirection, searchTerm, ageFilter, privacyFilter]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ column }) => {
    if (sortColumn !== column) return <span className="text-slate-600 ml-1">⇅</span>;
    return sortDirection === 'asc' ? <span className="text-amber-400 ml-1">↑</span> : <span className="text-amber-400 ml-1">↓</span>;
  };

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-400 bg-green-400/20 border-green-400/30';
    if (rating === 3) return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
    return 'text-red-400 bg-red-400/20 border-red-400/30';
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Filters and Header UI omitted for brevity (already reviewed) */}
      {/* Table Render */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-900/80 border-b border-slate-700">
            {/* ... column headers with SortIcon ... */}
          </thead>
          <tbody>
            {filteredAndSortedData.map((row, index) => (
              <tr key={row.id} className={`border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${index % 2 === 0 ? 'bg-slate-900/20' : 'bg-slate-900/40'}`}>
                {/* ... row cells ... */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
