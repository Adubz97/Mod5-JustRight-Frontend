import React from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
import { MDBBtn } from "mdbreact";
import logo from '../../assets/logo.png'

import "./navbar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          className="color-nav1"
          // bg="secondary"
          // variant="dark"
          fixed="top"
          // expand="lg"
          // className="justify-content-center"
        >
          {/* <Navbar.Brand >
            <img
              // className="img-fluid"
              alt=""
              src={logo}
              style={{ width: "30px", height: "30px", marginRight: "950px" }}
            />
          </Navbar.Brand> */}

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Link to="/"> */}
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              {/* </Link> */}
              {/* <Nav.Link href="#link" style={{ marginRight: "860px" }}> Link</Nav.Link> */}

              {/* <MDBAnimation type="bounce" infinite> */}
              {/* <Navbar.Brand className="img-fluid"> */}
              <Link to="/">
                <img
                  className="img-fluid"
                  alt=""
                  src={logo}
                  style={{
                    width: "280px",
                    height: "50px",
                    position: "relative",
                    left: "970px",

                    // marginRight: "778px",
                    // marginLeft: "1020px"
                  }}
                />
              </Link>
              {/* </Navbar.Brand> */}
              {/* </MDBAnimation> */}
            </Nav>

            <Form>
              <Link to="/signup">
                <MDBBtn
                  outline
                  color="warning"
                  rounded
                  variant="outline-yellow"
                >
                  SignUp
                </MDBBtn>{" "}
              </Link>
              <Link to="/login">
                <MDBBtn
                  outline
                  color="warning"
                  rounded
                  variant="outline-yellow"
                >
                  LogIn
                </MDBBtn>{" "}
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}