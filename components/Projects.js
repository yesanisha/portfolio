'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import AppEmulatorModal from './AppEmulatorModal';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const projects = [
    {
      title: 'DOTKO.IN',
      description: 'Comprehensive MSME Trust & Verification Platform - India\'s first transparent B2B rating system for MSMEs with verified transaction tracking and fair dispute resolution.',
      image: '/images/DOTKO.jpg',
      period: 'Oct 2025 - Present',
      tech: ['React Native', 'Expo', 'Firebase', 'Firestore', 'Cloud Storage'],
      github: 'https://github.com/yesanisha/dotko',
      live: 'exp+DOTKO://expo-development-client/?url=https://u.expo.dev/41d5cb65-0c72-4b4b-b2dc-f32e4b12ca16/group/d4286421-befc-44eb-aa4a-8a1792403844',
      showEmulator: false,
      featured: true,
      highlights: [
        'Built comprehensive MSME verification platform with GSTIN/PAN lookup',
        'Designed fair 72-hour appeal process for transparent dispute resolution',
        'Implemented secure multi-step signup with business identity verification',
        'Created supplier protection system with mandatory PDF document proof',
        'Architected privacy-first design keeping supplier details confidential'
      ]
    },
    {
      title: 'HeyRoomie',
      description: 'Mobile app with multi-tiered architecture connecting people looking for roommates through intelligent ML-powered matching algorithms.',
      image: '/images/HeyRoomie.jpg',
      period: 'Sept 2025 - Present',
      tech: ['React Native', 'FastAPI', 'Firebase', 'OAuth 2.0', 'ML'],
      github: 'https://github.com/yesanisha/heyroomie-app',
      live: 'https://heyroomie.in',
      featured: true,
      highlights: [
        'Architecting mobile app with multi-tiered architecture',
        'Designing ML-powered matching algorithms analyzing user preferences',
        'Implementing secure authentication with OAuth 2.0 and encrypted data storage',
        'Working in agile environment with bi-weekly sprints and code reviews'
      ]
    },
    {
      title: 'Farma',
      description: 'Production-ready cross-platform mobile application with AI-powered plant disease detection using computer vision and real-time ML inference.',
      image: '/images/Farma.jpg',
      period: 'June 2025 - Oct 2025',
      tech: ['React Native', 'Firebase', 'Flask', 'YOLOv5/v8', 'GCP'],
      github: 'https://github.com/yesanisha/farma-v3',
      live: 'https://expo.dev/accounts/yesanisha/projects/farma/builds/f9da75a2-1427-4216-8308-7a19f37e0143',
      showEmulator: true,
      appetizeKey: 'b_ff44pezyfq6kwk2vcb4jor6ja4',
      appetizePlayUrl: 'https://appetize.io/app/b_ff44pezyfq6kwk2vcb4jor6ja4',
      featured: true,
      highlights: [
        'Built cross-platform app with React Native frontend, Firebase backend, and Flask ML API',
        'Created offline-first architecture with AsyncStorage caching for 5 plant species',
        'Successfully integrated Gemini API chatbot to enhance user interaction',
        'Secure authentication with Firebase Phone Auth + JWT serving real-time ML predictions'
      ]
    },
    {
      title: 'MovieTime',
      description: 'Android movie recommendation application with personalized suggestions and trending content.',
      image: '/images/MovieTime.jpg',
      tech: ['Kotlin', 'Android SDK', 'TMDB API', 'Material Design'],
      github: 'https://github.com/yesanisha/movie-recommendation-application',
      featured: false
    },
    {
      title: 'LinkedIn Auto Search',
      description: 'Automation tool for LinkedIn job search and application tracking with intelligent filtering.',
      image: '/images/LinkedIn.jpg',
      tech: ['JavaScript', 'Node.js', 'Puppeteer', 'Automation'],
      github: 'https://github.com/yesanisha/linkedin-auto-search',
      featured: false
    },
    {
      title: 'MoveABox',
      description: 'Professional logistics and moving services platform connecting customers with verified movers and packers across India.',
      image: '/images/MoveABox.jpg',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yesanisha/moveabox',
      live: 'https://moveabox.com',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm text-gray-400 font-mono mb-2">$ ls projects/</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Selected Work
          </h2>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {project.period && (
                      <span className="inline-block text-xs text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {project.period}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description - shows only snippet, full on hover */}
                <div className="relative overflow-hidden mb-4">
                  <p className="text-sm text-gray-500 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack - compact pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Highlights - hidden, shows on hover */}
                {project.highlights && (
                  <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <ul className="space-y-1 mb-4 text-xs text-gray-500">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-pink-400 mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.live && (
                    project.showEmulator ? (
                      <button
                        onClick={() => {
                          setSelectedApp(project);
                          setIsModalOpen(true);
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-900 text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </button>
                    ) : (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-900 text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Corner accent - appears on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-bl-[100%]" />
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Compact List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-gray-100 hover:border-gray-200 rounded-xl p-5 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
              >
                {/* Image - smaller */}
                <div className="relative h-32 bg-gray-50 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{project.description}</p>

                {/* Tech tags - minimal */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  View Code
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/yesanisha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span>View 19+ repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* App Emulator Modal */}
      <AppEmulatorModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedApp(null);
        }}
        appTitle={selectedApp?.title}
        appetizePublicKey={selectedApp?.appetizeKey}
        appetizePlayUrl={selectedApp?.appetizePlayUrl}
        downloadUrl={selectedApp?.live}
      />
    </section>
  );
}
