import React from "react";

import "./Project.css";

const Project = (props) => {
  return (
    <div className="prop">
      <a
        href={props.url}
        rel="noopener noreferrer"
        target={props.url === "/" ? "_self" : "_blank"}
      >
        <img src={props.link} alt={props.title} />
      </a>

      <a href={props.url} target="_blank">
        <p>{props.title}</p>
      </a>
    </div>
  );
};

export default Project;
