import React from "react";
import "./About.css";
import c from "../../assets/c.png";
import cpp from "../../assets/cpp.svg";
import ai from "../../assets/ai.svg";
import ps from "../../assets/ps.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import sql from "../../assets/sql.png";
import js from "../../assets/js.svg";
import node from "../../assets/nodejs.webp";
import express from "../../assets/express.png";
import nextjs from "../../assets/nextjs.png";
import mongoose from "../../assets/mongoose.png";
import react from "../../assets/react.svg";

const About = () => {
  return (
    <section className="container">
      <h1> About Me</h1>
      <p className="about">
        I’m a passionate and driven developer with a love for crafting clean,
        efficient code and building intuitive, user-friendly applications. With
        experience in both frontend and backend technologies, I focus on
        delivering seamless, high-performance solutions. Whether it’s creating
        dynamic user interfaces, optimizing backend functionality, or working
        with cutting-edge frameworks, I thrive on solving complex problems and
        bringing ideas to life through technology.
      </p>
      <h1> Skills</h1>
      <div className="languages">
        <div className="img-box">
          <img src={html} alt="html"></img>
          <p className="caption">HTML</p>
        </div>
        <div className="img-box">
          <img src={css} alt="css"></img>
          <p className="caption">CSS</p>
        </div>

        <div className="img-box">
          <img src={js} alt="js"></img>
          <p className="caption">JavaScript</p>
        </div>
        <div className="img-box">
          <img src={react} alt="react"></img>
          <p className="caption">React.js</p>
        </div>
        <div className="img-box">
          <img src={node} alt="node"></img>
          <p className="caption">Node.js</p>
        </div>
        <div className="img-box">
          <img src={express} alt="express"></img>
          <p className="caption">Express.js</p>
        </div>
        <div className="img-box">
          <img src={nextjs} alt="nextjs"></img>
          <p className="caption">Next.js</p>
        </div>
        <div className="img-box">
          <img src={mongoose} alt="mongoose"></img>
          <p className="caption">Mongoose</p>
        </div>
        <div className="img-box">
          <img src={c} alt="c"></img>
          <p className="caption">C Programming</p>
        </div>
        <div className="img-box">
          <img src={cpp} alt="c++"></img>
          <p className="caption">C++</p>
        </div>
        <div className="img-box">
          <img src={ps} alt="ps"></img>
          <p className="caption">Adobe Photoshop</p>
        </div>
        <div className="img-box">
          <img src={ai} alt="ai"></img>
          <p className="caption">Adobe Illustrator</p>
        </div>
        <div className="img-box">
          <img src={sql} alt="sql"></img>
          <p className="caption">SQL</p>
        </div>
      </div>
    </section>
  );
};

export default About;
