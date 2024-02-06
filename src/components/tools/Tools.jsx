// Tools.jsx

import React from "react";
import {
  FaReact,
  FaSass,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import "./tools.scss";

const Tools = () => {
  const toolsData = [
    { name: "React", icon: <FaReact className="react-icon" /> },
    { name: "SCSS", icon: <FaSass className="scss-icon" /> },
    { name: "HTML5", icon: <FaHtml5 className="html-icon" /> },
    { name: "CSS3", icon: <FaCss3 className="css-icon" /> },
    { name: "JavaScript", icon: <FaJs className="js-icon" /> },
    { name: "Node.js", icon: <FaNodeJs className="nodejs-icon" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="tailwind-icon" /> },
    // Add more tools as needed
  ];

  return (
    <div className="tools-container">
      <h2 className="section-title">Tools</h2>
      <div className="tools-list">
        {toolsData.map((tool, index) => (
          <motion.div
            key={index}
            className="tool-item"
            whileHover={{ scale: 1.4, transition: { duration: 0.3 } }}
          >
            {tool.icon}
            <span>{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
