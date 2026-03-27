import React from "react";
import "./skills.css";

export default function Skills() {
 const skills = [
  { name: "Java (Core & OOP)", icon: "☕", level: "Strong" },
  { name: "SQL (Basics)", icon: "🗄️", level: "Learning" },
  { name: "Data Structures & Algorithms", icon: "🧠", level: "Learning" },
  { name: "HTML", icon: "🌐", level: "Strong" },
  { name: "CSS", icon: "🎨", level: "Strong" },
  { name: "JavaScript", icon: "⚡", level: "Intermediate" },
  { name: "React", icon: "⚛️", level: "Learning" },
  { name: "Git & GitHub", icon: "📁", level: "Intermediate" }
];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
         <div className="skill-card" key={index}>
  <div className="card-inner">
    <span className="skill-icon">{skill.icon}</span>
    <p>{skill.name}</p>
    <span className={`level ${skill.level.toLowerCase()}`}>
      {skill.level}
    </span>
  </div>
</div>
        ))}
      </div>
    </section>
  );
}