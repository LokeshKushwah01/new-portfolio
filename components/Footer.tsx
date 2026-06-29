export function Footer() {
  return (
    <footer className="py-8 bg-[#080B14] border-t border-indigo-500/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-indigo-400 font-bold text-base tracking-widest">LK</span>
        <p className="text-xs text-slate-600 text-center">
          © {new Date().getFullYear()} Lokesh Kushwah · Built with Next.js & Tailwind CSS
        </p>
        <a
          href="#hero"
          className="text-xs text-slate-500 hover:text-slate-200 transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
