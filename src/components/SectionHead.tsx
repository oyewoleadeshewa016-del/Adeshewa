import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  aside?: React.ReactNode;
}

export const SectionHead: React.FC<SectionHeadProps> = ({ eyebrow, title, intro, aside }) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
    <div className="max-w-3xl min-w-0">
      <div className="flex items-center gap-3 text-brass">
        <span className="h-px w-8 bg-brass/70" aria-hidden="true" />
        <span className="label">{eyebrow}</span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 font-display text-[clamp(2.25rem,7vw,4.75rem)] leading-[0.98] tracking-[-0.02em] font-medium"
      >
        {title}
      </motion.h2>
      {intro && (
        <p className="mt-6 max-w-[58ch] text-mist text-base md:text-lg leading-relaxed">{intro}</p>
      )}
    </div>
    {aside && <div className="shrink-0">{aside}</div>}
  </div>
);
