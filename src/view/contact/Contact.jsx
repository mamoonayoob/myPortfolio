// import React, { useEffect } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// // import "./Projects.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import project1 from "../../assets/moon.jpg";
// import project2 from "../../assets/moon.jpg";
// import project3 from "../../assets/moon.jpg";

// const Projects = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       img: project1,
//       desc: "MERN stack eCommerce app with real-time cart, payment gateway, and admin panel.",
//       demo: "#",
//       github: "#",
//     },
//     {
//       title: "Dev Portfolio",
//       img: project2,
//       desc: "A responsive React portfolio with animated sections and smooth scrolling.",
//       demo: "#",
//       github: "#",
//     },
//     {
//       title: "Real-Time Chat App",
//       img: project3,
//       desc: "Live chat app using Socket.IO, Node.js backend, and MongoDB with JWT auth.",
//       demo: "#",
//       github: "#",
//     },
//   ];

//   return (
//     <section className="projects-section">
//       <Container>
//         <h2 className="section-title" data-aos="fade-down">
//           ✨ My Projects ✨
//         </h2>
//         <Row>
//           {projects.map((proj, index) => (
//             <Col md={4} sm={12} key={index} className="mb-4" data-aos="fade-up">
//               <Card className="project-card">
//                 <Card.Img variant="top" src={proj.img} />
//                 <Card.Body>
//                   <Card.Title>{proj.title}</Card.Title>
//                   <Card.Text>{proj.desc}</Card.Text>
//                   <div className="project-buttons">
//                     <Button variant="primary" href={proj.demo} target="_blank">
//                       Live Demo
//                     </Button>
//                     <Button
//                       variant="outline-light"
//                       href={proj.github}
//                       target="_blank"
//                     >
//                       GitHub
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Projects;

/* ---------------------------------------projects css------------------------------------------------ */

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Contact = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section className="contact-wrapper py-5">
//       <div className="container">
//         <h2 className="text-center mb-5 heading-text" data-aos="fade-down">
//           Contact Us
//         </h2>

//         <div className="row align-items-center">
//           {/* Left Side Modern Text */}
//           <div className="col-md-5 mb-4" data-aos="fade-right">
//             <div className="left-side-box">
//               <h3 className="left-heading">Let’s Connect</h3>
//               <p>
//                 Got a project or idea? Let's collaborate and make something
//                 amazing together. Fill the form and let's get started!
//               </p>
//             </div>
//           </div>

//           {/* Right Side Form */}
//           <div className="col-md-7" data-aos="fade-left">
//             <form className="contact-form">
//               <div className="input-box full-border">
//                 <input type="text" required />
//                 <span>Name</span>
//               </div>
//               <div className="input-box full-border">
//                 <input type="email" required />
//                 <span>Email</span>
//               </div>
//               <div className="input-box full-border">
//                 <textarea rows="4" required></textarea>
//                 <span>Message</span>
//               </div>

//               <button type="submit" className="btn-submit">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "bottom-right",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-wrapper py-5 mt-5">
      <ToastContainer />
      <div className="container">
        <h2 className="text-center mb-5 heading-text" data-aos="fade-down">
          Contact Us
        </h2>

        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-5 mb-4" data-aos="fade-right">
            <div className="left-side-modern">
              <h3>📬 Get in Touch</h3>
              <p>Let’s connect and create something amazing together!</p>
              <ul className="contact-info">
                <li>📧 mamoonayoob@gmail.com</li>
                <li>📞 +92-304-4020940</li>
                <li>📍 Lahore, Pakistan</li>
              </ul>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-md-7" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-box full-border">
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span>Name</span>
              </div>
              <div className="input-box full-border">
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span>Email</span>
              </div>
              <div className="input-box full-border">
                <textarea
                  rows="4"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <span>Message</span>
              </div>

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
