import profileImg from "../assets/Profile Image.jpg";

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-slate-500">Me</span>
          </h2>
          <p className="section-subtitle">
            A brief introduction to my background and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="order-2 md:order-1">
            <div className="relative group">
              {/* Decorative background blob */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-indigo-50/50 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              <div className="relative aspect-square bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2">
                <img
                  src={profileImg}
                  alt="Sakthivel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
              Dedicated to building{" "}
              <span className="text-slate-500">innovative</span> solutions
            </h3>

            <p className="text-slate-500 leading-relaxed text-base font-normal">
              I am Sakthivel, a versatile software developer passionate about
              building scalable and dynamic web applications. I specialize in
              modern front-end technologies such as React and Next.js, with a
              strong focus on performance, clean architecture, and user-centric
              design.
            </p>

            <p className="text-slate-500 leading-relaxed text-base font-normal">
              I also leverage AI-powered tools such as Antigravity to build
              efficient, intelligent solutions and streamline development
              workflows. With a solid foundation in Java, SQL, and system
              design, combined with strong leadership, collaboration, and time
              management skills, I consistently deliver robust, maintainable,
              and high-quality applications across teams.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Location</span>
                </div>
                <p className="text-sm text-slate-500 pl-6">Chennai</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </div>
                <p className="text-sm text-slate-500 pl-6">
                  sakthivel.p1011@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="btn-primary inline-flex">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
