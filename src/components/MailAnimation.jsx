import React from "react";
import "./MailAnimation.css";
import { motion, AnimatePresence } from "framer-motion";

const MailAnimation = ({ email = "sakthivel1011@gmail.com" }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleEnvelopeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleMailLink = (e) => {
    e.stopPropagation();
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex flex-col items-center py-2 w-full transform md:scale-90 lg:scale-100 transition-all duration-500 ease-out">

      {/* Envelope wrapper — clicking toggles open/close */}
      <div
        className={`letter-image block ${isOpen ? "is-open" : ""}`}
        onClick={handleEnvelopeClick}
        role="button"
        aria-label={isOpen ? "Close envelope" : "Open envelope"}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleEnvelopeClick(e)}
      >
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-content">
              {/* "Connect With Mail" is the clickable CTA that opens mailto */}
              <div
                className="letter-title text-xs font-bold text-slate-700"
                onClick={handleMailLink}
                role="link"
                tabIndex={isOpen ? 0 : -1}
                aria-label={`Send email to ${email}`}
              >
                Connect
              </div>
              <div
                className="letter-context text-[10px] font-bold text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-800 transition-colors"
                onClick={handleMailLink}
                role="link"
                tabIndex={isOpen ? 0 : -1}
                aria-label={`Send email to ${email}`}
              >
                With Mail
              </div>
            </div>
            {/* Decorative Border */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-50" />
            {/* Stamp */}
            <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
              <span className="text-[8px] text-slate-400">@</span>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
          {/* "Tap to open" — a sibling floated over the envelope body via absolute CSS */}
          <AnimatePresence>
            {!isOpen && (
              <motion.span
                key="tap-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.45, 0.9, 0.45] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="envelope-tap-hint"
              >
                tap to open
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="shadow"></div>
      </div>

      {/* "Click to close" hint when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.p
            key="close-hint"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-[9px] font-semibold text-slate-400 uppercase tracking-[0.15em]"
          >
            click again to close
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MailAnimation;
