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

export default class login extends React.Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        console.log(userInfo);
        localStorage.token = userInfo.token;
        // this.props.setCurrentUser(userInfo.user_id);
        // localStorage.id = userInfo.user_id;
      })
  };

  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <h2> Login: </h2>
            <Form size="large" onSubmit={(e) => this.login(e)}>
              <Segment stacked>
                <label> Username: </label>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  onChange={(e) => this.handleChange(e)}
                  name="username"
                  type="text"
                />
                <label> Password: </label>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => this.handleChange(e)}
                  name="password"
                  type="password"
                />
                <Button
                  color="blue"
                  fluid
                  size="large"
                  // onClick={() => this.props.login()}
                  // on click={setTimeout(() => this.props.fetchProducts,100)}
                  type="submit"
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </div>
      </div>
    );
  }
}