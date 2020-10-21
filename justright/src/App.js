import React, { useState } from 'react';
import { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './components/Home/Home.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Login from "./components/authentication/login.js";
import Login2 from "./components/authentication/login2.js";
import Signup from "./components/authentication/signup.js";
import Signup2 from "./components/authentication/signup2.js";
import NavBar from "./components/Navbar/Navbar.js";


class App extends Component {
  state = {
    AllUsers: [],
    JobPosts: [],
    Offers: [],
    Appointments: [],
    LoggedIn: `${localStorage.token}` === "undefined" ? false : true,
    CurrentUser: {},
    Tutors: [],
    Babysitters: [],
    Clients: [],
  };

  // componentDidMount() {

  // }
  fetchClients = () => {
    if (this.state.LoggedIn === true) {
      fetch("http://localhost:3000/api/v1/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((resp) => resp.json())
        // .then(console.log)
        .then((users) =>
          this.setState({
            AllUsers: users,
          })
        );
    }
  };

  changeLogin = () => {
    // setTimeout(() => this.fetchClients(), 1500);
    this.setState({ LoggedIn: true });
  };

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route
            path="/Dashboard"
            render={() => <Dashboard LoggedIn={this.state.LoggedIn} />}
          />
          {/* <Route path="/signup" component={Signup} /> */}
          <Route path="/signup" component={Signup2} />
          {/* <Route path="/login" component={Login} /> */}
          <Route
            path="/login"
            render={() => <Login2 changeLogin={this.changeLogin} />}
          />
          {/* <Dashboard/> */}
          {/* <Signup /> */}
          {/* <Login /> */}
        </Router>
      </div>
    );
  }
}

export default App;
