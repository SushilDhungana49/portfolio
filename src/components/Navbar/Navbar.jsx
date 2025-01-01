import React, { useState } from "react";
import Hamburger from "hamburger-react";

import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuClass, setMenuClass] = useState("menu hidden");
  const showMenu = () => {
    setMenuClass("menu visible");
  };
  const hideMenu = () => {
    setMenuClass("menu hidden");
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) setColor(true);
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div>
        <h1 id="title">Portfolio</h1>
      </div>
      <div className="except-h1">
        <div className="menuPC">
          <ul>
            <li>
              <Link to="hero" offset={0} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="about" offset={-120} smooth={true} duration={500}>
                About{" "}
              </Link>
            </li>

            <li>
              {" "}
              <Link to="projects" offset={-70} smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              {" "}
              <Link to="contact" offset={0} smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={menuClass}>
          <ul>
            <li>
              <Link to="hero" offset={0} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="about" offset={-120} smooth={true} duration={500}>
                About{" "}
              </Link>
            </li>

            <li>
              {" "}
              <Link to="projects" offset={-70} smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              {" "}
              <Link to="contact" offset={-75} smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <Hamburger
            color="white"
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
                showMenu();
              } else {
                hideMenu();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
