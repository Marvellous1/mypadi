import React, { Component } from "react";
import EditSection from "./EditSection";
import NoteDashboard from "../Note/NoteDashboard";

class SectionSummary extends Component {
  render() {
    const { section, index, BoardID } = this.props;

    return (
        <div class="card">
          <div class="card-body">
            <h5 class="section-title">{section.title}</h5>
            <p class="card-text card-desc mt-n2 mb-4">{section.objective} </p>
            <NoteDashboard section = {section} BoardID = {BoardID}/>
          </div>
      </div>
    );
  }
}

export default SectionSummary;
