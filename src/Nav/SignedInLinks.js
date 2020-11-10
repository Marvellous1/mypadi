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
    const { auth, boards, content, dName } = this.props;
    const boardUrl = boards && boards.length > 0 && boards[0].boardId;
    const { activeClass } = this.state;
    return (
      <div>
        <nav class="navbar navbar-light navbar-fixed navbar-lg py-3">
          <Link to="/dashboard" class="navbar-brad brand-logo">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              className="d-none d-md-block"
            />
            <img src="/assets/MLogo.svg" alt="Logo" className="d-md-none" />
          </Link>
          <a
            data-toggle="collapse"
            href="#"
            data-target=".collapse"
            role="button"
            class="d-md-none text-primary "
          >
            <i class="fa fa-bars fa-lg"></i>
          </a>

          <div className=" d-none d-md-flex align-items-center">
            <CreateBoard
              btn_title="+ Add Board"
              btn_style=" add-board-btn btn-outline-primary mr-5"
            />
            <Link
              to="/"
              className="avatar mr-3 d-flex align-items-center justify-content-center"
            >
              <span>{dName.toUpperCase()}</span>
            </Link>
            <SignOut />
          </div>
        </nav>
        <div class="container-fluid px-0 h-100">
          <div className="row min-vh-100 collapse show no-gutters d-flex h-100 position-relative site-content ">
            <div className="col-2 w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
              <div className="  h-100 w-sidebar">
                <div className="d-flex d-md-none align-items-center">
                  <Link
                    to="/"
                    className="avatar mr-3 d-flex align-items-center justify-content-center"
                  >
                    <span>{dName.toUpperCase()}</span>
                  </Link>
                  <CreateBoard
                    btn_title="+ Add Board"
                    btn_style=" add-board-btn btn-outline-primary mr-5"
                  />
                </div>

                <ul class="nv side-menu mt-5 " id="side-menu">
                  <li class={activeClass === "dashboard" && "active"}>
                    <Link to="/dashboard">
                      <i class="fa fa-dashboard" aria-hidden="true"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li class={activeClass === "board" && "active"}>
                    <Link to={`/board/${boardUrl}`}>
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
                <div className="d-md-none">
                  {" "}
                  <SignOut />
                </div>
              </div>
            </div>
            <div className="col site-content  py-5" id="content">
              {content}
            </div>
          </div>
        </div>{" "}
        <div className="py-3 text-center loggedInFooter">
          <p>
            ©Padi 2020. Made With ❤️ by{" "}
            <a href="twitter.com/Vello_Codes" className="text-primary">
              Vello
            </a>
          </p>
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
