import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../store/actions/noteActions";
import { Redirect } from "react-router-dom";

import { Editor } from "@tinymce/tinymce-react";

class CreateNote extends Component {
  state = {
    title: "",
    about: "",
    body: "",
    Sid: null,
  };

  componentWillMount() {
    const { Sid } = this.props;
    this.setState({ Sid });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleEditorChange = (e) => {
    this.setState({ body: e.target.getContent() });
    console.log("Content was updated:", this.state.body);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNote(this.state);
  };


  render() {
    const { auth, Sid } = this.props;
    const rand = Math.floor(Math.random() * 100000000 + 1);
    if (!auth.uid) return <Redirect to="/signIn" />;
    return (
      <div>
        <div>
          <button
            className="btn btn-outline-primary btn-block"
            data-toggle="modal"
            data-target={`#${Sid}`}
          >
            Add Note
          </button>
        </div>

        <div
          class="modal fade"
          id={Sid}
          tabindex="-1"
          role="dialog"
          aria-labelledby={`${Sid}Title`}
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id={`${Sid}Title`}>
                  Create Note
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div id="accordion">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Title
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input
                            type="text"
                            id="title"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="about">Short Description</label>
                          <textarea
                            id="about"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                        </div>
                        <button
                          className="btn btn-outline-primary collapsed float-right"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                        >
                        Write
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Content
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        <Editor
                          init={{
                            selector: "textarea#article",
                            min_height: 350,
                            menu: {
                              view: { items: "preview" },
                              tools: {
                                title: "Tools",
                                items: "spellchecker | wordcount",
                              },
                              table: {
                                title: "Table",
                                items:
                                  "inserttable | cell row column | tableprops deletetable",
                              },
                            },
                            menubar: "title, tools, table",
                            plugins: [
                              "advlist autolink spellchecker lists link, tools image charmap print preview anchor",
                              "searchreplace wordcount visualblocks code fullscreen autoresize",
                              "insertdatetime table  media table paste code help ",
                            ],
                            toolbar:
                              "undo redo preview | formatselect | bold italic  | \
            alignleft aligncenter  | link image |\
            bullist numlist outdent indent | removeformat ",
                          }}
                          onChange={this.handleEditorChange}
                        />
                        <textarea id="article" className="form-control" />
                        <button className="btn btn-primary float-right m-3" onClick={this.handleSubmit}>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    createNote: (note) => dispatch(createNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
