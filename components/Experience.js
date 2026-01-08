'use client';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'MoveABox',
      location: 'Bengaluru',
      period: 'Nov 2025 - Present',
      description: [
        'Developed enterprise logistics platform for packers and movers with real-time shipment tracking and automated workflows',
        'Architected full-stack solution using Next.js for server-side rendering and optimized client performance',
        'Integrated Zoho CRM APIs for customer management, invoice generation, and automated email communications',
        'Implemented RESTful APIs for order tracking, packing automation, and multi-stage shipment status updates',
        'Built responsive admin dashboard with analytics, route optimization, and real-time location tracking integration'
      ],
      tech: ['Next.js', 'Node.js', 'Zoho API', 'PostgreSQL', 'REST APIs', 'React', 'Tailwind CSS'],
      status: 'current'
    },
    {
      title: 'React Native App Developer (Intern) & Technical Lead',
      company: 'Hey Roomie',
      location: 'Remote',
      period: 'Sept 2025 - Nov 2025',
      description: [
        'Architecting mobile app with multi-tiered architecture: React Native frontend, FastAPI backend, Firebase, and ML recommendation engine',
        'Designing matching algorithms analyzing user preferences and compatibility metrics to optimize user experience',
        'Implementing secure authentication with OAuth 2.0 and encrypted data storage following OWASP practices',
        'Working in agile environment with bi-weekly sprints, code reviews, and handling ambiguous product requirements'
      ],
      tech: ['React Native', 'FastAPI', 'Firebase', 'OAuth 2.0', 'ML', 'Python', 'Agile'],
      status: 'completed'
    },
    {
      title: 'UI/UX Designer (Intern)',
      company: 'Wrexa Technologies',
      location: 'Remote',
      period: 'Nov 2024 - Feb 2025',
      description: [
        'Collaborated with international clients to deliver mobile and web application designs',
        'Created 15+ responsive UI/UX designs in Figma for e-commerce and SaaS applications',
        'Worked directly with developers to ensure design implementation fidelity',
        'Participated in client feedback sessions and iterated designs based on requirements'
      ],
      tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Responsive Design', 'Adobe XD'],
      status: 'completed'
    }
  ];

  const education = {
    degree: 'Bachelor of Computer Application',
    school: 'Christ University',
    location: 'Bengaluru, Karnataka',
    period: '2023 - 2026',
    gpa: '8.5 CGPA',
    highlights: [
      'Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development',
      'Active member of coding clubs and tech communities',
      'Participated in multiple hackathons and coding competitions'
    ]
  };

  return (
    <section id="experience" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Experience
          </h2>
          <p className="text-gray-400">
            Professional journey and key contributions
          </p>
        </motion.div>

        {/* Timeline Roadmap */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 via-pink-500/30 to-transparent" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2">
                    <motion.div
                      className={`w-4 h-4 rounded-full border-4 border-black ${
                        exp.status === 'current' ? 'bg-pink-500' : 'bg-gray-600'
                      }`}
                      animate={{
                        scale: isHovered ? 1.3 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden cursor-pointer"
                    animate={{
                      borderColor: isHovered ? 'rgba(236, 72, 153, 0.5)' : 'rgba(31, 41, 55, 1)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Default view - Company name and dates */}
                    {!isHovered && (
                      <div className="p-6">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-4">
                            <Briefcase className="w-5 h-5 text-pink-500 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-bold text-white">
                                {exp.company}
                              </h3>
                              <p className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                                <Calendar className="w-3 h-3" />
                                {exp.period}
                              </p>
                            </div>
                            {exp.status === 'current' && (
                              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs font-medium rounded-full border border-pink-500/30">
                                Current
                              </span>
                            )}
                          </div>
                          <span className="text-gray-500 text-sm">Hover for details</span>
                        </div>
                      </div>
                    )}

                    {/* Expanded view - Full details on hover */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="p-6"
                      >
                        {/* Header */}
                        <div className="mb-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {exp.company}
                              </h3>
                              <p className="text-lg text-pink-400 font-medium mb-3">
                                {exp.title}
                              </p>
                            </div>
                            {exp.status === 'current' && (
                              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs font-medium rounded-full border border-pink-500/30">
                                Current
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-start gap-3">
                                <span className="text-pink-500 mt-1 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded border border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-pink-500" />
            Education
          </h3>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h4>
                <p className="text-xl text-pink-400 font-medium mb-2">
                  {education.school}
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {education.location}
                </p>
              </div>

              <div className="text-right">
                <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-3">
                  <Calendar className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                  <p className="text-white font-medium text-sm">{education.period}</p>
                </div>
                <div className="text-3xl font-bold text-pink-500">
                  {education.gpa}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {education.highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <span className="text-pink-500 mt-1">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
