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
import Createoffer from "../Offers/createoffer.js";
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
            <h2 style={{ color: "#fca311" }}>{props.jobpost.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#14213d" }}>
          <h3 style={{ color: "#fca311" }}>Description:</h3>

          <h5 style={{ color: "#219ebc" }}>{props.jobpost.description}</h5>
          <br />
          <h5 style={{ color: "#fca311" }}>
            Payrate: <a style={{ color: "#219ebc" }}>{props.jobpost.payrate}</a>
          </h5>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#14213d" }}>
          <MDBBtn rounded outline color="warning" onClick={handleClose}>
            Close
          </MDBBtn>
          <MDBBtn
            rounded
            outline
            color="warning"
            // style={{ position: "absolute", left: "2080px", top: "130px" }}
            onClick={() => setModalShow3(true)}
          >
            submit an offer
          </MDBBtn>
        </Modal.Footer>
      </Modal>
      <Createoffer
        show={modalShow3}
        onHide={() => setModalShow3(false)}
        jobpost={props.jobpost}
        addOffer={props.addOffer}
      />
    </div>
  );

}

export default Jobpostdetails;