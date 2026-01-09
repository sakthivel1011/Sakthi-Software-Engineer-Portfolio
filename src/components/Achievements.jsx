import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

const Achievements = () => {
  const achievements = [
    {
      title: "Internship - Android dev with IoT",
      organization: "National Small Industries Corporation (NSIC)",
      description:
        "Successfully completed virtual internship training on Android application development with IoT conducted by the National Small Industries Corporation Limited (NSIC), a Government of India enterprise, showcasing proficiency in simple applications.",
      type: "Internship",
    },
    {
      title: "Internship - Web Development",
      organization: "Brazy Technologies",
      description:
        "Completed a one-week internship at Brazy Technologies, gaining practical experience in web development technologies and methodologies, including HTML, CSS, and JavaScript.",
      type: "Internship",
    },
    {
      title: "Runner-up in Technical Quiz",
      organization: "JP College of Engineering",
      description:
        "I attained the runner-up position in a technical quiz, showcasing my proficiency in various technical subjects. This achievement reflects my commitment to academic excellence and problem-solving skills.",
      type: "Award",
    },
  ];

  const certifications = [
    "Machine Learning courses by Infosys Springboard",
    "IBM Cloud courses by IBM",
    "Python for data science course by Infosys Springboard",
    "Introduction to Artificial intelligence by Infosys Springboard",
    "Introduction to Cyber security by Infosys Springboard",
  ];

  return (
    <section id="achievements" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="text-slate-500">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognition of my technical skills and professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Internships & Awards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
              <HiBadgeCheck className="text-indigo-500" />
              Key Highlights
            </h3>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                    {item.type}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium mb-3">
                    {item.organization}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display flex items-center gap-3">
              <HiAcademicCap className="text-indigo-500" />
              Certifications
            </h3>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 min-w-[20px]">
                      <HiBadgeCheck className="text-green-500 w-5 h-5" />
                    </div>
                    <span className="text-slate-600 font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
