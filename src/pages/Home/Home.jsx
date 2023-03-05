import { Stack } from "react-bootstrap";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Stack direction="vertical" gap={3}>
        <div className="home-title">
          <h1>We crush minimal design.</h1>
        </div>
        <div className="home-desc">
          <p>
            MONOCHROME is a creative agency based in Chicago. We developed the
            Genesis Framework and build mobile-optimized themes for WordPress.
          </p>
        </div>
      </Stack>
    </div>
  );
};

export default Home;
