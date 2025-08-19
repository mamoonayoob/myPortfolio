import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import techAnimation from "../../assets/tech-animation.svg";

const Home = () => {
  return (
    <div className="hero-section gradient-bg">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 text-center text-lg-start mt-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="welcome-badge">
                <span className="badge">Welcome to my portfolio</span>
              </div>

              <h1 className="main-heading mt-4">
                Hi, I'm <span className="highlight-text">Mamoon Ayoob</span>
                <br />A Passionate{" "}
                <span className="gradient-text">MERN Stack</span> &{" "}
                <span className="gradient-text">Shopify</span> Developer
              </h1>

              <p className="description mt-3">
                Turning ideas into modern web solutions
              </p>
            </motion.div>

            <div className="typewriter-container">
              <span className="typewriter-prefix">Expert in: </span>
              <TypeAnimation
                sequence={[
                  "MongoDB",
                  1000,
                  "ExpressJS",
                  1000,
                  "ReactJS",
                  1000,
                  "NodeJS",
                  1000,
                  "Shopify Development",
                  1000,
                  "WordPress Development",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className="typewriter"
              />
            </div>

            <p className="description mt-4">
              I help businesses build fast, scalable, and user-friendly websites
              using modern web technologies like React, Node.js, MongoDB,
              Shopify, and WordPress. With a focus on clean code and intuitive
              design, I deliver digital experiences that stand out.
            </p>

            <div className="social-icons mt-4">
              <a
                href="https://github.com/mamoonayoob"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/mamoonayoob"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/mamoonayoob"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter size={24} />
              </a>
            </div>

            <div className="buttons mt-4">
              <Button as={Link} to="/projects" className="btn primary">
                View Projects
              </Button>
              <Button as={Link} to="/contact" className="btn secondary ms-3">
                Contact Me
              </Button>
            </div>
          </Col>

          <Col lg={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="profile-image-container"
            >
              <div className="image-frame tech-animation-container">
                <img src={techAnimation} alt="Tech Animation" className="tech-animation-image" />
              </div>
              <div className="floating-card card1">
                <span className="card-icon">🚀</span>
                <span className="card-text">20+ Projects</span>
              </div>
              <div className="floating-card card2">
                <span className="card-icon">🏆</span>
                <span className="card-text">2+ Years Experience</span>
              </div>
              <div className="floating-card card3">
                <span className="card-icon">🎓</span>
                <span className="card-text">BS Computer Science</span>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
