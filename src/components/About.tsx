import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, CheckCircle2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider mb-2">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Bridging raw numbers with strategic business actions.
          </h2>
        </div>

        {/* 2-Column Split: Image with Refined Executive Frame & Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Photo in Cool Executive Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer clean border container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111625] border border-slate-700/60 dark:border-white/10 shadow-xl">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-102"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/public/assets/aistudio/WhatsApp_Image_2026-11-02_at_12.48.54_PM_8e48aacd.jpeg';
                    }}
                  />
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Academic/Professional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I am a Computer Science student at <strong>Kwara State University, Malete</strong>, driven by a deep fascination with transforming raw, scattered datasets into coherent, high-impact business decisions.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                After completing rigorous professional training to become a <strong>Certified Data Analyst at Malhub</strong>, I am currently expanding my practical horizons through my <strong>SIWES internship at Malhub, GRA Ilorin</strong>. Here, I work directly with business intelligence pipelines, designing robust dimensional data models, crafting DAX formulas, and building interactive Power BI dashboards that answer fundamental executive questions.
              </p>
            </div>

            {/* Three Pillar Cards in cool, understated styling */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-[#111625]/80 border border-slate-200/70 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-[#38BDF8] flex items-center justify-center mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                  KWASU Malete
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  B.Sc. Computer Science foundations in algorithms & relational databases.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-[#111625]/80 border border-slate-200/70 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                  Certified at Malhub
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Accredited practical competence in Excel, Power BI, SQL & Python.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-[#111625]/80 border border-slate-200/70 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-3">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                  SIWES at Malhub
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  GRA Ilorin internship delivering live analytics and stakeholder reporting.
                </p>
              </div>

            </div>

            {/* Core Values checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Zero guesswork: every metric traced to clean data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Human-centered, uncluttered dashboard UX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Strong dimensional modeling (Star & Snowflake)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Action-oriented executive storytelling</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
