import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️',
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022',
      icon: '🌐',
    },
    {
      name: 'Meta Front-End Developer',
      issuer: 'Meta',
      year: '2022',
      icon: '⚛️',
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2021',
      icon: '🍃',
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker',
      year: '2021',
      icon: '🐳',
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2023',
      icon: '☸️',
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#0f172a] dark:to-[#1e293b] relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ x }}
        className="absolute bottom-20 right-0 w-96 h-96 bg-blue-300 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20"
      />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold pb-2"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white dark:bg-[#0f172a]/50 p-6 rounded-2xl shadow-lg text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mb-4"
              >
                <Award className="text-white" size={32} />
              </motion.div>
              <div className="text-4xl mb-3">{cert.icon}</div>
              <h3 className="text-lg mb-2 text-gray-800 dark:text-gray-100">
                {cert.name}
              </h3>
              <p className="text-blue-600 dark:text-cyan-400 mb-1">{cert.issuer}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;