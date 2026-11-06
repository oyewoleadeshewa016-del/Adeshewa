import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';

const START = [32, 58, 45, 82, 64, 95, 76, 88];
const WITH_OUTLIER = [40, 48, 52, 100, 30, 25, 45, 50];

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

/**
 * A small playground: sample daily order counts with live mean and median,
 * showing how one outlier drags an average.
 */
export const MeasureLab: React.FC = () => {
  const [data, setData] = useState(START);
  const mean = useMemo(() => Math.round(data.reduce((a, b) => a + b, 0) / data.length), [data]);
  const med = useMemo(() => Math.round(median(data)), [data]);
  const max = Math.max(...data);

  const bump = (i: number) =>
    setData((d) => d.map((v, j) => (j === i ? (v + 10 > 100 ? 15 : v + 10) : v)));
  const shuffle = () => setData((d) => d.map(() => Math.floor(Math.random() * 66) + 30));

  return (
    <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <div className="lg:col-span-4 min-w-0">
        <p className="label text-brass flex items-center gap-3">
          <span className="h-px w-8 bg-brass/70" aria-hidden="true" />
          Try it
        </p>
        <h3 className="mt-5 font-display text-[clamp(2rem,5vw,3rem)] leading-[1] tracking-[-0.015em]">
          Mean or median?
        </h3>
        <p className="mt-5 text-mist leading-relaxed max-w-[44ch]">
          Eight days of sample order counts. Tap a bar to add 10, or drop in an outlier and watch the mean
          move while the median barely does. That gap is why I check both before reporting an average.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          <button
            onClick={() => setData(WITH_OUTLIER)}
            className="h-11 px-5 rounded-full bg-brass text-ink text-sm font-medium hover:bg-brass-soft transition-colors cursor-pointer"
          >
            Add an outlier
          </button>
          <button
            onClick={shuffle}
            className="h-11 px-5 rounded-full border border-ivory/25 text-sm hover:border-ivory/60 transition-colors cursor-pointer"
          >
            Shuffle
          </button>
          <button
            onClick={() => setData(START)}
            className="h-11 px-4 text-sm text-mist hover:text-ivory transition-colors cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="lg:col-span-8 min-w-0 rounded-[4px] bg-ink-2 border border-line p-5 md:p-8">
        {/* readout */}
        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-line">
          <div>
            <p className="label text-brass">Mean</p>
            <p className="mt-1 font-display text-5xl leading-none tnum">{mean}</p>
          </div>
          <div>
            <p className="label text-ivory/70">Median</p>
            <p className="mt-1 font-display text-5xl leading-none tnum">{med}</p>
          </div>
        </div>

        {/* chart: y scale 0–100 */}
        <div className="mt-8 grid grid-cols-[2rem_1fr] gap-2">
          <div className="relative h-56 md:h-64 font-mono text-[0.68rem] text-mist tnum" aria-hidden="true">
            <span className="absolute right-0 top-0 -translate-y-1/2">100</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2">50</span>
            <span className="absolute right-0 bottom-0 translate-y-1/2">0</span>
          </div>
          <div className="relative h-56 md:h-64">
            {/* grid */}
            <div className="absolute inset-x-0 top-0 border-t border-line" />
            <div className="absolute inset-x-0 top-1/2 border-t border-line" />
            <div className="absolute inset-x-0 bottom-0 border-t border-ivory/30" />

            <div className="absolute inset-0 flex items-end gap-2 sm:gap-3">
              {data.map((v, i) => (
                <button
                  key={i}
                  onClick={() => bump(i)}
                  className="relative flex-1 h-full flex items-end cursor-pointer group"
                  aria-label={`Day ${i + 1}: ${v} orders. Tap to add 10.`}
                >
                  <motion.span
                    className={`block w-full rounded-t-[2px] ${
                      v === max ? 'bg-brass' : 'bg-ivory/25 group-hover:bg-ivory/45'
                    } transition-colors`}
                    animate={{ height: `${v}%` }}
                    transition={{ type: 'spring', damping: 22, stiffness: 180 }}
                  />
                  <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[0.68rem] text-ivory/80 tnum pointer-events-none" style={{ bottom: `calc(${v}% + 6px)` }}>
                    {v}
                  </span>
                </button>
              ))}
            </div>

            {/* reference lines */}
            <motion.div
              className="absolute inset-x-0 border-t-2 border-brass pointer-events-none"
              animate={{ bottom: `${mean}%` }}
              transition={{ type: 'spring', damping: 24, stiffness: 160 }}
            />
            <motion.div
              className="absolute inset-x-0 border-t border-dashed border-ivory/80 pointer-events-none"
              animate={{ bottom: `${med}%` }}
              transition={{ type: 'spring', damping: 24, stiffness: 160 }}
            />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-[2rem_1fr] gap-2">
          <span />
          <div className="flex gap-2 sm:gap-3 font-mono text-[0.68rem] text-mist">
            {data.map((_, i) => (
              <span key={i} className="flex-1 text-center">
                D{i + 1}
              </span>
            ))}
          </div>
        </div>

        <pre className="mt-6 pt-5 border-t border-line overflow-x-auto font-mono text-[0.78rem] leading-relaxed text-ivory/75">
{`Mean   = AVERAGE(Sample[Orders])
Median = MEDIAN(Sample[Orders])`}
        </pre>
      </div>
    </div>
  );
};
