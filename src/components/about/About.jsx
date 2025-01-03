// About.jsx
import {
  softwareDevIBM,
  seamfix,
  databaseCertMeta,
  cloudComputing,
  code4u,
  freecodecamp,
} from "../../assets";

import {
  FaReact,
  FaSass,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./about.scss";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        // When the component is in view, update state to show it
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once the state is set to true
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the intersection observer with options
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // This means 50% of the element must be in view
    });

    // Start observing the component's DOM node
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const text =
    "Hello! I'm Justice Udehegbunam, a passionate frontend developer with expertise in building modern and responsive web applications. I enjoy working with technologies like React, SCSS, and Tailwind CSS. Here are some of the skills I specialize in:";

  return (
    <div className="about-container">
      <div className="about-content">
        <div ref={componentRef} className="about-hero">
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

          <div className="skills-container-mobile">
            <div className="skills">
              <motion.div
                className="skill"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0 }}
              >
                <FaReact className="skill-icon react-icon" />
                <span>React</span>
              </motion.div>

              <motion.div
                className="skill"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.1 }}
              >
                <SiTailwindcss className="skill-icon tailwind-icon" />
                <span>Tailwind</span>
              </motion.div>

              <motion.div
                className="skill"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
              >
                <FaCss3 className="skill-icon css-icon" />
                <span>CSS</span>
              </motion.div>

              <motion.div
                className="skill"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
              >
                <FaSass className="skill-icon scss-icon" />
                <span>SASS</span>
              </motion.div>

              <motion.div
                className="skill"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
              >
                <FaHtml5 className="skill-icon html-icon" />
                <span>HTML</span>
              </motion.div>

              <motion.div
                className="skill"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              >
                <FaJs className="skill-icon js-icon" />
                <span>JS</span>
              </motion.div>

              <motion.div
                className="skill"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
              >
                <FaNodeJs className="skill-icon nodejs-icon" />
                <span>NodeJS</span>
              </motion.div>

              <motion.div
                className="skill"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
              >
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
                <span>F-Motion</span>
              </motion.div>
            </div>
            <i>And Still Learning!!</i>
          </div>
        </div>

        <h2 className="title">Certifications</h2>
        <div className="education">
          <div>
            <img src={softwareDevIBM} alt="Software developer Cert IBM" />
            <h3>Software Development Essentials</h3>
            <p>
              The Software Development Essentials certification from IBM
              provided me with a strong foundation in software development
              principles and practices. This program covered key topics such as
              programming fundamentals, software design, and development
              workflows. Through this certification, I have honed my
              problem-solving skills and gained valuable insights into building
              reliable and efficient software applications. If you're
              interested, you can <strong>view my certification</strong> using
              the button below.
            </p>
            <a
              href="https://drive.google.com/file/d/1BCSexx11cgfrrc9qlTO0_dLm4SK4y-1n/view?usp=drive_link"
              target="blank"
            >
              Click to View
            </a>
          </div>
          <div>
            <img src={seamfix} alt="seamfix" />
            <h3>Certified Frontend Developer</h3>
            <p>
              The Certified Frontend Developer certification from Seamfix was a
              comprehensive program covering HTML, CSS, and JavaScript. Through
              this certification, I gained a deep understanding of frontend
              development principles and best practices. It has enabled me to
              build modern and responsive web applications with confidence,
              significantly enhancing my skills as a frontend developer. If
              you'd like to see the certification, you can{" "}
              <strong>view it using the button below</strong>.
            </p>

            <a
              href="https://drive.google.com/file/d/1wX59raysPufaHm-2JtMexqou86MogYIH/view?usp=drive_link"
              target="blank"
            >
              Click to View
            </a>
          </div>
          <div>
            <img src={databaseCertMeta} alt="Meta Certification" />
            <h3>Introduction to Databases</h3>
            <p>
              As a web developer, understanding databases is crucial for
              creating efficient and dynamic applications. The Introduction to
              Databases certification by Meta provided me with foundational
              knowledge of database design, querying, and management. This
              training enhanced my skills in integrating databases into web
              applications, ensuring seamless data handling and storage
              solutions. If you'd like to explore the certification further, you
              can <strong>view it using the button below</strong>.
            </p>

            <a
              href="https://drive.google.com/file/d/1Lx8CmYeDcAXCKVbVks6mvq5dffRlzw2x/view?usp=drive_link"
              target="blank"
            >
              Click to View
            </a>
          </div>
          <div>
            <img src={cloudComputing} alt="IBM cloud Computing Cert" />
            <h3>Introduction to Cloud Computing</h3>
            <p>
              Cloud computing is an essential skill for modern web development,
              enabling scalability and flexibility in application deployment.
              The Introduction to Cloud Computing certification by IBM provided
              me with a solid understanding of cloud infrastructure, service
              models, and deployment strategies. These skills have enhanced my
              ability to build and manage cloud-integrated web applications
              effectively. To learn more about this certification, you can
              <strong>view it using the button below</strong>.
            </p>

            <a
              href="https://drive.google.com/file/d/1zY-_trutyH-mn6LGDLYuk9U3CT9waXZ6/view?usp=drive_link"
              target="blank"
            >
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
              advanced coursework. To learn more about this certification, you
              can
              <strong>view it using the button below</strong>.
            </p>
            <a
              href="https://drive.google.com/file/d/1xBzoOF6HrXl8gUjBiBA7B8fs-n8KfphK/view?usp=sharing"
              target="blank"
            >
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
              To learn more about this certification, you can
              <strong>view it using the button below</strong>.
            </p>
            <a
              href="https://drive.google.com/file/d/1bKBjdPtU_fvNbp9CSTgHEYoAq_7SXkqm/view?usp=sharing"
              target="blank"
            >
              Click to View
            </a>
          </div>
        </div>

        <div className="experience-section">
          <h2 className="title">Experience</h2>
          <div className="experience">
            <img src={seamfix} alt="Seamfix Logo" />
            <div className="body">
              <div className="company">
                <div className="details">
                  <h3>Frontend Web Developer Intern</h3>
                  <p>Seamfix</p>
                  <p>December 2023 - January 2024</p>
                </div>
              </div>
              <div className="description">
                <p>
                  As a frontend web developer intern at Seamfix, I collaborated
                  with the development team to create responsive and
                  user-friendly web applications. My responsibilities included
                  implementing user interfaces, optimizing website performance,
                  and debugging issues. I gained valuable experience working
                  with technologies such as React, HTML, CSS, and JavaScript,
                  and contributed to various projects that enhanced my skills in
                  frontend development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
