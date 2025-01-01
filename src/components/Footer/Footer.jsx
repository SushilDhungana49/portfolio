import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <p>&copy; {new Date().getFullYear()} Sushil Dhungana</p>
      </section>
    </div>
  );
};

export default Footer;
