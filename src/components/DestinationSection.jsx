import hunza from "../assets/images/hunza.jpg";
import skardu from "../assets/images/skardu.jpg";
import murree from "../assets/images/murree.jpg";
import { Card } from "./Card";
import "./DestinationSectionStyles.css";
export const DestinationSection = () => {
  const destinations = [
    {
      id: 1,
      image: hunza,
      name: "Hunza Valley",
      description:
        "A breathtaking valley surrounded by majestic mountains and crystal-clear lakes.",
    },
    {
      id: 2,
      image: skardu,
      name: "Skardu",
      description:
        "A paradise for nature lovers, offering stunning views and unforgettale adventures.",
    },
    {
      id: 3,
      image: murree,
      name: "Murree",
      description:
        "A charming hill station perfect for family vacations and relaxing getaways.",
    },
  ];
  return (
    <div className="destination-section">
      <h2>Popular Destinations</h2>
      <p>
        Discover some of our most loved destinations, each offering unique
        landscapes, unforgettable experiences,and lasting memories
      </p>
      <section className="destination-grid">
        {destinations.map((destination) => {
          return (
            <Card
              key={destination.id}
              image={destination.image}
              name={destination.name}
              description={destination.description}
            />
          );
        })}
      </section>
    </div>
  );
};
