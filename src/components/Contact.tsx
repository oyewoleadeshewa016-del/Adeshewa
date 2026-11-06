import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Copy, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setError('Copying is blocked in this browser. Select the address above instead.');
    }
  };

  // There is no mail server behind this site, so the form drafts the email in
  // the visitor's own mail app rather than pretending to send it.
  const compose = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Write a short message first, then open it in your email app.');
      return;
    }
    setError('');
    const subject = name.trim() ? `Hello from ${name.trim()}` : 'Hello from your portfolio';
    const body = name.trim() ? `${message.trim()}\n\n${name.trim()}` : message.trim();
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: 'radial-gradient(55% 45% at 85% 100%, rgba(201,163,92,0.14), transparent 70%)' }}
      />
      <div className="gutter relative mx-auto max-w-[88rem]">
        <p className="label text-brass flex items-center gap-3">
          <span className="h-px w-8 bg-brass/70" aria-hidden="true" />
          Contact
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display font-medium text-[clamp(2.75rem,10vw,8rem)] leading-[0.92] tracking-[-0.03em] max-w-[14ch]"
        >
          Have data that needs <em className="font-normal text-brass-soft">answers?</em>
        </motion.h2>
        <p className="mt-8 max-w-[52ch] text-lg text-mist leading-relaxed">
          I'm open to full-time analyst roles, freelance Power BI builds and research collaborations. On-site in
          Kwara or Lagos, or remote from anywhere.
        </p>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12">
          {/* Direct details */}
          <div className="lg:col-span-6 min-w-0">
            <p className="label text-mist">Email</p>
            <div className="mt-3 flex items-center gap-2 min-w-0">
              <a
                href={PERSONAL_INFO.social.emailMailto}
                className="min-w-0 font-display text-[clamp(1.25rem,4.6vw,2.25rem)] leading-tight break-all hover:text-brass-soft transition-colors select-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={copy}
                className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full border border-line text-mist hover:text-ivory hover:border-ivory/40 transition-colors cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-[#7fd1a4]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="mt-2 h-5 text-sm text-[#7fd1a4]" aria-live="polite">
              {copied ? 'Address copied' : ''}
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <dt className="label text-mist">Based in</dt>
                <dd className="mt-2 text-ivory">{PERSONAL_INFO.location}</dd>
              </div>
              <div>
                <dt className="label text-mist">Time zone</dt>
                <dd className="mt-2 text-ivory">WAT, UTC+1</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-ivory/25 hover:border-ivory/60 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-4 h-4 text-mist" />
              </a>
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-ivory/25 hover:border-ivory/60 transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-4 h-4 text-mist" />
              </a>
            </div>
          </div>

          {/* Draft-an-email form */}
          <form onSubmit={compose} className="lg:col-span-6 min-w-0 flex flex-col gap-6" noValidate>
            <div>
              <label htmlFor="contact-name" className="label text-mist">
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full h-12 bg-transparent border-0 border-b border-ivory/25 focus:border-brass focus:outline-none text-lg text-ivory placeholder:text-mist/60 transition-colors"
                placeholder="Who's writing"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="label text-mist">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full bg-transparent border-0 border-b border-ivory/25 focus:border-brass focus:outline-none text-lg text-ivory placeholder:text-mist/60 resize-none leading-relaxed transition-colors"
                placeholder="The role, or the dataset and the question you need answered"
              />
            </div>
            {error && (
              <p className="text-sm text-[#f0a2a2]" role="alert">
                {error}
              </p>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-brass text-ink font-medium hover:bg-brass-soft transition-colors cursor-pointer"
              >
                Open in your email app
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-cine group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <p className="text-sm text-mist">Your message is drafted in your mail app for you to send.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
