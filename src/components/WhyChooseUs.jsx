import "../styles/WhyChooseUs.css";
import { FaMoneyBillWave, FaUserTie, FaHeadset } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why">
      <h2>Why Choose Us?</h2>
      <div className="why-container">
        <div className="why-card">
          <FaMoneyBillWave className="why-icon" />
          <h3>Best Prices</h3>
          <p>Affordable packages with no hidden charges.</p>
        </div>
        <div className="why-card">
          <FaUserTie className="why-icon" />
          <h3>Experienced Guides</h3>
          <p>Professional local guides for every destination.</p>
        </div>

        <div className="why-card">
          <FaHeadset className="why-icon" />
          <h3>24/7 Support</h3>
          <p>We're always available to help during your trip.</p>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUs;
