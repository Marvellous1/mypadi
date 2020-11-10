import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteJournal } from "../../store/actions/journalActions";

class DeleteJournal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BoardID: this.props.BoardID,
      id: this.props.journal.id,
    };
  }

  handleChange = () => {
    console.log("jiii", this.state);

    this.props.deleteJournal(this.state);
  };

  render() {
    return (
      <div>
        <p
          className="text-danger"
          onClick={this.handleChange}
          style={{ cursor: "pointer" }}
        >
          <b>DELETE</b>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteJournal: (journal) => dispatch(deleteJournal(journal)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteJournal);
