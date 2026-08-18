'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-[#f2f0ea] px-5 py-24 text-[#171714] sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-t border-black/20 pt-5 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[.2em] lg:col-span-3">About / 02</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7">
            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-.045em] sm:text-6xl">Engineering with a product point of view.</h2>
            <div className="mt-10 grid gap-6 text-base leading-7 text-black/65 sm:grid-cols-2">
              <p>I’m a Jaipur-based product engineer focused on mobile and web experiences. I care about the whole journey: understanding the problem, shaping a clear interface, building reliable systems, and getting the result into users’ hands.</p>
              <p>At The Rescue Tribe, I work remotely with a Singapore team across Guac and Clnk. My work spans React Native development, product flows, API integration, authentication, quality, and store delivery.</p>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <motion.div initial={{ clipPath: 'inset(0 0 100% 0)' }} whileInView={{ clipPath: 'inset(0 0 0% 0)' }} viewport={{ once: true }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }} className="relative aspect-[4/5] overflow-hidden bg-black/5 sm:col-span-1"><Image src="/images/pic1.jpeg" alt="Anisha Kumari" fill className="object-cover grayscale transition duration-700 hover:scale-[1.02]" /></motion.div>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .75, delay: .1, ease: [0.22, 1, 0.36, 1] }} className="flex min-h-64 flex-col justify-between bg-[#d3cbc0] p-7 sm:col-span-2 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[.2em]">How I work</p>
            <p className="max-w-2xl text-3xl font-medium leading-tight tracking-[-.035em] sm:text-5xl">Clear thinking. Thoughtful interfaces. Production-ready execution.</p>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm"><span>01. Product thinking</span><span>02. Mobile engineering</span><span>03. Full-stack delivery</span></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
