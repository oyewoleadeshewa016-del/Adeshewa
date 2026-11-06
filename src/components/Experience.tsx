import React from 'react';
import { motion } from 'motion/react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { SectionHead } from './SectionHead';

export const Experience: React.FC = () => (
  <section id="record" className="relative py-24 md:py-40">
    <div className="gutter mx-auto max-w-[88rem]">
      <SectionHead
        eyebrow="Record"
        title={
          <>
            Placement, certificate,
            <br />
            <em className="font-normal">degree</em>
          </>
        }
      />

      <ol className="border-t border-line">
        {TIMELINE_DATA.map((t, i) => (
          <motion.li
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-line"
          >
            <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-4 items-center md:items-start">
              <span className="font-mono text-sm text-ivory tnum">{t.period}</span>
              <span className="label text-brass">{t.type}</span>
              {t.status === 'Currently Active' && (
                <span className="inline-flex items-center gap-2 label text-[#7fd1a4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7fd1a4]" aria-hidden="true" />
                  Current
                </span>
              )}
            </div>
            <div className="md:col-span-9 min-w-0">
              <h3 className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.02] tracking-[-0.015em]">
                {t.title}
              </h3>
              <p className="mt-2 text-ivory/80">
                {t.organization} <span className="text-mist">· {t.location}</span>
              </p>
              <p className="mt-5 text-mist leading-relaxed max-w-[62ch]">{t.description}</p>
              <ul className="mt-6 space-y-3 max-w-[62ch]">
                {t.achievements.map((a) => (
                  <li key={a} className="flex gap-4 text-ivory/85 leading-relaxed">
                    <span className="mt-[0.75em] h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);
