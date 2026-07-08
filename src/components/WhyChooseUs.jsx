import "./WhyChooseUsStyles.css";
export const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p>
        We are dedicated to providing unforgettable travel experiences with
        reliable services, affordable prices, and customer satisfaction at the
        heart of every journey.
      </p>
      <div className="features">
        <div className="feature-card">
          <div>
            <i className="fa-solid fa-tags"></i>
            <h3>Affordable Packages</h3>
          </div>
          <p>
            We offer budget-friendly travel packages without compromising on
            quality.
          </p>
        </div>
        <div className="feature-card">
          <div>
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Safe & Comfortable Travel</h3>
          </div>
          <p>
            Your safety and comfort are our top priorities throughout every
            journey.
          </p>
        </div>
        <div className="feature-card">
          <div>
            <i className="fa-solid fa-headset"></i>
            <h3>24/7 Customer Support</h3>
          </div>
          <p>
            Our support team is always available to assist you before, during,
            and after your trip.
          </p>
        </div>
      </div>
    </div>
  );
};
