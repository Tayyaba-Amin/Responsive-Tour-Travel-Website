import "../styles/Hero.css";
import heroImage from "../assets/images/hero.avif";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <h1>Explore Pakistan</h1>
        <p>
          Discover breathtaking mountains, valleys, and unforgettable
          adventures.
        </p>
        <button>Book Your Adventure</button>
      </div>
    </section>
  );
}

export default Hero;
