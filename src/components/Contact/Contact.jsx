import React from "react";
import address from "../../assets/address.jpg";
import email from "../../assets/envelope.png";
import website from "../../assets/website.png";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import credly from "../../assets/credly.png";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2e750083-ed25-4af7-9b18-e5b44705f0a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="contact">
      <div className="contact-left">
        <h1>Contact Me</h1>

        <ul>
          <li>
            <img src={address} className="icon" /> Kalanki, Kathmandu, Nepal
          </li>
          <li>
            <img src={email} className="icon" /> contact@sushildhungana49.com.np
          </li>{" "}
          <li>
            <img src={email} className="icon" /> sushildhungana49@gmail.com
          </li>
          <li>
            <img src={website} className="icon" /> www.sushildhungana49.com.np
          </li>
        </ul>
      </div>
      <div className="contact-mid">
        <h2 className="socials">Social Media</h2>
        <ul>
          <li>
            <img src={github} className="icon" />{" "}
            <a
              href="https://www.github.com/SushilDhungana49"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <img src={facebook} className="icon" />{" "}
            <a
              href="https://www.facebook.com/sushildhungana49"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <img src={linkedin} className="icon" />{" "}
            <a
              href="https://www.linkedin.com/in/sushil-dhungana-767a2b303/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn{" "}
            </a>
          </li>
          <li>
            <img src={credly} className="icon" />{" "}
            <a
              href="https://www.credly.com/users/sushil-dhungana.8f383175/badges#credly"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Credly{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-right">
        <h2>Get In Touch</h2>
        <form onSubmit={onSubmit}>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          ></input>{" "}
          <label>Email Address :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          ></input>
          <label>Message :</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Leave a message"
            required
          ></textarea>
          <button className="btn-dark">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
};

export default Contact;
