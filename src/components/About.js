import React from "react";
import "./About.css";
import Navigation from "./Navigation";

const About = () => {
  return (
    <div className="about-container">
      <div className="about" id="about">
        <h1>Jennifer Player.</h1>
        <h6>
          Full Stack Software Engineer.
        </h6>
        <p>I'm a full stack software engineer based in Atlanta, Georgia that enjoys building web applications. I enjoy constantly learning and improving my skills with different frameworks and languages. I am always looking for new learning opportunities!</p>
        <p>Here are some of my favorite tools to work with:</p>
        <div className="skills">
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul>
            <li>Git</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Jest</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
