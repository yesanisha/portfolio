'use client';
import { motion } from 'framer-motion';
import { MapPin, Camera, Plane } from 'lucide-react';

export default function Travel() {
  const destinations = [
    { city: 'Jaipur', country: 'India', emoji: '🏰', memory: 'Pink city vibes and royal palaces' },
    { city: 'Goa', country: 'India', emoji: '🏖️', memory: 'Beach sunsets and Portuguese architecture' },
    { city: 'Delhi', country: 'India', emoji: '🕌', memory: 'Historical monuments and street food' },
    { city: 'Mumbai', country: 'India', emoji: '🌆', memory: 'City that never sleeps' },
    { city: 'Udaipur', country: 'India', emoji: '🏛️', memory: 'City of lakes and romance' },
    { city: 'Manali', country: 'India', emoji: '🏔️', memory: 'Mountain adventures and snowfall' },
    { city: 'Rishikesh', country: 'India', emoji: '🧘', memory: 'Yoga capital and river rafting' },
    { city: 'Varanasi', country: 'India', emoji: '🕉️', memory: 'Spiritual awakening by the Ganges' },
    { city: 'Kerala', country: 'India', emoji: '🚣', memory: 'Backwaters and lush greenery' },
    { city: 'Mysore', country: 'India', emoji: '👑', memory: 'Royal heritage and silk sarees' },
    { city: 'Pondicherry', country: 'India', emoji: '🇫🇷', memory: 'French colonial charm' },
    { city: 'Hampi', country: 'India', emoji: '🗿', memory: 'Ancient ruins and boulder landscapes' },
  ];

  const travelStats = [
    { icon: '🌍', number: '15+', label: 'Cities Visited' },
    { icon: '📸', number: '1000+', label: 'Photos Taken' },
    { icon: '✈️', number: '50+', label: 'Flights Boarded' },
    { icon: '🍓', number: '∞', label: 'Strawberries Tasted' },
  ];

  return (
    <section id="travel" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            Travel <span className="text-gradient">Adventures</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Collecting memories, one destination at a time 🗺️
          </p>

          {/* Travel Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {travelStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center border border-strawberry-100 hover:border-strawberry-300 transition-all"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-strawberry-500 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Destinations Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-strawberry-100 mb-12"
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="text-strawberry-500" />
              Places I've Explored
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {destinations.map((destination, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-gradient-to-br from-strawberry-50 to-pink-50 p-4 rounded-xl text-center cursor-pointer hover:shadow-lg transition-all group"
                  title={destination.memory}
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{destination.emoji}</div>
                  <div className="font-bold text-gray-800">{destination.city}</div>
                  <div className="text-xs text-gray-600">{destination.country}</div>
                  <div className="text-xs text-strawberry-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {destination.memory}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Travel Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-strawberry-400 to-pink-500 p-8 rounded-2xl shadow-lg text-white text-center"
          >
            <Plane className="w-12 h-12 mx-auto mb-4 animate-bounce-slow" />
            <h3 className="text-2xl font-bold mb-4">Why I Travel</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              "Just like in coding where every project teaches you something new, every journey opens your mind to different
              perspectives. Traveling has taught me adaptability, problem-solving, and the beauty of diverse cultures -
              skills that make me a better developer and human being."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <Camera className="w-5 h-5" />
              <span className="text-sm italic">- Anisha, the wanderer coder 🍓</span>
            </div>
          </motion.div>

          {/* Hidden Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500 italic cursor-pointer hover:text-strawberry-500 transition-colors" title="🍓 Secret: My dream destination is Japan for its tech culture and cherry blossoms!">
              💡 Hover over each city to see my favorite memory!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
