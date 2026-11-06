import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle, Database, BarChart3, AlertCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0E17]/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F1422] text-slate-100 border border-slate-700/60 shadow-2xl z-10 custom-scroll"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0F1422]/95 backdrop-blur-md border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-medium text-[#38BDF8]">
                {project.category} Dashboard
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">Project Case Study</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-7">
            
            {/* Title & Tools Strip */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                {project.title}
              </h2>
              
              {/* Unboxed tools list with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Stack:</span>
                {project.tools.map((tool, idx) => (
                  <React.Fragment key={tool}>
                    {idx > 0 && <span className="text-slate-600">/</span>}
                    <span className="text-slate-300 font-mono">{tool}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* High-Resolution Dashboard Preview Image */}
            <div className="relative rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950 aspect-video shadow-inner">
              <img
                src={project.image}
                alt={`${project.title} visual dashboard interface`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center p-8 bg-[#0A0E17] text-center">
                        <div class="w-14 h-14 rounded-xl bg-sky-500/15 text-[#38BDF8] flex items-center justify-center mb-3">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                        </div>
                        <h4 class="font-heading font-semibold text-white text-base">${project.title}</h4>
                        <p class="text-xs text-slate-400 mt-1 max-w-md">${project.summary}</p>
                      </div>
                    `;
                  }
                }}
              />
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.02] border border-slate-800">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>

            {/* Business Problem */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Core Business Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-slate-800/80">
                {project.businessProblem}
              </p>
            </div>

            {/* Methodology & Analytical Steps */}
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-sm sm:text-base text-white">
                Analytical Methodology & Architecture
              </h3>
              <ul className="space-y-2">
                {project.methodology.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="font-mono text-[#38BDF8] font-bold text-xs mt-0.5">0{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Insights & Findings */}
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-sm sm:text-base text-white">
                Key Business Discoveries
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200"
                  >
                    <span className="font-semibold text-[#38BDF8]">Finding {idx + 1}: </span>
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Data Analyst: Adeshewa Damilola Oyewole
              </div>
              
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                  >
                    <Github className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
