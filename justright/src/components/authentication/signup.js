import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import NavBar from "../Navbar/Navbar.js";
import "./auth.css";

export default class SignUp extends React.Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signUp = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.Username,
        password: this.state.Password,
        first_name: this.state.Firstname,
        last_name: this.state.Lastname,
        address: this.state.Address,
        phone: this.state.Phone,
        gender: this.state.Gender,
        age: this.state.Age,
        email: this.state.Email,
        image: this.state.Image,
        client: this.state.Client
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        console.log(userInfo);
      });

    // login after signup with same details
    setTimeout(() =>
      fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.Username,
          password: this.state.Password,
        }),
      })
        .then((res) => res.json())
        .then((userInfo) => {
          console.log(userInfo);
          localStorage.token = userInfo.token;
          // this.props.setCurrentUser(userInfo.user_id);
          // localStorage.id = userInfo.user_id;
        }), 2500)
  };

  render() {
    return (
      <div className="firstpicturee">
        <NavBar />
        {/* <br/> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Form size="large" onSubmit={(e) => this.signUp(e)}>
            <h2> SignUp </h2>
            <Segment stacked>
              <label> Username: </label>
              <Form.Input
                fluid
                icon="user"
                iconPosition="right"
                placeholder="Username"
                onChange={(e) => this.handleChange(e)}
                name="Username"
                type="text"
              />
              <label> Password: </label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={(e) => this.handleChange(e)}
                name="Password"
                type="password"
              />

              <label> firstname: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Firstname"
                type="text"
              />

              <label> lastname: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Lastname"
                type="text"
              />

              <label> Address: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Address"
                type="text"
              />

              <label> Phone: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Phone"
                type="text"
              />

              <label> gender: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Gender"
                type="text"
              />

              <label> age: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Age"
                type="text"
              />
              <label> Email: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Email"
                type="text"
              />
              <label> Image: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Image"
                type="text"
              />
              <label> Client: </label>
              <Form.Input
                fluid
                placeholder="Name"
                onChange={(e) => this.handleChange(e)}
                name="Client"
                type="text"
              />
              <Button
                color="blue"
                fluid
                size="large"
                // onClick={() => this.props.login()}
                type="submit"
              >
                Submit
              </Button>
            </Segment>
          </Form>
        </div>
      </div>
    );
  }
}