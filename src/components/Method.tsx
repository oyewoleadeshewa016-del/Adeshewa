import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { SectionHead } from './SectionHead';
import { MeasureLab } from './MeasureLab';

export const Method: React.FC = () => (
  <section id="method" className="relative py-24 md:py-40">
    <div className="gutter mx-auto max-w-[88rem]">
      <SectionHead
        eyebrow="Method"
        title={
          <>
            From raw file
            <br />
            <em className="font-normal">to recommendation</em>
          </>
        }
        intro="The same five steps on every project, in this order. Skipping the cleaning step is how dashboards end up confidently wrong."
      />

      <ol className="grid grid-cols-1 lg:grid-cols-5 border-t border-line">
        {PROCESS_STEPS.map((s, i) => (
          <motion.li
            key={s.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-[4.5rem_1fr] lg:grid-cols-1 gap-x-4 py-8 lg:py-10 border-b lg:border-b-0 border-line lg:pr-6 ${
              i > 0 ? 'lg:border-l lg:pl-6' : ''
            }`}
          >
            <span className="font-display italic text-5xl lg:text-7xl leading-none text-brass/90 tnum">{s.step}</span>
            <div className="min-w-0 lg:mt-8">
              <h3 className="font-display text-3xl leading-none">{s.title}</h3>
              <p className="mt-4 text-mist leading-relaxed">{s.description}</p>
              <p className="mt-5 font-mono text-[0.78rem] text-ivory/60 leading-relaxed">{s.toolsUsed.join(' · ')}</p>
              <p className="mt-4 text-sm text-ivory/85">
                <span className="label text-brass mr-2">Output</span>
                {s.deliverable}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>

      <MeasureLab />
    </div>
  </section>
);
