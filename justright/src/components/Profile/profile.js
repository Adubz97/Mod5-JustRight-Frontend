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
import logo from "../../assets/full-logo.png";

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
                    <Image
                      src={Picture}
                      roundedCircle
                      style={{
                        width: "8rem",
                        position: "relative",
                        left: "40px",
                      }}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    {/* <Image src="holder.js/171x180" thumbnail /> */}
                  </Col>
                </Row>
              </Container>
              <img
                src={logo}
                style={{
                  position: "relative",
                  left: "35px",
                  top: "400px",
                  width: "300px",
                }}
              />
              <h3
                style={{
                  position: "relative",
                  left: "95px",
                  top: "-55px",
                  width: "300px",
                  color: "#fca311",
                }}
              >
                Abdullah Albasha
              </h3>
              <h3
                style={{
                  position: "relative",
                  left: "65px",
                  top: "-35px",
                  width: "300px",
                  color: "#fca311",
                }}
              >
                Thanks for tunning in !!
              </h3>
              {/* <h3
                style={{
                  position: "relative",
                  left: "65px",
                  top: "-15px",
                  width: "300px",
                  color: "#fca311",
                }}
              >
                Thanks for tunning in !!
              </h3> */}
            </MDBModalBody>
            <MDBModalFooter style={{ backgroundColor: "#14213d" }}>
              <MDBBtn
                outline
                rounded
                color="warning"
                onClick={this.props.toggle(8)}
                style={{ position: "relative", left: "-120px" }}
              >
                Close
              </MDBBtn>
              {/* <MDBBtn outline rounded color="warning">
                Submit changes
              </MDBBtn> */}
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default Profile;
