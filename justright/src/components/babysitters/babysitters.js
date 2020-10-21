import React from "react";
import BabysitterCard from "./BabysitterCard.js"
import { CardColumns } from "react-bootstrap";

class Babysitters extends React.Component {
  render() {
    return (
      <div>
        <div class="main">
          <h2 style={{ position: "absolute", left: "1085px", top: "75px" }}>
            Babysitters
          </h2>
          <br />
          <br />
          <CardColumns
            style={{
              width: "700px",
              gridTemplateColumns:
                "auto auto auto auto auto auto auto auto auto auto",
              display: "grid",
              position: "absolute",
              left: "240px",
            }}
          >
            {this.props.AllBabysitters.map((babysitter) => (
              <BabysitterCard babysitter={babysitter} key={babysitter.id} />
            ))}
          </CardColumns>
        </div>
      </div>
    );
  }
}
export default Babysitters;
