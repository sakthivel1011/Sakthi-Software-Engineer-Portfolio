import { HiArrowRight, HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20 bg-white"
    >
      <div className="section-container relative z-10 text-center">
        <div>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-slate-600 tracking-wide uppercase">
              Available for work
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 text-slate-900 leading-[1.1] tracking-tight">
            Building digital <br className="hidden md:block" />
            <span className="text-slate-500">experiences</span> that matter.
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            I'm <span className="font-semibold text-slate-700">Sakthi</span>, a
            Full Stack Developer crafting clean, high-performance, and
            user-centric web applications with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="btn-primary">
              View Projects <HiArrowRight className="text-lg" />
            </a>
            <a href="#contact" className="btn-secondary">
              Download CV <HiDownload className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
