import React from "react";

const ChildButton = ({ concept, setSearchTerm }) => {
  return (
    <>
      {concept.children.map((child, i) => (
        <div className="flex space-x-1" key={child.id}>
          <button
            className="text-blue-700 hover:underline"
            onClick={() => setSearchTerm(child.displayName)}
          >
            {child.displayName}
          </button>
          {i !== concept.children.length - 1 ? <p>|</p> : null}
        </div>
      ))}
    </>
  );
};

export default ChildButton;
