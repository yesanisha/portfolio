'use client';
import { motion } from 'framer-motion';
import { Smartphone, Download, Zap, Rocket, QrCode, ExternalLink, Play, CheckCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ExpoPreview() {
  const [copied, setCopied] = useState(false);

  const previewData = {
    appName: "DOTKO",
    version: "1.0.0",
    buildNumber: "01",
    publishDate: "Jan 2, 2026",
    platforms: ["Android", "iOS"],
    qrCode: "https://qr.expo.dev/expo-go?owner=anishakumari&slug=DOTKO&releaseChannel=default&host=exp.host",
    deepLink: "exp+DOTKO://expo-development-client/?url=https://u.expo.dev/41d5cb65-0c72-4b4b-b2dc-f32e4b12ca16/group/d4286421-befc-44eb-aa4a-8a1792403844",
    detailsUrl: "https://expo.dev/preview/update?message=Client+preview+build+update+01&updateRuntimeVersion=1.0.0&createdAt=2026-01-02T07%3A02%3A44.033Z&slug=DOTKO&projectId=41d5cb65-0c72-4b4b-b2dc-f32e4b12ca16&group=d4286421-befc-44eb-aa4a-8a1792403844"
  };

  const features = [
    { icon: Zap, text: "Lightning-fast updates", color: "from-yellow-400 to-orange-500" },
    { icon: Rocket, text: "Production-ready build", color: "from-pink-500 to-purple-600" },
    { icon: CheckCircle, text: "Cross-platform compatible", color: "from-green-400 to-emerald-600" },
    { icon: Sparkles, text: "Latest runtime v1.0.0", color: "from-cyan-400 to-blue-600" }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-pink-500/30 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-pink-300 font-semibold">Client Preview Build Update {previewData.buildNumber}</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
              {previewData.appName}
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-2">
            Experience the future of MSME verification
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-lg text-gray-400">v{previewData.version}</span>
            <span className="text-gray-600">•</span>
            <span className="text-lg text-gray-400">{previewData.publishDate}</span>
            <span className="text-gray-600">•</span>
            <div className="flex gap-2">
              {previewData.platforms.map((platform) => (
                <span key={platform} className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-sm text-pink-300 border border-pink-500/30">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - QR and Actions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* QR Code Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Quick Access</h2>
                  <p className="text-gray-400">Scan to preview instantly</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl mb-6 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* QR Code Placeholder - Replace with actual QR */}
                  <div className="w-64 h-64 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-white" />
                  </div>
                </motion.div>
              </div>

              <p className="text-center text-gray-400 text-sm">
                Scan with your phone camera or Expo Go app
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all group"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white font-medium text-sm leading-tight">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Actions and Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Device Mockup */}
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Preview Methods</h2>
                  <p className="text-gray-400">Choose your preferred way</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Development Build Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl p-6 text-left hover:shadow-lg hover:shadow-pink-500/50 transition-all group"
                  onClick={() => window.open(previewData.deepLink, '_blank')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Development Build</h3>
                        <p className="text-white/80 text-sm">Full features & debugging</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>

                {/* Expo Go Option */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl p-6 text-left hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all group"
                  onClick={() => window.open(previewData.deepLink, '_blank')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Expo Go</h3>
                        <p className="text-gray-400 text-sm">Quick preview & testing</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>

                {/* View Details */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl p-6 text-left hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 transition-all group"
                  onClick={() => window.open(previewData.detailsUrl, '_blank')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Update Details</h3>
                        <p className="text-gray-400 text-sm">View on Expo dashboard</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Deep Link Copy */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <Download className="w-5 h-5 text-pink-400" />
                Deep Link URL
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={previewData.deepLink}
                  readOnly
                  className="flex-1 bg-black/30 text-gray-300 px-4 py-3 rounded-lg text-sm font-mono border border-white/10"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard(previewData.deepLink)}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                >
                  {copied ? '✓ Copied!' : 'Copy'}
                </motion.button>
              </div>
            </div>

            {/* Installation Instructions */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-white font-bold mb-4 text-lg">🚀 Quick Start Guide</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white">1</span>
                  <span>Install <span className="text-cyan-400 font-semibold">Expo Go</span> from App Store or Play Store</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white">2</span>
                  <span>Scan the QR code with your camera (iOS) or Expo Go (Android)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white">3</span>
                  <span>Wait for the build to load and start exploring!</span>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Runtime Version", value: previewData.version },
            { label: "Platforms", value: previewData.platforms.length },
            { label: "Build Status", value: "Live" },
            { label: "Last Updated", value: previewData.publishDate }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
