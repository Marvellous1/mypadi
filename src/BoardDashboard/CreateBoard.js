import React, { Component } from "react";
import { connect } from "react-redux";
import { createBoard } from "../store/actions/boardActions";
import { Redirect } from "react-router-dom";

class CreateBoard extends Component {
  state = {
    name: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBoard(this.state);
  };

  render() {
    const { auth, btn_title, btn_style } = this.props;
    if (!auth.uid) return <Redirect to="/signIn" />;
    return (
      <div>
          <button
            type="button"
            class={`btn ${btn_style}`}
            data-toggle="modal"
            data-target="#new-board-modal"
          >
            {btn_title}
          </button>

        <div
          class="modal fade"
          id="new-board-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Create Board
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
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input
                      type="text"
                      id="name"
                      aria-describedby="nameHelp"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description"> Description</label>
                    <textarea
                      id="description"
                      className="form-control"
                      onChange={this.handleChange}
                      data-length="80"
                    />
                    <small
                      class="helper-text"
                      data-error="wrong"
                      data-success="right"
                    >
                      A short description about your board
                    </small>
                  </div>
                  <div className="input-field ">
                    <button className="btn btn-primary">Create</button>
                  </div>
                </form>
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
    createBoard: (board) => dispatch(createBoard(board)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
