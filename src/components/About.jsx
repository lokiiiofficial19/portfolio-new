import React from "react";
import "./about.css";
import profileImg from "../assets/IMG_20251129_121652.jpg";

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        
        {/* TEXT */}
        <div className="about-text">
          <h3>Hello, I'm Lokesh Kumar 👋</h3>

          <p>
            I am a passionate <span>Software Developer</span> currently focusing on 
            Java and problem solving. I enjoy building applications that solve 
            real-world problems.
          </p>

          <ul className="about-list">
            <li>☕ Java Programming</li>
            <li>🧠 Data Structures & Algorithms</li>
            <li>💻 Frontend Development</li>
          </ul>

          <p>
            My goal is to start my career as a Software Developer and continuously
            grow my technical skills.
          </p>

          <a href="#contact" className="about-btn">Contact Me</a>
        </div>

        {/* IMAGE */}
        <div className="about-image">
          <img src={profileImg} alt="Lokesh" />
        </div>

      </div>
    </section>
  );
}