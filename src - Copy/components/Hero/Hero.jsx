import React from "react";
import { Link } from "react-scroll";
import photo from "../../assets/photo.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="cover">
        <img className="cover-img" src="https://picsum.photos/2000" />
        <div className="content">
          <p>Hello! You've reached</p>
          <img className="photo" src={photo}></img>
          <h1> Sushil Dhungana</h1>
          <div className="btns">
            {" "}
            <Link to="projects" offset={-70} smooth={true} duration={500}>
              <button className="btn">Projects</button>
            </Link>
            <Link to="contact" offset={-75} smooth={true} duration={500}>
              <button className="btn-light">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
