import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNavbar from "./Components/Navbar";
import Home from "./view/home/Home";
import About from "./view/about/About";
import Projects from "./view/projects/Projects";
import Contact from "./view/contact/Contact";
import Technologies from "./view/technology/Technologies";

function RoutesMain() {
  return (
    <Router>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/technologies" element={<Technologies />}></Route>
      </Routes>
    </Router>
  );
}

export default RoutesMain;
