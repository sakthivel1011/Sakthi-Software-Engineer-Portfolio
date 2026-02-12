import { HiArrowRight, HiDownload } from "react-icons/hi";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

const VanishText = () => {
  const roles = [
    "Sakthivel",
    "Software Engineer",
    "Frontend Expert",
    "UI/UX Engineer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // reduced slightly

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block relative h-[1.2em] align-bottom min-w-[300px] md:min-w-[550px]">
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -15,
            scale: 0.95,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="absolute left-1/2 -translate-x-1/2 top-0 whitespace-nowrap bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold will-change-[transform,opacity]"
          style={{
            filter: "drop-shadow(0 0 20px rgba(129, 140, 248, 0.4))",
          }}
        >
          {roles[index].split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: i * 0.03,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>

      {/* Animated glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10"
      />
    </div>
  );
};

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-slate-900"
    >
      {isDesktop && <ThreeBackground />}

      {/* Premium Gradient Fallback for Mobile */}
      {!isDesktop && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_70%)]" />
      )}

      <div className="section-container relative z-10 text-center px-4 h-full flex flex-col justify-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center flex-grow pt-20">
          {/* Status Badge - Synced Premium Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.05)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-emerald-400 tracking-[0.1em] uppercase">
              Available for work
            </span>
          </motion.div>

          {/* Main Heading with Vanish Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4 text-slate-100 leading-[1.1] tracking-tight">
            Hello, I'm <br className="hidden md:block" />
            <VanishText />
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed font-normal px-2">
            Passionate{" "}
            <span className="font-semibold text-white">Software Engineer</span>{" "}
            focused on building modern, scalable web applications using React,
            Next.js, and AI-powered development tools.
          </p>
        </div>

        {/* CTA Buttons - Positioned at bottom */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full pb-10 md:pb-20">
          <a
            href="#projects"
            className="btn-primary w-full sm:w-auto justify-center"
          >
            View Projects <HiArrowRight className="text-lg" />
          </a>
          <a
            href="https://drive.google.com/file/d/1zsVi8trp1MzeQkCQMyQu1sFsCScB-HBI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto justify-center"
          >
            View Resume <HiArrowRight className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
