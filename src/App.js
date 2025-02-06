import React from "react";
import Navbar from "./components/NavBar/navBar.js";
import Footer from "./components/Footer/Footer.js";
import MyServices from "./components/Services/Services.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home.js";
import { ServiceDetailPage } from "./components/Services/ServiceDetailPage.js";
import AboutNDIS from "./components/AboutNDIS/AboutNDIS.js";
import ScrollToTop from "./ScrollToTop.js";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-ndis" element={<AboutNDIS />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
