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

class AppointmentsCard extends React.Component {
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
              id:{this.props.appointment.id} <br />
              jobpost id:{this.props.appointment.job_post_id} <br />
              start time:{this.props.appointment.start_time}{" "} <br/>
              end time:{this.props.appointment.end_time}{" "} <br/>
              location:{this.props.appointment.location} {/* {this.props.offer.} */}
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
export default AppointmentsCard;
