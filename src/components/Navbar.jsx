import "../styles/Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes, FaMountain } from "react-icons/fa";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <FaMountain className="logo-icon" />
        <h2>Explore Pakistan</h2>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#destinations" onClick={() => setMenuOpen(false)}>
            Destinations
          </a>
        </li>
        <li>
          <a href="#packages" onClick={() => setMenuOpen(false)}>
            Packages
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
