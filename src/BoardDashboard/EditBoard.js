import React, { Component } from "react";
import { connect } from "react-redux";
import { createBoard, editBoard } from "../store/actions/boardActions";
import { Redirect } from "react-router-dom";

class CreateBoard extends Component {
  state = {
    name: this.props.board.name,
    description: this.props.board.description,
    boardId : this.props.board.boardId
  };


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editBoard(this.state)
  };

  render() {
    const { auth, board } = this.props;
    if (!auth.uid) return <Redirect to="/signIn" />;
    return (
      <div>
          <div>
            <i
              class="fa fa-edit"
              style={{ fontSize: "24px", color: "orange", cursor: "pointer" }}
              data-toggle="modal"
              data-target= {`#${board.id}`}
            ></i>
          </div>       

        <div
          class="modal fade"
          id={board.id}
          tabindex="-1"
          role="dialog"
          aria-labelledby={`${board.id}Title`}
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id={`${board.id}Title`}>
                  Update Board
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
                <form >
                  <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input
                      type="text"
                      id="name"
                      aria-describedby="nameHelp"
                      className="form-control"
                      onChange={this.handleChange}
                      defaultValue={board.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description"> Description</label>
                    <textarea
                      id="description"
                      className="form-control"
                      onChange={this.handleChange}
                      data-length="80"
                      defaultValue={board.description}
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
                    <button className="btn btn-primary" onClick={this.handleSubmit} type="submit" data-dismiss="modal"> Update</button>
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
    editBoard: (board) => dispatch(editBoard(board)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
