import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { SectionHead } from './SectionHead';
import { CaseStudy } from './CaseStudy';

const EASE = [0.16, 1, 0.3, 1] as const;

const Still: React.FC<{ project: Project; index: number; onOpen: () => void }> = ({ project, index, onOpen }) => (
  <article className="group">
    <button
      onClick={onOpen}
      className="relative block w-full overflow-hidden rounded-[3px] bg-ink-2 text-left cursor-pointer aspect-[16/11] sm:aspect-[16/9] lg:aspect-[2.39/1]"
      aria-label={`Open case study: ${project.title}`}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: 'inset(10% 6% 10% 6%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <motion.img
          src={project.image}
          alt={`${project.title} dashboard`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-[filter,transform] duration-[1200ms] ease-cine brightness-[0.72] saturate-[0.8] group-hover:brightness-[0.9] group-hover:saturate-100 group-hover:scale-[1.03]"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: EASE }}
        />
        {/* grade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(10,15,28,0.97) 0%, rgba(10,15,28,0.6) 40%, rgba(10,15,28,0.1) 70%, rgba(10,15,28,0.55) 100%), linear-gradient(90deg, rgba(10,15,28,0.6) 0%, transparent 55%)',
          }}
        />
      </motion.div>

      {/* title card */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="font-display text-[clamp(3.25rem,11vw,8rem)] leading-[0.85] tracking-[-0.03em] tnum">
            {project.figure}
          </div>
          <div className="mt-3 label text-ivory/75">{project.figureLabel}</div>
        </div>
        <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-ivory/30 text-ivory transition-all duration-500 ease-cine group-hover:bg-brass group-hover:border-brass group-hover:text-ink">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>

      <span className="absolute top-4 left-4 sm:top-7 sm:left-7 px-2 py-1 rounded-[2px] bg-ink/70 backdrop-blur-sm label text-ivory/85 tnum">
        {String(index + 1).padStart(2, '0')} / {String(PROJECTS_DATA.length).padStart(2, '0')}
      </span>
    </button>

    <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8">
      <h3 className="md:col-span-5 font-display text-[clamp(1.6rem,3.6vw,2.4rem)] leading-[1.05] tracking-[-0.01em]">
        <button onClick={onOpen} className="text-left hover:text-brass-soft transition-colors cursor-pointer">
          {project.title}
        </button>
      </h3>
      <div className="md:col-span-7 min-w-0">
        <p className="text-mist text-base md:text-lg leading-relaxed max-w-[56ch]">{project.logline}</p>
        <p className="mt-4 font-mono text-[0.78rem] text-ivory/60 flex flex-wrap gap-x-3 gap-y-1">
          {project.tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </p>
      </div>
    </div>
  </article>
);

export const Work: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-40 bg-[linear-gradient(180deg,transparent,rgba(17,26,46,0.6)_12%,rgba(17,26,46,0.6)_88%,transparent)]">
      <div className="gutter mx-auto max-w-[88rem]">
        <SectionHead
          eyebrow="Selected work"
          title={
            <>
              Five datasets,
              <br />
              <em className="font-normal">five answers</em>
            </>
          }
          intro="Retail sales, staff turnover, screen time, a poultry farm's books and nine years of road accidents. Each one started as a raw file and ended as a Power BI report with a clear finding."
        />

        <div className="flex flex-col gap-24 md:gap-36">
          {PROJECTS_DATA.map((p, i) => (
            <Still key={p.id} project={p} index={i} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>

        <p className="mt-20 text-mist">
          All source files and reports are on{' '}
          <a
            href="https://github.com/oyewoleadeshewa016-del?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className="text-ivory underline decoration-brass/60 underline-offset-4 hover:decoration-brass"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <CaseStudy index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </section>
  );
};
