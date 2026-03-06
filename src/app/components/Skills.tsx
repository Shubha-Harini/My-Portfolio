import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills = [
    { name: 'VibeCoding & AI-Assisted Development', level: 95, color: 'from-indigo-600 to-indigo-400' },
    { name: 'React & Frontend Technologies', level: 90, color: 'from-blue-600 to-cyan-500' },
    { name: 'Node.js & Express.js', level: 85, color: 'from-emerald-600 to-emerald-400' },
    { name: 'MongoDB', level: 82, color: 'from-green-600 to-green-500' },
    { name: 'Tailwind CSS & UI Design', level: 88, color: 'from-sky-600 to-sky-400' },
    { name: 'Deployment (Vercel, Render) & Git', level: 85, color: 'from-slate-700 to-slate-500' },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#0f172a] dark:to-[#1e293b] relative overflow-x-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ x }}
        className="absolute top-20 right-0 w-72 h-72 bg-blue-300 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20"
      />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold pb-2"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-[#0f172a]/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                <span className="text-blue-600 dark:text-cyan-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;