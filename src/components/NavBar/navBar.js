import HamburgerMenu from "../HamburgerMenu/hamBurgerMenu";
import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconSVG } from "../../icon.svg";

const Navbar = () => {
  const hideResponsiveNav = () => {
    const menu = document.querySelector(".menu");
    const links = document.querySelector(".nav-links");
    links.classList.toggle("active");
    menu.classList.toggle("change");
  };

  const scrollToElement = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <a className="nav-link" href="/">
        <IconSVG style={{ padding: "8px", zIndex: 101 }} />
      </a>

      <div className="nav-links">
        <ul>
          <li className="nav-link">
            <Link
              className="nav-link"
              to="/about"
              smooth="true"
              offset={-100}
              duration={500}
              ignorecancelevents="true"
              onClick={() => hideResponsiveNav()}
            >
              About Us
            </Link>
          </li>
          <li className="nav-link">
            <Link
              className="nav-link"
              to="/about-ndis"
              smooth="true"
              offset={-100}
              duration={500}
              ignorecancelevents="true"
              onClick={() => hideResponsiveNav()}
            >
              NDIS
            </Link>
          </li>
          <li className="nav-link">
            <Link
              className="nav-link"
              to="services"
              smooth="true"
              offset={-100}
              duration={500}
              ignorecancelevents="true"
              onClick={() => hideResponsiveNav()}
            >
              Services
            </Link>
          </li>

          <li className="nav-link">
            <button className="button" onClick={scrollToElement}>
              Contact Us
            </button>
          </li>
        </ul>
      </div>

      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
