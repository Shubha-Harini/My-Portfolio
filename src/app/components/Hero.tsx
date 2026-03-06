import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Download, Code, Sparkles, Rocket } from 'lucide-react';
import portfolioConfig from '../../config/portfolio-config';

const Hero = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const fullText = portfolioConfig.title;

  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    if (portfolioConfig.resumeUrl === '#') {
      alert('Resume download would start here. Please update the resumeUrl in /src/config/portfolio-config.ts with your actual resume link.');
    } else {
      const link = document.createElement('a');
      link.href = portfolioConfig.resumeUrl;
      link.download = 'resume.pdf';
      link.click();
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] py-16 md:py-24">
      {/* Animated background orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-20"
        animate={{
          x: mousePosition.x / 20,
          y: mousePosition.y / 20,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-cyan-300 dark:bg-cyan-900 rounded-full blur-3xl opacity-20"
        animate={{
          x: -mousePosition.x / 20,
          y: -mousePosition.y / 20,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
        style={{ bottom: '10%', right: '10%' }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 dark:bg-cyan-400 rounded-full opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -100, null],
            x: [null, Math.random() * 50 - 25, null],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 justify-center md:justify-start mb-3"
            >
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              <h2 className="text-lg md:text-xl text-blue-600 dark:text-cyan-400">
                {portfolioConfig.greeting}
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient font-bold tracking-tight"
            >
              {portfolioConfig.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-4"
            >
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-3 min-h-[1.75rem]">
                {text}
                <span className="inline-block w-0.5 h-5 bg-blue-600 dark:bg-cyan-400 ml-1 animate-blink align-middle"></span>
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Web developer with practical experience in frontend development, AI-assisted website creation, basic database integration, and live project deployment. Seeking to strengthen technical skills and contribute to efficient, impactful digital solutions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-3 mb-6"
            >
              <div className="text-center p-2.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-blue-200 dark:border-blue-900">
                <div className="text-xl font-bold text-blue-600 dark:text-cyan-400">1</div>
                <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-2.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-blue-200 dark:border-blue-900">
                <div className="text-xl font-bold text-blue-600 dark:text-cyan-400">9+</div>
                <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-2.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-blue-200 dark:border-blue-900">
                <div className="text-xl font-bold text-blue-600 dark:text-cyan-400">9.20</div>
                <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">BCA CGPA</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3 justify-center md:justify-start mb-6"
            >
              <motion.a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 dark:bg-blue-900 text-white rounded-full hover:bg-blue-600 dark:hover:bg-cyan-600 transition-colors shadow-lg"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-blue-600 dark:bg-blue-900 text-white rounded-full hover:bg-blue-600 dark:hover:bg-cyan-600 transition-colors shadow-lg"
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-3 justify-center md:justify-start flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="px-6 py-3 text-sm md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white rounded-full flex items-center gap-2 hover:shadow-2xl transition-all"
              >
                <Download size={18} />
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 text-sm md:text-base bg-white dark:bg-[#1a1a2e] text-blue-600 dark:text-cyan-400 rounded-full flex items-center gap-2 border-2 border-blue-600 dark:border-cyan-400 hover:shadow-2xl transition-all"
              >
                <Rocket size={18} />
                Let's Talk
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-blue-300 dark:border-blue-700 shadow-2xl"
              >
                <img
                  src="/images/hero.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Decorative code symbols */}
              <motion.div
                className="absolute -top-6 -right-6 bg-blue-500 dark:bg-cyan-500 text-white p-3 rounded-xl shadow-xl"
                animate={{
                  rotate: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Code size={24} />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-cyan-500 dark:bg-blue-500 text-white p-3 rounded-xl shadow-xl"
                animate={{
                  rotate: [0, -10, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                <Sparkles size={24} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-blue-600 dark:border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-1.5 bg-blue-600 dark:bg-cyan-400 rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;