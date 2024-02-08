import "./footer.scss";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // Update every minute to ensure timely year changes
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
        <a href="#" onClick={scrollToTop}>
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
