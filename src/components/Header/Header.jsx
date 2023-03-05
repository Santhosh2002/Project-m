import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import Logo from "../../assets/Images/Logo.png";
import "./Header.scss";
const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt=""></img>
        </Navbar.Brand>
        <Nav className="me-left">
          <Nav.Link href="#sample">Sample</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#layouts">Layouts</Nav.Link>
          <Nav.Link href="#ourShop">Our Shop</Nav.Link>
          <Nav.Link href="#buytheme">Buy Theme</Nav.Link>
          <Nav.Link href="#contact">
            <FaSistrix className="search"></FaSistrix>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
