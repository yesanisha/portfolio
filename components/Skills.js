'use client';
import { motion } from 'framer-motion';
import {
  SiJavascript, SiPython, SiReact, SiNextdotjs, SiNodedotjs,
  SiTypescript, SiFlask, SiFastapi, SiExpress, SiAmazon,
  SiFirebase, SiPostgresql, SiMongodb, SiMysql, SiGraphql,
  SiDocker, SiGit, SiTailwindcss, SiRedux, SiFigma
} from 'react-icons/si';
import { Code2, Shield, Wifi, Zap, Coffee } from 'lucide-react';

export default function Skills() {
  // Technology stack with icons
  const techStack = {
    row1: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' }
    ],
    row2: [
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'REST APIs', icon: Zap, color: '#EC4899' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
    ],
    row3: [
      { name: 'OAuth 2.0', icon: Shield, color: '#EC4899' },
      { name: 'Zustand', icon: Code2, color: '#FFFFFF' },
      { name: 'Framer Motion', icon: Code2, color: '#0055FF' },
      { name: 'Expo', icon: Code2, color: '#FFFFFF' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Burp Suite', icon: Shield, color: '#FF6633' },
      { name: 'Wireshark', icon: Wifi, color: '#1679A7' },
      { name: 'Java', icon: Coffee, color: '#007396' },
      { name: 'C++', icon: Code2, color: '#00599C' }
    ]
  };

  // Marquee component for infinite scroll
  const MarqueeRow = ({ items, direction = 'left', speed = 40 }) => {
    const duplicatedItems = [...items, ...items, ...items];

    return (
      <div className="relative overflow-hidden py-3">
        <motion.div
          className="flex gap-4 w-max"
          animate={{
            x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group px-5 py-3 bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: tech.color }}
                  />
                  <span className="text-gray-300 group-hover:text-white font-medium font-mono text-sm transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Skills & Expertise
          </h2>
          
        </motion.div>

        {/* Infinite Scrolling Tech Rows */}
        <div className="space-y-6">
          {/* Row 1 - Scrolls Left */}
          <MarqueeRow items={techStack.row1} direction="left" speed={35} />

          {/* Row 2 - Scrolls Right */}
          <MarqueeRow items={techStack.row2} direction="right" speed={40} />

          {/* Row 3 - Scrolls Left */}
          <MarqueeRow items={techStack.row3} direction="left" speed={45} />
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400 font-mono">
            <span className="font-semibold text-pink-400">AWS Academy Certified</span> |
            <span className="ml-2">1+ Year Internship Experience</span> |
            <span className="ml-2">Agile Development</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
