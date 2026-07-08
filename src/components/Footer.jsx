import "./FooterStyles.css";
export const Footer = () => {
  return (
    <div className="footer">
      <h2>Travel Explorer</h2>
      <p>Explore the world with comfort and confidence.</p>
      <div className="contact-info">
        <p>
          <i className="fa-solid fa-location-dot"></i>Gujrat, Pakistan
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> info@travelexplorer.com
        </p>
        <p>
          <i className="fa-solid fa-phone"></i>+92 123 4567890
        </p>
      </div>
      <p>
        <i className="fa-regular fa-copyright"></i>2026 Travel Explorer. All
        Rights Reserved.
      </p>
    </div>
  );
};
