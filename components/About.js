'use client';
import { motion } from 'framer-motion';
import { Code2, Globe, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';


export default function About() {
  const interests = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Full Stack Development', desc: 'Building end-to-end applications' },
    { icon: <Globe className="w-6 h-6" />, title: 'World Explorer', desc: 'Discovering new cultures & places' },
    { icon: <Heart className="w-6 h-6" />, title: 'Strawberry Lover', desc: 'Yes, it\'s a personality trait! 🍓' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Problem Solver', desc: 'Love tackling complex challenges' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 cursor-pointer hover:text-strawberry-500 transition-colors" title="Easter egg: Try pressing Ctrl+Shift+S on your keyboard! 🍓">
            Discovering the world, one line of code at a time
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
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-strawberry-200">
                  <Image
                    src="/images/pic.jpeg"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Optional: Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-strawberry-200 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-strawberry-300 rounded-full blur-2xl opacity-50"></div>
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
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-strawberry-100 hover:border-strawberry-300 transition-all cursor-pointer"
                >
                  <div className="text-strawberry-500 mb-3">
                    {interest.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{interest.title}</h4>
                  <p className="text-sm text-gray-600">{interest.desc}</p>
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
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center border border-strawberry-100 hover:border-strawberry-300 transition-all"
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
                <div className="text-3xl font-bold text-strawberry-500 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
