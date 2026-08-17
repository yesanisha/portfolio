'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#cfc6ba] px-5 py-16 text-[#171714] sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-xs font-semibold uppercase tracking-[.2em]">Have a product to build?</p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5.8rem)] font-medium leading-[.94] tracking-[-.055em]">Let’s make something useful and real.</motion.h2>
        <div className="mt-10 grid gap-7 border-t border-black/25 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          <a href="mailto:anishakumari6145@gmail.com" className="group text-sm"><span className="block text-black/45">Email</span><span className="mt-2 flex items-center gap-2 font-medium break-all">anishakumari6145@gmail.com <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></span></a>
          <a href="https://linkedin.com/in/yesanisha" target="_blank" rel="noreferrer" className="group text-sm"><span className="block text-black/45">LinkedIn</span><span className="mt-2 flex items-center gap-2 font-medium">/in/yesanisha <ArrowUpRight className="h-4 w-4" /></span></a>
          <a href="https://github.com/yesanisha" target="_blank" rel="noreferrer" className="group text-sm"><span className="block text-black/45">GitHub</span><span className="mt-2 flex items-center gap-2 font-medium">@yesanisha <ArrowUpRight className="h-4 w-4" /></span></a>
          <div className="text-sm"><span className="block text-black/45">Based in</span><span className="mt-2 block font-medium">Bengaluru · Remote friendly</span></div>
        </div>
      </div>
    </section>
  );
}
