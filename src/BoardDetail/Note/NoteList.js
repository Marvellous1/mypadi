import React from "react";
import NoteSummary from "./NoteSummary";

const NoteList = ({ notes, auth, Sid }) => {
  return (
    <div>
      {notes &&
        notes.map((note, index) => {
          return <NoteSummary note={note} index={index + 1} key={note.id} />;
        })}
    </div>
  );
};

export default NoteList;
