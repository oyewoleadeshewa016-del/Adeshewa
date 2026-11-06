import React from 'react';
import { motion } from 'motion/react';
import { SectionHead } from './SectionHead';

const LEDGER = [
  { k: 'Study', v: 'B.Sc. Computer Science', where: 'Kwara State University, Malete', when: '2021 – now' },
  { k: 'Certified', v: 'Data Analysis', where: 'Malhub Academy, GRA Ilorin', when: '2024' },
  { k: 'Placement', v: 'Data Analyst Intern (SIWES)', where: 'Malhub, GRA Ilorin', when: '2024 – now' },
];

const PRINCIPLES = [
  'Every number on a dashboard traces back to a cleaned source table.',
  'One question per page, answered within five seconds of looking.',
  'Star schemas, so the model stays quick as the data grows.',
  'Each finding ends in a recommendation someone can act on.',
];

export const About: React.FC = () => (
  <section id="about" className="relative py-24 md:py-40">
    <div className="gutter mx-auto max-w-[88rem]">
      <SectionHead eyebrow="About" title={<>The analyst</>} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 font-display text-[clamp(1.6rem,4.2vw,2.75rem)] leading-[1.2] tracking-[-0.01em]"
        >
          I find the story a business is already telling in its numbers, then build the report that lets
          the people running it <em className="text-brass-soft">see it in five seconds.</em>
        </motion.p>

        <div className="lg:col-span-5 lg:pt-3 space-y-6 text-mist leading-relaxed max-w-[60ch]">
          <p>
            I study Computer Science at Kwara State University, Malete. After earning my data analysis
            certificate at Malhub, I stayed on for my SIWES placement at their GRA Ilorin office, where I
            clean, model and report on real organisational data.
          </p>
          <p>
            Most days that means shaping messy files in Power Query, writing SQL window queries, designing a
            star schema, then writing the DAX that makes a Power BI page answer one clear question.
          </p>
        </div>
      </div>

      {/* Ledger */}
      <dl className="mt-20 md:mt-28 border-t border-line">
        {LEDGER.map((row) => (
          <div
            key={row.k}
            className="grid grid-cols-[6.5rem_1fr] md:grid-cols-12 gap-x-4 gap-y-1 py-6 md:py-7 border-b border-line items-baseline"
          >
            <dt className="label text-brass md:col-span-2">{row.k}</dt>
            <dd className="md:col-span-4 font-display text-xl md:text-2xl">{row.v}</dd>
            <dd className="col-start-2 md:col-start-auto md:col-span-4 text-mist">{row.where}</dd>
            <dd className="col-start-2 md:col-start-auto md:col-span-2 label text-mist md:text-right tnum">{row.when}</dd>
          </div>
        ))}
      </dl>

      {/* Principles */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-8">
        <p className="label text-mist md:col-span-3">How I work</p>
        <ul className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {PRINCIPLES.map((p) => (
            <li key={p} className="flex gap-4 text-ivory/90 text-lg leading-snug">
              <span className="mt-[0.6em] h-px w-5 shrink-0 bg-brass" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
