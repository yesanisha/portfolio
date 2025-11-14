'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Coffee } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'HeyRoomie',
      description: 'Mobile app with multi-tiered architecture connecting people looking for roommates through intelligent ML-powered matching algorithms.',
      image: '/images/HeyRoomie.jpg',
      period: 'Sept 2025 - Present',
      tech: ['React Native', 'FastAPI', 'Firebase', 'OAuth 2.0', 'ML', 'Python', 'Zustand'],
      github: 'https://github.com/yesanisha/heyroomie-app',
      featured: true,
      highlights: [
        'Architecting mobile app with multi-tiered architecture: React Native frontend, FastAPI backend, Firebase, and ML recommendation engine',
        'Designing matching algorithms analyzing user preferences and compatibility metrics to optimize user experience',
        'Implementing secure authentication with OAuth 2.0 and encrypted data storage following OWASP practices',
        'Working in agile environment with bi-weekly sprints and code reviews'
      ]
    },
    {
      title: 'Farma',
      description: 'Production-ready cross-platform mobile application with AI-powered plant disease detection using computer vision and real-time ML inference.',
      image: '/images/Farma.jpg',
      period: 'June 2025 - Oct 2025',
      tech: ['React Native', 'Firebase', 'Flask', 'YOLOv5/v8', 'GraphQL', 'GCP', 'PostgreSQL', 'ResNet50'],
      github: 'https://github.com/yesanisha/farma-v3',
      featured: true,
      highlights: [
        'Built cross-platform app with React Native frontend, Firebase backend, and Flask ML API',
        'Created offline-first architecture with AsyncStorage caching for 5 plant species, handling network failures gracefully',
        'Successfully integrated Gemini API chatbot to enhance user interaction and automate intelligent support',
        'Secure authentication with Firebase Phone Auth + JWT serving real-time ML predictions at scale',
      ]
    },
    {
      title: 'Secure+',
      description: 'Enterprise-grade JWT authentication microservice with comprehensive security features and vulnerability scanning.',
      image: '/images/Secure+.jpg',
      period: 'Aug 2025 - Oct 2025',
      tech: ['PostgreSQL', 'Express', 'React', 'Node.js', 'JWT', 'OWASP ZAP'],
      github: 'https://github.com/yesanisha/secure-auth-api',
      featured: true,
      highlights: [
        'Implemented JWT authentication microservice with refresh token rotation',
        'Built-in rate limiting and SQL injection prevention',
        'OWASP security headers and best practices implementation',
        'Integrated vulnerability scanning with OWASP ZAP',
        'Production-ready with comprehensive error handling and logging'
      ]
    },
    {
      title: 'MovieTime',
      description: 'Android movie recommendation application with personalized suggestions and trending content.',
      image: '/images/MovieTime.jpg',
      tech: ['Kotlin', 'Android SDK', 'TMDB API', 'Material Design'],
      github: 'https://github.com/yesanisha/movie-recommendation-application',
      featured: false,
      highlights: [
        'Android native app with Kotlin',
        'TMDB API integration for movie data',
        'Personalized recommendations'
      ]
    },
    {
      title: 'LinkedIn Auto Search',
      description: 'Automation tool for LinkedIn job search and application tracking with intelligent filtering.',
      image: '/images/LinkedIn.jpg',
      tech: ['JavaScript', 'Node.js', 'Puppeteer', 'Automation'],
      github: 'https://github.com/yesanisha/linkedin-auto-search',
      featured: false,
      highlights: [
        'Browser automation for job searching',
        'Smart filtering and tracking',
        'Application management'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'This website! A creative portfolio with interactive elements, smooth animations, and responsive design.',
      image: '/images/pic.jpeg',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
      github: 'https://github.com/yesanisha',
      live: '#',
      featured: false,
      highlights: [
        'Server-side rendering with Next.js',
        'Smooth animations with Framer Motion',
        'Fully responsive design'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 font-mono">
            <span className="text-pink-500">$</span> ls <span className="text-gradient">projects/</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 font-mono">
            Some things I've built with love (and lots of coffee)
          </p>

          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 font-mono text-gray-200">
              Highlighted Work
            </h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gray-800 overflow-hidden border-b border-pink-500/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-200 font-mono">{project.title}</h4>
                      {project.period && (
                        <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 border border-pink-500/20 whitespace-nowrap ml-2 font-mono">
                          {project.period}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-4 text-sm font-mono">{project.description}</p>

                    <ul className="space-y-1 mb-4 max-h-40 overflow-y-auto">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start gap-2 font-mono">
                          <span className="text-pink-400 mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded-full text-xs font-medium font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 border border-pink-500/30 hover:border-pink-500 hover:text-pink-400 transition-colors text-sm font-mono"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all text-sm font-mono"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-mono text-gray-200">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 border border-pink-500/20 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all"
                >
                  <div className="relative h-40 bg-gray-800 overflow-hidden border border-pink-500/20 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-200 mb-2 font-mono">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 font-mono">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold text-sm font-mono"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 italic font-mono">
              Want to see more? Check out my{' '}
              <a href="https://github.com/yesanisha" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline font-semibold">
                GitHub (@yesanisha)
              </a>
              {' '}for 19+ repositories!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
