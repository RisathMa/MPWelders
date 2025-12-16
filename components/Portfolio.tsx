import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-industrial-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-2">Our Work</h2>
            <div className="w-20 h-1 bg-safety-500 rounded"></div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-safety-500 text-industrial-900' 
                    : 'bg-industrial-800 text-gray-300 hover:bg-industrial-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project: Project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-industrial-800 aspect-[4/3]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-safety-500 text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;