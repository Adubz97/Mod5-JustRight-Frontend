import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Login from "./components/authentication/login.js";
import Login2 from "./components/authentication/login2.js";
import Signup from "./components/authentication/signup.js";
import Signup2 from "./components/authentication/signup2.js";
import NavBar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
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
