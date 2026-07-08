import "./MissionVisionStyles.css";
export const MissionVision = () => {
  return (
    <div className="mission-vision">
      <h2>Mission & Vision</h2>
      <p>
        Our mission and vision guide everything we do, helping us provide
        exceptional travel experiences and build lasting relationships with our
        travelers.
      </p>
      <div className="mission-vision-card">
        <div className="mv-card">
          <h3>Our Mission</h3>
          <p>
            To provide safe, affordable, and memorable travel experiences while
            delivering excellent customer service.
          </p>
        </div>
        <div className="mv-card">
          <h3>Our Vision</h3>
          <p>
            To inspire people to explore the world with confidence and become a
            trusted name in the travel industry.
          </p>
        </div>
      </div>
    </div>
  );
};
