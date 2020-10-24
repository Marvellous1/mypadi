import React, { Component } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import SignOut from "../Auth/SignOut";
import CreateBoard from "../BoardDashboard/CreateBoard";

class SignedInLinks extends Component {
  state = {
    activeClass: "dashboard",
  };

  changeUrl = () => {
    const pathname = this.props.location.pathname.split("/");
    const link = pathname[1];
    this.setState({
      activeClass: link,
    });
  };

  componentDidMount() {
    this.changeUrl();
  }

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.changeUrl();
    }
  }

  render() {
    const { auth, boards, content } = this.props;
    const boardUrl = boards && boards.length > 0 && boards[0].boardId;
    const { activeClass } = this.state;
    return (
      <div>
        <nav class="navbar navbar-light navbar-lg py-3">
          <Link to="/dashboard" class="navbar-brad brand-logo">
            myPadi
          </Link>
          <div className="d-flex align-items-center">
            <CreateBoard
              btn_title="+ Add Board"
              btn_style=" add-board-btn btn-outline-primary mr-5"
            />
            <Link
              to="/profile"
              className="avatar mr-3 d-flex align-items-center justify-content-center"
            >
              <span>MA</span>
            </Link>
            <SignOut />
          </div>
        </nav>
        <div className="row no-gutters site-content">
          <div className="col-lg-2 sidebar">
            <ul class="nv side-menu mt-5" id="side-menu">
              <li class={activeClass === "dashboard" && "active"}>
                <Link to="/dashboard">
                  <i class="fa fa-dashboard" aria-hidden="true"></i>
                  Dashboard
                </Link>
              </li>
              <li class={activeClass === "board" && "active"}>
                <Link to={`board/${boardUrl}`}>
                  <i class="fa fa-th" aria-hidden="true"></i>
                  My Board
                </Link>
              </li>
              <li>
                <Link to="">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                  Profile
                </Link>
              </li>
              <li class={activeClass === "support" && "active"}>
                <Link to="/support">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-10  py-5" id="content">
            {content}
          </div>
          <div className="py-4 text-center">
            {" "}
            <p class="footer-text">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const boards = state.firestore.ordered.boards;
  return {
    boards: boards,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(withRouter(SignedInLinks));
