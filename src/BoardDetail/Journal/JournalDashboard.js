import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import JournalList from "./JournalList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import CreateJournal from "./CreateJournal";

class JournalDashboard extends Component {
  render() {
    const { auth, journals, board, boards } = this.props;
    if (board) {
      const id = this.props.match.params.BoardID;
      if (!auth.uid) return <Redirect to="/signIn" />;
      const MyBoards = boards && boards.filter((item) => item.authorId == auth.uid);
      const restBoards = MyBoards.filter((item) => item.id !== id);
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="dropdown py-3">
                <a
                  class=" dropdown-toggle board-title"
                  href="#"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {board.name}
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  {restBoards.map((item) => {
                    return (
                      <a class="dropdown-item" href={`/board/${item.id}`}>
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-md-4"></div>
            <div className="col-md-4 text-right">
              <button className="btn btn-primary">
                <Link to={`/board/${id}/new`}>Create New</Link>
              </button>
            </div>
          </div>
          <JournalList journals={journals} BoardID={id} auth={auth} />
        </div>
      );
    } else {
      return <div className="text-center">Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.BoardID;
  const boards = state.firestore.data.boards;
  const OrderedBoards = state.firestore.ordered.boards;
  const board = boards ? boards[id] : null;
  const journals = state.firestore.ordered.journals;
  return {
    journals: journals,
    board: board,
    boards: OrderedBoards,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => {
    const storeAs = "journals";
    const Testid = ownProps.match.params.BoardID;
    return [
      { collection: "boards" },
      {
        collection: "boards",
        doc: Testid,
        subcollections: [{ collection: "journals" }],
        storeAs,
      },
    ];
  })
)(JournalDashboard);
