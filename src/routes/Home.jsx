import { Hero } from "../components/Hero";
import homehero from "../assets/images/hero.avif";
import { DestinationSection } from "../components/DestinationSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <>
      <Hero
        image={homehero}
        title="Explore Pakistan With Us"
        description="Explore beautiful destinations and create unforgettable memories with our travel services"
      />
      <DestinationSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
};
