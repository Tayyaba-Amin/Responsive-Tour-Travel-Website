import { Hero } from "../components/Hero";
import servicehero from "../assets/images/servicehero.avif";
import { Footer } from "../components/Footer";
import { ServiceSection } from "../components/ServiceSection";
export const Service = () => {
  return (
    <>
      <Hero
        image={servicehero}
        title="Our services"
        description="From exciting tour packages to hotel reservations and travel planning, we provide everything you need for a comfortable and memorable journey."
      />
      <ServiceSection />
      <Footer />
    </>
  );
};
