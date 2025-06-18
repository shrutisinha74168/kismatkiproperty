import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-white shadow-sm"
      style={{ zIndex: 999 }}
    >
      <div className="container py-2">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/logo.png"
            alt="Kismat Ki Property Logo"
            style={{ height: "45px", objectFit: "contain" }}
          />
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4 align-items-center">
            {["Home", "Properties", "About", "Contact", "Events"].map((label) => (
              <li className="nav-item" key={label}>
                <NavLink
                  to={`/${label.toLowerCase()}`}
                  className="nav-link fw-semibold text-dark"
                  activeClassName="active"
                  exact="true"
                  style={{ transition: "color 0.2s ease" }}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {/* Account Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm rounded">
                <li><NavLink to="/login" className="dropdown-item">Login</NavLink></li>
                <li><NavLink to="/profile" className="dropdown-item">Profile</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink to="/logout" className="dropdown-item">Logout</NavLink></li>
              </ul>
            </li>

            {/* Post Property Button */}
            <li className="nav-item">
              <NavLink
                to="/post-property"
                className="btn btn-primary px-4 py-2"
                style={{ borderRadius: "25px", fontWeight: 500 }}
              >
                Post Property
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

            