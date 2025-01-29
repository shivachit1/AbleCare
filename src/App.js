import React from "react";
import Navbar from "./components/NavBar/navBar.js";
import Footer from "./components/Footer/Footer.js";
import MyServices from "./components/Services/Services.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home.js";
import { ServiceDetailPage } from "./components/Services/ServiceDetailPage.js";
import ContactPage from "./components/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
