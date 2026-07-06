import "../styles/PackageCard.css";

function PackageCard({ title, duration, price, image }) {
  return (
    <div className="package-card">
      <img src={image} alt={title} />
      <div className="package-content">
        <h3>{title}</h3>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default PackageCard;
