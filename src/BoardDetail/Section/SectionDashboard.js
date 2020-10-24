import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SectionList from "./SectionList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import CreateSection from "./CreateSection";

class SectionDashboard extends Component {
  render() {
    const { auth, sections, board, boards } = this.props;
    if (board) {
      const id = this.props.match.params.BoardID;
      if (!auth.uid) return <Redirect to="/signIn" />;
      const restBoards = boards.filter(item => item.id !== id )
      return (
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
                {board.name}
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {
                  restBoards.map(item => {
                    return (
                      <a class="dropdown-item" href={`/board/${item.id}`}>
                      {item.name}
                    </a>                      
                    )
                  })
                }
              </div>
            </div>


          <SectionList sections={sections} BoardID={id} auth={auth} />
          </div>
      );
    } else {
      return <div>fgybhjn</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.BoardID;
  const boards = state.firestore.data.boards;
  const OrderedBoards = state.firestore.ordered.boards;
  const board = boards ? boards[id] : null;
  const sections = state.firestore.ordered.sections;
  return {
    sections: sections,
    board: board,
    boards: OrderedBoards,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => {
    const storeAs = "sections";
    const Testid = ownProps.match.params.BoardID;
    return [
      { collection: "boards" },
      {
        collection: "boards",
        doc: Testid,
        subcollections: [{ collection: "sections" }],
        storeAs,
      },
    ];
  })
)(SectionDashboard);
