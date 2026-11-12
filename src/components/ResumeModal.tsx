import React from 'react';
import { Printer, X } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, TIMELINE_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { Sheet } from './Sheet';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const H: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-[#8a6a2e] border-b border-black/10 pb-2 mb-4">
    {children}
  </h2>
);

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => (
  <Sheet open={isOpen} onClose={onClose} label="Curriculum vitae" tone="paper">
    <div className="print-hide sticky top-0 z-10 flex items-center justify-between gap-3 px-5 md:px-12 h-14 md:h-16 bg-[#f6f2ea]/95 backdrop-blur border-b border-black/10">
      <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-black/50">Curriculum vitae</span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm text-[#141a2a] hover:bg-black/5 cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">Print or save as PDF</span>
          <span className="sm:hidden">Print</span>
        </button>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center w-11 h-11 -mr-3 text-black/50 hover:text-black cursor-pointer"
          aria-label="Close CV"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>

    <div className="print-cv-content px-5 md:px-12 py-10 md:py-14 space-y-10 text-[#141a2a]">
      <header>
        <h1 className="font-display text-[clamp(2.25rem,7vw,3.5rem)] leading-[0.95] tracking-[-0.02em]">
          {PERSONAL_INFO.name}
        </h1>
        <p className="mt-3 text-[#8a6a2e]">Data Analyst · Power BI · SQL · Excel · Python</p>
        <p className="mt-4 text-sm text-black/65 flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-1 font-mono break-all">
          <span>{PERSONAL_INFO.email}</span>
          <span>{PERSONAL_INFO.location}</span>
          <span>github.com/oyewoleadeshewa016-del</span>
          <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noreferrer noopener" className="underline">
            {PERSONAL_INFO.social.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
          </a>
        </p>
      </header>

      <section>
        <H>Profile</H>
        <p className="leading-relaxed text-black/80">
          {PERSONAL_INFO.tagline} Computer Science undergraduate at Kwara State University, Malete, and certified
          data analyst interning at Malhub, GRA Ilorin. I clean and model business data with Power Query
          and SQL, write DAX measures, and build Power BI reports that answer specific operational questions.
        </p>
      </section>

      <section>
        <H>Tools</H>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {SKILLS_DATA.map((s) => (
            <div key={s.name}>
              <dt className="font-semibold">{s.name}</dt>
              <dd className="text-sm text-black/65 leading-relaxed">{s.highlights.join(', ')}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-black/70 leading-relaxed">
          <span className="font-semibold">Also:</span> star and snowflake schema modelling, DAX time intelligence,
          ETL and data cleaning, window functions, exploratory analysis, executive reporting.
        </p>
      </section>

      <section>
        <H>Experience and education</H>
        <div className="space-y-7">
          {TIMELINE_DATA.map((t) => (
            <div key={t.id}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-semibold">
                  {t.title} <span className="font-normal text-black/65">· {t.organization}</span>
                </h3>
                <span className="font-mono text-sm text-black/55 shrink-0">{t.period}</span>
              </div>
              <p className="text-sm text-black/55">{t.location}</p>
              <ul className="mt-2 space-y-1 pl-5 list-disc text-sm text-black/75 leading-relaxed marker:text-[#8a6a2e]">
                {t.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <H>Selected projects</H>
        <ul className="space-y-4">
          {PROJECTS_DATA.map((p) => (
            <li key={p.id} className="text-sm leading-relaxed">
              <span className="font-semibold">{p.title}.</span>{' '}
              <span className="text-black/75">{p.logline}</span>{' '}
              <span className="font-mono text-black/55">{p.metrics.slice(0, 2).join(' · ')}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="pt-6 border-t border-black/10 text-xs text-black/50">References and transcripts available on request.</p>
    </div>
  </Sheet>
);
