import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from "../../assets/moon.jpg"; // your image path

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <h2 className="section-title">About Me ✨</h2>
        <h5 className="text-center">
          ✨Transforming Ideas into Digital Experience✨
        </h5>
        <Row className="align-items-center mt-5">
          {/* Left Content */}
          <Col md={6} className="about-text">
            <h3 className="intro-heading">
              Hi, I’m <span>Mamoon Ayoob</span>
            </h3>
            <p>
              A passionate Full-Stack Web Developer currently in my final year
              of BS Computer Science at UMT, Lahore. I specialize in building
              responsive and user-friendly web applications using the MERN Stack
              (MongoDB, Express.js, React.js, Node.js). With over 2 years of
              experience, I’ve worked as a Frontend Developer Intern at PITB,
              focusing on React.js, and as a Shopify and WordPress Developer at
              Gold Tech Pvt Ltd, where I developed custom eCommerce solutions
              and integrated third-party tools. I enjoy solving real-world
              problems through clean, scalable code and intuitive design.
              Whether it’s a single-page app or a complete online store, I aim
              to deliver high-quality digital experiences.
            </p>
            <div className="about-buttons">
              <Button 
                className="glow-btn" 
                href="/files/Mamoon_Ayoob_CV.pdf" 
                download="Mamoon_Ayoob_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Button>
              <Button 
                className="glow-btn1" 
                as={Link} 
                to="/projects"
              >
                View Projects
              </Button>
            </div>
          </Col>

          <Col md={6} className="about-image">
            <div className="image-glow-wrapper">
              <img src={profile} alt="profile" className="profile-img" />
            </div>
          </Col>
        </Row>

        {/* Bottom Stats */}
        <Row className="stats-row mt-5 text-center">
          <Col md={4}>
            <div className="stat-box">
              <h4>20+</h4>
              <p>Projects</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="stat-box">
              <h4>10+</h4>
              <p>Certificates</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="stat-box">
              <h4>2+ Years</h4>
              <p>Experience</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
