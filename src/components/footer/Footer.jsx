import "./footer.scss";
import { useEffect, useState } from "react";
import { RiGithubFill } from "react-icons/ri";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Justice. All rights reserved.</p>
        </div>
        <div className="footer-icons">
          <a
            href="https://github.com/Justice-Udehegbunam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill /> View Github Profile
          </a>
        </div>
        <a href="#" onClick={scrollToTop}>
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
