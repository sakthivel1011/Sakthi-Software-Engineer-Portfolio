import { HiCode, HiServer, HiChip } from "react-icons/hi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <HiCode className="w-6 h-6" />,
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Next.js",
      ],
      iconBg: "bg-slate-50",
      iconColor: "text-slate-600",
    },
    {
      title: "Backend",
      icon: <HiServer className="w-6 h-6" />,
      skills: [
        "Node.js",
        "Express",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
      ],
      iconBg: "bg-slate-50",
      iconColor: "text-slate-600",
    },
    {
      title: "Tools & Others",
      icon: <HiChip className="w-6 h-6" />,
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Agile/Scrum"],
      iconBg: "bg-slate-50",
      iconColor: "text-slate-600",
    },
  ];

  return (
    <section id="skills" className="section-container bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Skills & <span className="text-slate-500">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with to build modern web solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`mb-6 ${category.iconColor} p-3.5 ${category.iconBg} border border-slate-100 rounded-xl w-fit`}
              >
                {category.icon}
              </div>

              {/* Category Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-6 font-display">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-slate-500 text-sm font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Always learning and exploring new technologies to stay ahead in the
            ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
