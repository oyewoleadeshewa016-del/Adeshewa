import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Power BI' | 'SQL' | 'Excel'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Array<'All' | 'Power BI' | 'SQL' | 'Excel'> = [
    'All',
    'Power BI',
    'SQL',
    'Excel'
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter || project.tools.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider mb-2">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Featured Data Analytics Projects
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Real-world business intelligence dashboards, statistical research, and relational SQL architectures.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-[#111625] border border-slate-300/60 dark:border-white/5 self-start md:self-end">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              const count = category === 'All' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter(p => p.category === category || p.tools.includes(category)).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-[#0284C7] text-slate-900 dark:text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#0284C7] dark:text-white/80' : 'text-slate-500'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <ProjectCard
                project={project}
                onOpenModal={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Note on data repository links */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-500">
            Click any card to explore the full case study or visit Adeshewa's GitHub repositories directly
          </p>
        </div>

      </div>

      {/* Full Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
