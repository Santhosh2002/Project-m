import "./footer.scss";
import logo from "../../assets/Images/darklogo.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <p>Handcrafted with ❤ in Chicago . Powered by StudioPress</p>
      <div className="Social">
        <p>FACEBOOK</p>
        <p>TWITTER</p>
        <p>INSTAGRAM</p>
      </div>
    </div>
  );
};

export default Footer;
