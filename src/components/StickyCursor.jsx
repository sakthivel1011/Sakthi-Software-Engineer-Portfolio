import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StickyCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const cursorSize = isHovered ? 60 : 20;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Check if mouse is in hero section
      const isOverHero = !!e.target.closest("#home");
      setIsInHero(isOverHero);

      if (isOverHero) {
        mouseX.set(e.clientX - cursorSize / 2);
        mouseY.set(e.clientY - cursorSize / 2);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Add hover effect for clickable elements
    const handleMouseOver = (e) => {
      if (!e.target.closest("#home")) {
        setIsHovered(false);
        return;
      }

      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorSize, mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-blue-500/30 border border-blue-400 rounded-full pointer-events-none backdrop-blur-[1px] z-[9999]"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        width: cursorSize,
        height: cursorSize,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
        opacity: isInHero ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default StickyCursor;
