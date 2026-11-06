import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenResume: () => void;
}

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'method', label: 'Method' },
  { id: 'record', label: 'Record' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
      let current = '';
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // let the menu close before scrolling so the body is unlocked
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }));
  };

  return (
    <>
      <header
        className={`print-hide fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="gutter mx-auto max-w-[88rem] h-16 md:h-20 flex items-center justify-between gap-6">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 min-h-11"
            aria-label="Adeshewa Oyewole, back to top"
          >
            <span className="font-display italic text-2xl leading-none text-ivory">A.O.</span>
            <span className="hidden sm:inline label text-mist">Data Analyst</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Sections">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.id);
                }}
                className={`relative text-sm tracking-wide transition-colors ${
                  active === l.id ? 'text-ivory' : 'text-mist hover:text-ivory'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-brass transition-all duration-500 ease-cine ${
                    active === l.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center h-10 px-5 rounded-full border border-brass/50 text-brass-soft text-sm hover:bg-brass hover:text-ink transition-colors cursor-pointer"
            >
              Read the CV
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex items-center gap-3 h-11 pl-4 pr-3 -mr-3 text-ivory cursor-pointer"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className="label">{open ? 'Close' : 'Menu'}</span>
              <span className="relative block w-6 h-3" aria-hidden="true">
                <span
                  className={`absolute left-0 right-0 h-px bg-ivory transition-all duration-500 ease-cine ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-px bg-ivory transition-all duration-500 ease-cine ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
        {/* reading progress */}
        <div className="absolute left-0 bottom-0 h-px bg-brass/80 origin-left" style={{ width: '100%', transform: `scaleX(${progress})` }} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="print-hide fixed inset-0 z-30 bg-ink lg:hidden flex flex-col"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              paddingTop: 'calc(env(safe-area-inset-top, 0px) + 5rem)',
              paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 2rem)',
            }}
          >
            <nav className="gutter flex-1 flex flex-col justify-center" aria-label="Sections">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.id);
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`py-2 font-display text-[clamp(2.5rem,12vw,4rem)] leading-[1.05] ${
                    active === l.id ? 'italic text-brass-soft' : 'text-ivory'
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="gutter flex flex-col gap-4">
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenResume();
                }}
                className="h-12 rounded-full bg-brass text-ink font-medium cursor-pointer"
              >
                Read the CV
              </button>
              <p className="label text-mist text-center">Ilorin, Kwara State · WAT (UTC+1)</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
