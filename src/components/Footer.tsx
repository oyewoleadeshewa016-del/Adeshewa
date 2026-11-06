import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenGuide: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/60 dark:border-white/10 bg-slate-50 dark:bg-[#070A12] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Wordmark & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-heading font-bold text-slate-900 dark:text-white text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-xs font-mono text-[#38BDF8]">Data Analyst</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <button
              onClick={onOpenResume}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Curriculum Vitae
            </button>
            <button
              onClick={onOpenGuide}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Deployment Guide
            </button>
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-[#38BDF8] transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#38BDF8] transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Right: Back to top button */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300/60 dark:hover:bg-white/10 rounded-xl transition-all active:scale-95 border border-slate-300/40 dark:border-white/5 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200/40 dark:border-white/5 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Adeshewa Damilola Oyewole. Built with React, Tailwind CSS, and precision data modeling.</p>
        </div>
      </div>
    </footer>
  );
};
