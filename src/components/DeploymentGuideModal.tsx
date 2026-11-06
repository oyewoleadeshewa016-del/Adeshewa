import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cloud } from 'lucide-react';
import { DEPLOYMENT_GUIDE } from '../data/portfolioData';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({ isOpen, onClose }) => {
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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F1422] text-slate-100 border border-slate-700/60 shadow-2xl z-10 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-[#38BDF8]" />
              <h2 className="font-heading font-bold text-xl text-white">
                {DEPLOYMENT_GUIDE.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close guide"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-5 text-xs sm:text-sm text-slate-300">
            {DEPLOYMENT_GUIDE.steps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <span className="w-5 h-5 rounded-full bg-sky-500/15 text-[#38BDF8] flex items-center justify-center text-xs font-mono">
                    {idx + 1}
                  </span>
                  <span>{step.title}</span>
                </div>
                <p className="text-slate-300 leading-relaxed pl-7">
                  {step.desc}
                </p>
              </div>
            ))}

            {/* Terminal Command Quick Reference */}
            <div className="p-4 rounded-xl bg-black/40 border border-slate-800 font-mono text-xs space-y-2">
              <span className="text-slate-400 block font-sans font-semibold text-xs text-white">
                Commands to Build & Test Locally:
              </span>
              <p className="text-emerald-400"># 1. Test build locally</p>
              <p className="text-slate-200">npm run build</p>
              <p className="text-emerald-400 mt-2"># 2. Preview production build</p>
              <p className="text-slate-200">npm run preview</p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors cursor-pointer"
            >
              Got It, Thanks!
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
