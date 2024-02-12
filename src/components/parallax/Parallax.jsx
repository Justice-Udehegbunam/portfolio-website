import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064 )",
      }}
    >
      <motion.h1
        style={{ y: yText, textAlign: "center" }}
        dangerouslySetInnerHTML={{
          __html:
            type === "services"
              ? "What I Offer!"
              : type === "about"
              ? "About Me"
              : `What I've <br /> Done!`,
        }}
      />

      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${type === "about" && "/planets.png"})`,
          marginBottom: type === "portfolio" && "36rem",
        }}
        className="plannets"
      ></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
};
