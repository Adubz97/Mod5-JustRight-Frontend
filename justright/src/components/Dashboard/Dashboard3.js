import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";


const Dashboard = () => {
  return (
    <div>
      <Nav
        className="justify-content-center"
        activeKey="/Dashboard"
        variant="tabs"
        bg="secondary"
      >
        <Nav.Item>
          <Nav.Link href="/home">JobPosts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Tutors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Babysitters</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Appointments</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Dashboard;
