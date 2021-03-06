import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { MDBBtn } from "mdbreact"
import NavBar from "../Navbar/Navbar.js";
import "../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";
import "./auth.css";
import Login from "../../assets/logo.png";

class login extends React.Component {
  componentDidMount() {
    document.title = "JUSTRIGHT";
  }
  state = {
    LoggedIn: false,
  };

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
        localStorage.id = userInfo.user.id;

        if (userInfo.token) {
          this.setState({
            LoggedIn: true,
          });
        }
        // this.props.setCurrentUser(userInfo.user_id);
        // localStorage.id = userInfo.user_id;
      });
  };
  //   redirect = () => {
  //   setTimeout(() => , 5500);
  // }
  render() {
    return (
      <Aux>
        <NavBar />
        <Breadcrumb />
        <div className="login">
          <div className="item-absolute">
            <div className="auth-wrapper">
              <div className="auth-content">
                <div className="auth-bg">
                  <span className="r" />

                  {/* <span className="r s" /> */}
                  {/* <span className="r s" /> */}
                  <span className="r" />
                </div>
                <div className="card" style={{ backgroundColor: "#14213d" }}>
                  <div className="card-body text-center">
                    <div className="mb-4">
                      <i className="feather icon-unlock auth-icon" />
                    </div>
                    <img className="logo" alt="" src={Login} />
                    <h3 className="mb-4" style={{ color: "#219ebc" }}>
                      Login
                    </h3>

                    <div className="input-group mb-3">
                      <input
                        type="text"
                        name="username"
                        onChange={(e) => this.handleChange(e)}
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group mb-4">
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => this.handleChange(e)}
                        className="form-control"
                        placeholder="password"
                      />
                    </div>
                    <MDBBtn
                      type="button"
                      outline
                      color="warning"
                      rounded
                      className="btn-block z-depth-1a"
                      onClick={(e) => this.login(e)}
                      // onClick={()=> this.props.login()}

                      // href="#Dashboard"
                      as={NavLink}
                      to="/Dashboard"
                    >
                      {/* <NavLink to="/Dashboard"> */}
                      Sign in
                      {/* </NavLink> */}
                    </MDBBtn>
                    {this.state.LoggedIn ? <Redirect to="/Dashboard" /> : null}
                    {this.state.LoggedIn ? this.props.changeLogin() : null}
                    <br />
                    <p className="mb-2" style={{ color: "#219ebc" }}>
                      Forgot password?{" "}
                      <NavLink
                        style={{ color: "#fca311" }}
                        to="/auth/reset-password-1"
                      >
                        Reset
                      </NavLink>
                    </p>
                    <p className="mb-0" style={{ color: "#219ebc" }}>
                      Don’t have an account?{" "}
                      <NavLink style={{ color: "#fca311" }} to="/signup">
                        Signup
                      </NavLink>
                    </p>
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

export default login;

// style={{
//                           width: "200px",
//                           height: "35px",
//                           marginRight: "778px",
//                           marginLeft: "1020px",
//                         }}