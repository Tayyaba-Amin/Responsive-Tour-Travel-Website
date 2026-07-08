import "./ContactFormstyles.css";
export const ContactForm = () => {
  return (
    <div class="contact-us">
      <h2>Get in Touch</h2>
      <p>
        Have questions or need help planning your next trip? Fill out the form
        below, and we'll get back to you as soon as possible.
      </p>
      <form class="contact-form">
        <div class="form-group">
          <label for="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" placeholder="Subject" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
