import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface SheetProps {
  open: boolean;
  onClose: () => void;
  label: string;
  /** "dark" for case studies, "paper" for the CV */
  tone?: 'dark' | 'paper';
  children: React.ReactNode;
}

/**
 * Full-height sheet that slides up from the bottom on phones and settles as a
 * centred panel on larger screens. Locks page scroll and closes on Escape.
 */
export const Sheet: React.FC<SheetProps> = ({ open, onClose, label, tone = 'dark', children }) => {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const surface =
    tone === 'paper'
      ? 'bg-[#f6f2ea] text-[#141a2a]'
      : 'bg-ink-2 text-ivory border border-line';

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="print-root fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <motion.div
            className="print-hide absolute inset-0 bg-[#05070d]/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className={`print-sheet relative w-full md:max-w-4xl h-[94dvh] md:h-auto md:max-h-[90dvh] overflow-y-auto overscroll-contain rounded-t-[22px] md:rounded-[6px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] ${surface}`}
            initial={reduce ? { opacity: 0 } : { y: '100%' }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            exit={reduce ? { opacity: 0 } : { y: '100%' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
          >
            {/* grab handle on phones */}
            <div className="print-hide md:hidden flex justify-center pt-2.5">
              <span className={`h-1 w-10 rounded-full ${tone === 'paper' ? 'bg-black/15' : 'bg-ivory/20'}`} />
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
