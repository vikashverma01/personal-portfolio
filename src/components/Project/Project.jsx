import React from "react";
// import "./Project.css"; //
import { Container } from "./style";

const projects = [
  {
    title: "Knowledge Graph-Enhanced RAG for Financial Advisory",
    description:
      "A Retrieval-Augmented Generation (RAG) system integrated with knowledge graphs to provide context-rich financial advisory responses using LLMs.",
    tech: ["RAG", "Knowledge Graph", "LangChain", "LLMs"],
  },
  {
    title: "BakeBot",
    description:
      "An intelligent baking assistant that uses real-time sensors and AI to monitor baking precision and consistency for home and industrial kitchens.",
    tech: ["IoT", "AI", "Node.js", "React"],
  },
  {
    title: "CNN Based Face Recognition",
    description:
      "A student attendance system that uses Convolutional Neural Networks for real-time face recognition and automatic attendance logging.",
    tech: ["Python", "OpenCV", "CNN", "TensorFlow"],
  },
];

const Project = () => {
  return (
    <Container id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span className="tech-item" key={i}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Project;
