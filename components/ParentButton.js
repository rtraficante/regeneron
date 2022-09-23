import React from "react";

const ParentButton = ({ concept, setSearchTerm }) => {
  return (
    <>
      {concept.parents.map((parent) => (
        <button
          className="text-blue-700 hover:underline"
          key={parent.id}
          onClick={() => setSearchTerm(parent.displayName)}
        >
          {parent.displayName}
        </button>
      ))}
    </>
  );
};

export default ParentButton;
