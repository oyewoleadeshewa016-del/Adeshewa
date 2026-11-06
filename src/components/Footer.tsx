import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => (
  <footer className="border-t border-line" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
    <div className="gutter mx-auto max-w-[88rem] py-12 md:py-16">
      <p className="font-display italic text-[clamp(3rem,16vw,12rem)] leading-[0.85] tracking-[-0.04em] text-ivory/[0.08] select-none" aria-hidden="true">
        Adeshewa
      </p>
      <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <p className="text-ivory">{PERSONAL_INFO.name}</p>
          <p className="mt-1 text-sm text-mist">Data analyst · Ilorin, Nigeria</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-mist" aria-label="Footer">
          <button onClick={onOpenResume} className="h-11 hover:text-ivory transition-colors cursor-pointer">
            CV
          </button>
          <a href={PERSONAL_INFO.social.github} target="_blank" rel="noreferrer noopener" className="h-11 inline-flex items-center hover:text-ivory transition-colors">
            GitHub
          </a>
          <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noreferrer noopener" className="h-11 inline-flex items-center hover:text-ivory transition-colors">
            LinkedIn
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-11 inline-flex items-center gap-2 hover:text-ivory transition-colors cursor-pointer"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </nav>
      </div>
      <p className="mt-10 label text-mist/70 normal-case tracking-[0.04em]">© {new Date().getFullYear()} Adeshewa Damilola Oyewole</p>
    </div>
  </footer>
);
