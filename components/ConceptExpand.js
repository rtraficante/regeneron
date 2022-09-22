import React from "react";

const ConceptExpand = ({ concept }) => {
  return (
    <div className="mx-auto w-full bg-gray-400 py-2 px-4 rounded-b flex justify-between items-center">
      <div>
        <h2>More Detail</h2>
        <p>Description: {concept.description}</p>
        <p>
          Alternative Names:{" "}
          {concept.alternativeNames ? concept.alternativeNames : "None"}
        </p>
      </div>
    </div>
  );
};

export default ConceptExpand;
