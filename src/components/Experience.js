import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience" id="experience">
      <h2>Experience</h2>
          <h3>Software Engineer at Greenlight Financial Technology</h3>
          <h4>April 2019 - Present</h4>
        <div className="experience-container">
          <p>
          Rewrote our registration web app and built it using a component mapper that
          handles each step of registration and can move around the order and appearance
          of the registration flow for experimentation purposes. Tech Stack: Next.js, Redux,
          Typescript, Sass, React Testing Libary
          </p>
          <p>
          Worked on a team to rebuild the marketing website from a static html website to a
          React app that pulls content from a headless CMS. Tech Stack: Gatsby, GraphQL,
          Styled Components, React Testing Library
          </p>
          <p>
          Improved functionality on our customer service tool that allows the customer
          service team to be able to update customer's accounts and debit cards. Tech Stack:
          React, Redux, Node.js, MySQL, Redis
          </p>
          <p>
          Created weekly A/B tests for our registration web app and the marketing website to
          increase conversion rate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
