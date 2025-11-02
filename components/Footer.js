'use client';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-strawberry-50/30 to-pink-100/50 py-16 px-4 overflow-hidden">
      {/* Shiny animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-strawberry-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content - centered */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-strawberry-300 to-strawberry-300"></div>
              <div className="text-strawberry-400 text-2xl"></div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-strawberry-300 to-strawberry-300"></div>
            </div>

            <motion.p
              className="flex items-center justify-center gap-2 text-gray-700 text-lg font-medium"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Made with <Heart className="w-5 h-5 fill-strawberry-500 text-strawberry-500" /> {' '}
              by{' '}
              <span className="text-gradient font-bold">Anisha</span>
            </motion.p>

            <p className="text-sm text-gray-600 font-medium">
              © {new Date().getFullYear()} Anisha Kumari. All rights reserved.
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-strawberry-200 shadow-sm font-medium text-xs">
                Next.js
              </span>
              <span className="text-strawberry-400">•</span>
              <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-strawberry-200 shadow-sm font-medium text-xs">
                Tailwind CSS
              </span>
              <span className="text-strawberry-400">•</span>
              <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-strawberry-200 shadow-sm font-medium text-xs">
                Framer Motion
              </span>
            </div>
          </motion.div>

          {/* Scroll to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-strawberry-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-strawberry-300/50 transition-all duration-300 mt-6"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-lg">↑</span>
            <span className="hidden sm:inline">Back to Top</span>
          </motion.button>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center gap-2 mt-6 opacity-50">
            <span className="text-strawberry-300">🍓</span>
            <span className="text-pink-300">✨</span>
            <span className="text-strawberry-300">🍓</span>
          </div>
        </div>
      </div>
    </footer>
  );
}