import { Stack } from "react-bootstrap";
import "./brands.scss";
import lesavenirs from "../../assets/Images/lesavenirs.png";
import avecsimple from "../../assets/Images/avecsimple.png";
import barcelona33 from "../../assets/Images/barcelona33.png";
import mnmalsm from "../../assets/Images/mnmalsm.png";
import smoothvanilla from "../../assets/Images/smoothvanilla.png";
import whitespace from "../../assets/Images/whitespace.png";
const Brands = () => {
  return (
    <div className="brand">
      <Stack direction="vertical" gap={3}>
        <div className="brand-title">
          <h1>We design brands.</h1>
        </div>
        <div className="brand-desc">
          <p>A simple look is all you need to crush your competition.</p>
        </div>
        <hr />
      </Stack>

      <Stack direction="horizontal" gap={5}>
        <img src={lesavenirs} alt="brand-logo"></img>
        <img src={avecsimple} alt="brand-logo"></img>
        <img src={whitespace} alt="brand-logo"></img>
        <img src={mnmalsm} alt="brand-logo"></img>
        <img src={barcelona33} alt="brand-logo"></img>
        <img src={smoothvanilla} alt="brand-logo"></img>
      </Stack>
    </div>
  );
};

export default Brands;
