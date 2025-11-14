'use client';
import { motion } from 'framer-motion';
import { Code2, Globe, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const interests = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Mobile App Development', desc: 'Building cross-platform mobile apps' },
    { icon: <Globe className="w-6 h-6" />, title: 'Full Stack Development', desc: 'Creating end-to-end solutions' },
    { icon: <Heart className="w-6 h-6" />, title: 'Tech Enthusiast', desc: 'Passionate about innovation' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Problem Solver', desc: 'Love tackling complex challenges' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 font-mono">
            <span className="text-pink-500">$</span> cat <span className="text-gradient">about.txt</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 font-mono text-sm">
            Building mobile experiences and full-stack solutions, one line of code at a time
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="relative aspect-square overflow-hidden border-2 border-pink-500">
                  <Image
                    src="/images/pic.jpeg"
                    alt="Profile Picture"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-500/20 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-600/20 blur-2xl"></div>
              </div>
            </motion.div>

            {/* Right side - Interest cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all cursor-pointer"
                >
                  <div className="text-pink-400 mb-3">
                    {interest.icon}
                  </div>
                  <h4 className="font-bold text-gray-200 mb-2 font-mono text-sm">{interest.title}</h4>
                  <p className="text-xs text-gray-400 font-mono">{interest.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '15+', label: 'Languages and Frameworks', icon: '/icons/language.png' },
              { number: '20+', label: 'Projects Built', icon: '/icons/projects.png' },
              { number: '4+', label: 'Internships', icon: '/icons/internship.png' },
              { number: '∞', label: 'Cups of Coffee', icon: '/icons/coffee.png' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 border border-pink-500/20 hover:border-pink-500/50 text-center transition-all"
              >
                {/* Replace emoji with image */}
                <div className="flex justify-center mb-3">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={50}
                    height={50}
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div className="text-3xl font-bold text-pink-500 mb-1 font-mono">{stat.number}</div>
                <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
