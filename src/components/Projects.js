import React from "react";
import "./Projects.css";
import gameoflife from "../images/gameoflife.png";
import chattr from "../images/chattr.png";
import mud from "../images/mud.png";
import architects from "../images/architects.png";
import Navigation from "./Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <div className="projects-container">
      <Navigation />
      <div className="projects">
        <div className="project-container">
          <h3>Game of Life</h3>
          <img src={gameoflife} alt="Game of Life" />
          <div className="project-links">
            <a href="https://chainchompa.github.io/Game-Of-Life/" target="_blank">
              <FontAwesomeIcon icon="desktop" size="2x" color="white" />
            </a>
            <a href="https://github.com/chainchompa/Game-Of-Life" target="_blank">
              <FontAwesomeIcon icon="code" size="2x" color="white" />
            </a>
          </div>
          <p>
            A web app emulates John Conway's Game of Life. A grid
            of cells that are either alive or dead that can be manually populated
            or created with templates. The cells advance based on a set of rules
            that govern their replication and destruction. Includes features like
            changing grid size, choosing different colors for grid and cells,
            randomizing the grid, and manually clicking through the steps of the
            game.
          </p>
          <p>
            Written entirely in React.
          </p>
        </div>
        <div className="project-container">
          <h3>chattr</h3>
          <img src={chattr} alt="Chattr" />
          <div className="project-links">
            <a href="https://labs10-webchat.netlify.com/" target="_blank">
              <FontAwesomeIcon icon="desktop" size="2x" color="white" />
            </a>
            <a href="https://github.com/Lambda-School-Labs/labs10-webchat" target="_blank">
              <FontAwesomeIcon icon="code" size="2x" color="white" />
            </a>
          </div>
          <p>
            Chattr is a live chat tool for B2C and B2B companies to connect with visitors to their website. The
            product includes a dashboard for representatives to manage and engage in conversations, and a
            customer chat widget deployed as a code snippet.
          </p>
          <p>
            Written using React on the front end and Node.js on the back end. Uses Socket.io for live chat
            between companies and customers, Firebase for authentication, Stripe for billing, PostgreSQL for the
            database, Redis for persisting data, and Material-UI for design.
          </p>
        </div>
        <div className="project-container">
          <h3>MUD Game</h3>
          <img src={mud} alt="Mud Game" />
            <div className="project-links">
              <a href="https://jenniferplayer-lambdamud.netlify.com/" target="_blank">
                <FontAwesomeIcon icon="desktop" size="2x" color="white" />
              </a>
              <a href="https://github.com/chainchompa/LambdaMUD-Project" target="_blank">
                <FontAwesomeIcon icon="code" size="2x" color="white" />
              </a>
            </div>
          <p>
            An online multiplayer text adventure game that includes moving around different rooms, displaying player status, and messaging between online players.
          </p>
          <p>
            Written using React on the front end and Python/Django on the back end. Uses Pusher websockets for real-time messaging.
          </p>
        </div>
        <div className="project-container">
          <h3>S&J Architects Mock Website</h3>
          <img src={architects} alt="Architecture Website" />
            <div className="project-links">
              <a href="https://chainchompa.github.io/User-Interface-Project-Week/" target="_blank">
                <FontAwesomeIcon icon="desktop" size="2x" color="white" />
              </a>
              <a href="https://github.com/chainchompa/LambdaNotes" target="_blank">
                <FontAwesomeIcon icon="code" size="2x" color="white" />
              </a>
            </div>
          <p>
            A fully-responsive sample company site. The site includes a fully
            functional tab component coded from scratch utilizing JavaScript
            components and DOM Manipulation.
          </p>
          <p>
            This was the first full project I completed and it uses HTML5, CSS3 with LESS, and JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
