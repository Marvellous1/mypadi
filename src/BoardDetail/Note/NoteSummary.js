import React, { Component } from "react";
import EditNote from "./EditNote";
import ChooseContentType from "../Content/ChooseContentType";
import moment from "moment";

class NoteSummary extends Component {
  render() {
    const { note, index } = this.props;
    console.log("note", note);
    return (
      <div>
        <div class="collapse show" id="card-group">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{note.title}</h5>
              <p class="card-text card-desc mt-n2 mb-3">
              {note.about}
              </p>
              <div className="teams mt-5">
                <div className="btn btn-outline-primary btn-sm mr-2">AA</div>
                <div className="btn btn-outline-secondary btn-sm  mr-2">AB</div>
                <div className="btn btn-outline-success btn-sm mr-2">
                  <b>+</b>
                </div>
                <small className="attachmnent float-right">
                {moment(note.createdAt.toDate().toString()).calendar()}
                </small>
              </div>
            </div>
          </div>
        </div>
            {/* <EditNote noteInfo={note} />
        <ChooseContentType note={note} /> */}
      </div>
    );
  }
}

export default NoteSummary;
