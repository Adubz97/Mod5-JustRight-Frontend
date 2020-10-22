import React from "react";
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

function Createappointment(props) {

  const [show, setShow] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const createAppointment = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        job_post_id: props.offer.job_post_id,
        offer_id: props.offer.id,
        start_time: e.target.starttime.value,
        end_time: e.target.endtime.value,
        location: e.target.location.value,
      }),
    })
      .then((res) => res.json())
      .then((appointment) => {
        console.log(appointment);
        props.addAppointment(appointment);
      });
  };


  return (
    <div>
      <MDBBtn outline rounded variant="primary" onClick={handleShow}>
        Accept
      </MDBBtn>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#14213d" }}>
          <Modal.Title
            style={{ position: "absolute", left: "140px", color: "#fca311" }}
          >
            Appointment details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#14213d" }}>
          <Form onSubmit={(e) => createAppointment(e)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <h4 style={{ color: "#fca311" }}>Start time</h4>
                </Form.Label>
                <Form.Control
                  name="starttime"
                  type="text"
                  placeholder="start time"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  <h4 style={{ color: "#fca311" }}>End time</h4>
                </Form.Label>
                <Form.Control
                  name="endtime"
                  type="text"
                  placeholder="end time"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>
                <h4 style={{ color: "#fca311" }}>Location</h4>
              </Form.Label>
              <Form.Control name="location" placeholder="1234 Main St" />
            </Form.Group>
          </Form>
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
            type="submit"
          >
            Create Appointment
          </MDBBtn>
        </Modal.Footer>
      </Modal>
    </div>
  );

}
export default Createappointment;
