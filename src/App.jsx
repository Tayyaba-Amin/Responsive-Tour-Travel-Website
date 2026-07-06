import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import DestinationSection from "./components/DestinationSection";
import destinations from "./data/destinations";
import PackageSection from "./components/PackageSection";
import packages from "./data/packages";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialSection from "./components/TestimonialSection";
import testimonials from "./data/testimonials";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <SectionTitle
        title="Popular Destinations"
        subtitle="Choose your next adventure"
      />
      <DestinationSection destinations={destinations} />

      <SectionTitle
        title="Tour Packages"
        subtitle="Affordable travel plans for everyone"
      />
      <PackageSection packages={packages} />

      <WhyChooseUs />

      <SectionTitle
        title="Customer Testimonials"
        subtitle="What our happy travelers say"
      />
      <TestimonialSection testimonials={testimonials} />

      <Footer />
    </>
  );
}

export default App;
