import { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Login from "./components/authentication/login.js";
import Signup from "./components/authentication/signup.js";
// import React, { useState } from 'react';
// import NavBar from "./components/Navbar/Navbar.js";
// import Profile from "./components/Profile/profile.js"


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
          <Route path="/signup" component={Signup} />

          {/* <Route path="/login" component={Login} /> */}
          <Route
            path="/login"
            render={() => <Login changeLogin={this.changeLogin} />}
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
