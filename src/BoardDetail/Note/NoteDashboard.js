import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NoteList from "./NoteList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import CreateNote from "./CreateNote";

class NoteDashboard extends Component {
  render() {
    const { auth, notes } = this.props;
    if (notes) {
      const {id} = this.props.journal;
      if (!auth.uid) return <Redirect to="/signIn" />;
      return (
        <div>
          <NoteList notes={notes} auth={auth} Sid={id} />
          <CreateNote Sid={id} />
        </div>
      );
    } else {
      return <div>fgybhjn</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log('xx', state.firestore)
  // const id = ownProps.journal.id
  // const journals = state.firestore.data.journals
  // const journal = journals ? journals[id] : null
  const notes = state.firestore.ordered.notes;
  return {
    notes: notes,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => {
    const storeAs = "notes";
    const Testid = ownProps.journal.id;
    // console.log('dd',ownProps.journal)
    return [
      { collection: "journals" },
      {
        collection: "journals",
        doc: Testid,
        subcollections: [{ collection: "notes" }],
        storeAs,
      },
    ];
  })
)(NoteDashboard);
