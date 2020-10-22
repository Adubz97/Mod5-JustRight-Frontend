import React from "react";
import { NavLink, Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./dashboard.css"
import Navbar from './navbar.js'
import Sidebar from './sidebar.js'
import Home from '../Home/Home.js'
import JobPosts from '../Jobposts/jobposts.js'
import Calendar from '../Calendar/Calendar.js'
import Tutors from '../tutors/Tutors.js'
import Babysitters from '../babysitters/babysitters.js'
import Offers from '../Offers/Offers.js'
import Appointments from '../Appointments/Appointments.js'
import Profile from "../Profile/profile.js";


class Dashboard extends React.Component {

  state = {
    Clients: [],
    Tutors: [],
    Babysitters: [],
    Jobposts: [],
    Offers: [],
    Appointments: []
  };

  logout = () => {
    localStorage.clear();
  };

  componentDidMount() {
    if (localStorage.token) {

      fetch("http://localhost:3000/api/v1/clients", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((resp) => resp.json())
        // .then(console.log)
        .then((clients) => this.clients(clients));

      fetch("http://localhost:3000/api/v1/tutors", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((resp) => resp.json())
        // .then(console.log)
        .then((tutors) => this.tutors(tutors));

      fetch("http://localhost:3000/api/v1/babysitters", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((resp) => resp.json())
        // .then(console.log)
        .then((babysitters) => this.babysitters(babysitters));

      fetch("http://localhost:3000/api/v1/job_posts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((resp) => resp.json())
        // .then(console.log)
        .then((posts) => this.jobposts(posts));

      fetch("http://localhost:3000/api/v1/offers", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((resp) => resp.json())
        // .then(console.log)
        .then((offers) => this.offers(offers));

      fetch("http://localhost:3000/api/v1/appointments", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((resp) => resp.json())
        // .then(console.log)
        .then((appointments) => this.appointments(appointments));
    }
  }

  clients(users) {
    this.setState({
      Clients: users,
    });
  }
  tutors(users) {
    this.setState({
      Tutors: users,
    });
  }
  babysitters(users) {
    this.setState({
      Babysitters: users,
    });
  }
  jobposts(posts) {
    this.setState({
      Jobposts: posts,
    });
  }
  appointments(appointments) {
    this.setState({
      Appointments: appointments,
    });
  }
  offers(offers) {
    this.setState({
      Offers: offers,
    });
  }
  addJobPost = (jobpost) => {
    this.setState({
      Jobposts: [...this.state.Jobposts, jobpost]
    })
  }

  render() {
    return (
      <Router>
        <div>
          {this.props.LoggedIn ? null : <Redirect to="/login" />}
          <Navbar logout={this.logout} login={this.login} />
          <Sidebar />
          <Switch>
            <Route exact path="/Dashboard" component={Calendar} />
            <Route
              path="/Dashboard/tutors"
              render={() => <Tutors AllTutors={this.state.Tutors} />}
            />
            <Route
              path="/Dashboard/babysitters"
              render={() => (
                <Babysitters AllBabysitters={this.state.Babysitters} />
              )}
            />
            <Route
              path="/Dashboard/jobposts"
              render={() => (
                <JobPosts
                  addJobPost={this.addJobPost}
                  AllJobposts={this.state.Jobposts}
                />
              )}
            />
            <Route
              path="/Dashboard/offers"
              render={() => <Offers AllOffers={this.state.Offers} />}
            />
            <Route
              path="/Dashboard/appointments"
              render={() => (
                <Appointments AllAppointments={this.state.Appointments} />
              )}
            />
            <Route path="/Dashboard/Profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default Dashboard;
