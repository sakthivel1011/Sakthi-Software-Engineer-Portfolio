import React from "react";
import "./MailAnimation.css";
import { motion } from "framer-motion";

const MailAnimation = ({ email = "sakthivel1011@gmail.com" }) => {
  return (
    <div className="flex flex-col items-center py-2 w-full transform md:scale-90 lg:scale-100 transition-all duration-500 ease-out">
      <a
        href={`mailto:${email}`}
        className="letter-image block"
        aria-label="Send email"
      >
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-content">
              <div className="letter-title text-xs font-bold text-slate-700">
                Connect
              </div>
              <div className="letter-context text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                With Mail
              </div>
            </div>
            {/* Decorative Border like a Stamp or Header */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-50" />

            {/* Stamp */}
            <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
              <span className="text-[8px] text-slate-400">@</span>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </a>
      {/* Mobile Hint */}
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4], y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-8 text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] md:hidden"
      >
        Tap to Open
      </motion.p>
    </div>
  );
};

export default MailAnimation;
