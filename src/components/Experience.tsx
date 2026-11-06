import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-[#38BDF8]" />;
      case 'Certification':
        return <Award className="w-4 h-4 text-[#818CF8]" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider mb-2">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Journey & Professional Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From university coursework in computer science to accredited certification and hands-on industrial internship.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Continuous vertical timeline guide line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#38BDF8]/40 via-[#818CF8]/30 to-slate-700/30" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-[#38BDF8] flex items-center justify-center shadow-lg z-10">
                    {getTimelineIcon(item.type)}
                  </div>

                  {/* Spacer for desktop 2-column alternating alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-6 rounded-2xl bg-slate-100/80 dark:bg-[#111625] border border-slate-200 dark:border-white/5 hover:border-[#38BDF8]/30 transition-all duration-300 shadow-md">
                      
                      {/* Meta bar: Type & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs font-mono text-slate-500">
                        <span className="text-[#38BDF8] font-semibold">{item.type}</span>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                        <span>{item.organization}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <MapPin className="w-3 h-3 text-[#38BDF8]" />
                          {item.location}
                        </span>
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements Bullet List */}
                      <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5 space-y-1.5">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
