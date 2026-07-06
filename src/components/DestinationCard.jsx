import "../styles/DestinationCard.css";

function DestinationCard({ city, country, image }) {
  return (
    <div className="destination-card">
      <img src={image} alt={city} />

      <div className="card-content">
        <h3>{city}</h3>
        <p>{country}</p>

        <button>View Details</button>
      </div>
    </div>
  );
}

export default DestinationCard;
