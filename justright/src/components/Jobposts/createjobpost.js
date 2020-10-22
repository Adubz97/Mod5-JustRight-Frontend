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
  Col
} from "react-bootstrap";
import { MDBBtn } from "mdbreact";
class CreateJobPost extends React.Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  createJobPost = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/job_posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        client_id: localStorage.id,
        job_type: this.state.jobtype,
        title: this.state.title,
        description: this.state.description,
        payrate: this.state.payrate,
      }),
    })
      .then((res) => res.json())
      .then((jobpost) => {
        console.log(jobpost.jobpost.title);
        this.props.addJobPost(jobpost.jobpost);
      });

  }


  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#14213d" }}>
          <Modal.Title
            style={{ position: "absolute", left: "330px", color: "#fca311" }}
            id="contained-modal-title-vcenter"
          >
            New JobPost
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#14213d" }}>
          <Form>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                onChange={(e) => this.handleChange(e)}
                placeholder="Ex: Need a Math tutor..."
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Payrate</Form.Label>
                <Form.Control
                  name="payrate"
                  onChange={(e) => this.handleChange(e)}
                  as="select"
                  defaultValue="Choose..."
                >
                  <option>Choose...</option>
                  <option>$10-$20</option>
                  <option>$20-$30</option>
                  <option>$30-$40</option>
                  <option>$40-$50</option>
                  <option>$50+</option>
                  <option>$100+</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>JobType</Form.Label>
                <Form.Control
                  name="jobtype"
                  onChange={(e) => this.handleChange(e)}
                  as="select"
                  defaultValue="Choose..."
                >
                  <option>Choose...</option>
                  <option>Babysitter</option>
                  <option>Math</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>History</option>
                  <option>English</option>
                  <option>Physics</option>
                  <option>Grammer & Writing</option>
                  <option>Spanish</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <h4 style={{ color: "#fca311" }}>Description:</h4>
              </Form.Label>
              <Form.Control
               
                name="description"
                onChange={(e) => this.handleChange(e)}
                as="textarea"
                rows="3"
              />
            </Form.Group>

            {/* <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Jobtype</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Babysitter</option>
                <option>Math</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>History</option>
                <option>English</option>
                <option>Physics</option>
                <option>Grammer & Writing</option>
                <option>Spanish</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row> */}

            {/* <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

            {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#14213d" }}>
          <MDBBtn
            color="warning"
            outline
            rounded
            type="submit"
            onClick={(e) => this.createJobPost(e)}
            // onClick={this.props.onHide}
          >
            Submit
          </MDBBtn>
          <MDBBtn outline rounded color="warning" onClick={this.props.onHide}>
            Cancel
          </MDBBtn>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default CreateJobPost;