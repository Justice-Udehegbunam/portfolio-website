import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}

      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Justice ⚖️
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a
            href="https://web.facebook.com/profile.php?id=100090884624625"
            target="blank"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/justicefavour31/" target="blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://twitter.com/FavouredJustice" target="blank">
            <img src="/Twitter_new_X_logo.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/justice-udehegbunam/"
            target="blank"
          >
            <img src="/Linkedin (1).png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
