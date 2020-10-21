import React from "react";
import { NavLink } from "react-router-dom";
import { MDBBtn, MDBFileInput } from "mdbreact";
import {Form} from "react-bootstrap"

import "../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../store/constant";
import NavBar from "../Navbar/Navbar.js";
import login from "../../assets/logo.png";

class SignUp2 extends React.Component {
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
        client: this.state.Client,
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        console.log(userInfo);
      });

    // login after signup with same details
    setTimeout(
      () =>
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
          }),
      2500
    );
  };

  render() {
    return (
      <Aux>
        <NavBar />
        <Breadcrumb />
        <div className="signup">
          <div className="signup-position">
            <div className="auth-wrapper">
              <div className="auth-content">
                <div className="auth-bg">
                  {/* <span
                    className="r"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "400px",
                    }}
                  />
                  <span
                    className="r s"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "700px",
                    }}
                  />
                  <span className="r s" />
                  <span className="r" /> */}
                </div>
                <div
                  className="card"
                  style={{ width: "530px", backgroundColor: "#14213d" }}
                >
                  <div className="card-body text-center">
                    <div className="mb-4">
                      {/* <i className="feather icon-user-plus auth-icon" /> */}
                    </div>
                    <img className="logo" alt="" src={login} />
                    <h3 className="mb-4" style={{ color: "#219ebc" }}>
                      Sign up
                    </h3>
                    <div className="input-group mb-3">
                      {/* 1st row */}
                      <div class="row">
                        {/* 1st column */}
                        <div class="col">
                          <input
                            type="text"
                            name="Firstname"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control"
                            placeholder="First name"
                            style={{ width: "200px" }}
                          />
                        </div>
                        {/* 2nd column */}
                        <div class="col">
                          {/* <div className="input-group mb-3"> */}
                          <input
                            type="text"
                            name="Lastname"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control"
                            placeholder="Last name"
                            style={{ width: "250px" }}
                          />
                          {/* </div> */}
                        </div>
                      </div>
                      {/* end of first row */}
                    </div>
                    {/* 2nd row */}
                    <div className="input-group mb-3">
                      <div class="row">
                        {/* 1st column */}
                        <div class="col">
                          <input
                            type="text"
                            name="Username"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control"
                            placeholder="Username"
                            style={{ width: "200px" }}
                          />
                        </div>
                        {/* 2nd column */}
                        <div class="col">
                          {/* <div className="input-group mb-3"> */}
                          <input
                            type="password"
                            name="Password"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control"
                            placeholder="Password"
                            style={{ width: "250px" }}
                          />
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    {/* end of second row */}
                    {/* 3rd row */}
                    <div className="input-group mb-3">
                      {/* <div className="input-group mb-3"> */}
                      <div claa="row">
                        <input
                          type="email"
                          name="Email"
                          onChange={(e) => this.handleChange(e)}
                          className="form-control"
                          placeholder="Email"
                          style={{ width: "480px" }}
                        />
                        {/* </div> */}
                      </div>
                    </div>
                    {/* end of third row */}
                    {/* 4th row */}
                    <div className="input-group mb-3">
                      <div class="row">
                        {/* 1st column */}
                        <div class="col">
                          <input
                            type="text"
                            name="Phone"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control"
                            placeholder="Phone"
                            style={{ width: "200px" }}
                          />
                        </div>
                        {/* 2nd column */}
                        <div class="col">
                          {/* <div className="input-group mb-3"> */}
                          <input
                            type="text"
                            name="Age"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control"
                            placeholder="Age"
                            style={{ width: "250px" }}
                          />
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    {/* end of fourth row */}
                    {/* 5th row */}
                    <div className="input-group mb-3">
                      {/* <div className="input-group mb-3"> */}
                      <div claa="row">
                        <input
                          type="text"
                          name="Address"
                          onChange={(e) => this.handleChange(e)}
                          className="form-control"
                          placeholder="Address"
                          style={{ width: "480px" }}
                        />
                        {/* </div> */}
                      </div>
                    </div>
                    {/* end of 5th row */}
                    {/* 6th row */}
                    <div className="input-group mb-3">
                      <div class="row">
                        {/* 1st column */}
                        <div class="col">
                          <input
                            type="text"
                            name="Gender"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control"
                            placeholder="Gender"
                            style={{ width: "200px" }}
                          />
                        </div>
                        {/* 2nd column */}
                        <div class="col">
                          {/* <div className="input-group mb-3"> */}
                          <input
                            type="text"
                            name="Client"
                            onChange={(e) => this.handleChange(e)}
                            className="form-control"
                            placeholder="Client"
                            style={{ width: "250px" }}
                          />
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <Form.File
                      id="custom-file"
                      name="Image"
                      onChange={(e) => this.handleChange(e)}
                      label="Upload profile picture"
                      custom
                    />
                    <div className="form-group text-left">
                      {/* <div className="checkbox checkbox-fill d-inline">
                        <input
                          type="checkbox"
                          name="checkbox-fill-2"
                          id="checkbox-fill-2"
                        />
                        <label htmlFor="checkbox-fill-2" className="cr">
                          Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a>{" "}
                          weekly.
                        </label>
                      </div> */}
                    </div>
                    <MDBBtn
                      type="button"
                      outline
                      color="warning"
                      rounded
                      className="btn-block z-depth-1a"
                      style={{ width: "480px" }}
                      onClick={(e) => this.signUp(e)}
                    >
                      Sign up
                    </MDBBtn>
                    <br />
                    <h6 className="mb-0 " style={{ color: "#219ebc" }}>
                      Already have an account?{" "}
                      <NavLink style={{ color: "#fca311" }} to="/login">
                        Login
                      </NavLink>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SignUp2;
