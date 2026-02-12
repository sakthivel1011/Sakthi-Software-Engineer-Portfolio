import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.5; // Half of hero section
      const scrollingUp = currentScrollY < lastScrollY.current;

      // Expand when: in hero section OR scrolling up
      // Collapse when: past hero AND scrolling down
      if (currentScrollY <= heroHeight || scrollingUp) {
        setIsCollapsed(false);
      } else {
        setIsCollapsed(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // Intersection Observer for active section
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  // Determine if navbar should be expanded
  const isExpanded = !isCollapsed || isHovered;

  return (
    <>
      {/* Hover detection zone at top of screen */}
      <div
        className="fixed top-0 left-0 right-0 h-16 z-[99]"
        onMouseEnter={() => setIsHovered(true)}
      />

      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{
          width:
            window.innerWidth >= 768 || isExpanded
              ? window.innerWidth < 768
                ? "92%"
                : "90%"
              : "4.5rem",
          maxWidth:
            window.innerWidth >= 768 || isExpanded
              ? window.innerWidth < 768
                ? "100%"
                : "64rem"
              : "4.5rem",
          x: window.innerWidth >= 768 || isExpanded ? "-50%" : "0%",
          right: window.innerWidth >= 768 || isExpanded ? "auto" : "1.5rem",
          left: window.innerWidth >= 768 || isExpanded ? "50%" : "auto",
        }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="fixed z-[100] top-6 bg-white/95 md:bg-white/95 md:backdrop-blur-md shadow-lg border border-slate-200/50 rounded-full overflow-hidden"
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Visible when expanded or on desktop */}
            <AnimatePresence initial={false}>
              {(isExpanded || window.innerWidth >= 768) && (
                <motion.a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "#home")}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-xl font-bold font-display text-slate-900 tracking-tight whitespace-nowrap"
                >
                  Sakthi<span className="text-blue-600">.</span>
                </motion.a>
              )}
            </AnimatePresence>

            {/* Desktop Navigation - Always visible on desktop */}
            <div className="hidden md:flex items-center space-x-8 overflow-hidden ml-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`transition-all duration-300 font-medium text-sm relative group whitespace-nowrap ${isActive
                        ? "text-blue-600"
                        : "text-slate-500 hover:text-slate-900"
                      }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Icons & Controls */}
            <div className="flex items-center">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="hidden md:block px-5 py-2 mr-0 bg-slate-900 text-white border border-transparent rounded-full font-semibold transition-all duration-300 text-xs tracking-wide whitespace-nowrap hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Hire Me
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2.5 rounded-full transition-all duration-500 md:hidden flex items-center justify-center ${isMobileMenuOpen
                    ? "bg-slate-900 text-white rotate-90"
                    : "text-slate-700 hover:bg-slate-100"
                  }`}
              >
                {isMobileMenuOpen ? (
                  <HiX size={20} />
                ) : (
                  <HiMenuAlt3 size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Mobile Side Drawer moved outside to avoid clipping */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[110] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/60"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 flex items-center justify-between border-b border-slate-50">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "#home")}
                  className="text-xl font-bold font-display text-slate-900 tracking-tight order-last"
                >
                  Sakthi<span className="text-blue-600">.</span>
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-grow overflow-y-auto py-8">
                <div className="px-6 space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive =
                      activeSection === link.href.replace("#", "");
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: i * 0.05 },
                        }}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 font-medium ${isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                      >
                        <span className="text-lg">{link.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="drawerActive"
                            className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 mt-auto border-t border-slate-50 space-y-4">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="flex items-center justify-center w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-900/10 hover:bg-blue-600 transition-all active:scale-95"
                >
                  Start a Project
                </a>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest px-2">
                  Open for opportunities
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
