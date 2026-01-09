import { HiArrowRight, HiDownload } from "react-icons/hi";
import ThreeBackground from "./ThreeBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20"
    >
      <ThreeBackground />
      <div className="section-container relative z-10 text-center">
        <div>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50/10 border border-slate-200/20 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            <span className="text-xs font-medium text-slate-200 tracking-wide uppercase">
              Available for work
            </span>
          </div>

          {/* Main Heading */}
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 text-slate-100 leading-[1.1] tracking-tight">
            Hello, I'm <br className="hidden md:block" />
            <span className="text-indigo-400">Sakthivel</span>
          </h1>

          {/* Subtitle */}
          {/* Subtitle */}
          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            Passionate{" "}
            <span className="font-semibold text-white">Software Engineer</span>{" "}
            focused on building modern, scalable web applications using React,
            Next.js, and AI-powered development tools. <br />
            {/* <span className="text-indigo-200">Web Development</span> and{" "} */}
            {/* <span className="text-indigo-200">Java</span>. */}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="btn-primary">
              View Projects <HiArrowRight className="text-lg" />
            </a>
            <a
              href="https://drive.google.com/file/d/15r93GRymamJ8EJxIt9T_2rukOfv0a6R4/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume <HiArrowRight className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
