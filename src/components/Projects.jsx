import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Snake game using Python",
      description:
        "This project is a simple snake game developed using Python. It involves controlling a snake to eat food and grow while avoiding obstacles.",
      technologies: ["Python"],
      image: "🐍",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Basic Calculator using Java AWT and Swing",
      description:
        "This project is a basic calculator application developed using Java AWT and Swing. It provides simple arithmetic operations in a user-friendly interface.",
      technologies: ["Java", "AWT", "Swing"],
      image: "🧮",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Java Todo List with AWT and Swing",
      description:
        "This project is JavaTodo: featuring a simple user interface, it's a straightforward task organizer. Utilizing AWT and Swing libraries, it offers an easy-to-use platform for efficient task management.",
      technologies: ["Java", "AWT", "Swing"],
      image: "📝",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Library Management System with Python",
      description:
        "Efficiently manage library resources with our Python-based Library Management System. Track books, issue, return, and update details effortlessly. Powered by Tkinter for user-friendly interface.",
      technologies: ["Python", "Tkinter"],
      image: "📚",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="text-slate-500">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of my recent works and technical experiments
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col"
            >
              {/* Image / Icon Placeholder */}
              <div className="h-48 bg-slate-50 flex items-center justify-center text-5xl group-hover:bg-slate-100 transition-colors">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <FaExternalLinkAlt size={14} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex group"
          >
            View More on GitHub
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
