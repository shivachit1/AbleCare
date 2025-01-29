import React from "react";
import MyServices from "../Services/Services.js";
import { Link } from "react-router-dom";
import { ReactComponent as SvgImage } from "./svgImage.svg";
import "./index.css";

export const Home = () => {
  const scrollToElement = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="heroSection">
        <div className="heroSection_content">
          <h1>Able Care</h1>
          <h3>Companion for Your Well-Being</h3>
          <p>
            As a Registered NDIS Provider, Able Care is committed to empowering
            individuals with disabilities of all ages. We offer choice and
            foster independence, helping you live life on your terms and improve
            your quality of life.
          </p>
          <button className="link" onClick={scrollToElement}>
            Contact Us
          </button>
        </div>

        <SvgImage className="hero-icon" />
      </div>
      <MyServices />
    </div>
  );
};
