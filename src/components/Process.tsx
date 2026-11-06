import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Filter, Layers, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Database className="w-5 h-5" />;
      case 1:
        return <Filter className="w-5 h-5" />;
      case 2:
        return <Layers className="w-5 h-5" />;
      case 3:
        return <BarChart3 className="w-5 h-5" />;
      case 4:
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider mb-2">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Workflow & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            How I transform ambiguous datasets into high-confidence decisions.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A disciplined, repeatable 5-step data engineering and business intelligence framework.
          </p>
        </div>

        {/* Desktop 5-Step Horizontal Flow Tabs */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? 'bg-slate-100 dark:bg-[#111625] border-[#38BDF8] shadow-lg shadow-sky-500/5'
                    : 'bg-transparent border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#38BDF8]' : 'text-slate-400'}`}>
                    {step.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-sky-500/15 text-[#38BDF8]' : 'text-slate-400'}`}>
                    {getStepIcon(idx)}
                  </div>
                </div>
                <h3 className={`font-heading font-semibold text-sm ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                  {step.title}
                </h3>
                {isActive && (
                  <motion.div
                    layoutId="activeProcessIndicator"
                    className="absolute -bottom-[2px] left-4 right-4 h-[2px] bg-[#38BDF8]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-10 rounded-2xl bg-slate-100/90 dark:bg-[#111625] border border-slate-200 dark:border-white/10 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-sky-500/15 text-[#38BDF8] flex items-center justify-center font-mono font-bold text-sm">
                  {PROCESS_STEPS[activeStep].step}
                </span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                  Phase 0{activeStep + 1} Execution
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Tools Used unboxed row */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Core Tooling:</span>
                {PROCESS_STEPS[activeStep].toolsUsed.map((tool, tIdx) => (
                  <span key={tool} className="text-slate-700 dark:text-slate-200 font-mono">
                    {tIdx > 0 && <span className="text-slate-400 mr-2">·</span>}
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Key Deliverable Card */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-white dark:bg-[#0A0E17] border border-slate-200/80 dark:border-slate-800">
              <p className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2 font-semibold">
                Guaranteed Output
              </p>
              <h4 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                {PROCESS_STEPS[activeStep].deliverable}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Every step produces an audited, documented artifact, ensuring complete reproducibility from ingestion to executive presentation.
              </p>

              {/* Step Navigation Controls */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous Step
                </button>
                <button
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="text-xs font-semibold text-[#38BDF8] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Mobile Accordion View for smaller devices */}
        <div className="lg:hidden mt-6 space-y-3">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`w-full p-4 rounded-xl text-left border flex items-center justify-between cursor-pointer ${
                activeStep === idx
                  ? 'border-[#38BDF8] bg-slate-100 dark:bg-[#111625]'
                  : 'border-slate-200 dark:border-white/5 bg-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#38BDF8]">{step.step}</span>
                <span className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                  {step.title}
                </span>
              </div>
              <span className="text-xs text-slate-400">View</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
