import React, { Component } from "react";
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
} from "react-bootstrap";
import { MDBBtn } from "mdbreact";
// import Createoffer from "../Offers/createoffer.js";
// import { Button, Image, Modal } from "semantic-ui-react";

function Jobpostdetails(props) {
  const [show, setShow] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <MDBBtn rounded outline variant="primary" onClick={handleShow}>
        Details
      </MDBBtn>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#14213d" }}>
          <Modal.Title>
            <h2
              style={{ color: "#fca311", position: "relative", left: "270px" }}
            >
              {props.tutor.first_name} {props.tutor.last_name}
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#14213d" }}>
          <h3 style={{ color: "#fca311" }}>About me:</h3>
          <h3 style={{ color: "#219ebc" }}>
            Tutor with experience teaching French, English, and History. Posses
            a BA in French consolidated by study abroad in Paris, and an MPhil
            in Eurpean history. Skilled at conveying complex knowledge in a
            simple and concise way.. Looking to tutor high school students and
            freshman college students to help them achieve exceptional exam
            results.
          </h3>
          <h3 style={{ color: "#fca311" }}>
            years of experience:{" "}
            <a style={{ color: "#219ebc" }}>7 years</a>
          </h3>
          <h3 style={{ color: "#fca311" }}>
            Email:{" "}
            <a style={{ color: "#219ebc" }}>StevenLee@gmail.com</a>
          </h3>

          {/* <h5 style={{ color: "#219ebc" }}>{props.jobpost.description}</h5> */}
          <br />
          <h5 style={{ color: "#fca311" }}>
            {/* Payrate: <a style={{ color: "#219ebc" }}>{props.jobpost.payrate}</a> */}
          </h5>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#14213d" }}>
          <MDBBtn rounded outline color="warning" onClick={handleClose}>
            Close
          </MDBBtn>
        </Modal.Footer>
      </Modal>
      {/* <Createoffer
        show={modalShow3}
        onHide={() => setModalShow3(false)}
        jobpost={props.jobpost}
        addOffer={props.addOffer}
      /> */}
    </div>
  );
}

export default Jobpostdetails;
