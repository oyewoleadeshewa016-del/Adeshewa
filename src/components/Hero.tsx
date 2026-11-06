import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, Github, Linkedin, Mail, ChevronRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroFloatingCharts } from './HeroFloatingCharts';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.roles.slice(0, 3); // "Data Analyst", "Power BI Developer", "SQL Problem Solver"

  useEffect(() => {
    const currentTarget = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText !== currentTarget) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText === currentTarget) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText !== '') {
      // Deleting back
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 35);
    } else if (isDeleting && displayedText === '') {
      // Next word
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-grain">
      <HeroFloatingCharts />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Hero: Picture strictly at the RIGHT CORNER beside Name */}
        <div className="max-w-5xl mx-auto">
          
          {/* Header Row: Name & Title on the left, Picture at the RIGHT CORNER */}
          <div className="flex flex-row items-start justify-between gap-4 sm:gap-8 lg:gap-10">
            
            {/* Left side: Status Kicker, Name, and Animated Title */}
            <div className="flex-1 min-w-0 space-y-2.5 sm:space-y-3.5">
              
              {/* Status Kicker */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 dark:bg-white/[0.04] border border-slate-700/60 dark:border-white/10 text-[11px] sm:text-xs font-mono text-slate-300"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="truncate">Data Analyst · Power BI · SQL · Python</span>
              </motion.div>

              {/* Name Headline - Left side */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Hello, I'm <br />
                  <span className="text-white font-extrabold">{PERSONAL_INFO.name}</span>
                </h1>
              </motion.div>

              {/* Typewriter role cycling in cool ice-blue */}
              <div className="h-8 sm:h-10 flex items-center">
                <span className="text-base sm:text-xl md:text-2xl font-semibold font-heading text-slate-300">
                  A passionate{' '}
                  <span className="text-[#38BDF8] border-b border-[#38BDF8]/60 pb-0.5">
                    {displayedText}
                  </span>
                  <span className="inline-block w-[2px] h-4 sm:h-5 bg-[#38BDF8] ml-1.5 animate-pulse align-middle" />
                </span>
              </div>

            </div>

            {/* Right Corner: Picture - Clean without any overlay text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="shrink-0"
            >
              <div className="w-28 h-36 sm:w-40 sm:h-52 md:w-52 md:h-64 lg:w-60 lg:h-72 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111625] border-2 border-slate-700/70 dark:border-white/10 shadow-2xl relative">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/public/assets/aistudio/WhatsApp_Image_2026-11-02_at_12.48.54_PM_8e48aacd.jpeg';
                  }}
                />
              </div>
            </motion.div>

          </div>

          {/* Tagline, Story, and Actions Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 space-y-4 max-w-3xl"
          >
            <blockquote className="text-base sm:text-lg font-medium text-slate-200 italic border-l-2 border-[#38BDF8]/60 pl-3.5">
              "{PERSONAL_INFO.tagline}"
            </blockquote>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Computer Science student at <strong>Kwara State University, Malete</strong> and Certified Data Analyst undergoing SIWES at <strong>Malhub, GRA Ilorin</strong>. Specializing in production Power BI business intelligence dashboards, relational SQL data modeling, and Python analytical reporting.
            </p>

            {/* Action Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* View Projects CTA */}
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl shadow-md transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <span>View Projects</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* GitHub Repositories Link */}
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                <Github className="w-4 h-4 text-[#38BDF8]" />
                <span>GitHub Repositories</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* Curriculum Vitae Modal */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Curriculum Vitae</span>
              </button>

              {/* Social Channels Pill */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <a
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn Profile"
                  className="p-1.5 text-slate-400 hover:text-[#38BDF8] rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.social.emailMailto}
                  aria-label="Send Email"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Full-width KPI Counter Strip below hero lockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-slate-800/80 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          {PERSONAL_INFO.kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#111625]/60 border border-slate-800/80 dark:border-white/5"
            >
              <div className="text-2xl sm:text-3xl font-bold font-heading text-white flex items-center justify-center gap-0.5">
                <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
              </div>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                {kpi.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll down indicator */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
            className="p-2 rounded-full text-slate-500 hover:text-[#38BDF8] transition-colors animate-bounce cursor-pointer"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
