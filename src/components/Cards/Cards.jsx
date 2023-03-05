import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./cards.scss";
const Cards = ({ title, description }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="dark">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
