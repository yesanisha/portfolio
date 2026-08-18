'use client';

import { motion } from 'framer-motion';

const roles = [
  {
    period: 'Mar 2026 to Present', company: 'The Rescue Tribe', title: 'Mobile App Developer', place: 'Singapore · Remote', current: true,
    summary: 'Owning mobile development across Guac and Clnk, from product flows and API integrations to release quality and store delivery.',
    points: ['Own mobile application development across Guac and Clnk, translating product requirements into production-ready React Native experiences.', 'Build Guac workflows for roster visibility, shift requests and swaps, leave, attendance, notifications, and employee self-service.', 'Develop Clnk experiences for digital profiles, QR and NFC sharing, contact exchange, appointments, and link management.', 'Integrate secure authentication and backend APIs while handling application state, edge cases, and cross-platform behavior.', 'Handle testing, debugging, performance refinement, and Android and iOS release delivery.'],
    stack: ['React Native', 'REST APIs', 'Firebase', 'Android & iOS']
  },
  {
    period: 'Nov 2025 to Feb 2026', company: 'MoveABox', title: 'Full Stack Developer Intern', place: 'Jaipur',
    summary: 'Building the production logistics platform and the systems behind pricing, customer capture, operations, and delivery workflows.',
    points: ['Developed the logistics platform with real-time shipment tracking and automated operational workflows.', 'Built the full-stack application with Next.js and optimized client-side performance.', 'Integrated Zoho CRM APIs for customer management, invoice generation, and automated communication.', 'Implemented APIs for order tracking, packing automation, and multi-stage shipment updates.', 'Built responsive admin tools for analytics, operations, and live order visibility.'],
    stack: ['Next.js', 'Node.js', 'Zoho API', 'PostgreSQL', 'REST APIs']
  },
  {
    period: 'Sep to Nov 2025', company: 'Hey Roomie', title: 'React Native Developer & Technical Lead', place: 'Remote',
    summary: 'Led mobile architecture for a roommate discovery product with preference-based matching and secure account flows.',
    points: ['Architected the React Native application with FastAPI, Firebase, and a recommendation layer.', 'Designed preference and compatibility flows for roommate discovery.', 'Implemented OAuth authentication and secure account data handling.', 'Led technical execution through sprint planning, reviews, and evolving product requirements.'], stack: ['React Native', 'FastAPI', 'Firebase', 'OAuth', 'Python']
  },
  {
    period: 'Nov 2024 to Feb 2025', company: 'Wrexa Technologies', title: 'UI/UX Design Intern', place: 'Remote',
    summary: 'Designed responsive mobile and web experiences for client products and partnered with developers through implementation.',
    points: ['Collaborated with international clients on mobile and web product design.', 'Created more than 15 responsive interfaces for ecommerce and SaaS products.', 'Partnered with developers to maintain design fidelity through implementation.', 'Iterated prototypes and interfaces through direct client feedback.'], stack: ['Figma', 'Prototyping', 'Responsive design', 'Adobe XD']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#f2f0ea] px-5 py-20 text-[#171714] sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-t border-black/20 pt-5 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[.2em] lg:col-span-3">Experience / 03</p>
          <div className="lg:col-span-8"><h2 className="text-3xl font-medium tracking-[-.045em] sm:text-5xl">The road so far.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-black/50">A progression from interface design to leading and shipping complete mobile and web products.</p></div>
        </div>
        <div className="relative mt-12 lg:ml-[25%]">
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-8 left-[7px] top-3 w-px origin-top bg-black/20 sm:left-[172px]" />
          {roles.map((role, i) => (
            <motion.article key={role.company} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55, delay: i * .05, ease: [0.22, 1, 0.36, 1] }} className="relative grid gap-4 pb-10 pl-8 sm:grid-cols-[150px_1fr] sm:pl-0">
              <span className={`absolute left-0 top-1.5 z-10 h-[15px] w-[15px] rounded-full border-2 border-[#f2f0ea] ${role.current ? 'bg-[#171714]' : 'bg-[#aaa397]'} sm:left-[165px]`} />
              <div><p className="text-xs font-semibold uppercase tracking-[.08em]">{role.period}</p><p className="mt-1 text-xs text-black/40">{role.place}</p></div>
              <div className="sm:pl-10">
                <div className="flex flex-wrap items-center gap-3"><h3 className="text-xl font-medium tracking-tight sm:text-2xl">{role.company}</h3>{role.current && <span className="rounded-full border border-black/20 bg-white/35 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Current</span>}</div>
                <p className="mt-1 text-sm font-medium text-black/50">{role.title}</p>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-black/65">{role.summary}</p>
                <ul className="mt-4 max-w-3xl space-y-2">{role.points.map(point => <li key={point} className="grid grid-cols-[14px_1fr] text-sm leading-5 text-black/55"><span className="text-black/30">•</span><span>{point}</span></li>)}</ul>
                <div className="mt-4 flex flex-wrap gap-2">{role.stack.map(item => <span key={item} className="rounded-full border border-black/15 px-2.5 py-1 text-[11px] text-black/55">{item}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
