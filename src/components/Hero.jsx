import React from "react";
import profileImg from "../assets/IMG_20251129_121652.jpg";
import "./Hero.css";


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
      <span>Hi, I'm Lokesh</span> 👋
    </h1>

<h2>Java Developer | Problem Solver</h2>

<p>
  Passionate about building scalable applications using Java and solving real-world problems with clean and efficient code.
</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">See Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Lokesh Kumar" />
      </div>
    </section>
  );
}
