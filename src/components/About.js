import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>Jennifer Player.</h1>
      <h6>
        Full Stack Software Engineer.
      </h6>
      <p>I'm a full stack software engineer based in Atlanta, Georgia that enjoys building web applications. I enjoy constantly learning and improving my skills with different frameworks and languages. I am always looking for new learning opportunities!</p>
      <p>Here are some of my favorite tools to work with:</p>
      <div className="skills">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <ul> 
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Python</li>
          <li>Django</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
