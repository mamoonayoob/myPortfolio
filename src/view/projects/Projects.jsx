import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Nav, Modal, Card } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiTypescript,
  SiShopify,
  SiWordpress,
} from "react-icons/si";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const tabsRef = useRef([]);

  const handleSelect = (key) => {
    setActiveTab(key);
    // Force update of indicator after tab click
    setTimeout(() => {
      const activeIndex =
        key === "projects" ? 0 : key === "certificates" ? 1 : 2;
      const currentTab = tabsRef.current[activeIndex];
      if (currentTab) {
        setIndicatorStyle({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth,
        });
      }
    }, 50);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const openCertificate = (cert) => {
    setSelectedCert(cert);
    setShowCertModal(true);
  };

  useEffect(() => {
    const activeIndex =
      activeTab === "projects" ? 0 : activeTab === "certificates" ? 1 : 2;

    const currentTab = tabsRef.current[activeIndex];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="showcase-section mt-5">
      <Container>
        <h2 className="text-center heading">
          Portfolio <span>Showcase</span>
        </h2>
        <p className="text-center subheading">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>

        <div className="nav-wrapper position-relative">
          <Nav
            variant="pills"
            className="justify-content-center showcase-tabs"
            activeKey={activeTab}
            onSelect={(selectedKey) => handleSelect(selectedKey)}
          >
            {[
              { key: "projects", label: "Projects" },
              { key: "certificates", label: "Certificates" },
              { key: "techstack", label: "Tech Stack" },
            ].map((tab, index) => (
              <Nav.Item key={tab.key}>
                <Nav.Link
                  eventKey={tab.key}
                  ref={(el) => (tabsRef.current[index] = el)}
                >
                  {tab.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Smooth motion indicator */}
          <motion.span
            className="indicator-bar"
            animate={{ x: indicatorStyle.left, width: indicatorStyle.width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </div>

        <div className="tab-content-container">
          <AnimatePresence mode="wait">
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Row>
                  {[
                    {
                      id: 1,
                      title: "E-Commerce Platform",
                      image: "/images/projects/project1.jpg",
                      description:
                        "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
                      technologies: [
                        "React",
                        "Node.js",
                        "MongoDB",
                        "Express",
                        "Redux",
                        "Bootstrap",
                      ],
                      liveDemo: "https://ecommerce-demo.example.com",
                      github:
                        "https://github.com/mamoonayoob/ecommerce-platform",
                      fullDescription:
                        "A comprehensive e-commerce solution built with the MERN stack. Features include user authentication, product management, shopping cart functionality, order processing, payment gateway integration, and an admin dashboard for inventory management. The application is fully responsive and optimized for all devices.",
                    },
                    {
                      id: 2,
                      title: "Portfolio Website",
                      image: "/images/projects/project2.jpg",
                      description:
                        "A modern portfolio website showcasing projects, skills, and professional experience with smooth animations.",
                      technologies: [
                        "React",
                        "Bootstrap",
                        "Framer Motion",
                        "CSS3",
                      ],
                      liveDemo: "https://portfolio-demo.example.com",
                      github:
                        "https://github.com/mamoonayoob/portfolio-website",
                      fullDescription:
                        "A sleek, responsive portfolio website built with React and styled with Bootstrap and custom CSS. Features include smooth page transitions using Framer Motion, dynamic content rendering, contact form integration, and optimized performance metrics.",
                    },
                    {
                      id: 3,
                      title: "Task Management App",
                      image: "/images/projects/project3.jpg",
                      description:
                        "A collaborative task management application with real-time updates, user roles, and progress tracking.",
                      technologies: [
                        "React",
                        "Firebase",
                        "Redux",
                        "Material UI",
                      ],
                      liveDemo: "https://taskapp-demo.example.com",
                      github:
                        "https://github.com/mamoonayoob/task-management-app",
                      fullDescription:
                        "A feature-rich task management application built with React and Firebase. It includes real-time collaboration features, task assignment, deadline tracking, priority management, file attachments, and user role management. The app uses Firebase for authentication, database, and storage needs.",
                    },
                    {
                      id: 4,
                      title: "Shopify Custom Theme",
                      image: "/images/projects/project4.jpg",
                      description:
                        "A custom Shopify theme designed for a boutique clothing store with enhanced product visualization.",
                      technologies: [
                        "Shopify",
                        "Liquid",
                        "JavaScript",
                        "CSS3",
                        "HTML5",
                      ],
                      liveDemo: "https://shopify-theme-demo.example.com",
                      github:
                        "https://github.com/mamoonayoob/shopify-custom-theme",
                      fullDescription:
                        "A bespoke Shopify theme developed for a high-end fashion retailer. The theme features custom product pages with 360-degree product views, size guides, related products recommendations, advanced filtering options, and optimized checkout flow. The design focuses on showcasing the products with minimal distractions while maintaining brand identity.",
                    },
                    {
                      id: 5,
                      title: "Blog & Content Platform",
                      image: "/images/projects/project5.jpg",
                      description:
                        "A WordPress-based content platform with custom plugins for enhanced user engagement and content management.",
                      technologies: [
                        "WordPress",
                        "PHP",
                        "MySQL",
                        "JavaScript",
                        "CSS3",
                      ],
                      liveDemo: "https://blog-platform-demo.example.com",
                      github:
                        "https://github.com/mamoonayoob/wordpress-content-platform",
                      fullDescription:
                        "A sophisticated WordPress-based content platform designed for a digital magazine. Features include custom post types, advanced categorization, user membership levels, content restriction, newsletter integration, and social media sharing. The platform also includes custom plugins for content recommendation, reading time estimation, and SEO optimization.",
                    },
                  ].map((project) => (
                    <Col key={project.id} xs={12} sm={6} md={4} className="p-3">
                      <div className="card-box card-glass fixed-height-card">
                        <h5 className="project-title">{project.title}</h5>
                        <div className="project-image-container">
                          <img
                            src={
                              project.image ||
                              "https://via.placeholder.com/300x200?text=Project+Image"
                            }
                            alt={project.title}
                            className="img-fluid rounded project-image"
                          />
                        </div>
                        <p className="project-description">
                          {project.description}
                        </p>
                        <div className="project-tech-stack">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, index) => (
                              <span key={index} className="tech-badge">
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 3 && (
                            <span className="tech-badge">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="project-buttons mt-3">
                          <Button
                            className="glow-btn me-2"
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="me-1" /> Live Demo
                          </Button>
                          <Button
                            className="glow-btn"
                            onClick={() => openProjectDetails(project)}
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            )}

            {activeTab === "certificates" && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Row>
                  {[
                    {
                      id: 1,
                      title: "React - The Complete Guide",
                      issuer: "Udemy",
                      date: "January 2023",
                      image: "/images/certificates/cert1.jpg",
                      description:
                        "Comprehensive course covering all React concepts, hooks, Redux, and React Router.",
                    },
                    {
                      id: 2,
                      title: "MongoDB Database Developer",
                      issuer: "MongoDB University",
                      date: "March 2023",
                      image: "/images/certificates/cert2.jpg",
                      description:
                        "Official MongoDB certification for database design, querying, and optimization.",
                    },
                    {
                      id: 3,
                      title: "Advanced JavaScript Concepts",
                      issuer: "Udemy",
                      date: "May 2023",
                      image: "/images/certificates/cert3.jpg",
                      description:
                        "Deep dive into JavaScript concepts including closures, prototypes, and async patterns.",
                    },
                    {
                      id: 4,
                      title: "Shopify Theme Development",
                      issuer: "Shopify Partners Academy",
                      date: "July 2023",
                      image: "/images/certificates/cert4.jpg",
                      description:
                        "Professional certification for building custom Shopify themes and app integrations.",
                    },
                    {
                      id: 5,
                      title: "Full Stack Web Development",
                      issuer: "freeCodeCamp",
                      date: "September 2022",
                      image: "/images/certificates/cert5.jpg",
                      description:
                        "Comprehensive certification covering front-end and back-end web development.",
                    },
                  ].map((cert) => (
                    <Col key={cert.id} xs={6} sm={4} md={3} className="p-3">
                      <div
                        className="cert-card fixed-height-card"
                        onClick={() => openCertificate(cert)}
                      >
                        <div className="cert-image-container">
                          <img
                            src={
                              cert.image ||
                              "https://via.placeholder.com/200?text=Certificate"
                            }
                            alt={cert.title}
                            className="img-fluid rounded cert-image"
                          />
                        </div>
                        <div className="cert-info p-2">
                          <h6 className="cert-title">{cert.title}</h6>
                          <p className="cert-issuer mb-0">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            )}

            {activeTab === "techstack" && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="tech-category mb-4">
                  <h4 className="tech-category-title">Frontend</h4>
                  <Row>
                    {[
                      {
                        name: "React",
                        icon: (
                          <FaReact size={40} className="tech-icon react-icon" />
                        ),
                      },
                      {
                        name: "JavaScript",
                        icon: <FaJs size={40} className="tech-icon js-icon" />,
                      },
                      {
                        name: "TypeScript",
                        icon: (
                          <SiTypescript
                            size={40}
                            className="tech-icon typescript-icon"
                          />
                        ),
                      },
                      {
                        name: "HTML5",
                        icon: (
                          <FaHtml5 size={40} className="tech-icon html-icon" />
                        ),
                      },
                      {
                        name: "CSS3",
                        icon: (
                          <FaCss3Alt size={40} className="tech-icon css-icon" />
                        ),
                      },
                      {
                        name: "Bootstrap",
                        icon: (
                          <FaBootstrap
                            size={40}
                            className="tech-icon bootstrap-icon"
                          />
                        ),
                      },
                      {
                        name: "Tailwind CSS",
                        icon: (
                          <SiTailwindcss
                            size={40}
                            className="tech-icon tailwind-icon"
                          />
                        ),
                      },
                      {
                        name: "Redux",
                        icon: (
                          <SiRedux size={40} className="tech-icon redux-icon" />
                        ),
                      },
                    ].map((tech) => (
                      <Col
                        key={tech.name}
                        xs={4}
                        sm={3}
                        md={2}
                        className="p-3 text-center"
                      >
                        <div className="tech-icon-box card-glass fixed-height-card">
                          {tech.icon}
                          <p className="mt-2">{tech.name}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="tech-category mb-4">
                  <h4 className="tech-category-title">Backend</h4>
                  <Row>
                    {[
                      {
                        name: "Node.js",
                        icon: (
                          <FaNodeJs size={40} className="tech-icon node-icon" />
                        ),
                      },
                      {
                        name: "MongoDB",
                        icon: (
                          <SiMongodb
                            size={40}
                            className="tech-icon mongodb-icon"
                          />
                        ),
                      },
                      {
                        name: "Express",
                        icon: (
                          <SiExpress
                            size={40}
                            className="tech-icon express-icon"
                          />
                        ),
                      },
                      {
                        name: "PHP",
                        icon: (
                          <FaPhp size={40} className="tech-icon php-icon" />
                        ),
                      },
                      {
                        name: "MySQL",
                        icon: (
                          <FaDatabase
                            size={40}
                            className="tech-icon mysql-icon"
                          />
                        ),
                      },
                    ].map((tech) => (
                      <Col
                        key={tech.name}
                        xs={4}
                        sm={3}
                        md={2}
                        className="p-3 text-center"
                      >
                        <div className="tech-icon-box card-glass fixed-height-card">
                          {tech.icon}
                          <p className="mt-2">{tech.name}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="tech-category mb-4">
                  <h4 className="tech-category-title">E-commerce</h4>
                  <Row>
                    {[
                      {
                        name: "Shopify",
                        icon: (
                          <SiShopify
                            size={40}
                            className="tech-icon shopify-icon"
                          />
                        ),
                      },
                      {
                        name: "WordPress",
                        icon: (
                          <SiWordpress
                            size={40}
                            className="tech-icon wordpress-icon"
                          />
                        ),
                      },
                    ].map((tech) => (
                      <Col
                        key={tech.name}
                        xs={4}
                        sm={3}
                        md={2}
                        className="p-3 text-center"
                      >
                        <div className="tech-icon-box card-glass fixed-height-card">
                          {tech.icon}
                          <p className="mt-2">{tech.name}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="tech-category mb-4">
                  <h4 className="tech-category-title">Database</h4>
                  <Row>
                    {[
                      {
                        name: "Firebase",
                        icon: (
                          <SiFirebase
                            size={40}
                            className="tech-icon firebase-icon"
                          />
                        ),
                      },
                      {
                        name: "MySQL",
                        icon: (
                          <FaDatabase
                            size={40}
                            className="tech-icon mysql-icon"
                          />
                        ),
                      },
                    ].map((tech) => (
                      <Col
                        key={tech.name}
                        xs={4}
                        sm={3}
                        md={2}
                        className="p-3 text-center"
                      >
                        <div className="tech-icon-box card-glass fixed-height-card">
                          {tech.icon}
                          <p className="mt-2">{tech.name}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="tech-category mb-4">
                  <h4 className="tech-category-title">Version Control</h4>
                  <Row>
                    {[
                      {
                        name: "GitHub",
                        icon: (
                          <FaGithub
                            size={40}
                            className="tech-icon github-icon"
                          />
                        ),
                      },
                    ].map((tech) => (
                      <Col
                        key={tech.name}
                        xs={4}
                        sm={3}
                        md={2}
                        className="p-3 text-center"
                      >
                        <div className="tech-icon-box card-glass fixed-height-card">
                          {tech.icon}
                          <p className="mt-2">{tech.name}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>

      {/* Project Details Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <div className="project-modal-image-container">
                    <img
                      src={
                        selectedProject.image ||
                        "https://via.placeholder.com/400x300?text=Project+Image"
                      }
                      alt={selectedProject.title}
                      className="img-fluid rounded project-modal-image"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <h5>Description</h5>
                  <p>{selectedProject.fullDescription}</p>

                  <h5 className="mt-3">Technologies Used</h5>
                  <div className="tech-stack-container">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => setShowModal(false)}
                className="btn-glass me-2"
              >
                Close
              </Button>
              <Button
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn me-2"
              >
                <FaExternalLinkAlt className="me-1" /> Live Demo
              </Button>
              <Button
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github ms-2"
              >
                <FaGithub className="me-1" /> GitHub
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Certificate Modal */}
      <Modal
        show={showCertModal}
        onHide={() => setShowCertModal(false)}
        centered
        className="cert-modal"
      >
        {selectedCert && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCert.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <div className="cert-modal-image-container">
                <img
                  src={
                    selectedCert.image ||
                    "https://via.placeholder.com/600x400?text=Certificate"
                  }
                  alt={selectedCert.title}
                  className="img-fluid rounded cert-modal-image"
                />
              </div>
              <Card className="cert-details-card">
                <Card.Body>
                  <h5>{selectedCert.title}</h5>
                  <p>
                    <strong>Issuer:</strong> {selectedCert.issuer}
                  </p>
                  <p>
                    <strong>Date:</strong> {selectedCert.date}
                  </p>
                  <p>
                    <strong>Description:</strong> {selectedCert.description}
                  </p>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="btn-glass"
                onClick={() => setShowCertModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Showcase;
