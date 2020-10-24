import React, { Component } from "react";
import { connect } from "react-redux";
import { createSection } from "../../store/actions/sectionActions";
import { Redirect } from "react-router-dom";

class CreateSection extends Component {
  state = {
    title: "",
    objective: "",
    BoardID: null,
    display: "none",
  };

  componentWillMount() {
    const { BoardID } = this.props;
    this.setState({ BoardID });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { auth } = this.props;
    this.props.createSection(this.state);
    this.setState({
      title: "",
      objective: "",
    });
  };

  toggleForm = () => {
    if (this.state.display === "none") {
      this.setState({ display: "block" });
    } else if (this.state.display === "block") {
      this.setState({ display: "none" });
    }
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signIn" />;

    return (
      <div class="card mb-3 add-card py-5">
        <div class="card-body collapse add-card-input">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
            <div class="form-group">
              <label for="objective">description</label>
              <textarea
                class="form-control"
                id="objective"
                rows="3"
                onChange={this.handleChange}
                value={this.state.objective}
              ></textarea>
            </div>
            <div className="d-flex float-right">
              <button
                className="btn mr-3 btn-secondary"
                data-toggle="collapse"
                data-target=".add-card-input"
                type="reset"
              >
                Cancel
              </button>
              <button
                className="btn  btn-primary"
                type="submit"
                data-toggle="collapse"
                data-target=".add-card-input"
              >
                Create
              </button>
            </div>
          </form>
        </div>
        <div
          class="card-body p-5 m-5 align-middle text-center collapse show add-card-input"
          data-toggle="collapse"
          href=".add-card-input"
        >
          <p class="card-text card-desc  card-input">
            <strong>+</strong> Add New
          </p>
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
    createSection: (section) => dispatch(createSection(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSection);
