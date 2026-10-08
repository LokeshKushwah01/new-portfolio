'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, MapPin } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const STATS = [
  { end: 3,  suffix: '+', label: 'Years Experience' },
  { end: 20, suffix: '+', label: 'Projects Delivered' },
  { end: 15, suffix: '+', label: 'Technologies' },
  { end: 10, suffix: '+', label: 'Happy Clients' },
];

function CountUp({ end, suffix, run }: { end: number; suffix: string; run: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [run, end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 bg-[#0F1629]/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="Get to know me" title="About Me" />

        <div ref={ref} className="grid md:grid-cols-2 gap-14 mt-16 items-center">
          {/* Avatar block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Indigo glow behind image */}
              <div className="absolute -inset-2 rounded-3xl bg-indigo-500/15 blur-2xl group-hover:bg-indigo-500/25 transition-all duration-500" />

              {/* Corner accent brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-500/60 rounded-tl-2xl z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-500/60 rounded-br-2xl z-10" />

              {/* Image container */}
              <div className="relative w-72 md:w-80 rounded-2xl overflow-hidden border border-indigo-500/20">
                <Image
                  src="/avatar.png"
                  alt="Lokesh Kushwah — Full-Stack Developer"
                  width={320}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#141D35] border border-indigo-500/30 text-indigo-300 text-xs font-mono px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                Full-Stack Developer
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Quick facts */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200">
                <MapPin size={12} aria-hidden="true" /> Gwalior, India
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Open to new work
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-50 tracking-tight leading-tight mb-5">
              I turn ideas into{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                fast, reliable products
              </span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m <span className="text-slate-100 font-medium">Lokesh Kushwah</span>, a full-stack
              developer who builds web and mobile products end to end, from the database and APIs to
              the interface people actually use. Day to day I work with{' '}
              <span className="text-slate-200">React, Next.js, React Native and Node.js</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I care about clean, maintainable code and experiences that feel smooth on every screen.
              Whether it&apos;s a company website, an AI product or a mobile app, the goal stays the
              same: ship something simple, fast and a pleasure to use.
            </p>

            {/* Stats grid with count-up */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#16203B] to-[#111A30] p-5 transition-colors duration-300 hover:border-indigo-500/40"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">
                    <CountUp end={s.end} suffix={s.suffix} run={inView} />
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 tracking-wide">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
