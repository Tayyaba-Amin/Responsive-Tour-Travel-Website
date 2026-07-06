import "../styles/TestimonialCard.css";

function TestimonialCard({ name, review, image }) {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>"{review}"</p>
      <div className="stars">★★★★★</div>
    </div>
  );
}

export default TestimonialCard;
