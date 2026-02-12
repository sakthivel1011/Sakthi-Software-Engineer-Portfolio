import { useState, useRef, useEffect } from "react";
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiEye,
  HiX,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// Bouncy Card Components
const BounceCard = ({ className, children, gradient, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 0.98, rotate: "-1deg" }}
      whileTap={{ scale: 0.95 }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardType = ({ children }) => {
  return (
    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">
      {children}
    </p>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h4 className="text-2xl font-bold text-slate-900 mb-2 font-display">
      {children}
    </h4>
  );
};

const CardOrg = ({ children }) => {
  return <p className="text-slate-500 text-sm font-medium mb-4">{children}</p>;
};

const CertificateCarousel = ({ certificates, onSelect, onViewAll }) => {
  const [index, setIndex] = useState(0);
  const dragX = useRef(0);

  const next = () => setIndex((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  // Auto-rotate every 3 seconds - paused on hover/drag
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [index, certificates.length]);

  return (
    <div className="relative h-[450px] sm:h-[500px] w-full flex items-center justify-center perspective-[1500px] py-10 touch-none">
      <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
        <AnimatePresence initial={false}>
          {certificates.map((cert, i) => {
            const isCenter = i === index;
            const isLeft =
              i === (index - 1 + certificates.length) % certificates.length;
            const isRight = i === (index + 1) % certificates.length;

            if (!isCenter && !isLeft && !isRight) return null;

            let x = 0;
            let z = 0;
            let rotateY = 0;
            let opacity = 0;
            let scale = 0.8;

            const isMobile =
              typeof window !== "undefined" && window.innerWidth < 768;

            if (isCenter) {
              x = 0;
              z = isMobile ? 80 : 150;
              rotateY = 0;
              opacity = 1;
              scale = 1;
            } else if (isLeft) {
              x = isMobile ? -160 : -280;
              z = isMobile ? -80 : -100;
              rotateY = isMobile ? 35 : 35;
              opacity = 0.3;
              scale = 0.75;
            } else if (isRight) {
              x = isMobile ? 160 : 280;
              z = isMobile ? -80 : -100;
              rotateY = isMobile ? -35 : -35;
              opacity = 0.3;
              scale = 0.75;
            }

            return (
              <motion.div
                key={cert.name}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) prev();
                  else if (info.offset.x < -100) next();
                }}
                initial={{ opacity: 0, x: 0, z: -200 }}
                animate={{
                  opacity,
                  x,
                  z,
                  rotateY,
                  scale,
                  boxShadow: isCenter
                    ? "0 40px 80px -20px rgba(0,0,0,0.4)"
                    : "0 10px 30px -5px rgba(0,0,0,0.1)",
                }}
                exit={{ opacity: 0, scale: 0.5, z: -200 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className={`absolute w-[240px] sm:w-[320px] md:w-[450px] aspect-[1.414/1] bg-white rounded-sm border-[2px] sm:border-[3px] border-slate-900 shadow-xl cursor-pointer group ${isCenter ? "z-20" : "z-10"
                  }`}
                onClick={() => (isCenter ? onSelect(cert) : setIndex(i))}
              >
                <div className="absolute inset-0 border border-slate-200 shadow-inner overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain grayscale brightness-95 group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Glass shimmer effect on center card */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>

                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-16 sm:-bottom-12 left-1/2 -translate-x-1/2 w-[90vw] sm:w-full text-center px-4"
                  >
                    <p className="text-white font-bold font-display text-[10px] sm:text-base line-clamp-2 drop-shadow-lg leading-tight">
                      {cert.name}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
        <button
          onClick={prev}
          className="p-2.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all text-slate-400 hover:text-blue-600 active:scale-95"
          aria-label="Previous certificate"
        >
          <HiChevronLeft size={20} />
        </button>

        {/* Dot Pagination - Integrated with controls */}
        <div className="flex gap-2">
          {certificates.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setIndex(idx)}
              animate={{
                width: idx === index ? 20 : 6,
                backgroundColor: idx === index ? "#2563eb" : "#cbd5e1",
              }}
              whileHover={{
                backgroundColor: idx === index ? "#2563eb" : "#94a3b8",
              }}
              className="h-1.5 rounded-full transition-colors cursor-pointer"
              aria-label={`Go to certificate ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all text-slate-400 hover:text-blue-600 active:scale-95"
          aria-label="Next certificate"
        >
          <HiChevronRight size={20} />
        </button>
      </div>

    </div>
  );
};

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isGridViewOpen, setIsGridViewOpen] = useState(false);

  const achievements = [
    {
      title: "Internship - Android dev with IoT",
      organization: "National Small Industries Corporation (NSIC)",
      description:
        "Successfully completed virtual internship training on Android application development with IoT conducted by the National Small Industries Corporation Limited (NSIC), a Government of India enterprise, showcasing proficiency in simple applications.",
      type: "Internship",
      image: "assets/certificates/certificate(NSIC).jpg",
    },
    {
      title: "Internship - Web Development",
      organization: "Brazy Technologies",
      description:
        "Completed a one-week internship at Brazy Technologies, gaining practical experience in web development technologies and methodologies, including HTML, CSS, and JavaScript.",
      type: "Internship",
      image: "assets/certificates/certificate(Brassy Technologies).jpg",
    },
    {
      title: "Spot Award - Best Performance (March 2025)",
      organization: "Datayaan Solutions Pvt. Ltd.",
      description:
        "Awarded for independently exploring and integrating OpenAI's API to optimize a complex dropdown filter in a Vehicle Tracking Application. This innovation significantly reduced backend dependencies and improved data precision.",
      type: "Award",
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
    {
      name: "Machine Learning courses by Infosys Springboard",
      image: "assets/certificates/certificat(Machine learning).jpg",
    },
    {
      name: "IBM Cloud courses by IBM",
      image: "assets/certificates/certificate(IBM).jpg",
    },
    {
      name: "Python for data science course by Infosys Springboard",
      image: "assets/certificates/certificate(Pythonfordatascience).jpg",
    },
    {
      name: "Introduction to Artificial intelligence by Infosys Springboard",
      image: "assets/certificates/certificate(Introduction to Artificial Intelligence).jpg",
    },
    {
      name: "Introduction to Cyber security by Infosys Springboard",
      image: "assets/certificates/certificate(introduction to Cyber Security).jpg",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col pt-[20vh] pb-12 w-full overflow-hidden relative"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 py-0">
        {/* Swipe Hint for Mobile */}
        <div className="md:hidden flex justify-center mb-4">
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2 text-[10px] font-bold text-blue-400/60 uppercase tracking-widest"
          >
            <HiChevronLeft /> Swipe to Explore <HiChevronRight />
          </motion.div>
        </div>

        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-white leading-tight tracking-tight">
              My <span className="text-blue-400">Achievements</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light px-4">
              A showcase of my professional milestones, certifications, and
              dedication to continuous growth.
            </p>
          </motion.div>
        </div>

        {/* Professional Highlights - Bouncy Cards Grid */}
        <div className="mb-12">
          <h3 className="text-sm sm:text-lg font-black text-slate-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-4 px-4">
            Highlights
            <div className="h-px flex-grow bg-slate-700/50" />
          </h3>

          <div className="grid grid-cols-12 gap-6 px-4 sm:px-0">
            {/* First Row */}
            <BounceCard
              className="col-span-12 md:col-span-6 min-h-[280px] sm:min-h-[300px]"
              gradient="from-blue-400 to-indigo-400"
              onClick={() =>
                setSelectedCert({
                  name: "Android Application Development with IoT - NSIC",
                  image: "assets/certificates/certificate(NSIC).jpg",
                })
              }
            >
              <CardType>Internship</CardType>
              <CardTitle>Android dev with IoT</CardTitle>
              <CardOrg>National Small Industries Corporation (NSIC)</CardOrg>
              <div className="absolute bottom-0 left-4 right-4 top-32 sm:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-400 to-indigo-400 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] overflow-hidden">
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                  Successfully completed virtual internship training on Android
                  application development with IoT conducted by NSIC, showcasing
                  proficiency in simple applications.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider">
                  <HiEye className="w-4 h-4" /> View Certificate
                </div>
              </div>
            </BounceCard>

            <BounceCard
              className="col-span-12 md:col-span-6 min-h-[280px] sm:min-h-[300px]"
              gradient="from-emerald-400 to-teal-400"
              onClick={() =>
                setSelectedCert({
                  name: "Web Development Internship - Brazy Technologies",
                  image: "assets/certificates/certificate(Brassy Technologies).jpg",
                })
              }
            >
              <CardType>Internship</CardType>
              <CardTitle>Web Development</CardTitle>
              <CardOrg>Brazy Technologies</CardOrg>
              <div className="absolute bottom-0 left-4 right-4 top-32 sm:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-emerald-400 to-teal-400 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] overflow-hidden">
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                  Completed a one-week internship gaining practical experience
                  in web development technologies including HTML, CSS, and
                  JavaScript.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider">
                  <HiEye className="w-4 h-4" /> View Certificate
                </div>
              </div>
            </BounceCard>

            {/* Second Row */}
            <BounceCard
              className="col-span-12 md:col-span-7 min-h-[280px] sm:min-h-[300px]"
              gradient="from-amber-400 to-orange-400"
            >
              <CardType>Award</CardType>
              <CardTitle>Best Performance</CardTitle>
              <CardOrg>Datayaan Solutions Pvt. Ltd.</CardOrg>
              <div className="absolute bottom-0 left-4 right-4 top-32 sm:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] overflow-hidden">
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                  Awarded for independently exploring and integrating OpenAI's
                  API to optimize a complex dropdown filter in a Vehicle
                  Tracking Application.
                </p>
              </div>
            </BounceCard>

            <BounceCard
              className="col-span-12 md:col-span-5 min-h-[280px] sm:min-h-[300px]"
              gradient="from-pink-400 to-rose-400"
            >
              <CardType>Award</CardType>
              <CardTitle>Technical Quiz</CardTitle>
              <CardOrg>JP College of Engineering</CardOrg>
              <div className="absolute bottom-0 left-4 right-4 top-32 sm:top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-rose-400 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] overflow-hidden">
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                  Attained runner-up position showcasing proficiency in
                  technical subjects and problem-solving skills.
                </p>
              </div>
            </BounceCard>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-20 items-stretch px-4 sm:px-0">
          {/* 3D Certificate Carousel */}
          <div className="flex flex-col">
            <h3 className="text-sm sm:text-lg font-black text-slate-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
              Certifications
              <div className="h-px flex-grow bg-slate-700/50" />
            </h3>
            <CertificateCarousel
              certificates={certifications}
              onSelect={setSelectedCert}
              onViewAll={() => setIsGridViewOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Certificate Viewer Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
            />

            <div className="fixed inset-0 z-[130] flex flex-col items-center justify-center p-4 sm:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl max-h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-slate-900"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-slate-900/10 hover:bg-slate-900/20 text-slate-900 rounded-full transition-colors"
                >
                  <HiX size={24} />
                </button>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <h4 className="mt-6 text-white text-base sm:text-xl font-bold font-display text-center drop-shadow-lg px-4">
                {selectedCert.name}
              </h4>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid View Modal */}
      <AnimatePresence>
        {isGridViewOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGridViewOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-7xl h-[90vh] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
                <h3 className="text-xl font-bold font-display text-white">
                  All Certifications
                </h3>
                <button
                  onClick={() => setIsGridViewOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Scrollable Grid Viewer */}
              <div className="flex-grow overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-blue-500/50 transition-all shadow-lg"
                      onClick={() => {
                        setSelectedCert(cert);
                        setIsGridViewOpen(false);
                      }}
                    >
                      <div className="aspect-[1.414/1] overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className="p-4 bg-slate-800/90 backdrop-blur-sm">
                        <p className="text-white text-sm font-bold truncate">
                          {cert.name}
                        </p>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center">
                        <HiEye className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 text-center bg-slate-900/50 border-t border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  {certifications.length} Certificates Total
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Section-Level View All Eye Icon - Positioned at bottom right */}
      <div className="absolute bottom-10 right-6 md:right-10 z-[60] group/tooltip">
        <motion.button
          animate={{
            boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.4)", "0 0 0 10px rgba(59, 130, 246, 0)", "0 0 0 0px rgba(59, 130, 246, 0)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => setIsGridViewOpen(true)}
          className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center relative overflow-visible"
          aria-label="View all certificates"
        >
          <HiEye size={22} />
          {/* Subtle Ping/Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 pointer-events-none" />
        </motion.button>
        <div className="absolute bottom-full right-0 mb-4 px-3 py-1.5 bg-slate-900/95 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-2xl border border-white/10">
          View All Certificates
          <div className="absolute top-full right-4 border-4 border-transparent border-t-slate-900/95" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
