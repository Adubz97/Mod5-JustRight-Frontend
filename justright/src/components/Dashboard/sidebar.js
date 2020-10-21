import React from "react";
import "./dashboard.css";



const Sidebar = () => {
  return (
    <div>
      <div class="sidenav">
        <div style={{left: "20px"}}>
          <a className="active" href="/Dashboard">
            Home
          </a>
          <a href="/Dashboard/tutors">Tutors</a>
          <a href="/Dashboard/babysitters">Babysitters</a>
          <a href="/Dashboard/jobposts">Jobposts</a>
          <a href="/Dashboard/offers">Offers</a>
          <a href="/Dashboard/appointments">Appointments</a>
        </div>

        {/* <a href="#contact">Appointments</a> */}
      </div>
      {/* <div style={{ left: "1500px" }}>
        <div class="main">
          <h2>Calender goes here</h2>
          <p>This sidebar is of full height (100%) and always shown.</p>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;