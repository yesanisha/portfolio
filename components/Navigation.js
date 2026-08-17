'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const links = [['Work', '#projects'], ['About', '#about'], ['Experience', '#experience'], ['Contact', '#contact']];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.35 });
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <motion.div style={{ scaleX: progress }} className="fixed left-0 top-0 h-[2px] w-full origin-left bg-[#171714]" />
      <motion.nav initial={{ opacity: 0, y: -18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }} className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-black/10 bg-[#f2f0ea]/90 px-5 py-3 text-[#171714] shadow-[0_8px_30px_rgba(0,0,0,.06)] backdrop-blur-xl">
        <a href="#" className="text-sm font-bold tracking-[-.02em]">ANISHA®</a>
        <div className="hidden items-center gap-7 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm text-black/60 transition hover:text-black">{label}</a>)}</div>
        <a href="mailto:anishakumari6145@gmail.com" className="hidden rounded-full bg-[#171714] px-5 py-2 text-sm font-medium text-white md:block">Let’s talk</a>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white md:hidden">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
      </motion.nav>
      {open && <div className="mx-auto mt-2 max-w-[1440px] rounded-3xl border border-black/10 bg-[#f2f0ea] p-4 shadow-xl md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-14 items-center border-b border-black/10 px-2 text-lg last:border-0">{label}</a>)}</div>}
    </header>
  );
}
