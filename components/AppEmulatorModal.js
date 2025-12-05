'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

export default function AppEmulatorModal({ isOpen, onClose, appTitle, appetizePublicKey, downloadUrl }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative bg-gray-900/80 border-2 border-pink-500/50 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden pulse-glow backdrop-blur-md hover:border-pink-500/60 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-pink-500/30 bg-gray-800/50">
              <h3 className="text-xl font-bold text-gray-200 font-mono">
                {appTitle}
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-pink-400" />
              </button>
            </div>

            {/* Emulator Content */}
            <div className="p-6 flex items-center justify-center min-h-[600px] relative overflow-hidden group">
              {/* Animated gradient orbs in background */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />

              <div className="text-center space-y-6 p-8 max-w-lg relative z-10">
                <motion.h4
                  className="text-2xl font-bold text-pink-400 font-mono"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Download {appTitle}
                </motion.h4>
                <p className="text-gray-400 font-mono">
                  Install directly on your Android device.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  {downloadUrl && (
                    <motion.a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 border border-pink-500 text-white hover:bg-pink-600 transition-all font-mono rounded shadow-lg shadow-pink-500/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-5 h-5" />
                      Download APK
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
