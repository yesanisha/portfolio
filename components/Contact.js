'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

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
    <section id="contact" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 font-mono">
            <span className="text-pink-500">$</span> ./contact<span className="text-gradient">.sh</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 font-mono">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 border border-pink-500/20 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 border border-pink-500/30 group-hover:border-pink-500 bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1 font-mono">{method.label}</div>
                    <div className="font-semibold text-gray-300 group-hover:text-pink-400 transition-colors font-mono text-sm">
                      {method.value}
                    </div>
                    <div className="text-xs text-gray-600 mt-1 font-mono">
                      $ {method.command}
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-gray-600 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 border border-pink-500/30 p-8 md:p-12 shadow-xl shadow-pink-500/10 text-center relative overflow-hidden backdrop-blur-sm"
          >
            {/* Terminal-style decorative elements */}
            <div className="absolute top-4 left-4 text-xs text-gray-600 font-mono">
              anisha@contact:~$
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            <div className="relative z-10 mt-8">
              <h3 className="text-3xl font-bold mb-4 font-mono text-gradient">Ready to Work Together?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-400 font-mono">
                Whether you have a project idea, a job opportunity, or just want to connect over
                coffee, feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:anishakumari6145@gmail.com"
                  className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold hover:shadow-xl hover:shadow-pink-500/30 transition-all font-mono"
                >
                  $ send --email
                </a>
                <a
                  href="https://linkedin.com/in/yesanisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gray-800 text-gray-300 border border-pink-500/30 hover:border-pink-500 hover:text-pink-400 font-semibold transition-all font-mono"
                >
                  $ connect --linkedin
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-4 font-mono">
              <MapPin className="w-5 h-5 text-pink-400" />
              <span className="font-semibold">Based in Bengaluru, India</span>
            </div>
            <p className="text-sm text-gray-500 font-mono">
              Open to remote opportunities and exciting collaborations worldwide!
            </p>
          </motion.div>

          {/* Hidden Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-gray-600 italic cursor-pointer hover:text-pink-400 transition-colors font-mono" title="Best time to reach me? Early morning with a cup of coffee!">
              # Pro tip: I respond fastest to messages in the morning!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
