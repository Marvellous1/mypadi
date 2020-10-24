import React, { Component } from "react";

import "./Demo.css";
import "./Demo2.css";

class Demo2 extends Component {
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
              <div className="row mb-5 pb-4">
                <div className="col-md-4 col-lg-3 mb-3">
                  <div className="card card-col">
                    <div className="card-body d-flex new-board">
                      <div>
                        <i
                          class="fa fa-info-circle react-icons mr-3 mt-3"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="text-left">
                        <div className="card-subtext">New Board</div>
                        <div className="card-smalltext">
                          <b>Create a new board</b>
                        </div>
                        <button className="btn px-4 mt-2">Create</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                  <div className="card card-col">
                    <div className="card-body d-flex current-package">
                      <div>
                        <i
                          class="fa fa-info-circle react-icons mr-3 mt-3"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="text-center">
                        <div className="card-subtext">Total Boards</div>
                        <div className="card-number ">37</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                  <div className="card card-col">
                    <div className="card-body d-flex delivered-packages">
                      <i
                        class="fa fa-info-circle react-icons mr-3 mt-3"
                        aria-hidden="true"
                      ></i>

                      <div className="text-center">
                        <div className="card-subtext">Shared Boards</div>
                        <div className="card-number ">124</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3">
                  <div className="card card-col">
                    <div className="card-body d-flex total-packages">
                      <i
                        class="fa fa-info-circle react-icons mr-3 mt-3"
                        aria-hidden="true"
                      ></i>
                      <div className="text-center">
                        <div className="card-subtext">Total Notes</div>
                        <div className="card-number ">3021</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="package-list bg-white p-3">
                <h2 className="mb-4 blue ">My Boards</h2>
                <table class="table table-md-responsive mb-3">
                  <thead class="thead">
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">NAME</th>
                      <th scope="col">DESCRIPTION</th>
                      <th scope="col">NUMBER OF NOTES</th>
                      <th scope="col">EDIT</th>
                      <th scope="col">DELETE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Design specs</td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </td>
                      <td>16</td>
                      <td>2020-08</td>
                      <td>2020-08-1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo2;
