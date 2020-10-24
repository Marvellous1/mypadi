import React, { Component } from "react";

import "./Demo.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light navbar-lg py-3">
          <a class="navbar-brad brand-logo">myPadi</a>
          <form class="for-inline">
            <button className="btn add-board-btn btn-outline-primary mr-5">
              + Add Board
            </button>
            <div className="avatar mr-3 d-flex align-items-center justify-content-center">
              <span>MA</span>
            </div>
            <div className="logout  mr-5">Logout</div>
          </form>
        </nav>
        <div className="row no-gutters ">
          <div className="col-lg-2 sidebar">
            <ul class="nv side-menu mt-5" id="side-menu">
              <li>
                <a href="dashboard.html" class="waves-effect">
                  <i class="fa fa-clock-o fa-fw" aria-hidden="true"></i>
                  Dashboard
                </a>
              </li>
              <li className="active">
                <a href="profile.html" class="waves-effect">
                  <i class="fa fa-user fa-fw" aria-hidden="true"></i>Profile
                </a>
              </li>
              <li>
                <a href="basic-table.html" class="waves-effect">
                  <i class="fa fa-table fa-fw" aria-hidden="true"></i>Basic
                  Table
                </a>
              </li>
              <li>
                <a href="fontawesome.html" class="waves-effect">
                  <i class="fa fa-font fa-fw" aria-hidden="true"></i>Icons
                </a>
              </li>
              <li>
                <a href="map-google.html" class="waves-effect">
                  <i class="fa fa-globe fa-fw" aria-hidden="true"></i>Google Map
                </a>
              </li>
              <li>
                <a href="blank.html" class="waves-effect">
                  <i class="fa fa-columns fa-fw" aria-hidden="true"></i>Blank
                  Page
                </a>
              </li>
              <li>
                <a href="404.html" class="waves-effect">
                  <i class="fa fa-info-circle fa-fw" aria-hidden="true"></i>
                  Error 404
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-10  py-5" id="content">
            <div className="container">
              <div class="dropdown py-3">
                <a
                  class=" dropdown-toggle board-title"
                  href="#"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company Info
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>

              <div class="card-columns ">
                <div class="card">
                  <div class="card-body">
                    <h5 class="section-title">Card title that</h5>
                    <p class="card-text card-desc mt-n2 mb-4">
                      This is a longer card with supporting text
                    </p>
                    <div class="collapse show" id="card-group">
                      <div class="card mb-3">
                        <div class="card-body">
                          <h5 class="card-title">Card title that</h5>
                          <p class="card-text card-desc mt-n2 mb-3">
                            This is a longer card with supporting text
                          </p>
                          <div className="teams mt-5">
                            <div className="btn btn-outline-primary btn-sm mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-secondary btn-sm  mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-success btn-sm mr-2">
                              <b>+</b>
                            </div>
                            <small className="attachmnent float-right">
                              02-12-2020 <br /> 4:23pm
                            </small>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div class="card-body">
                          <h5 class="card-title">Card title that</h5>
                          <p class="card-text card-desc mt-n2 mb-3">
                            This is a longer card with supporting text
                          </p>
                          <div className="teams mt-5">
                            <div className="btn btn-outline-primary btn-sm mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-secondary btn-sm  mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-success btn-sm mr-2">
                              <b>+</b>
                            </div>
                            <small className="attachmnent float-right">
                              02-12-2020 <br /> 4:23pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-3 add-btn">
                      <div class="card-body p-3 collapse card-input">
                        <form>
                          <div class="form-group">
                            <label for="title">Title</label>
                            <input
                              type="text"
                              class="form-control"
                              id="title"
                              placeholder="Enter title"
                            />
                          </div>
                          <div class="form-group">
                            <label for="desc">description</label>
                            <textarea
                              class="form-control"
                              id="desc"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="d-flex float-right">
                            <button
                              className="btn mr-3 btn-secondary"
                              data-toggle="collapse"
                              data-target=".card-input"
                              type="reset"
                            >
                              Cancel
                            </button>
                            <button className="btn  btn-primary" type="submit">
                              Create
                            </button>
                          </div>{" "}
                        </form>
                      </div>
                      <div
                        class="card-body p-3 align-middle text-center"
                        data-toggle="collapse"
                        href=".card-input"
                      >
                        <p class="card-text card-desc collapse show card-input">
                          <strong>+</strong> Add New
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="section-title">Card title that</h5>
                    <p class="card-text card-desc mt-n2 mb-4">
                      This is a longer card with supporting text
                    </p>
                    <div class="collapse show" id="card-group">
                      <div class="card mb-3">
                        <div class="card-body">
                          <h5 class="card-title">Card title that</h5>
                          <p class="card-text card-desc mt-n2 mb-3">
                            This is a longer card with supporting text
                          </p>
                          <div className="teams mt-5">
                            <div className="btn btn-outline-primary btn-sm mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-secondary btn-sm  mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-success btn-sm mr-2">
                              <b>+</b>
                            </div>
                            <small className="attachmnent float-right">
                              02-12-2020 <br /> 4:23pm
                            </small>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div class="card-body">
                          <h5 class="card-title">Card title that</h5>
                          <p class="card-text card-desc mt-n2 mb-3">
                            This is a longer card with supporting text
                          </p>
                          <div className="teams mt-5">
                            <div className="btn btn-outline-primary btn-sm mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-secondary btn-sm  mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-success btn-sm mr-2">
                              <b>+</b>
                            </div>
                            <small className="attachmnent float-right">
                              02-12-2020 <br /> 4:23pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-3 add-btn">
                      <div class="card-body p-3 collapse card-input">
                        <form>
                          <div class="form-group">
                            <label for="title">Title</label>
                            <input
                              type="text"
                              class="form-control"
                              id="title"
                              placeholder="Enter title"
                            />
                          </div>
                          <div class="form-group">
                            <label for="desc">description</label>
                            <textarea
                              class="form-control"
                              id="desc"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="d-flex float-right">
                            <button
                              className="btn mr-3 btn-secondary"
                              data-toggle="collapse"
                              data-target=".card-input"
                              type="reset"
                            >
                              Cancel
                            </button>
                            <button className="btn  btn-primary" type="submit">
                              Create
                            </button>
                          </div>{" "}
                        </form>
                      </div>
                      <div
                        class="card-body p-3 align-middle text-center"
                        data-toggle="collapse"
                        href=".card-input"
                      >
                        <p class="card-text card-desc collapse show card-input">
                          <strong>+</strong> Add New
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="section-title">Card title that</h5>
                    <p class="card-text card-desc mt-n2 mb-4">
                      This is a longer card with supporting text
                    </p>
                    <div class="collapse show" id="card-group">
                      <div class="card mb-3">
                        <div class="card-body">
                          <h5 class="card-title">Card title that</h5>
                          <p class="card-text card-desc mt-n2 mb-3">
                            This is a longer card with supporting text
                          </p>
                          <div className="teams mt-5">
                            <div className="btn btn-outline-primary btn-sm mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-secondary btn-sm  mr-2">
                              SM
                            </div>
                            <div className="btn btn-outline-success btn-sm mr-2">
                              <b>+</b>
                            </div>
                            <small className="attachmnent float-right">
                              02-12-2020 <br /> 4:23pm
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-3 add-btn">
                      <div class="card-body p-3 collapse card-input">
                        <form>
                          <div class="form-group">
                            <label for="title">Title</label>
                            <input
                              type="text"
                              class="form-control"
                              id="title"
                              placeholder="Enter title"
                            />
                          </div>
                          <div class="form-group">
                            <label for="desc">description</label>
                            <textarea
                              class="form-control"
                              id="desc"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="d-flex float-right">
                            <button
                              className="btn mr-3 btn-secondary"
                              data-toggle="collapse"
                              data-target=".card-input"
                              type="reset"
                            >
                              Cancel
                            </button>
                            <button className="btn  btn-primary" type="submit">
                              Create
                            </button>
                          </div>{" "}
                        </form>
                      </div>
                      <div
                        class="card-body p-3 align-middle text-center"
                        data-toggle="collapse"
                        href=".card-input"
                      >
                        <p class="card-text card-desc collapse show card-input">
                          <strong>+</strong> Add New
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="card mb-3 add-card py-5">
                      <div class="card-body collapse card-input">
                        <form>
                          <div class="form-group">
                            <label for="title">Title</label>
                            <input
                              type="text"
                              class="form-control"
                              id="title"
                              placeholder="Enter title"
                            />
                          </div>
                          <div class="form-group">
                            <label for="desc">description</label>
                            <textarea
                              class="form-control"
                              id="desc"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="d-flex float-right">
                            <button
                              className="btn mr-3 btn-secondary"
                              data-toggle="collapse"
                              data-target=".card-input"
                              type="reset"
                            >
                              Cancel
                            </button>
                            <button className="btn  btn-primary" type="submit">
                              Create
                            </button>
                          </div>{" "}
                        </form>
                      </div>
                      <div
                        class="card-body p-5 m-5 align-middle text-center"
                        data-toggle="collapse"
                        href=".card-input"
                      >
                        <p class="card-text card-desc collapse show card-input">
                          <strong>+</strong> Add New
                        </p>
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

export default App;
