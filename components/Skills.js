'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', percentage: 90 },
        { name: 'Python', percentage: 90 },
        { name: 'Node.js', percentage: 80 },
        { name: 'Java', percentage: 50 },
        { name: 'C++', percentage: 65 },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React Native', percentage: 95 },
        { name: 'React.js', percentage: 90 },
        { name: 'Flask', percentage: 85 },
        { name: 'Express.js', percentage: 70 },
        { name: 'Zustand', percentage: 80 },
      ],
    },
    {
      title: 'Systems & Cloud',
      skills: [
        { name: 'AWS', percentage: 85 },
        { name: 'Firebase', percentage: 95 },
        { name: 'GraphQL', percentage: 90 },
        { name: 'RESTful APIs', percentage: 95 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', percentage: 90 },
        { name: 'MySQL', percentage: 85 },
        { name: 'MongoDB', percentage: 90 },
        { name: 'AsyncStorage', percentage: 85 },
      ],
    },
    {
      title: 'Security & OSINT',
      skills: [
        { name: 'OAuth 2.0', percentage: 90 },
        { name: 'Burp Suite', percentage: 70 },
        { name: 'Wireshark', percentage: 70 },
        { name: 'Network Security', percentage: 80 },
        { name: 'OSINT', percentage: 75 },
      ],
    },
  ];

  // Helper function to get color based on percentage
  const getColorClass = (percentage) => {
    if (percentage >= 90) return 'from-emerald-400 to-teal-500';
    if (percentage >= 80) return 'from-blue-400 to-indigo-500';
    if (percentage >= 70) return 'from-strawberry-400 to-pink-500';
    if (percentage >= 60) return 'from-amber-400 to-orange-500';
    return 'from-gray-400 to-slate-500';
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white via-strawberry-50/20 to-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Full-Stack Development | Distributed Systems | Cloud & Security
            </p>
          </div>

          {/* Skills Grid - 5 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-2xl hover:border-strawberry-300 transition-all"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-strawberry-400 to-pink-500 rounded-full"></div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      {/* Skill Name and Percentage */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-strawberry-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-gray-500">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${getColorClass(skill.percentage)} rounded-full relative overflow-hidden`}
                        >
                          {/* Subtle shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1.5,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-white rounded-2xl border border-gray-200 shadow-md p-6"
          >
            {/* <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Proficiency Levels
            </h4> */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                <span className="text-gray-700 font-medium">Expert ≥ 90%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                <span className="text-gray-700 font-medium">Advanced 80–89%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-strawberry-400 to-pink-500"></div>
                <span className="text-gray-700 font-medium">Proficient 70–79%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                <span className="text-gray-700 font-medium">Intermediate 60–69%</span>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-strawberry-600">AWS Academy Certified</span> |
              <span className="ml-2">1+ Year Internship Experience</span> |
              <span className="ml-2">Agile Development</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}