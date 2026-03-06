import React, { useState, useEffect } from 'react';
import { Home, User, BookOpen, GraduationCap, Briefcase, FolderGit2, Languages, Mail, X as XIcon, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'motion/react';
import portfolioConfig from '../../config/portfolio-config';

// GitHub Icon
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { id: 'hero', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { id: 'about', label: 'About Me', icon: <User className="w-5 h-5" /> },
  { id: 'skills', label: 'Skills', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-5 h-5" /> },
  { id: 'languages', label: 'Languages', icon: <Languages className="w-5 h-5" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark, toggleTheme } = useTheme();

  // Scroll tracking to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 bg-gray-800 dark:bg-[#1a1a2e] text-white p-3 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-[#252540] transition-colors"
      >
        {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] bg-gray-50 dark:bg-[#0a0a1a] text-gray-800 dark:text-white border-r border-gray-200 dark:border-gray-800 z-40 transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        <div className="flex flex-col h-full py-6 px-4">
          {/* Profile Section - Compact */}
          <div className="flex flex-col items-center mb-6">
            {/* Profile Picture */}
            <motion.div
              className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-900 mb-3 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={portfolioConfig.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Name */}
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{portfolioConfig.name}</h2>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all text-sm"
            >
              {!isDark ? (
                <>
                  <Moon className="w-4 h-4" />
                  <span className="font-medium">Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4" />
                  <span className="font-medium">Light Mode</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Navigation Menu - No scrolling, fits within viewport */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all group ${activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-[#1a1a2e]'
                      }`}
                  >
                    <span
                      className={`transition-colors ${activeSection === item.id
                          ? 'text-white'
                          : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                        }`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}