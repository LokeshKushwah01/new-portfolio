'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] bg-[#080B14] flex flex-col items-center justify-center gap-6"
        >
          {/* Logo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-bold text-slate-100 tracking-tight"
          >
            Lokesh<span className="text-indigo-400">.</span>dev
          </motion.p>

          {/* Loading bar */}
          <div className="w-40 h-[2px] rounded-full bg-slate-800 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
              className="h-full bg-indigo-500 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
