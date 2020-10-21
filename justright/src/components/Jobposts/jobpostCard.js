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

class JobPostCard extends React.Component {
  render() {
    return (
      <div
        // className="grid-container"
        // style={{
        //   display: "grid",
        //   flexDirection: "row",
        //   justifyContent: "center",
        //   display: "inline-block",
        //   gridTemplateColumns: "auto auto auto auto auto auto"
        // }}
      >
        <Card style={{ width: "12rem" }}>
          <Card.Img
            variant="top"
            src={Picture}
            style={{ height: "200px", width: "192px" }}
          />
          <Card.Body>
            <Card.Title>{this.props.jobpost.title}</Card.Title>
            <Card.Text>{this.props.jobpost.description}</Card.Text>
            <Card.Text>{this.props.jobpost.payrate}</Card.Text>
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default JobPostCard;
