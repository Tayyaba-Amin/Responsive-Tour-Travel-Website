import "./HeroStyles.css";
export const Hero = ({ image, title, description }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};
