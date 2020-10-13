import React from "react";
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdbreact"
import NavBar from "../Navbar/Navbar.js";

import "../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";
import "./auth.css";
import login from "../../assets/login.png";

class SignUp1 extends React.Component {
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
                  <span className="r s" />
                  <span className="r s" />
                  <span className="r" />
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-4">
                      <i className="feather icon-unlock auth-icon" />
                    </div>
                    <img className="logo" alt="" src={login} />
                    <h3 className="mb-4">Login</h3>

                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                      />
                    </div>
                    <MDBBtn
                      type="button"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a"
                    >
                      Sign in
                    </MDBBtn>
                    <br/>
                    <p className="mb-2 text-muted">
                      Forgot password?{" "}
                      <NavLink to="/auth/reset-password-1">Reset</NavLink>
                    </p>
                    <p className="mb-0 text-muted">
                      Don’t have an account?{" "}
                      <NavLink to="/signup">Signup</NavLink>
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

export default SignUp1;

// style={{
//                           width: "200px",
//                           height: "35px",
//                           marginRight: "778px",
//                           marginLeft: "1020px",
//                         }}