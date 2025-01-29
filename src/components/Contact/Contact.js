// src/components/Contact/ContactMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const ContactPage = () => {
  const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=LATITUDE,LONGITUDE&zoom=15&size=600x300&markers=LATITUDE,LONGITUDE`;

  return (
    <div>
      <h2>Our Location</h2>
      <img src={mapUrl} alt="Our Location" />
    </div>
  );
};

export default ContactPage;
