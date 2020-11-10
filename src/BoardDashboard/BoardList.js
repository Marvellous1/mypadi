import React from "react";
import BoardSummary from "./BoardSummary";

const BoardList = ({ boards, auth }) => {
  return (
    <div className="table-responsive">
    <table class="table mb-3">
      <thead class="thead">
        <tr>
          <th scope="col">S/N</th>
          <th scope="col">NAME</th>
          <th scope="col">DESCRIPTION</th>
          <th scope="col">CREATED ON</th>
          <th scope="col">EDIT</th>
          <th scope="col">DELETE</th>
        </tr>
      </thead>
      {boards &&
        boards.map((board, index) => {
          return <BoardSummary board={board} key={board.id} index={index} />;
        })}
    </table></div>
  );
};

export default BoardList;
