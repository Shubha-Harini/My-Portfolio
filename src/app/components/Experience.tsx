import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      title: 'Web Developer',
      company: 'BRANDESIGNINGSTARS DIGITAL PVT LTD',
      period: 'July 2025 - February 2026',
      description: 'Contributed to full-stack project deliveries, leading key development of React, Node.js, and MongoDB features using AI tools for fast, fully functional website creation. Integrated Node.js and Express APIs with MongoDB for smooth data handling. Established hosting for each website and completed go-live by uploading sites to host accounts. Provided technical support in resolving customer issues related to web development projects.',
      image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc1Mzg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Web Developer Intern',
      company: 'BRANDESIGNINGSTARS DIGITAL PVT LTD',
      period: 'March 2025 - June 2025',
      description: 'Developed web applications using HTML, CSS, and JavaScript. Assisted in developing and maintaining user-friendly websites. Researched new technologies to improve existing web solutions. Handled client meetings, gathered requirements, and provided complete guidance throughout project completion.',
      image: 'https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3Njc1ODMyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#0f172a] dark:to-[#1e293b] relative overflow-hidden">
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
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="order-2 md:order-1"
                  >
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-white dark:bg-[#0f172a]/50 p-8 rounded-2xl shadow-lg order-1 md:order-2"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full"
                      >
                        <Briefcase className="text-white" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl text-gray-800 dark:text-gray-100">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-cyan-400">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    whileHover={{ x: -10 }}
                    className="bg-white dark:bg-[#0f172a]/50 p-8 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full"
                      >
                        <Briefcase className="text-white" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl text-gray-800 dark:text-gray-100">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-cyan-400">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                    />
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;