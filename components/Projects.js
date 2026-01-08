'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Download, Play, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const projects = [
    {
      title: 'DOTKO.IN',
      description: 'Comprehensive MSME Trust & Verification Platform - India\'s first transparent B2B rating system for MSMEs with verified transaction tracking and fair dispute resolution.',
      image: '/images/dotko.jpg',
      period: 'Dec 2025 - Present',
      tech: ['React Native', 'Expo', 'Firebase', 'Firestore', 'Cloud Storage'],
      github: 'https://github.com/yesanisha/dotko',
      download: 'https://expo.dev/artifacts/eas/mk2LchUrR6YG4hJ55WnpLe.apk',
      demo: '/images/dotko.jpg',
      demoType: 'images',
      qrCode: '/images/dotkoscanner_app.png',
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
      title: 'Farma',
      description: 'Production-ready cross-platform mobile application with AI-powered plant disease detection using computer vision and real-time ML inference.',
      image: '/images/Farma.jpg',
      period: 'Aug 2025 - Oct 2025',
      tech: ['React Native', 'Firebase', 'Flask', 'YOLOv5/v8', 'GCP'],
      github: 'https://github.com/yesanisha/farma-v3',
      download: 'https://expo.dev/accounts/yesanisha/projects/farma/builds/f9da75a2-1427-4216-8308-7a19f37e0143',
      demo: 'https://appetize.io/app/b_ff44pezyfq6kwk2vcb4jor6ja4',
      demoType: 'video',
      featured: true,
      highlights: [
        'Built cross-platform app with React Native frontend, Firebase backend, and Flask ML API',
        'Created offline-first architecture with AsyncStorage caching for 5 plant species',
        'Successfully integrated Gemini API chatbot to enhance user interaction',
        'Secure authentication with Firebase Phone Auth + JWT serving real-time ML predictions'
      ]
    },
    {
      title: 'HeyRoomie',
      description: 'Mobile app with multi-tiered architecture connecting people looking for roommates through intelligent ML-powered matching algorithms.',
      image: '/images/HeyRoomie.jpg',
      period: 'Sept 2025 - Nov 2025',
      tech: ['React Native', 'FastAPI', 'Firebase', 'OAuth 2.0', 'ML'],
      github: 'https://github.com/yesanisha/heyroomie-app',
      download: 'https://heyroomie.in',
      demo: '/images/HeyRoomie.jpg',
      demoType: 'images',
      featured: true,
      highlights: [
        'Architecting mobile app with multi-tiered architecture',
        'Designing ML-powered matching algorithms analyzing user preferences',
        'Implementing secure authentication with OAuth 2.0 and encrypted data storage',
        'Working in agile environment with bi-weekly sprints and code reviews'
      ]
    },
    
    {
      title: 'MoveABox',
      description: 'Professional logistics and moving services platform connecting customers with verified movers and packers across India.',
      image: '/images/MoveABox.jpg',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yesanisha/moveabox',
      download: 'https://moveabox.com',
      demo: '/images/MoveABox.jpg',
      demoType: 'images',
      featured: false
    },
    {
      title: 'MovieTime',
      description: 'Android movie recommendation application with personalized suggestions and trending content.',
      image: '/images/MovieTime.jpg',
      tech: ['Kotlin', 'Android SDK', 'TMDB API', 'Material Design'],
      github: 'https://github.com/yesanisha/movie-recommendation-application',
      download: null,
      demo: '/images/MovieTime.jpg',
      demoType: 'images',
      featured: false
    },
    {
      title: 'LinkedIn Auto Search',
      description: 'Automation tool for LinkedIn job search and application tracking with intelligent filtering.',
      image: '/images/LinkedIn.jpg',
      tech: ['JavaScript', 'Node.js', 'Puppeteer', 'Automation'],
      github: 'https://github.com/yesanisha/linkedin-auto-search',
      download: null,
      demo: '/images/LinkedIn.jpg',
      demoType: 'images',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm text-pink-500 font-mono mb-2">$ ls projects/</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
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
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />

                {/* QR Code - Bottom Right */}
                {project.qrCode && (
                  <div className="absolute bottom-3 right-3 bg-white p-2 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={project.qrCode}
                      alt="Scan QR for application"
                      className="w-20 h-20"
                    />
                    <p className="text-[8px] text-center text-gray-600 mt-1 font-medium">
                      Scan QR
                    </p>
                  </div>
                )}

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
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description - shows only snippet, full on hover */}
                <div className="relative overflow-hidden mb-4">
                  <p className="text-sm text-gray-400 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack - compact pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Highlights - hidden, shows on hover */}
                {project.highlights && (
                  <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <ul className="space-y-1 mb-4 text-xs text-gray-400">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-pink-400 mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions - 3 Buttons */}
                <div className="flex flex-wrap gap-2">
                  {/* Code Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </a>

                  {/* Download App Button */}
                  {project.download && (
                    <a
                      href={project.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm bg-pink-500 text-white hover:bg-pink-600 rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  )}

                  {/* Demo Button */}
                  {project.demo && (
                    <button
                      onClick={() => {
                        setSelectedApp(project);
                        setIsModalOpen(true);
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-700 text-white hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Demo
                    </button>
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
          <h3 className="text-2xl font-semibold text-white mb-6">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-pink-500/50 rounded-xl p-5 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              >
                {/* Image - smaller */}
                <div className="relative h-32 bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h4 className="font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>

                {/* Tech tags - minimal */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-gray-800 text-gray-400 rounded border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
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
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>View 19+ repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Demo Modal */}
      {isModalOpen && selectedApp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => {
            setIsModalOpen(false);
            setSelectedApp(null);
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedApp.title}</h3>
                <p className="text-gray-400 text-sm mt-1">Demo Preview</p>
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedApp(null);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              {selectedApp.demoType === 'video' ? (
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={selectedApp.demo}
                    className="w-full h-full"
                    allow="camera; microphone; geolocation"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="grid gap-4">
                  <img
                    src={selectedApp.demo}
                    alt={`${selectedApp.title} demo`}
                    className="w-full rounded-lg border border-gray-800"
                  />
                  <p className="text-gray-400 text-center text-sm">
                    Demo screenshots and media
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-800 flex gap-3">
              {selectedApp.github && (
                <a
                  href={selectedApp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
                >
                  <Code className="w-4 h-4" />
                  View Code
                </a>
              )}
              {selectedApp.download && (
                <a
                  href={selectedApp.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-pink-500 text-white hover:bg-pink-600 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
