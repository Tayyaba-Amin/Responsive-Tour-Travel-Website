import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const [Isopen, setIsOpen] = useState(false);
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Travel Explorer</h1>
      <div className="menu-icons" onClick={() => setIsOpen(!Isopen)}>
        <i className={Isopen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </div>
      <ul className={Isopen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="nav-link">
            <i className="fa-solid fa-house"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <i className="fa-solid fa-circle-info"></i> About
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">
            <i className="fa-solid fa-briefcase"></i> Service
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <i className="fa-solid fa-envelope"></i> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
