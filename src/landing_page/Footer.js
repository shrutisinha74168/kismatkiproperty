import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#002242", padding: "50px 0", color: "white" }}>
      <div className="container">
        <div className="row gy-4">
          {/* Logo and social */}
          <div className="col-md-4">
            <img
              src="/assets/logo1.png"
              alt="Logo"
              style={{ width: "150px", marginBottom: "15px" }}
            />
            <p>
              Empowering your real estate journey. © 2025 Kismat Ki Property.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled small">
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/properties" className="text-white text-decoration-none">Properties</a></li>
              <li><a href="/careers" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="/media" className="text-white text-decoration-none">Media</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-2">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="/faq" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/terms" className="text-white text-decoration-none">Terms</a></li>
              <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small mb-1">Kismat Ki Property Pvt. Ltd.</p>
            <p className="small mb-1">B-1/628, 2nd Floor, Pillar No- 570, Near Dell Showroom, Janakpuri East Metro Station, New Delhi</p>
            <p className="small mb-1">Email: Property.charukhanna@gmail.com</p>
            <p className="small mb-1">Phone: +91 8595076589</p>
            <p className="small">Office Hours: Mon - Sat, 10AM to 7PM</p>
          </div>

          {/* Mobile App & Payment */}
           
          <div className="d-flex justify-content-center">
         <img src="/assets/Google play.webp"alt="Google Play"
      style={{ width: "150px", marginBottom: "15px" }}
    />
          </div>
        </div>

        <hr className="my-4 border-light" />

        <div className="text-center small">
          Made with ❤️ by <strong>Kismat Ki Property</strong> | All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
