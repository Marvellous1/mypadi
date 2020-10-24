import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import BoardList from "./BoardList";
import CreateBoard from "./CreateBoard";

class BoardDashboard extends Component {
  render() {
    const { boards, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signIn" />;
    console.log("fff", boards);
    return (
      <div className="container">
        <div className="row mb-5 pb-4">
          <div className="col-md-4 mb-3">
            <div className="card card-col">
              <div className="card-body d-flex new-board">
                <div>
                  <i
                    class="fa fa-plus react-icons mr-5 mt-3"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="text-left">
                  <div className="card-subtext">New Board</div>
                  <div className="card-smalltext">
                    <b>Create a new board</b>
                  </div>
                  <CreateBoard btn_title="Create" btn_style="btn px-4 mt-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card card-col">
              <div className="card-body d-flex current-package">
                <div>
                  <i
                    class="fa fa-th react-icons mr-5 mt-3"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="text-center">
                  <div className="card-subtext">Total Boards</div>
                  <div className="card-number ">{boards && boards.length}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card card-col">
              <div className="card-body d-flex delivered-packages">
                <div>
                  <i
                    class="fa fa-plus react-icons mr-5 mt-3"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="text-left">
                  <div className="card-subtext">Get Support</div>
                  <div className="card-smalltext">
                    <b>Ask Questions, Get Help</b>
                  </div>
                  <button className="btn btn-outline-success mt-2">
                    <Link to="/support">Get Help</Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="package-list bg-white p-3">
          {boards && boards.length > 0 ? (
            <div>
              <h2 className="mb-4 blue ">My Boards</h2>
              <BoardList boards={boards} auth={auth} />
            </div>
          ) : (
            <div className= "text-center p-5">
              You Have Not Created Any Board Yet <br/>
              <small className="text-muted">Boards help to distinctively categorize your notes </small>
              <CreateBoard
              btn_title="Create A Board Now"
              btn_style=" add-board-btn btn-outline-primary mt-3"
            />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.firestore.ordered.boards,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "boards" }])
)(BoardDashboard);
