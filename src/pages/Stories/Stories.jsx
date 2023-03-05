import { Stack } from "react-bootstrap";
import "./stories.scss";
import StoryCards from "../../components/StoryCards";
import img1 from "../../assets/Images/P1.png";
import img2 from "../../assets/Images/P2.png";
import img3 from "../../assets/Images/P3.png";
import img4 from "../../assets/Images/P4.png";
import KnowMore from "../../components/Footer/KnowMore";

const Stories = () => {
  return (
    <div className="stories">
      <Stack direction="vertical" gap={3}>
        <div className="stories-title">
          <h1>We create stories</h1>
        </div>
        <div className="stories-desc">
          <p>A killer narrative will turn your readers into raving fans</p>
        </div>
        <hr></hr>
        <Stack direction="horizontal" gap={5}>
          <StoryCards
            title="OVERCOMING CREATIVE BLOCK"
            description="Brain Gardner . May 1,2017"
            image={img1}
          ></StoryCards>
          <StoryCards
            title="WHY COMMUNICATION IS KEY"
            description="Brain Gardner . May 1,2017"
            image={img2}
          ></StoryCards>
        </Stack>
        <Stack direction="horizontal" gap={5}>
          <StoryCards
            title="THE PATH OF LEAST RESISTANCE"
            description="Brain Gardner . May 1,2017"
            image={img3}
          ></StoryCards>
          <StoryCards
            title="HOW TO REACH NEW HEIGHTS"
            description="Brain Gardner . May 1,2017"
            image={img4}
          ></StoryCards>
        </Stack>
        <KnowMore></KnowMore>
      </Stack>
    </div>
  );
};

export default Stories;
