import { Stack } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";
import "./about.scss";
const About = () => {
  return (
    <div className="about">
      <Stack direction="vertical" gap={3}>
        <div className="about-title">
          <h1>We build experience.</h1>
        </div>
        <div className="about-desc">
          <p>A minimalist approach is the the only way to design a website.</p>
        </div>
        <hr></hr>
        <Stack direction="horizontal" gap={3}>
          <Cards
            title="DESIGN"
            description="With an emphasis on typography, white space, and mobile-optimazed design, your website will look absolutely breathtaking"
          ></Cards>
          <Cards
            title="CONTENT"
            description="Our team will teach you the art Of writing audience-focused content that Will help you achieve the success you truly deserve."
          ></Cards>
          <Cards
            title="STRATEGY"
            description="We help creative entrepreneurs build their digital business by focusing on three key elements of a successful online platform."
          ></Cards>
        </Stack>
      </Stack>
    </div>
  );
};

export default About;
