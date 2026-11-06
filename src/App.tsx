/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SplashLoader } from './components/SplashLoader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Process } from './components/Process';
import { DataDoodleEasterEgg } from './components/DataDoodleEasterEgg';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Sync theme with html document element
  useEffect(() => {
    const savedTheme = localStorage.getItem('ao_theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('ao_theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 transition-colors duration-300 dark:bg-[#0A0E17] light:bg-[#F8FAFC]">
      {/* Page Load Splash Animation */}
      {!isLoaded && <SplashLoader onComplete={() => setIsLoaded(true)} />}

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Main App Content Container */}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Sticky Glass Navbar */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenGuide={() => setIsGuideOpen(true)}
        />

        <main>
          {/* Hero Section */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* About Me Section */}
          <About />

          {/* Technical Skills Section */}
          <Skills />

          {/* Featured Projects Grid & Modals */}
          <Projects />

          {/* Experience & Career Milestones Timeline */}
          <Experience />

          {/* 5-Step Analytics Process */}
          <Process />

          {/* Interactive Easter Egg: Real-time Data Chart Doodle */}
          <DataDoodleEasterEgg />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer
          onOpenGuide={() => setIsGuideOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Resume Preview & Download Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Free Deployment & Content Editing Guide Modal */}
        <DeploymentGuideModal
          isOpen={isGuideOpen}
          onClose={() => setIsGuideOpen(false)}
        />

      </div>
    </div>
  );
}
