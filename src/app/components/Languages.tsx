import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Globe } from 'lucide-react';

const Languages = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const languages = [
    { name: 'English', level: 'Fluent', percentage: 95 },
    { name: 'Kannada', level: 'Native/Bilingual', percentage: 100 },
    { name: 'Tamil', level: 'Native/Bilingual', percentage: 100 },
    { name: 'Hindi', level: 'Intermediate', percentage: 70 },
  ];

  return (
    <section id="languages" ref={ref} className="py-20 bg-white dark:bg-[#0f172a] relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ x }}
        className="absolute top-20 left-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/30 rounded-full blur-3xl opacity-20"
      />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold pb-2"
        >
          Languages
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#0f172a] dark:to-[#1e293b] p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full"
                >
                  <Globe className="text-white" size={24} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl text-gray-800 dark:text-gray-100">
                    {lang.name}
                  </h3>
                  <p className="text-blue-600 dark:text-cyan-400">{lang.level}</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Languages;