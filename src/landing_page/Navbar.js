import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-white shadow-sm"
      style={{ zIndex: 999 }}
    >
      <div className="container py-1">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/logo1.png"
            alt="Kismat Ki Property Logo"
            style={{
              height: "50px",
              width: "auto",
              objectFit: "contain",
              padding: "2px 12px",
            }}
            className="d-inline-block align-top logo-img"
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

        {/* Menu Items + Buttons */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          {/* Center Menu */}
          <ul className="navbar-nav mx-auto gap-4 align-items-center">
            {["Home", "Properties", "About", "Contact", "Events", "Package"].map(
              (label) => (
                <li className="nav-item" key={label}>
                  <NavLink
                    to={`/${label.toLowerCase()}`}
                    className={({ isActive }) =>
                      `nav-link fw-semibold text-dark ${isActive ? "active" : ""}`
                    }
                    style={{ transition: "color 0.2s ease" }}
                  >
                    {label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Right Corner Buttons */}
          <div className="d-flex gap-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `btn btn-primary px-3 py-1 rounded-pill ${isActive ? "active" : ""}`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `btn btn-success px-3 py-1 rounded-pill ${isActive ? "active" : ""}`
              }
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>

      {/* Responsive Style for Logo */}
      <style>
        {`
          @media (max-width: 768px) {
            .logo-img {
              height: 55px !important;
              padding: 2px 8px !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
