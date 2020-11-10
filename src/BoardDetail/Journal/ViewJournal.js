import React, { Component } from "react";

import "draft-js/dist/Draft.css";

import { Editor, EditorState } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import moment from "moment";

class ViewJournal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.location.state.journal.title,
      editorState: EditorState.createWithContent(
        stateFromHTML(this.props.location.state.journal.content)
      ),
      createdAt: this.props.location.state.journal.createdAt,
      tags: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="card">
        <div className="card-body py-5">
        <small className="float-right">{moment(this.state.createdAt.toDate().toString()).calendar()}</small>
          <h4 className="mb-5">{this.state.title}</h4>
          <Editor editorState={this.state.editorState} readOnly={true} />
        </div></div>
      </div>
    );
  }
}

export default ViewJournal;
