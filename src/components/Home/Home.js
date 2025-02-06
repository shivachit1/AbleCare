import React from "react";
import MyServices from "../Services/Services.js";
import { ReactComponent as SvgImage } from "./pic1.svg";
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
          <p style={{ marginTop: "10px" }}>
            As a Registered NDIS Provider, Able Care is committed to empowering
            individuals with disabilities of all ages. We offer choice and
            foster independence, helping you live life on your terms and improve
            your quality of life.
          </p>
          <div>
            <button
              className="link"
              style={{ marginTop: "20px" }}
              onClick={scrollToElement}
            >
              Contact Us
            </button>
          </div>
        </div>

        <SvgImage className="hero-icon" />
      </div>
      <MyServices />

    </div>
  );
};
