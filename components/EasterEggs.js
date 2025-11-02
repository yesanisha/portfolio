'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEggs() {
  const [showSecret, setShowSecret] = useState(false);
  const [secretMessage, setSecretMessage] = useState('');
  const [konamiProgress, setKonamiProgress] = useState([]);

  // Konami code: up, up, down, down, left, right, left, right, b, a
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Strawberry shortcut: Ctrl+Shift+S
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        setSecretMessage('🍓 Secret unlocked! Fun fact: Strawberries have seeds on the outside!');
        setShowSecret(true);
        setTimeout(() => setShowSecret(false), 4000);
      }

      // Konami code tracking
      setKonamiProgress(prev => {
        const newProgress = [...prev, e.key];
        if (newProgress.length > konamiCode.length) {
          newProgress.shift();
        }

        // Check if konami code is complete
        if (JSON.stringify(newProgress) === JSON.stringify(konamiCode)) {
          setSecretMessage('🎮 KONAMI CODE ACTIVATED! You are a true explorer! Here\'s a secret: Anisha\'s first program was a calculator in C!');
          setShowSecret(true);
          setTimeout(() => setShowSecret(false), 5000);
          return [];
        }

        return newProgress;
      });
    };

    // Double click anywhere to spawn a strawberry
    const handleDoubleClick = (e) => {
      const strawberry = document.createElement('div');
      strawberry.textContent = '🍓';
      strawberry.style.position = 'fixed';
      strawberry.style.left = e.clientX + 'px';
      strawberry.style.top = e.clientY + 'px';
      strawberry.style.fontSize = '2rem';
      strawberry.style.pointerEvents = 'none';
      strawberry.style.zIndex = '9999';
      strawberry.style.animation = 'float-up 2s ease-out forwards';

      document.body.appendChild(strawberry);

      setTimeout(() => {
        strawberry.remove();
      }, 2000);
    };

    // Right click easter egg
    const handleContextMenu = (e) => {
      if (e.target.closest('.easter-egg-zone')) {
        e.preventDefault();
        setSecretMessage('🎨 Right-click treasure found! Pro tip: Check the browser console for more secrets!');
        setShowSecret(true);
        setTimeout(() => setShowSecret(false), 4000);
        console.log('%c🍓 STRAWBERRY SECRET 🍓', 'color: #f43f72; font-size: 20px; font-weight: bold;');
        console.log('%cHey there, fellow code explorer! 👋', 'color: #fb7193; font-size: 16px;');
        console.log('%cSince you found this, here are some fun facts:', 'color: #fda4b4; font-size: 14px;');
        console.log('1. This portfolio has 10+ hidden easter eggs!');
        console.log('2. Anisha has traveled to 15+ cities in the last year');
        console.log('3. Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A');
        console.log('4. Double-click anywhere to spawn strawberries!');
        console.log('%cHappy exploring! 🚀', 'color: #f43f72; font-size: 16px;');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('dblclick', handleDoubleClick);
    window.addEventListener('contextmenu', handleContextMenu);

    // Add float animation style
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-up {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(-200px) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('contextmenu', handleContextMenu);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-none"
          >
            <div className="bg-gradient-to-r from-strawberry-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-2xl border-4 border-white max-w-md text-center">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="font-bold"
              >
                {secretMessage}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden clickable zones */}
      <div className="easter-egg-zone fixed bottom-4 right-4 w-16 h-16 cursor-pointer opacity-0 hover:opacity-100 transition-opacity z-50" title="Right-click me for a secret!">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="text-4xl"
        >
          🍓
        </motion.div>
      </div>
    </>
  );
}
