import { useRef } from "react";
import "./services.scss";
import { useInView } from "framer-motion";

export const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <div className="services" ref={ref} style={{ opacity: isInView ? 1 : 0 }}>
      <div className="titleContainer">
        <p>
          Transforming ideas into user-friendly interfaces, <br /> One Line of
          Code at a Time!
        </p>
        <div className="title">
          <h1>Unique Ideas For Your Business.</h1>
          <a>What I'm Offering?</a>
        </div>
      </div>
      <div className="listContainer" id="what-i-do">
        <div className="box">
          <h2>Crafting Reusable Components</h2>
          <p>
            Build React components that you can use and reuse effortlessly
            throughout your project. It's all about creating modular, flexible
            pieces that make development a breeze.
          </p>
          <a>Go</a>
        </div>
        <div className="box">
          <h2>Masters of State Management</h2>
          <p>
            Handle state in React like a pro. Whether it's using Redux or the
            Context API, I ensure that communication between components is
            smooth and your app's state is in good hands.
          </p>
          <a>Go</a>
        </div>
        <div className="box">
          <h2>Designs that Fit Any Screen</h2>
          <p>
            Craft interfaces that gracefully adapt to all screen sizes. In
            React, I employ responsive design techniques, making sure your users
            get a seamless experience, whether they're on a desktop or a
            smartphone.
          </p>
          <a>Go</a>
        </div>
        <div className="box">
          <h2>Optimizing for Peak Performance</h2>
          <p>
            Make your React apps blazing fast. From efficient rendering to smart
            data fetching, I focus on optimizing performance, ensuring your
            users enjoy a smooth and responsive experience.
          </p>
          <a>Go</a>
        </div>
      </div>
    </div>
  );
};
