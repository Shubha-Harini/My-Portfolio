import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300">
        <CursorFollower />
        <Sidebar />
        <div className="lg:ml-[280px]">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Languages />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}