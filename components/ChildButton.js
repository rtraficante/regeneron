import React from "react";

const ChildButton = ({ concept, setSearchTerm }) => {
  return (
    <>
      {concept.children.map((child) => (
        <button
          className="text-blue-700 hover:underline"
          key={child.id}
          onClick={() => setSearchTerm(child.displayName)}
        >
          {child.displayName}
        </button>
      ))}
    </>
  );
};

export default ChildButton;
