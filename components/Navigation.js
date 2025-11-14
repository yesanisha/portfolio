'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Travel', href: '#travel' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-pink-500/30 py-4'
          : 'bg-black/50 backdrop-blur-sm py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-mono font-bold text-pink-500 hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            anisha@dev:~$
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-300 hover:text-pink-400 transition-colors font-mono text-sm border border-transparent hover:border-pink-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name.toLowerCase()}
              </motion.a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <motion.a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-mono text-sm transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            contact.sh
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 border border-pink-500/30 hover:border-pink-500 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-pink-400" />
            ) : (
              <Menu className="w-6 h-6 text-pink-400" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-gray-900 border-l border-pink-500/30"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-mono font-bold text-pink-500">menu.sh</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 border border-pink-500/30 hover:border-pink-500 transition-colors"
                  >
                    <X className="w-6 h-6 text-pink-400" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-gray-300 hover:text-pink-400 border border-transparent hover:border-pink-500/30 transition-colors font-mono text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name.toLowerCase()}
                    </motion.a>
                  ))}
                </nav>

                <motion.a
                  href="#contact"
                  className="mt-6 block text-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-mono text-sm transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  contact.sh
                </motion.a>

                <motion.div
                  className="mt-8 text-center text-xs text-gray-500 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  © anisha.dev
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
