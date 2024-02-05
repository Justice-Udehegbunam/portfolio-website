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
import "./tools.scss";

const Tools = () => {
  const toolsData = [
    { name: "React", icon: <FaReact /> },
    { name: "SCSS", icon: <FaSass /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    // Add more tools as needed
  ];

  return (
    <div className="tools-container">
      <h2 className="section-title">Tools</h2>
      <div className="tools-list">
        {toolsData.map((tool, index) => (
          <div key={index} className="tool-item">
            {tool.icon}
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
