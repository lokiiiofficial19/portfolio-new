import React, { useState } from "react";
import "./contact.css";
import contactImg from "../assets/contact.png"; // add any illustration image

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent 🚀 (connect EmailJS later)");
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <img src={contactImg} alt="contact" />
          <h2>Let's Connect 👋</h2>
          <p>
            Have a project idea or want to collaborate?  
            Feel free to send me a message 🚀
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h2>Contact Me</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message 🚀</button>
          </form>
        </div>

      </div>
    </section>
  );
}