import React from "react";
import OffersCard from "./OffersCard.js";
import { CardColumns } from "react-bootstrap";

class Offers extends React.Component {
  render() {
    return (
      <div>
        <div
          class="main"
          style={{ backgroundColor: "#e5e5e5", height: "812px" }}
        >
          <h2 style={{ position: "absolute", left: "1115px", top: "75px" }}>
            Offers
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
            {this.props.AllOffers.map((offer) => (
              <OffersCard offer={offer} key={offer.id} addAppointment={this.props.addAppointment} />
            ))}
          </CardColumns>
        </div>
      </div>
    );
  }
}
export default Offers;
