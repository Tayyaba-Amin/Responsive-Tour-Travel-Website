import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import { Card } from "./Card";
import "./ServiceSectionStyles.css";
export const ServiceSection = () => {
  const services = [
    {
      id: 1,
      image: service1,
      name: "Tour Packages",
      description:
        "Discover carefully planned tour packages that help you explore beautiful destinations with ease.",
    },
    {
      id: 2,
      image: service2,
      name: "Hotel Booking",
      description:
        "Find comfortable and affordable accommodations that make your stay relaxing and memorable.",
    },
    {
      id: 3,
      image: service3,
      name: "Transportation",
      description:
        "Travel safely and comfortably with our reliable transportation services throughout your trip.",
    },
  ];
  return (
    <div className="service-section">
      <h2>Our Travel Services</h2>
      <p>
        We provide a range of travel services to make every journey convenient,
        comfortable, and memorable. Whether you're planning a family vacation or
        an adventure trip, we've got you covered.
      </p>
      <section className="service-grid">
        {services.map((service) => {
          return (
            <Card
              key={service.id}
              image={service.image}
              name={service.name}
              description={service.description}
            />
          );
        })}
      </section>
    </div>
  );
};
