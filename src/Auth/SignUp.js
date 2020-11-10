import React, { Component } from "react";
import { signUp } from "../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <div className="container auth-bg">
        <div className="row ">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h2 className="mb-5 ">Sign Up</h2>
                <form onSubmit={this.handleSubmit} className="form-row">
                  <div class="form-group col-md-6">
                    <label for="firstname">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstname"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="lastname">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastname"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group  col-12">
                    <label for="email">Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="confirm">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirm"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class=" mt-4 mb-3 col-12">
                    <h6 className="text-black">
                      Already a user?
                      <span className="text-primary">
                        <Link to="/SignIn"> Sign In </Link>
                      </span>
                    </h6>
                  </div>
                  <div className="red-text col-12">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                  <div className="col-12">
                  <button className="btn btn-primary float-right " type="submit">
                    Sign Up
                  </button></div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      // <div>
      //     <form onSubmit = {this.handleSubmit}>
      //         <h4>Sign Up</h4>
      //         <div className="input-field">
      //             <label htmlFor="firstname">First Name</label>
      //             <input type="text" id='firstname' onChange={this.handleChange}/>
      //         </div>
      //         <div className="input-field">
      //             <label htmlFor="lastname">Last Name</label>
      //             <input type="text" id='lastname' onChange={this.handleChange}/>
      //         </div>
      //         <div className="input-field">
      //             <label htmlFor="email">Email</label>
      //             <input type="email" id='email' onChange={this.handleChange}/>
      //         </div>
      //         <div className="input-field">
      //             <label htmlFor="password">Password</label>
      //             <input type="password" id='password' onChange={this.handleChange}/>
      //         </div>
      //         <div className="input-field">
      //             <label htmlFor="confirm">ConfirmPassword</label>
      //             <input type="password" id='confirm' onChange={this.handleChange}/>
      //         </div>
      //         <div className = 'red-text'>
      //             { authError ? <p>{authError}</p> : null}
      //         </div>
      //         <div className="input-field">
      //             <button className="btn blue">Sign In</button>
      //         </div>
      //     </form>
      // </div>
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
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
