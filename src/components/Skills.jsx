import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPython,
  SiOpenai,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { HiCode } from "react-icons/hi";
import Tools from "./Tools";
import "./SkillsSection.css";

// Galaxy Particles Canvas Component
const GalaxyParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = 120;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          hue: Math.random() * 60 + 200, // Blue to purple range
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${p.hue}, 80%, 60%, 0.5)`;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(220, 70%, 60%, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

const Skills = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB", level: "Specialized" },
        { name: "React Native", icon: SiReact, color: "#61DAFB", level: "Specialized" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: "Specialized" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: "Specialized" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6", level: "Specialized" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Specialized" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Specialized" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "Basic" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff", level: "Basic" },
        { name: "REST APIs", icon: HiCode, color: "#60A5FA" },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      name: "Languages & Tools",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB", level: "Basic" },
        { name: "Git", icon: SiGit, color: "#F05032" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: window.innerWidth < 1024 ? 0 : 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition:
        window.innerWidth < 1024
          ? { duration: 0.3 }
          : { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <section
      id="skills"
      className="skills-section min-h-screen flex flex-col justify-center py-16 relative bg-[#050816]"
    >
      {isDesktop && <GalaxyParticles />}

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white leading-tight tracking-tight">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            A comprehensive toolkit of modern technologies designed to build
            scalable and performant applications.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">
                  {category.name}
                </h3>
                <div className="h-px flex-grow bg-gradient-to-r from-blue-500/30 to-transparent" />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
              >
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  const isSpecialized = skill.level === "Specialized";
                  return (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      className={`skill-card group relative overflow-visible ${isSpecialized
                        ? "!border-yellow-500/50 !shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:!shadow-[0_0_25px_rgba(234,179,8,0.2)] hover:!border-yellow-400/80"
                        : ""
                        }`}
                    >
                      {skill.level === "Basic" && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider border bg-slate-700/50 text-slate-400 border-slate-600/30">
                          {skill.level}
                        </div>
                      )}

                      <div className="skill-icon-container mt-4">
                        <IconComponent
                          className="w-8 h-8 transition-all duration-300"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-underline" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <Tools />
      </div>
    </section>
  );
};

export default Skills;
