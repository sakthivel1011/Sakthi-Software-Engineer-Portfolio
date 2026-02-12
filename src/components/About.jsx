import profileImg from "../assets/Profile Image.jpg";
import profileImg1 from "../assets/Profile Image1.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { HiCode, HiChip, HiLightningBolt, HiBadgeCheck } from "react-icons/hi";

const Card3D = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 100,
    damping: 30,
  });

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={`${className} perspective-1000`}
    >
      {children}
    </motion.div>
  );
};
const FoldingStats = ({ className }) => {
  const stats = [
    {
      label: "Experience",
      value: "1.5+ Years",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Projects",
      value: "10+ Built",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      label: "Technologies",
      value: "15+ Stack",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  // Triplicate for seamless loop (original, clone1, clone2)
  const items = [...stats, ...stats, ...stats];

  return (
    <div
      className={`flex shadow-2xl bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-white/50 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 ${className}`}
    >
      <div className="flex gap-4">
        {/* Column 1 - Up (starts at 0, moves up to -33.33%) */}
        <div className="flex flex-col gap-4 h-48 overflow-hidden mask-gradient-y">
          <motion.div
            animate={{ y: ["0%", "-33.33%"] }}
            transition={{
              duration: 8, // Faster, smoother scroll
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col gap-4"
          >
            {items.map((stat, i) => (
              <div
                key={`c1-${i}`}
                className="w-32 bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center shrink-0"
              >
                <span
                  className={`text-[10px] font-black uppercase tracking-wider mb-1 px-2 py-0.5 rounded-full ${stat.color}`}
                >
                  {stat.label}
                </span>
                <span className="text-lg font-bold font-display text-slate-800">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Column 2 - Down (starts at -33.33%, moves down to 0%) */}
        <div className="flex flex-col gap-4 h-48 overflow-hidden mask-gradient-y">
          <motion.div
            animate={{ y: ["-33.33%", "0%"] }}
            transition={{
              duration: 8, // Synced speed
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col gap-4"
          >
            {items.map((stat, i) => (
              <div
                key={`c2-${i}`}
                className="w-32 bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center shrink-0"
              >
                <span
                  className={`text-[10px] font-black uppercase tracking-wider mb-1 px-2 py-0.5 rounded-full ${stat.color}`}
                >
                  {stat.label}
                </span>
                <span className="text-lg font-bold font-display text-slate-800">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Overlay Gradient for Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none" />
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-slate-50 relative overflow-hidden py-20 px-4"
    >
      <div className="section-container w-full py-0">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 md:gap-16 items-center">
          {/* About Me Details (Left) */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto md:mx-0"
            >
              <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-6">
                I am a software engineer focused on crafting scalable,
                high-performance web applications using modern JavaScript
                ecosystems. I care deeply about clean architecture, refined
                UI/UX, and long-term maintainability.
              </p>
              <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-8">
                My work blends engineering discipline with visual elegance,
                ensuring every product is fast, intuitive, and built to scale.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <HiCode className="text-blue-700 text-xl" />
                  </div>
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-700">
                    React & React Native Specialist
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <HiChip className="text-blue-700 text-xl" />
                  </div>
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Scalable System Design
                  </p>
                </div>

                <div className="flex items-center gap-4 lg:hidden xl:flex">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <HiLightningBolt className="text-blue-700 text-xl" />
                  </div>
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Performance-First Mindset
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Collage Column (Right) */}
          <div
            className="relative flex justify-center md:justify-end items-center
             h-[320px] sm:h-[400px] md:h-auto order-1 md:order-2
             md:pr-12"
          >
            {/* Background Decorative Lines */}
            <svg
              className="absolute inset-0 -z-10 w-full h-full 
             text-blue-200/60 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 45 C20 35 40 55 60 45 S80 35 100 45"
                stroke="currentColor"
                strokeWidth="0.4"
              />
              <path
                d="M0 55 C20 45 40 65 60 55 S80 45 100 55"
                stroke="currentColor"
                strokeWidth="0.4"
              />
            </svg>

            <div className="relative w-full max-w-[300px] md:max-w-[380px] aspect-[4/5]">
              {/* Main Portrait (Image 1) */}
              <Card3D className="absolute top-0 right-0 w-[80%] h-[80%] z-20">
                <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src={profileImg1}
                    alt="Main Portrait"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-60"></div>
                </div>
              </Card3D>

              {/* Stats Component (Replaces Secondary Image) */}
              <FoldingStats className="absolute -bottom-2 -left-4 sm:-bottom-6 sm:-left-12 z-40 scale-[0.6] sm:scale-[0.8] origin-bottom-left" />

              {/* Code Snippet Card (Third Element) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-[10%] -left-[10%] w-[45%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-10 hidden lg:block"
              >
                {/* Decorative elements */}
                <div className="absolute top-2 left-2 flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-[80%] bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-[60%] bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-[90%] bg-slate-100 rounded-full"></div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] rounded font-bold">
                    React
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
