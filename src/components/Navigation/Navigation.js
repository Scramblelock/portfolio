import React, { Component } from "react";
import marcLogo from "./marcLogo.png";
import "./Navigation.css";
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <ul className="navBar">
          <li className="logo">
            <img
              className="marcLogo"
              alt="marcLogo"
              src={marcLogo}
              onClick={this.scrollToTop}
            />
          </li>
          <li className="menuItems">
            <Link
              className="link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="menuItems">
            <Link
              className="link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="menuItems">
            <Link
              className="link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="menuItems">
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
