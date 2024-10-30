import HamburgerMenu from "../HamburgerMenu/hamBurgerMenu";
import "./index.css";
import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as SvgImage } from "./icon.svg"; // Adjust the path to your SVG

const Navbar = () => {
  const hideResponsiveNav = () => {
    const menu = document.querySelector(".menu");
    const links = document.querySelector(".nav-links");
    links.classList.toggle("active");
    menu.classList.toggle("change");
  };

  return (
    <nav>
      <a href="/">
        <SvgImage className="nav_icon" />
      </a>

      <div className="nav-links">
        <ul>
          <li className="nav-link">
            <Link
              className="nav-link"
              to="services"
              activeClass="active"
              smooth={true}
              offset={-100}
              duration={500}
              ignoreCancelEvents={true}
              onClick={() => hideResponsiveNav()}
            >
              Services
            </Link>
          </li>

          <li className="nav-link">
            <Link
              className="nav-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => hideResponsiveNav()}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
