import React from "react";
import NavBar from '../Navbar/Navbar.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../authentication/login.js'
import Signup from '../authentication/signup.js'
import "../../App.css";
import Dashboard2 from "../Dashboard/Dashboard2.js"
import Footer from "../Footer/Footer.js"


const Home = () => {
  return (
    // <Dashboard2/>
    <div>
      <NavBar/>
      <div className="firstpicture"></div>
      <div className="secondpicture"></div>
      <div className="thirdpicture"></div>
      <Footer/>
    </div>
  );
};

export default Home