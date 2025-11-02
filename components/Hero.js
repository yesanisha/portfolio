'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Floating strawberries background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          >

          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting with hidden treasure hint */}
          <motion.p
            className="text-strawberry-500 text-lg mb-4 font-semibold cursor-pointer hover:scale-110 transition-transform"
            title="Psst... try pressing Ctrl+Shift+S for a surprise! 🍓"
          >
            Hey There! I'm          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 px-4">
            <span className="text-gradient">Anisha Kumari</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-light px-4"
          >
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="inline-block">FULL-STACK DEV</span>
              <span className="text-strawberry-400 hidden sm:inline">•</span>
              <span className="inline-block">SOFTWARE DEV</span>
              <span className="text-strawberry-400 hidden sm:inline">•</span>
              <span className="inline-block">CYBERSECURITY ENTHUSIAST</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto px-4"
          >
            Computer Science student, passionate about building scalable applications,
            exploring new technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4"
          >
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 strawberry-gradient text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 text-center"
            >
              Let's Connect!
            </a>
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-strawberry-500 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 border-2 border-strawberry-300 text-center"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-3 sm:gap-6 justify-center items-center flex-wrap px-4"
          >
            <a
              href="https://github.com/anisha-11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:bg-strawberry-50 transition-all hover:scale-110 shadow-md"
              title="GitHub"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/anisha11kumari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:bg-strawberry-50 transition-all hover:scale-110 shadow-md"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:anisha.kumari@res.christuniversity.in"
              className="p-3 bg-white rounded-full hover:bg-strawberry-50 transition-all hover:scale-110 shadow-md"
              title="Email"
            >
              <Mail className="w-6 h-6 text-strawberry-500" />
            </a>
            <a
              href="tel:+919102251130"
              className="p-3 bg-white rounded-full hover:bg-strawberry-50 transition-all hover:scale-110 shadow-md"
              title="Phone"
            >
              <Phone className="w-6 h-6 text-green-600" />
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex items-center justify-center gap-2 text-gray-600"
          >
            <MapPin className="w-4 h-4 text-strawberry-400" />
            <span>Bengaluru, India 📍</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-strawberry-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-strawberry-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}