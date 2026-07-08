import story from "../assets/images/story.avif";
import "./StoryStyles.css";
export const Story = () => {
  return (
    <div className="story">
      <h2>Our Story</h2>
      <div className="story-content">
        <img src={story} />
        <p>
          Founded with a passion for travel, our agency is dedicated to helping
          people discover beautiful destinations and create unforgettable
          memories. We believe that every journey should be comfortable,
          enjoyable, and full of exciting experiences.
        </p>
      </div>
    </div>
  );
};
