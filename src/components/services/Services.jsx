import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

export const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      x: -100,
      y: 50,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div className="services" variants={variants}>
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <p>
          Transforming ideas into user-friendly interfaces, <br /> One Line of
          Code at a Time!
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Crafting Reusable Components</h2>
          <p>
            Build React components that you can use and reuse effortlessly
            throughout your project. It's all about creating modular, flexible
            pieces that make development a breeze.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Masters of State Management</h2>
          <p>
            Handle state in React like a pro. Whether it's using Redux or the
            Context API, I ensure that communication between components is
            smooth and your app's state is in good hands.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Designs that Fit Any Screen</h2>
          <p>
            Craft interfaces that gracefully adapt to all screen sizes. In
            React, I employ responsive design techniques, making sure your users
            get a seamless experience, whether they're on a desktop or a
            smartphone.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Optimizing for Peak Performance</h2>
          <p>
            Make your React apps blazing fast. From efficient rendering to smart
            data fetching, I focus on optimizing performance, ensuring your
            users enjoy a smooth and responsive experience.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
