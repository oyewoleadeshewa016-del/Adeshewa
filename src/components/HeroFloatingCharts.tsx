import React from 'react';
import { motion } from 'motion/react';

export const HeroFloatingCharts: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Calm, soft ambient background glows - cool and understated */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/4 -translate-y-1/4 w-80 h-80 bg-indigo-500/8 dark:bg-indigo-500/6 rounded-full blur-[100px]" />

      {/* Floating Shape 1: Mini Bar Chart in cool steel/slate tones */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-[8%] hidden xl:flex flex-col gap-1 p-3 rounded-xl bg-slate-900/60 dark:bg-[#111625]/80 border border-slate-700/40 dark:border-white/10 backdrop-blur-md shadow-lg"
      >
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          <span className="text-[10px] font-mono text-slate-400">Quarterly Trends</span>
        </div>
        <div className="flex items-end gap-1.5 h-10 w-24 px-1">
          <div className="w-2.5 bg-slate-600 rounded-t h-[35%]" />
          <div className="w-2.5 bg-[#38BDF8]/60 rounded-t h-[60%]" />
          <div className="w-2.5 bg-[#38BDF8] rounded-t h-[85%]" />
          <div className="w-2.5 bg-indigo-400/70 rounded-t h-[50%]" />
          <div className="w-2.5 bg-emerald-400/80 rounded-t h-[75%]" />
        </div>
      </motion.div>

      {/* Floating Shape 2: Donut Chart Ring in calm sky blue and slate */}
      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 50, repeat: Infinity, ease: 'linear' }
        }}
        className="absolute bottom-20 left-[4%] hidden lg:block opacity-40 hover:opacity-80 transition-opacity"
      >
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="26" fill="none" stroke="currentColor" strokeWidth="5" className="text-slate-800/60 dark:text-white/10" />
          <circle
            cx="36"
            cy="36"
            r="26"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="5"
            strokeDasharray="115 50"
            strokeDashoffset="15"
            strokeLinecap="round"
          />
          <circle
            cx="36"
            cy="36"
            r="26"
            fill="none"
            stroke="#6366F1"
            strokeWidth="5"
            strokeDasharray="35 130"
            strokeDashoffset="-100"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Floating Shape 3: Trend Line Wave */}
      <motion.div
        animate={{
          x: [-6, 6, -6],
          y: [-6, 6, -6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-24 right-[5%] hidden xl:block p-2.5 rounded-xl bg-slate-900/50 dark:bg-[#111625]/70 border border-slate-700/40 dark:border-white/10 backdrop-blur-sm"
      >
        <div className="text-[10px] font-mono text-slate-400 mb-1 flex items-center justify-between gap-3">
          <span>Model Accuracy</span>
          <span className="text-emerald-400 font-medium">96.8%</span>
        </div>
        <svg width="96" height="28" viewBox="0 0 96 28" fill="none">
          <path
            d="M2 24 C 18 24, 22 13, 38 15 C 54 17, 62 6, 78 8 C 84 9, 88 4, 94 4"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="94" cy="4" r="2.5" fill="#38BDF8" />
        </svg>
      </motion.div>
    </div>
  );
};
