import React from "react";
import "./footer.css"
import { Icon } from "semantic-ui-react";
import { MDBIcon } from "mdbreact";
import login from "../../assets/login.png";

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
                  <img className="footer-logo" alt="" src={login} />
                  <h3 class="f-title f_600 t_color f_size_18">
                    Let us help you.
                  </h3>
                  <p>
                    Don’t miss any updates of our new babysitters and tutors
                    team!
                  </p>
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
                    <button class="btn btn_get btn_get_two" type="submit">
                      Subscribe
                    </button>
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
                  <h3 class="f-title f_600 t_color f_size_18">
                    To be determined
                  </h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <a href="/">Something</a>
                    </li>
                    <li>
                      <a href="/">Something</a>
                    </li>
                    <li>
                      <a href="/">Something</a>
                    </li>
                    <li>
                      <a href="/">Something</a>
                    </li>
                    <li>
                      <a href="/">Something</a>
                    </li>
                    <li>
                      <a href="/">Something</a>
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
                  <h3 class="f-title f_600 t_color f_size_18">
                    Follow us !
                  </h3>
                  <div class="f_social_icon">
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
                  <h4 class="mb-0 f_400">
                    © JustRight Inc.. 2020 - All Rights Reserved.
                  </h4>
                </div>
              </div>
              <div class="col-lg-6 col-sm-5 text-right">
                <div class="footer-position">
                  <h4>
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