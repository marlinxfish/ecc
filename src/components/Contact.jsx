// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Hubungi Kami</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Informasi Kontak</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Jl. K.H.M Hasan,Rawalini,Teluknaga,Tanggerang
          </p>
          <p>
            <i className="fas fa-phone"></i> +62 881 0111 771146
          </p>
          <p>
            <i className="fas fa-phone"></i> +62 882 1441 8226
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@elcomputercenter.com
          </p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Pesan Anda" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submit-btn">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
