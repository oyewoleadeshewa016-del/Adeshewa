/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Toolkit } from './components/Toolkit';
import { Method } from './components/Method';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = () => setResumeOpen(true);

  return (
    <div className="grain min-h-screen bg-ink text-ivory">
      <div className="print-hide">
        <Navbar onOpenResume={openResume} />
        <main>
          <Hero onOpenResume={openResume} />
          <About />
          <Work />
          <Toolkit />
          <Method />
          <Experience />
          <Contact />
        </main>
        <Footer onOpenResume={openResume} />
      </div>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
