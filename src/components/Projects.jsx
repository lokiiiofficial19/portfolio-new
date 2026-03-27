import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Todo List App",
      desc: "A simple and clean task manager built with HTML, CSS, and JavaScript.",
      tech: "HTML • CSS • JavaScript",
      link: "https://lokiiofficial1337.neocities.org/demo"
    },
    {
      title: "E-Commerce Website",
      desc: "Front-end product listing page with cart and responsive UI.",
      tech: "HTML • CSS • JavaScript",
      link: "https://lokiiofficial1337.neocities.org/loki.html/"
    },
    {
      title: "House Rent & Sell System",
      desc: "Frontend UI for managing house listings and rentals.",
      tech: "HTML • CSS • JavaScript",
      link: "https://lokiiofficial1337.neocities.org/house%20&%20rent/"
    },

    // 🔥 JAVA PROJECTS
    {
      title: "Student Management System",
      desc: "Java console-based app to manage student records.",
      tech: "Java • OOP • File Handling",
      link: "#"
    },
    {
      title: "Bank Management System",
      desc: "Java app for account operations like deposit & withdrawal.",
      tech: "Java • OOP • Collections",
      link: "#"
    },
    {
      title: "Library Management System",
      desc: "Manage books with issue/return using Java + DB.",
      tech: "Java • JDBC • MySQL",
      link: "#"
    },
    {
  title: "Weather App",
  desc: "Real-time weather application using API to fetch live data based on user location.",
  tech: "React • API • CSS",
  link: "#"
   },

    {
      title: "Portfolio Website",
      desc: "Your own professional portfolio created using React.",
      tech: "React • CSS",
      link: "#"
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="project-title">Projects</h2>

      <div className="project-grid">
        {projectList.map((pro, index) => (
          <div className="project-card" key={index}>
            <h3>{pro.title}</h3>
            <p>{pro.desc}</p>

            <span
              className={`tech ${
                pro.tech.includes("Java") ? "java" : ""
              }`}
            >
              {pro.tech}
            </span>

            <a href={pro.link} className="btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;