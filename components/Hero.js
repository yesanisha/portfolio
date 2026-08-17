'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const section = useRef(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const titleOpacity = useTransform(scrollYProgress, [0, .85], [1, .35]);
  return (
    <section ref={section} className="min-h-[92svh] overflow-hidden bg-[#f2f0ea] px-5 pb-12 pt-28 text-[#171714] sm:px-8 sm:pt-36 lg:px-12">
      <div className="mx-auto flex min-h-[calc(92svh-10rem)] max-w-[1440px] flex-col justify-between">
        <div className="grid gap-10 border-t border-black/20 pt-5 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7 }} className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Anisha Kumari<br />Product engineer</p>
            <div className="relative mt-7 w-32 sm:w-40 lg:w-52">
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 h-3 w-3/4 -translate-x-1/2 translate-y-1 rounded-full bg-black/15 blur-md" />
                <Image src="/images/mobile beside image.png" alt="Illustrated portrait of Anisha" width={694} height={1147} priority className="relative h-auto w-full object-contain drop-shadow-[9px_14px_16px_rgba(43,35,32,.20)]" />
              </div>
            </div>
          </motion.div>
          <motion.div style={{ y: titleY, opacity: titleOpacity }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-9">
            <h1 className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[.88] tracking-[-0.065em]">I build digital products that make it to people.</h1>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-black/20 pt-5 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
          <p className="max-w-md text-base leading-7 text-black/65 lg:col-span-5 lg:col-start-4">Mobile and web products from first interface to production release. Currently building Guac and Clnk at The Rescue Tribe.</p>
          <div className="flex flex-col gap-3 sm:items-end lg:col-span-4">
            <a href="#projects" className="inline-flex min-h-12 items-center justify-between gap-6 border-b border-black py-3 text-sm font-semibold sm:min-w-52">Selected work <ArrowDown className="h-4 w-4" /></a>
            <a href="mailto:anishakumari6145@gmail.com" className="inline-flex min-h-12 items-center justify-between gap-6 border-b border-black/20 py-3 text-sm sm:min-w-52">Start a conversation <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
