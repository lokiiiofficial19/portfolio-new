import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-title">Lokiii ⚡</h2>

        <p className="footer-subtitle">
          Front-End Developer • HTML • CSS • JavaScript • React
        </p>

        <div className="footer-icons">
          <a href="https://github.com/lokiiiofficial19" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="www.linkedin.com/in/lokiiiofficial1337" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:lokiiiofficial1337@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Lokesh Kumar — All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}