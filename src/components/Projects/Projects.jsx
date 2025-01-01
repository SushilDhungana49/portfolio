import React from "react";
import Project from "./Project/Project";
import toDo from "../../assets/to-do.png";
import simon from "../../assets/simon.png";
import portfolio from "../../assets/portfolio.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section>
      <div className="projects">
        <h1>Projects</h1>
        <div className="project">
          <Project link={portfolio} title="Portfolio" url="/" />
          <Project link={toDo} title="To Do List" url="/project/to-do-list" />
          <Project
            link={simon}
            title="Simon Game"
            url="/project/simon-game"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default Projects;
