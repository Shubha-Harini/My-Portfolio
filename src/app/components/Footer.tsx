import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import portfolioConfig from '../../config/portfolio-config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-[#0f172a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {portfolioConfig.name}
            </h3>
            <p className="text-gray-400">
              Web developer with experience in frontend development, AI-assisted website creation, and live project deployment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:harinishanmugam76@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-cyan-500" fill="currentColor" /> by {portfolioConfig.name} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
