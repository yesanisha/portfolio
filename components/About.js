'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Rocket,
  Building2,
  Download,
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';



export default function About() {
  const [counters, setCounters] = useState({ technologies: 0, projects: 0, companies: 0, downloads: 0 });
  const [showVideo, setShowVideo] = useState(false);

  const images = [
  '/images/pic1.jpeg',
  '/images/pic2.jpeg',
  '/images/pic3.jpeg',
  '/images/pic4.jpeg',
  '/images/pic5.jpeg',
];
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 3500);

  return () => clearInterval(interval);
}, [images.length]);


  useEffect(() => {
    const animateCounter = (key, target) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    animateCounter('technologies', 15);
    animateCounter('projects', 20);
    animateCounter('companies', 3);
    animateCounter('downloads', 1);
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Opening - The Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Building mobile experiences and full-stack solutions,
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              one line of code at a time
            </span>
          </h2>
        </motion.div>

        {/* The Visual Introduction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image Carousel */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className="relative w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0"
>
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />

  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={images[currentImage]}
          alt="Anisha Kumari"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </AnimatePresence>
  </div>
</motion.div>


            {/* Quick Intro with Image */}
            <div className="flex-1 flex gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Hey, I'm Anisha</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm a developer who enjoys building products that actually get used and make a difference. I've worked on everything from consumer mobile apps used by thousands to enterprise platforms handling real-time logistics, and I care deeply about writing clean, scalable, production-ready code. Outside of work, I love travelling and exploring new places solo, it keeps me curious, independent, and constantly learning.
                </p>
              </div>

              {/* Gemini Generated Image with Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative w-32 h-32 sm:w-48 sm:h-48 flex-shrink-0 cursor-pointer group"
                onClick={() => setShowVideo(true)}
                onMouseEnter={() => setShowVideo(true)}
              >
                {/* Speech Bubble - Minimal Aesthetic */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className="absolute -top-14 sm:-top-16 -left-6 sm:-left-10 z-10"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg px-3 py-2 group-hover:bg-white/10 transition-all duration-300"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <p className="text-xs sm:text-sm font-light text-white/90 tracking-wide whitespace-nowrap">
                      I loveee travelling solo
                    </p>

                    {/* Minimal tail */}
                    <div className="absolute -bottom-1 left-6 w-2 h-2 bg-white/5 backdrop-blur-xl border-l border-b border-white/10 transform rotate-45 group-hover:bg-white/10 transition-all duration-300" />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/images/Gemini_Generated_Image_btm2s5btm2s5btm2-Photoroom.png"
                    alt="Anisha illustration"
                    width={192}
                    height={192}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* The Impact - Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">The Impact</h3>
            <p className="text-gray-400 text-sm">Numbers that tell the story</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Code2,
                number: counters.technologies,
                suffix: '+',
                label: 'Technologies',
                sublabel: 'Mastered & used',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Rocket,
                number: counters.projects,
                suffix: '+',
                label: 'Projects Built',
                sublabel: 'Mobile & web apps',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Building2,
                number: counters.companies,
                suffix: '',
                label: 'Companies',
                sublabel: 'Contributed to',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: Download,
                number: counters.downloads,
                suffix: 'K+',
                label: 'Downloads',
                sublabel: 'Reached users',
                gradient: 'from-green-500 to-emerald-500'
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-pink-500/50 rounded-xl p-5 transition-all duration-300"
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.gradient} mb-3`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Number */}
                    <div className="mb-2">
                      <span className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.number}
                      </span>
                      <span className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.suffix}
                      </span>
                    </div>

                    {/* Label */}
                    <div className="text-xs font-semibold text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.sublabel}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-300`} />
                </motion.div>
              );
            })}
          </div>

          {/* Closing line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <p className="text-gray-500 text-xs">
              And this is just the beginning of the story
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* Video Modal - Minimal Design */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors text-sm font-light tracking-wider"
              >
                Close
              </button>

              {/* Video container */}
              <div className="relative bg-black rounded-lg overflow-hidden border border-white/10"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                }}
              >
                <video
                  src="/images/miai_bg_remover-1770975639000.mp4"
                  autoPlay
                  loop
                  controls
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
