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
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{props.jobpost.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>
            Description: <br />
          </h3>
          <br />
          <h5>{props.jobpost.description}</h5>
          <h5>Payrate: {props.jobpost.payrate}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-yellow" onClick={handleClose}>
            Close
          </Button>
          <MDBBtn
            rounded
            color="indigo"
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

      />
    </div>
  );

}

export default Jobpostdetails;