'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiTypescript, SiJavascript, SiPython,
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
  SiBootstrap, SiMui, SiHtml5, SiCss, SiSocketdotio,
  SiNodedotjs, SiExpress,
  SiMongodb,
  SiGit, SiGithub, SiPostman, SiNetlify, SiVercel,
} from 'react-icons/si';
import { SectionTitle } from './SectionTitle';

const SKILLS = [
  { name: 'TypeScript',    Icon: SiTypescript,  color: '#3178C6' },
  { name: 'JavaScript',   Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Python',       Icon: SiPython,      color: '#3776AB' },
  { name: 'React',        Icon: SiReact,       color: '#61DAFB' },
  { name: 'Next.js',      Icon: SiNextdotjs,   color: '#FFFFFF' },
  { name: 'Redux Toolkit',Icon: SiRedux,       color: '#764ABC' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap',    Icon: SiBootstrap,   color: '#7952B3' },
  { name: 'Material UI',  Icon: SiMui,         color: '#007FFF' },
  { name: 'HTML5',        Icon: SiHtml5,       color: '#E34F26' },
  { name: 'CSS3',         Icon: SiCss,         color: '#1572B6' },
  { name: 'Socket.io',    Icon: SiSocketdotio, color: '#A8B8D8' },
  { name: 'Node.js',      Icon: SiNodedotjs,   color: '#68A063' },
  { name: 'Express.js',   Icon: SiExpress,     color: '#FFFFFF' },
  { name: 'MongoDB',      Icon: SiMongodb,     color: '#47A248' },
  { name: 'Git',          Icon: SiGit,         color: '#F05032' },
  { name: 'GitHub',       Icon: SiGithub,      color: '#FFFFFF' },
  { name: 'Postman',      Icon: SiPostman,     color: '#FF6C37' },
  { name: 'Netlify',      Icon: SiNetlify,     color: '#00C7B7' },
  { name: 'Vercel',       Icon: SiVercel,      color: '#FFFFFF' },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="What I work with" title="Skills & Stack" />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="group flex flex-col items-center gap-3 bg-[#141D35] border border-indigo-500/10 hover:border-indigo-500/40 rounded-2xl px-4 py-5 cursor-default transition-all duration-300 hover:shadow-[0_6px_24px_rgba(99,102,241,0.12)]"
            >
              <div
                className="w-12 h-12 rounded-xl bg-[#0F1629] border border-slate-700/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ boxShadow: `0 0 14px ${skill.color}25` }}
              >
                <skill.Icon
                  size={24}
                  style={{ color: skill.color }}
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors duration-300 text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
