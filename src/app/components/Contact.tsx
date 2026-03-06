import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(`Hi, my name is ${formData.name}.\n\nMessage: ${formData.message}`);
    // Using user's contact number 916360728835
    window.open(`https://wa.me/916360728835?text=${encodedMessage}`, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'harinishanmugam76@gmail.com',
      link: 'mailto:harinishanmugam76@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6360728835',
      link: 'tel:+916360728835',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangalore, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#0f172a] dark:to-[#1e293b] relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ x }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-300 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20"
      />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold pb-2"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-4 text-gray-800 dark:text-gray-100">
                Let's work together!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 bg-white dark:bg-[#0f172a]/50 p-4 rounded-xl shadow-lg group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full"
                >
                  <info.icon className="text-white" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{info.title}</p>
                  <p className="text-gray-800 dark:text-gray-200">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-[#0f172a]/50 p-8 rounded-2xl shadow-lg space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-300 dark:border-blue-900 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-cyan-400 text-gray-900 dark:text-gray-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-300 dark:border-blue-900 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-cyan-400 text-gray-900 dark:text-gray-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-300 dark:border-blue-900 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-cyan-400 text-gray-900 dark:text-gray-100 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;