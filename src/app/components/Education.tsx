import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      school: 'Presidency College',
      year: 'August 2022 - May 2025',
      description: 'Bangalore, India. CGPA: 9.20',
    },
    {
      degree: '12th / PUC / Intermediate / Diploma',
      school: 'Presidency PU College, Bengaluru',
      year: '2022',
      description: 'Marks in %: 88.7',
    },
    {
      degree: '10th Grade',
      school: 'MTB Jnana Jyothi Vidyanikethan Bangalore',
      year: '2020',
      description: 'Marks in %: 80.2',
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-white dark:bg-[#0f172a] relative overflow-x-hidden">
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
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#0f172a] dark:to-[#1e293b] p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full"
                >
                  <GraduationCap className="text-white" size={32} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl text-gray-800 dark:text-gray-100 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-cyan-400 mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{edu.year}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;