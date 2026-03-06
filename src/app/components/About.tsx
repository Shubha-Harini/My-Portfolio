import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-[#0f172a] relative overflow-x-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ x }}
        className="absolute top-20 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute bottom-20 right-0 w-64 h-64 bg-cyan-200 dark:bg-cyan-900/30 rounded-full blur-3xl opacity-20"
      />

      <motion.div style={{ opacity }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold pb-2"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a web developer with practical experience in frontend development, AI-assisted website creation, basic database integration, and live project deployment. I'm seeking an opportunity in a growth-oriented organization to strengthen my technical skills and contribute to efficient and impactful digital solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I work with React, Node.js, Express.js, and MongoDB to build full-stack applications, and I've deployed projects on Vercel, Onrender, and Git. I also handle client meetings, requirement gathering, and technical support to ensure smooth project delivery.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I hold a Bachelor of Computer Applications from Presidency College, Bangalore, with a CGPA of 9.20, and I'm based in Bangalore, India.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;