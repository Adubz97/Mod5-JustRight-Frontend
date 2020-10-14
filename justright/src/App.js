import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './components/Home/Home.js'
import Dashboard3 from './components/Dashboard/Dashboard3.js'
import Login from "./components/authentication/login.js";
import Login2 from "./components/authentication/login2.js";
import Signup from "./components/authentication/signup.js";
import Signup2 from "./components/authentication/signup2.js";
import NavBar from "./components/Navbar/Navbar.js";


function App() {

  // let [LoggedIn, login] = useState(false)
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Dashboard" component={Dashboard3} />
        {/* <Route path="/signup" component={Signup} /> */}
        <Route path="/signup" component={Signup2} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/login" component={Login2} />
        {/* <Dashboard/> */}
        {/* <Signup /> */}
        {/* <Login /> */}
      </Router>
    </div>
  );
}

export default App;
