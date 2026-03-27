import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <nav className="navbar">
      <h2 className="logo">LOKESH KUMAR</h2>

      <ul className="nav-links">
        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => setActive("projects")}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={() => setActive("skills")}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setActive("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}