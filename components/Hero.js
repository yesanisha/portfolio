'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Smartphone, Download, Star, ShieldCheck, Leaf, Home, Film, Briefcase, Grid, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Smartphone, value: '10+', label: 'Projects Shipped' },
    { icon: Download, value: '1K+', label: 'Downloads' },
    { icon: Star, value: '4.8', label: 'Avg Rating' },
  ];

  const phoneApps = [
    {
      name: 'DOTKO',
      icon: ShieldCheck,
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      description: 'MSME Trust & Verification Platform',
      tech: 'React Native • Firebase • Firestore',
      link: 'exp+DOTKO://expo-development-client/?url=https://u.expo.dev/41d5cb65-0c72-4b4b-b2dc-f32e4b12ca16',
      badge: 'New'
    },
    {
      name: 'Farma',
      icon: Leaf,
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
      description: 'AI-Powered Plant Disease Detection',
      tech: 'React Native • ML • Flask',
      link: 'https://expo.dev/accounts/yesanisha/projects/farma/builds/f9da75a2-1427-4216-8308-7a19f37e0143',
      badge: '5K+'
    },
    {
      name: 'HeyRoomie',
      icon: Home,
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-600',
      description: 'Smart Roommate Matching Platform',
      tech: 'FastAPI • ML • OAuth',
      link: 'https://heyroomie.in'
    },
    {
      name: 'MovieTime',
      icon: Film,
      gradient: 'bg-gradient-to-br from-red-500 to-orange-600',
      description: 'Personalized Movie Recommendations',
      tech: 'Kotlin • TMDB API',
      link: 'https://github.com/yesanisha/movie-recommendation-application'
    },
    {
      name: 'Portfolio',
      icon: Briefcase,
      gradient: 'bg-gradient-to-br from-pink-500 to-rose-600',
      description: 'Personal Portfolio Website',
      tech: 'Next.js • Framer Motion',
      link: '#'
    },
    {
      name: 'More',
      icon: Grid,
      gradient: 'bg-gradient-to-br from-gray-500 to-slate-600',
      description: 'View All Projects',
      tech: '10+ Projects',
      link: '#projects'
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* 3D Grid Background */}
      <div className="absolute inset-0">
        {/* Perspective Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-center scale-150 opacity-40" />

        {/* Subtle floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Name - Large 3D text */}
            <div className="space-y-4 mt-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-7xl font-semibold tracking-wide"
                style={{
                  textShadow: '0 0 80px rgba(255,255,255,0.1), 0 4px 0 rgba(255,255,255,0.05), 0 8px 0 rgba(255,255,255,0.03)',
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif'
                }}
              >
                <span className="text-white">ANISHA</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
                <span className="text-white/60 text-sm font-mono uppercase tracking-widest">
                  Mobile App Developer
                </span>
              </motion.div>
            </div>

            {/* Description - Clean and minimal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-white/40 max-w-md font-light leading-relaxed"
            >
              Crafting cross-platform experiences with React Native, Node.js, and modern web technologies.
            </motion.p>

            {/* Stats - 3D cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-md">
              {stats.slice(0, 3).map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative group"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  {/* 3D Card */}
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                    <div className="relative">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>

                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-white/5 blur-xl -z-10 group-hover:bg-white/10 transition-all" />
                </motion.div>
              ))}
            </div>

            {/* CTAs - Minimal and clean */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <motion.a
                href="#projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-none overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Work
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                  </motion.span>
                </span>
                {/* Hover effect */}
                <div className="absolute inset-0 bg-white/90 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-semibold rounded-none hover:bg-white/5 transition-all text-center"
              >
                Get in touch
              </motion.a>
            </div>

            {/* Social - Minimal icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-6 pt-2"
            >
              {[
                { icon: Github, href: 'https://github.com/yesanisha' },
                { icon: Linkedin, href: 'https://linkedin.com/in/yesanisha' },
                { icon: Mail, href: 'mailto:anishakumari6145@gmail.com' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -2 }}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Metallic 3D Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative h-[500px] sm:h-[600px] flex items-start justify-center pt-16 order-first lg:order-last"
          >
            
            {/* Realistic 3D Phone Mockup */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [-5, 5, -5],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
              className="relative z-20"
            >
              {/* Phone Outer Shell - Aerospace Aluminum */}
              <div className="relative w-[240px] sm:w-[280px] lg:w-[300px] h-[480px] sm:h-[560px] lg:h-[600px] rounded-[3.5rem] overflow-hidden"
                style={{
                  background: `
                    linear-gradient(135deg,
                      #0f1419 0%,
                      #1a2332 5%,
                      #2d3e50 15%,
                      #4a5f7a 25%,
                      #7c91a8 35%,
                      #b8c5d4 45%,
                      #dfe6ed 50%,
                      #b8c5d4 55%,
                      #7c91a8 65%,
                      #4a5f7a 75%,
                      #2d3e50 85%,
                      #1a2332 95%,
                      #0f1419 100%
                    )
                  `,
                  boxShadow: `
                    0 50px 100px -20px rgba(0, 0, 0, 0.9),
                    0 20px 40px -10px rgba(0, 0, 0, 0.7),
                    inset -3px -3px 12px rgba(0, 0, 0, 0.6),
                    inset 3px 3px 12px rgba(255, 255, 255, 0.15),
                    inset 0 0 30px rgba(255, 255, 255, 0.05)
                  `,
                }}
              >
                {/* Anodized aluminum finish - realistic light reflection */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(170deg,
                        rgba(255,255,255,0.6) 0%,
                        rgba(255,255,255,0.1) 20%,
                        transparent 40%,
                        transparent 60%,
                        rgba(0,0,0,0.2) 80%,
                        rgba(0,0,0,0.4) 100%
                      )
                    `,
                  }}
                />

                {/* Micro brushed aluminum texture */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        92deg,
                        transparent,
                        transparent 1px,
                        rgba(255,255,255,0.02) 1px,
                        rgba(255,255,255,0.02) 2px
                      )
                    `,
                  }}
                />

                {/* Chamfered edge highlight */}
                <div className="absolute inset-0 rounded-[3.5rem] pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.4), inset 0 -1px 3px rgba(0,0,0,0.5)',
                  }}
                />

                {/* Glass Screen Layer */}
                <div className="absolute inset-[8px] rounded-[3rem] overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, #0a0a0a, #000000)',
                    boxShadow: `
                      inset 0 2px 6px rgba(0,0,0,0.8),
                      inset 0 0 20px rgba(0,0,0,0.5),
                      0 0 0 1px rgba(255,255,255,0.05)
                    `,
                  }}
                >
                  {/* Gorilla Glass Effect */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 100%)',
                    }}
                  />

                  {/* Dynamic Island - Realistic cutout */}
                  <div className="absolute top-2 sm:top-2.5 lg:top-3 left-1/2 -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-6 sm:h-7 lg:h-8 bg-black rounded-[1.5rem] sm:rounded-[1.8rem] lg:rounded-[2rem] z-20"
                    style={{
                      boxShadow: `
                        inset 0 3px 8px rgba(0,0,0,1),
                        inset 0 -1px 3px rgba(50,50,50,0.5),
                        0 1px 2px rgba(255,255,255,0.1)
                      `,
                      border: '0.5px solid rgba(30,30,30,0.8)',
                    }}
                  >
                    {/* Camera lens */}
                    <div className="absolute left-4 sm:left-5 lg:left-6 top-1/2 -translate-y-1/2 w-2.5 sm:w-2.5 lg:w-3 h-2.5 sm:h-2.5 lg:h-3 rounded-full bg-gradient-to-br from-blue-900/50 to-purple-900/30"
                      style={{
                        boxShadow: 'inset 0 1px 2px rgba(100,100,255,0.3), 0 0 4px rgba(100,100,255,0.2)',
                      }}
                    />
                    {/* Infrared sensor */}
                    <div className="absolute right-4 sm:right-5 lg:right-6 top-1/2 -translate-y-1/2 w-1.5 sm:w-1.5 lg:w-2 h-1.5 sm:h-1.5 lg:h-2 rounded-full bg-red-950/40" />
                  </div>

                  {/* Speaker Grille - Top */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-0.5 z-30 opacity-40">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[3px] h-[2px] rounded-full bg-gradient-to-b from-gray-600 to-gray-800"
                        style={{
                          boxShadow: 'inset 0 0.5px 1px rgba(0,0,0,0.8)',
                        }}
                      />
                    ))}
                  </div>

                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 pt-3 sm:pt-3.5 lg:pt-4 text-white/80 text-[10px] sm:text-xs font-light">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        {/* Signal strength */}
                        <div className="flex items-end gap-[1px]">
                          {[2, 3, 4, 5].map(h => (
                            <div key={h} className="w-[2px] bg-white/80 rounded-full" style={{ height: `${h}px` }} />
                          ))}
                        </div>
                        {/* WiFi */}
                        <svg className="w-3 h-3 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 3.5c3.5 0 6.7 1.4 9 3.7l-1.4 1.4C15.7 6.8 13 5.5 10 5.5S4.3 6.8 2.4 8.6L1 7.2c2.3-2.3 5.5-3.7 9-3.7zM10 7.5c2.5 0 4.8 1 6.5 2.6L15 11.6c-1.3-1.3-3.1-2.1-5-2.1s-3.7.8-5 2.1L3.5 10c1.7-1.6 4-2.6 6.5-2.6zm0 4c1.4 0 2.6.6 3.5 1.5L10 16.5 6.5 13c.9-.9 2.1-1.5 3.5-1.5z"/>
                        </svg>
                        {/* Battery */}
                        <div className="w-4 sm:w-5 h-2 sm:h-2.5 border border-white/60 rounded-[2px] relative">
                          <div className="absolute inset-[1px] bg-white/80 rounded-[1px]" />
                          <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1px] h-1 sm:h-1.5 bg-white/60 rounded-r" />
                        </div>
                      </div>
                    </div>

                    {/* App Grid */}
                    <div className="p-3 sm:p-4 lg:p-6 grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8 lg:mt-10">
                      {phoneApps.map((app, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedApp(app)}
                          className="flex flex-col items-center gap-1 sm:gap-2 relative cursor-pointer"
                        >
                          {/* App Icon - iOS style glass with gradient */}
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${app.gradient} rounded-[1rem] sm:rounded-[1.1rem] lg:rounded-[1.2rem] relative overflow-hidden flex items-center justify-center`}
                            style={{
                              boxShadow: `
                                0 8px 16px rgba(0,0,0,0.4),
                                0 2px 4px rgba(0,0,0,0.3),
                                inset 0 1px 2px rgba(255,255,255,0.4),
                                inset 0 -1px 2px rgba(0,0,0,0.2)
                              `,
                            }}
                          >
                            {/* Glossy top highlight */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent"
                              style={{
                                maskImage: 'linear-gradient(to bottom, black 30%, transparent 70%)',
                              }}
                            />

                            {/* Edge highlight */}
                            <div className="absolute inset-0 rounded-[1.2rem]"
                              style={{
                                boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.2)',
                              }}
                            />

                            {/* App Icon */}
                            <app.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white relative z-10"
                              style={{
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                              }}
                            />
                          </div>

                          {/* Notification Badge */}
                          {app.badge && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1 bg-red-500 text-white text-[5px] sm:text-[6px] font-bold px-1 sm:px-1.5 py-0.5 rounded-full border border-black"
                            >
                              {app.badge}
                            </motion.div>
                          )}

                          <span className="text-white text-[7px] sm:text-[8px] lg:text-[9px] font-medium truncate max-w-full px-1">{app.name}</span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Dock - iOS frosted glass */}
                    <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 lg:gap-4 px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-3.5 rounded-[1.5rem] sm:rounded-[1.8rem] lg:rounded-[2rem]"
                      style={{
                        background: 'rgba(30, 30, 30, 0.6)',
                        backdropFilter: 'blur(40px) saturate(180%)',
                        boxShadow: `
                          inset 0 1px 1px rgba(255,255,255,0.15),
                          inset 0 -1px 1px rgba(0,0,0,0.4),
                          0 8px 24px rgba(0,0,0,0.4),
                          0 0 0 0.5px rgba(255,255,255,0.1)
                        `,
                      }}
                    >
                      {[
                        'from-blue-500 to-blue-700',
                        'from-green-500 to-green-700',
                        'from-orange-500 to-red-600',
                        'from-purple-500 to-pink-600'
                      ].map((gradient, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, y: -8 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${gradient} rounded-[1rem] sm:rounded-[1.1rem] lg:rounded-[1.2rem] relative overflow-hidden cursor-pointer`}
                          style={{
                            boxShadow: `
                              0 8px 16px rgba(0,0,0,0.4),
                              0 2px 4px rgba(0,0,0,0.3),
                              inset 0 1px 2px rgba(255,255,255,0.4),
                              inset 0 -1px 2px rgba(0,0,0,0.2)
                            `,
                          }}
                        >
                          {/* iOS glossy effect */}
                          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent"
                            style={{
                              maskImage: 'linear-gradient(to bottom, black 30%, transparent 70%)',
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Volume buttons - Aerospace aluminum */}
                <div className="absolute -left-[2px] top-32 w-[3px] h-14 rounded-r-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #dfe6ed 0%, #7c91a8 50%, #2d3e50 100%)',
                    boxShadow: `
                      inset -1px 0 3px rgba(0,0,0,0.6),
                      1px 0 3px rgba(255,255,255,0.4),
                      inset 0 1px 1px rgba(255,255,255,0.3),
                      inset 0 -1px 1px rgba(0,0,0,0.4)
                    `,
                  }}
                />
                <div className="absolute -left-[2px] top-52 w-[3px] h-10 rounded-r-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #dfe6ed 0%, #7c91a8 50%, #2d3e50 100%)',
                    boxShadow: `
                      inset -1px 0 3px rgba(0,0,0,0.6),
                      1px 0 3px rgba(255,255,255,0.4),
                      inset 0 1px 1px rgba(255,255,255,0.3),
                      inset 0 -1px 1px rgba(0,0,0,0.4)
                    `,
                  }}
                />

                {/* Power button - Aerospace aluminum */}
                <div className="absolute -right-[2px] top-36 w-[3px] h-20 rounded-l-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #dfe6ed 0%, #7c91a8 50%, #2d3e50 100%)',
                    boxShadow: `
                      inset 1px 0 3px rgba(0,0,0,0.6),
                      -1px 0 3px rgba(255,255,255,0.4),
                      inset 0 1px 1px rgba(255,255,255,0.3),
                      inset 0 -1px 1px rgba(0,0,0,0.4)
                    `,
                  }}
                />

                {/* Camera bump on back (visible on edge) */}
                <div className="absolute -right-[1px] top-16 w-[2px] h-8 rounded-l-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #7c91a8, #2d3e50)',
                    boxShadow: 'inset 1px 0 2px rgba(0,0,0,0.5)',
                  }}
                />
              </div>

              {/* Realistic Ambient Glow */}
              <div className="absolute inset-0 -z-10">
                {/* Main glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-transparent blur-3xl scale-110" />
                {/* Screen light reflection */}
                <div className="absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-2xl" />
                {/* Bottom shadow */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-black/60 blur-2xl" />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* App Detail Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1a1d23, #2d3748)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Metallic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />

              {/* Content */}
              <div className="relative p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedApp(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* App Icon Large */}
                <div className={`w-24 h-24 ${selectedApp.gradient} rounded-3xl shadow-2xl flex items-center justify-center border-2 border-white/20 mb-6 mx-auto relative overflow-hidden`}
                  style={{
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
                  }}
                >
                  {/* Glass shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                  <selectedApp.icon className="w-12 h-12 text-white relative z-10" />
                </div>

                {/* App Info */}
                <h3 className="text-3xl font-bold text-white text-center mb-2">{selectedApp.name}</h3>
                <p className="text-white/70 text-center mb-4">{selectedApp.description}</p>
                <p className="text-white/50 text-sm text-center mb-6 font-mono">{selectedApp.tech}</p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selectedApp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-white text-black rounded-full font-semibold text-center hover:bg-white/90 transition-colors"
                  >
                    Open App
                  </a>
                  <button
                    onClick={() => setSelectedApp(null)}
                    className="flex-1 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/20 text-xs font-mono uppercase tracking-widest"
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
