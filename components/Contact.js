'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Heart } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'anishakumari6145@gmail.com',
      href: 'mailto:anishakumari6145@gmail.com',
      color: 'from-strawberry-400 to-pink-400'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 7526976187',
      href: 'tel:+917526976187',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yesanisha',
      href: 'https://linkedin.com/in/yesanisha',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/yesanisha',
      href: 'https://github.com/yesanisha',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            Let's <span className="text-gradient">Connect!</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
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
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-strawberry-100 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">{method.label}</div>
                    <div className="font-semibold text-gray-800 group-hover:text-strawberry-500 transition-colors">
                      {method.value}
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-gray-400 group-hover:text-strawberry-500 group-hover:translate-x-1 transition-all" />
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
            className="bg-gradient-to-r from-strawberry-400 to-pink-500 p-8 md:p-12 rounded-2xl shadow-xl text-white text-center relative overflow-hidden"
          >
            {/* Background strawberries */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-6xl"
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                >
                  🍓
                </motion.div>
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="text-6xl mb-4"
              >

              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Whether you have a project idea, a job opportunity, or just want to connect over
                coffee (and strawberries! 🍓), feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:anishakumari6145@gmail.com"
                  className="px-8 py-4 bg-white text-strawberry-500 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
                >
                  Send Me an Email
                </a>
                <a
                  href="https://linkedin.com/in/yesanisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-strawberry-500 transition-all hover:scale-105"
                >
                  Connect on LinkedIn
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
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <MapPin className="w-5 h-5 text-strawberry-400" />
              <span className="font-semibold">Based in Bengaluru, India 🇮🇳</span>
            </div>
            <p className="text-sm text-gray-500">
              Open to remote opportunities and exciting collaborations worldwide! 🌍
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
            <p className="text-xs text-gray-400 italic cursor-pointer hover:text-strawberry-500 transition-colors" title="🍓 Secret: Best time to reach me? Early morning with a cup of coffee!">
              💡 Pro tip: I respond fastest to messages with strawberry emojis! 🍓
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
