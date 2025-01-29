import React, { useEffect, useState } from "react";
import "./index.css"; // Optional CSS for styling

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
      <div>
        <h2>Able Care</h2>
        <div className="contact_item" id="footer">
          <p>
            Email :{" "}
            <a className="link" href="mailto:mail@domain.au">
              mail@domain.au
            </a>
          </p>
        </div>

        <div className="contact_item">
          <p>
            Contact :{" "}
            <a className="link" href="tel:+610414920014">
              +61 0414920014
            </a>
          </p>
        </div>
        <div className="contact_item">
          <p>
            Address :{" "}
            <a className="link" href={mapLink} target="_blank" rel="noreferrer">
              71 Macumba Dr, Clyde North VIC 3978, Australia
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Able Care. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
