// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>El Computer Center</h3>
          <p>Jl. Contoh No. 123, Kota, Negara</p>
          <p>Telepon: +62 123 4567 890</p>
          <p>Email: info@elcomputercenter.com</p>
        </div>
        <div className="footer-links">
          <a href="#home">Beranda</a>
          <a href="#about">Tentang Kami</a>
          <a href="#courses">Kursus</a>
          <a href="#contact">Kontak</a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} El Computer Center. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
