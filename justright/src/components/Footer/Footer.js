import React from "react";
import "./footer.css"
import { Icon } from "semantic-ui-react";
import { MDBIcon } from "mdbreact";
import { MDBBtn } from "mdbreact";
import logo from "../../assets/full-logo.png";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer class="new_footer_area bg_color">
        <div class="new_footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <img className="footer-logo" alt="" src={logo} />
                  <h3 class="f-title f_600 t_color f_size_18">
                    Let us help you.
                  </h3>
                  <h4 style={{ marginBottom: "30px", color: "#219ebc" }}>
                    Don’t miss any updates of our new babysitters and tutors
                    team!
                  </h4>
                  <form
                    action="#"
                    class="f_subscribe_two mailchimp"
                    method="post"
                    novalidate="true"
                    _lpchecked="1"
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      class="form-control memail"
                      placeholder="Email"
                    />
                    <MDBBtn
                      // class="btn btn_get btn_get_two"
                      type="submit"
                      outline
                      rounded
                      color="warning"
                    >
                      Subscribe
                    </MDBBtn>
                    <p
                      class="mchimp-errmessage"
                      style={{ display: "none" }}
                    ></p>
                    <p
                      class="mchimp-sucmessage"
                      style={{ display: "none" }}
                    ></p>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3
                    class="f-title f_600 t_color f_size_18"
                    style={{ position: "relative", left: "50px" }}
                  >
                    Learn More
                  </h3>
                  <ul
                    class="list-unstyled f_list"
                    style={{ position: "relative", left: "50px" }}
                  >
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Find a location</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                    <li>
                      <a href="/">Become a Franchisee</a>
                    </li>
                    <li>
                      <a href="/">Speciality Care</a>
                    </li>
                    <li>
                      <a href="/">Investment</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; conditions</a>
                    </li>
                    <li>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3
                    class="f-title f_600 t_color f_size_18"
                    style={{ position: "relative", left: "-50px" }}
                  >
                    Follow us !
                  </h3>
                  <div
                    class="f_social_icon"
                    style={{ position: "relative", left: "-80px" }}
                  >
                    <a href="#" class="fab fa-facebook"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-sm-7">
                <div class="footer-position">
                  <h4 class="mb-0 f_400" style={{ color: "#fca311" }}>
                    © JustRight Inc.. 2020 - All Rights Reserved.
                  </h4>
                </div>
              </div>
              <div class="col-lg-6 col-sm-5 text-right">
                <div class="footer-position">
                  <h4 style={{ color: "#fca311" }}>
                    Made with{" "}
                    <MDBIcon icon="heart" size="1x" className="red-text" /> in
                    Washington, DC
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;