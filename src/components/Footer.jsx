import "../styles/Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2>Explore Pakistan</h2>
      <p>
        Discover the beauty of Pakistan with unforgettable travel experiences.
      </p>
      <div className="footer-contact">
        <p>
          <FaMapMarkerAlt /> Islamabad, Pakistan
        </p>
        <p>
          <FaPhoneAlt /> +92 300 1234567
        </p>
        <p>
          <FaEnvelope /> info@explorepakistan.com
        </p>
      </div>
      <p className="copyright">© 2026 Explore Pakistan. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
