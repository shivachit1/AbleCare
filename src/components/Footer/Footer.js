import React, { useEffect, useState } from "react";
import "./index.css"; // Optional CSS for styling
import { ReactComponent as IconSVG } from "../../icon.svg";
import Flag from "./flag1.png";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { RiMapPinRangeFill } from "react-icons/ri";

const Footer = () => {
  // Set the address you want to open
  const address = "71+Macumba+Dr,+Clyde+North,+VIC+3978,+Australia";

  // useState to store the link to open in the map
  const [mapLink, setMapLink] = useState("");

  useEffect(() => {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iphone|ipod|ipad/i.test(navigator.userAgent);
    const isMobile = isAndroid || isIOS;

    let link = "";

    // Generate the appropriate link based on platform
    if (isMobile) {
      if (isAndroid) {
        // Google Maps for Android
        link = `https://www.google.com/maps?q=${address}`;
      } else if (isIOS) {
        // Apple Maps for iOS
        link = `http://maps.apple.com/?q=${address}`;
      }
    } else {
      // Fallback to Google Maps for other platforms
      link = `https://www.google.com/maps?q=${address}`;
    }

    // Update the state with the generated map link
    setMapLink(link);
  }, []);
  return (
    <footer className="footer" id="footer">
      <section className="footer_content">
        <section className="footer_content_item">
          <IconSVG />

          <div className="contact_item" id="footer">
            <IoMail className="react-icon" />

            <p style={{ marginLeft: "10px" }}>
              <a className="link" href="mailto:mail@domain.au">
                mail@domain.au
              </a>
            </p>
          </div>

          <div className="contact_item" id="footer">
            <IoCall className="react-icon" />
            <p style={{ marginLeft: "10px" }}>
              <a className="link" href="tel:+610414920014">
                +61 0414920014
              </a>
            </p>
          </div>

          <div className="contact_item" id="footer">
            <RiMapPinRangeFill className="react-icon" />
            <p style={{ marginLeft: "10px" }}>
              <a
                className="link"
                href={mapLink}
                target="_blank"
                rel="noreferrer"
              >
                71 Macumba Dr, <br />
                Clyde North VIC 3978, Australia
              </a>
            </p>
          </div>
        </section>
        <section className="footer_content_item">
          <h2>APPLYING FOR NDIS FUNDING</h2>
          <div className="contact_item" id="footer">
            <p>
              <a
                className="link"
                href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible"
                target="_blank"
                rel="noreferrer"
              >
                Eligibility
              </a>
            </p>
          </div>

          <div className="contact_item">
            <p>
              <a
                className="link"
                href="https://www.ndis.gov.au/applying-access-ndis/how-apply"
                target="_blank"
                rel="noreferrer"
              >
                How to Apply for NDIS funding
              </a>
            </p>
          </div>
          <div className="contact_item">
            <p>
              <a
                className="link"
                href="https://www.ndis.gov.au/participants/how-planning-process-works"
                target="_blank"
                rel="noreferrer"
              >
                How the planning Process works
              </a>
            </p>
          </div>
          <div className="contact_item">
            <p>
              <a
                className="link"
                href="https://www.ndis.gov.au/participants/using-your-plan"
                target="_blank"
                rel="noreferrer"
              >
                How to use your NDIS Plan
              </a>
            </p>
          </div>
          <div className="contact_item">
            <p>
              <a
                className="link"
                href="https://www.ndis.gov.au/participants/home-and-living"
                target="_blank"
                rel="noreferrer"
              >
                Housing and NDIS
              </a>
            </p>
          </div>
        </section>
      </section>
      <section style={{ marginTop: "40px" }}>
        <img src={Flag} alt="flags" />

        <p>RECONCILIATION STATEMENT</p>
        <div className="contact_item">
          <p>
            Able Care acknowledges the Aboriginal and Torres Strait Islander
            peoples as the Traditional Owners of this land. We honor their
            connection to land, water, and community, and pay our respects to
            Elders past, present, and emerging.
          </p>
        </div>
      </section>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Able Care. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
