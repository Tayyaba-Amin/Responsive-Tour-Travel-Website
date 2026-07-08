import { Hero } from "../components/Hero";
import abouthero from "../assets/images/aboutHero.avif";
import { Story } from "../components/Story";
import { MissionVision } from "../components/MissionVision";
import { Footer } from "../components/Footer";
export const About = () => {
  return (
    <>
      <Hero
        image={abouthero}
        title="About Us"
        description="We are passionate about creating unforgettable travel experiences. 
      Our mission is to help every traveler explore beautiful destinations with comfort, safety, and confidence."
      />
      <Story />
      <MissionVision />
      <Footer />
    </>
  );
};
