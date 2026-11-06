import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Copy, Check, Github, Linkedin, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger refined confetti in cool ice blue & emerald tones
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#38BDF8', '#60A5FA', '#34D399', '#FFFFFF']
        });
      } catch {
        // Safe fallback
      }
    }, 700);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider mb-2">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let's discuss how data can power your next decision.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Open for full-time Data Analyst opportunities, freelance business intelligence dashboard builds, and collaborative research.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info & Glass Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Coordinates & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-slate-100/80 dark:bg-[#111625] border border-slate-200 dark:border-white/5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-[#38BDF8] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                Email Directly
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                Fastest response for projects, queries, or interview requests:
              </p>

              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white dark:bg-[#0A0E17] border border-slate-200 dark:border-slate-800 font-mono text-xs">
                <span className="truncate text-slate-800 dark:text-slate-200">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-[#38BDF8] hover:bg-slate-100 dark:hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-[11px] font-mono text-emerald-400 mt-2">
                  ✓ Copied email to clipboard!
                </p>
              )}

              <div className="mt-4">
                <a
                  href={PERSONAL_INFO.social.emailMailto}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open in Mail App</span>
                </a>
              </div>
            </div>

            {/* Location & Placement Card */}
            <div className="p-6 rounded-2xl bg-slate-100/80 dark:bg-[#111625] border border-slate-200 dark:border-white/5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Location & Base
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                <strong>{PERSONAL_INFO.location}</strong>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Currently based at Malhub, GRA Ilorin. Available for both on-site roles in Kwara/Lagos and remote opportunities worldwide.
              </p>
            </div>

            {/* Social Links Row with real GitHub repository URL */}
            <div className="p-6 rounded-2xl bg-slate-100/80 dark:bg-[#111625] border border-slate-200 dark:border-white/5 shadow-md">
              <h4 className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-4">
                Connect On Professional Networks
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-white bg-white dark:bg-white/5 hover:bg-[#0284C7] border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-white bg-white dark:bg-white/5 hover:bg-slate-800 border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4 text-[#38BDF8]" />
                  <span>GitHub Repositories</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl glass-panel shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#38BDF8]" />
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. I have received your message and will review your request promptly at <strong>{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold text-white bg-[#0284C7] rounded-xl hover:bg-[#0369A1] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Power BI Dashboard Project / Job Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your dataset, business questions, or role details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] shadow-md transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
