import "./about.scss";

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
import { Tools } from "../tools/Tools";

const About = () => {
  const skillsData = [
    { name: "React", icon: <FaReact /> },
    { name: "SCSS", icon: <FaSass /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    // Add more skills as needed
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="section-title">About Me</h1>
        <p>
          Hello! I'm Justice Udehegbunam, a passionate frontend developer with
          expertise in building modern and responsive web applications. I enjoy
          working with technologies like React, SCSS, and Tailwind CSS. Below
          are some of the skills I specialize in:
        </p>

        <Tools />

        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <h3>Frontend Developer</h3>
          <p>[Company Name], [Location] | [Start Date] - [End Date]</p>
          <p>
            Worked on the development of [project details]. Collaborated with a
            cross-functional team to ensure high-quality and timely delivery of
            projects.
          </p>
        </div>

        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>UnderGraduate</h3>
          <p>University of Nigeria, Nsukka {/* | [Graduation Year] */}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
