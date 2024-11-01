import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>El Computer Center</span>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar} aria-expanded={isOpen}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Beranda</a>
        </li>
        <li>
          <a href="#program">Program</a>
        </li>
        <li>
          <a href="#about">Tentang Kami</a>
        </li>
        <li>
          <a href="#contact">Kontak</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
