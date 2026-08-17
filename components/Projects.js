'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Apple, ArrowUpRight, ExternalLink, Smartphone } from 'lucide-react';

const products = [
  {
    name: 'Guac',
    type: 'Workforce management',
    description: 'Scheduling, leave, attendance and employee self-service for shift-based teams.',
    image: '/images/guac-dashboard.webp',
    imageAlt: 'Guac workforce management dashboard',
    stack: 'React Native · Firebase',
    links: [
      ['Google Play', 'https://play.google.com/store/apps/details?id=com.guac.roster&hl=en_IN', Smartphone],
      ['App Store', 'https://apps.apple.com/us/app/guac/id1660776179', Apple],
      ['Website', 'https://www.guac.sg/', ExternalLink],
    ],
  },
  {
    name: 'Clnk.',
    type: 'Digital networking',
    description: 'One digital identity for profiles, contacts, appointments, NFC and QR sharing.',
    image: '/images/clnk-preview.webp',
    imageAlt: 'Clnk digital networking product',
    stack: 'React Native · AWS',
    links: [
      ['Google Play', 'https://play.google.com/store/apps/details?id=com.rescuetribe.clnk&hl=en_IN', Smartphone],
      ['App Store', 'https://apps.apple.com/us/app/clnk/id6760162175', Apple],
      ['Website', 'https://clnk.sg/', ExternalLink],
    ],
  },
  {
    name: 'MoveABox',
    type: 'Logistics platform',
    description: 'A booking and service journey for relocation, courier, storage and corporate logistics.',
    image: '/images/moveabox.jpg',
    imageAlt: 'MoveABox logistics website',
    stack: 'Next.js · Node.js',
    links: [['Live website', 'https://www.moveabox.in/', ExternalLink]],
  },
];

const explorations = [
  {
    name: 'TouchGrass',
    status: 'Building now',
    description: 'Real-world quests, XP and streaks that make getting offline feel rewarding.',
    stack: ['React Native', 'Expo'],
    href: 'https://github.com/yesanisha/touchgrass',
    kind: 'touchgrass',
  },
  {
    name: 'Curricula',
    status: 'Live concept',
    description: 'Personal learning paths and focused daily planning in one calm workspace.',
    stack: ['Next.js', 'Firebase'],
    href: 'https://curricula-anisha-2026.web.app/',
    kind: 'curricula',
  },
  {
    name: 'Crave',
    status: 'Live concept',
    description: 'A personal recipe journal with a kitchen companion and practical cooking tools.',
    stack: ['Next.js', 'Firebase'],
    href: 'https://folio-recipes-anisha-2026.web.app/',
    kind: 'crave',
  },
];

export default function Projects() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="projects" className="bg-[#e5e0d7] px-5 py-16 text-[#171714] sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-4 border-t border-black/20 pt-4 sm:grid-cols-[160px_1fr]">
          <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-black/45">Work / 01</p>
          <div>
            <h2 className="text-2xl font-medium tracking-[-.03em] sm:text-3xl">Selected products</h2>
            <p className="mt-1 text-sm text-black/45">Live on mobile and web.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 lg:h-[540px] lg:flex-row">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ flexGrow: activeProduct === index ? 2.2 : 1 }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: .55, delay: index * .06 },
                y: { duration: .55, delay: index * .06, ease: [0.22, 1, 0.36, 1] },
                flexGrow: { type: 'spring', stiffness: 105, damping: 22, mass: .7 },
                layout: { type: 'spring', stiffness: 105, damping: 22, mass: .7 },
              }}
              onMouseEnter={() => setActiveProduct(index)}
              onFocusCapture={() => setActiveProduct(index)}
              onClick={() => setActiveProduct(index)}
              className="group relative min-h-[390px] flex-1 transform-gpu overflow-hidden rounded-2xl border border-black/10 shadow-[0_16px_45px_rgba(42,35,28,.10)] will-change-[flex-grow] lg:min-h-0"
            >
              <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 1024px) 100vw, 60vw" className={`object-cover transition duration-1000 ease-out ${activeProduct === index ? 'lg:scale-100' : 'lg:scale-105'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 text-white sm:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div><p className="text-[10px] uppercase tracking-[.18em] text-white/55">{product.type}</p><h3 className="mt-1 text-2xl font-medium tracking-tight">{product.name}</h3></div>
                  <span className="text-xs text-white/45">0{index + 1}</span>
                </div>
                <div className={`grid transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:overflow-hidden ${activeProduct === index ? 'lg:grid-rows-[1fr] lg:opacity-100' : 'lg:grid-rows-[0fr] lg:opacity-0'}`}>
                  <div className="min-h-0">
                    <p className="mt-4 max-w-lg text-sm leading-5 text-white/75">{product.description}</p>
                    <p className="mt-2 text-[11px] text-white/45">{product.stack}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {product.links.map(([label, href, Icon]) => (
                        <a key={href} href={href} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 text-[11px] font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-black"><Icon className="h-3 w-3" />{label}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 border-t border-black/20 pt-4">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[11px] font-semibold uppercase tracking-[.22em] text-black/45">Personal work</p><h2 className="mt-2 text-2xl font-medium tracking-tight">Personal explorations</h2></div>
            <p className="text-sm text-black/45">Independent ideas designed and built end to end.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {explorations.map((project) => (
              <motion.a key={project.name} href={project.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ once: true }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }} className="group overflow-hidden border border-black/10 bg-[#f5f1e9] shadow-[0_12px_35px_rgba(42,35,28,.04)] transition hover:border-black/25">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {project.kind === 'touchgrass' ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#e3d5bd] p-5">
                      <div className="w-full rounded-[1.4rem] border border-black/10 bg-[#f5efe3]/90 p-5 shadow-[0_20px_50px_rgba(64,49,36,.13)]">
                        <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-black/40">Quest board</p>
                        <p className="mt-5 text-2xl font-semibold tracking-[-.04em]">Your next adventure is outside.</p>
                        <p className="mt-3 text-xs text-black/40">100 quests · XP · streaks · titles</p>
                      </div>
                    </div>
                  ) : project.kind === 'crave' ? (
                    <Image src="/images/crave-preview.png" alt="Crave recipe journal" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                  ) : <Image src="/images/curricula-preview.png" alt="Curricula learning planner" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[.16em] text-black/35">{project.status}</p><h3 className="mt-1.5 text-xl font-medium">{project.name}</h3></div><ArrowUpRight className="h-4 w-4 text-black/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" /></div>
                  <p className="mt-3 text-xs leading-5 text-black/55">{project.description}</p>
                  <div className="mt-4 flex gap-3">{project.stack.map(item => <span key={item} className="text-[11px] text-black/35">{item}</span>)}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
