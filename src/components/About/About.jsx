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
import junior from "../../assets/junior.png";
import endpoint from "../../assets/endpoint.png";
import defense from "../../assets/defense.png";
import cc from "../../assets/cc.png";
import threat from "../../assets/threat.png";
import nextjs from "../../assets/nextjs.png";
import wazuh from "../../assets/wazuh.png";
import shuffle from "../../assets/shuffle.png";
import bash from "../../assets/bash.png";
import oracle from "../../assets/oracle.jpeg";
import mongoose from "../../assets/mongoose.png";
import react from "../../assets/react.svg";

const About = () => {
  return (
    <section className="container">
      <h1> About Me</h1>
      <p className="about">
        I’m a technology enthusiast with a background in full-stack web
        development and a growing specialization in cybersecurity. My journey
        began with building responsive, high-performance web applications, which
        gave me a strong foundation in system logic, networking, and
        problem-solving. Today, I’m focused on exploring how systems can be
        protected rather than just built — from monitoring threats using SIEM
        tools like Wazuh to automating incident response workflows and
        understanding SOC operations. I enjoy bridging the gap between
        development and security, applying my developer mindset to create
        secure, efficient, and resilient digital systems.
      </p>
      <h1>Course Completion</h1>
      <div className="languages">
        <a href="https://imgur.com/a/lnQIhhB" target="blank">
          <div className="img-box">
            <img src={junior} alt="Junior Cybersecurity Pathway"></img>
            <p className="caption">Junior Cyber Security Analysis</p>
          </div>
        </a>
        <a href="https://imgur.com/a/hvCyi5P" target="blank">
          <div className="img-box">
            <img src={threat} alt="Threat Management"></img>
            <p className="caption">Threat Management</p>
          </div>
        </a>
        <a href="https://imgur.com/a/jFmow1v" target="blank">
          <div className="img-box">
            <img src={defense} alt="Network Defense"></img>
            <p className="caption">Network Defense</p>
          </div>
        </a>
        <a href="https://imgur.com/xxOoDo2" target="blank">
          <div className="img-box">
            <img src={endpoint} alt="endpoint security"></img>
            <p className="caption">Endpoint Security</p>
          </div>{" "}
        </a>
        <a href="https://imgur.com/a/VhRNW8G" target="blank">
          <div className="img-box">
            <img src={cc} alt="Certified in Cybersecurity"></img>
            <p className="caption">Certified in Cybersecurity</p>
          </div>{" "}
        </a>
      </div>
      <h1> Skills</h1>
      <div className="languages">
        <div className="img-box">
          <img src={wazuh} alt="wazuh"></img>
          <p className="caption">Wazuh</p>
        </div>
        <div className="img-box">
          <img src={shuffle} alt="shuffle"></img>
          <p className="caption">Shuffle</p>
        </div>
        <div className="img-box">
          <img src={bash} alt="bash"></img>
          <p className="caption">Bash</p>
        </div>
        <div className="img-box">
          <img src={oracle} alt="oracle"></img>
          <p className="caption">Oracle Cloud Infrastructure</p>
        </div>
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
          <img src={sql} alt="sql"></img>
          <p className="caption">SQL</p>
        </div>
      </div>
    </section>
  );
};

export default About;
