import React from "react";
import Pdf from '../documents/JenniferResume.pdf';

import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      activePage: ""
    }
  };
  componentDidMount() {
    let current_page = window.location.href;
    if(process.env.NODE_ENV == 'development') {
      this.setState({
        activePage: current_page.slice(24)
      })
    } else {
      this.setState({
        activePage: current_page.slice(28)
      })
    }
  };
    render() {
      return (
        <div className="navigation">
          <div className="nav-links">
            <a href="#about" style={{ textDecoration: "none", color: this.state.activePage == "" ? "#A239CA" : "" }}>
              About
            </a>
            <a href="#experience" style={{ textDecoration: "none", color: this.state.activePage == "projects" ? "#A239CA" : "" }}>
              Experience
            </a>
            <a href="#projects" style={{ textDecoration: "none", color: this.state.activePage == "projects" ? "#A239CA" : "" }}>
              Projects
            </a>
            <a href="#contact" style={{ textDecoration: "none", color: this.state.activePage == "contact" ? "#A239CA" : "" }}>
              Contact
            </a>
            <a href = {Pdf} target = "_blank" style={{ textDecoration: "none"}}>Resume</a>
          </div>
        </div>
      );
    }
};

export default Navigation;
