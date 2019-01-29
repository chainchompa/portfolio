import React from "react";
import "./Projects.css";
import gameoflife from "../images/gameoflife.png";
import mud from "../images/mud.png";
import notes from "../images/notes.png";
import architects from "../images/architects.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <h3>Game of Life</h3>
        <img src={gameoflife} alt="Game of Life" />
        <div className="project-links">
          <a href="https://chainchompa.github.io/Game-Of-Life/">
            <FontAwesomeIcon icon="desktop" size="2x" color="white" />
          </a>
          <a href="https://github.com/chainchompa/Conways-Life">
            <FontAwesomeIcon icon="code" size="2x" color="white" />
          </a>
        </div>
        <p>
          A web app using React that emulates John Conway's Game of Life. A grid
          of cells that are either alive or dead that can be manually populated
          or created with templates. The cells advance based on a set of rules
          that govern their replication and destruction. Includes features like
          changing grid size, choosing different colors for grid and cells,
          randomizing the grid, and manually clicking through the steps of the
          game.
        </p>
      </div>
      <div className="project-container">
        <h3>MUD Game</h3>
        <img src={mud} alt="Mud Game" />
        <p>
          An online multiplayer text adventure game using Pusher websockets for
          player status and real-time messaging. Uses React on the front end and
          Python/Django on the back end.
        </p>
        <div className="project-links">
          <a href="https://jenniferplayer-lambdamud.netlify.com/">
            <FontAwesomeIcon icon="desktop" size="2x" color="white" />
          </a>
          <a href="https://github.com/chainchompa/LambdaMUD-Project">
            <FontAwesomeIcon icon="code" size="2x" color="white" />
          </a>
        </div>
      </div>
      <div className="project-container">
        <h3>Notes App</h3>
        <img src={notes} alt="Notes App" />
        <p>
          A web app created to keep track of notes. Allows you to create, edit,
          and delete different notes. The notes are served in a SQLite database
          so notes can be accessed from anywhere. Uses React on the front end
          and Node.js on the back end.
        </p>
        <div className="project-links">
          <a href="https://jennifernotes.netlify.com/">
            <FontAwesomeIcon icon="desktop" size="2x" color="white" />
          </a>
          <a href="https://github.com/chainchompa/back-end-project-week">
            <FontAwesomeIcon icon="code" size="2x" color="white" />
          </a>
        </div>
      </div>
      <div className="project-container">
        <h3>S&J Architects Mock Website</h3>
        <img src={architects} alt="Architecture Website" />
        <p>
          A fully-responsive sample company site. The site includes a fully
          functional tab component coded from scratch utilizing Javascript
          components and DOM Manipulation. This was the first full project I did
          and it uses HTML5, CSS3 with LESS, and Javascript.{" "}
        </p>
        <div className="project-links">
          <a href="https://chainchompa.github.io/User-Interface-Project-Week/">
            <FontAwesomeIcon icon="desktop" size="2x" color="white" />
          </a>
          <a href="https://github.com/chainchompa/LambdaNotes">
            <FontAwesomeIcon icon="code" size="2x" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
