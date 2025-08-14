import { useState } from "react";
import "./Navsec.css";

export default function Navsec() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Mufeedh</div>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Close Button */}
        <div 
        className="close-btn" onClick={() => setIsOpen(false)}>×</div>

        <li><a href="#about" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#aboutsec" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}