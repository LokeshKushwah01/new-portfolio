'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { SectionTitle } from './SectionTitle';

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    demo: '#',
    accent: '#6366F1',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, drag-and-drop boards, and team workspaces.',
    tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
    github: '#',
    demo: '#',
    accent: '#8B5CF6',
  },
  {
    title: 'API Gateway Service',
    description:
      'Microservices gateway with rate limiting, JWT authentication middleware, and intelligent request routing.',
    tech: ['Node.js', 'Redis', 'Docker', 'AWS'],
    github: '#',
    demo: '#',
    accent: '#3B82F6',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Real-time analytics platform with interactive charts, multi-dimensional filters, and CSV export.',
    tech: ['React', 'TypeScript', 'GraphQL', 'D3.js'],
    github: '#',
    demo: '#',
    accent: '#10B981',
  },
  {
    title: 'Headless CMS',
    description:
      'Content management system with rich-text editing, media management, and multi-tenant support.',
    tech: ['Next.js', 'Strapi', 'PostgreSQL', 'S3'],
    github: '#',
    demo: '#',
    accent: '#0EA5E9',
  },
  {
    title: 'Real-Time Chat',
    description:
      'Encrypted messaging platform with file sharing, group channels, and message threading.',
    tech: ['React', 'WebSocket', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    accent: '#14B8A6',
  },
];

function FlipCard({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  inView: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-64"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#141D35] border border-slate-700/40 p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Accent top line */}
          <div
            className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
          />

          <div>
            <div
              className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center"
              style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}44` }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
            </div>
            <h3 className="text-base font-semibold text-slate-100 mb-2 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <p className="text-xs text-slate-600 mt-2">Hover to see details →</p>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, #141D35, #1a2340)`,
            border: `1px solid ${project.accent}44`,
            boxShadow: `0 0 30px ${project.accent}22`,
          }}
        >
          {/* Accent bottom line */}
          <div
            className="absolute bottom-0 left-8 right-8 h-[2px] rounded-t-full"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
          />

          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ color: project.accent }}>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-lg text-slate-200 font-medium"
                  style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}40` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white text-xs font-medium transition-colors border border-slate-700/50 hover:border-slate-500"
            >
              <GithubIcon size={13} /> View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all border"
              style={{
                background: `${project.accent}22`,
                borderColor: `${project.accent}50`,
                color: project.accent,
              }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="py-28 bg-[#0F1629]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="What I've built" title="Projects" />

        <div ref={ref} className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <FlipCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
