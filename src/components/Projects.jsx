import { useRef, useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { HiEye, HiX } from "react-icons/hi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVite,
} from "react-icons/si";

// Tech icon mapping
const techIcons = {
  React: <SiReact className="w-4 h-4" />,
  "Node.js": <SiNodedotjs className="w-4 h-4" />,
  "Express.js": <SiNodedotjs className="w-4 h-4" />,
  MongoDB: <SiMongodb className="w-4 h-4" />,
  Python: <SiPython className="w-4 h-4" />,
  HTML5: <SiHtml5 className="w-4 h-4" />,
  CSS3: <SiCss3 className="w-4 h-4" />,
  JavaScript: <SiJavascript className="w-4 h-4" />,
  Vite: <SiVite className="w-4 h-4" />,
  Tkinter: <SiPython className="w-4 h-4" />,
};

const ProjectCard = ({
  i,
  title,
  description,
  technologies,
  image,
  githubLink,
  liveLink,
  onViewDetails,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full rounded-[1.5rem] p-6 sm:p-8 origin-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border border-slate-700/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all duration-700" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700" />

      {/* Eye Icon - Top Right of Card */}
      <div className="absolute top-6 right-6 z-40 group/tooltip">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails();
          }}
          className="p-2 bg-slate-900/80 border border-white/30 text-white rounded-full shadow-lg hover:bg-slate-800 hover:scale-110 transition-all active:scale-95 flex items-center justify-center backdrop-blur-sm"
          aria-label="View project details"
        >
          <HiEye size={18} />
        </button>

        <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-slate-900/95 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
          View Details
          <div className="absolute bottom-full right-3 border-3 border-transparent border-b-slate-900/95" />
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full h-[200px] sm:h-[220px] rounded-xl overflow-hidden relative border border-slate-600/50 shadow-lg group/img mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 overflow-hidden relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 font-display tracking-tight group-hover:text-indigo-200 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tech Stack with icons */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="group/tech px-2 py-1 bg-slate-800/80 border border-slate-600/50 hover:border-indigo-400/50 text-indigo-300 rounded-lg text-[9px] sm:text-[10px] font-medium tracking-wide inline-flex items-center gap-1.5 hover:bg-slate-700/80 transition-all duration-300"
            >
              {techIcons[tech] && (
                <span className="group-hover/tech:text-indigo-400 transition-colors">
                  {techIcons[tech]}
                </span>
              )}
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 text-indigo-400 text-[9px] sm:text-[10px] font-medium">
              +{technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-slate-700/50">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 flex-1 px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-indigo-400/50 text-white hover:text-indigo-300 rounded-lg transition-all duration-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide group/link hover:scale-105 justify-center"
          >
            <FaGithub
              size={14}
              className="group-hover/link:rotate-12 transition-transform duration-300"
            />
            Code
          </a>
          {liveLink && liveLink !== "#" && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 flex-1 px-3 py-2 bg-indigo-600/80 hover:bg-indigo-500/90 border border-indigo-400/50 text-white rounded-lg transition-all duration-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide group/link hover:scale-105 shadow-lg shadow-indigo-500/20 justify-center"
            >
              <FaExternalLinkAlt
                size={12}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
              />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const projects = [

    {
      title: "E-Commerce Platform",
      description:
        "E-Commerce Platform is a full-stack project designed for seamless online shopping experiences. Built with React for a dynamic frontend and Node.js with Express for the backend, the application leverages MongoDB for efficient data management. It supports product browsing, cart management, secure order handling, and scalable architecture for real-world commerce use cases.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "assets/projects/shopping-hub.png",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Snake game using Python",
      description:
        "A simple Snake game built with Python using Pygame for graphics and input handling, and the random module for dynamic food generation, where the player controls a growing snake while avoiding obstacles and collisions.",
      technologies: ["Python"],
      image: "assets/projects/snake-game.jpg",
      githubLink: "https://github.com/sakthivel1011/snakegame",
    },
    {
      title: "Library Management System",
      description:
        "Efficiently manage library resources with our Python-based Library Management System. Track books, issue, return, and update details effortlessly. Powered by Tkinter for user-friendly interface.",
      technologies: ["Python", "Tkinter"],
      image: "assets/projects/library-system.jpg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive and visually clean personal portfolio website built using HTML, CSS, and vanilla JavaScript. The site showcases projects, skills, and contact information with smooth animations, structured layouts, and optimized performance. Designed with a focus on simplicity, readability, and professional UI/UX standards.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "assets/projects/portfolio.jpg",
      liveLink: "https://sakthivel1011.github.io/PORTFOLIO/",
      githubLink: "https://github.com/sakthivel1011/PORTFOLIO",
    },
    {
      title: "AI Challenge Tracker",
      description:
        "AI Challenge Tracker is a smart productivity web app built with React and Vite to help users organize daily challenges, monitor progress, and stay consistent. It includes AI-assisted workflows for a more interactive experience and is deployed on Netlify for fast, reliable access.",
      technologies: ["React", "Vite", "AI", "Netlify"],
      image: "assets/projects/challenge tracker.png",
      modalImageClass: "object-contain p-4 bg-slate-50",
      liveLink: "https://challenge-tracker-pwa-react.netlify.app/",
      githubLink: "#",
    },

    
  ];

  return (
    <section id="projects" className="relative bg-white w-full py-12 sm:py-16 md:py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 font-display tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">Projects</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A curated selection of my technical works where architecture meets
              creativity.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={`p_${i}`}
                i={i}
                {...project}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="py-10 sm:py-12 text-center relative mt-6 sm:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 mb-6 text-xs sm:text-sm font-medium tracking-wide uppercase">
              Want to see more?
            </p>
            <a
              href="https://github.com/sakthivel1011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              Explore More on GitHub
              <FaGithub
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Premium Individual Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-12 lg:p-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md lg:backdrop-blur-xl cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="relative w-full max-w-5xl h-auto max-h-[92vh] sm:max-h-[85vh] bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row overflow-hidden border border-slate-200 will-change-transform"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left: Project Sidebar (Desktop Only) */}
              <div className="hidden lg:block w-[45%] h-auto overflow-hidden shrink-0 border-r border-slate-100 bg-slate-50">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={`w-full h-full object-center ${selectedProject.modalImageClass || "object-cover"
                    }`}
                />
              </div>

              {/* Right: Premium Content Panel (Adaptive) */}
              <div className="w-full lg:w-[55%] flex flex-col min-h-0 bg-white relative overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-20 bg-white/50 backdrop-blur-sm lg:bg-transparent"
                >
                  <HiX size={24} />
                </button>

                {/* Content Container */}
                <div className="flex flex-col min-h-0 max-h-full overflow-hidden">
                  <header className="px-6 sm:px-10 lg:px-12 pt-5 sm:pt-8 pb-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h4 className="text-[8px] sm:text-[9px] font-black text-violet-600 uppercase tracking-[0.3em] mb-1">
                        Project Component
                      </h4>
                      <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                        {selectedProject.title}
                      </h3>
                    </motion.div>
                  </header>

                  <div className="flex-1 min-h-0 overflow-y-auto px-6 sm:px-10 lg:px-12 py-2 overscroll-contain [scrollbar-width:thin] [scrollbar-color:theme(colors.slate.200)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                    <div className="space-y-6 sm:space-y-10 pb-8">
                      {/* Mobile Project Image (Visible only on Mobile) */}
                      <div className="lg:hidden w-full aspect-video rounded-2xl overflow-hidden border border-slate-100 shadow-sm mb-6">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className={`w-full h-full object-center ${selectedProject.modalImageClass || "object-cover"
                            }`}
                        />
                      </div>

                      <section>
                        <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                          Architecture Overview
                        </h5>
                        <p className="text-slate-600 text-[13px] sm:text-base leading-relaxed font-light lg:pr-6">
                          {selectedProject.description}
                        </p>
                      </section>

                      <section>
                        <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                          Core Technologies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100"
                            >
                              <div className="text-violet-500 scale-90">
                                {techIcons[tech] || <HiEye className="w-3.5 h-3.5" />}
                              </div>
                              <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">
                                {tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>

                  <footer className="px-5 sm:px-10 py-5 sm:py-6 bg-slate-50/50 border-t border-slate-100 mt-auto">
                    <div className="flex flex-col gap-4">
                      <h5 className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] text-center mb-0.5">
                        Project Links
                      </h5>
                      <div className="flex flex-col sm:flex-row justify-center gap-3">
                        {selectedProject.liveLink && selectedProject.liveLink !== "#" && (
                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto sm:min-w-[160px] inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-blue-600 text-white rounded-2xl text-[10px] sm:text-xs font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-xl shadow-blue-500/20 order-1 sm:order-2"
                          >
                            <FaExternalLinkAlt size={14} />
                            Live Experience
                          </a>
                        )}

                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto sm:min-w-[160px] inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] sm:text-xs font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/10 order-2 sm:order-1"
                        >
                          <FaGithub size={18} />
                          GitHub Source
                        </a>
                      </div>
                    </div>
                  </footer>
                </div>

                {/* Bottom Deco (Desktop Only) */}
                <div className="hidden lg:block h-1.5 w-full bg-gradient-to-r from-violet-500 via-indigo-600 to-violet-500 shrink-0" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
