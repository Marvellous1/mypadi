import React, { Component } from "react";

import "./Journal.css";
import moment from "moment";
import { Link } from "react-router-dom";
import DeleteJournal from "./DeleteJournal";
import { Editor, EditorState } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";

export default class JournalSummary extends Component {
  state = {
    hovered: false,
    editorState: EditorState.createWithContent(stateFromHTML(this.props.journal.content)),
  };

  toggleHover = () => {
    this.setState({ hovered: !this.state.hovered });
  };
  render() {
    const { journal, BoardID } = this.props;
    return (
      <div className="col-lg-4 col-md-3 mb-5">
        <div
          className={`card note-card ${this.state.hovered && "hovered"} `}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          onClick={this.toggleHover}
        >
          {this.state.hovered ? (
            <div className="card-body pt-5 text-center">

              <button className="btn view-note-btn btn-lg mb-4">
                <Link to={{ pathname: `/${journal.id}/view`, state:{journal : journal, BoardID: BoardID}}}>View Note</Link>
              </button>
              <br />
              <button className="btn edit-note-btn  btn-lg mb-4">
                <Link to={{ pathname: `/${journal.id}/edit`, state:{journal : journal, BoardID: BoardID}}}>Edit Note</Link>
              </button>
              <DeleteJournal journal={journal} BoardID= {BoardID}/>
            </div>
          ) : (
            <div className="card-body pt-5">
              <h5 className="note-title pb-1">{journal.title}</h5>
              <Editor
              editorState={this.state.editorState}
              readOnly={true}
            />
              <div className="teams mt-3">
                <div className="btn btn-outline-primary btn-sm mr-2">SM</div>
                <div className="btn btn-outline-secondary btn-sm  mr-2">SM</div>
                <div className="btn btn-outline-success btn-sm mr-2">
                  <b>+</b>
                </div>
                <small className="attachmnent float-right">
                  {moment(journal.createdAt.toDate().toString()).calendar()}
                </small>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
