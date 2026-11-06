import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, TIMELINE_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
        
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0E17]/85 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-slate-900 border border-slate-300 shadow-2xl z-10 print:m-0 print:p-0 print:border-none print:shadow-none"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden">
            <span className="text-xs font-mono font-medium text-slate-500">
              Curriculum Vitae · {PERSONAL_INFO.name}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close CV preview"
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-6 sm:p-10 space-y-6 text-left">
            
            {/* Header: Name & Contact */}
            <div className="border-b border-slate-200 pb-6">
              <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-[#0284C7] mt-1">
                Data Analyst · Power BI Developer · SQL Problem Solver
              </p>
              
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-mono">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>GitHub: github.com/oyewoleadeshewa016-del</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 border-b border-slate-200 pb-1">
                Professional Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {PERSONAL_INFO.tagline} Detail-driven Computer Science undergraduate at Kwara State University, Malete, and Certified Data Analyst currently completing SIWES at Malhub, GRA Ilorin. Proven expertise in data extraction, ETL pipelines, DAX metrics, and production Power BI dashboards that clarify business-critical trends.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 border-b border-slate-200 pb-1">
                Technical Skills & Tools
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {SKILLS_DATA.map((s) => (
                  <div key={s.name} className="p-2 rounded bg-slate-50 border border-slate-200">
                    <strong className="block text-slate-900">{s.name}</strong>
                    <span className="text-[11px] text-slate-500">{s.proficiency}% Proficiency</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 mt-2">
                <strong>Methodologies:</strong> Star & Snowflake Schema Modeling, DAX Time Intelligence, Data Cleaning (ETL), Power Query, Window Functions, Exploratory Data Analysis (EDA), Executive Reporting.
              </p>
            </div>

            {/* Experience & Training */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
                Practical Experience & Certifications
              </h2>
              <div className="space-y-4">
                {TIMELINE_DATA.map((t) => (
                  <div key={t.id} className="text-xs">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-bold text-slate-900 text-sm">
                        {t.title} – <span className="font-medium text-slate-700">{t.organization}</span>
                      </h3>
                      <span className="font-mono text-slate-500">{t.period}</span>
                    </div>
                    <p className="text-slate-500 italic mt-0.5">{t.location}</p>
                    <p className="text-slate-700 mt-1">{t.description}</p>
                    <ul className="mt-1 space-y-0.5 pl-4 list-disc text-slate-600">
                      {t.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects Highlight */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 border-b border-slate-200 pb-1">
                Key Analytics Projects
              </h2>
              <div className="space-y-2 text-xs">
                {PROJECTS_DATA.slice(0, 4).map((p) => (
                  <div key={p.id}>
                    <span className="font-bold text-slate-900">{p.title} ({p.category}): </span>
                    <span className="text-slate-700">{p.summary}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Notice */}
            <div className="pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400 print:text-slate-500">
              Referees & Full Academic Transcripts available on formal request · Kwara State University, Malete
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
