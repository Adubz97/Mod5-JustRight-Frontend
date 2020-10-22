import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  Modal
} from "react-bootstrap";
import Picture from "../../assets/Profile Picture.png";
import Jobpostdetails from "./jobpostdetails.js"

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
            src={
              "https://www.moneycrashers.com/wp-content/uploads/2018/08/tutoring-papers-1068x713.jpg"
            }
            style={{ height: "200px", width: "192px" }}
          />
          <Card.Body>
            <Card.Title>{this.props.jobpost.title}</Card.Title>
            <Card.Text>{this.props.jobpost.description}</Card.Text>
            <Card.Text>{this.props.jobpost.payrate}</Card.Text>
            {/* <Button
              onClick={() => this.props.setModalShow(true)}
              variant="primary"
            >
              Submit Offer
            </Button> */}
        <Jobpostdetails
          // show={this.props.modalShow}
          // onHide={() => this.props.setModalShow(false)}
          // title={this.props.jobpost.title}
          // description={this.props.jobpost.description}
              jobpost={this.props.jobpost}
        />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default JobPostCard;
