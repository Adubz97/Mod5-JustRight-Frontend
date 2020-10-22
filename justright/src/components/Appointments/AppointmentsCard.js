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
import Picture from "../../assets/appointment.png";


class AppointmentsCard extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={Picture}
            style={{ height: "200px", width: "320px" }}
          />
          <Card.Body style={{ backgroundColor: "#14213d" }}>
            <Card.Title>
              {/* id:{this.props.appointment.id} <br /> */}
              {/* jobpost id:{this.props.appointment.job_post_id} <br /> */}
              <h4 style={{ color: "#fca311" }}>
                start time:{" "}
                <a style={{ color: "#219ebc" }}>
                  {this.props.appointment.start_time}
                </a>
              </h4>
              <h4 style={{ color: "#fca311" }}>
                {" "}
                end time:{" "}
                <a style={{ color: "#219ebc" }}>
                  {this.props.appointment.end_time}
                </a>
              </h4>
              <h4 style={{ color: "#fca311" }}>
                {" "}
                location:{" "}
                <a style={{ color: "#219ebc" }}>
                  {this.props.appointment.location}
                </a>
              </h4>
            </Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            {/* <Button variant="primary">Details</Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default AppointmentsCard;
