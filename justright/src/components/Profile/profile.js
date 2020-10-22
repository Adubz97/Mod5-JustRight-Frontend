import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  CardColumns,
  Modal,
  Col,
  Row,
  Image
} from "react-bootstrap";
import Picture from "../../assets/Profile Picture.png";

class Profile extends Component {
  // state = {
  //   modal8: false,
  //   modal9: false,
  // };

  // toggle = (nr) => () => {
  //   let modalNumber = "modal" + nr;
  //   this.setState({
  //     [modalNumber]: !this.state[modalNumber],
  //   });
  // };

  render() {
    return (
      <div>
        <MDBContainer>
          {/* <MDBBtn color="info" onClick={this.toggle(8)}>
            Right
          </MDBBtn> */}
          <MDBModal
            isOpen={this.props.modal8}
            toggle={this.props.toggle(8)}
            fullHeight
            position="right"
          >
            <MDBModalHeader
              style={{
                backgroundColor: "#14213d",
                // position: "relative",
                // left: "150px",
                color: "#219ebc",
              }}
              toggle={this.props.toggle(8)}
            >
              <h3
                style={{
                  color: "#219ebc",
                  position: "relative",
                  left: "150px",
                }}
              >
                Profile
              </h3>
            </MDBModalHeader>
            <MDBModalBody style={{ backgroundColor: "#14213d" }}>
              <Container>
                <Row>
                  <Col xs={6} md={4}>
                    {/* <Image src="holder.js/171x180" rounded /> */}
                  </Col>
                  <Col xs={6} md={4}>
                    <Image src={Picture} roundedCircle style={{width: "8rem",position:"relative", left: "40px"}}/>
                  </Col>
                  <Col xs={6} md={4}>
                    {/* <Image src="holder.js/171x180" thumbnail /> */}
                  </Col>
                </Row>
              </Container>
              <br/>
              This is where all the magic about to happen, VERY SOON!
            </MDBModalBody>
            <MDBModalFooter style={{ backgroundColor: "#14213d" }}>
              <MDBBtn
                outline
                rounded
                color="warning"
                onClick={this.props.toggle(8)}
              >
                Close
              </MDBBtn>
              <MDBBtn outline rounded color="warning">
                Submit changes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default Profile;
