'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Building2, ExternalLink, Lock, User } from 'lucide-react';
import { GithubIcon } from './icons';
import { SectionTitle } from './SectionTitle';

type Category = 'company' | 'personal';
type Art = 'builder' | 'habits' | 'chart' | 'code';
type Filter = 'all' | Category;

interface Project {
  title: string;
  category: Category;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  accent: string;
  image?: string;
  art?: Art;
}

const PROJECTS: Project[] = [
  {
    title: 'UpCodo',
    category: 'company',
    description:
      'Modern redesign of the UpCodo company website, focused on a clean layout, fast performance and a polished first impression.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Strapi CMS'],
    demo: 'https://www.upcodo.com/',
    accent: '#F43F5E',
    image: '/projects/upcodo-v2.webp',
  },
  {
    title: 'Dispensor App',
    category: 'company',
    description:
      'A website builder platform that lets users design and publish their own websites quickly and easily.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Stripe'],
    accent: '#06B6D4',
    art: 'builder',
  },
  {
    title: 'Cerafyna',
    category: 'company',
    description:
      'An ethical AI companion platform: a family of AI guides built around a shared value system for human-centred AI.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Strapi CMS', 'OpenAI API'],
    demo: 'https://cerafyna.com',
    accent: '#A855F7',
    image: '/projects/cerafyna-v2.webp',
  },
  {
    title: 'CryptoPremium',
    category: 'company',
    description:
      'A crypto website that compares real-time buying fees across exchanges and platforms, so users can see where they pay least.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://cryptopremium.net',
    accent: '#F59E0B',
    image: '/projects/cryptopremium-v2.webp',
  },
  {
    title: 'Blip',
    category: 'company',
    description:
      'A video event network app for Android and iOS that brings RSVPs, live participation and recaps into one place.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://blippin.com/',
    accent: '#22C55E',
    image: '/projects/blip-v2.webp',
  },
  {
    title: 'TrackerHub Web',
    category: 'personal',
    description:
      'The TrackerHub web app, built with TypeScript and deployed on Vercel for fast, reliable access.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vercel'],
    demo: 'https://tracker-hub-web.vercel.app',
    accent: '#6366F1',
    art: 'habits',
  },
  {
    title: 'Blog Platform',
    category: 'personal',
    description:
      'A full-stack blog platform where posts are managed through an API and published to a clean reading experience.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://blog-frontend-topaz-alpha.vercel.app',
    accent: '#EC4899',
    image: '/projects/blog-platform-v2.webp',
  },
  {
    title: 'Stocks Analysis',
    category: 'personal',
    description:
      'A stock market analysis tool for exploring market data and understanding price trends.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Lightweight Charts'],
    accent: '#14B8A6',
    art: 'chart',
  },
  {
    title: 'Aether Travel',
    category: 'personal',
    description:
      'Luxury travel agency website with a parallax hero, filterable journeys, an editorial journal and scroll-triggered GSAP animations.',
    tech: ['Next.js', 'React', 'TypeScript', 'GSAP'],
    github: 'https://github.com/LokeshKushwah01/aether-travel',
    demo: 'https://aether-travel-mu.vercel.app',
    accent: '#D1A877',
    image: '/projects/aether-travel-v2.webp',
  },
  {
    title: 'Minimalist Habit Tracker',
    category: 'personal',
    description:
      'Dark-themed mobile app to track daily habits and to-dos, with a progress ring, weekly stats and streaks.',
    tech: ['Expo', 'React Native', 'TypeScript'],
    github: 'https://github.com/LokeshKushwah01/habbit-trackerr-',
    accent: '#818CF8',
    art: 'habits',
  },
  {
    title: 'Jym Gymnasium',
    category: 'personal',
    description:
      'A modern gym website with programs, trainers, gallery and pricing, in a dark and gold design.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/LokeshKushwah01/Jym',
    accent: '#8B5CF6',
    image: '/projects/jym-gymnasium-v2.webp',
  },
  {
    title: 'Netflix Clone',
    category: 'personal',
    description:
      'Front-end clone of the Netflix landing experience, deployed on Vercel.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/LokeshKushwah01/Netflix-Clone',
    demo: 'https://netflix-clone-flame-ten-26.vercel.app',
    accent: '#EF4444',
    image: '/projects/netflix-clone-v2.webp',
  },
  {
    title: 'Developer Portfolio',
    category: 'personal',
    description:
      'This portfolio — built with Next.js App Router, Framer Motion animations, and a custom dark design system.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/LokeshKushwah01/new-portfolio',
    demo: 'https://trackerhub.in',
    accent: '#10B981',
    art: 'code',
  },
];

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'company', label: 'Company' },
  { key: 'personal', label: 'Personal' },
];

const isLink = (url?: string): url is string => !!url && url !== '#';

function BannerArt({ art, accent }: { art: Art; accent: string }) {
  const stroke = { stroke: accent, strokeWidth: 1.5, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const soft = `${accent}33`;
  const mid = `${accent}66`;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 150"
      className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
      preserveAspectRatio="xMidYMid slice"
    >
      {art === 'chart' && (
        <g>
          {[40, 70, 100, 130].map((y) => (
            <line key={y} x1="30" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const h = [28, 40, 24, 52, 36, 60, 44, 70, 58][i];
            return <rect key={i} x={42 + i * 28} y={132 - h} width="14" height={h} rx="3" fill={soft} />;
          })}
          <path d="M42 112 L72 98 L100 106 L128 78 L156 88 L184 60 L212 70 L240 42 L268 50 L296 30" {...stroke} strokeWidth={2.5} />
          <circle cx="296" cy="30" r="5" fill={accent} />
          <circle cx="296" cy="30" r="11" fill={soft} />
        </g>
      )}
      {art === 'builder' && (
        <g>
          <rect x="58" y="26" width="204" height="102" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
          <circle cx="74" cy="39" r="3" fill="rgba(255,255,255,0.3)" />
          <circle cx="86" cy="39" r="3" fill="rgba(255,255,255,0.3)" />
          <circle cx="98" cy="39" r="3" fill="rgba(255,255,255,0.3)" />
          <rect x="70" y="52" width="180" height="26" rx="6" fill={soft} />
          <rect x="82" y="61" width="70" height="8" rx="4" fill={accent} />
          <rect x="70" y="88" width="56" height="30" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect x="132" y="88" width="56" height="30" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect x="194" y="88" width="56" height="30" rx="6" fill={mid} strokeDasharray="4 3" stroke={accent} />
          <path d="M232 78 l0 14 l4 -3 l3 6 l3 -1.5 l-3 -6 l5 -0.5 z" fill="#fff" />
        </g>
      )}
      {art === 'habits' && (
        <g>
          <circle cx="92" cy="75" r="34" {...stroke} stroke={soft} strokeWidth={9} />
          <circle
            cx="92" cy="75" r="34" {...stroke} strokeWidth={9}
            strokeDasharray="150 214" transform="rotate(-90 92 75)"
          />
          <path d="M80 76 l9 9 l17 -19" {...stroke} strokeWidth={4} />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <g key={i}>
              <rect x={150 + i * 21} y="52" width="16" height="16" rx="5" fill={i < 5 ? mid : 'rgba(255,255,255,0.07)'} />
              <rect x={150 + i * 21} y="76" width="16" height="16" rx="5" fill={i < 3 || i === 5 ? mid : 'rgba(255,255,255,0.07)'} />
              <rect x={150 + i * 21} y="100" width="16" height="16" rx="5" fill={i % 2 === 0 ? mid : 'rgba(255,255,255,0.07)'} />
            </g>
          ))}
        </g>
      )}
      {art === 'code' && (
        <g>
          <rect x="52" y="22" width="216" height="110" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
          <circle cx="68" cy="36" r="3" fill="#ff5f57" />
          <circle cx="80" cy="36" r="3" fill="#febc2e" />
          <circle cx="92" cy="36" r="3" fill="#28c840" />
          <rect x="68" y="52" width="40" height="7" rx="3.5" fill={accent} />
          <rect x="114" y="52" width="72" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
          <rect x="82" y="68" width="60" height="7" rx="3.5" fill={mid} />
          <rect x="148" y="68" width="88" height="7" rx="3.5" fill="rgba(255,255,255,0.14)" />
          <rect x="82" y="84" width="96" height="7" rx="3.5" fill="rgba(255,255,255,0.14)" />
          <rect x="184" y="84" width="40" height="7" rx="3.5" fill={mid} />
          <rect x="68" y="100" width="28" height="7" rx="3.5" fill={accent} />
          <rect x="100" y="98" width="2" height="11" fill="#fff" />
        </g>
      )}
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const { title, description, accent, category, tech } = project;
  const hasDemo = isLink(project.demo);
  const hasCode = isLink(project.github);
  const initials = title
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  const company = category === 'company' ? 'Digimonk Technologies' : 'Personal';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.04 }}
      className="h-[26rem] cursor-pointer"
      style={{ perspective: 1200 }}
      tabIndex={0}
      aria-label={`${title} — press Enter to flip`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 flex flex-col rounded-3xl overflow-hidden bg-[#111A30] ring-1 ring-white/5"
          style={{ backfaceVisibility: 'hidden', boxShadow: '0 10px 30px -18px rgba(0,0,0,0.8)' }}
        >
          {/* Banner */}
          <div
            className="relative h-48 shrink-0 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${accent}40 0%, ${accent}12 45%, #0F1629 100%)`,
            }}
          >
            {project.image ? (
              <>
                <Image
                  src={project.image}
                  alt={`${title} website preview`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#111A30] to-transparent" />
              </>
            ) : (
              <>
                <div
                  className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-60"
                  style={{ background: accent }}
                />
                <div
                  className="absolute -bottom-16 -left-10 w-40 h-40 rounded-full blur-3xl opacity-25"
                  style={{ background: accent }}
                />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                  }}
                />
                {project.art ? (
                  <BannerArt art={project.art} accent={accent} />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute right-5 bottom-[-0.9rem] text-[6.5rem] leading-none font-black tracking-tighter select-none"
                    style={{ color: 'transparent', WebkitTextStroke: `1.5px ${accent}99` }}
                  >
                    {initials}
                  </span>
                )}
              </>
            )}
            {/* Accent top line */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
            />
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-6 pt-4">
            <span className="inline-flex items-center gap-1.5 self-start text-[11px] font-medium text-slate-400 mb-2">
              {category === 'company' ? <Building2 size={12} /> : <User size={12} />}
              {company}
            </span>
            <h3 className="text-xl font-semibold text-slate-50 mb-2 tracking-tight">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{description}</p>
            <p className="mt-auto text-xs text-slate-600">Hover to see details →</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-3xl p-7 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(145deg, #141D35 0%, ${accent}26 100%)`,
            border: `1px solid ${accent}55`,
            boxShadow: `0 24px 60px -24px ${accent}88`,
          }}
        >
          <div
            className="absolute bottom-0 left-8 right-8 h-[2px] rounded-t-full"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          />

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] mb-1" style={{ color: accent }}>
              {company}
            </p>
            <h3 className="text-xl font-semibold text-slate-50 mb-4 tracking-tight">{title}</h3>
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">Tech stack</p>
            <ul className="flex flex-wrap gap-2" aria-label={`${title} technologies`}>
              {tech.map((t) => (
                <li
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-lg text-slate-100 font-medium"
                  style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} live site`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:brightness-125"
                style={{ background: `${accent}2e`, border: `1px solid ${accent}66`, color: accent }}
              >
                <ExternalLink size={14} /> Live site
              </a>
            )}
            {hasCode && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} source code`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-slate-800/70 border border-slate-700/60 hover:border-slate-500 transition-colors"
              >
                <GithubIcon size={14} /> Source
              </a>
            )}
            {!hasDemo && !hasCode && (
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                <Lock size={14} /> Private project
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [filter, setFilter] = useState<Filter>('all');

  const visible = PROJECTS.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="py-28 bg-[#0F1629]/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="What I've built" title="Projects" />

        <p className="text-center text-slate-400 max-w-xl mx-auto mt-6 text-sm leading-relaxed">
          Products I&apos;ve shipped at Digimonk Technologies and projects I&apos;ve built on my own.
        </p>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter projects"
          className="mt-10 flex justify-center gap-2 flex-wrap"
        >
          {FILTERS.map(({ key, label }) => {
            const active = filter === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(key)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-indigo-600"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            );
          })}
        </div>

        <div ref={ref} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {inView &&
              visible.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
