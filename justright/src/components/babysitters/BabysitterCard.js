import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import Picture from "../../assets/Profile Picture.png";

class BabysitterCard extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "12rem" }}>
          <Card.Img
            variant="top"
            src={Picture}
            style={{ height: "200px", width: "192px" }}
          />
          <Card.Body>
            <Card.Title>
              {this.props.babysitter.first_name} {this.props.babysitter.last_name}
            </Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default BabysitterCard;
