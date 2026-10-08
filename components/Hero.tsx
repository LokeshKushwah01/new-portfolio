'use client';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { GithubIcon, LinkedinIcon } from './icons';
import { scrollToSection } from '@/lib/scrollToSection';

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const WORDS = ['Lokesh', 'Kushwah'];

const TECH = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#68A063' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/LokeshKushwah01', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lokesh-kushwah-75974b230', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:lokeshkushwah192@gmail.com', Icon: Mail },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Ambient glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[550px] h-[550px] rounded-full bg-violet-700/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[420px] rounded-full bg-[radial-gradient(ellipse,rgba(139,92,246,0.18),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[110px] pointer-events-none" />
      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080B14] to-transparent pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl px-6 pt-16">
        {/* Status pill */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.3em] uppercase text-emerald-300 border border-emerald-400/25 bg-emerald-400/5 px-4 py-1.5 rounded-full backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work
          </span>
        </motion.div>

        {/* H1: name + role (one heading, good for SEO) */}
        <h1 className="mb-6">
          <span className="block text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-[-0.03em] leading-[0.95]">
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.15, ease: EASE }}
                className="inline-block mr-[0.25em] last:mr-0 bg-gradient-to-b from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <motion.span
            {...fadeUp(0.6)}
            className="mt-5 block text-sm sm:text-base font-medium tracking-[0.4em] uppercase bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
          >
            Full-Stack Developer
          </motion.span>
        </h1>

        {/* Typed tagline */}
        <motion.div
          {...fadeUp(0.75)}
          className="text-lg md:text-xl text-slate-400 mb-3 h-8"
          aria-live="off"
        >
          <TypeAnimation
            sequence={[
              'Building scalable web applications.', 2600,
              'Crafting performant React UIs.', 2600,
              'Shipping mobile apps with React Native.', 2600,
              'Engineering robust Node.js APIs.', 2600,
              'Turning ideas into products.', 2600,
            ]}
            repeat={Infinity}
            speed={55}
          />
        </motion.div>

        <motion.p
          {...fadeUp(0.85)}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 mb-10"
        >
          <MapPin size={12} aria-hidden="true" /> Gwalior, India
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.95)} className="flex flex-wrap gap-4 justify-center mb-6">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-700 to-violet-700 text-white/95 font-medium text-sm tracking-wide shadow-[0_6px_20px_-10px_rgba(99,102,241,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-600 hover:to-violet-600 hover:shadow-[0_10px_28px_-10px_rgba(139,92,246,0.55)]"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="inline-flex items-center px-7 py-3.5 rounded-xl border border-slate-700/70 bg-white/[0.02] backdrop-blur text-slate-300 font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-white"
          >
            Get In Touch
          </a>
          <a
            href={process.env.NEXT_PUBLIC_CV_URL ?? '/Lokesh_Kushwah_CV.pdf'}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-indigo-500/25 bg-indigo-500/5 text-slate-300 font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500/15 hover:border-indigo-500/50 hover:text-white"
          >
            <Download size={15} className="text-indigo-400 group-hover:animate-bounce" />
            Download CV
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div {...fadeUp(1.05)} className="flex gap-3 justify-center mb-10">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-300 hover:shadow-[0_8px_24px_-8px_rgba(99,102,241,0.7)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Tech strip */}
        <motion.div {...fadeUp(1.15)} className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-[11px] uppercase tracking-[0.25em] text-slate-600">Built with</span>
          <ul className="flex items-center gap-2.5">
            {TECH.map(({ name, Icon, color }) => (
              <li
                key={name}
                title={name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon size={17} style={{ color }} aria-label={name} />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          aria-label="Scroll to About"
          className="mt-10 inline-flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-600 pt-1.5">
            <motion.span
              className="h-1.5 w-1 rounded-full bg-indigo-400"
              animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </motion.a>
      </div>

    </section>
  );
}
