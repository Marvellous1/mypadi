import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { deleteBoard } from "../store/actions/boardActions";

class DeleteBoard extends Component {
  handleChange = (board) => {
    this.props.deleteBoard(board);
  };

  render() {
    const { board } = this.props;
    return (
      <div>
        <i
          class=" fa fa-trash "
          style={{ fontSize: "24px", color: 'red', cursor: "pointer"}}
          onClick={() => this.handleChange(board)}
        ></i>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBoard: (board) => dispatch(deleteBoard(board)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteBoard);
