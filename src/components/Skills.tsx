import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Database, FileSpreadsheet, Code2 } from 'lucide-react';
import { SKILLS_DATA, COMPETENCIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider mb-2">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Tools and analytical paradigms I deploy daily.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From wrangling raw SQL records to architecting performant Power BI models and DAX calculations.
          </p>
        </div>

        {/* 4 Core Primary Tools: Cards with animated progress rings & highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SKILLS_DATA.map((skill, index) => {
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-100/80 dark:bg-[#111625] border border-slate-200 dark:border-white/5 hover:border-[#38BDF8]/40 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon + Animated Circular Progress Ring */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-[#38BDF8] flex items-center justify-center transition-transform group-hover:scale-105">
                      {getSkillIcon(skill.iconName)}
                    </div>

                    {/* Circular Progress Ring in cool ice-blue */}
                    <div className="relative flex items-center justify-center">
                      <svg width="60" height="60" className="transform -rotate-90">
                        {/* Background Track */}
                        <circle
                          cx="30"
                          cy="30"
                          r="24"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          fill="transparent"
                          className="text-slate-300 dark:text-white/10"
                        />
                        {/* Animated Progress Ring */}
                        <motion.circle
                          cx="30"
                          cy="30"
                          r="24"
                          stroke="#38BDF8"
                          strokeWidth="3.5"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 24}
                          initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
                          whileInView={{
                            strokeDashoffset: (2 * Math.PI * 24) * (1 - skill.proficiency / 100)
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute text-xs font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>

                  {/* Skill Name & Summary */}
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-1.5">
                  {skill.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-[#38BDF8] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Competencies Grid */}
        <div className="mt-8 pt-10 border-t border-slate-200/60 dark:border-white/10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                Core Analytical Disciplines
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Methodological standards applied throughout all dashboard and data pipelines.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">6 Core Disciplines</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPETENCIES.map((comp, idx) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#111625]/60 border border-slate-200/60 dark:border-white/5 hover:border-[#38BDF8]/30 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                    {comp.name}
                  </h4>
                  <span className="text-[10px] font-mono text-[#38BDF8]">0{idx + 1}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {comp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
