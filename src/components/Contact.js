import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <p>Feel free to contact me about anything!</p>
      <div className="contact-links">
        <a href="mailto:chainchompa@gmail.com">
          <FontAwesomeIcon icon="envelope" size="3x" color="white" />
        </a>
        <a href="https://github.com/chainchompa">
          <FontAwesomeIcon icon={["fab", "github"]} size="3x" color="white" />
        </a>
        <a href="https://www.linkedin.com/in/jennifer-player-92a6a5153">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" color="white" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
