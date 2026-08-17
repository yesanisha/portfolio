'use client';

import { motion } from 'framer-motion';
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiFirebase, SiAmazonwebservices, SiGit } from 'react-icons/si';

const skills = [
  { name: 'TypeScript', note: 'Language', icon: SiTypescript },
  { name: 'React + Native', note: 'Web & mobile', icon: SiReact },
  { name: 'Next.js', note: 'Product web', icon: SiNextdotjs },
  { name: 'Node.js', note: 'Backend', icon: SiNodedotjs },
  { name: 'Firebase', note: 'Auth, data, cloud', icon: SiFirebase },
  { name: 'AWS', note: 'Infrastructure', icon: SiAmazonwebservices },
  { name: 'Git', note: 'Delivery', icon: SiGit },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-black/10 bg-[#dedbd2] px-5 py-24 text-[#171714] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]">Toolkit / 04</p>
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">A focused stack for shipping.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-black/55">Tools chosen to fit the product.</p>
          </div>
          <div className="grid grid-cols-2 overflow-hidden border border-black/15 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map(({ name, note, icon: Icon }, index) => (
              <motion.div key={name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .045, ease: [0.22, 1, 0.36, 1] }} className="group min-h-36 border-b border-r border-black/15 p-5 transition duration-300 hover:bg-white/30 sm:p-6">
                <Icon className="mb-8 h-6 w-6 text-black/45 transition group-hover:text-black" />
                <p className="font-medium">{name}</p>
                <p className="mt-1 text-xs text-black/40">{note}</p>
              </motion.div>
            ))}
            <div className="flex min-h-36 items-end bg-[#171714] p-6 text-sm font-medium leading-5 text-white">Built for thoughtful products,<br />not tech-stack bingo.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
