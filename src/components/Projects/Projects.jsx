import React from "react";
import Project from "./Project/Project";
import toDo from "../../assets/to-do.png";
import simon from "../../assets/simon.png";
import portfolio from "../../assets/portfolio.png";
import shopper from "../../assets/shopper.png";
import shopperAdmin from "../../assets/shopperAdmin.png";
import soc from "../../assets/soc.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section>
      <div className="projects">
        <h1>Projects</h1>
        <div className="project">
          <Project
            link={soc}
            title="SOC Home Lab"
            url="https://github.com/SushilDhungana49/SOC-Home-Lab/"
          />
          <Project
            link={shopper}
            title="Shopper Frontend"
            url="https://shopper.sushildhungana49.com.np"
          />
          <Project
            link={shopperAdmin}
            title="Shopper Admin Panel"
            url="https://shopperadmin.sushildhungana49.com.np"
          />
          <Project link={portfolio} title="Portfolio" url="/" />
          <Project
            link={toDo}
            title="To Do List"
            url="https://to-do-list.sushildhungana49.com.np"
          />
          <Project
            link={simon}
            title="Simon Game"
            url="https://simon-game.sushildhungana49.com.np"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
