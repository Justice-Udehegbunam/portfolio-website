import "./portfolio.scss";
import liquor from "../../assets/liquorhaven.png";
import nike from "../../assets/nike.png";
import gpt from "../../assets/gpt3.png";
import edu from "../../assets/eduUnity.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaJs, FaCss3, FaHtml5, FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const items = [
  {
    id: 1,
    title: "Liquor Haven Website",
    img: liquor,
    desc: `Liquor Haven Website is a feature-rich and fully functional E-Commerce platform dedicated to the world of beverages. This responsive website provides a seamless shopping experience for users interested in exploring and purchasing a wide variety of drinks. With an intuitive user interface and cutting-edge design, <b>Liquor Haven is tailored to meet the needs of both casual consumers and connoisseurs alike, making it the go-to destination for all things related to drinks and spirits.</b>`,
    link: "https://liquor-haven.vercel.app",
    github: "https://github.com/AfoDyDigitals/LiquorHaven/tree/justice",
    lang: "react",
    style: "tailwind",
    anim: "framer-motion",
  },
  {
    id: 2,
    title: "Nike Website",
    img: nike,
    desc: `The Nike Website replica is a meticulously crafted and fully responsive reproduction of the renowned NIKE E-Commerce platform. This project not only emulates the visual aesthetics of the original site but also incorporates a high level of interactivity and user engagement. <b>From seamless navigation to a visually appealing product display, the Nike Website replica aims to showcase the prowess of modern web development while honoring the iconic design and functionality of the NIKE brand.</b>`,
    link: "https://nike-app-tailwind-jl6ffqcxr-justices-projects-51d4f6d2.vercel.app/",
    github: "https://github.com/Justice-Udehegbunam/nike-app-tailwind-css",
    lang: "react",
    style: "tailwind",
  },
  {
    id: 3,
    title: "GPT-3 Website",
    img: gpt,
    desc: `The GPT-3 Website project is a responsive and dynamic web application inspired by the official GPT-3 website. This endeavor not only mirrors the sleek design of the original but also incorporates additional features and enhancements. The website serves as a demonstration of GPT-3 capabilities and showcases the potential of language models in various applications. <b> With a user-friendly interface and informative content, the GPT-3 Website project aims to provide an immersive experience for users interested in exploring the capabilities of advanced natural language processing technologies.</b>`,
    link: "https://gpt-3-web-topaz.vercel.app",
    github: "https://github.com/Justice-Udehegbunam/gpt-3_website",
    lang: "react",
    style: "tailwind",
  },
  {
    id: 4,
    title: "EduUnity Educational Website",
    img: edu,
    desc: `EduUnity Educational Website is a comprehensive and fully responsive platform designed to revolutionize online education. This project goes beyond the conventional educational website by integrating APIs and seamlessly incorporating YouTube content. <b> EduUnity aims to create an engaging and interactive learning experience, offering users a diverse range of educational resources. With a user-friendly interface, robust functionality, and a commitment to excellence in education, EduUnity is poised to become a leading force in the evolution of online learning platforms. </b>`,
    link: "https://edu-unity.vercel.app/",
    github: "https://github.com/Justice-Udehegbunam/EduUnity",
    lang: "js",
    style: "css",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>{" "}
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: item.desc }} />

            <div className="stackDiv">
              <h2>Technologies Used:</h2>
              <div className="stack">
                {item.lang === "react" && (
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaReact size={40} color="#61DAFB" />
                  </motion.div>
                )}
                {item.lang === "js" && (
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaJs size={40} color="yellow" />
                  </motion.div>
                )}
                {item.style === "tailwind" && (
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <SiTailwindcss size={40} color="#38B2AC" />
                  </motion.div>
                )}
                {item.style === "css" && (
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaCss3 size={40} color="white" />
                  </motion.div>
                )}
                {item.style === "sass" && (
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaSass size={40} color="#CC6699" />
                  </motion.div>
                )}
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaHtml5 size={40} color="#E34F26" />
                </motion.div>
                {item.anim === "framer-motion" && (
                  <motion.div whileHover={{ scale: 1.2 }}>
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
                  </motion.div>
                )}
              </div>
            </div>

            <div className="buttonContainer">
              <button onClick={() => window.open(item.link, "_blank")}>
                See Demo
              </button>
              <span className="tooltip">{item.link}</span>

              <button
                onClick={() => window.open(item.github, "_blank")}
                className="last"
              >
                View <b>Source</b> Code
              </button>
              <span className="tooltip">{item.github}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start "],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h3>Featured Works</h3>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
