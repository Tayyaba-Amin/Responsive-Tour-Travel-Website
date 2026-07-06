import "../styles/DestinationSection.css";
import DestinationCard from "./DestinationCard";

function DestinationSection({ destinations }) {
  return (
    <section id="destinations" className="destination-section">
      <div className="destination-grid">
        {destinations.map((item) => (
          <DestinationCard
            key={item.id}
            city={item.city}
            country={item.country}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default DestinationSection;
