'use client';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
// import Travel from '@/components/Travel';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EasterEggs from '@/components/EasterEggs';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Easter Eggs Handler */}
      <EasterEggs />

      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Travel /> */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
