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
      color: 'strawberry'
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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            My professional journey so far
          </p>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-strawberry-500" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-4 border-strawberry-300"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-strawberry-500 rounded-full border-4 border-white shadow-lg" />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-strawberry-100 hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                        <p className="text-lg text-strawberry-500 font-semibold">{exp.company}</p>
                        <p className="text-sm text-gray-600">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 bg-strawberry-50 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <span className="text-strawberry-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-strawberry-100 to-pink-100 text-strawberry-700 rounded-full text-xs font-medium"
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
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Book className="text-strawberry-500" /> Education
            </h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-strawberry-100 hover:shadow-xl transition-all"
            >
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-800">{education.degree}</h4>
                  <p className="text-lg text-strawberry-500 font-semibold">{education.school}</p>
                  <p className="text-sm text-gray-600">{education.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600 bg-strawberry-50 px-3 py-1 rounded-full mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{education.period}</span>
                  </div>
                  <div className="text-2xl font-bold text-strawberry-500">{education.gpa}</div>
                </div>
              </div>

              <ul className="space-y-2">
                {education.highlights.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start gap-2">
                    <span className="text-strawberry-400 mt-1">🍓</span>
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
