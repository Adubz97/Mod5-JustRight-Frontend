import React from "react";
import AppointmentsCard from "./AppointmentsCard.js";
import { CardColumns } from "react-bootstrap";

class Appointments extends React.Component {
  render() {
    return (
      <div>
        <div class="main">
          <h2 style={{ position: "absolute", left: "1060px", top: "75px" }}>
            Appointments
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
            {this.props.AllAppointments.map((appointment) => (
              <AppointmentsCard
                appointment={appointment}
                key={appointment.id}
              />
            ))}
          </CardColumns>
        </div>
      </div>
    );
  }
}
export default Appointments;