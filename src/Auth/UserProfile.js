
import React, { Component } from 'react'

class UserProfile extends Component {
    render() {
        return (  
            <div className="App">
        
            <div className="row no-gutters">
           
              <div className="col-lg-10">
                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-4">
                      <h2 className="mb-5 accout-settings">Account Settings</h2>
                      <form>
                        <div class="form-group">
                          <label for="yourname">Your Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="yourname"
                            defaultValue="Aigbe"
                          />
                        </div>
                        <div class="form-group">
                          <label for="youraddress">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="youraddress"
                            defaultValue="Nairobi, Kenya"
                          />
                        </div>
                        <div class="form-group">
                          <label for="yourname">Your Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="yourname"
                            defaultValue="Aigbe"
                          />
                        </div>
                        <div class="form-group">
                          <label for="yourname">Your Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="yourname"
                            defaultValue="Aigbe"
                          />
                        </div>
                        <div class="form-group">
                          <label for="password">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            disabled
                            id="password"
                            defaultValue="Aigbe"
                          />
                          <small class="float-right text-primary">Change</small>
                        </div>
                        <div class=" my-5">
                          <h6>Delete Your Account</h6>
                          <p>You will receive an email to confirm your decision.</p>
                        </div>

                      </form>
                    </div>
                    <div className="col-lg-6 offset-md-1 text-center mt-5 pt-5">
                      <div className="image-journal">
                        <div
                          style={{
                            width: "124px",
                            height: "124px",
                            textAlign: "center",
                            backgroundColor: "grey",
                          }}
                          className="mx-auto mb-3"
                        >                
                        </div>
                   </div>
                      <hr className="py-4 my-5 " />
                      <div className="payment-card mx-md-5 p-md-5 bg-white text-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        )
    }
}

export default UserProfile
