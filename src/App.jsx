import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { ToastContainer } from "react-toastify";

import "./App.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
