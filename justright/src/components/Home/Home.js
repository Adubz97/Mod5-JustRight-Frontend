import React from "react";
import NavBar from '../Navbar/Navbar.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../authentication/login.js'
import Signup from '../authentication/signup.js'
import "../../App.css";
import Dashboard from "../Dashboard/Dashboard.js"
import Footer from "../Footer/Footer.js"
import { MDBIcon, MDBNav } from "mdbreact";



const Home = () => {
  return (
    // <Dashboard2/>
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <div className="secondpicture"></div>
    <div className="thirdpicture"></div>
      {/* <div className="firstpicture"></div> */}
      <div className="first-word">Building</div>
      <div className="second-word">Stronger</div>
      <div className="third-word">Families</div>

      <div className="first-picture-text2">
        With so many options for child care and tutoring
        <br />
        available, why choose us? Our Sitters and Tutors are positive <br />
        role models dedicated to helping families do more, learn more
        <br />
        and play more. It’s goodness all around.
      </div>
      {/* <div className="secondpicture"></div> */}
      <div className="second-picture-text">What Makes us Different</div>
      <div className="second-picture-text2">
        Together, we’ll find the right fit for your family, matching our team’s
        unique <br />
        talents and experiences, values and personality to your must-have list.
      </div>
      <div className="ellipse"></div>
      <div className="second-picture-text3">Screened and</div>
      <div className="second-picture-text4">Trained</div>
      <div className="second-picture-text5">People, Not</div>
      <div className="second-picture-text6">Algorithms</div>
      <div className="second-picture-text7">Reliable</div>
      <div className="second-picture-text8">
        Our quality assurance program <br />
        includes rigorous background checks
        <br />
        at the cit, county, state and federal <br />
        levels, and professional training for
        <br />
        all our Nannies, Sitters and Tuttors
      </div>
      <div className="second-picture-text9">
        Whether you reach us online, by <br />
        phone or email, you'll work with real <br />
        people who care about your family
      </div>
      <div className="second-picture-text10">
        Go ahead, say "Yes" to nights out,
        <br />
        last-minute meetings and more. You'll <br />
        have the help you need, whenever <br />
        you need it. Period.
      </div>
      <MDBIcon icon="check" size="8x" className="check-icon" />
      <MDBIcon icon="users" size="8x" className="people-icon" />
      <MDBIcon icon="user-check" size="8x" className="user-check-icon" />
      {/* <div className="firstpicture"></div> */}

      <Footer />
    </div>
  );
};

export default Home