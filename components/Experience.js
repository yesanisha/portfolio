'use client';
import { motion } from 'framer-motion';
import { Book, Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
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
      color: 'pink'
    },
    {
      title: 'React Native App Developer (Intern) & Technical Lead',
      company: 'Hey Roomie',
      location: 'Remote',
      period: 'Sept 2025 - Present',
      description: [
        'Architecting mobile app with multi-tiered architecture: React Native frontend, FastAPI backend, Firebase, and ML recommendation engine',
        'Designing matching algorithms analyzing user preferences and compatibility metrics to optimize user experience',
        'Implementing secure authentication with OAuth 2.0 and encrypted data storage following OWASP practices',
        'Working in agile environment with bi-weekly sprints, code reviews, and handling ambiguous product requirements'
      ],
      tech: ['React Native', 'FastAPI', 'Firebase', 'OAuth 2.0', 'ML', 'Python', 'Agile'],
      color: 'pink'
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
      color: 'rose'
    },
    {
      title: 'Documentation and Testing Intern',
      company: 'Mentor-Mentee Platform, Christ University',
      location: 'Bengaluru',
      period: 'July 2024 - Sept 2024',
      description: [
        'Documented API specifications and testing protocols for university mentorship platform',
        'Conducted functional testing and bug reporting, identifying 15+ critical issues',
        'Created comprehensive test cases and user acceptance testing documentation',
        'Collaborated with development team to ensure quality standards and timely bug resolution'
      ],
      tech: ['API Documentation', 'Testing', 'Bug Tracking', 'QA', 'Technical Writing'],
      color: 'purple'
    }
  ];

  const education = {
    degree: 'Bachelor of Computer Application',
    school: 'Christ University',
    location: 'Bengaluru, Karnataka',
    period: '2022 - 2025',
    gpa: '8.5 CGPA',
    highlights: [
      'Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development',
      'Active member of coding clubs and tech communities',
      'Participated in multiple hackathons and coding competitions'
    ]
  };

  return (
    <section id="experience" className="py-20 px-4 bg-black relative overflow-hidden">
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
            <span className="text-pink-500">$</span> cat <span className="text-gradient">experience.log</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 font-mono">
            My professional journey so far
          </p>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 font-mono">
              <Briefcase className="text-pink-500" />
              <span className="text-gray-200">Work Experience</span>
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-4 border-pink-500/30"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-pink-500 rounded-full border-4 border-black shadow-lg shadow-pink-500/50" />

                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 border border-pink-500/20 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-200 font-mono">{exp.title}</h4>
                        <p className="text-lg text-pink-400 font-semibold font-mono">{exp.company}</p>
                        <p className="text-sm text-gray-500 font-mono">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-3 py-1 border border-pink-500/20 font-mono">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-2 font-mono text-sm">
                          <span className="text-pink-400 mt-1">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded text-xs font-medium font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 font-mono">
              <Book className="text-pink-500" />
              <span className="text-gray-200">Education</span>
            </h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 border border-pink-500/20 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all"
            >
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-200 font-mono">{education.degree}</h4>
                  <p className="text-lg text-pink-400 font-semibold font-mono">{education.school}</p>
                  <p className="text-sm text-gray-500 font-mono">{education.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-3 py-1 border border-pink-500/20 mb-2 font-mono">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{education.period}</span>
                  </div>
                  <div className="text-2xl font-bold text-pink-500 font-mono">{education.gpa}</div>
                </div>
              </div>

              <ul className="space-y-2">
                {education.highlights.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-start gap-2 font-mono text-sm">
                    <span className="text-pink-400 mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
