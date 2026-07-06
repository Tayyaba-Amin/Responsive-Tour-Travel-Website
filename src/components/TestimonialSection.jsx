import "../styles/TestimonialSection.css";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection({ testimonials }) {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            review={item.review}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
