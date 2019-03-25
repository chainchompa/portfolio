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
  componentDidMount() {
    let current_page = window.location.href;
    if(process.env.NODE_ENV == 'development') {
      this.setState({
        activePage: current_page.slice(22)
      })
      console.log('dev');
    } else {
      this.setState({
        activePage: current_page.slice(27)
      })
      console.log('prod');
    }
  };
    render() {
      return (
        <div className="navigation">
          <div className="nav-links">
            <Link to="/" style={{ textDecoration: "none", color: this.state.activePage == "" ? "#A23386" : "" }}>
              About
            </Link>
            <Link to="/projects" style={{ textDecoration: "none", color: this.state.activePage == "projects" ? "#A23386" : "" }}>
              Projects
            </Link>
            <Link to="/contact" style={{ textDecoration: "none", color: this.state.activePage == "contact" ? "#A23386" : "" }}>
              Contact
            </Link>
          </div>
        </div>
      );
    }
};

export default Navigation;
