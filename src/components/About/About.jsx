import React from "react";
import "./About.css";
import ai from "../../assets/ai.svg";
import azure from "../../assets/azure.png";
import bash from "../../assets/bash.png";
import c from "../../assets/c.png";
import cc from "../../assets/cc.png";
import cpp from "../../assets/cpp.svg";
import css from "../../assets/css.svg";
import defense from "../../assets/defense.png";
import endpoint from "../../assets/endpoint.png";
import express from "../../assets/express.png";
import html from "../../assets/html.svg";
import junior from "../../assets/junior.png";
import js from "../../assets/js.svg";
import kql from "../../assets/kql.png";
import mongoose from "../../assets/mongoose.png";
import nec from "../../assets/nec.jpeg";
import nextjs from "../../assets/nextjs.png";
import node from "../../assets/nodejs.webp";
import oracle from "../../assets/oracle.jpeg";
import ps from "../../assets/ps.svg";
import react from "../../assets/react.svg";
import sbt from "../../assets/sbt.png";
import sentinel from "../../assets/sentinel.jpg";
import shuffle from "../../assets/shuffle.png";
import sql from "../../assets/sql.png";
import threat from "../../assets/threat.png";
import wazuh from "../../assets/wazuh.png";

const About = () => {
  return (
    <section className="container">
      <h1> About Me</h1>
      <p className="about">
       Cybersecurity-focused computer engineer building hands-on SOC and threat detection experience. I am passionate about analyzing real attack traffic, writing queries and detection rules, mapping techniques to MITRE ATT&CK, and producing evidence-based investigation reports.
I focus on the analytical side of security: separating signal from noise in logs, correlating data to confirm or rule out compromise, and tuning detections to cut false positives. My development background gives me a practical grasp of how systems behave under the hood, which I apply to thinking like an attacker and defending like an analyst.
Currently building depth in SIEM tooling, detection engineering, and incident response — aiming to contribute to a SOC or blue team.
      </p>
      <h1>Certifications & Course Completions</h1>
      <div className="languages">
        <a href="https://imgur.com/a/SdpYPCU" target="blank">
          <div className="img-box">
            <img src={nec} alt="Registered Engineer"></img>
            <p className="caption">Registered Engineer</p>
          </div>{" "}
        </a>
        <a href="https://imgur.com/a/VwNLXOd" target="blank">
          <div className="img-box">
            <img src={cc} alt="Certified in Cybersecurity"></img>
            <p className="caption">Certified in Cybersecurity</p>
          </div>{" "}
        </a>
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
         <a href="https://imgur.com/a/wOLAooN" target="blank">
          <div className="img-box">
            <img src={sbt} alt="OSINT"></img>
            <p className="caption">OSINT</p>
          </div>
        </a>
        <a href="https://imgur.com/a/o5Hu0yx" target="blank">
          <div className="img-box">
            <img src={sbt} alt="Threat Hunting"></img>
            <p className="caption">Threat Hunting</p>
          </div>{" "}
        </a>
      </div>
      <h1> Skills</h1>
      <div className="languages">
        <div className="img-box">
          <img src={sentinel} alt="MS Sentinel"></img>
          <p className="caption">Microsoft Sentinel</p>
        </div>
        <div className="img-box">
          <img src={azure} alt="MS Azure"></img>
          <p className="caption">Microsoft Azure</p>
        </div>
        <div className="img-box">
          <img src={kql} alt="KQL"></img>
          <p className="caption">Kusto Query Language (KQL)</p>
        </div>
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
