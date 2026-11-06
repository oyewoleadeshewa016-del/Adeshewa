import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, RefreshCw, Zap } from 'lucide-react';

export const DataDoodleEasterEgg: React.FC = () => {
  const initialData = [32, 58, 45, 82, 64, 95, 76, 88];
  const [dataPoints, setDataPoints] = useState<number[]>(initialData);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const average = Math.round(dataPoints.reduce((a, b) => a + b, 0) / dataPoints.length);
  const maxVal = Math.max(...dataPoints);

  const handleRandomize = () => {
    const randomized = dataPoints.map(() => Math.floor(Math.random() * 65) + 30);
    setDataPoints(randomized);
  };

  const handleInjectAnomaly = () => {
    const anomalySet = [40, 48, 52, 98, 30, 25, 45, 50];
    setDataPoints(anomalySet);
  };

  const handleReset = () => {
    setDataPoints(initialData);
  };

  const handleBarInteract = (index: number, delta: number) => {
    setDataPoints((prev) => {
      const next = [...prev];
      next[index] = Math.max(15, Math.min(100, next[index] + delta));
      return next;
    });
  };

  return (
    <div className="my-16 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-100/90 dark:bg-[#111625] border border-slate-300/60 dark:border-white/10 shadow-xl backdrop-blur-md">
        
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-[#38BDF8] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                  Interactive Data Doodle (Easter Egg)
                </span>
                <span className="text-[10px] font-mono text-[#38BDF8] bg-sky-500/10 px-2 py-0.5 rounded">
                  Live Reactivity
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Hover, tweak bars, or inject anomalies to see metrics recalculate in real time.
              </p>
            </div>
          </div>

          {/* Quick interactive buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomize}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-white bg-slate-200 dark:bg-white/5 hover:bg-[#0284C7] rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Simulate</span>
            </button>
            <button
              onClick={handleInjectAnomaly}
              className="px-3 py-1.5 text-xs font-medium text-[#38BDF8] hover:text-white bg-sky-500/10 hover:bg-[#0284C7] rounded-lg transition-colors flex items-center gap-1 cursor-pointer border border-sky-500/20"
            >
              <Zap className="w-3 h-3" />
              <span>Anomaly</span>
            </button>
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 px-2 py-1 cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Doodle Chart Canvas */}
        <div className="relative h-44 sm:h-52 w-full pt-4 pb-2 px-2 flex items-end justify-between gap-2 sm:gap-4 bg-white/40 dark:bg-[#0A0E17]/60 rounded-xl border border-slate-200/60 dark:border-white/5">
          {/* Average Reference Line */}
          <div
            className="absolute left-0 right-0 border-b border-dashed border-[#38BDF8]/40 pointer-events-none transition-all duration-300 flex items-center justify-end pr-2"
            style={{ bottom: `${average}%` }}
          >
            <span className="text-[9px] font-mono text-[#38BDF8] bg-[#0A0E17] px-1 rounded border border-[#38BDF8]/20">
              Mean: {average}
            </span>
          </div>

          {/* Animated Interactive Bars in cool tones */}
          {dataPoints.map((value, idx) => {
            const isHovered = hoveredIndex === idx;
            const isMax = value === maxVal;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
              >
                {/* Value tooltip on hover */}
                <span
                  className={`absolute -top-7 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded transition-all duration-200 ${
                    isHovered
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 opacity-100 scale-105'
                      : 'opacity-0 scale-90'
                  }`}
                >
                  {value}
                </span>

                {/* The Bar */}
                <motion.div
                  animate={{ height: `${value}%` }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                  className={`w-full max-w-[36px] rounded-t-md transition-colors duration-200 ${
                    isMax
                      ? 'bg-[#38BDF8]'
                      : isHovered
                      ? 'bg-[#0284C7]'
                      : 'bg-[#38BDF8]/50'
                  }`}
                  onClick={() => handleBarInteract(idx, 10)}
                  title="Click to boost bar +10"
                />

                {/* Column Index Label */}
                <span className="mt-2 text-[10px] font-mono text-slate-400">
                  D{idx + 1}
                </span>
              </div>
            );
          })}
        </div>

        {/* Live DAX Expression Readout */}
        <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="text-slate-400">
            <span className="text-[#38BDF8]">DAX Measure: </span>
            <code>
              DIVIDE(SUM(Values), COUNTROWS(Metrics)) = <strong className="text-slate-900 dark:text-white tabular-nums">{average}</strong>
            </code>
          </div>

          <div className="text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Click any bar to tweak values</span>
          </div>
        </div>

      </div>
    </div>
  );
};
