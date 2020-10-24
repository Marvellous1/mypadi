import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignedOutLinks extends Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <nav class="navbar navbar-light navbar-expand-md navbar-lg py-3">
          <NavLink to="/dashboard" class="navbar-brad brand-logo">
            myPadi
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/SignIn" className="nav-link">
                  Log In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/SignUp" className="nav-link btn btn-primary text-white">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="site-content  py-5">{content}</div>
        
        <div class="footer py-5">
          <div class="container">
            <div class="row text-center text-md-left">
              <div class="col-md-5">
                <img src="/images/footer-logo.svg" class="mb-3" alt="" />
                <p class="footer-text">
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone
                </p>
                <p class="footer-text">
                  ©Trafalgar PTY LTD 2020. All rights reserved
                </p>
              </div>
              <div class="col-md-7">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4">
                      <p class="footer-header">Company</p>
                      <p class="footer-text">
                        About
                        <br />
                        Testimonial
                        <br />
                        Find a doctor
                        <br />
                        Apps
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p class="footer-header">Region</p>
                      <p class="footer-text">
                        Indonesia
                        <br />
                        Singapore
                        <br />
                        Hongkong
                        <br />
                        Canada
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p class="footer-header">Help</p>
                      <p class="footer-text">
                        Blog
                        <br />
                        Contact support
                        <br />
                        Instructions
                        <br />
                        How it works
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignedOutLinks;
