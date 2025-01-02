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
          <Project
            link={toDo}
            title="To Do List"
            url="to-do-list.sushildhungana49.com.np"
          />
          <Project
            link={simon}
            title="Simon Game"
            url="simon-game.sushildhungana49.com.np"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default Projects;
