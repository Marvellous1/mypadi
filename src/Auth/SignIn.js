import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../store/actions/authActions";
import ErrorMessage from "../ErrorMessage";
import { Redirect, Link } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <div className="container auth-bg">
        <div className="row ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2 className="mb-5 ">Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      onChange={this.handleChange}
                    />
                    <ForgotPassword />
                  </div>
                  <div class=" mt-4 mb-3">
                    <p className="text-black">
                      No account yet?
                      <span className="text-primary">
                        <Link to="/SignUp"> Sign Up Now </Link>
                      </span>
                    </p>
                  </div>
                  <ErrorMessage />
                  <button className="btn btn-primary float-right" type="submit">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
