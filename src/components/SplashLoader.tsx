import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashLoaderProps {
  onComplete: () => void;
}

export const SplashLoader: React.FC<SplashLoaderProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0E17]"
        >
          {/* Subtle cool background glow */}
          <div className="absolute w-72 h-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          {/* Monogram */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-[#111625] border border-slate-700/80 shadow-xl"
            >
              <span className="font-heading text-2xl font-bold tracking-wider text-[#38BDF8]">
                AO
              </span>

              {/* Pulsing subtle ring */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0.6 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeOut' }}
                className="absolute inset-0 rounded-2xl border border-[#38BDF8]/30"
              />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-6 text-center"
          >
            <p className="font-heading text-sm font-semibold tracking-wider text-slate-300">
              Adeshewa Damilola Oyewole
            </p>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span className="text-xs font-mono text-slate-400">Data Analyst · Portfolio</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
