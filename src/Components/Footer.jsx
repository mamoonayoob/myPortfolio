import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h4 className="footer-logo">QuickMart</h4>
            <p className="footer-desc">
              Building modern, scalable web apps using the MERN Stack.
            </p>
            <div className="social-icons">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaLinkedinIn />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Policies</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Newsletter</h5>
            <p>Stay updated with latest tech news.</p>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-2"
              />
              <button className="btn-subscribe">Subscribe</button>
            </form>
          </div>
        </div>

        <hr className="footer-divider" />

        <p className="footer-copy text-center mb-0">
          &copy; {new Date().getFullYear()} QuickMart. All rights reserved.
        </p>

        {/* Scroll to Top */}
        <div className="scroll-top-btn" onClick={scrollTop}>
          <FaArrowUp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
