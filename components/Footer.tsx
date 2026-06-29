import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const SOCIALS = [
  { icon: GithubIcon,   label: 'GitHub',   href: 'https://github.com/LokeshKushwah01' },
  { icon: LinkedinIcon, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/lokesh-kushwah-75974b230' },
  { icon: Mail,         label: 'Email',     href: 'mailto:lokeshkushwah192@gmail.com' },
];

export function Footer() {
  return (
    <footer className="bg-[#080B14] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/6 blur-[80px] pointer-events-none" />

      {/* Gradient divider */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14 flex flex-col items-center gap-8">

        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-slate-100 font-bold text-2xl tracking-tight">
            Lokesh<span className="text-indigo-400">.</span>dev
          </span>
          <p className="text-xs text-slate-500 tracking-wide">
            Full-Stack Developer · Gwalior, India
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-slate-500 hover:text-indigo-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex gap-3">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="group relative w-10 h-10 rounded-xl bg-[#141D35] border border-indigo-500/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 flex items-center justify-center text-slate-500 hover:text-indigo-400 transition-all duration-300 hover:shadow-[0_0_16px_rgba(99,102,241,0.15)]"
            >
              <Icon size={16} />
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 bg-[#141D35] border border-slate-700/60 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Lokesh Kushwah · All rights reserved
          </p>
          <p className="text-xs text-slate-600">
            Designed &amp; built by{' '}
            <span className="text-indigo-500 font-medium">Lokesh Kushwah</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
