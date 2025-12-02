'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download } from 'lucide-react';

export default function AppEmulatorModal({ isOpen, onClose, appTitle, appetizePublicKey, appetizePlayUrl, downloadUrl }) {
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
            className="relative bg-gray-900 border-2 border-pink-500/50 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-pink-500/30 bg-gray-800/50">
              <h3 className="text-xl font-bold text-gray-200 font-mono">
                {appTitle} - Live Demo
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-pink-400" />
              </button>
            </div>

            {/* Emulator Content */}
            <div className="p-6 flex items-center justify-center min-h-[600px]">
              <div className="text-center space-y-6 p-8 max-w-lg">
                <div className="text-6xl mb-4">📱</div>
                <h4 className="text-2xl font-bold text-pink-400 font-mono">
                  Try {appTitle} Live!
                </h4>
                <p className="text-gray-400 font-mono">
                  Experience the app in your browser or download it to your device.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  {appetizePlayUrl && (
                    <a
                      href={appetizePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 border border-pink-500 text-white hover:bg-pink-600 transition-all font-mono rounded shadow-lg shadow-pink-500/20"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Play in Browser
                    </a>
                  )}

                  {downloadUrl && (
                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 border border-pink-500/50 text-pink-400 hover:border-pink-500 hover:bg-gray-700 transition-all font-mono rounded"
                    >
                      <Download className="w-5 h-5" />
                      Download APK
                    </a>
                  )}
                </div>

                <div className="pt-4 space-y-2">
                  <p className="text-xs text-gray-500 font-mono">
                    • Play in Browser: Interactive demo via Appetize.io
                  </p>
                  <p className="text-xs text-gray-500 font-mono">
                    • Download APK: Install directly on your Android device
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
