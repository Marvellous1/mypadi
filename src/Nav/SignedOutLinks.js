import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import FooterLogo from "../images/footerlogo.svg";

class SignedOutLinks extends Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <nav class="navbar navbar-light navbar-fixed navbar-expand-md navbar-lg py-3">
          <NavLink to="/" class="navbar-brad brand-logo">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              className="d-none d-md-block"
            />
            <img src="/assets/MLogo.svg" alt="Logo" className="d-md-none" />
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
              <li className="nav-item mr-3">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="NavActive"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item  mr-3">
                <NavHashLink
                  smooth
                  to="/#features"
                  activeClassName="NavActive"
                  className="nav-link"
                >
                  Features
                </NavHashLink>
              </li>
              <li className="nav-item  mr-3">
                <NavHashLink
                  smooth
                  to="/#mobile-app"
                  activeClassName="NavActive"
                  className="nav-link"
                >
                  Mobile App
                </NavHashLink>
              </li>
              <li className="nav-item mb-sm-3 mr-3">
                <Link to="/SignIn" className="nav-link btn btn-outline-primary px-4">
                  Log In
                </Link>
              </li>
              <li className="nav-item  mr-3">
                <NavLink
                  to="/SignUp"
                  className=" btn btn-primary text-white px-2"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="site-conte  py-5">{content}</div>

        <div class="footer py-5">
          <div class="container">
            <div class="row text-center text-md-left">
              <div class="col-md-5">
                <img src={FooterLogo} class="mb-3" alt="" />
                <p class="footer-text">
                  Padi is your goto website for alll your journals and notes
                  create by <a href="twitter.com/vello_codes">Vello</a> and free
                  to use by everyone and anyone
                </p>
                <p class="footer-text">©Padi 2020. All rights reserved</p>
              </div>
              <div class="col-md-7">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4">
                      <p class="footer-header">Company</p>
                      <p class="footer-text">
                        <NavHashLink smooth to="/">
                          Home
                        </NavHashLink>
                        <br />
                        <NavHashLink smooth to="/#features">
                          Features
                        </NavHashLink>
                        <br />
                        <NavHashLink smooth to="/#mobile-apos">
                          Apps
                        </NavHashLink>
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p class="footer-header">Region</p>
                      <p class="footer-text">
                        <NavHashLink smooth to="/">
                          Indonesia
                        </NavHashLink>
                        <br />
                        <NavHashLink smooth to="/">
                          Singapore
                        </NavHashLink>
                        <br />
                        <NavHashLink smooth to="/">
                          Hongkong
                        </NavHashLink>
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p class="footer-header">Help</p>
                      <p class="footer-text">
                        <NavHashLink smooth to="/">
                          Blog
                        </NavHashLink>
                        <br />
                        <NavHashLink smooth to="/">
                          Contact support
                        </NavHashLink>
                        <br />
                        <NavHashLink smooth to="/">
                          Instructions
                        </NavHashLink>
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
