'use client';
import { motion } from 'framer-motion';
import { Heart, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-pink-500/20 py-16 px-4 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"
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
            {/* Decorative line with terminal icon */}
        
            

            <p className="text-sm text-gray-500 font-medium font-mono">
              © {new Date().getFullYear()} Anisha Kumari. All rights reserved.
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="inline-flex items-center px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 text-gray-400 shadow-sm font-medium text-xs font-mono">
                Next.js
              </span>
              <span className="text-pink-400 font-mono">•</span>
              <span className="inline-flex items-center px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 text-gray-400 shadow-sm font-medium text-xs font-mono">
                Tailwind CSS
              </span>
              <span className="text-pink-400 font-mono">•</span>
              <span className="inline-flex items-center px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 text-gray-400 shadow-sm font-medium text-xs font-mono">
                Framer Motion
              </span>
            </div>
          </motion.div>

          {/* Scroll to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-pink-500/20 border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-semibold shadow-lg hover:shadow-pink-500/30 transition-all duration-300 mt-6 font-mono"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-lg">↑</span>
            <span className="hidden sm:inline">$ cd ~</span>
            <span className="sm:hidden">Top</span>
          </motion.button>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center gap-2 mt-6 opacity-50 font-mono text-gray-600">
            <span>&lt;</span>
            <span className="text-pink-500">/</span>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
