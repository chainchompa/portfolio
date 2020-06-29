import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./Navigation";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact">
        <h1>Get In Touch</h1>
        <p>Feel free to contact me about anything!</p>
        <div className="contact-links">
          <a href="mailto:chainchompa@gmail.com">
            <FontAwesomeIcon icon="envelope" size="3x" color="white" />
          </a>
          <a href="https://github.com/chainchompa" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} size="3x" color="white" />
          </a>
          <a href="https://www.linkedin.com/in/jenniferplayer" target="_blank">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
