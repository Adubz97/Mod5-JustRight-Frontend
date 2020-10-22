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
import Picture from "../../assets/offer.png";
import { MDBBtn } from "mdbreact";
import Createappointment from "../Appointments/createAppointment.js";

class OffersCard extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src={Picture}
            style={{ height: "200px", width: "352px" }}
          />
          <Card.Body style={{ backgroundColor: "#14213d" }}>
            <Card.Title>
              {/* caregiver id: {this.props.offer.caregiver_id} <br /> */}
              {/* jobpost id: {this.props.offer.job_post_id} <br /> */}
              <h4 style={{ color: "#fca311" }}>
                description:
                <h4 style={{ color: "#219ebc" }}>
                  {this.props.offer.description}
                </h4>
              </h4>
              <h4 style={{ color: "#fca311" }}>
                payrate:{" "}
                <a style={{ color: "#219ebc" }}>{this.props.offer.payrate}</a>
              </h4>
            </Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <Form inline>
              <Createappointment
                offer={this.props.offer}
                addAppointment={this.props.addAppointment}
              />
              <MDBBtn
                outline
                rounded
                variant="primary"
                variant="outline-primary"
              >
                Deny
              </MDBBtn>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default OffersCard;
