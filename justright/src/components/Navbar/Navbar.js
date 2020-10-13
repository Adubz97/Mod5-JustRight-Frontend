import React from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
import logo from '../../assets/JR.PNG'
import text from '../../assets/login.png'
import "./navbar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="color-nav"
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
                    src={text}
                    style={{
                      width: "200px",
                      height: "30px",
                      position: "relative",
                      left: "1000px",
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
                <Button variant="dark">SignUp</Button>{" "}
              </Link>
              <Link to="/login">
                <Button variant="dark">LogIn</Button>{" "}
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}