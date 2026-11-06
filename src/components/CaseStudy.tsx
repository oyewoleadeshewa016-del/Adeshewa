import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Github, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Sheet } from './Sheet';

interface CaseStudyProps {
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ index, onClose, onNavigate }) => {
  const project = index === null ? null : PROJECTS_DATA[index];
  const topRef = useRef<HTMLDivElement>(null);
  const nextIndex = index === null ? 0 : (index + 1) % PROJECTS_DATA.length;
  const next = PROJECTS_DATA[nextIndex];

  // jump back to the top when switching to the next project
  useEffect(() => {
    topRef.current?.scrollIntoView({ block: 'start' });
  }, [index]);

  return (
    <Sheet open={project !== null} onClose={onClose} label={project ? `Case study: ${project.title}` : 'Case study'}>
      {project && (
        <div ref={topRef}>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 md:px-10 h-14 md:h-16 bg-ink-2/90 backdrop-blur-md border-b border-line">
            <span className="label text-brass truncate">Case study · {project.category}</span>
            <button
              onClick={onClose}
              className="-mr-3 inline-flex items-center justify-center w-11 h-11 text-mist hover:text-ivory cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-5 md:px-10 pt-8 md:pt-12 pb-10">
            <div className="font-display text-[clamp(3.5rem,14vw,7rem)] leading-[0.85] tracking-[-0.03em] text-brass-soft tnum">
              {project.figure}
            </div>
            <p className="mt-3 label text-mist">{project.figureLabel}</p>
            <h2 className="mt-8 font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.02] tracking-[-0.015em]">
              {project.title}
            </h2>
            <p className="mt-4 text-lg text-mist max-w-[58ch] leading-relaxed">{project.logline}</p>

            <figure className="mt-10 -mx-5 md:mx-0">
              <a href={project.image} target="_blank" rel="noreferrer noopener" className="block bg-[#0d1322] md:rounded-[3px] overflow-hidden">
                <img src={project.image} alt={`${project.title} Power BI dashboard`} className="w-full h-auto" />
              </a>
              <figcaption className="mt-3 px-5 md:px-0 label text-mist normal-case tracking-[0.04em]">
                Tap the image to open it full size
              </figcaption>
            </figure>

            <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 border-t border-line">
              {project.metrics.map((m, i) => (
                <li
                  key={m}
                  className={`py-5 pr-3 border-b border-line font-mono text-sm text-ivory leading-snug ${
                    i % 2 === 1 ? 'pl-4 md:pl-0' : ''
                  }`}
                >
                  {m}
                </li>
              ))}
            </ul>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <h3 className="md:col-span-4 label text-brass">The question</h3>
              <p className="md:col-span-8 text-lg leading-relaxed text-ivory/90">{project.businessProblem}</p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <h3 className="md:col-span-4 label text-brass">What I did</h3>
              <ol className="md:col-span-8 space-y-5">
                {project.methodology.map((step, i) => (
                  <li key={i} className="grid grid-cols-[2rem_1fr] gap-2 leading-relaxed text-ivory/85">
                    <span className="font-mono text-sm text-mist pt-0.5 tnum">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <h3 className="md:col-span-4 label text-brass">What the data showed</h3>
              <ul className="md:col-span-8 divide-y divide-line border-y border-line">
                {project.keyInsights.map((f, i) => (
                  <li key={i} className="py-5 leading-relaxed text-ivory/90">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 flex flex-col sm:flex-row gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-ivory/25 hover:border-ivory/60 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Files on GitHub
                  <ArrowUpRight className="w-4 h-4 text-mist" />
                </a>
              )}
            </div>
          </div>

          {/* Next project */}
          <button
            onClick={() => onNavigate(nextIndex)}
            className="group w-full text-left border-t border-line px-5 md:px-10 py-8 md:py-10 flex items-center justify-between gap-6 hover:bg-ink-3/60 transition-colors cursor-pointer"
          >
            <span className="min-w-0">
              <span className="label text-mist">Next project</span>
              <span className="mt-2 block font-display text-2xl md:text-4xl leading-tight truncate">{next.title}</span>
            </span>
            <ArrowRight className="w-6 h-6 shrink-0 text-brass transition-transform duration-500 ease-cine group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </Sheet>
  );
};
