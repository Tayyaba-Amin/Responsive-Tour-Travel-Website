import "../styles/PackageSection.css";
import PackageCard from "./PackageCard";

function PackageSection({ packages }) {
  return (
    <section className="package-section" id="packages">
      <div className="package-grid">
        {packages.map((item) => (
          <PackageCard
            key={item.id}
            title={item.title}
            duration={item.duration}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default PackageSection;
