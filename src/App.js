import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import {
  faDesktop,
  faCode,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(faDesktop, faCode, faEnvelope, fab);

class App extends Component {
  render() {
    return (
        <div className="App-Container">
          <Navigation />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
    );
  }
}

export default App;
