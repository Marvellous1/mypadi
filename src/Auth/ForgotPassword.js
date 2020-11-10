import React, { Component } from 'react';

import ErrorMessage from "../ErrorMessage";


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  
 class ForgotPassword extends Component {
    state = {
        emailAddress: "",
      };
  
    handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      if ((this.state.emailAddress = validEmailRegex.test(value))) {
        this.setState({ errorMessage: "Wrong Email Format" });
      }
      this.setState({ [name]: value, errorMessage: "" });
    };
    render() {
        return (
            <div>
            <div className="">
            <small
              className="float-right text-primary"
              role="button"
              data-toggle="modal"
              data-target="#forgot-password-modal"
            >
              Forgot Password
            </small>
    
            <div
              class="modal fade"
              id="forgot-password-modal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content forgot-modal">
                  <div class="modal-body ">
                    <form onSubmit={this.handleSubmit}>
                      <div className="text-center">
                        <h4>Recover Password</h4>
                        <p>
                          Enter your Email and instructions will be sent to you!{" "}
                        </p>
                      </div>{" "}
                      <div className="form-group">
                        <label htmlFor="youremailaddress">Email Address</label>
                        <input
                          type="email"
                          name="emailAddress"
                          className="form-control"
                          id="youremailaddress"
                          onChange={this.handleChange}
                          placeholder="example@address.com"
                          noValidate
                          autoComplete
                        />
                        {ErrorMessage !== " " && (
                          <span className="error" style={{ color: "red" }}>
                            {ErrorMessage}
                          </span>
                        )}
                      </div>
                      <div className="text-center">
                        <button className="btn bg_purple round px-4 mb-3">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
        );
    }
}

export default ForgotPassword;
