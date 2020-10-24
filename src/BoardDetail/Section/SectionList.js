import React from "react";
import SectionSummary from "./SectionSummary";
import CreateSection from "./CreateSection";

const SectionList = ({ sections, auth, BoardID }) => {
  console.log("jjjj", sections);
  return (
    <div class="card-columns ">
      {sections &&
        sections.map((section, index) => {
          return (
            <SectionSummary section={section} index={index + 1} BoardID={BoardID} />
          );
        })}
      <CreateSection BoardID={BoardID} />
    </div>
  );
};

export default SectionList;
