'use client';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: 'easeOut' as const },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Blurred gradient orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[550px] h-[550px] rounded-full bg-violet-700/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-indigo-400 mb-6 border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.25)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 tracking-tight mb-5 leading-tight"
        >
          Lokesh Kushwah
        </motion.h1>

        <motion.div {...fadeUp(0.4)} className="text-lg md:text-xl text-slate-400 mb-10 h-7">
          <TypeAnimation
            sequence={[
              'Building scalable web applications.', 2800,
              'Crafting performant React UIs.', 2800,
              'Engineering robust Node.js APIs.', 2800,
              'Turning ideas into products.', 2800,
            ]}
            repeat={Infinity}
            speed={55}
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-wrap gap-4 justify-center mb-5"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-slate-700/60 text-slate-400 hover:border-slate-500 hover:text-slate-200 rounded-lg font-medium text-sm tracking-wide transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.62)} className="flex justify-center mb-10">
          <a
            href="/Lokesh_Kushwah_CV.pdf"
            download
            className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-indigo-500/25 bg-indigo-500/5 hover:bg-indigo-500/15 hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-medium tracking-wide transition-all duration-300"
          >
            <Download size={14} className="text-indigo-400 group-hover:animate-bounce" />
            Download CV
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.7)} className="flex gap-6 justify-center">
          <a href="https://github.com/LokeshKushwah01" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-indigo-400 transition-colors duration-300">
            <GithubIcon size={19} />
          </a>
          <a href="https://www.linkedin.com/in/lokesh-kushwah-75974b230" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-indigo-400 transition-colors duration-300">
            <LinkedinIcon size={19} />
          </a>
          <a href="mailto:lokeshkushwah192@gmail.com" aria-label="Email" className="text-slate-500 hover:text-indigo-400 transition-colors duration-300">
            <Mail size={19} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
