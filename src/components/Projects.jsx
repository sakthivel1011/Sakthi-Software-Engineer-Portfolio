import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
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
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-[70vh] md:min-h-screen flex items-start justify-center sticky top-0 px-4 py-12 md:pt-32 lg:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5vh + ${i * 15}px)`,
        }}
        className="group relative h-auto md:h-[500px] w-full max-w-5xl rounded-[2rem] p-6 sm:p-8 md:p-10 origin-top bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border border-slate-700/50 shadow-2xl flex flex-col md:flex-row gap-8 overflow-hidden"
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700" />

        <div
          className={`flex flex-col md:flex-row w-full h-full items-center gap-6 md:gap-16 relative z-10 ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Container */}
          <div className="w-full md:w-[45%] h-[200px] sm:h-[250px] md:h-full rounded-2xl overflow-hidden relative border border-slate-600/50 shadow-xl group/img shrink-0">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-left-top transition-all duration-700 group-hover/img:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-500" />
          </div>

          {/* Content Container */}
          <div className="w-full md:w-[55%] flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-display tracking-tight group-hover:text-indigo-100 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 line-clamp-4 sm:line-clamp-none">
              {description}
            </p>

            {/* Tech Stack with icons */}
            <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="group/tech px-2 py-1.5 sm:px-3 sm:py-2 bg-slate-800/80 border border-slate-600/50 hover:border-indigo-400/50 text-indigo-300 rounded-xl text-[10px] sm:text-xs font-medium tracking-wide inline-flex items-center gap-2 hover:bg-slate-700/80 transition-all duration-300 hover:scale-105"
                >
                  {techIcons[tech] && (
                    <span className="group-hover/tech:text-indigo-400 transition-colors">
                      {techIcons[tech]}
                    </span>
                  )}
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-indigo-400/50 text-white hover:text-indigo-300 rounded-xl transition-all duration-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest group/link hover:scale-105 grow sm:grow-0 justify-center"
              >
                <FaGithub
                  size={18}
                  className="group-hover/link:rotate-12 transition-transform duration-300"
                />
                Source Code
              </a>
              {liveLink && liveLink !== "#" && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-indigo-600/80 hover:bg-indigo-500/90 border border-indigo-400/50 text-white rounded-xl transition-all duration-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest group/link hover:scale-105 shadow-lg shadow-indigo-500/20 grow sm:grow-0 justify-center"
                >
                  <FaExternalLinkAlt
                    size={16}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                  />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "E-Commerce Platform is a full-stack project designed for seamless online shopping experiences. Built with React for a dynamic frontend and Node.js with Express for the backend, the application leverages MongoDB for efficient data management. It supports product browsing, cart management, secure order handling, and scalable architecture for real-world commerce use cases.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/assets/projects/shopping-hub.png",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Snake game using Python",
      description:
        "A simple Snake game built with Python using Pygame for graphics and input handling, and the random module for dynamic food generation, where the player controls a growing snake while avoiding obstacles and collisions.",
      technologies: ["Python"],
      image: "/assets/projects/snake-game.jpg",
      githubLink: "https://github.com/sakthivel1011/snakegame",
    },
    {
      title: "Library Management System",
      description:
        "Efficiently manage library resources with our Python-based Library Management System. Track books, issue, return, and update details effortlessly. Powered by Tkinter for user-friendly interface.",
      technologies: ["Python", "Tkinter"],
      image: "/assets/projects/library-system.jpg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive and visually clean personal portfolio website built using HTML, CSS, and vanilla JavaScript. The site showcases projects, skills, and contact information with smooth animations, structured layouts, and optimized performance. Designed with a focus on simplicity, readability, and professional UI/UX standards.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/assets/projects/portfolio.jpg",
      liveLink: "https://sakthivel1011.github.io/PORTFOLIO/",
      githubLink: "https://github.com/sakthivel1011/PORTFOLIO",
    },
  ];

  return (
    <section id="projects" ref={container} className="relative bg-white w-full">
      {/* Header Section */}
      <div className="section-container text-center pb-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="section-subtitle mb-0">
            A curated selection of my technical works where architecture meets
            creativity.
          </p>
        </motion.div>
      </div>

      {/* Projects Stack */}
      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="py-16 text-center relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <p className="text-slate-600 mb-6 text-sm font-medium tracking-wide uppercase">
            Want to see more?
          </p>
          <a
            href="https://github.com/sakthivel1011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20"
          >
            Explore More on GitHub
            <FaGithub
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
