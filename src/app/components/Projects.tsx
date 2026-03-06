import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import portfolioConfig from '../../config/portfolio-config';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  fork: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const defaultImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Original projects that are not on GitHub
  const staticProjects: Project[] = [
    {
      title: 'MEDVAULT',
      description: 'Medical Record Management System for secure storage and management of medical records.',
      image: 'images/medvault_project.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: portfolioConfig.projects.urls['MEDVAULT'] || '#',
      githubUrl: portfolioConfig.projects.urls['MEDVAULT'] || '#',
    },
    {
      title: 'GREENWORLD',
      description: 'Real-estate website for property listings and client engagement.',
      image: 'images/greenworld_project.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: portfolioConfig.projects.urls['GREENWORLD'] || '#',
      githubUrl: portfolioConfig.projects.urls['GREENWORLD'] || '#',
    },
    {
      title: 'OFFICE TRACKER',
      description: 'Tracker application for office employees to track their attendance and leave requests.',
      image: 'images/tracker_project.png',
      tech: ['React', 'MongoDB', 'Tailwind CSS', 'OnRender'],
      liveUrl: portfolioConfig.projects.urls['PORTFOLIO'] || '#',
      githubUrl: portfolioConfig.projects.urls['PORTFOLIO'] || '#',
    },
  ];

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const githubUsername = 'Shubha-Harini';
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=30`);
        if (!response.ok) throw new Error('Failed to fetch github repos');

        const repos: GithubRepo[] = await response.json();

        // Filter out forks and backend projects
        const filteredRepos = repos.filter(repo => {
          if (repo.fork) return false;

          const nameLower = repo.name.toLowerCase();
          const descLower = (repo.description || '').toLowerCase();
          const topics = repo.topics ? repo.topics.map(t => t.toLowerCase()) : [];

          const isBackend = nameLower.includes('backend') ||
            nameLower.includes('server') ||
            descLower.includes('backend server') ||
            topics.includes('backend') ||
            topics.includes('server');

          return !isBackend;
        });

        // Map GitHub repos to project format
        const repoImages: Record<string, string> = {
          'Job-Notification-App': 'images/Job-Notification-App.png',
          'Placement-Readiness-Platform': 'images/Placement-Readiness-Platform.png',
          'Reg-Login-frontend': 'images/Reg-Login-frontend.png',
          'KodFlix-Reg-Login-frontend': 'images/KodFlix-Reg-Login.png',
          'KodFlix-LandingPage': 'images/KodFlix-LandingPage.png',
          'Greet-App': 'images/Greet-App.png',
          'lms-platform-frontend': 'images/lms-platform-frontend.png',
          'My-Portfolio': 'images/my-portfolio.png',
        };

        const fetchedProjects = filteredRepos.map((repo, index) => {
          const title = repo.name.replace(/-/g, ' ').toUpperCase();

          const tech = [...(repo.topics || [])];
          if (repo.language && !tech.includes(repo.language.toLowerCase())) {
            tech.push(repo.language);
          }

          // Use a professional tech stock photo based on index, or specific local image
          const stockImage = repoImages[repo.name] || defaultImages[index % defaultImages.length];

          return {
            title: title,
            description: repo.description || 'Check out my code on GitHub for more details on this project.',
            image: stockImage,
            tech: tech.length > 0 ? tech : ['Code'],
            liveUrl: portfolioConfig.projects.urls[repo.name] || repo.homepage || repo.html_url,
            githubUrl: repo.html_url,
          };
        });

        const staticTitles = staticProjects.map(p => p.title.toLowerCase());
        const uniqueFetchedProjects = fetchedProjects.filter(p => !staticTitles.includes(p.title.toLowerCase()));

        // Ensure My-Portfolio redirects to home if that's the desired behavior
        const finalProjects = [...staticProjects, ...uniqueFetchedProjects].map(p => {
          if (p.title === 'MY PORTFOLIO') {
            return { ...p, liveUrl: '#hero', image: 'images/my-portfolio.png' };
          }
          return p;
        });

        setProjects(finalProjects);
      } catch (error) {
        console.error('Error fetching github projects:', error);
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-[#0f172a] relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ x }}
        className="absolute top-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20"
      />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold pb-2"
        >
          Projects
        </motion.h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-[#1e293b] dark:to-[#0f172a] rounded-2xl overflow-hidden shadow-lg group flex flex-col border border-blue-100 dark:border-blue-900/40"
              >
                <div className="relative overflow-hidden shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full text-blue-600 hover:text-cyan-500 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full text-blue-600 hover:text-cyan-500 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl mb-3 font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;