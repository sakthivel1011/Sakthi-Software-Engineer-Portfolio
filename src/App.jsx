import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCursor from "./components/StickyCursor";
import { MotionConfig } from "framer-motion";

import { Toaster } from "sonner";
import { useState, useEffect } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <div className="min-h-screen">
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0f172a", // Deep Navy/Slate 900
              color: "#ffffff",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontFamily: "inherit",
            },
            className: "shadow-2xl",
          }}
        />
        {isDesktop && <StickyCursor />}
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;

