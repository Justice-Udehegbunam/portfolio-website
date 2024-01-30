import "./portfolio.scss";
import liquor from "../../assets/liquorhaven.png";
import nike from "../../assets/nike.png";
import gpt from "../../assets/gpt3.png";
import edu from "../../assets/eduUnity.png";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Liquor Haven Website",
    img: liquor,
    desc: "A Fully Functonal and Responsive E-Commerce website focused on drinks.",
  },
  {
    id: 2,
    title: "Nike Website",
    img: nike,
    desc: "A Fully Responsive replica of the NIKE E-Commerce website.",
  },
  {
    id: 3,
    title: "GPT-3 Website",
    img: gpt,
    desc: "A Fully Responsive website based on the GPT-3 website.",
  },
  {
    id: 4,
    title: "EduUnity Educational Website",
    img: edu,
    desc: "A Fully Responsive website with api's and youtube integration.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
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
