'use client';
import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import type { ComponentType, CSSProperties } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiBootstrap, SiMui,
  SiFramer, SiGreensock, SiExpo,
  SiNodedotjs, SiExpress, SiStrapi, SiSocketdotio, SiStripe, SiOpenai,
  SiMongodb, SiPostgresql,
  SiGit, SiGithub, SiPostman, SiNetlify, SiVercel,
} from 'react-icons/si';
import { SectionTitle } from './SectionTitle';

type Category = 'language' | 'frontend' | 'backend' | 'tools';
type Filter = 'all' | Category;

type SkillIcon = ComponentType<{ size?: number; style?: CSSProperties; 'aria-hidden'?: boolean | 'true' | 'false' }>;

// Official Vite logo (multi-colour gradient), the icon pack only ships a flat one
function ViteLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 410 404" aria-hidden="true">
      <defs>
        <linearGradient id="vite-a" x1="-.828%" y1="7.652%" x2="57.636%" y2="78.411%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-b" x1="43.376%" y1="2.242%" x2="50.316%" y2="89.03%">
          <stop offset="0%" stopColor="#FFEA83" />
          <stop offset="8.333%" stopColor="#FFDD35" />
          <stop offset="100%" stopColor="#FFA800" />
        </linearGradient>
      </defs>
      <path d="m399.641 59.5246-186.9 334.1324c-3.857 6.896-13.78 6.968-17.74.127L9.34 59.8113c-4.28-7.4075 2.047-16.3814 10.455-14.8398l186.1 33.3187c1.216.2193 2.462.2155 3.678-.0107l182.2-33.2566c8.354-1.5238 14.73 7.3562 10.595 14.7518z" fill="url(#vite-a)" />
      <path d="M292.965 1.5744 156.801 28.2552c-2.24.4381-3.863 2.3598-3.995 4.6406l-8.378 145.2672c-.178 3.074 2.576 5.519 5.584 4.8607l37.9-8.3011c3.316-.7267 6.317 2.2178 5.641 5.5438l-11.254 55.2224c-.738 3.6217 2.675 6.7007 6.203 5.5964l23.4-7.3269c3.536-1.1057 6.95 1.9818 6.201 5.6091l-17.8 86.1428c-1.1 5.358 6.027 8.28 9.011 3.686l1.994-3.071 109.8-219.1347c1.834-3.6603-1.342-7.8338-5.351-7.0343l-39.1 7.7928c-3.372.6726-6.328-2.4838-5.468-5.8396l25.5-99.1475c.861-3.3555-2.1-6.5137-5.469-5.8372z" fill="url(#vite-b)" />
    </svg>
  );
}

interface Skill {
  name: string;
  Icon: SkillIcon;
  color: string;
  category: Category;
}

const SKILLS: Skill[] = [
  // Frontend & mobile first: the core of the work
  { name: 'React', Icon: SiReact, color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF', category: 'frontend' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', category: 'language' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', category: 'language' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#68A063', category: 'backend' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', category: 'backend' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },
  { name: 'React Native', Icon: SiReact, color: '#61DAFB', category: 'frontend' },
  { name: 'Expo', Icon: SiExpo, color: '#E5E7EB', category: 'frontend' },
  { name: 'Redux Toolkit', Icon: SiRedux, color: '#764ABC', category: 'frontend' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#E94FFF', category: 'frontend' },
  { name: 'GSAP', Icon: SiGreensock, color: '#88CE02', category: 'frontend' },
  { name: 'Material UI', Icon: SiMui, color: '#007FFF', category: 'frontend' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3', category: 'frontend' },
  { name: 'Vite', Icon: ViteLogo, color: '#9F6BFF', category: 'frontend' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', category: 'language' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6', category: 'language' },
  { name: 'Python', Icon: SiPython, color: '#3776AB', category: 'language' },
  { name: 'Express.js', Icon: SiExpress, color: '#E5E7EB', category: 'backend' },
  { name: 'Strapi', Icon: SiStrapi, color: '#8E75FF', category: 'backend' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4A90C2', category: 'backend' },
  { name: 'Socket.io', Icon: SiSocketdotio, color: '#C7D2FE', category: 'backend' },
  { name: 'Stripe', Icon: SiStripe, color: '#8B8BFF', category: 'backend' },
  { name: 'OpenAI API', Icon: SiOpenai, color: '#E5E7EB', category: 'backend' },
  { name: 'Git', Icon: SiGit, color: '#F05032', category: 'tools' },
  { name: 'GitHub', Icon: SiGithub, color: '#E5E7EB', category: 'tools' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37', category: 'tools' },
  { name: 'Vercel', Icon: SiVercel, color: '#E5E7EB', category: 'tools' },
  { name: 'Netlify', Icon: SiNetlify, color: '#00C7B7', category: 'tools' },
];

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend & Mobile' },
  { key: 'backend', label: 'Backend & Data' },
  { key: 'language', label: 'Languages' },
  { key: 'tools', label: 'Tools' },
];

function SkillTile({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const { name, color, Icon } = skill;

  const onMove = (e: MouseEvent<HTMLLIElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.li
      ref={ref}
      layout
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: Math.min(index, 14) * 0.025 }}
      whileHover={{ y: -6 }}
      onMouseMove={onMove}
      className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#111A30]/90 px-3 py-6 ring-1 ring-white/5 cursor-default transition-shadow duration-300"
      style={{ boxShadow: '0 8px 24px -16px rgba(0,0,0,0.8)' }}
    >
      {/* Cursor spotlight in the brand colour */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(130px circle at var(--mx, 50%) var(--my, 50%), ${color}30, transparent 70%)`,
        }}
      />
      {/* Hover ring */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${color}77, 0 14px 34px -14px ${color}aa` }}
      />

      <div className="relative flex h-16 w-16 items-center justify-center">
        {/* Glow behind the icon */}
        <div
          className="absolute inset-0 rounded-2xl blur-xl opacity-30 transition-opacity duration-300 group-hover:opacity-70"
          style={{ background: color }}
        />
        <div
          className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1224]/80 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
        >
          <Icon size={32} style={{ color }} aria-hidden="true" />
        </div>
      </div>

      <span className="relative text-[13px] font-medium text-slate-300 transition-colors duration-300 group-hover:text-white text-center leading-tight">
        {name}
      </span>
    </motion.li>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [filter, setFilter] = useState<Filter>('all');

  const visible = SKILLS.filter((s) => filter === 'all' || s.category === filter);

  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="What I work with" title="Skills & Stack" />

        <p className="text-center text-slate-400 max-w-2xl mx-auto mt-6 text-base leading-relaxed text-balance">
          From polished interfaces to scalable APIs, this is the toolkit I use to take
          <span className="text-slate-200"> web and mobile products </span>
          from idea to production.
        </p>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter skills"
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
                    layoutId="skill-filter"
                    className="absolute inset-0 rounded-full bg-indigo-600"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            );
          })}
        </div>

        <ul
          ref={ref}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {inView &&
              visible.map((skill, i) => (
                <SkillTile key={skill.name} skill={skill} index={i} />
              ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
