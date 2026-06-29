'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

const EXPERIENCE = [
  {
    role: 'Full-Stack Developer',
    company: 'Digimonk Solutions',
    duration: '2025 — Present',
    points: [
      'Built and maintained scalable web applications for diverse client portfolios.',
      'Led frontend architecture decisions and implemented reusable component systems.',
      'Optimised database queries and API performance, achieving 40% faster response times.',
      'Collaborated with designers to deliver pixel-perfect, accessible interfaces.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Digimonk Solutions',
    duration: 'june,2025 — August,2025',
    points: [
      'Developed RESTful APIs with Node.js and Express serving 10k+ daily users.',
      'Integrated third-party services including payment gateways and cloud storage.',
      'Participated in Agile sprints, code reviews, and daily standups.',
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    duration: '2021 — 2022',
    points: [
      'Delivered 10+ client projects including e-commerce sites and admin dashboards.',
      'Managed the full project lifecycle from requirements gathering to deployment.',
      'Built strong client relationships through clear communication and on-time delivery.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle subtitle="Where I've worked" title="Experience" />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-indigo-500/15 md:left-1/2" />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => (
              <TimelineItem key={item.role} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start">
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="absolute left-[13px] top-5 w-5 h-5 rounded-full bg-[#080B14] border-2 border-indigo-500 z-10 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
      </motion.div>

      {/* Card — always right on mobile, alternating on md+ */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        }`}
      >
        <div className="bg-[#141D35] border border-indigo-500/10 hover:border-indigo-500/25 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Briefcase size={14} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">{item.role}</h3>
              <p className="text-xs text-indigo-400 mt-0.5">{item.company}</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mb-4 tracking-wide">{item.duration}</p>
          <ul className="space-y-2">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="text-indigo-500 mt-1.5 flex-shrink-0 text-[8px]">◆</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
