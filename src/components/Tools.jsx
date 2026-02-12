import React from "react";
import {
  SiFigma,
  SiFramer,
  SiOpenai,
  SiPython,
  SiReplit,
  SiGoogle,
} from "react-icons/si";
import "./Tools.css";

const Tools = () => {
  const tools = [
    {
      name: "VS Code",
      icon: (
        <img
          src="/assets/skills/vscode.jpg"
          alt="VS Code"
          className="w-full h-full object-contain rounded-xl"
        />
      ),
      bg: "linear-gradient(135deg, #000000ff, #000000ff)",
    },
    {
      name: "AntiGravity",
      icon: (
        <img
          src="/assets/skills/antigravity.png"
          alt="AntiGravity"
          className="w-full h-full object-contain rounded-xl p-1"
        />
      ),
      bg: "linear-gradient(135deg, #000000, #000000ff)", // Dark mysterious theme
    },
    {
      name: "Cursor AI",
      icon: (
        <img
          src="/assets/skills/cursor-ai.png"
          alt="Cursor AI"
          className="w-full h-full object-contain rounded-xl"
        />
      ),
      bg: "linear-gradient(135deg, #374151, #111827)",
    },
    {
      name: "Replit",
      icon: <SiReplit />,
      bg: "linear-gradient(135deg, #f26207, #ff6b00)",
    },
    {
      name: "OpenAI Codex",
      icon: <SiOpenai />,
      bg: "linear-gradient(135deg, #10a37f, #0d9488)",
    },
    {
      name: "Gemini CLI",
      icon: (
        <img
          src="/assets/skills/gemini-cli.png"
          alt="Gemini CLI"
          className="w-full h-full object-contain rounded-xl p-1"
        />
      ),
      bg: "linear-gradient(135deg, #1A1A1A, #2D2D2D)", // Dark theme like the logo
    },
    {
      name: "Figma",
      icon: (
        <img
          src="/assets/skills/figma.png"
          alt="Figma"
          className="w-full h-full object-contain rounded-xl p-1"
        />
      ),
      bg: "linear-gradient(135deg, #000000, #1e1e1e)", // Black theme matching the logo
    },
    {
      name: "Framer AI",
      icon: <SiFramer />,
      bg: "linear-gradient(135deg, #0055ff, #0099ff)",
    },
    {
      name: "Lovable",
      icon: (
        <img
          src="/assets/skills/lovable.png"
          alt="Lovable"
          className="w-full h-full object-contain rounded-xl p-1"
        />
      ),
      bg: "linear-gradient(135deg, #0f0f0f, #1a1a1a)", // Very dark theme
    },
    {
      name: "Uizard",
      icon: (
        <img
          src="/assets/skills/uizard.png"
          alt="Uizard"
          className="w-full h-full object-contain rounded-xl p-1"
        />
      ),
      bg: "linear-gradient(135deg, #ffffffff, #efefefff)",
    },
  ];

  return (
    <section className="tools-section section-container">
      <div className="text-center mb-12">
        <h2 className="section-title mb-2 text-white">
          My Creative <span className="text-blue-400">Toolkit</span>
        </h2>
        <p className="section-subtitle text-slate-400">
          The specialized software and tools that power my workflow.
        </p>
      </div>

      <nav className="blocks">
        {tools.map((tool, index) => (
          <a
            key={index}
            // href="#"
            className="block"
            style={{ "--bg": tool.bg }}
            title={tool.name}
          >
            <div className="block__item">{tool.icon}</div>
          </a>
        ))}
      </nav>
    </section>
  );
};

export default Tools;
