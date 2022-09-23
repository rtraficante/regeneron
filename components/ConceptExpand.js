import React from "react";

const ConceptExpand = ({ concept }) => {
  return (
    <div className="mt-2 justify-between items-center cursor-default">
      <div>
        <p>Description: {concept.description}</p>
        <p>
          Alternative Names:{" "}
          {concept.alternativeNames ? concept.alternativeNames : "None"}
        </p>
        <div>
          <p>Children</p>
        </div>
      </div>
    </div>
  );
};

export default ConceptExpand;
