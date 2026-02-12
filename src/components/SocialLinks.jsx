import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const socialData = [
  {
    name: "GitHub",
    url: "https://github.com/sakthivel1011",
    icon: <FaGithub />,
    color: "#24292e", // Dark gray
    hoverColor: "#000000",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sakthivel-p-043b5425b/",
    icon: <FaLinkedinIn />,
    color: "#0077b5", // LinkedIn blue
    hoverColor: "#005885",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sakthiisteve/",
    icon: <FaInstagram />,
    color:
      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    isGradient: true,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/sakthivel.p.5686",
    icon: <FaFacebookF />,
    color: "#1877f2", // Facebook blue
    hoverColor: "#0e5a8a",
  },
];

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialData.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            scale: 1.15,
            y: -5,
            perspective: 1000,
            rotateX: 5,
            rotateY: 5,
          }}
          className="relative group p-3 rounded-xl bg-white border border-slate-100 shadow-sm transition-all duration-300 overflow-hidden flex items-center justify-center text-xl"
          style={{ width: "48px", height: "48px" }}
          aria-label={social.name}
        >
          {/* Background Layer for brand color effect */}
          <motion.div
            className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: social.isGradient ? social.color : social.color,
            }}
          />

          <span className="relative z-10 transition-colors duration-300 text-white md:text-slate-500 md:group-hover:text-white">
            {social.icon}
          </span>

          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 opacity-20 md:opacity-0 md:group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"
            style={{
              background: social.isGradient ? social.color : social.color,
            }}
          ></div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
