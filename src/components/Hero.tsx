import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/** A line of display type that rises out of a mask */
const RevealLine: React.FC<{ delay: number; className?: string; children: React.ReactNode }> = ({
  delay,
  className = '',
  children,
}) => {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? false : { y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // portrait drifts slower than the page for a little depth
  const drift = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 90]);

  const goWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Letterbox: two bars part like a curtain on first load */}
      {!reduce && (
        <div className="print-hide pointer-events-none fixed inset-0 z-[70]" aria-hidden="true">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[#05070d] origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.3, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#05070d] origin-bottom"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.3, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      )}

      {/* ambient light: warm key light from the upper right, like a studio lamp */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 50% at 78% 18%, rgba(201,163,92,0.16), transparent 70%), radial-gradient(50% 60% at 10% 90%, rgba(27,38,66,0.9), transparent 70%)',
        }}
      />

      <div className="gutter relative mx-auto max-w-[88rem] pt-20 md:pt-32 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 lg:gap-x-12 items-end">
          {/* Portrait: first on phones, right column on desktop */}
          <motion.figure
            style={{ y: drift }}
            className="relative order-1 lg:order-2 lg:col-span-5 -mx-5 md:mx-0"
          >
            <div className="relative overflow-hidden aspect-[4/5] max-h-[72svh] lg:max-h-none w-full md:rounded-[4px]">
              <motion.img
                src={PERSONAL_INFO.profileImage}
                alt="Portrait of Adeshewa Damilola Oyewole in a navy suit"
                className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
                initial={reduce ? false : { scale: 1.18 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.6, delay: 0.3, ease: EASE }}
                style={{ filter: 'contrast(1.05) saturate(0.9)' }}
              />
              {/* grade: cool shadows, fade into the page at the bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(10,15,28,0.15) 0%, transparent 30%, transparent 55%, rgba(10,15,28,0.95) 100%), radial-gradient(120% 80% at 50% 30%, transparent 50%, rgba(10,15,28,0.55) 100%)',
                }}
              />
              {/* frame marks */}
              <div className="absolute inset-4 md:inset-5 pointer-events-none" aria-hidden="true">
                <span className="absolute left-0 top-0 w-4 h-4 border-l border-t border-ivory/50" />
                <span className="absolute right-0 top-0 w-4 h-4 border-r border-t border-ivory/50" />
                <span className="hidden lg:block absolute left-0 bottom-0 w-4 h-4 border-l border-b border-ivory/50" />
                <span className="hidden lg:block absolute right-0 bottom-0 w-4 h-4 border-r border-b border-ivory/50" />
              </div>
              <figcaption className="absolute top-6 left-6 md:top-8 md:left-8 label text-ivory/80 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e5484d] animate-pulse" aria-hidden="true" />
                Open to analyst roles
              </figcaption>
            </div>
          </motion.figure>

          {/* Name and introduction */}
          <div className="relative order-2 lg:order-1 lg:col-span-7 -mt-24 sm:-mt-32 lg:mt-0 lg:pb-6 min-w-0">
            <motion.p
              className="label text-brass flex items-center gap-3"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <span className="h-px w-8 bg-brass/70" aria-hidden="true" />
              Data analyst · Ilorin, Nigeria
            </motion.p>

            <h1 className="mt-5 font-display font-medium leading-[0.86] tracking-[-0.035em] text-[clamp(3.2rem,15vw,7.5rem)] lg:text-[min(8vw,9rem)]">
              <RevealLine delay={0.75} className="italic font-normal">
                Adeshewa
              </RevealLine>
              <RevealLine delay={0.9} className="pl-[0.45em] sm:pl-[0.9em]">
                Oyewole
              </RevealLine>
            </h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.9, ease: EASE }}
              className="mt-8 md:mt-10 max-w-xl"
            >
              <p className="text-xl md:text-2xl leading-snug text-ivory">{PERSONAL_INFO.tagline}</p>
              <p className="mt-4 text-mist leading-relaxed">
                Computer Science at Kwara State University, Malete. Certified at Malhub and now on SIWES
                placement there, building Power BI reports from live business data with SQL, Excel and Python
                underneath.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={goWork}
                  className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-brass text-ink font-medium hover:bg-brass-soft transition-colors cursor-pointer"
                >
                  See the work
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-500 ease-cine group-hover:rotate-[-45deg]" />
                </button>
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center h-12 px-6 rounded-full border border-ivory/25 text-ivory hover:border-ivory/60 transition-colors cursor-pointer"
                >
                  Read the CV
                </button>
                <div className="flex items-center">
                  <a
                    href={PERSONAL_INFO.social.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                    className="inline-flex items-center justify-center w-12 h-12 text-mist hover:text-ivory transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.social.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-12 h-12 text-mist hover:text-ivory transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Credits strip: headline figures */}
        <motion.dl
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-line"
        >
          {PERSONAL_INFO.kpis.map((k, i) => (
            <div
              key={k.label}
              className={`pt-6 pb-2 pr-4 ${i % 2 === 1 ? 'pl-4 md:pl-0' : ''} ${
                i > 1 ? 'border-t border-line md:border-t-0 mt-0' : ''
              } md:pl-0`}
            >
              <dt className="sr-only">{k.label}</dt>
              <dd className="font-display text-[clamp(2.2rem,6vw,3.5rem)] leading-none tnum">{k.value}</dd>
              <dd className="mt-2 label text-mist normal-case tracking-[0.04em] text-[0.8rem]">{k.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};
