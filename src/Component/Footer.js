import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Footer Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">-</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5 style={{paddingLeft: "10px"}}>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/dhruvkumarchaurasia.chaurasia" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  <i className="fab fa-facebook-f me-2"></i>Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://x.com/dhruv108dstar?t=46OktKilYVKDrkXhPhb7Xg&s=09" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  <i className="fab fa-twitter me-2"></i>Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/dhruv108dstar?igsh=MTEzN292amF2MjA2dQ==" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  <i className="fab fa-instagram me-2"></i>Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: dhruv108dstar@gmail.com</p>
            <p>Phone: +91 7905950558</p>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0">
          Crafted with {"\u2764\uFE0F"} by Dhruv Star &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
