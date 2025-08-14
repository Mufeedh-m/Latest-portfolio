import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-logo">Mufeedh</h3>
        
      </div>

      <nav className="footer-nav">
        <a href="#home" className="footer-link">Home</a>
        <a href="#about" className="footer-link">About</a>
        <a href="#projects" className="footer-link">Projects</a>
        <a href="#skills" className="footer-link">Skills</a>
        <a href="#contact" className="footer-link">Contact</a>
      </nav>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/mufeedh-m" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Mufeedh-m" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Mufeedh. All rights reserved.</small>
      </div>
    </footer>
  );
}