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
import { MDBBtn } from "mdbreact";
import Picture from "../../assets/Profile Picture.png";
import Steven from "../../assets/Steven.png";
import Catrina from "../../assets/Catrina.png";
import Sanam from "../../assets/Sanam.png";
import Kosi from "../../assets/kosi.png";
import Penn from "../../assets/Penn.jpeg";
import Roan from "../../assets/Roan.png";
import Solomon from "../../assets/Solomon.png";
import Claudia from "../../assets/Claudia.png";
import Christina from "../../assets/Christina.png";

class BabysitterCard extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "13rem" }}>
          {this.props.babysitter.image === "../../assets/Steven.png" ? (
            <Card.Img
              variant="top"
              src={Steven}
              style={{ height: "200px", width: "208px" }}
            />
          ) : this.props.babysitter.image === "../../assets/Christina.png" ? (
            <Card.Img
              variant="top"
              src={Christina}
              style={{ height: "200px", width: "208px" }}
            />
          ) : this.props.babysitter.image === "../../assets/Sanam.png" ? (
            <Card.Img
              variant="top"
              src={Sanam}
              style={{ height: "200px", width: "208px" }}
            />
          ) : this.props.babysitter.image === "../../assets/kosi.png" ? (
            <Card.Img
              variant="top"
              src={Kosi}
              style={{ height: "200px", width: "208px" }}
            />
          ) : this.props.babysitter.image === "../../assets/Roan.png" ? (
            <Card.Img
              variant="top"
              src={Roan}
              style={{ height: "200px", width: "208px" }}
            />
          ) : this.props.babysitter.image === "../../assets/Claudia.png" ? (
            <Card.Img
              variant="top"
              src={Claudia}
              style={{ height: "200px", width: "208px" }}
            />
          ) : this.props.babysitter.image === "../../assets/Penn.jpeg" ? (
            <Card.Img
              variant="top"
              src={Penn}
              style={{ height: "200px", width: "208px" }}
            />
          ) : this.props.babysitter.image === "../../assets/Catrina.png" ? (
            <Card.Img
              variant="top"
              src={Catrina}
              style={{ height: "200px", width: "208px" }}
            />
          ) : this.props.babysitter.image === "../../assets/Solomon.png" ? (
            <Card.Img
              variant="top"
              src={Solomon}
              style={{ height: "200px", width: "208px" }}
            />
          ) : null}
          <Card.Body style={{ backgroundColor: "#14213d" }}>
            <Card.Title style={{ color: "#fca311" }}>
              {this.props.babysitter.first_name}{" "}
              {this.props.babysitter.last_name}
            </Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <MDBBtn outline rounded variant="primary">Details</MDBBtn>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default BabysitterCard;
