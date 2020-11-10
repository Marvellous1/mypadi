import React from "react";
import JournalSummary from "./JournalSummary";
import CreateJournal from "./CreateJournal";
import NoJournal from "../../images/NoJournal.png";
import { Link } from "react-router-dom";

const JournalList = ({ journals, auth, BoardID }) => {
  return (
    <div class="row">
      {journals && journals.length > 0 ? (
        journals.map((journal, index) => {
          return (
            <JournalSummary
              journal={journal}
              index={index + 1}
              BoardID={BoardID}
            />
          );
        })
      ) : (
        <div className="col-12 text-center">
          <h3 className="text-muted mb-3">Create Your First Journal</h3>]
          <Link to={`/board/${BoardID}/new`}>
            <img src={NoJournal} alt="New" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default JournalList;
