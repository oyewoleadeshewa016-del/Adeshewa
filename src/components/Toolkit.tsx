import React from 'react';
import { motion } from 'motion/react';
import { SKILLS_DATA, COMPETENCIES } from '../data/portfolioData';
import { SectionHead } from './SectionHead';

export const Toolkit: React.FC = () => (
  <section id="toolkit" className="relative py-24 md:py-40">
    <div className="gutter mx-auto max-w-[88rem]">
      <SectionHead
        eyebrow="Toolkit"
        title={
          <>
            Four tools,
            <br />
            <em className="font-normal">used daily</em>
          </>
        }
        intro="SQL and Excel to get the data straight, Python when it needs scripting, and Power BI for the finished report."
      />

      <div className="border-t border-line">
        {SKILLS_DATA.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-line"
          >
            <h3 className="md:col-span-4 font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.9] tracking-[-0.025em] transition-colors duration-500 group-hover:text-brass-soft">
              {s.name}
            </h3>
            <p className="md:col-span-4 text-mist text-lg leading-relaxed max-w-[44ch] md:pt-3">{s.description}</p>
            <ul className="md:col-span-4 md:pt-4 grid grid-cols-1 gap-2.5 font-mono text-[0.82rem] text-ivory/80">
              {s.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="text-brass" aria-hidden="true">
                    ›
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-8">
        <p className="label text-mist md:col-span-3">Around the tools</p>
        <dl className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
          {COMPETENCIES.map((c) => (
            <div key={c.name} className="border-t border-line pt-4">
              <dt className="font-display text-xl">{c.name}</dt>
              <dd className="mt-2 text-mist leading-relaxed">{c.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);
