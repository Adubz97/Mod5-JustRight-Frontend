import React from "react";
import "./dashboard.css";
import { MDBBtn } from "mdbreact";
import text from "../../assets/logo.png";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";


const navbar = (props) => {
  return (
    <div>
      <Navbar className="color-nav">
        <Navbar.Brand href="/Dashboard">
          <img
            className="img-fluid"
            alt=""
            src={text}
            style={{
              width: "160px",
              height: "50px",
              position: "absolute",
              left: "1115px",
              top: "20px",
              // marginRight: "2000px"

              // marginRight: "778px",
              // marginLeft: "1020px"
            }}
          />
        </Navbar.Brand>



        {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}

        <Form inline>
          <FormControl style={{marginLeft: "1740px"}} type="text" placeholder="Search" className="mr-sm-2" />
          <MDBBtn
            href="/Appointments"
            outline
                      rounded
                      color="warning"
          >
            Appointments
          </MDBBtn>
          <MDBBtn
            href="/login"
            outline
                      rounded
                      color="warning"
            onClick={() => props.logout()}
          >
            Logout
          </MDBBtn>
        </Form>
      </Navbar>
    </div>
  );
}

export default navbar;