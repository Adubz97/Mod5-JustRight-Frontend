import React from "react";
import TutorCard from './TutorCard.js'
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  CardDeck,
  Card,
  CardGroup,
  CardColumns,
} from "react-bootstrap";

class Tutors extends React.Component {
  render() {
    return (
      <div>
        <div
          class="main"
          style={{ backgroundColor: "#e5e5e5", height: "812px" }}
        >
          <h2 style={{ position: "absolute", left: "1115px", top: "75px" }}>
            Tutors
          </h2>
          <br />
          <br />
          <CardColumns style={{ width: "700px", gridTemplateColumns:
                "auto auto auto auto auto auto auto auto auto auto",
              display: "grid",
              position: "absolute",
              left: "240px", }}>
            {this.props.AllTutors.map((tutor) => (
              <TutorCard tutor={tutor} key={tutor.id} />
            ))}
          </CardColumns>
        </div>
      </div>
    );
  }
}
export default Tutors;
