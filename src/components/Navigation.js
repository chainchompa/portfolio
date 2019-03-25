import React from "react";
import Pdf from '../documents/Resume.pdf';

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
        activePage: current_page.slice(22)
      })
      console.log('dev');
    } else {
      this.setState({
        activePage: current_page.slice(26)
      })
      console.log('prod');
    }
  };
    render() {
      return (
        <div className="navigation">
          <div className="nav-links">
            <Link to="/" style={{ textDecoration: "none", color: this.state.activePage == "" ? "#A239CA" : "" }}>
              About
            </Link>
            <Link to="/projects" style={{ textDecoration: "none", color: this.state.activePage == "projects" ? "#A239CA" : "" }}>
              Projects
            </Link>
            <Link to="/contact" style={{ textDecoration: "none", color: this.state.activePage == "contact" ? "#A239CA" : "" }}>
              Contact
            </Link>
            <a href = {Pdf} target = "_blank" style={{ textDecoration: "none"}}>Resume</a>
          </div>
        </div>
      );
    }
};

export default Navigation;
