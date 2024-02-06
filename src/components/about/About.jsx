// About.jsx

import seamfix from "../../assets/seamfix.png";
import codecademy from "../../assets/codecademy.png";
import freecodecamp from "../../assets/freecodecamp.png";
import code4u from "../../assets/Screenshot 2024-02-06 105636.png";

import {
  FaReact,
  FaSass,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./about.scss";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timer to update the state after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const text =
    "Hello! I'm Justice Udehegbunam, a passionate frontend developer with expertise in building modern and responsive web applications. I enjoy working with technologies like React, SCSS, and Tailwind CSS. Here are some of the skills I specialize in:";

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-hero">
          <AnimatePresence>
            {isVisible && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="skills-container">
            <motion.div
              className="skills"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: 4, duration: 5 }}
            >
              <div className="skill1">
                <div className="item" style={{ marginBottom: "-20px" }}>
                  <FaReact className="skill-icon react-icon" />
                  <span>React</span>
                </div>
              </div>
              <div className="skill2-3">
                <div className="item">
                  <SiTailwindcss
                    className="skill-icon tailwind-icon"
                    style={{ marginLeft: "40px" }}
                  />
                  <span style={{ marginLeft: "20px" }}>Tailwind</span>
                </div>
                <div className="item">
                  <FaCss3 className="skill-icon css-icon" />
                  <span>CSS</span>
                </div>
              </div>
              <div className="skill4-5">
                <div className="item">
                  <FaSass className="skill-icon scss-icon" />
                  <span>SASS</span>
                </div>
                <div className="item">
                  <FaHtml5 className="skill-icon html-icon" />
                  <span>HTML</span>
                </div>
              </div>
              <div className="skill6-7">
                <div className="item">
                  <FaNodeJs className="skill-icon nodejs-icon" />
                  <span style={{ marginLeft: "40px" }}>NodeJS</span>
                </div>
                <div className="item">
                  <FaJs
                    className="skill-icon js-icon"
                    style={{ marginTop: "16px" }}
                  />
                  <span>JavaScript</span>
                </div>
              </div>
              <div className="skiil8">
                <div className="item">
                  <div style={{ marginTop: "2px", color: "blue" }}>
                    <svg
                      height="34"
                      viewBox="3.7 3.7 43.6 43.6"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
                        fill="#59529d"
                      />
                      <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
                      <path
                        d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
                        fill="#bb4b96"
                      />
                    </svg>
                  </div>
                  <span style={{ marginLeft: "-40px" }}>Framer Motion</span>
                </div>
              </div>
            </motion.div>
            <i>And Still Learning!!</i>
          </div>
        </div>

        <h2 className="title">Certifications</h2>
        <div className="education">
          <div>
            <img src={seamfix} alt="seamfix" />
            <h3>Certified Frontend Developer</h3>
            <p>
              The Certified Frontend Developer certification from Seamfix was a
              comprehensive program covering HTML, CSS, and JavaScript. Through
              this certification, I gained a deep understanding of frontend
              development principles and best practices. This certification has
              enabled me to build modern and responsive web applications with
              confidence, and it has significantly enhanced my skills as a
              frontend developer.
            </p>
            <a href="" target="blank">
              Click to View
            </a>
          </div>
          <div>
            <img src={codecademy} alt="codecademy" />
            <h3>Advanced Javascript</h3>
            <p>
              The Advanced JavaScript course on Codecademy provided me with an
              in-depth understanding of JavaScript concepts such as closures,
              promises, and asynchronous programming. This certification has
              helped me write cleaner and more efficient JavaScript code, and it
              has expanded my capabilities as a frontend developer.
            </p>
            <a href="" target="blank">
              Click to View
            </a>
          </div>
          <div>
            <img src={code4u} alt="code4u" />
            <h3>Basics Of Web Development</h3>
            <p>
              The Basics of Web Development certification from Code4U introduced
              me to the fundamental concepts of web development, including HTML,
              CSS, and basic JavaScript. This certification kickstarted my
              journey as a web developer and provided me with a solid foundation
              to build upon. It has been instrumental in shaping my
              understanding of web technologies and preparing me for more
              advanced coursework.
            </p>
            <a href="" target="blank">
              Click to View
            </a>
          </div>
          <div>
            <img src={freecodecamp} alt="freecodecamp" />
            <h3>Responsive Web Development</h3>
            <p>
              The Responsive Web Development certification from freeCodeCamp
              equipped me with the skills to create responsive and
              mobile-friendly websites. Through hands-on projects and
              challenges, I learned how to design and develop websites that
              adapt seamlessly to various screen sizes and devices. This
              certification has been invaluable in ensuring that the websites I
              build provide a great user experience across different platforms.
            </p>
            <a href="" target="blank">
              Click to View
            </a>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default About;
