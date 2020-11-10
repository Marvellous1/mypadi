import React, { Component } from "react";
import { connect } from "react-redux";
import { createJournal } from "../../store/actions/journalActions";
import { Redirect } from "react-router-dom";

import "draft-js/dist/Draft.css";

import { Editor, EditorState, RichUtils } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

class CreateJournal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      editorState: EditorState.createEmpty(),
      BoardID: null,
      tags: "",
      createdNote: false,
    };
  }

  componentWillMount() {
    const { BoardID } = this.props.match.params;
    this.setState({ BoardID });
  }

  onContentChange = (editorState) => {
    this.setState({
      editorState,
      content: stateToHTML(editorState.getCurrentContent()),
    });
  };

  onTitleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { auth } = this.props;
    console.log("ss", this.state);
    this.props.createJournal(this.state);
    this.setState({
      createdNote: true,
    });
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  renderInlineStyle = (value, style) => {
    const currentInlineStyle = this.state.editorState.getCurrentInlineStyle();
    let className = "";
    if (currentInlineStyle.has(style)) {
      className = "active";
    }

    return (
      <input
        type="button"
        value={`${value}`}
        data-style={style}
        onMouseDown={this.toggleInlineStyle}
        className={`format-icon material-icons ${className}`}
      />
    );
  };

  renderBlockButton(value, style) {
    const currentBlockType = RichUtils.getCurrentBlockType(
      this.state.editorState
    );
    let className = "";
    if (currentBlockType === style) {
      className = "active";
    }
    return (
      <input
        type="button"
        value={`${value}`}
        data-style={style}
        onMouseDown={this.toggleBlockType}
        className={`format-icon material-icons ${className}`}
      />
    );
  }

  toggleInlineStyle = (event) => {
    event.preventDefault();
    let style = event.currentTarget.getAttribute("data-style");
    this.setState({
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, style),
    });
  };

  toggleBlockType = (event) => {
    event.preventDefault();

    let block = event.currentTarget.getAttribute("data-style");
    this.setState({
      editorState: RichUtils.toggleBlockType(this.state.editorState, block),
    });
  };

  render() {
    const { auth } = this.props;
    const { createdNote } = this.state;
    const stylebuttons = [
      {
        value: "\u{1d470}",
        style: "ITALIC",
      },
      {
        value: "\u{f032}",
        style: "BOLD",
      },
      {
        value: "\u{e249}",
        style: "UNDERLINE",
      },
    ];

    const blockTypeButtons = [
      {
        value: "\u{e241}",
        block: "unordered-list-item",
      },

      {
        value: "\u{e242}",
        block: "ordered-list-item",
      },
    ];

    if (!auth.uid) return <Redirect to="/signIn" />;
    if (createdNote)
      return <Redirect to={`/board/${this.props.match.params.BoardID}`} />;

    return (
      <div className="container">
        <div className="mb-5">
          <h3 className="d-inlineock">Enter Title</h3>
          <input
            type="text"
            className="form-control title-input"
            id="title"
            placeholder="Enter title"
            onChange={this.onTitleChange}
          />
        </div>
        <div className="5">
          <h3 className="d-inlineock">
            Content{" "}
            <span className="float-right">
              {stylebuttons.map((button) => {
                return this.renderInlineStyle(button.value, button.style);
              })}
              {blockTypeButtons.map((button) => {
                return this.renderBlockButton(button.value, button.block);
              })}
            </span>
          </h3>
          <div className="content-input">
            <Editor
              editorState={this.state.editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onContentChange}
              placeholder={"Enter Note Content..."}
    
            />
          </div>
        </div>
        <div className="float-right mt-5">
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Save Note
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createJournal: (journal) => dispatch(createJournal(journal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateJournal);
