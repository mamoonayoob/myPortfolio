import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedLogo from "../assets/animated-logo.svg";

const HeaderNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="brand-glow d-flex align-items-center"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="logo-container me-3"
            style={{ filter: "drop-shadow(0 0 8px rgba(0, 255, 255, 0.7))" }}
          >
            <img
              src={AnimatedLogo}
              alt="Mamoon Ayoob Logo"
              className="logo-img"
              width="45"
              height="45"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="brand-text"
            style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
              color: "#e0f7fa",
            }}
          >
            Mamoon.Dev
          </motion.span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="togglebtn bg-light"
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
