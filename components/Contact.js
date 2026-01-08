'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'anishakumari6145@gmail.com',
      href: 'mailto:anishakumari6145@gmail.com',
      command: 'echo "anishakumari6145@gmail.com"'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 7526976187',
      href: 'tel:+917526976187',
      command: 'call +91-7526976187'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yesanisha',
      href: 'https://linkedin.com/in/yesanisha',
      command: 'open linkedin.com/in/yesanisha'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/yesanisha',
      href: 'https://github.com/yesanisha',
      command: 'git clone github.com/yesanisha'
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Let's Connect
          </h2>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT - CTA Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center lg:justify-start"
          >
            <Image
              src="/images/CTA.png"
              alt="Let's connect"
              width={300}
              height={300}
              className="w-full max-w-xs object-contain"
              priority
            />
          </motion.div>

          {/* RIGHT - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-2">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.01, x: 3 }}
                  className="group flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm px-4 py-2.5 hover:border-pink-500/50 transition-all cursor-pointer"
                >
                  {/* Icon */}
                  <div className="p-2 rounded-md bg-pink-500/10 text-pink-400">
                    {method.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-gray-500">
                      {method.label}
                    </div>
                    <div className="text-sm font-medium text-gray-200 truncate group-hover:text-pink-400 transition-colors">
                      {method.value}
                    </div>
                  </div>

                  {/* Arrow */}
                  <Send className="w-4 h-4 text-gray-600 group-hover:text-pink-400 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-3"
            >
              <a
                href="mailto:anishakumari6145@gmail.com"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-center text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/yesanisha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-gray-900 text-gray-300 text-center text-sm font-semibold rounded-lg border border-gray-800 hover:border-pink-500/50 hover:text-white transition-all"
              >
                LinkedIn
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4 border-t border-gray-800"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-medium text-white">Bengaluru, India</span>
                  <span className="text-gray-500"> • Remote friendly</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
