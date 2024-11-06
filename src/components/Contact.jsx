import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

    const phoneNumber = "6285156924532"; // Ganti dengan nomor WhatsApp Anda
    const message = `Nama: ${formData.name}%0ANomor: ${formData.phone}%0APesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="contact" className="contact-container">
      <section className="contact">
        <h2 className="section-title">Hubungi Kami</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Nomor WhatsApp</label>
            <input type="tel" id="phone" name="phone" placeholder="Contoh: 08123456789" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea id="message" name="message" placeholder="Tulis pesan Anda di sini" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <i className="fab fa-whatsapp"></i> Kirim via WhatsApp
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
