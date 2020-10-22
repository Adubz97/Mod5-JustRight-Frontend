import React, { useState } from "react";

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
import Profile from "../Profile/profile.js";


class navbar extends React.Component {

state = {
  modal8: false,
  modal9: false,
};

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
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
            <FormControl
              style={{ marginLeft: "1780px" }}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <MDBBtn
              // href="/Dashboard/Profile"
              outline
              rounded
              onClick={this.toggle(8)}
              color="warning"
              style={{
                marginRight: "-20px",
              }}
            >
              Profile
            </MDBBtn>
            <Profile
              toggle={this.toggle}
              modal8={this.state.modal8}

            />
            <MDBBtn
              href="/login"
              outline
              rounded
              color="warning"
              onClick={() => this.props.logout()}
            >
              Logout
            </MDBBtn>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default navbar;