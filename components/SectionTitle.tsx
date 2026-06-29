'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  subtitle: string;
  title: string;
}

export function SectionTitle({ subtitle, title }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="text-center mb-4">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-indigo-500 text-xs tracking-[0.25em] uppercase mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-slate-100"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mx-auto mt-4 h-[2px] w-16 bg-indigo-500 origin-center rounded-full"
      />
    </div>
  );
}
