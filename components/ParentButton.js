import React from "react";

const ParentButton = ({ concept, setSearchTerm }) => {
  return (
    <>
      {concept.parents.map((parent, i) => (
        <div className="flex space-x-1" key={parent.id}>
          <button
            className="text-blue-700 hover:underline"
            onClick={() => setSearchTerm(parent.displayName)}
          >
            {parent.displayName}
          </button>
          {i !== concept.parents.length - 1 ? <p>|</p> : null}
        </div>
      ))}
    </>
  );
};

export default ParentButton;
