import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends React.Component {
constructor(props) {
super(props);
this.state = {
    activePage: ""
  }
};
  render() {
    return (
      <div className="navigation">
        <div className="nav-links">
          <Link to="/" style={{ textDecoration: "none" }}>
            About
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </div>
      </div>
    );
  }
};

export default Navigation;
