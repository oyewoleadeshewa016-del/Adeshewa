import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles (max +/- 5 degrees - cool and restrained)
    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out'
      }}
      className="group relative flex flex-col justify-between rounded-2xl bg-slate-100/80 dark:bg-[#111625] border border-slate-200/80 dark:border-white/5 hover:border-[#38BDF8]/40 dark:hover:border-[#38BDF8]/40 transition-colors duration-300 shadow-md hover:shadow-xl hover:shadow-sky-500/5 overflow-hidden"
    >
      {/* Top Image Container with zoom effect */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-200/60 dark:border-white/5">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0A0E17] text-center">
                  <div class="w-10 h-10 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                  </div>
                  <p class="text-xs font-semibold text-white">${project.title}</p>
                </div>
              `;
            }
          }}
        />

        {/* Category kicker tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0A0E17]/85 backdrop-blur-md border border-white/10">
          <span className="text-[11px] font-mono font-medium text-[#38BDF8]">
            {project.category}
          </span>
        </div>

        {/* Hover quick view overlay */}
        <div className="absolute inset-0 bg-[#0A0E17]/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={() => onOpenModal(project)}
            className="px-3.5 py-2 rounded-lg bg-[#0284C7] text-white text-xs font-medium shadow-md flex items-center gap-1.5 hover:bg-[#0369A1] transition-colors cursor-pointer"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium shadow-md hover:text-white hover:bg-slate-700 transition-colors cursor-pointer border border-slate-600"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Unboxed tools list with typographic separators */}
          <div className="flex flex-wrap items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono mb-2">
            {project.tools.map((tool, idx) => (
              <React.Fragment key={tool}>
                {idx > 0 && <span className="text-slate-400 dark:text-slate-600">·</span>}
                <span>{tool}</span>
              </React.Fragment>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Short Summary */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Bottom Bar: Action Button */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            {project.metrics[0]}
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-slate-400 hover:text-white transition-colors"
                title="GitHub Repo"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#38BDF8] hover:text-white transition-colors cursor-pointer"
            >
              <span>View Dashboard</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
