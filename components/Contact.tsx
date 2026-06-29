'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Send, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { SectionTitle } from './SectionTitle';

interface FormData {
  name: string;
  email: string;
  message: string;
  _hp: string;
}

const SOCIALS = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'LokeshKushwah',
    href: 'https://github.com/LokeshKushwah01',
    link: true,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'lokesh-kushwah',
    href: 'https://www.linkedin.com/in/lokesh-kushwah-75974b230',
    link: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'lokeshkushwah192@gmail.com',
    href: 'mailto:lokeshkushwah192@gmail.com',
    link: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gwalior, Madhya Pradesh',
    href: 'https://maps.google.com/?q=Gwalior,Madhya+Pradesh,India',
    link: true,
  },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const loadedAt = useRef(Date.now());

  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Honeypot: bots fill hidden fields, humans don't
    if (data._hp) {
      setSent(true); // silently succeed so bots don't know they were blocked
      return;
    }
    // Timing: real users take > 1.5 s to fill a form
    if (Date.now() - loadedAt.current < 1500) {
      setSent(true);
      return;
    }
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      });
      if (res.status === 429) {
        setServerError('Too many messages. Please wait a few minutes and try again.');
        return;
      }
      if (!res.ok) throw new Error('Failed to send');
      setSent(true);
      reset();
    } catch {
      setServerError('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#0F1629]/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="Let's talk" title="Get In Touch" />

        <div ref={ref} className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-3">
              Let&apos;s build something together
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm">
              I&apos;m currently open to full-time roles and interesting freelance
              projects. If you have an opportunity or just want to say hello, feel free
              to reach out.
            </p>

            <div className="space-y-4">
              {SOCIALS.map(({ icon: Icon, label, value, href, link }, i) => {
                const inner = (
                  <>
                    <div className={`w-9 h-9 rounded-lg bg-[#141D35] border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${link ? 'border-indigo-500/15 group-hover:border-indigo-500/40' : 'border-indigo-500/10'}`}>
                      <Icon size={15} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-600 uppercase tracking-widest">{label}</p>
                      <p className={`text-sm text-slate-300 transition-colors ${link ? 'group-hover:text-indigo-300' : ''}`}>
                        {value}
                      </p>
                    </div>
                  </>
                );

                return link ? (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                    className="flex items-center gap-4 group"
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    {inner}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#141D35] border border-indigo-500/10 rounded-2xl p-7 space-y-5"
            >
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your name"
                  className="w-full bg-[#0F1629] border border-slate-700/60 focus:border-indigo-500/50 text-slate-200 rounded-lg px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-600"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                  })}
                  placeholder="your@email.com"
                  type="email"
                  className="w-full bg-[#0F1629] border border-slate-700/60 focus:border-indigo-500/50 text-slate-200 rounded-lg px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-600"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#0F1629] border border-slate-700/60 focus:border-indigo-500/50 text-slate-200 rounded-lg px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-600 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Honeypot — visually hidden, must stay empty */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', overflow: 'hidden', height: 0 }}>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register('_hp')}
                />
              </div>

              {serverError && (
                <p className="text-red-400 text-xs text-center">{serverError}</p>
              )}

              {sent ? (
                <div className="text-center py-3">
                  <p className="text-emerald-400 text-sm font-medium">✓ Message sent! I'll get back to you soon.</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-xs text-slate-500 hover:text-slate-300 mt-2 transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white rounded-lg py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                >
                  <Send size={14} />
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
