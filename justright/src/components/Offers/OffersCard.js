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

class OffersCard extends React.Component {
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
              caregiver id: {this.props.offer.caregiver_id} <br/>
              jobpost id: {this.props.offer.job_post_id} <br/>
              description: {this.props.offer.description} <br/>
              payrate: {this.props.offer.payrate} <br/>
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
export default OffersCard;
